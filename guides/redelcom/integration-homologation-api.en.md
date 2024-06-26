# Homologate an API integration

The homologation process for an API integration consists of performing a series of predefined transactions during a video call with our team, that will allow verifying if the behaviors are as desired, as well as demonstrating certain functionalities that need to be present in your software. If this process is approved, you will receive your production credentials to start operating with Redelcom.

Below, you will find the transactions that you must carry out as part of your homologation. You can perform them with real cards and fake buyer data, as it is a testing environment and no charges will be made.

> WARNING
>
> Important
>
> Keep in mind that you will be requested to show the different screens or behaviors of the device. Additionally, you must have integrated the [Query for a payment intent](/developers/en/docs/redelcom/api-integration/payments-processing/query-payment-intent) through the `{rdcTransactionID}` parameter, and store this parameter associated to every transaction in your database.

1. [Create a transaction](/developers/en/docs/redelcom/api-integration/payments-processing/create-payment-intent) to be paid with a **debit card** in an amount **higher than 20,000 CLP**.
2. [Create a transaction](/developers/en/docs/redelcom/api-integration/payments-processing/create-payment-intent) to be paid with a **credit card** in **two or more installments**, and in an amount **higher than 30,000 CLP**.
3. [Create a transaction](/developers/en/docs/redelcom/api-integration/payments-processing/create-payment-intent) for the **exact amount of 2,222 CLP**. This transaction will return an error configured in the environment and, in your application, you must show the `mensaje_visor` field, which will allow you to inform the client of the reason for the error. The use of a pop-up to display this message will be required.
4. [Create a transaction](/developers/en/docs/redelcom/api-integration/payments-processing/create-payment-intent) to be paid with a **debit card** in an amount **lower than 50 CLP**, and it should not be processed if you have correctly implemented the validation that does not allow operations for low amounts. The use of a pop-up for this validation will also be required.
5. **Make a payment** for any amount and **cancel it from the device** while it is being processed. In your application, you must show the `mensaje_visor` field, which will allow you to manage it from the device. The use of a pop-up to display this message will be required.

In addition, certain specific cases may require a few more steps:

* If you have integrated the [Get terminal](/developers/en/docs/redelcom/api-integration/payments-processing/get-terminal) to search for your device, you may be asked for a demonstration.
* If you use the **`responseCallback` parameter** to receive automatic responses from the payments made, you must demonstrate that this notification effectively reaches the [response URL](/developers/en/docs/redelcom/api-integration/payments-processing/create-payment-intent#bookmark_implementing_the_response_url).
* If you use an **external ticket printer**, you must demonstrate what the printed receipts look like.

Once the homologation process via video call is completed and approved, our team will provide you with your production credentials via email, and you can start operating with Redelcom.