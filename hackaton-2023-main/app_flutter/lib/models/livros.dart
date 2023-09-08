import 'package:app_flutter/models/autor.dart';
import 'package:app_flutter/models/editora.dart';

class Livro {
  int id;
  String title;
  String subtitle;
  String isbn;
  String place;
  int year;
  int publisherId;
  int authorId;
  Autor author;
  Editora publisher;

  Livro({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.isbn,
    required this.place,
    required this.year,
    required this.publisherId,
    required this.authorId,
    required this.author,
    required this.publisher,
  });

  factory Livro.fromJson(Map<String, dynamic> json) {
    return Livro(
      id: json['id'],
      title: json['title'],
      subtitle: json['subtitle'],
      isbn: json['isbn'],
      place: json['place'],
      year: json['year'],
      publisherId: json['publisher_id'],
      authorId: json['author_id'],
      author: Autor.fromJson(json['author']),
      publisher: Editora.fromJson(json['publisher']),
    );
  }
}