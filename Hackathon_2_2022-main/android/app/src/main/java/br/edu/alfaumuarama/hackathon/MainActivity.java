package br.edu.alfaumuarama.hackathon;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import android.content.Intent;

import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    ImageView imgLogo;
    Button btnLista;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imgLogo = findViewById(R.id.imgLogo);

        btnLista = findViewById(R.id.btnLista);

        btnLista.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent tela02 = new Intent(MainActivity.this, Tela2Activity.class);


                startActivity(tela02);
            }
        });

    }

}
