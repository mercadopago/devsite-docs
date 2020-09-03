---
sites_supported:
- mla
- mpe
- mco
- mlu
- mlm
- mlc
- mlb
---

#  How to integrate QR attended model

To charge with a QR attended model, you’ll have to create and order and then associate it with a Point of Sale.

## Model flow

We explain how the attended model works:

>![Payment flow at QR Mercado Pago point of sale](/images/qr-user-flow.en.png)

<span></span>

1. The point of sale registers an order (1a) and creates an order assigned to a checkout (1b). At this moment the order is available to be scanned (2).
2. When the customer scans the QR (3) with the order and makes the payment (5), an IPN notification (4a and 6b) is received to the seller's server. With these data, the status of the order (7a) is obtained, to validate that it is closed or is still open, pending payment.


## Create an order

```curl
curl -X POST 
https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN -d
{
    "external_reference": "Bill-0001",
    "notification_url": "www.yourserver.com",
    "items" :[{
    		   "title" : "Product 1",
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 120.00,
    	       "quantity" : 1,
               "description": "Mercado Pago Item",
               "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : "Product 2",
    		   "currency_id" : "[FAKER][CURRENCY][ACRONYM]",
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```

Obtain more information in our [API Reference](https://www.mercadopago.com.ar/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

Once the order is created, it is available to be **scanned and paid**.


> NOTE
> 
> Note
> 
> Remember that if you haven’t previously provided your business name or logo in your [Mercado Pago account](https://www.mercadopago.com.ar/settings/account), the order title and image showcased to your client in the app will be taken from the first item uploaded.


## Eliminate an order

To delete a QR associated order before it’s closed or expires, you can use this following method:

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
Answer will be `HTTP 204 No Content`.

## Receive notifications of your orders

[IPN notifications](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn/) are an **automatic way of receiving notifications for order creation and status updates**. I.e.: when orders are approved, rejected or pending. 

Implement IPN `merchant_order` with an order search by `external_reference` as a contingency method.

<a href="https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn/" target="_blank"> Receive IPN notifications </a>

---
### Next steps


> LEFT_BUTTON_REQUIRED_EN
>
> Advanced Integration
>
> Learn the options to take your integration to the next level.
>
> [Advanced Integration](https://www.mercadopago.com.ar/developers/en/guides/in-person-payments/qr-code/advanced-integration/)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Try the most frequent use cases to validate your integration.
>
> [Test your integration](https://www.mercadopago.com.ar/developers/en/guides/in-person-payments/qr-code/integration-test/)
