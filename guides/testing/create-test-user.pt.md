# Criar usuário de teste

A etapa de testes permite analisar se a integração foi feita de maneira correta e se a aquisição de assinaturas está funcionando sem erros.

Para realizar o teste de integração, serão necessários usuários de teste que permitirão avaliar o funcionamento da integração através de fluxos de pagamento em um ambiente idêntico ao da integração.

Abaixo listamos os dois tipos de usuários necessários para realizar os testes.

* **Vendedor:** é a conta que você usa para configurar a aplicação e as credenciais para a cobrança.
* **Comprador:** é a conta que você usa para testar o processo de compra.

Para criar um usuário de teste, envie um POST com sua **credencial de produção** _Access token_ ao endpoint [/users/test_user](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/test_user/_users_test_user/post) e execute a requisição.

> NEXT_STEP_CARD_PT
>
> Realizar compra teste
>
> Veja como realizar uma compra teste e validar a sua integração.
>
> [Realizar compra teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/testing/test-purchase)
