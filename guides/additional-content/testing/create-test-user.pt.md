# Criar usuário de teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se a aquisição de assinaturas está funcionando sem erros.

Para realizar o teste de integração, serão necessários usuários de teste que permitirão avaliar o funcionamento da integração através de fluxos de pagamento em um ambiente idêntico ao da integração.

Abaixo listamos os dois tipos de usuários necessários para realizar os testes.

* **Vendedor:** é a conta que você usa para configurar a aplicação e as credenciais para a cobrança.
* **Comprador:** é a conta que você usa para testar o processo de compra.

Para criar um usuário de teste, envie um POST com sua **credencial de produção** _Access token_ ao endpoint [/users/test](/developers/pt/reference/test_user/_users_test/post) e execute a requisição.
