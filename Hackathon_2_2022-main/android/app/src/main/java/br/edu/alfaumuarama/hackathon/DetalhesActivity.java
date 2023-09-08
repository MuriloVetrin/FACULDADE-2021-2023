package br.edu.alfaumuarama.hackathon;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import br.edu.alfaumuarama.hackathon.datasources.DownloadImagem;

public class DetalhesActivity extends AppCompatActivity {

    TextView nome, species, status;
    ImageView imagem;
    Button btnVoltar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhes);

        nome = findViewById(R.id.nome);
        species = findViewById(R.id.species);
        status = findViewById(R.id.status);
        imagem = findViewById(R.id.imageView);
        btnVoltar = findViewById(R.id.btnVoltar);

        Intent dadosRecebidos = getIntent();
        if (dadosRecebidos != null) {

            Bundle params = dadosRecebidos.getExtras();
            if (params != null) {

                nome.setText(params.getString("nome"));
                species.setText(params.getString("species"));
                status.setText(params.getString("status"));

                new DownloadImagem(imagem).execute(params.getString("imagem"));
            }
        }

        btnVoltar.setOnClickListener(view -> onBackPressed());
    }
}