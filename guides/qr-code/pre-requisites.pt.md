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

1. Acesse [Suas aplicações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Selecione o símbolo em **Suas aplicações** para criar uma nova aplicação.
3. Nomeie a aplicação para identificação posterior.
4. Aceite nossos Termos e Condições. E pronto!

Se você não tem uma aplicação registrada, [acesse o tutorial](https://youtu.be/FB4aL9D0Of4?list=PLCazXKuqZp3hGVY3bBhEO0ItFhIic5UpK).


> NOTE
>
> Nota
>
> Caso o PDV integrado tenha várias conexões com contas Mercado Pago, consulte os itens 4 e 5. Fique atento à segurança da sua integração e implemente [Oauth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/security/oauth/introdution).

## 3. Gere usuários de teste

Para realizar a integração, você precisa ter pelo menos dois usuários: um comprador e um vendedor.

Você pode criar esses usuários em [Criar usuários de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/test_user/_users_test_user/post) em nossa referência de API. Nela você encontrará todas as informações necessárias.

> WARNING
>
> IMPORTANTE
>
> * Você pode gerar até 10 contas de usuários de teste em simultâneo. Por isso, recomendamos salvar o e-mail e senha de cada um.
> * Os usuários de teste caducam após 60 dias sem atividade no Mercado Pago.
> * Para realizar pagamentos de teste, recomendamos que você utilize valores baixos.
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * Utilize cartões de teste, pois não é possível retirar dinheiro.
> * Vídeo tutorial de como criar um [usuário de teste](https://youtu.be/ejdnAM0A9jA?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny)

Após a geração dos usuários de teste, você pode começar a integração e criar as lojas e os caixas.

## 4. Obtenha o seu Access Token (OAuth)

Se você é um integrador que trabalha com diversas lojas que operam com o Mercado Pago, recomendamos que faça o **OAuth - autenticação entre contas***. Através do processo o vendedor autoriza o compartilhamento seguro dos seus dados com um sistema de terceiros.


O Access Token não poderá ser compartilhado de outra maneira que não seja o OAuth. [Clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/credentials) para mais informações.

## 5. Identifique a sua integração (Sponsor ID)

Para identificar os pedidos realizados pelo seu ponto de venda, inclua o sponsor ID e confira as nossas APIs de [Pedidos presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get) para saber como enviar esta informação.

Passo a Passo:
> * Crie uma conta no portal do Mercado Pago (Integrator ID).
> * Obtenha o Collector ID (Cust ID ou User ID) da sua conta.
> * Inclua o Collector ID da sua conta de integrador no Sponsor ID do vendedor.
> * Envie o Sponsor ID em todas as transações QR. [Consulte a API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).

---

> PREV_STEP_CARD_PT
>
> Tipos de integração
>
> Você pode escolher uma das opções.
>
> [Tipos de integração](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/integration-types)

> NEXT_STEP_CARD_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas lojas e caixas.
>
> [Lojas e Caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/stores-pos/introduction)