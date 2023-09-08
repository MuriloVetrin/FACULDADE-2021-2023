import 'package:app_flutter/models/alunos.dart';
import 'package:app_flutter/models/livros.dart';
import 'package:app_flutter/ui/api/api.dart';
import 'package:app_flutter/ui/pages/detalhes_livros.dart';
import 'package:app_flutter/ui/widgets/global.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class DetalhesAluno extends StatefulWidget {
  const DetalhesAluno({Key? key});
  static const routeName = '/detalhes_aluno';

  @override
  _DetalhesAlunoState createState() => _DetalhesAlunoState();
}

class _DetalhesAlunoState extends State<DetalhesAluno> {
  late Future<Alunos> aluno;
  late GlobalData globalData;
  @override
  void initState() {
    super.initState();
    globalData = Provider.of<GlobalData>(context, listen: false);
    fetchLivros(globalData.login);
  }

  Future<void> fetchLivros(String id) async {
    final api = ApiRemote();
    aluno = api.getAlunoById(id);
    setState(() {});
  }

  void _navigateToDetalhesLivro(Livro livro) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => DetalhesLivro(livro: livro),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Detalhes do aluno'),
      ),
      body: FutureBuilder<Alunos>(
        future: aluno,
        builder: (BuildContext context, AsyncSnapshot<Alunos> snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else if (snapshot.hasError) {
            return Center(
              child: Text('Erro ao carregar os livros'),
            );
          } else if (snapshot.hasData) {
            final Alunos? aluno = snapshot.data;
            return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: 10),
            Text(
              'RA: ${aluno?.ra ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Nome: ${aluno?.nome ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Endereço: ${aluno?.endereco ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Cidade: ${aluno?.cidade ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'UF: ${aluno?.uf ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Telefone: ${aluno?.telefone ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
            SizedBox(height: 10),
            Text(
              'Curso: ${aluno?.curso ?? ''}',
              style: TextStyle(fontSize: 16),
            ),
          ],
        );
          } else {
            return Center(
              child: Text('Nenhum livro encontrado'),
            );
          }
        },
      ),
    );
  }
}