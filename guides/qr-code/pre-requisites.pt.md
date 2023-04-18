# Requisitos prévios para a integração

Considere os pontos a seguir antes de começar:

* Acesse a uma conta
* Crie uma aplicação
* Gere usuários de teste
* Obtenha o seu Access Token
* Identifique a sua integração

## 1. Acesse uma conta

Para começar a integração, você precisa **ter uma conta no Mercado Pago ou Mercado Livre**.

Você pode Acessar uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crie uma aplicação

Para realizar transações através da integração do Mercado Pago é necessário criar uma credencial. Essa credencial terá uma identificação, assim como um Access Token que permitirá fazer transações usando uma conta Mercado Pago.

Crie uma aplicação para obter as credenciais e configurar notificações webhooks.

É muito simples, veja como: 

1. Acesse [Suas aplicações](https://www.mercadopago.com/developers/panel/applications).
2. Selecione o símbolo em **Suas aplicações** para criar uma nova aplicação.
3. Nomeie a aplicação para identificação posterior.
4. Aceite nossos Termos e Condições. E pronto!

> NOTE
>
> Nota
>
> Caso o PDV integrado tenha várias conexões com contas Mercado Pago, consulte os itens 4 e 5. Fique atento à segurança da sua integração e implemente [OAuth](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction).

## 3. Gere usuários de teste

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

Após a geração dos usuários de teste, você pode começar a integração e criar as lojas e os caixas.

## 4. Obtenha o seu Access Token (OAuth)

Se você é um integrador que trabalha com diversas lojas que operam com o Mercado Pago, recomendamos que faça o **OAuth - autenticação entre contas***. Através do processo o vendedor autoriza o compartilhamento seguro dos seus dados com um sistema de terceiros.

O Access Token não poderá ser compartilhado de outra maneira que não seja o OAuth.

## 5. Identifique a sua integração (Sponsor ID)

Para identificar os pedidos realizados pelo seu ponto de venda, inclua o sponsor ID e confira as nossas APIs de [Pedidos presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get) para saber como enviar esta informação.

Passo a Passo:

> * Crie uma conta no portal do Mercado Pago (Integrator ID).
> * Obtenha o Collector ID (Cust ID ou User ID) da sua conta.
> * Inclua o Collector ID da sua conta de integrador no Sponsor ID do vendedor.
> * Envie o Sponsor ID em todas as transações QR. [Consulte a API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).