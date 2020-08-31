# SDK Javascript

O SDK Javascript de Mercado Pago facilita a obtenção dos dados de cartões de seus clientes de forma segura.

Ao usar o SDK e seguir os passos que recomendamos, a informação sensível dos cartões não passará pelos seus servidores, assegurando o nível adequado de cumprimento das normas PCI DSS.

## Inclua o SDK de Mercado Pago

Como primeiro passo, deve-se incluir o SDK no HTML da sua aplicação:

```javascript
<script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js"></script>
```

## Configure a sua chave pública

Para começar a utilizar o SDK Javascript, deve-se prover a sua [Public key]([FAKER][CREDENTIALS][URL]) para que possamos identificá-lo ao se conectar com o Mercado Pago.

> Encontre toda a informação sobre suas credenciais em nossas [perguntas frequentes](https://www.mercadopago.com.br/developers/pt/guides/resources/faqs/credentials/).

```javascript
Mercadopago.setPublishableKey("TEST-98638d24-eb00-4dd5-82d8-4e573fac6a80");
```

## Obtenha o token de uso único para o cartão

Para cobrar os seus clientes de forma segura, sem ter que armazenar as informações sensíveis dos cartões do seu lado, deve-se converter os dados em um token de uso único que poderá passar pelos seus servidores.

```javascript
Mercadopago.createToken(form, tokenHandler);
```

A função recebe como argumento o formulário HTML com os dados do cartão do seu cliente e uma função de callback. Os dados necessários são extraídos dos campos marcados com data-checkout no formulário.

Se tudo correr bem, deve-se adicionar o token que foi retornado no callback ao formulário do pagamento e enviar ao seu servidor. Caso tenha algum erro, deve-se comunicá-lo ao seu cliente para que corrija-o e tente novamente.

A função callback receberá um objeto com as seguintes propriedades:


```javascript
{
    "id": "ff8080814cbd77a8014cc",
    "public_key": "TEST-98638d24-eb00-4dd5-82d8-4e573fac6a80",
    "card_id": null,
    "luhn_validation": true,
    "status": "active",
    "date_used": null,
    "card_number_length": 16,
    "date_created": "2015-04-16T13:06:25.525-04:00",
    "first_six_digits": "450995",
    "last_four_digits": "3704",
    "security_code_length": 3,
    "expiration_month": 6,
    "expiration_year": 2017,
    "date_last_updated": "2015-04-16T13:06:25.525-04:00",
    "date_due": "2015-04-24T13:06:25.531-04:00",
    "live_mode": false,
    "cardholder": {
        "identification": {
            "number": "23456789",
            "type": "type"
        },
        "name": "name"
    }
}
```

## Obtenha informação dos meios de pagamento

Pode-se obter informação do cartão inserido como meio de pagamento selecionado, usando:

```javascript
Mercadopago.getPaymentMethod(object, paymentMethodHandler);
```

A função recebe com argumento um objeto e uma função de callback.

Exemplos:

Obter o meio de pagamento baseando-se nos 6 primeiros dígitos (bin) do cartão:


```javascript
object = { "bin" : bin }
```

Obter o meio de pagamento mediante ao seu identificador:

```javascript
object = {"payment_method_id": "visa"}
```

Com a informação do meio de pagamento você poderá determinar se é necessário pedir ao seu cliente dados adicionais para realizar a cobrança.

Por exemplo, se o campo `additional_info_needed` contém o valor `issuer_id`, você deverá solicitar ao seu cliente o emissor do cartão.

Exemplo de resposta:


```javascript
[ {
    "id": "visa",
    "name": "Visa",
    "payment_type_id": "credit_card",
    "status": "active",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/visa.gif",
    "deferred_capture": "supported",
    "settings": [
      {
        "bin": {
          "pattern": "^4",
          "exclusion_pattern": "^(487017)",
          "installments_pattern": "^4"
        },
        "card_number": {
          "length": 16,
          "validation": "standard"
        },
        "security_code": {
          "mode": "optional",
          "length": 3,
          "card_location": "back"
        }
      }
    ],
    "additional_info_needed": [
      "cardholder_name",
      "cardholder_identification_type",
      "cardholder_identification_number"
    ]
  }]
```

## Obtenha os tipos de documento

O tipo e o número de documento de identidade é um dado obrigatório na maioria dos países para realizar pagamentos com cartões.

O SDK do MercadoPago provê uma função que facilita a obtenção do tipo de documento.
```javascript
Mercadopago.getIdentificationTypes(identificationHandler);
```

O argumento é uma função de `callback` que será executada assim que obter os tipos de documentos. Esse argumento é opcional.

Se a função `getIdentificationTypes()` é chamada sem parâmetros, logo que obter os tipos de documento terá que criar um combo-box com as opções sobre o elemento `docType`.

```html
<select  id="docType" data-checkout="docType"></select>
```

Exemplo de resposta:

```javascript
[
    {
        "id": "DNI",
        "name": "DNI",
        "type": "number",
        "min_length": 7,
        "max_length": 8
    },
    {
        "id": "CI",
        "name": "Cédula",
        "type": "number",
        "min_length": 1,
        "max_length": 9
    },
….
    {
        "id": "Otro",
        "name": "Otro",
        "type": "number",
        "min_length": 5,
        "max_length": 20
    }
]

```

## Obtenha os emissores dos cartões

Alguns cartões requerem que seja enviado uma informação adicional do emissor. Para isso, o SDK do MercadoPago provê uma função que permite obter os emissores de um cartão.
```javascript
Mercadopago.getIssuers(paymentMethodId, issuersHandler);
```

A função recebe como argumentos o identificador do meio de pagamento e uma função de `callback`.

Exemplo de resposta com `paymentMethodId = master`:

```javascript
[
  {
    "id": "338",
    "name": "ICBC",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/338.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/338.gif"
  },
  {
    "id": "303",
    "name": "Banco Patagonia",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/303.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/303.gif"
  },
  {
    "id": "326",
    "name": "HSBC",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/326.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/326.gif"
  },
 ….
   {
    "id": "3",
    "name": "Otro",
    "secure_thumbnail": "https://www.mercadopago.com/org-img/MP3/API/logos/master.gif",
    "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/master.gif"
  }
]

```

## Obtenha as parcelas e custos de financiamento

Para cobrar em parcelas e poder mostrar aos seus clientes o custo de financiamento, o SDK do MercadoPago oferece uma função que retorna as parcelas disponíveis para o cartão do seu cliente.

```javascript
Mercadopago.getInstallments({"bin": bin,"amount": amount}, installmentHandler);
```

A função recebe como argumento um objeto que é formado pelo bin (primeiros 6 dígitos do cartão), o valor que será cobrado e uma função de `callback`.

Nos casos em que são necessários que o cliente indique o emissor do cartão, o objeto passado como argumento terá a seguinte forma:

```javascript
{
    "bin": "123456",
    "amount": 123.45,
    "issuer_id": 111
}

```

A função retorna uma lista com o detalhe dos parcelamentos. Além disso, cada uma das parcelas recomendamos uma mensagem para que mostre aos seus clientes.

Exemplo com {"bin": "530575", "amount": 10}:

```javascript
[
      {
        "installments": 1,
        "installment_rate": 0,
        "discount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 0,
        "max_allowed_amount": 60000,
        "recommended_message": "1 cuota de $ 10,00 ($ 10,00)",
        "installment_amount": 10,
        "total_amount": 10
      },
      {
        "installments": 3,
        "installment_rate": 0,
        "discount_rate": null,
        "labels": [
          "recommended_installment"
        ],
        "min_allowed_amount": 2,
        "max_allowed_amount": 60000,
        "recommended_message": "3 cuotas de $ 3,33 ($ 10,00)",
        "installment_amount": 3.33,
        "total_amount": 10
      },
      {
        "installments": 6,
        "installment_rate": 26.99,
        "discount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 3,
        "max_allowed_amount": 60000,
        "recommended_message": "6 cuotas de $ 2,11 ($ 12,69)",
        "installment_amount": 2.11,
        "total_amount": 12.69
      },
      {
        "installments": 9,
        "installment_rate": 42.99,
        "discount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 5,
        "max_allowed_amount": 60000,
        "recommended_message": "9 cuotas de $ 1,58 ($ 14,29)",
        "installment_amount": 1.58,
        "total_amount": 14.29
      },
      {
        "installments": 12,
        "installment_rate": 52.99,
        "discount_rate": null,
        "labels": [
        ],
        "min_allowed_amount": 6,
        "max_allowed_amount": 60000,
        "recommended_message": "12 cuotas de $ 1,27 ($ 15,29)",
        "installment_amount": 1.27,
        "total_amount": 15.29
      }
    ]
```

> NOTE
>
> Nota
>
> As funções de callback são chamadas com 2 argumentos:

|  status  |   response   |
| :--------|:-------------|
| HTTP Status del request | Array(Object) |

Para a função de callback do Mercadopago.createToken(), response é um Object.
