# Testes Automatizados com Junit

## Testes Unitários:

- Os testes são iniciados com a annotation `@Test` na IDE.
- Os resultados são avaliados pelo método `Assert` do Junit, que retorna se o caso de teste passou ou não.
- Códigos com a anotação `@Before` serão executados antes de cada caso de teste pelo **Junit**.
- Os métodos anotados com `@After` são executados após a execução do método de teste. Utilizamos métodos `@After` quando nossos testes consomem recursos que precisam ser finalizados. Exemplos podem ser testes que acessam banco de dados, abrem arquivos, abrem sockets etc.
- Métodos anotados com `@BeforeClass` são executados apenas uma vez, antes de todos os métodos de teste. O método anotado com `@AfterClass` , por sua vez, é executado uma vez, após a execução do último método de teste da classe. Eles podem ser bastante úteis quando temos algum recurso que precisa ser inicializado apenas uma vez e que pode ser consumido por todos os métodos de teste sem a necessidade de ser reinicializado.
- Quando desejamos lançar uma exeção no código, uma das formas de testar essa funcionalidade é fazer o teste falhar caso a exceção não seja lançada, para isso é utilizado o método `Assert.fail()`.
- Outra opção quando desejamos que um teste passe quando seja lançado uma exceção é usando o atributo **expected** pertencente a anotação `@Test` da forma:
  <br>`@Test(expected=RuntimeException.class)`

### Boas Práticas:

- Cada teste deve ser uma classe separada com uma finalidade.
- Os testes unitários devem conter casos de teste que testem diferentes cenários de aplicação da classe. Por exemplo, testar com números crescentes, decrescentes e em ordem aleatória. Esse princípio é conhecido como classe de equivalência.
- É necessário um teste para cada classe de equivalência.
- Para facilitar a leitura do teste é recomendado que se faça o import estático da classe Assert para evitar a escrita de código boiler plate e melhorar a legibilidade:<br> `import static org.junit.Assert.assertEquals;`
- É uma boa prática criar testes para apenas um objeto em cada função de teste, para que assim os testes sejam mais focados.
- Testar casos especiais em testes separados.
- **Test Data Builders:** Este é um padrão de projeto para código de testes. Sem-
  pre que temos classes que são complicadas de serem criadas ou que são usadas
  por diversas classes de teste, devemos isolar o código de criação das mesmas
  em um único lugar, para que mudanças na estrutura dessa classe não impactem em todos os nossos métodos de teste.
- Os testes estão muito acoplados com os códigos de produção, qualquer mudança na produção afetará profundamente os testes. Por isso é fundamental fazer uso das boas praticas na hora de esrever os testes já que elas diminuem o acoplamento entre os códigos e tornam alterações menos sofríveis.
