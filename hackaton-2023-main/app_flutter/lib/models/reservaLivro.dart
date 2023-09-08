import 'package:app_flutter/helpers/extensions.dart';

class ReservaLivro {
  String codigo;
  String aluno;
  String livro;
  String dataInicio;
  String dataFinal;

  ReservaLivro({
    required this.codigo,
    required this.aluno,
    required this.livro,
    required this.dataInicio,
    required this.dataFinal,
  });

  factory ReservaLivro.fromJson(Map<String, dynamic> json) {
    return ReservaLivro(
      codigo: json['codigo'],
      aluno: json['aluno'],
      livro: json['livro'],
      dataInicio: json['dataInicio'],
      dataFinal: json['dataFinal'],
    );
  }
}
