# IPN notifications for in personal payments

If you are integrating in-person payments with QR code, below we will provide information about IPN notifications in this type of payment for each status (opened and closed). In addition, we will indicate how to consult the order with the external reference and what will be necessary to do if the customer scans the QR code twice (leaving an order always open).
 
> WARNING
>
> Important
>
> Mercado Pago requires the integration of in-person payments that have applied the notification (IPN) as the main method for approval.
 
## Configuration

QR code payment integration uses the `merchant_order` object, which is basically an order with 1 or more items. Therefore, for IPN notifications in face-to-face payments remember the following rules:

* The `status` field of the `merchant_order` will remain in **opened** when it doesn't have associated payments yet or has rejected/approved payments for an amount less than the order total.
* The `status` field of the `merchant_order` will be **closed** when the sum of approved payments is equal to or greater than the order total.

Inside the order, in the payments object, you will find all its payments. It is important to obtain the ID of payments with **approved** status in order to [can make refunds](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/cancellations-and-refunds). When the `status` of `merchant_order` is **closed**, make sure that the sum of payments with `status` **approved** is equal to or greater than the order total.

For each QR scan a different `merchant_order` is generated. Remember that if the customer does more than one scan, an order will be **open** indefinitely and, to close the transaction, the `merchant_order` must have `status` = **closed**.

```json
{
 "id": 1126664483,
 "status": "closed",
 "payments": [
    {
     "id": 4996721469,
     "transaction_amount": 4,
     "status": "rejected",
     [...],
   },
    {
     "id": 4996721476,
     "transaction_amount": 4,
     "status": "approved",
     [...], },
```

If the QR in which the order was published has not been **scanned**, the response will be:

```json
{
  "elements": null,
  "next_offset": 0,
  "total": 0
}
```

If notifications are not received, it will be necessary to apply as a contingency method the **order search** using its `external_reference` as search criteria. The **search** can be performed by `external_reference` in two ways:
 
| Shapes | Description |
| --- | --- |
| **Manual** | The point of sale must include a button to perform the search. |
| **Automatic** | After a reasonable amount of time without receiving any notification, an order search is started at every interval of, for example, 5 seconds. |

```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```