Os numeros nos styles do react native são medidos em Density-independent Pixels (DIPs)
Pixes Físicos = DIPS x Fator de escala
Pode ser usado procentagens
Pode ser usado a api Dimensions.get("screen")
Detectando Orientação de tela: podem ser usados hooks:
useDimensions() e useDeviceOrientation() que recebem as dimensões e a orientação da tela.
### Flex:
No react native o flex determina o tamanho da tela que será usado, variando entre 0 e 1.
A direção dos elementos na tela é controlada pela propriedade flexDirection que pode ser row, column, reverse-col e reverse-column.
A posição é determinada pela propriedade justifyContent.O justify content controla a posição no eixo principal (determinado pelo flexDirection), enquanto o alignItems controla a posição no eixo secundários
alignItems controla o alinhamento entre as views
Quando a soma dos elementos é maior do que a view o comportamento padrão do reactNative é diminuir um dos componentes para fazer tudo caber na tela, a propriedade que controla esse comportamento é o flexWrap
alignContent só funciona quando existe wrap e é usado para alinhar o conteúdo dentro do wrap
flexBasis é equivalente à setar o width ou height
felxGrow é equivalente ao flex
top,botton,left e right alteram a altura do component
