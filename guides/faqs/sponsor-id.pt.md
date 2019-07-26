# Sponsor ID

## Introdução

### O que é?

O `sponsor_id` é um atributo disponível na integração de todos os produtos do Mercado Pago. Seu papel é identificar a pessoa ou empresa que fez a integração técnica.

### Por que devo usá-lo?

À medida que você incorpora cada vez mais clientes e aumenta seu volume de operações (vinculado ao seu `sponsor_id`), o Mercado Pago irá recompensá-lo com diferentes benefícios. Em breve anunciaremos nosso programa de benefícios para desenvolvedores, portanto, recomendamos que você comece a usar esse atributo o mais rápido possível para que as operações já sejam contadas a seu favor.

### Onde obtenho o meu sponsor_id?

Visite o seguinte [página](#) e registre-se como desenvolvedor.
Uma vez cadastrado você receberá seu `sponsor_id`.

O `sponsor_id` começa com **dev_** e continua com caracteres alfanuméricos aleatórios.

> WARNING
>
> Nunca compartilhe seu `sponsor_id` com ninguém.

## Use na integração

### Web Checkout

Para incorporar seu `sponsor_id` neste produto incluído ao criar uma preferência:

```diff
curl -X POST \
  'https://api.mercadolibre.com/checkout/preferences?access_token='ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76
        }
    ],
+   "sponsor_id": "dev_c4ca4238a0b923820dcc509a6f75849b"
}'
```

### Web Tokenize Checkout / API

Para incorporar seu `sponsor_id` neste produto, incluído ao criar um pagamento:

```diff
curl -X POST \
  'https://api.mercadolibre.com/v1/payments?access_token='ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "transaction_amount": 100,
    "installments": 1,
    "payment_method_id": "visa",
    "token": "ff8080814c11e237014c1ff593b57b4d",
    "payer": {
      "email": "john.doe@gmail.com"
    },
+   "sponsor_id": "dev_c4ca4238a0b923820dcc509a6f75849b"
}'
```