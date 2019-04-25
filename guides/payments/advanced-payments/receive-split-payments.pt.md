# Início rápido

### Pagamentos de Marketplace com split

> WARNING
>
> Pré-requisitos
>
> Entre em contato com seu executivo de conta para configurar corretamente seu Marketplace.
> Esse guia assume que seu [Marketplace](https://www.mercadopago.com.br/developers/pt/guides/marketplace/api/introduction/) já foi criado e configurado corretamente e que já sabe como [gerar um token de cartão](https://www.mercadopago.com.br/developers/pt/guides/payments/api/receiving-payment-by-card).
> 
> Seus vendedores devem ter uma conta MP e devem [te dar permissões para cobrar pagamentos em seu nome](https://www.mercadopago.com.br/developers/pt/guides/advanced-payments/sellers-permissions).

O modelo de negócio de carrinho de compras consiste em um pagamento do valor total da transação, feito pelo Comprador, que é dividido nos pagamentos correspondentes a cada Vendedor pela venda de seu produto. Por sua vez, para cada pagamento feito aos Vendedores, o Marketplace pode reter uma parte do valor da venda como comissão.

Em seguida, vemos como criar um Advanced Payment, em que o comprador paga com um cartão de crédito e a divisão é feita para dois vendedores:

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

> NOTE
> 
> Nota
> 
> O parâmetro MKT_ACCESS_TOKEN é o access_token da sua aplicação.

Dentro de `body` são definidos os seguintes campos:
* `payer`: Informação do Comprador.
* `payments`: Pagamento do Comprador pelo total da transação.
* `disbursements`: Basicamente, as regras de divisão de pagamentos para os vendedores são definidas.
    * `collector_id`: ID da conta Mercado Pago do Vendedor.
    * `application_fee`: Comissão retida pelo Marketplace.
    * `money_release_days`: Quantidade de dias em que o dinheiro do Vendedor será liberado a partir da aprovação do pagamento.
* `external_reference`: Identificador que define o Marketplace para esse advanced payment em particular.

```json
{
  "payer": {
    "email": "test@user.com"
  },  
  "payments": [
    {
      "payment_method_id": "visa",
      "payment_type_id": "credit_card",
      "token": "jhuyt786r5yhfcgjvhkuoy7t86r75erdfhcgv",
      "transaction_amount": 1000,
      "installments": 1,
      "processing_mode": "aggregator"
    }
  ],
  "disbursements": [
    {
      "amount": 200,
      "external_reference": "ref-collector-1",
      "collector_id": 44444444,
      "application_fee": 20,
      "money_release_days": 30
    },
    {
      "amount": 800,
      "external_reference": "ref-collector-2",
      "collector_id": 55555555,
      "application_fee": 80,
      "money_release_days": 30
    }
  ],
  "external_reference": "ref-transaction"
}
```

A resposta bem sucedida será um `HTTP Status 201 Created` e retornará o advanced payment completo. Caso contrário, retornará o `HTTP Status` correspondente ao erro e uma mensagem de esclarecimento.

```json
{
  "id": 64576879,
  "status": "approved",
  "payments": [
    {
      "id": 967654546,
      ...
    }
  ],
  "disbursements": [
    {
      "id": 987654,
      ...
    },
    {
      "id": 456678,
      ...
    }
  ],
  ...
}
```

Na sua conta do Mercado Pago você verá o valor de suas comissões creditadas e cada Vendedor verá em sua conta o saldo atualizado com o valor correspondente.

### Pagamentos Wallet

A modalidade Wallet Payments permite que um Vendedor processe pagamentos com a permissão do Pagador para acessar sua carteira sem ter que solicitar informações do cartão ou seleção de meios de pagamento em cada transação.

> WARNING
>
> Pré-requisitos
>
> Para efetuar pagamentos no modo Wallet, você deve configurar seu aplicativo corretamente seguindo o [guia de integração](https://www.mercadopago.com.br/developers/pt/guides/advanced-payments/wallet-config-application).

#### Request
```curl
curl -X POST \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments?access_token=SELLER_TOKEN' \
    -d '{...}'
```

Dentro do `body` é definido um objeto ` wallet_payment` que conterá os dados para o pagamento:
* `transaction_amount`: valor da transação.
* `description`: Descrição da transação.
* `external_reference`: Identificador da transação definida pelo vendedor.
* `access_token`: Credenciais do pagador obtidas solicitando permissões com o MP Connect.

#### Body
```json
{
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google",
      "external_reference":"Pago_123",
      "access_token":"PAYER_ACCESS_TOKEN"      
   }
}
```

A resposta bem sucedida será um `HTTP Status 201 Created` e retornará o advanced payment completo. Caso contrário, retornará o `HTTP Status` correspondente ao erro e uma mensagem de esclarecimento.

```json
{
   "id":90458724,
   "status":"approved",
   "wallet_payment":{
      "transaction_amount":700.50,
      "description":"Payment Google Pay"
   },
   "payments":[
      {
         "id":3870106238,
         "status":"approved",
         "status_detail":"accredited",
         "payment_type_id":"account_money",
         "payment_method_id":"account_money",
         "transaction_amount":700.50,
         "description":"Payment Google Pay",
         "capture":true
      }
   ],
   "payer":{
      "id":786547
   },
   ... 
}
```
