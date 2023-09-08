import 'package:app_flutter/helpers/extensions.dart';

class Login {
  int id;
  String ra;

  Login({
    required this.id,
    required this.ra,
  });

  factory Login.fromMap(Map dados ) {
    return Login(
     id: dados['id'].toString().toInt(),
      ra: dados['ra'],
    );
  }

   Map<String, dynamic> toMap() {
    return {
     'id': id,
     'ra': ra,
    };
  }


  factory Login.fromJson(Map<String, dynamic> json,) => Login(
        id: json["id"].toString().toInt(),
        ra: json["ra"].toString(),
      );
}
