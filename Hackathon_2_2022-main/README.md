# Hackathon_2_2022
Hackathon criado para consumir API's.

Rhuan Zucarelli |
Murilo Trindade

**O que acontece dentro do projeto:**

O projeto consiste em um site desenvolvido em react que exibe uma API contendo dados de personagens do Rick and Morty, 
essa API também está ligado ao um aplicativo Android que assim como o site também exibe essa mesma lista de personagens 
com informações de cada um deles.

# **REACT:**

**Para rodar precisa dar um : npm install e depois um npm start**

ela é feita da seguinte maneira, ele é composto pelo:

* **README.md:** Explica para o projeto o que ele tem que fazer para poder rodar, o que tem que fazer, o que tem que rodar, como vai baixar;

* **package.json:** É onde está localizado todas as configurações do react, como irá funcionar, os scripts, o browser;

* **package-lock.json:** É praticamente a mesma coisa que o package.json, só que com algumas extensões a mais como o babel, que é uma extensão de linguagem;

* **node_modules:** contém todas as dependências instaladas para o seu projeto;

* **.gitignore:** Ele vai ser um filtro para retirar coisas que não são nescessarias para subir no Git, como a node modules, que quando você da o comando para rodar ela já instala na sua maquina;

* **roots:** Serve para roterizar o que vai aparecer na sua tela;

* **App.jsx:** Ele importa toda a parte de rota e faz o percurso que elas vão seguir para jogar no index.jsx;

* **index.js:** é onde irá renderizar o App.jsx, quando a aplicação for construida ela seleciona o index e manda para o index.html, que fica dentro da pasta public;

* **pages:** Na pasta pages é onde estará localizado todas as paginas, como home, sobre;

* **footer:** Ano de desenvolvimento e quem desenvolveu;

* **home:** Onde é configurado a parte de puxar a API e como será tratado na tela;

* **sobre:** É a pagina que explica como foi criado o projeto;

* **scr:** Está a pasta componentes que é onde estão os componentes que mostram como estão configurado os cards, como tamanho descrição, como o NavBar;

* **Cards:** São basicamente o reflexo dos personagens;

* **NavBar:** Aparece toda a parte de roteirização e é a "onde" você clica para escolher qual pagina você quer ir;

* **ação:** É a pagina para passar as paginas, como são muitos personagens, não caberia tudo de uma vez;

* **public:**  Renderiza na tela para o publico visualizar;

# **Android:** 

**Para rodar precisa ligar o emulador e mandar rodar,**

Ele funciona assim: existe uma pasta app, dentro dela a o a pasta java, nela tem  3 com o nome do package, a primeira pasta é a onde está praticamente todo o projeto, contendo: 


* **Config:** Ele linka a API com o APP;

* **MainActivity:** É a pagina home, com um resumo do desenho e com um botão que leva ao Tela2Activity;

* **Tela2Activity:** Nele é listado os dados criando o adaptador que ir configurar como os dados são carregados, contexto que o objeto está, local onde estão os dados, item que servira de modelo para cada célula, quais campos dos dados serão carregados, objetos de tela onde dados vão ser carregados. Também será adiconado o adaptador criado na listView da tela carregando os dados do item selecionado na lista pelo index, criando o caminho para abrir a tela de detalhes, criando os parametros e adicionando os dados do item selecionado, adicionando os parametros no caminho de tela, abrindo a tela detalhes;

* **DetalhesActivity:** Que mostra a imagem e o nome dos personagens capturando o caminho de tela utilizado para abrir esta tela.


 **Ainda dentro do package, tem uma pasta chamada datasources, nela contem 2 arquivos:**
 
* **BuscarDadosWeb:** Nele ele pega os dados da API e lista eles através do ArrayList<HashMap<String, String>> , capturando a primeira posição do vetor de strings, criando uma URL a partir do link recebido, criando uma conexão a partir da URL, Capturando o retorno que veio da conexão e salvando na memória e pegando o retorno dela para ser lido no buffer, enquanto existir dados para ler no reader ele salva op valor na variável linha e mudar o cursor para a próxima linha, faz isso ate o final do arquivo. Transforma o texto com os dados vindos da API em um objeto JSON, captura o vetor RESULTS que existe no objeto JSON, rodar toda a lista de objetos do RESULTS pega o item atual da lista e transforma em objeto JSON mapeando os campos do Array JSON para o Mapa de dados Nome, url e imagem;

* **DownloadImagem:** Ele liga com o imagem view e na public Download ele mapeia criando a URL a partir do link recebido, buscando os dados da URL e salvando em memória, criando um bitmap a partir dos dados salvos em memória 
depois ele retorna o bitmap baixado acima, no objeto de imagem da tela.

**Fora da pasta java tem uma chamada res, dentro dela existe a pasta layout com os seguintes arquivos:**

* **activity_detalhes.xml:** Com uma pagina responsável por mostrar o nome e a imagem do personagem;

* **activity_main.xml:** Que mostra a lista de personagem;

* **listview_modelo.xml:** Puxa os dados.
