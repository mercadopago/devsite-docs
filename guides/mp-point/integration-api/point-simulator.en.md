# Test your integration with the Point Simulator

The Point Simulator is a tool that allows you to interact with various endpoints of our API to integrate Point of Sale devices with our system. Its main objective is to help you understand the flow of creating and canceling a payment attempt.

Please note that this tool is not an exact replica of the device, but rather an educational tool designed to familiarize you with our API.

The simulator has two modes of use:

* **PDV mode**: simulates the integration of a complete system (device and Point of Sale) with our Integration API. Access the [PDV mode simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/?ignoreapidoc=true).

 > To use the simulator, it is not necessary to [change the operation mode](/developers/en/reference/integrations_api/_point_integration-api_devices_device-id/patch) as the simulator works by default in PDV mode.

* **Device mode**: simulates a virtual Point of Sale device so you can test your integration using HTTP requests. Access the [device mode simulator](https://api.mercadopago.com/point/integrator-simulator/sandbox/device?ignoreapidoc=true).


To learn how to use the simulator, follow the steps below.

## 1. Generate the test environment

To start testing integrations and payment flows with the Point Simulator, you will need to generate [test users](developers/en/docs/mp-point/additional-content/your-integrations/test/accounts) and access their production credentials.

If you prefer, you can also create test users using the following command:

``` curl
curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer ${TEST_ACCESS_TOKEN}' \
"https://api.mercadopago.com/users/test" \
-d '{"site_id":"MLM","description" : "a description"}'
```

## 2. Configure your credentials

When using the simulator for the first time, you will need to enter [your credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials). To obtain them, access [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/applications), option **My credentials > Test credentials**.

In addition, you will need to select one of your available devices.

* **PDV mode**: you must enter your test `access-token` (`TEST-XXXXX-XXXXX-XXXXXXX`) and the simulator will assign you a virtual device.

* **Device mode**: you must enter your test `access-token` (`TEST-XXXXX-XXXXX-XXXXXXX`) and the device ID obtained when [listing your devices](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/integration-api/create-payment-intent#bookmark_obtén_el_listado_de_tus_dispositivos_disponibles).

## 3. Simulate a payment intent

We have prepared different scenarios that allow you to simulate a real experience. In order to do this, you must select the amount according to the status you want to obtain:

| Status | Amount |
|---|---|
| Reversed | $1100 |
| Rejected | $1200 |
| Error | $1300 |
| Successful | Any other value different from the previous ones |

> WARNING
>
> Important
>
> If you use the Simulator in device mode, remember to use `X-Test-Scope:sandbox` in the header to ensure that the payment attempt reaches the simulator device.

## 4. Get the payment intent from the device

Once the payment intent has been created, you must click on the green button of the virtual device to obtain the created payment intent. 
Once found, you can verify that the amount initially entered matches the one shown on the device screen.

## 5. Swipe the card and process the payment

If the previous step was successful, you can click on the animation of the card, which represents the card swipe in the device. Processing will begin immediately and the device will display the result.

> WARNING
>
> Important
>
> To query a payment made by the simulator through the [Payments API](/developers/en/reference/payments/_payments_id/get), you must use the same test `access-token` that you use in the Simulator.


## 6. Receive the notification

> Notifications for test payments made through the Simulator will be sent through the same channel you defined as the notification method when configuring your integration. Refer to [Configure notifications](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications) if you have any doubts.

Once the payment intent is processed, go to your notification log. There you will see that the transaction status notification has been sent and you can check the details.
