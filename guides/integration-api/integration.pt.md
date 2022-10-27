# Integre a API aos seus pontos de venda

Siga estas etapas para começar a integrar a API de integrações aos seus pontos de venda.

## 1. Obtenha credenciais de identificação

### Acesse uma conta no Mercado Pago

----[mla, mlb]----
Para iniciar a integração, é necessário ter uma conta no Mercado Pago ou no Mercado Livre.
Você pode [Entrar](https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites)
em uma conta existente ou [Criar uma nova conta](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

------------

----[mlm]----
Para iniciar a integração, é necessário ter uma conta no Mercado Pago ou no Mercado Livre.
Você pode [Entrar](https://www.mercadolibre.com/jms/mlm/lgz/login?platform_id=MP&go=https%3A%2F%2Fwww.mercadopago.com.mx%2F&loginType=explicit)
em uma conta existente ou [Criar uma nova conta](https://www.mercadopago.com.mx/hub/registration/landing).

------------

### Crie uma aplicação

----[mla, mlb]----
Em seguida, você precisará criar uma aplicação para obter as credenciais. É fácil, explicamos como fazer:

1. Vá em [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications).
2. Na seção **Suas aplicações**, clique no símbolo "+" para criar sua primeira aplicação ou escolha "Criar nova aplicação" se você já tiver outras.
3. Dê a sua aplicação um nome com o qual você possa se identificar mais tarde.
4. Escolha "Mercado Pago Point" como o produto que você vai integrar.
5. Aceite nossos Termos e Condições.

------------

----[mlm]----
Em seguida, você precisará criar uma aplicação para obter as credenciais. É fácil, explicamos como fazer:

1. Vá em [Suas integrações](https://www.mercadopago.com.mx/developers/panel/applications).
2. Na seção **Suas aplicações**, clique no símbolo "+" para criar sua primeira aplicação ou escolha "Criar nova aplicação" se você já tiver outras.
3. Dê a sua aplicação um nome com o qual você possa se identificar mais tarde.
4. Escolha "Mercado Pago Point" como o produto que você vai integrar.
5. Aceite nossos Termos e Condições.

------------
E pronto!

> NOTE
>
> Nota
>
> Se você vai realizar operações em nome de outros vendedores, pode gerenciar a ligação segura integrando [OAuth.](/developers/pt/docs/mp-point/additional-content/security/oauth/introduction)

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

Depois de vincular seu dispositivo Point à sua conta do Mercado Pago, você deve preencher seus dados comerciais e configurar sua caixa registradora no [site do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores). Para fazer isso, você deve inserir as informações em **Sua loja > Lojas e caixas**.

### Ative o modo integrado no seu dispositivo Point

Para integrar seu dispositivo Point com a nossa API, é necessário ativar o modo de operação ponto de venda (PDV). Para fazer isso, consulte os dispositivos através de nosssa API [Obter dispositivos](/developers/pt/reference/integrations_api/_point_integration-api_devices/get) e execute o seguinte comando:

``` bash
curl --location --request PATCH 'https://api.mercadopago.com/point/integration-api/devices/:deviceId' \
--header 'Authorization: Bearer ${ACCESS_TOKEN}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "operating_mode": "PDV"
}'
```

----[mlb, mla]----
> NOTE
> 
> Importante
> 
> O modo integrado da API para PDVs está disponível apenas para ser operado por um operador de loja. Caso seja implementado em modo de autoatendimento, será de total responsabilidade do negócio, uma vez que os dispositivos não estão habilitados para serem utilizados neste tipo de modelo de negócio.

------------

Você receberá uma resposta como esta:

``` json
{
"operating_mode": "PDV"
}
```

> Caso necessite usar o dispositivo em modo não integrado, deve-se configurar o campo `operating_mode` com o valor `STANDALONE`.

> NOTE
> 
> Importante
> 
> É necessário reiniciar o dispositivo para que a alteração tenha efeito.
