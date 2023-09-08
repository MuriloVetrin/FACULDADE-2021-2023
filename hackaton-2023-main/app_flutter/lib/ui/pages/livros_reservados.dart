import 'package:app_flutter/models/livros.dart';
import 'package:app_flutter/models/editora.dart';
import 'package:app_flutter/models/autor.dart';
import 'package:app_flutter/ui/api/api.dart';
import 'package:app_flutter/ui/pages/detalhes_livros.dart';
import 'package:app_flutter/ui/widgets/global.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class LivrosReservados extends StatefulWidget {
  const LivrosReservados({Key? key});
  static const routeName = '/lista_reservados';

  @override
  _LivrosReservadosState createState() => _LivrosReservadosState();
}

class _LivrosReservadosState extends State<LivrosReservados> {
  late Future<List<Livro>> livros;
  late GlobalData globalData;
  @override
  void initState() {
    super.initState();
    globalData = Provider.of<GlobalData>(context, listen: false);
    fetchLivros(globalData.login);
  }

  Future<void> fetchLivros(String id) async {
    final api = ApiRemote();
    livros = api.getReservas(id);
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
        title: const Text('Lista de Livros'),
      ),
      body: FutureBuilder<List<Livro>>(
        future: livros,
        builder: (BuildContext context, AsyncSnapshot<List<Livro>> snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(
              child: CircularProgressIndicator(),
            );
          } else if (snapshot.hasError) {
            return Center(
              child: Text('Erro ao carregar os livros'),
            );
          } else if (snapshot.hasData) {
            final List<Livro>? listaLivros = snapshot.data;
            return ListView.builder(
              itemCount: listaLivros?.length ?? 0,
              itemBuilder: (BuildContext context, int index) {
                final livro = listaLivros?[index];
                return ListTile(
                  title: Text(livro!.title),
                  onTap: () => _navigateToDetalhesLivro(livro),
                );
              },
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