package br.edu.alfaumuarama.hackathon.datasources;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.widget.ImageView;

import java.io.InputStream;
import java.net.URL;

public class DownloadImagem extends AsyncTask<String, Void, Bitmap> {

    ImageView imagem;

    public DownloadImagem(ImageView imagem) {
        this.imagem = imagem;
    }

    @Override
    protected Bitmap doInBackground(String... strings) {
        String link = strings[0];
        Bitmap bitmap = null;

        try {
            URL url = new URL(link);

            InputStream inputStream = url.openStream();

            bitmap = BitmapFactory.decodeStream(inputStream);
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return bitmap;
    }

    @Override
    protected void onPostExecute(Bitmap bitmap) {
        super.onPostExecute(bitmap);

        imagem.setImageBitmap(bitmap);
    }
}