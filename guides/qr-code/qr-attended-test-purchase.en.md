# Perform a test purchase 

Next, we will teach you how to simulate a complete payment flow for attended QR code model.

> WARNING
>
> Important
>
> Throughout the entire testing flow, you should use the **production credentials of the test users** you previously created. At each step, it will be indicated whether it's the seller or buyer user's credentials to be used.

## Create an order 

1. Log in to the [Mercado Pago website](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) using the username and password of the test seller account you created. 
2. Create a [new test application](/developers/en/docs/qr-code/additional-content/your-integrations/dashboard) for QR Code and obtain the production credentials (Access Token) of the test seller user. 
3. Use the production credentials of the test seller user to create a [store](/developers/en/reference/stores/_users_user_id_stores/post) and a [point of sale](/developers/en/reference/pos/_pos/post) following the instructions for setup. Please note that when creating the point of sale, the `fixed_amount` field should be set on `true`. The links returned in the response for the `qr` object are the images of the QR Code associated with your point of sale. 
4. Still using the credentials of the test seller user, [create an order](/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) and assign it to the point of sale you created in the previous step. By doing this, you will also be assigning the order to the QR Code associated with it. Make sure to set the `notification_url` field with the URL where you will receive notifications about payment updates with the `merchant_order` topic. 

## Perform the payment 

1. Download and install the **Mercado Pago App on your mobile device** and log in with the test buyer account. 
2. Scan with your mobile device the QR code you generated. The app will display the amount of the generated order and the available payment options. 

----[mlb]----
> WARNING
>
> Important
>
> Pix payments will not be working correctly when using test credentials. We recommend using another payment method when testing your QR Code integration.
------------
3. Make the payment using [test cards](/developers/en/docs/qr-code/additional-content/your-integrations/test/cards), which will also allow you to test different payment flows. 

### Validation cases 
If you want to, you can test various scenarios to validate that your system is correctly integrated with Mercado Pago. These are situations that simulate possible scenarios when making a payment. 

> WARNING
>
> Important
>
> While the testing environment does not allow validating payment refunds, we recommend implementing the refund flow in your production integration using our [Refunds API](/developers/en/reference/chargebacks/_payments_id_refunds/post).

Below, you can see these cases in detail, along with the expected result in the system for each scenario, and a series of observations to guide you on how to proceed.

| Case | Expected output | Observations |
|:---:|:---:|:---:|
| **Correct QR scanning**. The user scans a valid QR Code, that is, a QR with a previously assigned order. | App showcases a checkout screen with the assigned amount. | Verify that the amount displayed on the screen is the one assigned when creating the order. If it’s not, validate if the order war assigned to the correct point of sale. |
| **Approved payment**. The user makes a successful payment. | Point of sale system receives information about the approved payment. | Verify if you have received the [notification](/developers/en/docs/qr-code/additional-content/your-integrations/notifications) with the `merchant_order` topic, and that its status is `closed`. |
| **Cancel order**. The user decides to not make the payment with the QR Code, and chooses to pay with cash instead. | [Remove order](/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete) from the point of sale. | Scan the QR Code and verify that the waiting sceen is displayed. By doing so, you can confirm that the order was canceled correctly. |
| **QR scan before creating the order**. The customer scans a valid QR Code before placing the order. | The App displays a loading screen. | Verify if the field `fixed_amount=true` when creating the point of sale. |
| **Rejected payment**. The user makes a payment that ends up being rejected. | The point of sale system receives information about the rejected payment and continues waiting for the order to be paid. | Verify if you have received the [notification](/developers/en/docs/qr-code/additional-content/your-integrations/notifications) with the `merchant_order` topic, and that its status is `opened`. You must wait for the second payment attempt. |
| **Second payment attempt**. At first, the user performs a rejected payment and, without needing to scan the Code again, they execute a second attempt, that ends up being  approved. | The point of sale system receives information about the rejected payment and of the approved one later. | Do not delete the order after a rejected payment and verify that your Point of Sale system doesn’t close the transaction. |

> WARNING
>
> Important
>
> While the testing environment does not allow validating payment refunds, we recommend implementing the refund flow in your production integration using our [Refunds API](/developers/en/reference/chargebacks/_payments_id_refunds/post).


## Verify notifications 
After you have made the payment with the test user, verify that you have received notifications with the `merchant_order` topic indicating the status of the order in your system. 

To ensure that notifications have been processed correctly, send a **GET** request to the [/merchant_orders](/developers/en/reference/merchant_orders/_merchant_orders_id/get) endpoint with the ID of the merchant order received in the notification. This will allow you to validate the status of each order: 
 * If the returned status is `closed`, the order was successfully paid. 
 * If the returned status is `opened`, the order has not been paid yet. You should wait for the payment to be made and approved. 
