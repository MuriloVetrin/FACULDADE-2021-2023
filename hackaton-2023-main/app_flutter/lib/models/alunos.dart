class Alunos {
  int codigo;
  String ra;
  String nome;
  String endereco;
  String cidade;
  String uf;
  int telefone;
  String curso;

  Alunos({
    required this.codigo,
    required this.ra,
    required this.nome,
    required this.endereco,
    required this.cidade,
    required this.uf,
    required this.telefone,
    required this.curso,
  });

  factory Alunos.fromJson(Map<String, dynamic> json) {
    return Alunos(
      codigo: int.parse(json['id'].toString()),
      ra: json['ra'],
      nome: json['name'],
      endereco: json['address'],
      cidade: json['city'],
      uf: json['uf'],
      telefone: int.parse(json['phone'].toString()),
      curso: json['course']['name'],
    );
  }
}
