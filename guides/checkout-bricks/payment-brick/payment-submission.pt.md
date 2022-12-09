> SERVER_SIDE
>
> h1
>
> Enviar pagamento ao Mercado Pago

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos. O seu backend deverá disponibilizar um endpoint `/process_payment` para receber ali todos os dados depois de realizar a ação submit.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs. Os campos mínimos requeridos para enviar são: `token`, `transaction_amount`, `installments`, `payment_method_id` e o `payer.email`.

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada](/developers/pt/guides/additional-content/credentials/credentials) e que para interagir com nossas APIs, recomendamos utilizar o [SDK oficial do Mercado Pago](/developers/pt/docs/sdks-library/landing).

> NOTE
> 
> Importante
>
> Antes de realizar a chamada da API é importante validar se os dados que serão enviados estão corretos. Por isso, caso você já possua algum tipo de sessão em seu servidor de integração no qual as informações de contexto de compra estão armazenadas, você pode utilizá-las a fim de comparar os dados recebidos do frontend.

Veja nas seções a seguir como enviar ao Mercado Pago os pagamentos realizados com:

----[mlb]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Pix](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/pix)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/brasil)
------------

----[mla]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/argentina)
------------

----[mlm]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/mexico)
------------

----[mpe, mco, mlu, mlc]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
------------