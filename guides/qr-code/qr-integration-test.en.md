# Test your integration

Test users allow testing your system's integration with Mercado Pago without using cash.

To run tests you must have a minimum of two users: a buyer and a seller.
> If you have not generated your users yet, you can do so in the [previous requirements](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/qr-code/pre-requisites).

| Test user types | Description |
| --- | --- |
| Seller | **Test account used to obtain the credentials** that you set up in your system to enable the interaction with Mercado Pago APIs. You can also access the [Mercado Pago account](https://www.mercadopago.com.ar/activities) and verify the tested transactions. |
| Buyer| **Test account to test the purchase process**. You must access the Mercado Pago App with the data of this user. If you have funds or saved cards available in your account, those will be available as a payment method. |

## Test cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## Test payment process

### 1. Assign an order to a checkout using your seller user.

To test the attended model, generate an order with the test user credentials you want to use as a seller and send an order to the previously created QR.

### 2. Make a payment with your buyer user.

- A. Sign Mercado Pago App in with your buyer test user.
- B. Click on Pay with QR and scan the POS QR code.
- C. Choose a saved card or enter data of a new one, and pay.

### 3. Receive order notifications

Lastly, make sure you’ve received a status notification in your system. And it's done!

