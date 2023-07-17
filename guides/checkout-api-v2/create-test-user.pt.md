# Criar usuário de teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se os pagamentos estão sendo processados sem erros.

Para realizar o teste de integração, serão necessários usuários de teste que permitirão avaliar o funcionamento do checkout através de fluxos de pagamento em um ambiente idêntico ao da integração.

Abaixo listamos os dois tipos de usuários necessários para testar o fluxo de pagamento do Checkout Transparente.

* **Vendedor:** É a conta que você usa para configurar a aplicação e as credenciais para a cobrança.
* **Comprador:** É a conta que você usa para testar o processo de compra.

Para criar um usuário de teste, envie sua **credencial de produção** _Access token_ ao endpoint [/users/test_user](/developers/pt/reference/test_user/_users_test_user/post) e execute a requisição.

> WARNING
>
> Importante
>
> É possível gerar até 10 contas de usuários de teste ao mesmo tempo. Por isso, recomendamos salvar o e-mail e senha de cada um. Os usuários de teste perdem a validade após 60 dias sem atividade no Mercado Pago. Tanto o comprador como o vendedor devem ser usuários de teste.