# Integração via API

> WARNING
>
> Importante
>
> * Esta integração está disponível apenas para Android versão 2.8.0 ou superior.<br>
> * Não disponível para iOS. 

A outra forma de integração com o aplicativo Mercado Pago para cobrar com nosso Point é através de nossas APIs.

Para fazer a integração, é necessário habilitar as opções de integração no aplicativo Mercado Pago. Execute o seguinte curl para fazer isso:

```curl
--location --request POST ‘https://api.mercadopago.com/point/services/user/status/integrators?access_token= <ENV_ACCESTOKEN>’ \
--header ‘Content-Type: application / json’ \
--data-raw ‘{
    "Id": <user_id>
} ’
```

Em seguida, é necessário configurar o `device_name` do aplicativo Mercado Pago. Serve para identificar seu celular ou tablet e relacioná-lo com sua conta do Mercado Pago. Desta forma, você saberá para qual dispositivo enviar a ordem de pagamento.

O passo seguinte, consiste em gerar uma ordem de pagamento e envia-la via API ao dispositivo de onde se deseja cobra-la. O usuário verá que na tela desse dispositivo se abre a aplicação de Mercado Pago pronta para passar o cartão e avançar com o fluxo de pagamento utilizando a Point.

Uma vez que o pagamento é processado, o usuário verá o resultado do pagamento na aplicação do Mercado Pago. Finalmente, a ordem gerada se fechará e se criará o pagamento correspondente.

## Criação de uma ordem de pagamento

O POST nessa API gera uma ordem, que é a que recebe a aplicação de Mercado Pago para cobrar com a Point, com um identificador que se pode utilizar para saber o status da mesma.

```curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
-d '{"amount":100,"description":"xícara","device_name":"dispositivo","cc_type":"credit_card"}' \
'https://api.mercadopago.com/point/services/integrations/v1'
```

Os parâmetros que se podem incluir são:

* `amount`: O valor que será cobrado do cliente (\*).
* `description`: Uma descrição da operação (Máx.: 20 caracteres) (\*).
* `device_name`: É o nome do dispositivo que receberá a ordem de pagamento (\*).
* `cc_type`: O tipo de cartão. Pode ser _credit_card_ (\*).
* `external_reference`: O código de referência do seu sistema, o mesmo permitirá conciliar o pedido de compra com o pagamento.
* `disable_back_button`: True ou False. Para que ao clicar no botão de voltar a ordem de pagamento se feche ou não.
* `notification_url`: É a URL que irá receber a notificação desse pagamento.
* `payer_email`: É o email do pagador.

> WARNING
>
> Importante
>
> * Os campos marcados com (\*) são campos obrigatórios.

A resposta terá o seguinte formato:

```json
{
  "status":"OPEN",
  "id":<order_id>
}
```

**Response status code: 200 OK**

## Obter a ordem de pagamento

O GET nesta API, junto ao `order_id`, possibilita recuperar o estado da mesma para saber se foi gerado o pagamento ou não.

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
```

Se o status da ordem é `OPEN` quer dizer que a mesma ainda não foi paga. Se o status é `CLOSED` quer dizer que a ordem já foi paga e, portanto, obterá o `payment_id` com o resto da informação. A resposta terá o seguinte formato.

```json
{
  "status":"CLOSED",
  "id":<order_id>,
  "payment_id":<payment_id>,
  "payment_status":"<payment_status>",
  "external_reference": "<external_reference>",
  "payer_email": "<email_payer>"
}
```

**Response status code: 200 OK**

## Eliminar a ordem de pagamento

O DELETE nesta API possibilita eliminar uma ordem. Existem duas formas de eliminar a ordem.

É possível eliminar a ordem por `device_name`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/attempt/device/:DEVICE_NAME'
```

A resposta terá o seguinte formato.

```json
{
  "status":"OK"
}
```

**Response status code: 200 OK**

Ou é possível eliminar a ordem por `order_id`:

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/:ID'
```

**Response status code: 204 OK**

## Obter todos os dispositivos de uma conta

O GET nesta API possibilita obter todos os dispositivos configurados e sincronizados para sua conta do Mercado Pago

```curl
curl -X GET \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices'
```

Se o status do dispositivo é `FREE` quer dizer que o dispositivo pode receber uma ordem nova. Se o status é `BUSY` quer dizer que o dispositivo já tem uma ordem associada. A resposta terá o seguinte formato.

```json
{
  "devices"[{
    "name": "<device_name>",
    "caller": <id_interno>,
    "id": <id_interno>,
    ”status”:{
      status”:”FREE”,
      "payment_attempt": <order_id>
    }
  }]
}
```

**Response status code: 200 OK**

## Eliminar um dispositivo de uma conta

O DELETE nesta API possibilita apagar algum dos dispositivos configurados e sincronizados para sua conta de Mercado Pago.

```curl
curl -X DELETE \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/point/services/integrations/v1/devices/:DEVICE_NAME'
```

A resposta terá o seguinte formato.

```json
{
  "status":"OK"
}
```

**Response status code: 200 OK**