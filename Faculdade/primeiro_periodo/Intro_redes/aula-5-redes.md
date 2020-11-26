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
Todo tipo de sinal, elétrico, ótico, taxa de transmissão, meio físico de transmissão. Todos os detalhes inerentes à condição física do sinal são de atribuição da camada física.
A camada física é responsável pela geração e transmissão do sinal propriamente dito, que é levado de um transmissor ao receptor correspondente. Eles estão conectados por um enlace físico de transmissão.
Para ativar, manter e desativar o link físico entre sistemas finais, a camada física define especificações:

* Elétricas;
* Mecânicas;
* Funcionais;
* De procedimentos.

A partir disso, são determinadas características como:

* Níveis de voltagem;
* Temporização de alterações de voltagem;
* Taxas de dados físicos;
* Distâncias máximas de transmissão;
* Conectores físicos;
* Outros atributos similares.

## Banda passante:
Trata-se do conjunto contíguo de frequências de sinal que, ao passarem pelo canal de comunicação, são praticamente inalteradas.
As componentes de frequência do sinal que estão além da banda passante sofrem forte atenuação e são eliminadas.
Podemos imaginar o canal de comunicação como um filtro que deixa passar as componentes dentro da faixa de frequências especificadas pela banda passante e bloqueia as demais componentes fora da banda passante.
Um sinal digital apresenta variações abruptas na sua intensidade, o que pode ser representado no domínio da frequência por componentes de frequência muito elevados.
Assim, ao passar por um canal de comunicação, o sinal sofre distorções causadas pela banda passante do canal.
Quanto maior for a banda passante, menor será o efeito de filtragem do canal. Com isso, o receptor terá mais facilidade para interpretar a informação contida no sinal.
### Taxa de transmissão:
Outro conceito importante é a taxa de transmissão (bit rate) de um canal ou meio físico, que é dada pela quantidade de bits que esse meio consegue transmitir por segundo.

Essa taxa pode ser expressa em bits por segundo (bps), kilobits por segundo (Kbps), megabits por segundo (Mbps),
gigabits por segundo (Gbps).
### Quanto maior a taxa  	Maior deverá ser a          Causando pouca
###   de transmissão	 ->   largura de banda do canal -> distorção no sinal	
###			     para suportar essa taxa

O sinal recebido pelo receptor é diferente do sinal que foi transmitido, pois sofreu todos os efeitos introduzidos pelo canal de comunicação.

Esses efeitos degradam o sinal e podem gerar erros de bits, ou seja, erros de interpretação na decodificação do sinal pelo receptor, em razão das alterações sofridas.
### MEIOS FÍSICOS DE TRANSMISSÃO
Os meios físicos de transmissão que compõem o canal de comunicação são classificados em:
##### GUIADOS:
* Sinal é confinado
##### NÃO GUIADOS:
* Transmissão em espaço aberto
##### Meios de transmissão guiados
São geralmente empregados como meios físicos guiados o cabo de par trançado, o cabo coaxial ou o cabo de fibra óptica

## Enlace:
Sua principal função é realizar o controle de erros que podem acontecer nas transmissões da camada física.
Uma das estratégias de solução é que o receptor possa detectar que houve um erro e o transmissor transmita a mensagem novamente ao receptor, para que nessa nova tentativa a mensagem possa chegar sem erros.
Também é de responsabilidade de camada de enlace o controle de acesso ao meio, principalmente em canais ou meios que são compartilhados com multiplos usuários.
A camada de enlace está situada imediatamente acima da camada física. Elas atuam juntas de forma direta.
Os erros na recepção dos sinais são previstos e a camada física por si só não pode recuperá-los, cabendo à camada de enlace controlá-los.
A camada de enlace é subdividida em duas subcamadas: LLC (Controle de Enlace Lógico) e MAC (Controle de Acesso ao Meio). Suas funções são:
* Delimitação de quadros
* Controle de erros
* Controle de fluxo
* Controle de acesso ao meio

#### DELIMITAÇÃO DE QUADROS (ENQUADRAMENTO)
Para o melhor desempenho de suas funções, a camada de enlace utiliza o quadro como unidade de dados.
O quadro é um conjunto de bytes de informação que pode variar de tamanho conforme o protocolo a ser utilizado.

DELIMITAÇÃO DE QUADROS (ENQUADRAMENTO)
Para o melhor desempenho de suas funções, a camada de enlace utiliza o quadro como unidade de dados.

O quadro é um conjunto de bytes de informação que pode variar de tamanho conforme o protocolo a ser utilizado.

Suponhamos que determinado transmissor tenha uma quantidade muito grande de dados para transmitir ao receptor. Ao final dessa transmissão, percebe-se que, em algum momento, houve um erro no sinal recebido por conta dos problemas do canal.

Dessa forma, o transmissor precisaria repetir toda a transmissão para garantir a informação correta ao receptor. No entanto, se dividíssemos essa grande quantidade de dados em conjuntos menores (quadros) e transmitíssemos quadro após quadro, havendo um erro na transmissão, seria possível identificar qual quadro foi afetado.
Com isso, só repetiríamos a transmissão desse quadro, tornando o controle de erros muito mais eficiente.
Entendendo a importância da utilização de quadros no nível de enlace, verificaremos como criar os quadros, ou seja, como particionar os dados delimitando o início e o fim de cada quadro.
Existem basicamente quatro técnicas para realizar o enquadramento dos dados e, em alguns casos, as técnicas são combinadas:
##### * Contagem de caractere:
Na técnica de contagem de caractere, a ideia é adicionar um campo no início do quadro, informando o número total de caracteres presentes.
Ao receber o quadro, o receptor (RX) lê o campo de contagem e, a partir de então, consegue determinar onde está o final do quadro.
O problema dessa técnica simples é que, se houver um erro justamente nesse campo de contagem, o transmissor (TX) e o receptor (RX) terão interpretações diferentes sobre os quadros e perderão completamente o sincronismo.
##### * Enquadramento por caractere:
Na técnica de enquadramento por caractere, a ideia é utilizar caracteres especiais para indicar o início (STX) e o fim do quadro (ETX). O transmissor insere essas marcas. Com isso, o receptor fica sabendo exatamente onde começa e termina cada quadro.
Além disso, outros campos são incluídos no quadro, como os campos de sincronização (SYN), cabeçalho (HEADER) e códigos para verificação de erros (CRC). 
Uma dificuldade que pode ocorrer com essa técnica é que o campo de dados representa as informações do usuário, e a camada de enlace não tem controle sobre elas. Assim, pode estar presente no campo de dados o padrão idêntico ao do caractere ETX. Ao receber o quadro e percorrê-lo, o receptor interpretaria esse ETX como fim do quadro, o que seria um erro de interpretação.
Uma desvantagem da técnica de enquadramento por caractere é ser orientada completamente pela existência e pelo reconhecimento de caracteres. Uma alternativa similar a essa é o enquadramento por bit, onde não há a necessidade de se trabalhar com caracteres, mas, sim, com bits de dados.
##### * Enquadramento por bit:
Nesta técnica, o delimitador de quadros é o flag – sequência padrão de bits, geralmente 01111110. Cada quadro começa e termina com uma marca flag. Havendo falta de sincronismo por algum motivo, tudo o que o receptor tem a fazer é procurar por um flag para ficar sincronizado com o transmissor novamente.
De forma análoga à técnica anterior, aqui também ocorre o stuffing. O transmissor percorre o campo de DADOS todo e, ao perceber uma sequência de 5 bits “1”, ele insere um bit “0”, para quebrar o padrão de flag. Ao percorrer o quadro e identificar 5 bits “1” seguidos, o receptor fica alerta; se o próximo bit for “0”, ele sabe que esse bit foi inserido pelo transmissor, caso contrário (o próximo bit for “1”) ele sabe que se trata de um delimitador de quadro, flag.
##### * Violação de códigos do nível físico:
A última técnica de enquadramento estudada é conhecida como violação de códigos do nível físico. A ideia é bastante simples: na transmissão do sinal no meio físico, o bit “1” é representado por alguma característica ou variação do sinal, e o bit “0”, por outra.
Se o sinal puder apresentar ainda outras variações que não sejam utilizadas para codificar os bits, essas variações podem ser utilizadas para marcar o início e o fim do quadro, tendo em vista que não serão confundidas com os bits propriamente ditos.
Um exemplo é a codificação Manchester padronizada pelo IEEE para redes locais. Nesta codificação, o bit “1” é representado por uma transição do sinal de alto para baixo, e o bit “0”, pela transição contrária do sinal de baixo para alto. Assim, as outras duas transições (ou ausência de transições), de baixo para baixo e de alto para alto, estão livres para serem usadas como marcadores de quadro.
### Controle de erros:
Existem duas estratégicas básicas para o controle de erro no nível de enlace: open loop (malha aberta, sem canal de retorno) e feedback (malha fechada, com canal de retorno).
##### * Open loop:
Na estratégia de open loop, a detecção e correção de erros são feitas completamente pelo receptor. São empregados códigos especiais (FEC: Forward Error Correction) para inserir informação redundante no quadro. Tudo isso para que, ao receber um quadro, o receptor:
* Possa usar a codificação para verificar a integridade do quadro;
* Havendo algum problema, possa, por si só, alterar o quadro para a forma correta.
A desvantagem dessa técnica é a necessidade de se inserir grande quantidade de informação redundante no quadro, de forma que o receptor possa executar as duas tarefas listadas acima sozinho. No entanto, pode ser a única solução, caso a transmissão não tenha canal de retorno.
##### Feedback
A estratégia feedback emprega apenas códigos de detecção de erros, isto é, insere informação redundante que seja suficiente apenas para o receptor testar a integridade do quadro. Havendo um problema, o receptor solicita ao transmissor que retransmita aquele quadro. Assim, é necessário haver um canal de retorno do receptor ao transmissor, situação comum em redes de dados, pois as estações geralmente precisam transmitir e receber dados.
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
##### TELNET, FTP, TFTP, SMTP, POP, IMAP, DNS, HTTP, HTTPS, RTP, MIME e TLS.[2].

Como nas outras camadas do modelo, os protocolos da camada de aplicação contam com os da camada inferior para realizar o transporte dos dados através da rede - os dados do protocolo de aplicação são encapsulados no protocolo da camada inferior.


