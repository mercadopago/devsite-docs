> SERVER_SIDE
>
> h1
>
> Envio de pagamentos

Para continuar o processo de pagamento ao Mercado Pago, é necessário que seu backend possa receber a informação do formulário com o token gerado e os dados completos. O seu backend deverá disponibilizar um endpoint `/process_payment` para receber ali todos os dados depois de realizar a ação submit.

Já estando no seu backend com toda a informação coletada, é o momento de enviar a solicitação ao Mercado Pago através das nossas APIs.

> NOTE
>
> Nota
>
> Para consultar tipagens e especificações que poderão ser enviados e recebidos pelo Brick no _callback_ de _onSubmit_, consulte a [documentação técnica](https://github.com/mercadopago/sdk-js/blob/main/API/bricks/payment.md).

Tenha em conta que para que esse passo funcione é necessário que configure sua [chave privada](/developers/pt/guides/additional-content/your-integrations/credentials) e que para interagir com nossas APIs, recomendamos utilizar o [SDK oficial do Mercado Pago](/developers/pt/docs/sdks-library/landing).

> WARNING
> 
> Importante
>
> Antes de realizar a chamada da API é importante validar se os dados que serão enviados estão corretos. Por isso, caso você já possua algum tipo de sessão em seu servidor de integração no qual as informações de contexto de compra estão armazenadas, você pode utilizá-las a fim de comparar os dados recebidos do frontend.

Veja nas seções a seguir como enviar ao Mercado Pago os pagamentos realizados com:

----[mlb]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago e Parcelamento ser cartão](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Pix](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/pix)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods)

------------
----[mco]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [PSE](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/pse)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods)

------------
----[mlc]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)

------------
----[mla, mlm]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago e Parcelamento ser cartão](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods)

------------
----[mpe, mlu]----
* [Cartões](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Conta Mercado Pago](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Outros meios de pagamento](/developers/pt/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods)

------------