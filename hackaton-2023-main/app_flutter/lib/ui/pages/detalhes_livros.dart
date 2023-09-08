import 'package:app_flutter/models/livros.dart';
import 'package:flutter/material.dart';

class DetalhesLivro extends StatelessWidget {
  final Livro livro;

  DetalhesLivro({required this.livro});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detalhes do Livro'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildDetalhe('ID:', livro.id.toString(), 20, FontWeight.bold),
                    _buildDetalhe('Título:', livro.title, 20, FontWeight.bold),
                    _buildDetalhe('Subtítulo:', livro.subtitle, 20, FontWeight.bold),
                    _buildDetalhe('ISBN:', livro.isbn, 20, FontWeight.bold),
                    _buildDetalhe('Local:', livro.place, 20, FontWeight.bold),
                    _buildDetalhe('Ano:', livro.year.toString(), 20, FontWeight.bold),
                    SizedBox(height: 10),
                    _buildDetalhe('Autor:', '', 20, FontWeight.bold),
                    _buildDetalhe('ID:', livro.author.id.toString(), 16, FontWeight.normal),
                    _buildDetalhe('Nome:', livro.author.name, 16, FontWeight.normal),
                    _buildDetalhe('Endereço:', livro.author.address, 16, FontWeight.normal),
                    _buildDetalhe('Cidade:', livro.author.city, 16, FontWeight.normal),
                    _buildDetalhe('UF:', livro.author.uf, 16, FontWeight.normal),
                    _buildDetalhe('Telefone:', livro.author.phone.toString(), 16, FontWeight.normal),
                    SizedBox(height: 10),
                    _buildDetalhe('Editora:', '', 20, FontWeight.bold),
                    _buildDetalhe('ID:', livro.publisher.id.toString(), 16, FontWeight.normal),
                    _buildDetalhe('Nome:', livro.publisher.name, 16, FontWeight.normal),
                    _buildDetalhe('Endereço:', livro.publisher.address, 16, FontWeight.normal),
                    _buildDetalhe('Cidade:', livro.publisher.city, 16, FontWeight.normal),
                    _buildDetalhe('UF:', livro.publisher.uf, 16, FontWeight.normal),
                    _buildDetalhe('Telefone:', livro.publisher.phone.toString(), 16, FontWeight.normal),
                    SizedBox(height: 10),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDetalhe(String label, String value, double fontSize, FontWeight fontWeight) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: TextStyle(fontSize: fontSize, fontWeight: fontWeight),
        ),
        SizedBox(width: 5),
        Text(
          value,
          style: TextStyle(fontSize: fontSize, fontWeight: fontWeight),
        ),
        SizedBox(height: 10),
      ],
    );
  }
}