import 'package:app_flutter/ui/pages/home_page.dart';
import 'package:app_flutter/ui/pages/livros_reservados.dart';
import 'package:app_flutter/ui/pages/loginPage.dart';
import 'package:app_flutter/ui/pages/lista_livros.dart';
import 'package:app_flutter/ui/pages/detalhes_alunos.dart';
import 'package:app_flutter/ui/widgets/global.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => GlobalData(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Biblioteca UniAlfa',
      debugShowCheckedModeBanner: false,
      initialRoute: LoginPage.routeName,
      routes: {
        '/': (context) => HomeScreen(),
        LoginPage.routeName: (context) => LoginPage(),
        ListaLivros.routeName: (context) => ListaLivros(),
        LivrosReservados.routeName: (context) => LivrosReservados(),
        DetalhesAluno.routeName: (context) => DetalhesAluno(),
      },
    );
  }
}
