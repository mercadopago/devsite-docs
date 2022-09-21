> SERVER_SIDE
>
> h1
>
> Payment submission to Mercado Pago

To continue with the Mercado Pago payment process, your backend should know how to receive form information with the generated token and the filled out data. Your backend should make available a `/process_payment` endpoint to receive all the data.

Once the request –with all the collected information– is in your backend, it should be submitted to Mercado Pago through our APIs.  The minimum mandatory fields to submit are: `token`, `transaction_amount`, `installments`, `payment_method_id` and `payer.email`.

For this to work, you should configure your [private key](/developers/en/guides/additional-content/credentials/credentials). Also, to interact with our APIs, you should use [Mercado Pago official SDK](/developers/en/docs/sdks-library/landing).

> NOTE
> 
> Important
>
> Before making the API call, it is important to validate that the data that will be sent is correct. So, if you already have some kind of session on your integration server where the purchase context information is stored, you can use it to compare the data received from the frontend.

In the following sections, check out how to send to Mercado Pago payments made with:

----[mlb]----
* Cards
* Mercado Pago Wallet
* Pix
* Other payment methods
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
* Cards
* Mercado Pago Wallet
------------