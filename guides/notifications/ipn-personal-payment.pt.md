# Notificações IPN para pagamentos presenciais

## Introdução

A IPN  (**Instant Payment Notification**) é uma notificação que é enviada de um servidor para outro, através de uma chamada  `HTTP POST` referente a suas transações.

Para  receber as notificações dos eventos em sua plataforma, pode configurar previamente uma URL, que o Mercado Pago tenha acesso, configure `notification_url` ao criar o pedido.


## Fluxo de notificações 

Para entender o processo de confirmação de pagamento, podemos dividir todos o processo em 2 partes: 

1. Disparo de notificação do evento
2. Consulta da ordem de pagamento

## Eventos

> WARNING 
> 
> Importante
> 
> Um evento é qualquer tipo de atualização sobre o objeto notificado, incluindo mudanças de status ou atributos.

Notificamos eventos referente a suas ordem (`Merchant_Order`) o pagamento recebido (`Pagamento`) 

A `merchant_order` é uma entidade que agrupa pagamentos aprovados ou rejeitados. Deverá consultar os dados dos pagamentos que são notificados.

Sempre que ocorrer um evento relacionado a qualquer um dos recursos mencionados, enviaremos uma notificação usando `HTTP POST` para o `notification_url` que você especificou.

Os eventos relatados são os seguintes:

1. **Registrar o Merchant_Order (MO).** Ao digitalizar um QR que contém um valor, ele criará automaticamente um pedido do lojista, enviando uma notificação (Se o mesmo QR for escaneado várias vezes, cada um criará um pedido comercial diferente e, portanto, uma nova notificação, a integração deve levar este cenário em consideração).
2. **Atualização de pagamentos.** Cada tentativa de pagamento por parte do cliente atualizará as informações do pedido do lojista e enviará uma notificação.
3. **Fechamento do MO.** Assim que um pagamento aprovado for feito, o status do MO aparecerá fechado e uma notificação será enviada.

Se o servidor não estiver disponível ou demorar mais de 22 segundos para responder, o Mercado Pago tentará avisar periodicamente seguindo o seguinte esquema:

Evento | Prazo após a primeira remessa Tempo | limite de confirmação
----------------- | ----------------- | -----------------
Remessa | - | 22 segundos
Primeira tentativa | 30 segundos | 5 segundos
Segunda tentativa | 5 minutos | 5 segundos
Terceira tentativa | 30 minutos | 5 segundos

O Mercado Pago informará a URL configurada no atributo `notification_url` tanto na criação quanto na atualização dos status de pagamento ou pedidos com dois parâmetros:

Campo | Descrição
----------------- | -----------------
“topic” | Identificação do que se trata. Podendo ser `payment` ou `merchant_order`
“id” | É um identificador exclusivo do recurso relatado.

Exemplo: 
Se você definir notification_url: `https://www.yoursite.com/notifications`, receberá notificações de pagamento como esta: `https://www.yoursite.com/notifications?topic=merchant_order&id=123456789`

## O que devo fazer ao receber uma notificação?

Ao receber uma notificação em seu PDV, o Mercado Pago aguarda uma resposta para validar se você recebeu corretamente. Para isso, você deve retornar um `HTTP STATUS 200 (OK)` ou `201 (CRIADO)`.

Lembre-se que esta comunicação é exclusivamente entre os servidores do Mercado Pago e o seu servidor, portanto não haverá um usuário físico vendo nenhum tipo de resultado.

Se você estiver integrando pagamentos presencial, recomendamos o uso de notificações IPN do tipo `merchant_order`. Para fazer isso, mantenha as seguintes regras em mente:


1.  O campo `status` do` merchant_order` permanecerá **opened** quando ainda não tiver pagamentos associados, ou se tiverem rejeitados ou aprovados por um valor inferior ao total do pedido.

2. O campo `status` do` merchant_order` será **closed** quando a soma dos pagamentos aprovados for igual que o total do pedido.

Dentro do pedido, no objeto de pagamentos, você encontrará todos os pagamentos dele. É importante obter o id dos pagamentos com `status` = **approved** para fazer reembolsos


> WARNING 
> 
> Importante
> 
> O Mercado Pago instrui as integrações a usar este método de notificação IPN como o principal método de recebimento de notificações de pagamento.

## Consulta usando GET para Merchant Orders

Para poder consultar o status do pedido por meio do `merchant_order`, você precisará fazer um get usando o id que você recebeu no servidor de notificação para o seguinte endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders/MERCHANT_ORDER_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Cuja resposta será a seguinte:

```json
{
 "id": 1126664483,
 "status": "closed",
 "payments": [
    {
     "id": 4996721469,
     "transaction_amount": 4,
     "status": "rejected"
   },
    {
     "id": 4996721476,
     "transaction_amount": 4,
     "status": "approved"
   }
   ...
 ]
}
```
O campo de `status` do `merchant_order` permanecerá com o status `opened` até que os pagamentos aprovados sejam identificados e o valor do pagamento seja igual ao total do pedido.

No pedido, dentro do objeto pagamento, você encontrará todos os pagamentos efetuados, sejam eles aprovados ou rejeitados. É importante obter a identificação dos pagamentos com status aprovado para poder fazer estornos / reembolsos.


## Get o Payments

Se você precisar de mais informações sobre os pagamentos, pode usar o ID de pagamento para obter uma resposta mais detalhada.

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/PAYMENT_ID' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Ao consultar este serviço, você receberá uma resposta como a seguinte:

```json
{
  "acquirer": null,
  "acquirer_reconciliation": [],
  "additional_info": {
    "authentication_code": null,
    "available_balance": null,
    "nsu_processadora": null,
    "poi_id": null,
    "tracking_id": "platform:v1-blacklabel,so:ALL,type:N/A,security:2fa"
  },
  "api_version": "2",
  "application_id": 1311377052931992,
  "authorization_code": null,
  "available_actions": [
    "refund"
  ],
  "binary_mode": true,
  "brand_id": null,
  "call_for_authorize_id": null,
  "captured": true,
  "card": {},
  "charges_details": [],
  "client_id": "1311377052931992",
  "collector": {
    "email": "user+826213799@vendedor.com",
    "first_name": "Test",
    "id": 826213799,
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    }
  },
  "collector_id": 826213799,
  "collector_tags": [],
  "contingencies": {
    "list": [],
    "status": "none"
  },
  "corporation_id": null,
  "counter_currency": null,
  "coupon_amount": 0,
  "coupon_id": null,
  "currency_id": "MXN",
  "date_approved": "2021-12-02T19:13:41.000-04:00",
  "date_created": "2021-12-02T19:13:41.000-04:00",
  "date_last_updated": "2021-12-02T19:13:41.000-04:00",
  "date_of_expiration": null,
  "deduction_schema": null,
  "description": "B06 Glorias",
  "differential_pricing_id": null,
  "external_reference": "001-1192919",
  "fee_details": [],
  "financing_type": null,
  "id": 18560680076,
  "installments": 1,
  "integrator_id": null,
  "internal_metadata": {
    "app_version": "2.196.2.0",
    "hide_payer_information": true,
    "in_store_flow": "attended",
    "internal_risk_analysis": "by_risk",
    "pos_id": "36540388",
    "rule_engine": {
      "rules": [
        {
          "rule_id": 21000005210,
          "rule_set": "processing_fee_and_release"
        }
      ],
      "valid_promise": false,
      "with_promise": false
    },
    "subtype": "store",
    "type": "qr",
    "user_location": {
      "latitude": 20.4999472,
      "longitude": -103.4148599
    }
  },
  "is_test": true,
  "issuer_id": null,
  "live_mode": true,
  "marketplace": "NONE",
  "marketplace_owner": null,
  "merchant_account_id": null,
  "merchant_number": null,
  "metadata": {},
  "money_release_date": "2021-12-02T19:13:41.000-04:00",
  "money_release_days": 0,
  "money_release_schema": null,
  "notification_url": null,
  "operation_type": "regular_payment",
  "order": {
    "id": "3701439528",
    "type": "mercadopago"
  },
  "payer": {
    "email": "prueba+694333235@comprador.com",
    "entity_type": null,
    "first_name": "Test",
    "id": "694333235",
    "identification": {
      "number": "CUPU800825569",
      "type": "RFC"
    },
    "last_name": "Test",
    "operator_id": null,
    "phone": {
      "area_code": "01",
      "extension": null,
      "number": "1111-1111"
    },
    "type": "registered"
  },
  "payer_id": 694333235,
  "payer_tags": [],
  "payment_method_id": "account_money",
  "payment_type_id": "account_money",
  "platform_id": null,
  "point_of_interaction": {
    "business_info": {
      "sub_unit": "qr",
      "unit": "wallet"
    },
    "type": "UNSPECIFIED"
  },
  "pos_id": "36540388",
  "processing_mode": "aggregator",
  "product_id": "bh31umv10flg01nmhg60",
  "profile_id": null,
  "refunds": [],
  "reserve_id": "3671589532",
  "risk_execution_id": 505395628142,
  "shipping_amount": 0,
  "site_id": "[FAKER][GLOBALIZE][UPPER_SITE_ID] ",
  "splitter_id": null,
  "sponsor_id": null,
  "statement_descriptor": null,
  "status": "approved",
  "status_detail": "accredited",
  "store_id": "43633322",
  "taxes_amount": 0,
  "transaction_amount": 39,
  "transaction_amount_refunded": 0,
  "transaction_details": {
    "acquirer_reference": null,
    "external_resource_url": null,
    "financial_institution": null,
    "installment_amount": 0,
    "net_received_amount": 39,
    "overpaid_amount": 0,
    "payable_deferral_period": null,
    "payment_method_reference_id": null,
    "total_paid_amount": 39
  },
  "transaction_id": null,
  "version": 0
}
```

## Contingência

Se nenhuma notificação for recebida, será necessário aplicar a busca de pedidos como um método de contingência usando sua referência externa como critério de busca. A pesquisa pode ser feita usando external_reference de duas maneiras:

Formas | Descrição
----------------- | -----------------
Manual | O ponto de venda deve incluir um botão para realizar a pesquisa.
Automática | Após 30 segundos sem receber nenhuma notificação, uma busca de pedido é iniciada a cada intervalo de, por exemplo, 5 segundos.

para ambos os formulários, usaremos o endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders?external_reference=EXTERNAL_REFERENCE' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

A resposta será a mesma que usar o id de pagamento e devem usar os mesmos critérios mencionados acima para confirmar o pedido.

Se o QR em que o pedido foi publicado não tiver sido verificado, a resposta será:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

> WARNING 
> 
> Importante
> 
> No Mercado Pago exigimos a padronização da integração dos pagamentos presenciais, que têm como principal método a notificação (IPN). A busca de pedidos por `external_reference` deve ser utilizada apenas como contingência, caso nenhuma notificação seja recebida.


## Ferramentas adicionais

## Busca por pagamentos


Caso necessite de uma lista dos pagamentos efetuados, pode utilizar o seguinte recurso:

```curl
curl --location --request GET 'https://api.mercadopago.com/v1/payments/search?limit=30&range=date_created&begin_date=2019-8-4T00:00:00.001-04:00&end_date=2021-12-4T23:59:59.999-04:00&sort=date_created&criteria=desc' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

Você pode usar parâmetros do corpo de um pagamento como parâmetros de consulta para poder filtrar os resultados como:

- begin date: data de início da pesquisa
- end date: data de término da pesquisa
- status: status do pagamento
