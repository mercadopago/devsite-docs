# Pré-requisitos

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

1. Acesse [Suas integrações](https://www.mercadopago.com/developers/panel/app) e clique em **Criar aplicação**.
2. Nomeie a aplicação para identificação posterior.
3. Selecione a opção **Pagamentos presenciais** e depois **QRCode**.
4. Opcionalmente, você pode selecionar o modelo de integração, **presencial** ou **dinâmico**
5. Aceite nossos Termos e Condições, e clique novamente em **Criar aplicação**. E pronto!

> NOTE
>
> Nota
>
> Caso o caixa integrado tenha várias conexões com contas Mercado Pago, consulte os itens 4 e 5. Fique atento à segurança da sua integração e implemente [OAuth.](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Gere usuários de teste

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

Após a geração dos usuários de teste, você pode começar a integração e criar as lojas e os caixas.

## 4. Obtenha o seu Access Token (OAuth)

Se você é um integrador que trabalha com diversas lojas que operam com o Mercado Pago, recomendamos que faça o **OAuth - autenticação entre contas***. Através do processo o vendedor autoriza o compartilhamento seguro dos seus dados com um sistema de terceiros.

O Access Token só pode ser compartilhado via OAuth. Consulte a [documentação](/developers/en/docs/qr-code/additional-content/security/oauth/introduction) para obter mais informações.

## 5. Identifique a sua integração (Sponsor ID)

Ao criar uma conta no Mercado Pago, você recebe um User ID, se for usuário, ou um Cust ID, se for vendedor. Ambos são IDs únicos gerados automaticamente, e permitirão que as integrações sejam associadas a cada conta, incluindo-as nas chamadas de API.

Ao fazer integrações para terceiros, o parâmetro `sponsor_id` permitirá identificar os pedidos que são realizados pelo seu ponto de venda. Você deverá enviar o Sponsor ID nos chamados para a [API de Pedidos Presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put). Siga as instruções abaixo para saber como obtê-lo e incluí-lo:

1. Se você ainda não fez, crie uma conta no portal do Mercado Pago.
2. Obtenha o ID do usuário (Cust ID ou User ID) da sua conta acessando os [detalhes da aplicação](/developers/pt/docs/qr-code/additional-content/your-integrations/application-details) que você criou anteriormente.
3. Inclua o ID da sua conta de integrador no Sponsor ID do vendedor.
4. Envie o Sponsor ID em todas as transações QR, conforme mostrado em nossa [Referência de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).