# Refunds processing

Refunds are transactions made when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back the amount paid for the purchase of a certain product or service on their account or credit card statement.

When choosing a Point integration via API for Point of Sale, you have three options to efficiently process refunds: 

1. **Through the Point Device**: 
 * Refund recent transactions directly from your Point device for their full value. 
 * You will need to search for the payments made, select the transaction, and follow the device's instructions. 

2. **Through the Payments API**: 
 * Complete full or partial refunds for any type of payment using the refunds resource in the [Payments API](/developers/en/reference/chargebacks/_payments_id_refunds/post). 

3. **Through our API for Point Devices**:
 * Refund transactions that are up to 90 days old for their full value. 
 * The refund processing is done on the Point devices, allowing you to print receipts and refund payments made with a contactless card. 
 * Receive notifications via Webhook upon completing the refund attempt cycle. 

You can choose the refund option that best suits your needs. However, we recommend using our API for Point Devices in **cases where the printing of refund tickets is required, or for refunds made by tapping the card on the device**.

----[mlb]----

> WARNING
>
> Important
>
> Refund processing is only available for Point Pro 2 devices.
------------

To perform refunds via API, first you will need to create a refund intent and then process it. Additionally, you can check the status of a refund intent or cancel it. Keep reading to learn how to proceed with each operation.

## Create refund intent

A refund intent is a call that contains all the details of the transaction to be made, and it must be created in order to start a refund of a payment previously made via API. 

It is an attempt that, if successful, will return a refund `ID` and its status. Please note that refund intents are the foundation for processing refunds with Point devices. For this reason, it is important that you register and save the data obtained during their creation, especially their `ID`.

> WARNING
>
> Important
>
> The refund intent can only be created for the device in which the payment was processed, and by the user that made the transaction.

You can [create a refund intent](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) and assign it to your Point device by performing the following request, sending the `payment_id` for the payment you are willing to refund:

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "93921210001"
}'

```


In response, you will receive something similar to this:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "device_id": "PAX_A910__SMARTPOS1490451054"
}
```

## Process your refund intent
Once the refund intent has been created, you can obtain it from your Point device. To start the transaction, press on the corresponding key: in the case of Point Plus and Point Pro 2 the **green button** and, in the case of the Point Smart, the digital button **Update**.

## Check the status of your refund intent
If you want to know the status of a particular refund intent, you can [check its current status](/developers/en/reference/integrations_api/_point_integration-api_refund_refundintentid/get) using the `ID` that you received in the response when creating it.

Remember that `ID` and status of the refund intent (for example, *7f25f9aa-eea6-4f9c-bf16-a341f71ba2f1*) are not the same as `ID` of the payment and status of the refund (for example, *65412345*).  In this case, you will be trying to obtain the details of an attempt.

> WARNING
>
> Important
>
> The main recommended mechanism to know the result of a payment intent is the subscription to [integration notifications](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). The endpoint presented here is recommended only as an alternative mechanism.


``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

You will receive a response similar to this one below:

``` json
{
   "device_id": "GERTEC_MP35P__8701012142072431",
   "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "state": "FINISHED"
}
```

You can check all the possible status of a payment intent by accessing our [Glossary](/developers/en/docs/mp-point/integration-api/glossary).


## Cancel a refund intent
If you want to, you can cancel a refund intent assigned to a Point device, as long as its status is open and it hasn’t been send to the device.

If this requirements are met, you can [cancel a refund intent via API](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_refund_refundintentid/delete) by performing the following request:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \

```

If the execution is successful, you will receive a response similar to the following:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1"
}

```

