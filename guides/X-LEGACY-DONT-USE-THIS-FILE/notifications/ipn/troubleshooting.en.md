# Troubleshooting

**If you don’t receive notifications**, you will need to apply the search on demand using the `external_reference` of the order as search criteria as a contingency method. It can be done through two mechanisms:

|Mechanism|Description|
|---|---|
|Manual|The point of sale must include a button to perform the search.|
|Automatic|After 30 seconds without receiving any notification, an order search starts at every interval of, for example, 5 seconds.|

For any of the mechanisms described above we will use the following endpoint:

```curl
curl --location --request GET 'https://api.mercadopago.com/merchant_orders?external_reference=EXTERNAL_REFERENCE' \
--header 'Authorization: Bearer ACCESS_TOKEN'
```

> NOTE
>
> Note
>
> This solution uses the same [API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get) that was used in the section [Merchant order query](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/inperson-order-query), adding the param `external_reference` to look for the payment in case a notification wasn't received.

The answer will be the same as using the order ID and they must use the same criteria mentioned above to confirm the payment of the order.

If the QR on which the order was published has not been scanned, the response will be:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

> WARNING
>
> Important
>
> Mercado Pago requires standardizing the integration of in person payments that have the notification (IPN) to Merchant Orders implemented as their main method.
> <br>
> The order search by `external_reference` should only be used as a contingency method in the event that no notifications are received.

> PREV_STEP_CARD_EN
>
> Merchant order query
>
> Consult the orders status.
>
> [Merchant order query](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/inperson-order-query)

> NEXT_STEP_CARD_EN
>
> Additional tools
>
> Learn about additional tools for payments search.
>
> [Additional tools](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/additional-tools)