---
  description: Crea campañas de descuento para potenciar tus ventas utilizando las herramientas de marketing de tu cuenta de MercadoPago
  indexable: false
---


# Campanhas de desconto

Crie campanhas de desconto para impulsionar suas vendas utilizando as ferramentas de marketing da sua conta no MercadoPago, entrando na seção Configurações para o seu Negócio: [Criar desconto](https://www.mercadopago[FAKER][URL][DOMAIN]/campaigns/create).

Você pode criar dois tipos de campanhas:

* Aplicada a todos os seus compradores, por exemplo, liquidações sazonais.
* Com código de desconto para enviar aos seus compradores.

Basta escolher quanto quer investir e quando, sem custos adicionais.

## Verifique o desconto a ser incluído no pagamento

Antes de criar o pagamento, verifique se seu comprador se adequa a alguma de suas campanhas de descontos.

### Campanhas para todos os compradores

Para verificar, utilize as [credenciais de sua aplicação]([FAKER][CREDENTIALS][URL]):

```curl
curl -H "Accept: application/json" \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_85556797@testuser.com' \
```

- O `transaction_amount` é o valor total do pagamento.
- O `payer_email` é o e-mail do comprador em sua plataforma.

**Resposta**

```json
{
    "id": 1118,
    "name": "Test discount campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 30,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- A `id` identifica a campanha. Ela será utilizada para processar o pagamento.
- O `percent_off` é a taxa de desconto que será aplicada caso tenha criado uma campanha com porcentagem de desconto.
- O `amount_off` é o valor fixo definido por você para sua campanha de desconto.
- O `coupon_amount` é o valor do desconto que será aplicado. Ele será utilizado para processar o pagamento.

#### Processe o pagamento

Para receber um pagamento com uma campanha que se aplique a todos os seus compradores, você deve adicionar os  `campaign_id` e `coupon_amount`:

```curl
curl -X POST -H 'accept: application/json' 
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "payment_method_id": "master",
    "payer":{
        "email": "test_user_85556797@testuser.com"
    },
    "campaign_id": 1118,
    "coupon_amount": 30
}'
```

**Resposta**

```json
{
	"id": 25417,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_23700775@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 30,
	"transaction_details": {
		"total_paid_amount": 269.99,
		...
	},
	...
}
```

- O `transaction_amount` é o valor original dos itens a pagar.
- O `total_paid_amount` é o valor total pago pelo comprador.
- O `coupon_amount` é o valor do desconto aplicado.


### Cupom com código de desconto

Adicione um campo adicional no formulário de pagamento para capturar o código do cupom inserido pelo comprador.

#### Verifique se o comprador possui desconto disponível:

Para verificar, utilize as [credenciais da sua aplicação]([FAKER][CREDENTIALS][URL]):

```curl
curl -X GET \
-H 'Authorization: Bearer ACCESS_TOKEN' \
'https://api.mercadopago.com/v1/discount_campaigns?transaction_amount=299.99&payer_email=test_user_99525168@testuser.com&coupon_code=TESTMP'
```

- O `coupon_code` é o código inserido pelo comprador. Ele será utilizado ao processar o pagamento, caso o comprador tenha o desconto.
- O `transaction_amount` é o valor total da compra.
- O `payer_email` é e-mail do comprador em sua plataforma.

Se o comprador tiver o desconto disponível, a API retornará:

```json
{
    "id": 1117,
    "name": "Test coupon campaign",
    "percent_off": 10,
    "amount_off": 0,
    "coupon_amount": 100,
    "currency_id": "[FAKER][CURRENCY][ACRONYM]"
}
```

- A `id` identifica a campanha.
- O `percent_off` é a taxa de desconto que será aplicada caso tenha criado uma campanha com porcentagem de desconto.
- O `amount_off` é o valor fixo definido por você para sua campanha de desconto.
- O `coupon_amount` é o valor do desconto que será aplicado. Guarde-o, pois ele também será utilizado ao processar o pagamento.


Se o comprador já tiver utilizado o desconto, a API retornará:

```json
{
    "message": "Run Out of uses per user",
    "error": "run-out-of-uses",
    "status": 404,
    "cause": []
}
```

Nesse momento, você pode indicar que o cupom é inválido ou não está mais disponível.

#### Processe o pagamento

Para receber um pagamento com cupom de desconto, você deve adicionar o  `coupon_code`:

```curl
curl -X POST \
-H 'accept: application/json' \ 
-H 'content-type: application/json' \
-H 'Authorization: Bearer ACCESS_TOKEN' \
https://api.mercadopago.com/v1/payments \
-d '{
    "transaction_amount": 299.99,
    "description": "Title of what you are paying for",
    "token": "ff8080814d71d513014d8d42173452f7",
    "installments": 1,
    "payment_method_id": "master",
    "payer": {
        "email": "test_user_99525168@testuser.com"
    },
    "coupon_code": "TESTMP"
}'
```

**Resposta:**

```json
{
	"id": 25416,
	"description": "Title of what you are paying for",
	"payment_method_id": "master",
	"payer": {
		"email": "test_user_99525168@testuser.com",
		...
	},
	"transaction_amount": 299.99,
	"currency_id": "[FAKER][CURRENCY][ACRONYM]",
	"coupon_amount": 29.99,
	"transaction_details": {
		"total_paid_amount": 269.98,
		...
	},
	...
}
```

### Desconto não disponível

Caso o comprador não tenha o desconto disponível, a API retornará:

```json
{
    "message": "invalid parameters",
    "error": "bad_request",
    "status": 400,
    "cause": [
        {
            "code": "campaign_code_doesnt_match",
            "description": "doesn't find a campaign with the given code"
        }
    ]
}
```
