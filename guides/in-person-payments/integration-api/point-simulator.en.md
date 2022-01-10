# Point Simulator

This tool allows you to test your integration safely as if you were in your store with a physical device.
With this simulator, you will be able to create a payment intent and process it from the virtual device, simulating the possible statuses that a payment can present.

The simulator has two modes of usage:


* **PDV Mode**: simulates the integration of a complete system (device and POS) with our Integrations API. Access the [PDV Mode Simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true)
* **Device Mode**: simulates a virtual Point device so that you can test your integration from HTTP requests. Access the [Device Mode Simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

## How to use the simulator

### 1. Configure your credentials

When using the simulator for the first time, you will need to enter your keys and select one of your available devices.

To use **PDV Mode** you will need your Access Token key. If you are using a test Access Token, the simulator will assign you a virtual device.

When using **Device Mode**, you must enter your Access Token and your Device Id obtained when [listing your devices](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/integration-api/create-payment-intent#bookmark_Create_the_payment_intent)

### 2. Simulate a payment intent

We have prepared different scenarios that allow you to simulate a real experience. In order to do this, you must select the amount according to the status you want to obtain:

| Status | Amount |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Any other value different from the previous ones |


### 3. Get the payment intent from the device

Once the payment intent has been created, you must click on the green button of the virtual device to obtain the created payment intent. Once found, you can verify that the amount initially entered matches the one shown on the device screen.

### 4. Swipe the card and process the payment

If the previous step was successful, you can click on the animation of the card, which represents the card swipe in the device. Processing will begin immediately and the device will display the corresponding result.

### 5. Receive the notification

If you followed the configuration steps for the [Webhooks notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/integration-api/integration), it is time for you to review your records. There, you will see that the notification of the transaction status was sent.

