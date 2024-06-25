# Yape

Yape é um aplicativo móvel que simplifica o processo de transferências bancárias. Os usuários podem efetuar transações de maneira fácil e rápida diretamente pelo celular, após associarem seu cartão de débito MultiRed ao aplicativo.

Para realizar uma transação com o Yape, o processo inicia com a criação de um token, necessário para a etapa de criação do pagamento. Esse token pode ser gerado de duas formas: diretamente através de uma API ou utilizando o SDK JS do Mercado Pago.

Nesta documentação você encontra todas as etapas necessárias para realizar a configuração e os testes de integração com o Yape de forma completa.

## Integração via SDK javascript

Com o Checkout Transparente, é possível oferecer pagamentos via Yape utilizando o método de SDK JS para gerar um token. Para isso, é necessário enviar os campos de celular e OTP (_One-time password_ encontrado no aplicativo Yape). Com o token, é possível criar um pagamento.

Para oferecer pagamentos com Yape, siga os seguintes passos.

## Importar o MercadoPago.js

A primeira etapa do processo de integração de pagamentos com Yape é a captura dos dados de OTP (_One-time password_) e celular para gerar o token de pagamento. Isso é feito incluindo a biblioteca MercadoPago.js no seu projeto, seguida pelo formulário para capturar os dados necessários. 

Utilize o código a seguir para importar a biblioteca MercadoPago.js antes de adicionar o formulário. Você pode importar a biblioteca via HTML ou via Bash.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js
```
]]]

## Configurar credencial

As credenciais são chaves únicas usadas para identificar uma integração em sua conta. Elas são utilizadas para capturar pagamentos em lojas online e outras aplicações de forma segura.

Utilize o código abaixo para configurar sua credencial, substituindo o valor `YOUR_PUBLIC_KEY` pela sua _Public key_ de produção disponível na aplicação criada em [Suas integrações](/developers/panel/app). Para mais detalhes, veja [credenciais](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials).

```
const mp = new MercadoPago("YOUR_PUBLIC_KEY");
```

## Adicionar formulário para captura de OTP e celular

Para gerar um token Yape, é necessário preencher o campo OTP, que representa o código gerado no aplicativo Yape, e o número de celular. Para capturar esses dados, utilize o HTML abaixo diretamente no projeto:

```html
<form id="form-checkout">
  <div>
    <label for="payerPhone">Phone Number</label>
    <input id="form-checkout__payerPhone" name="payerPhone" type="text" />
  </div>
  <div>
    <label for="payerOTP">Phone Number</label>
    <input id="form-checkout__payerOTP" name="payerOTP" type="text" />
  </div>
  <div>
    <button onclick="handleYape()">Create YAPE</button>
  </div>
</form>
```

## Gerar token 

Após concluir a inclusão do formulário e obter os dados necessários, gere o token de Yape usando MercadoPago.js ou via API.

### Gerar token via MercadoPago.js

Utilize o método `mp.yape.create` para gerar um token de Yape, conforme o código abaixo.

```javascript
(async function handleYape () {
  const otp = docment.getElementById("checkout__payerOTP").value;
  const phoneNumber = docment.getElementById("checkout__payerPhone").value;
  const yapeOptions = {
    otp,
    phoneNumber
  };
  const yape = mp.yape(yapeOptions);
  const yapeToken = await yape.create();
  return yapeToken;
});
```

### Gerar token via API

Uma outra maneira de gerar o token é por meio de uma API. Para isso, utilize o seguinte cURL, preenchendo os parâmetros conforme detalhado na tabela abaixo. 

> NOTE
>
> Nota
>
> O token é de uso único por compra e deve ser enviado durante a etapa de criação do pagamento.

| Campo       | Tipo   | Descrição                                                                                                                  | Obrigatório/Opcional                           | Exemplos/Possíveis valores                 |
|-------------|--------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|-------------------------------------------|
| `phoneNumber` | number | Número de celular do pagador obtido na etapa Capturar os dados de celular e OTP.                                           | Obrigatório                                    | 123214234342                              |
| `otp`         | number | Código único e numérico de 6 dígitos encontrado no app de Yape. Este campo é obtido na etapa Capturar os dados de celular e OTP. | Obrigatório                                    | 123344                                    |
| `requestId`   | string | Campo gerado automaticamente pela SDK JS, não sendo necessário enviá-lo. Deve ser enviado apenas nas integrações realizadas via cURL. | Obrigatório para integrações realizadas via cURL | aaaaaaaa-bbbb-1ccc-8ddd-eeeeeeeeeeee      |

```curl
curl --location 'https://api.mercadopago.com/platforms/pci/yape/v1/payment?public_key=<PUBLIC_KEY>' \
--header 'Content-Type: application/json' \
--data '{
   "phoneNumber": "123214234342",
   "otp": "123344",
   "requestId": "3127367123234234"
}
``` 

Exemplo da resposta:

```json
{
    "live_mode": true,
    "luhn_validation": null,
    "require_esc": null,
    "cloned": false,
    "cardholder": {
        "identification": {
            "number": null,
            "type": null,
            "subtype": null
        },
        "name": "yape"
    },
    "security_code_id": 8069792005119486812,
    "security_code_length": 6,
    "card_number_length": 9,
    "expiration_month": 5,
    "expiration_year": 2024,
    "card_present_id": null,
    "card_id": null,
    "client_id": 7775327892346559,
    "present": null,
    "id": "45d013f72bf42717a1625f4c508fc20f",
    "card_number_id": "FFTSHQTOSJTXGFVFGJKCBAIVOUISTFZBDRTQWLYJ",
    "creation_date": null,
    "due_date": null,
    "last_modified_date": null,
    "product_id": null,
    "trust_level": "unknown",
    "public_key": "APP_USR-352587ca-674b-4ae4-a348-8583ab39b4ac",
    "site_id": "MPE",
    "status": "active",
    "transaction_id": null,
    "trunc_card_number": null,
    "used_date": null,
    "bin": "111111",
    "version": 0,
    "client_header": null,
    "first_six_digits": "111111",
    "last_four_digits": "6789"
}
```

## Criar pagamento

Após adicionar o formulário para captura dos dados de celular e OTP e gerar o token, utilize nossa API de Pagamentos ou um de nossos SDKs para enviar o token e criar o pagamento.

Para criar o pagamento, envie o token, fornecido pelo SDK JS do Mercado Pago, e os outros dados necessários para o endpoint [/v1/payments](/developers/en/reference/payments/_payments/post). Estes dados incluem 'transaction_amount', 'installments', 'payment_method_id' (especificamente 'yape'), e as informações do pagador. Se preferir, também é possível fazer a requisição utilizando um de nossos SDKs. 

O detalhamento de cada um dos parâmetros citados acima, bem como seus respectivos valores possíveis, está descrito na tabela a seguir.

> WARNING
>
> Importante
>
> Para esta etapa, ao fazer a solicitação através da API ou SDKs, é necessário enviar sua chave privada (_access_token_ produtivo).

| Campo             | Tipo    | Descrição                                                                                                                                  | Obrigatório/Opcional | Exemplos/Possíveis valores                |
|-------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------|----------------------|-------------------------------------------|
| `token`             | string  | Token fornecido pelo SDK JS do MercadoPago. Para saber mais, consulte a documentação [Gerar token de Yape](/developers/pt/docs/checkout-api/integration-configuration/yape#bookmark_gerar_token).                                 | Obrigatório          | "f8ae90c6a83e71d698d5ea927f851034"        |
| `transaction_amount`| number  | Valor da transação. Existe um limite máximo de valor que pode ser de S/500, S/900 ou S/2000, configurado diretamente no próprio aplicativo Yape. | Obrigatório          | 2000                                      |
| `description`       | string  | Título do produto.                                                                                                                         | Opcional             | "Video game"                                |
| `installments`      | number  | Quantidade de parcelas. Como se trata de um pagamento com cartão de débito, a quantidade de parcelas será 1.                               | Obrigatório          | 1                                         |
| `payment_method_id` | string  | "yape" para todos os casos.                                                                                                               | Obrigatório          | "yape"                                      |
| `payer.email`       | string  | Email do pagador.                                                                                                                          | Obrigatório          | "test_user_12345@testuser.com"         |

[[[
```java
MercadoPagoConfig.setAccessToken("ENV_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Titulo del producto")
        .installments(1)
        .payer(PaymentPayerRequest.builder()
            .email("test_user_123@testuser.com")
            .build())
        .paymentMethodId("yape")
        .token("ff8080814c11e237014c1ff593b57b4d")
        .transactionAmount(new BigDecimal("5000"))
        .build();

client.create(createRequest);
```
```php
MercadoPagoConfig::setAccessToken("ENV_ACCESS_TOKEN");
    
$client = new PaymentClient();

$createRequest = [
  "description" => "Titulo del producto",
  "installments" => 1,
  "payer" => [
     "email" => "test_user_123@testuser.com",
  ],
  "payment_method_id" => "yape",
  "token" => "ff8080814c11e237014c1ff593b57b4d",
  "transaction_amount" => 5000,
];

    $client->create($createRequest, $request_options);
```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment = req.body;

var payment_data = {
  token: '<ff8080814c11e237014c1ff593b57b4d>',
  transaction_amount: 5000,
  installments: 1,
  description: 'Titulo del producto',
  payment_method_id: 'yape',
  payer: {
    email: payment.email,
  }
};

var payment = mercadopago.payment.save(payment_data)
  .then(function (response) {
    res.status(response.status).json({
      status: response.body.status,
      status_detail: response.body.status_detail,
      id: respose.body.id,
    });
  })
  .catch(function (error) {
    res.status(error.status).send(error);
});

var payment_link = payment.transaction_details.external_resource_url;
```
```python
import mercadopago
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
\t'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
\t"description": "Titulo del producto",
\t"installments": 1,
\t"payer": {
\t\t"email": "test_user_123@testuser.com",
\t},
\t"payment_method_id": "yape",
\t"token": "ff8080814c11e237014c1ff593b57b4d",
\t"transaction_amount": 5000
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]
```
```dotnet
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN

var paymentPayerRequest = new PaymentPayerRequest
{
    Email = "test_user_123@testuser.com",
};

var request = new PaymentCreateRequest
{
    Description = "Titulo del producto",
    Installments = 1,
    Payer = paymentPayerRequest,
    PaymentMethodId = "yape",
    TransactionAmount = (decimal?)5000,
    Token = "ff8080814c11e237014c1ff593b57b4d"
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);
```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('ENV_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_object = {
  description: 'Titulo del producto',
  installments: 1,
  payer: {
    email: 'test_user_123@testuser.com',
  },
  payment_method_id: 'yape',
  token: 'ff8080814c11e237014c1ff593b57b4d',
  transaction_amount: 5000
}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment_response[:response]
```
```go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "ENV_ACCESS_TOKEN"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 5000,
            Description: "Titulo del producto",
		PaymentMethodID:   "yape",
		Payer: &payment.PayerRequest{
			Email: "test_user_123@testuser.com",
		},
		Token:        "ff8080814c11e237014c1ff593b57b4d",
		Installments: 1,
	}

	resource, err := client.Create(context.Background(), request)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(resource)
}
```
```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--header 'Content-Type: application/json' \
--header 'x-idempotency-key: <IDEMPOTENCY_KEY>' \
--data-raw '{
   "token": "ff8080814c11e237014c1ff593b57b4d",
   "transaction_amount": 5000,
   "description": "Título del producto",
   "installments": 1,
   "payment_method_id": "yape",
   "payer": {
    "email": "test_user_1295925766@testuser.com"
   }
}'
```
]]]

Exemplo da resposta. Tenha em mente que algumas informações foram omitidas para mostrar os campos mais relevantes.

```json
{
    "id": 74581527758,
    ...
    "payment_method_id": "yape",
    "payment_type_id": "debit_card",
    "payment_method": {
        "id": "yape",
        "type": "debit_card",
        "issuer_id": "12759",
        "data": {
            "routing_data": {
                "merchant_account_id": "462540702"
            }
        }
    },
    "status": "approved",
    "status_detail": "accredited",
    ...
}
```

Por ser uma transação com cartão de débito, os status de pagamento possíveis são **aprovado** ou **rejeitado**. Além disso, as mesmas [políticas de reembolso e cancelamento](/developers/pt/docs/checkout-api/payment-management/cancellations-and-refunds) se aplicam.

> NOTE
>
> Nota
>
> Caso ocorra algum erro ao gerar um pagamento, consulte a lista de possíveis erros na seção [Referência de API](/developers/pt/reference/payments/_payments/post). 

## Testar a integração

É possível utilizar um OTP e números de celular de teste para simular diferentes respostas de pagamento em uma transação, sem a necessidade de usar números de celular e OTPs reais. Isso permite reproduzir os status mapeados em _payments_.

Para testar a integração, insira o OTP e um dos números de celular listados na tabela abaixo no formulário de Checkout para simular cenários de sucesso e falha na implementação.

> NOTE
>
> Nota
>
> Para testar a integração, recomendamos utilizar as credenciais de teste. Para saber mais, leia a [documentação](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials).

| Celular        | OTP     | Status previsto em `payments`                  |
|----------------|---------|----------------------------------------------|
| 111111111              | 123456  | `approved`                                     |
| 111111112      | 123456  | `cc_rejected_call_for_authorize`               |
| 111111113      | 123456  | `cc_amount_rate_limit_exceeded`                |
| 111111114      | 123456  | `cc_unsupported_unsupported`                   |
| 111111115      | 123456  | `cc_rejected_card_type_not_allowed`            |
| 111111116      | 123456  | `cc_rejected_max_attempts`                     |
| 111111117      | 123456  | `cc_rejected_bad_filled_security_code`         |
| 111111118      | 123456  | `cc_rejected_form_error`                       |

Os procedimentos para gerar o token de Yape e criar o pagamento são os mesmos: é necessário fornecer o número de celular e o OTP da tabela acima. Se houver dúvidas sobre como gerar o token Yape ou criar o pagamento, consulte as documentações [Gerar token](/developers/pt/docs/checkout-api/integration-configuration/yape#bookmark_gerar_token) e [Criar pagamento](/developers/pt/docs/checkout-api/integration-configuration/yape#bookmark_criar_pagamento) respectivamente.