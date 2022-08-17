# Payment methods
 
With the preferences created, it is possible to customize the Checkout Pro integration and determine the payment methods that will be accepted.
 
Through a GET on the endpoint [/v1/payment_methods](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payment_methods/_payment_methods/get), you can access the list of each of the available options and with it, define whether you want, for example, to exclude a payment method or define a maximum number of installments for a purchase.
 
To define the payment methods that will be offered, send the `payment_methods` attribute informing the payment method that will be offered to the endpoint [/checkout/preferences](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/preferences/_checkout_preferences/post) and execute the request or, if you prefer, check [SDKs](/developers/en/docs/sdks-library/landing) and perform the integration using our libraries.