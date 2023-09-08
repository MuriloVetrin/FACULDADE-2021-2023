import 'package:app_flutter/helpers/extensions.dart';

class Autor {
  int id;
  String name;
  String address;
  String city;
  String uf;
  int phone;

  Autor({
    required this.id,
    required this.name,
    required this.address,
    required this.city,
    required this.uf,
    required this.phone,
  });

  factory Autor.fromJson(Map<String, dynamic> json) {
    return Autor(
      id: json['id'],
      name: json['name'],
      address: json['address'],
      city: json['city'],
      uf: json['uf'],
      phone: json['phone'],
    );
  }
}