# Integração avançada

A integração web do Fintoc permitirá que você ofereça este meio de pagamento em checkouts de lojas online que são acessadas através de navegadores web.

Por meio de nossos SDKs, é possível utilizar diferentes métodos que permitirão controlar a experiência de pagamento dos usuários dentro da própria loja, de maneira transparente e adaptável às suas necessidades.

Nesta documentação, você contará com o passo a passo necessário para realizar essa integração e, além disso, oferecemos um fluxo de teste para que possa verificar se a integração foi bem-sucedida.


## Importar MercadoPago.js

Para integrar Fintoc e inicializar o widget posteriormente, capture os dados necessários para processar o pagamento, incluindo a biblioteca MercadoPago.js no seu projeto. Use o código a seguir para fazer isso via `HTML` ou `bash`.

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

## Configurar credenciais

As [credenciais](/developers/pt/docs/checkout-api/additional-content/your-integrations/credentials) são chaves únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.

Utilize o código abaixo para configurar as credenciais na sua integração, substituindo `"YOUR_PUBLIC_KEY"` pela chave pública (Public Key) de produção atribuída à sua aplicação.

```javascript
const mp = new MercadoPago('YOUR_PUBLIC_KEY');

```

## Criar pagamento

O processo de implementação inicia-se a partir da criação de um pagamento, o qual retornará, dentro do nó `data` e entre outros parâmetros, o campo `external_reference_id`, cujo valor representa um token que você deve armazenar para utilizá-lo na inicialização do *widget* do Fintoc no seu frontend.

Para isso,  envie um **POST** com os ***atributos obrigatórios requeridos** ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post) e execute a requisição ou, se preferir, faça o envio das informações utilizando nossos SDKs.

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
  "description" => "Titulo do produto",
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
  description: 'Titulo do produto',
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
        .description("Titulo do produto")
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
  description: 'Titulo do produto',
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
    Description = "Titulo do produto",
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
               Description: "Titulo do produto",
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
| `callback_url` | string | URL para qual o Mercado Pago faz o redirecionamento final. | https://www.your-site.com |
| `point_of_interaction.type` | string | Informação da aplicação que processa o pagamento. Para o atributo `type`, sempre deve ser `CHECKOUT` | CHECKOUT |
| `point_of_interaction.sub_type` | string | Identificador secundário do tipo de pagamento. Para o atributo `sub_type`, sempre deve ser `INTER_PSP` | INTER_PSP |

A seguir, você veráum exemplo de resposta a essa solicitação, no qual informações foram omitidas para destacar os campos mais relevantes:


> WARNING
>
> Importante
>
> Lembre-se de armazenar o valor do campo `external_reference_id`  para utilizá-lo na inicialização do *widget*. Tenha em mente que ele **é válido apenas por 10 minutos**. Após esse tempo, ele expirará e você precisará criar outro pagamento.

```javascript
{
  ...
    "id":"<PAYMENT_ID>",
  "payment_method_id": "fintoc",
  "payment_method": {
    "data": {
      "external_reference_id": "<WIDGET_TOKEN>",
    }
   ...
  }
}
```

> NOTE
>
> Nota
>
> Caso ocorra algum erro ao gerar um pagamento, consulte a lista de possíveis erros na seção [Referência de API](/developers/pt/reference/payments/_payments/post).

## Inicializar Fintoc

Para finalizar o pagamento, é necessário inicializar o *iframe* e implementar o *widget* do Fintoc no seu frontend. Para isso, utilize o método `mp.fintoc()`, que disponibilizamos dentro de nossos SDKs, e que permitirá que você inicialize os recursos existentes.

```javascript
 const fintoc = mp.fintoc();

```

Em seguida, abra o *widget* de pagamento do Fintoc utilizando o método `mp.fintoc.open()`, enviando os parâmetros necessários, conforme indicado a seguir.

```javascript
               async function openFintoc() {
                  try {
                    await fintoc.open({
                      institutionId: document.querySelector('#fintoc-institutionId').value,
                      username: document.querySelector('#fintoc-username').value,
                      widgetToken: <EXTERNAL_REFERENCE_ID>
                      onSuccess,
                      onExit,
                      onEvent,
                    })
                  } catch(e) {
                    console.error(e)
                  }
                }

```

| Atributo | Tipo | Descrição | Requerido/opcional |
|---|---|---|---|
| `institutionId` | string | Identificador da [instituição financeira](https://docs.fintoc.com/docs/payment-initiation-countries-and-institutions). Quando é incluído, pré-seleciona a instituição que aparecerá na abertura do widget. Por exemplo, o valor `cl_banco_de_chile` indicará que o *widget* será aberto com o | Opcional |
| `username` | string | Se preenchido, ao selecionar o banco para a transação, o usuário já estará identificado e precisará apenas fornecer sua senha. | Opcional |
| `widgetToken` | string | Token criado no backend ao momento da criação de um pagamento. É o valor recebido para o parâmetro `external_reference_id`, que inicializa e configura o *widget*. | Requerido  |
| `onSuccess` | function | *Callback* que será chamado após uma criação bem-sucedida do link. | Requerido |
| `onExit` | function | *Callback* que será chamado quando o usuário fechar o link antes do tempo. | Requerido |
| `onEvent` | function | *Callback* que será chamado cada vez que o usuário executar alguma ação no *widget*.  | Requerido |

> WARNING
>
> Importante
> 
> O **reembolso** de pagamentos efetuados através do Fintoc poderá ser solicitado através da seção **"Atividades"** do [Painel do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home) do vendedor. O processamento pode levar **até 72 horas**. Leve em consideração que as solicitações feitas após as 14h terão o prazo contado a partir do dia seguinte.

## Fechar e eliminar Fintoc

Se necessário, é possível fechar e eliminar o *iframe* do Fintoc previamente inicializado utilizando outros dois métodos.

### - Fechar Fintoc
Utilize o método `mp.fintoc.close()` para fechar o *iframe* sem destruir o *widget*, ocultando-o para o usuário.

```javascript
function closeFintoc() {
      fintoc.close()
}
```

### - Eliminar Fintoc
Utilize e método `mp.fintoc.destroy()` quando for necessário eliminar diretamente a instância da sua aplicação.

```javascript
function destroyFintoc() {
      fintoc.destroy()
}

```

Caso precise reinicializar a instância, você pode chamar novamente o método `mp.fintoc.open()`.


## Teste de integração avançada

É possível testar o funcionamento da sua integração e do processamento de pagamentos com Fintoc. Para isso, você deve inicializar o *widget* em um ambiente de testes, utilizando credenciais de teste do Mercado Pago.

Para começar, inicialize o *widget* do Fintoc adicionando o parâmetro `sandbox: true` ao método `mp.fintoc`: 

```javascript
 const fintoc = mp.fintoc({sandbox: true});
```

Uma vez que o escopo de testes do Fintoc esteja instanciado, continue com a abertura do *widget* conforme descrito na etapa [Inicializar Fintoc](/developers/pt/docs/checkout-api/integration-configuration/fintoc/advanced-integration#bookmark_inicializar_fintoc). 

```javascript
async function openFintoc() {
                  try {
                    await fintoc.open({...})
                  } catch(e) {
                    console.error(e)
                  }


```

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
