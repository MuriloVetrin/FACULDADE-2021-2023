package br.edu.alfaumuarama.hackathon;
import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;

import br.edu.alfaumuarama.hackathon.datasources.BuscarDadosWeb;

public class Tela2Activity extends ListActivity {

    private ArrayList<HashMap<String, String>> listaDados;
    private String id = "1";
    private Button btnVoltar2, esquerda, direita;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tela2);
        esquerda = findViewById(R.id.btnEsquerda);
        direita = findViewById(R.id.btnDireita);
        btnVoltar2 = findViewById(R.id.btnVoltar2);

        Intent dadosRecebidos = getIntent();

        if (dadosRecebidos != null) {

            Bundle params = dadosRecebidos.getExtras();
            if (params != null) {
                id = params.getString("id");
            }
        }
        btnVoltar2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent tela02 = new Intent(Tela2Activity.this, MainActivity.class);


                startActivity(tela02);
            }
        });


        esquerda.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    listaDados = new BuscarDadosWeb().execute(Config.urlApi + id).get();
                } catch (Exception e) {
                    e.printStackTrace();
                }
                Intent telaDetalhes = new Intent(Tela2Activity.this, Tela2Activity.class);


                Bundle params = new Bundle();
                if (id != null) {
                    int pageInt = Integer.parseInt(id) - 1;
                    id = String.valueOf(pageInt);
                }

                if (id == "1") {
                    params.putString("id", "1");
                } else {
                    params.putString("id", id);
                }

                telaDetalhes.putExtras(params);

                startActivity(telaDetalhes);
            }
        });

        direita.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    listaDados = new BuscarDadosWeb().execute(Config.urlApi + id).get();
                } catch (Exception e) {
                    e.printStackTrace();
                }
                Intent telaDetalhes = new Intent(Tela2Activity.this, Tela2Activity.class);
                Bundle params = new Bundle();


                if (id != null) {
                    int pageInt = Integer.parseInt(id) + 1;
                    id = String.valueOf(pageInt);
                }

                if (id == "42") {
                    params.putString("id", "1");
                } else {
                    params.putString("id", id);
                }

                params.putString("id", id);

                telaDetalhes.putExtras(params);

                startActivity(telaDetalhes);
            }
        });

        try {
            listaDados = new BuscarDadosWeb().execute(Config.urlApi + id).get();
        } catch (Exception e) {
            e.printStackTrace();
        }

        String texto = listaDados.get(0).get("nome");
        Toast.makeText(this, texto, Toast.LENGTH_LONG).show();

        ListAdapter adapter = new SimpleAdapter(
                this,
                listaDados,
                R.layout.listview_modelo,
                new String[]{"nome"},
                new int[]{R.id.txtNome}
        );

        setListAdapter(adapter);
    }


    @Override
    protected void onListItemClick(ListView l, View v, int position, long id) {
        super.onListItemClick(l, v, position, id);

        HashMap<String, String> c137 = listaDados.get(position);

        Intent telaDetalhes = new Intent(Tela2Activity.this, DetalhesActivity.class);

        Bundle params = new Bundle();
        params.putString("nome", c137.get("nome"));
        params.putString("species", c137.get("species"));
        params.putString("status", c137.get("status"));
        params.putString("imagem", c137.get("imagem"));

        telaDetalhes.putExtras(params);

        startActivity(telaDetalhes);
    }

}



