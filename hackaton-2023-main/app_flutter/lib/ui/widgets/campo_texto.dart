import 'package:flutter/material.dart';

class CampoTexto extends StatelessWidget {
  final TextEditingController controlador;
  final String texto;

  const CampoTexto(this.controlador, this.texto, {Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: TextField(
        controller: controlador,
        decoration: InputDecoration(labelText: texto),
      ),
    );
  }
}
