package br.edu.alfaumuarama.hackathon.datasources;

import android.os.AsyncTask;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;

import br.edu.alfaumuarama.hackathon.Config;

public class BuscarDadosWeb extends
        AsyncTask<String, Void, ArrayList<HashMap<String, String>>> {

    @Override
    protected ArrayList<HashMap<String, String>> doInBackground(String... strings) {
        ArrayList<HashMap<String, String>> listaDados = new ArrayList<>();

        try {

            String link = strings[0];

            URL url = new URL(link);

            URLConnection connection = url.openConnection();

            InputStreamReader inputStream =
                    new InputStreamReader(connection.getInputStream());

            BufferedReader reader = new BufferedReader(inputStream);

            String dados = "";
            String linha;

            while ((linha = reader.readLine()) != null) {

                dados += linha;
            }

            JSONObject json = new JSONObject(dados);

            JSONArray lista = new JSONArray(json.getString("results"));

            for (int i = 0; i < lista.length(); i++) {

                JSONObject item = (JSONObject)lista.get(i);

                HashMap<String, String> mapaDados = new HashMap<>();
                mapaDados.put("nome", item.getString("name"));
                mapaDados.put("species", item.getString("species"));
                mapaDados.put("status", item.getString("status"));
                mapaDados.put("url", item.getString("url"));
                mapaDados.put("imagem", Config.linkImagem + item.getString("id") + ".jpeg");

                listaDados.add(mapaDados);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        return listaDados;
    }
}
