import 'package:flutter/material.dart';

class Botao extends StatelessWidget {
  final String texto;
  final VoidCallback onPressed;

  const Botao({required this.texto, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0), // Adicionando padding desejado
      child: ElevatedButton(
        onPressed: onPressed,
        child: Text(texto),
      ),
    );
  }
}