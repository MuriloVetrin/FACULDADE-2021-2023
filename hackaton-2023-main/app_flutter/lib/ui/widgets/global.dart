import 'package:flutter/foundation.dart';

class GlobalData extends ChangeNotifier {
  String login = '';

  void atualizarVariavel(String novoValor) {
    login = novoValor;
    notifyListeners();
  }
}