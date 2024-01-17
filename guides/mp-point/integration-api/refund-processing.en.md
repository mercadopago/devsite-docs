# Refunds processing

Refunds are transactions made when a certain charge is reversed and the amounts paid are returned to the buyer. This means that the customer will receive back the amount paid for the purchase of a certain product or service on their account or credit card statement.

When you perform a Point integration via API to Point of Sale, you can process refunds in two ways: 

 * **Using your Point device:** as long as it is a recent transaction, you can search for the payments made, select the one you want to refund, and follow the device's instructions to do it. 

 * **Using our API:** it allows you to refund transactions that are not displayed on the device, as well as giving you greater control over the operation.

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

It is an attempt that, if successful, will return a refund `id` and its status. Please note that refund intents are the foundation for processing refunds with Point devices. For this reason, it is important that you register and save the data obtained during their creation, especially their `id`.

> WARNING
>
> Important
>
> The refund intent can only be created for the device in which the payment was processed, and for the user that made the transaction.

You can [create a refund intent](/developers/en/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) and assign it to your Point device by performing the following request:

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "68316255058",
     "additional_info": {
        "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET"]
    }
}'

```

You will need to send the following fields as described below:

| Field  | Description | Possible values | Required/Optional |
|:---:|:---:|:---:|:---:|
| `payment_id` | Identifier of the payment you are trying to refund. | Numeric string. For example, *65412345*. | Required |
| `print_on_terminal` | This field is used to determine whether the device should print the receipt, either for the seller or the buyer. | `SELLER_TICKET`: Prints the seller ticket.<br>`BUYER_TICKET`: Prints the buyer ticket. | Optional |


In response, you will receive something similar to this:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93647810056",
   "device_id": "PAX_A910__SMARTPOS1490451054",	
   "additional_info": {
       "print_on_terminal": [
           "SELLER_TICKET",
           "BUYER_TICKET"
       ]
   }
}
```

## Process your refund intent
Once the refund intent has been created, you can obtain it from your Point device by pressing on the key to start the transaction (in the case of Point Plus and Point Pro 2 the **green button** and, in the case of the Point Smart, the digital button **Update**).

## Check the status of your refund intent
If you want to know the status of a particular refund intent, you can [check its current status](/developers/en/reference/integrations_api/_point_integration-api_refund_refundintentid/get) using the `id` that you received in the response when creating it.

Remember that `id` and status of the refund intent (for example, *7f25f9aa-eea6-4f9c-bf16-a341f71ba2f1*) are not the same as `id` of the payment and status of the refund (for example, *65412345*).  In this case, you will be trying to obtain the details of an attempt.

> WARNING
>
> Important
>
> The main recommended mechanism to know the result of a payment intent is the subscription to [integration notifications](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). The endpoint presented here is recommended only as an alternative mechanism.


``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/refund/{intentid}' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

You will receive a response similar to this one below:

``` json
{
   "device_id": "GERTEC_MP35P__8701012142072431",
   "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93647810056",
   "state": "FINISHED"
   "additional_info": {
       "print_on_terminal": [ "SELLER_TICKET", "BUYER_TICKET" ]
   },
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

> NOTE
>
> Note
>
> The only case in which it is possible to cancel a refund intent in the `on_terminal` state is if it is a refund to be made on a contactless card. The device will wait either for the card to be tapped to confirm the refund or for the operator to cancel the attempt.