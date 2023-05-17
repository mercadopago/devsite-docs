> SERVER_SIDE
>
> h1
>
> Payments submission

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data. Your backend should make available a `/process_payment` endpoint to receive all the data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  

For this to work, you should configure your [private key](/developers/en/guides/additional-content/credentials/credentials). Also, to interact with our APIs, you should use [Mercado Pago official SDK](/developers/en/docs/sdks-library/landing).

> NOTE
> 
> Important
>
> Before making the API call, it is important to validate that the data that will be sent is correct. So, if you already have some kind of session on your integration server where the purchase context information is stored, you can use it to compare the data received from the frontend.

In the following sections, check out how to send to Mercado Pago payments made with:

----[mlb]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet and Installments without card](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Pix](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/pix)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/brasil)

------------
----[mla]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet and Installments without card](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/argentina)

------------
----[mlm]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet and Installments without card](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet-credits)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/mexico)

------------
----[mpe]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/peru)

------------
----[mco]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [PSE](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/pse)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/colombia)

------------
----[mlu]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet)
* [Other payment methods](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/other-payment-methods/uruguay)

------------
----[mlc]----
* [Cards](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/cards)
* [Mercado Pago Wallet](/developers/en/docs/checkout-bricks/payment-brick/payment-submission/wallet)

------------