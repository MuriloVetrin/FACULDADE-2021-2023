import 'dart:convert';
import 'package:app_flutter/models/alunos.dart';
import 'package:app_flutter/models/autor.dart';
import 'package:app_flutter/models/editora.dart';
import 'package:app_flutter/models/livros.dart';
import 'package:http/http.dart' as http;
import 'globais.dart';

class ApiRemote {
  Future<List<Livro>> getLivros() async {
    final response = await http.get(Uri.parse(Globais.LinkGetLivros));
    final json = jsonDecode(response.body) as List<dynamic>;
    return json.map((e) => Livro.fromJson(e)).toList();
  }
  Future<List<Livro>> getReservas(String id) async {
    final response = await http.get(Uri.parse('${Globais.LinkGetReserva}/$id'));
    final json = jsonDecode(response.body) as List<dynamic>;
    return json.map((e) => Livro.fromJson(e)).toList();
  }

  Future<Autor> getAutorById(int id) async {
    final response = await http.get(Uri.parse('${Globais.LinkGetAutor}/$id'));
    final json = jsonDecode(response.body);
    return Autor.fromJson(json);
  }

  Future<Alunos> getAlunoById(String id) async {
    final response = await http.get(Uri.parse('${Globais.LinkGetAluno}$id'));
    final json = jsonDecode(response.body);
    return Alunos.fromJson(json);
  }

  Future<Editora> getEditoraById(int id) async {
    final response = await http.get(Uri.parse('${Globais.LinkGetEditora}/$id'));
    final json = jsonDecode(response.body);
    return Editora.fromJson(json);
  }

}
