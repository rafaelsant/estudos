MODELO OSI  |
------------|
aplicação   |	
apresentação|
sessão      |
transporte  |
rede        |
enlace      |
fisica      |
____________|

## Física:
Todo tipo de sinal, elétrico, ótico, taxa de transmissão, meio físico de transmissão. Todos os detalhes inerentes à condição física do sinal são de atribuição da camada física

## Enlace:
Sua principal função é realizar o controle de erros que podem acontecer nas transmissões da camada física.
Uma das estratégias de solução é que o receptor possa detectar que houve um erro e o transmissor transmita a mensagem novamente ao receptor, para que nessa nova tentativa a mensagem possa chegar sem erros.
Também é de responsabilidade de camada de enlace o controle de acesso ao meio, principalmente em canais ou meios que são compartilhados com multiplos usuários

## Camada de rede:
A camada de rede do modelo OSI tem como função principal o transporte de pacotes entre sistemas finais da rede por meio de três funções importantes:

### 1- Determinação de caminhos:
Rota escolhida pelos pacotes entre origem e destino, utilizando um algoritmo de roteamento;

### 2- Comutação:
Mover pacotes entre as portas de entradas e saída dos roteadores;

### 3- Estabelecimento de conexões:
Algumas arquiteturas de redes necessitam o estabelecimento de circuitos virtuais antes da transmissão de dados.

Existem dois principais serviços possíveis para entregar pacotes à seus respectivos destinos:

### - Redes de Circuitos Virtuais (VC):
 estabelece uma conexão antes de enviar os dados, libera a conexão após a troca de dados e cada pacote transporta um identificador do VC, não transporta o endereço completo do destino. Sinalização: Usada para estabelecer, manter e encerrar o VC.

### - Redes de Datagramas: 
Não estabelece conexões, não há informação de estado de conexão dos roteadores e os pacotes transportam o endereço de destino (pacotes com o mesmo destino podem seguir diferentes rotas). O principal aspecto que deve ser observado nessa camada é a execução do roteamento dos pacotes entre fonte e destino, principalmente quando existem caminhos diferentes para conectar entre si dois nós da rede. Em redes de longa distância é comum que a mensagem chegue do nó fonte ao nó destino passando por diversos nós intermediários no meio do caminho e é tarefa do nível de rede escolher o melhor caminho para essa mensagem.

A escolha da melhor rota pode ser baseada em tabelas estáticas, que são configuradas na criação da rede e são raramente modificadas; pode também ser determinada no início de cada conversação, ou ser altamente dinâmica, sendo determinada a cada novo pacote, a fim de refletir exatamente a carga da rede naquele instante. Se muitos pacotes estão sendo transmitidos através dos mesmos caminhos, eles vão diminuir o desempenho global da rede, formando gargalos. O controle de tais congestionamentos também é tarefa da camada de rede.

As funções exercidas na camada de rede do modelo OSI estão listados abaixo:

Tráfego direção ao destino final
Dirigindo; lógico endereços de rede e serviços endereços
Encaminhamento de funções; descoberta e seleção de rotas
Comutação de pacotes
Controle de sequencia de pacotes
Detecção de erro End-to-end dos dados (a partir do emissor para o receptor de dados).
Controle de congestionamento
Controle de fluxo
Portal de serviços
É a camada responsável por encaminhar os dados entre diversos endereços de redes, como se fosse uma central de correios, fazendo com que os dados cheguem a seu destino.

## Camada de transporte:
Primeira camada com visão fim à fim. Controla o tipo de serviço a ser utilizado, faz o controle do fluxo de mensagem, de congestionamento, sequenciação (realizar ordenação) TCP e UDP funcionam nessa camada.

## Camada de sessão e apresentação:
São camadas que na prática não são muito utilizadas, a camada de apresentação tem como principal função promover a trasnformação dos dados para que eles sejam mais bem recebidos de forma que fiquem mais adequados à aplicação.
Acabam na prática sendo absorvidas pela camada de aplicação
## Aplicação:
A camada de aplicação é um termo utilizado em redes de computadores para designar uma camada de abstração que engloba protocolos que realizam a comunicação fim-a-fim entre aplicações. No modelo OSI, é a sétima camada. É responsável por prover serviços para aplicações de modo a separar a existência de comunicação em rede entre processos de diferentes computadores. No modelo TCP/IP é a camada cinco (podendo ser a número quatro dependendo do autor) que engloba também as camadas de apresentação e sessão no Modelo OSI.
É a camada mais próxima do usuário, na qual é a encarregada quando o cliente acessa o e-mail, páginas WEB, mensagens instantâneas, Login remoto, vídeo-clipes, videoconferência, etc. A arquitetura de aplicação permite que o utilizador acesse essas funções. Logo, existem três tipos de arquitetura: [1].

* Arquitetura cliente-servidor;
* Arquitetura P2P;
* Arquitetura híbrida de cliente-servidor e P2P;
Os protocolos da camada de aplicação atuam junto com os protocolos da camada de transporte (TCP/IP e UDP). Assim, os principais protocolos de aplicação são:
### TELNET, FTP, TFTP, SMTP, POP, IMAP, DNS, HTTP, HTTPS, RTP, MIME e TLS.[2].

Como nas outras camadas do modelo, os protocolos da camada de aplicação contam com os da camada inferior para realizar o transporte dos dados através da rede - os dados do protocolo de aplicação são encapsulados no protocolo da camada inferior.


