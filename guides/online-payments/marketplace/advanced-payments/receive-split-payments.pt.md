---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Início rápido

### Pagamentos de Marketplace com split

> WARNING
>
> Pré-requisitos
>
> Entre em contato com seu executivo de conta para configurar corretamente seu Marketplace.
> Esse guia assume que seu [Marketplace](https://www.mercadopago.com.br/developers/pt/guides/online-payments/marketplace/checkout-api/introduction/) já foi criado e configurado corretamente e que já sabe como [gerar um token de cartão](https://www.mercadopago.com.br/developers/pt/guides/online-payments/checkout-api/receiving-payment-by-card).
>
> Seus vendedores devem ter uma conta MP e devem [te dar permissões para cobrar pagamentos em seu nome](https://www.mercadopago.com.br/developers/pt/guides/online-payments/marketplace/advanced-payments/sellers-permissions).

O modelo de negócio de carrinho de compras consiste em um pagamento do valor total da transação, feito pelo Comprador, que é dividido nos pagamentos correspondentes a cada Vendedor pela venda de seu produto. Por sua vez, para cada pagamento feito aos Vendedores, o Marketplace pode reter uma parte do valor da venda como comissão.

Em seguida, vemos como criar um Advanced Payment, em que o comprador paga com um cartão de crédito e a divisão é feita para dois vendedores:

#### Request
```curl
curl -X POST \
    -H 'Accept: application/json' \
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
