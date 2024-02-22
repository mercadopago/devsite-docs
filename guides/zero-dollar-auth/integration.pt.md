# Criar validação Zero Dollar Auth

Em seu frontend utilize nossa biblioteca **Mercado Pago SDK JS** para capturar dados do cartão e gerar o token.

> NOTE
>
> Importante
>
> Também é possível gerar token do cartão utilizando o Brick de CardPayment. Veja a documentação [Renderização padrão](/developers/pt/docs/checkout-bricks/card-payment-brick/default-rendering) do CardPayment para mais detalhes.


```JavaScript
   const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```

Em seguida, preencha os campos necessários conforme a tabela abaixo e envie os dados, juntamente com o token do cartão, ao backend, executando uma requisição ao endpoint [/v1/payments](/developers/pt/reference/payments/_payments/post).


| Parâmetro | Tipo | Descrição | Exemplo |
|---|---|---|----|
| token | String | Token do cartão | 12346622341 |
| payment_method_id | String | Indica o identificador do meio de pagamento selecionado para efetuar o pagamento | master |
| payer.id | String | ID do pagador | 123456 |
| payer.type | String | Tipo de identificação do pagador associado | customer |
| description | String | Descrição da validação | "validação de cartão com valor zero dollar master crédito com cvv" |
| transaction_amount | Number | Custo da validação | Sempre zero (0) para Zero Dollar Auth |

```curl
curl --location --request POST 'https://api.mercadopago.com/v1/payments' \
--header 'Authorization: Bearer TOKEN' \
--header 'Content-Type: application/json' \
--header 'X-Card-Validation: card_validation' \
--data-raw '{
    "token": "TOKEN",
    "payment_method_id": "master",
    "payer": {
        "id": "1271664686-sl7aQsXWRh6AkC"
        "type" : "customer"
    },
    "description": "validação de cartão com valor zero dollar master",
    "transaction_amount": 0
}'
```

Ao realizar as requisições é possível que diferentes respostas e status retornem. Para mais detalhes sobre as respostas recebidas, veja a seção Retornos da API.



