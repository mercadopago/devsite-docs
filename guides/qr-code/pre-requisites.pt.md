# Requisitos prévios para se integrar

Observe estes pontos antes de começar: 

## 1. Acesse uma conta

Para poder começar a integração, é necessário **contar com uma conta de Mercado Pago ou Mercado Livre**. 

Você pode [Entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/in-person-payments/qr-code/pre-requisites) em uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Crie uma aplicação

Para transacionar via integração Mercado Pago, uma credencial deve ser criada. Essa credencial terá uma identificação e o Access Token, somente com esse token será possível transacionar utilizando uma conta Mercado Pago.
Crie uma aplicação para obter as credenciais e configurar notificações webhooks.

É fácil e explicamos como fazer isso:

1. Entre em [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Selecione “Nova aplicação” ou “Criar sua primeira aplicação”.
3. Dê a ela um nome com o qual você possa identificá-la mais tarde.
4. Aceite nossos Termos e condições. E pronto!

Caso não tenha nenhuma aplicação cadastrada, [veja o tutorial](https://youtu.be/FFhHdiqpnEI?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny).

> NOTE
> 
> Nota
>
> Caso sua integração seja um PDV integrado a vários lojistas/Vendedores, veja o tópico 4 e 5. Fique atento à segurança de sua integração e faça a implantação [Oauth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/security/oauth/introdution).

## 3. Gerar usuários de teste

Para realizar os testes, é necessário que você tenha, no mínimo, dois usuários: um comprador e um vendedor. 

Execute o comando seguinte para gerar um usuário de teste: 

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user"
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]"}'
```

> NOTE
> 
> Nota
> 
> As credenciais utilizadas são as produtivas da conta com a qual você vai operar.   

Resposta:

```json
{
    "id": 123456,
    "nickname": "TT123456",
    "password": "qatest123456",
    "site_status": "active",
    "email": "test_user_123456@testuser.com"
}
```

> WARNING
>
> IMPORTANTE
>
> * Você pode gerar até 10 contas de usuários de teste em simultâneo. Por isso, recomendamos você salvar o e-mail e senha de cada um. 
> * Os usuários de teste caducam após 60 dias sem atividade em Mercado Pago.
> * Para realizar pagamentos de teste, recomendamos que você utilize valores baixos.
> * Tanto o comprador como o vendedor devem ser usuários de teste.
> * Utiliza cartões de teste, já que não é possível sacar o dinheiro.
> * Vídeo tutorial de como criar um [usuário teste.](https://youtu.be/ejdnAM0A9jA?list=PLCazXKuqZp3g4WfhNlhsB3FL9-1z7gUny)

Uma vez que os usuários de teste são criados, você pode começar com a integração e criar as lojas e caixas.

## 4. Como coletar Access Token (OAuth)

Para você integrador que irá trabalhar com diversas lojas que utilizam carteira digital Mercado Pago, orientamos que faça o processo de OAuth - autenticação entre contas, esse processo consiste no processo do vendedor permitir que seus dados sejam compartilhados com um sistema terceiro de forma segura.

O access token não poderá ser compartilhado de outra maneira que não seja o OAuth. [Clique aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/additional-content/credentials) para mais informações.

## 5. Como Identificar sua integração (Sponsor ID)

Para identificar os pedidos que são transacionados pelo seu sistema de gestão, faça a inclusão do sponsor ID, veja nas APIs de [ordens presenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference) como você enviará essa informação.

Passo a Passo:
> * Crie uma conta no portal Mercado Pago (identificação Integrador).
> * Colete o Collector ID (Cust ID ou User ID) de sua conta.
> * Inclua o Collector ID de sua conta Integrador dentro do Sponsor ID do vendedor.
> * Envie o Sponsor ID em todas as transações de QR. [Consulte a api](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).

> NEXT_STEP_CARD_PT
>
> Lojas e Caixas
>
> Para realizar a integração, primeiramente deverá configurar suas lojas e caixas.
>
> [Lojas e Caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/docs/qr-code/stores-pos/introduction)