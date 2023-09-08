extension stringExtension on String{
  int toInt({int vlrPadrao = 0}){
    try{
      return int.parse(this);
    }on Exception catch(_){
      return vlrPadrao;
    }
  }
}