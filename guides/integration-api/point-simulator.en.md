# Point Simulator

This tool allows you to test your integration safely as if you were in your store with a physical device.
With this simulator, you will be able to create a payment intent and process it from the virtual device, simulating the possible statuses that a payment can present.

The simulator has two modes of usage:

* **PDV mode**: simulates the integration of a complete system (device and POS) with our Integrations API. Access the [PDV mode simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).
* **Device mode**: simulates a virtual Point device so that you can test your integration from HTTP requests. Access the [Device Mode Simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).

## How to use the simulator

### 1. Configure your credentials

When using the simulator for the first time, you will need to enter your keys and select one of your available devices.

* **PDV mode:** you must enter your test `access-token` and the simulator will assign you a virtual device.

* **Device mode:** you must enter your test `access-token` and your device id obtained when [listing your devices](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/integration-api/create-payment-intent#bookmark_get_the_list_of_your_available_devices).

> WARNING
>
> Important
> 
> Remember that to use the simulator you must configure a test `access-token`(`TEST-XXXXX-XXXXX-XXXXXXX`) and you can get it in your [integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), option **My credentials > Test credentials**.
> <br/>
> To query a payment made by the simulator through the [payments API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get), you must use the test `access-token` (the same one used in the simulator).

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

If you followed the configuration steps for the [Webhooks notifications](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications), it is time for you to review your records. There, you will see that the notification of the transaction status was sent.

> NOTE
>
> Note
>
> The simulator will allow you to make test payments, in this way, you can check out all the information corresponding in the section [Payment API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get).