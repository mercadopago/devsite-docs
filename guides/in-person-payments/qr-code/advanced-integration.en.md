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

# Advanced Integration

## Refunds

Refunds happen when a payment was completed but the seller decides to cancel it partially or totally. You can find information in [Refunds and cancellations](https://www.mercadopago.com.ar/developers/en/guides/manage-account/account/cancellations-and-refunds) section.

> WARNING
> 
> Note
> 
> Remember that in the case QR payments, refunds are available but cancellations are not.


## Order validity

By default, QR orders expires 10 minutes after being created or automatically if it’s closed. 

If you require a different expiration time, you can send the header `X-Ttl-Store-Preference` with the time you need expressed in seconds. I.e., if you want 5 minutes as the available time, you’ll have to send the header `X-Ttl-Store-Preference: 300`.

## Get order data

If you want to get the order assigned to a POS, you can do it.

```curl
curl -X GET https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/pos/EXTERNAL_POS_ID/orders?access_token=ACCESS_TOKEN  -d 
```
Obtain more information in our [API Reference](https://www.mercadopago.com.ar/developers/es/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get/).

## Generate reports of your sales

Integrate [Mercado Pago reports](https://www.mercadopago.com.ar/developers/en/guides/manage-account/reports/general-considerations/reconciliation-reports/) with your system to make sales reconcilitation and know about your account movements.

## Test and validate your integration 

We detailed all necessary cases you should try to make sure your system is succesfully integrated with Mercado Pago. 
Find all this information in the [Tests section](https://www.mercadopago.com.ar/developers/en/guides/in-person-payments/qr-code/integration-test/).

---
### Next steps


> LEFT_BUTTON_RECOMMENDED_EN
>
> Test your integration
>
> Perform the most frequent use cases to validate your integration.
>
> [Test your integration](https://www.mercadopago.com.ar/developers/en/guides/in-person-payments/qr-code/integration-test/)