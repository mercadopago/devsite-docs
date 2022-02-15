# IPN notifications for in person payments

If you are integrating in person payments with QR code, below we will provide information about IPN notifications in this type of payment for each status (opened and closed). In addition, we will indicate how to consult the order with the external reference and what you will need to do if the customer scans the QR code twice (leaving an order always open).
 
> WARNING
>
> Important
>
> Mercado Pago directs integrations to use this IPN notification method as the primary method to receive payment notifications.
 
## Configuration

The integration of payment with QR code uses the object `merchant_order`, which is the identification of the order based on each reading performed on the QR.

In IPN notifications for in-person payments, the `status` field of the `merchant_order` will remain with the status **opened** until approved payments are identified and the payment amount is equal to or greater than the order total.

Within the order, in the payments object, you will find all payments made, whether approved or rejected. It is important to obtain the ID of payments with **approved** status in order to carry out chargebacks/refunds.

For each QR scan a different `merchant_order` is generated. Remember that if the customer does more than one scan, an order will be **opened** indefinitely and, to close the transaction, the `merchant_order` must have `status` = **closed**.

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

If notifications are not received, it will be necessary to apply the **order search** as a contingency method using its `external_reference` as search criteria. The **search** can be performed by `external_reference` in two ways:
 
| Shapes | Description |
| --- | --- |
| **Manual** | The point of sale must include a button to perform the search. |
| **Automatic** | After 5 minutes without receiving any notification, an order search is started at every interval of, for example, 5 seconds. |

```curl
curl -X GET \
   -H 'Authorization: Bearer $ACCESS_TOKEN' \
   https://api.mercadopago.com/merchant_orders?external_reference=$EXTERNAL_REFERENCE 
```