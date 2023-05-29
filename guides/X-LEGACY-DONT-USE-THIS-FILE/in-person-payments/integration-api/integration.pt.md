# Integre a API aos seus pontos de venda

Siga estas etapas para começar a integrar a API de integrações aos seus pontos de venda.

## 1. Obtenha credenciais de identificação

### Acesse uma conta no Mercado Pago

Para iniciar a integração, é necessário ter uma conta no Mercado Pago ou no Mercado Livre.
Você pode [Entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites)
em uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]).

### Crie uma aplicação

Em seguida, você precisará criar uma aplicação para obter as credenciais. É fácil, explicamos como fazer:

1. Vá em [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Na seção **Suas aplicações**, clique no símbolo "+" para criar sua primeira aplicação ou escolha "Criar nova aplicação" se você já tiver outras.
3. Dê a sua aplicação um nome com o qual você possa se identificar mais tarde.
4. Escolha "Mercado Pago Point" como o produto que você vai integrar.
5. Aceite nossos Termos e Condições.

E pronto!

> NOTE
>
> Nota
>
> Se você vai realizar operações em nome de outros vendedores, pode gerenciar a ligação segura integrando [OAuth](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/oauth/introduction).

### Acesse as credenciais da sua aplicação

Depois de criar uma aplicação, você poderá acessar as [suas credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). Com elas você pode conectar uma integração à sua conta e configurá-la do seu jeito.

### Gerar usuários de teste

Você pode testar suas integrações em um ambiente controlado com usuários de teste. Você pode criá-los usando o seguinte comando:

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"[FAKER][GLOBALIZE][UPPER_SITE_ID]","description" : "a description"}'
```

Você pode gerar até 10 contas de usuário de teste simultaneamente. Lembre-se de que os usuários de teste expiram após 60 dias sem atividade no Mercado Pago.

## 2. Associe o seu dispositivo Point à sua conta do Mercado Pago

Agora você vai vincular seu dispositivo Point à sua conta do Mercado Pago. Para isso, você precisa ter nosso aplicativo no seu celular. Você pode obtê-lo para sistemas operacionais [iOS](https://itunes.apple.com/ar/app/mercado-pago/id925436649?mt=8) e [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419).
Você também deve ter um dispositivo Point.

### Digitalize o código QR do seu dispositivo Point

Faça login no aplicativo do Mercado Pago e, em seguida, clique no ícone QR e leia o código que aparece quando você liga o dispositivo Point. 

Pronto! Seu dispositivo Point será vinculado à sua conta.

### Configure sua loja e sua caixa

Depois de vincular seu dispositivo Point à sua conta do Mercado Pago, você deve preencher seus dados comerciais e configurar sua caixa registradora no [site do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]). Para fazer isso, você deve inserir as informações em **Sua loja > Lojas e caixas**.

### Ative o modo integrado no seu dispositivo Point

Para integrar seu dispositivo Point com a nossa API, é necessário ativar o modo de operação ponto de venda (PDV). Para fazer isso, execute o seguinte comando:

``` bash
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/{{device.id}}' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "operating_mode": "PDV"
}'
```

Você receberá uma resposta como esta:

``` json
{
"operating_mode": "PDV"
}
```

> NOTE
>
>Nota
>
> Caso necessite usar o dispositivo em modo não integrado, deve-se configurar o campo `operating_mode` com o valor `STANDALONE`.


> PREV_STEP_CARD_PT
>
> Introdução
>
> Leia nossa introdução à API de integrações Point.
>
> [Introdução](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/introduction)


> NEXT_STEP_CARD_PT
>
> Comece a processar seus pagamentos
>
> Crie uma intenção de pagamento e atribua-a a um dispositivo Point.
>
> [Comece a processar seus pagamentos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/integration-api/create-payment-intent)

