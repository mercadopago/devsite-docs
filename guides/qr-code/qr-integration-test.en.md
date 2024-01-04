# Test your integration

## Create test users

Use test accounts to ensure that your integration supports all possible flows and scenarios. They have the same features as a real Mercado Pago account, which allows you to test the functioning of the integrations you are developing.

If you haven't created test users yet, go to [Prerequisites](/developers/en/docs/qr-code/pre-requisites) to learn how to do it.

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


## Validate your integration

We detailed all the necessary scenarios you should test to ensure your system's successful integration with Mercado Pago.

**Validation events:**

|QR Model|Link|
|---|---|
|Attended|[Click here](/developers/en/docs/qr-code/additional-content/qr-validation-cases/qr-attended-events)|
|Dynamic|[Click here](/developers/en/docs/qr-code/additional-content/qr-validation-cases/qr-dynamic-events)|