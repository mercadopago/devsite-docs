# Open Finance
Open Finance é um novo sistema financeiro que permite que você tenha total controle dos seus dados e mais liberdade com suas finanças. Com ele é possível compartilhar históricos financeiros com outras instituições para ter acesso a produtos e serviços mais vantajosos.

Com o Open Finance será possível oferecer pagamentos Pix no Checkout Transparente, utilizando saldos que estejam em instituições financeiras distintas daquela que está iniciando o pagamento.

> NOTE
> 
> Importante
> 
> É preciso ter uma chave PIX cadastrada em sua conta Mercado Pago. Caso ainda não tenha, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) para mais informações sobre como cadastrá-las.

## Criando um pagamento Pix com Open Finance

Antes de iniciar uma cobrança utilizando Open Finance é preciso ter configurado o meio de pagamento Pix. Para saber como realizar a configuração e a integração, acesse a documentação [clicando aqui](/developers/pt/docs/checkout-api/prerequisites).

Uma vez que você tenha configurado o meio de pagamento corretamente, será preciso inserir uma nova informação à [requisição de criar pagamento](/developers/pt/reference/payments/_payments/post), através do parâmetro `point_of_interaction`, indicando a modalidade Open finance. Isso é válido tanto via API, quanto pelos nossos SDKs, conforme os exemplos a seguir:

[[[
    ```php
    MercadoPago\SDK::setAccessToken("access_token");
    $payment = new MercadoPago\Payment();
    $payment->transaction_amount = 100;
    $payment->description = "Título do produto";
    $payment->payment_method_id = "pix";
    $payment->payer = array(
        "email" => "test@test.com",
        "first_name" => "Test",
        "last_name" => "User",
        "identification" => array(
            "type" => "CPF",
            "number" => "19119119100"
        ),
    );
    $payment->point_of_interaction = array(
    "linked_to" => "openfinance"
    );
    $payment->save();
    ```
    ```node
    mercadopago.configurations.setAccessToken("access_token");
    var payment = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    };
    mercadopago.payment.create(payment).then(function (data) {
        console.log(data.response);
    }).catch(function (error) {
        console.log(error);
    });
    ```
    ```java
    MercadoPagoConfig.setAccessToken("access_token");
    PaymentClient client = new PaymentClient();

    PaymentCreateRequest createRequest =
    PaymentCreateRequest.builder()
        .transactionAmount(new BigDecimal(100))
        .description("description")
        .paymentMethodId("pix")
        .pointOfInteraction(
            PaymentPointOfInteractionRequest.builder().linkedTo("openfinance").build())
        .payer(PaymentPayerRequest.builder().email("test@test.com").build())
        .build();

    Payment payment = client.create(createRequest);
    ```
    ```ruby
    sdk = Mercadopago::SDK.new('access_token')

    payment_request = {
        transaction_amount: 100,
        description: 'description',
        payment_method_id: 'pix',
        payer: {
            email: 'test@test.com'
        },
        point_of_interaction: {
            linked_to: "openfinance"
        }
    }
    payment_response = sdk.payment.create(payment_request)
    payment = payment_response[:response]
    ```
    ```csharp
    MercadoPagoConfig.AccessToken = "access_token";

    var request = new PaymentCreateRequest
    {
        TransactionAmount = 100,
        Description = "description",
        PaymentMethodId = "pix",
        Payer = new PaymentPayerRequest
        {
            Email = "test@test.com"
        },
        PointOfInteraction = new PaymentPointOfInteractionRequest
        {
            LinkedTo = "openfinance"
        }
    };
    var client = new PaymentClient();
    Payment payment = await client.CreateAsync(request);
    ```
    ```python
    sdk = mercadopago.SDK("access_token")

    payment_data = {
        "transaction_amount": 100,
        "description": "description",
        "payment_method_id": "pix",
        "payer": {
            "email": "test@test.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        }
    }
    payment_response = sdk.payment().create(payment_data)
    payment = payment_response["response"]
    ```
    ```curl
    curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
    --header 'Authorization: Bearer TOKEN' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "transaction_amount": 1000,
        "description": "Teste Pix Open Finance",
        "payment_method_id": "pix",
        "payer": {
            "email": "test_user_19734329@testuser.com"
        },
        "point_of_interaction": {
            "linked_to": "openfinance"
        },
        "callback_url": "https://example.com"
    }'
    ```
]]]

> WARNING
> 
> Atenção
> 
> Para este meio de pagamento, o número de **CPF é obrigatório**.
>  O parâmetro `callback_url` deve conter o valor da URL que mostra a tela de feedback.

O retorno da requisição será muito similar ao retorno de um pagamento com Pix comum, com algumas mudanças:

* O valor **openfinance** em `point_of_interaction.linked_to`
* Valor **null** em `point_of_interaction.transaction_data.qr_code` e `point_of_interaction.transaction_data.qr_code_base64`
* Valor de `point_of_interaction.transaction_data.ticket_url` com url para aplicação que finaliza o pagamento por Open Finance

Exemplo de resposta

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/1111111111/openfinance?caller_id=11111111&hash=1111",
      "qr_code_base64": null
    }
  }
}
```

## Guiando o usuário para a finalização do pagamento

Com a resposta da requisição de criação de pagamento, basta utilizar a url disponível no objeto `point_of_interaction.transaction_data.ticket_url` para que o comprador consiga finalizar o pagamento através de Open Finance.

Para isso, é preciso redirecionar o usuário para a URL diretamente ou apresentar um botão que faz o redirecionamento quando clicado.

A imagem a seguir apresenta um exemplo deste fluxo na visão do usuário:

![Exemplo de fluxo de pagamento Pix Open Finance](/images/api/api-integrate-openfinance.gif)

## Testando sua integração

Para testar a integração é necessário utilizar uma credencial de testes ao criar um pagamento e possuir um usuário de testes com chave Pix cadastrada. [Clique aqui](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) para acessar a documentação e encontrar mais detalhes sobre como fazer isso.

Crie um pagamento Pix Open Finance e utilize a URL disponível no atributo `point_of_interaction.transaction_data.ticket_url` para acessar a página de redirecionamento. 

```json
{
  "point_of_interaction": {
    "linked_to": "openfinance",
    "transaction_data": {
      "qr_code": null,
      "ticket_url": "https://mercadopago.com.br/payments/1111111111/openfinance?caller_id=11111111&hash=1111",
      "qr_code_base64": null
    }
  }
}
```

Nesta página, você terá acesso às informações do pagamento e terá a possibilidade de selecionar apenas o banco **370 - Mercado Pago - Payments** para dar continuidade ao teste. 

Ao selecionar o banco indicado, será possível **Confirmar o pagamento** e por fim, ocorrerá o redirecionamento para a tela de Feedback definido no parâmetro `callback_url`.

A imagem a seguir apresenta um exemplo dessa experiência:

![Exemplo de fluxo completo de pagamento Pix Open Finance](/images/api/api-integrate-openfinance-sample.gif)