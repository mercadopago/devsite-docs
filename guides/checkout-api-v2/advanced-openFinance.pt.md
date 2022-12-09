# Open Finance (Integração Avançada)

O Pagamento via Open Finance possibilita utilizar o saldo das contas de Instituições Financeiras participantes do Open Finance através do Mercado Pago utilizando o Pix como meio de pagamento, oferecido e homologado pelo Banco Central do Brasil a pessoas físicas e jurídicas. 

Com o Open Finance será possível oferecer pagamentos Pix no Checkout Transparente, utilizando saldos que estejam em instituições financeiras distintas daquela que está iniciando o pagamento.

> NOTE
> 
> Importante
> 
> É preciso ter uma chave PIX cadastrada em sua conta Mercado Pago. Caso ainda não tenha, [clique aqui](https://www.youtube.com/watch?v=60tApKYVnkA) para mais informações sobre como cadastrá-las.

Utilize nossas APIs ou SDKs oficiais para construir sua própria experiência de pagamento via Open Finance no seu website ou aplicativo móvel. De configurações básicas a avançadas, controlando todo o fluxo conforme a experiência do seu checkout.

### Características
* Crie sua própria plataforma de Iniciação de Pagamentos dentro do seu site.
  
* Desenvolva e personalize a experiência de Iniciação de Transação de Pagamentos. 
  
* Permita que seus clientes paguem utilizando saldo de outras contas. 
  
* Comunique-se diretamente com seus clientes através das mensagens de erro com respostas personalizadas.

### Integrar Open Finance em seu Checkout
Antes de iniciar uma cobrança utilizando Open Finance é preciso ter configurado o meio de pagamento Pix.  Para saber como realizar a configuração e a integração, [acesse a documentação](/developers/pt/docs/checkout-api/prerequisites).

Uma vez que você tenha configurado o meio de pagamento corretamente, será preciso inserir uma nova informação à [requisição de criar pagamento](/developers/pt/reference/payments/_payments/post_), através do parâmetro point_of_interaction, indicando a modalidade Open finance. Isso é válido tanto via API, quanto pelos nossos SDKs, conforme os exemplos a seguir:

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
> Informações importantes
> 
> - Para este meio de pagamento, o número de **CPF é obrigatório**
> - O parâmetro `callback_url` deve conter o valor da URL que mostra a tela de feedback

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

## Regras de Usabilidade
Para garantir o entendimento do usuário pagador sobre o uso da opção da Iniciação de Transação de Pagamentos do Open Finance **é necessário garantir que no Checkout haja clareza de que aquele é um pagamento realizado via Open Finance através do ecossistema de pagamentos Mercado Pago**.

![Tela para escolha ](/images/api/open-finance(advanced)/usability-rule1.png)

Confira abaixo algumas dicas de usabilidade para melhorar o fluxo de pagamentos via Open Finance.

### Listagem de bancos
Apresente uma lista de possíveis instituições financeiras para que o usuário possa selecionar a que ele gostaria de seguir com o pagamento. 

Para permitir que o cliente inicie uma transação de pagamento via **Iniciador de Transação de Pagamentos do Open Finance**, você precisa realizar o seguinte:

#### 1 - Disponibilizar a lista de Instituições Financeiras disponíveis
Para ter acesso à lista, basta realizar a seguinte requisição:

```curl
curl --request GET \
  --url https://api.mercadopago.com/open-banking/payments/v1/banks \
  --header 'Authorization: Bearer <ENV_ACCESS_TOKEN>'
```

**Parâmetros de filtro para a requisição**

| Parâmetro | Localização | Tipo     | Valores              | Descrição                                                                                                                                                                                                                             |
|-----------|-------------|----------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| segment   | Query       | Opcional | [personal, business] | Permite filtrar por bancos para PJ ou PF.                                                                                                                                                                                             |
| platform  | Query       | Opcional | [desktop, mobile]    | Permite filtrar por bancos que possuem uma experiência específica, caso o pagamento esteja sendo feito no desktop, a lista de bancos pode ser filtrada para exibir apenas os bancos que possuem uma experiência desktop e vice-versa. |

> NOTE
> 
> Nota
> 
> Por padrão, a API retorna todos os bancos, sem nenhum tipo de filtro.

**Exemplo de resposta**

```json
{
   "data": [
       {
           "id": "81d8e591-5d8e-46e2-8b4a",
           "name": "Mercado Pago - Payments",
           "code": "370",
           "ispb": "10573521",
           "logo": "https://http2.mlstatic.com/open-banking/assets/88b4a.svg",
           "isFrequentlyUsed": true
       },
       {
           "id": "87290355-03e2-4cf9-b30b",
           "name": "Mock Bank",
           "code": "345",
           "ispb": "",
           "logo": "https://http2.mlstatic.com/open-banking/assets/8b30b.svg",
           "isFrequentlyUsed": false
       }
   ]
}
```

**Erros possíveis**

| Código do erro | Tipo         | Descrição                                        |
|----------------|--------------|--------------------------------------------------|
| 401            | unauthorized | Acesso não autorizado                            |
| 403            | forbidden    | Você não tem permissão para acessar este recurso |


> WARNING
> 
> Importante
> 
> Como pré-requisito para realizar a chamada a este endpoint é necessário que seja passado o `access_token` de produção para chamadas produtivas e o de teste para chamadas de testes.

Atualmente as Instituições Financeiras participantes homologadas e disponíveis para serem iniciadas são:

| Instituição Financeira    | App | Web |
|---------------------------|-----|-----|
| Nubank                    | OK  | OK  |
| Bradesco PF               | OK  | OK  |
| PicPay Servicos S.A       | OK  | OK  |
| Banco do Brasil           | OK  | OK  |
| Banco Bradesco S.A (Next) | OK  | OK  |
| Santander PF              | OK  | OK  |
| Itaú PF                   | OK  | OK  |
| XP                        | OK  | OK  |
| iti - Itaú                | OK  |  -  |
| Pagbank                   | OK  | OK  |
| Neon                      | OK  | OK  |
| Sicredi                   | OK  | OK  |
| Woop                      | OK  | OK  |

> WARNING
> 
> Importante
> 
> A lista de Instituições Financeiras é dinâmica e poderá ser alterada em caso de indisponibilidade.

#### 2 - Criar um pagamento
Já com o ID do banco escolhido pelo usuário, crie um pagamento e passe essa informação para o campo transaction_data.bank_info.origin_bank_id da requisição de criação de pagamentos.

Para mais informações, acesse a seção de criação de pagamentos desta documentação, ou [clicando aqui](#bookmark_criar_pagamento)

#### Dicas para exibição
O vendedor poderá exibir as instituições favoritas primeiro na lista ou no formato que preferir, porém, **não poderá impedir que o cliente possa selecionar alguma das instituições disponíveis para uso**.

![Lista de bancos disponíveis](/images/api/open-finance(advanced)/display-tips.png)

> WARNING
> 
> Importante
> 
> Lembre-se de que, por enquanto, o Banco Central do Brasil obriga a todos os participantes do Open Finance a exibirem todas as Instituições Financeiras disponíveis para serem utilizadas sem serem excluídas da lista, com exceção em casos de erros, indisponibilidade ou inoperância. 

### Revisa e Confirma
A tela de revisa e confirma deve contemplar, no mínimo, as seguintes informações:

* A forma de pagamento;

* O valor da transação de pagamento;

* As informações referentes ao recebedor da transação de pagamento;

* Data do pagamento.

* Aviso de redirecionamento para dar maior visibilidade ao cliente quanto às próximas etapas. 

![Tela de revisa e confirma](/images/api/open-finance(advanced)/review-confirm.png)

> WARNING
> 
> Importante
> 
> Os Informativos de termos e condições podem ser apresentados como um link para leitura, estando a cargo da Instituição Iniciadora de Transação de Pagamentos definir se exibirá uma ação obrigatória por parte do cliente. 

## Criar pagamento
Para conseguir iniciar um pagamento Pix via Open Finance o vendedor deverá utilizar o método de Criação de Pagamento da API, com alguns requisitos:

* As informações do pagador são obrigatórias e devem ser inseridas no atributo `payer`

* Deve ser enviado uma URL de callback, através do campo `callback_url`, para mostrar o feedback ao pagador. Para mais informações, acesse a [seção de callback](#bookmark_callback) desta documentação. 

**Requisição**

```curl
curl --request POST \
  --url 'https://api.mercadopago.com/v1/payments?access_token=XXX' \
  --data '{
  "payment_method_id": "pix",
  "transaction_amount": 5,
  "description": "Pagamento Openfinace",
  "payer": {
    "email": "test_user_58128038@testuser.com",
    "identification": {
      "number": "15635614680",
      "type": "CPF"
    },
  },
  "point_of_interaction": {
    "linked_to": "openfinance",
       "transaction_data": {
		"bank_info": {
			"origin_bank_id": "81d8e591-5d8e-46e2-8b4a-9819e4739fd9"
	 }
  },
  "token": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
  "callback_url": "https://example.com"
}'
```

Para a autenticação e confirmação na Instituição Financeira selecionada, o cliente deverá ser redirecionado para o canal apropriado através da url retornada no parâmetro `ticket_url` na resposta da requisição. 

> NOTE
> 
> Nota
> 
> O valor retornado em `ticket_url` é a url do Carousel Redirect.

**Resposta**

```json
{
    "id": 22831702804,
    "date_created": "2022-06-02T10:17:13.865-04:00",
    "date_approved": null,
    "date_last_updated": "2022-06-02T10:17:13.865-04:00",
    "date_of_expiration": "2022-06-03T10:17:13.536-04:00",
    "money_release_date": null,
    "operation_type": "regular_payment",
    "issuer_id": null,
    "payment_method_id": "pix",
    "payment_type_id": "bank_transfer",
    "status": "pending",
    "status_detail": "pending_waiting_transfer",
    "currency_id": "BRL",
    "description": "Pagamento Openfinace",
    "live_mode": true,
    "sponsor_id": null,
    "authorization_code": null,
    "money_release_schema": null,
    "taxes_amount": 0,
    "counter_currency": null,
    "brand_id": null,
    "shipping_amount": 0,
    "pos_id": null,
    "store_id": null,
    "integrator_id": null,
    "platform_id": null,
    "corporation_id": null,
    "collector_id": 456852241,
    "payer": {
        "type": null,
        "id": "435906493",
        "operator_id": null,
        "email": null,
        "identification": {
            "type": null,
            "number": null
        },
        "phone": {
            "area_code": null,
            "number": null,
            "extension": null
        },
        "first_name": null,
        "last_name": null,
        "entity_type": null
    },
    "marketplace_owner": null,
    "metadata": {},
    "additional_info": {
        "available_balance": null,
        "nsu_processadora": null,
        "authentication_code": null
    },
    "order": {},
    "external_reference": "45ba90f2-a37f-4d57-bce2-e46aae3c3b04",
    "transaction_amount": 5,
    "transaction_amount_refunded": 0,
    "coupon_amount": 0,
    "differential_pricing_id": null,
    "deduction_schema": null,
    "callback_url": null,
    "installments": 1,
    "transaction_details": {
        "payment_method_reference_id": null,
        "net_received_amount": 0,
        "total_paid_amount": 5,
        "overpaid_amount": 0,
        "external_resource_url": null,
        "installment_amount": 0,
        "financial_institution": null,
        "payable_deferral_period": null,
        "acquirer_reference": null,
        "bank_transfer_id": null,
        "transaction_id": null
    },
    "fee_details": [],
    "charges_details": [],
    "captured": true,
    "binary_mode": false,
    "call_for_authorize_id": null,
    "statement_descriptor": null,
    "card": {},
    "notification_url": null,
    "refunds": [],
    "processing_mode": "aggregator",
    "merchant_account_id": null,
    "merchant_number": null,
    "acquirer_reconciliation": [],
    "point_of_interaction": {
        "type": "OPENPLATFORM",
        "linked_to": "openfinance",
        "business_info": {
            "unit": "online_payments",
            "sub_unit": "default"
        },
        "application_data": {
            "name": null,
            "version": null
        },
        "transaction_data": {
            "qr_code": null,
            "bank_transfer_id": null,
            "transaction_id": null,
            "financial_institution": null,
            "ticket_url": null,
            "bank_info": {
                "payer": {
                    "account_id": null,
                    "id": null,
                    "long_name": null,
                    "external_account_id": null
                },
                "collector": {
                    "account_id": null,
                    "long_name": null,
                    "account_holder_name": "Salazar Tucker",
                    "transfer_account_id": null
                },
                "is_same_bank_account_owner": null,
                "origin_bank_id": null,
                "origin_wallet_id": null
            },
            "infringement_notification": {
                "type": null,
                "status": null
            },
          "qr_code_base64":null
        }
    }
}
```

## Autorização e redirecionamento
O redirecionamento deve ocorrer para o canal digital seguro da Instituição Financeira detentora da conta, podendo ser:

* App-to-App
  
* App-to-Browser
  
* Browser-to-Browser
  
* Browser-to-App

![Exemplo de tela de redirecionamento](/images/api/open-finance(advanced)/authorization.gif)


É necessário avisar que o redirecionamento faz parte do Open Finance, portanto o cliente está sendo redirecionado, seguramente, da Instituição Iniciadora de Transação de Pagamento - Mercado Pago para a Instituição Detentora de Conta, usando os mesmos elementos gráficos para ambas as instituições.

> WARNING
> 
> Importante
> 
> Lembre-se de que o Banco Central do Brasil obriga que o cliente esteja ciente da Iniciadora de Transação de Pagamentos que está orquestrando a transação, por esse motivo é necessário nesse passo informar que a transação é "realizada através do Mercado Pago".

## Callback
Após a autorização do pagamento na outra instituição, o usuário será redirecionado para uma **página web do Mercado Pago**, sendo regulatória para este fluxo de pagamento, e logo em seguida direcionado para a url inserida no atributo `callback_url` no momento da criação do pagamento. 

Neste momento, se quiser obter o status atual do pagamento, é necessário realizar uma consulta na API de pagamentos, através do método [Obter Pagamento](/developers/pt/reference/payments/_payments_search/get), usando o  id do pagamento retornado na url.

> NOTE
> 
> Nota
> 
> A url de callback virá com o parâmetro `paymentId` contendo o id do pagamento criado. 

Caso necessite abrir uma aplicação móvel, recomendamos a criação de um [Android App Link](https://developer.android.com/training/app-links) e/ou [Universal Link](https://developer.android.com/training/app-links). Vale lembrar que em Androids com versões anteriores a 12 o usuário tem a possibilidade de escolher onde abrir o App Link como mostra a imagem abaixo:

![Exemplo de Android solicitando onde abrir](/images/api/open-finance(advanced)/callback.png)

Por isso, mesmo se o fluxo for encerrar em um aplicativo móvel, **recomendamos que também crie uma tela web de handover** para ser usada quando o usuário desejar abrir o link no navegador.

## Mensagens de resposta
Ofereça aos seus clientes informações claras e precisas sobre os possíveis erros na Iniciação de Transação de Pagamento ou o estado dos pagamentos realizados. Isso permite notificá-los sobre que ação podem realizar para solucionar ou comunicar se há algum passo extra a ser realizado.

Por exemplo, se a conta escolhida para iniciação de pagamento não possui saldo suficiente para a compra, pode-se recomendar que se tente pagar novamente com outro meio de pagamento para completar a operação. Para saber mais sobre os possíveis erros, confira a referência no retorno da API.

> WARNING
> 
> Importante
> 
> Lembre-se de que o Banco Central do Brasil obriga que toda transação iniciada via Iniciador de Transação de Pagamentos expire depois de 60 minutos.

**Status de Pagamento**
| Status   | Cenário                                    | Mensagem sugerida                    |
|----------|--------------------------------------------|--------------------------------------|
| PENDING  | Cenários em que o pagamento está pendente. | Seu pagamento está sendo processado. |
| APPROVED | Cenários em que o pagamento está aprovado. |      Seu pagamento foi aprovado.     |
| REJECTED |  Cenários em que o pagamento é rejeitado.  |     Seu pagamento foi rejeitado.     |

**Motivos de rejeição**

| Status                     | Cenário                                                                                       | Mensagem sugerida                                                                                                                         |
|----------------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
|   REJECTED_ACCOUNT_ERROR   | Cenários em que há algum tipo de erro na conta do usuário.                                    | Não foi possível realizar a transação devido a um problema na sua conta. Entre em contato com o seu banco e tente novamente.              |
|     INSUFFICIENT_AMOUNT    |        Cenários em que usuário pagador não tem saldo em conta para efetuar o pagamento.       | Saldo insuficiente na conta que você escolheu. Escolha outra conta e tente novamente.                                                     |
|    REJECTED_CAP_EXCEEDED   |                   Cenários em que o limite de valores do Pix é ultrapassado.                  | Esse valor excede o seu limite diário de Pix. Volte para a {{instituição detentora}} e escolha um valor menor, ou tente novamente amanhã. |
| REJECTED_SETTLEMENT_FAILED | Cenários onde o cliente não autorizou o pagamento e/ou teve algum erro durante a autorização. | No momento, não é possível realizar essa transação. Pedimos desculpas por isso. Tente novamente mais tarde.                               |


## Testar integração
Para testar sua integração, basta criar um pagamento PIX Open Finance e realizar o seguinte:

* Redirecionar para a url informada em `point_of_interaction.transaction_data.ticket_url`, que possui o link para o ambiente de Sandbox;

* Informar o `transaction_data.bank_info.origin_bank_id` com o id do banco escolhido, resultado da listagem pública de bancos disponíveis para o Open Finance;

* Informar a url de callback no `callback_url`.

No ambiente de Sandbox será mostrada uma tela que simula a instituição detentora da conta, com três botões que irão permitir escolher qual será o status final desse pagamento de teste:

* approved
  
* pending
  
* rejected.

Por fim, após escolher o status final do pagamento, ocorrerá o redirecionamento para a tela de feedback.

Note que, somente no fluxo de testes após escolher o status final do pagamento, antes de acontecer o redirecionamento de volta para a url passada no `callback_url` será mostrada uma tela de “espera” que não aparecerá nos fluxos produtivos.

> WARNING
> 
> Importante
> 
> Nos testes em Sandbox não é possível ver o callback que ocorre no navegador (no domínio do Mercado Pago por questões regulatórias). 