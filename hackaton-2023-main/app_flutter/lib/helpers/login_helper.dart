import 'package:app_flutter/datasources/local/banco_dados.dart';
import 'package:app_flutter/models/login.dart';
import 'package:sqflite/sqflite.dart';

class LoginHelper {
  static const createSQL = '''
    CREATE TABLE IF NOT EXISTS Login (
      id INTEGER PRIMARY KEY,
      ra TEXT
    )
  ''';


  void inserir(Login login) async {
    Database db = await BancoDados().db;

    await db.insert('Login', login.toMap());

    BancoDados().fecharDb();
  }

  void alterar(Login login) async {
    Database db = await BancoDados().db;

    await db.update(
      'Login',
      login.toMap(),
      where: 'ra = ?',
      whereArgs: [login.ra]
    );

    BancoDados().fecharDb();
  }

  void apagar(Login login) async {
    Database db = await BancoDados().db;

    await db.delete('Login',
      where: 'ra = ?',
      whereArgs: [login.ra]
    );

    BancoDados().fecharDb();
  }

   Future<Login?> getLogin() async {
    Database db = await BancoDados().db;

    List listaDados = await db.query(
      'Login',
    );

    if (listaDados.isNotEmpty) {
      return Login.fromMap(listaDados.firstOrNull);
    }

    return null;
  }
}