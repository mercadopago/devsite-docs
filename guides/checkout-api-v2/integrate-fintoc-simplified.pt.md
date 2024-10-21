# Integração simplificada

A integração simplificada do Fintoc permitirá que você ofereça esse meio de pagamento em checkouts de lojas online acessados através de navegadores web ou em sua versão mobile.

Em dois passos simples, você poderá redirecionar os compradores para o Mercado Pago, onde poderão realizar o pagamento por meio de um *widget* do Fintoc já configurado, sem o esforço de uma integração extra.

Nesta documentação, iremos orientá-lo no passo a passo necessário para realizar essa integração e, além disso, oferecemos um fluxo de teste para que você possa verificar se a integração foi bem-sucedida.

## Criar pagamento

Para iniciar o processo de implementação do Fintoc, é necessário criar um pagamento. Envie um **POST** com os **atributos obrigatórios requeridos, descritos na tabela abaixo**, para o endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a solicitação ou, se preferir, envie as informações utilizando nossos SDKs.

> WARNING
>
> Importante
>
> Para esta etapa, ao fazer a requisição através da API ou SDKs, é necessário enviar seu Access Token produtivo. Consulte mais informações em [Credenciais](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials).

[[[
```php
MercadoPagoConfig::setAccessToken("YOUR_ACCESS_TOKEN");
    
$client = new PaymentClient();

$createRequest = [
  "description" => "Titulo del producto",
  "payer" => [
     "email" => "test_user_123@testuser.com",
  ],
  "payment_method_id" => "fintoc",
  "transaction_amount" => 5000,
  "callback_url" => "https://www.your-site.com",
  "point_of_interaction" => [
    "type" => "CHECKOUT",
    "sub_type" => "INTER_PSP"
  ]
];

    $client->create($createRequest, $request_options);

```
```node
const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(config.access_token);

var payment = req.body;

var payment_data = {
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  },
  description: 'Titulo del producto',
  payment_method_id: 'fintoc',
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
```java
MercadoPagoConfig.setAccessToken("YOUR_ACCESS_TOKEN");

PaymentClient client = new PaymentClient();

PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .description("Titulo del producto")
        .paymentMethodId("fintoc")
        .payer(PaymentPayerRequest.builder()
            .email("test_user_123@testuser.com")
            .build())
        .transactionAmount(new BigDecimal("5000"))
        .callbackUrl("https://www.your-site.com")
        .pointOfInteraction(PaymentPointOfInteractionRequest
        .builder().type("CHECKOUT").subType("INTER_PSP").build())
        .build();

client.create(createRequest);

```
```ruby
require 'mercadopago'

sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')

custom_headers = {
 'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

custom_request_options = Mercadopago::RequestOptions.new(custom_headers: custom_headers)

payment_object = {
  description: 'Titulo del producto',
  payer: {
    email: 'test_user_123@testuser.com',
  },
  payment_method_id: 'fintoc',
  transaction_amount: 5000,
  callback_url: 'https://www.your-site.com',
  point_of_interaction: {
   type: 'CHECKOUT',
   sub_type: 'INTER_PSP'
  }

}

payment_response = sdk.payment.create(payment_request, custom_request_options)
payment_response[:response]

```
```csharp
MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN

var paymentPayerRequest = new PaymentPayerRequest
{
    Email = "test_user_123@testuser.com",
};

var paymentPointOfInteractionRequest = new PaymentPointOfInteraction
{
    Type = "CHECKOUT",
    SubType = "INTER_PSP"
};

var request = new PaymentCreateRequest
{
    Description = "Titulo del producto",
    Payer = paymentPayerRequest,
    PaymentMethodId = "fintoc",
    TransactionAmount = (decimal?)5000,
    CallbackUrl = "https://www.your-site.com",
    PointOfInteraction = paymentPointOfInteractionRequest
};

var client = new PaymentClient();
Payment payment = await client.CreateAsync(request, requestOptions);

```
```python
import mercadopago
sdk = mercadopago.SDK("YOUR_ACCESS_TOKEN")

request_options = mercadopago.config.RequestOptions()
request_options.custom_headers = {
'x-idempotency-key': '<SOME_UNIQUE_VALUE>'
}

payment_data = {
    "description": "Titulo del producto",
    "payer": {
        "email": "test_user_123@testuser.com",
    },
    "payment_method_id": "fintoc",
    "transaction_amount": 5000,
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
        "type": "CHECKOUT",
        "sub_type": "INTER_PSP"
    },
}

payment_response = sdk.payment().create(payment_data, request_options)
payment = payment_response["response"]

```
```Go
package main

import (
	"context"
	"fmt"

	"github.com/mercadopago/sdk-go/pkg/config"
	"github.com/mercadopago/sdk-go/pkg/payment"
)

func main() {
	accessToken := "YOUR_ACCESS_TOKEN"

	cfg, err := config.New(accessToken)
	if err != nil {
		fmt.Println(err)
		return
	}

	client := payment.NewClient(cfg)

	request := payment.Request{
		TransactionAmount: 5000,
               Description: "Titulo del producto",
		PaymentMethodID:   "fintoc",
		Payer: &payment.PayerRequest{
			Email: "test_user_123@testuser.com",
		},
		CallbackURL: "https://www.your-site.com",
               PointOfInteraction: &payment.PointOfInteraction{
                Type: "CHECKOUT",
                SubType: "INTER_PSP",
         }
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
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ' \
--data-raw '{
    "transaction_amount": 2000,
    "payment_method_id": "fintoc",
    "description": "description",
    "callback_url": "https://www.your-site.com",
    "point_of_interaction": {
      "type": "CHECKOUT",
      "sub_type": "INTER_PSP"
    },
    "payer": {
        "email": "mail@mail.com.br"
    }
}'

```
]]]

| Atributo | Tipo | Descrição | Exemplo |
|---|---|---|---|
| `transaction_amount` | number | Valor da transação. | 2000 |
| `payment_method_id` | string | Identificador do meio de pagamento. **Sempre deve ser `fintoc`**. | fintoc |
| `description` | string | Descrição do motivo do pagamento.   | Producto1 |
| `callback_url` | string | URL para qual o Mercado Pago faz o redirecionamento final em caso de sucesso ou erro. | https://www.your-site.com |
| `point_of_interaction.type` | string | Informação da aplicação que processa o pagamento. Para o atributo `type`, sempre deve ser `CHECKOUT` | CHECKOUT |
| `point_of_interaction.sub_type` | string | Identificador secundário do tipo de pagamento. Para o atributo `sub_type`, sempre deve ser `INTER_PSP` | INTER_PSP |

> WARNING
>
> Importante
>
> O pagamento criado com Fintoc **é válido apenas por 10 minutos**. Após este prazo, você deverá criar outro.

Na resposta à criação do pagamento, dentro do nó `data` e entre outros parâmetros, você encontrará o campo `external_resource_url`, que conterá a URL necessária para redirecionar o comprador para o site do Mercado Pago, a fim de finalizar a transação.

A seguir, você verá um exemplo de resposta a essa solicitação, no qual informações foram omitidas para destacar os campos mais relevantes:

```json
{
    "id": 82512912106,
    ...
    "payment_method_id": "fintoc",
    "payment_type_id": "bank_transfer",
    "payment_method": {
        "id": "fintoc",
        "type": "bank_transfer",
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
    },
    "status": "pending",
    ...
}

```

> NOTE
>
> Nota
>
> Caso ocorra algum erro ao gerar um pagamento, consulte a lista de possíveis erros na seção [Referência de API](/developers/pt/reference/payments/_payments/post).

## Realizar a redireção para o Mercado Pago

Uma vez criado o pagamento, é necessário redirecionar o comprador para o Mercado Pago, onde encontrará uma tela já preparada com o *widget* do Fintoc necessário para realizar o pagamento.

Para isso, faça a redireção para a URL armazenada no campo `external_resource_url`, que foi retornada na resposta à criação do pagamento.

```json
{
   …
        "data": {
            "reference_id": "82512912106",
            "external_reference_id": "pi_2nGAKKSDoWG8ALR8_sec_Vfwt2rhBdjxYLhVpWupimnnp",
            "external_resource_url": "https://mercadopago.cl/banktransfer..."
        }
   …
}
```

> WARNING
>
> Importante
>
> O Mercado Pago apenas conduz a experiência de pagamento do comprador, não o tratamento de sucesso ou erro em seu processamento. Uma vez que a transação tenha sido finalizada, será feita a redireção para a URL cadastrada como `callback_url` pelo integrador, que deve cuidar desse tratamento.

```external_resource_url

https://www.mercadopago.cl/sandbox/payments/1319503224/bank_transfer/fintoc?caller_id=[…]b96-ab4bcf820559&username=JohnDoe&instutuion_id=banco_estado

```

| Query param | Descrição | Exemplo |
|---|---|---|
| `username` | Parâmetro utilizado para preencher previamente o nome do comprador. | `JohnDoe` |
| `institution_id` | Parâmetro utilizado para preencher previamente a instituição financeira para realizar o pagamento. Verifique as instituições disponíveis acessando a [documentação do Fintoc](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). | `banco_estado` |

> WARNING
>
> Importante
> 
> O **reembolso** de pagamentos efetuados através do Fintoc poderá ser solicitado através da seção **"Atividades"** do [Painel do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home) do vendedor. O processamento pode levar **até 72 horas**. Leve em consideração que as solicitações feitas após as 14h terão o prazo contado a partir do dia seguinte. 

## Teste de integração simplificada

Para testar o funcionamento da sua integração e do processamento de pagamentos com o Fintoc, você deve [criar um pagamento]() utilizando suas [credenciais de teste do Mercado Pago](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials#bookmark_obtener_credenciales:~:text=acesso%20a%20ela.-,Credenciais%20de%20teste,-As%20credenciais%20de).

Os diferentes cenários de pagamento a serem testados dependerão **dos últimos dois dígitos enviados no campo `amount`**, a partir dos quais você poderá definir casos de sucesso ou erro. Siga as indicações da tabela abaixo para cada caso:

| Cenário | Últimos dígitos do campo `amount` | Exemplo |
|---|---|---|
| Pagamento aprovado | 01 | `amount: 10701` |
| Pagamento aprovado | 02 | `amount: 10702` |
| Pagamento rejeitado | 03 | `amount: 10703` |
| Pagamento aprovado | 04 | `amount: 10704` |
| Pagamento aprovado | 05 | `amount: 17505` |
| Pagamento aprovado | 06 | `amount: 3006` |
| Pagamento aprovado | 07 | `amount: 3007` |
| Pagamento aprovado | 08 | `amount: 3008` |
| Pagamento aprovado | 09 | `amount: 3009` |

Dentro do *iframe*, você deverá **selecionar um banco** para realizar a transação de teste, que pode ser qualquer um dos exibidos. Lá, você deverá **fazer login** simulando um usuário comprador com uma das **contas de teste** que disponibilizamos a seguir:

| Usuário | Senha |
|---|---|
| 41614850-3 | jonsnow |
| 40427672-7 | jonsnow |
| 41579263-8 | jonsnow |

Na tela seguinte, ainda dentro do ambiente de testes, será solicitado que você selecione uma conta a partir da qual a transação de teste será paga. **Nenhuma das contas ou valores é real**.

O código de autorização MFA que deve ser inserido posteriormente dependerá da conta selecionada, conforme mostramos a seguir.

| Número de conta | Tipo de MFA | Código |
|---|---|---|
| 813990168 | Dispositivo de segurança | 000000 |
| 422159212 | Aplicativo móvel | N/A |
| 5233137377 | Aplicativo móvel | N/A |
| 170086177 | SMS | 0000 |
| 746326042 | Cartão de coordenadas | ['00', '00', '00'] |
| 4420245701 | Cartão de coordenadas | ['00', '00', '00'] |

Por último, após inserir o código correto, clique no botão **Pagar** e valide o resultado do pagamento de acordo com o valor inserido para a transação.

Dessa forma, você terá concluído seus testes com o Fintoc e poderá começar a operar em um ambiente produtivo.
