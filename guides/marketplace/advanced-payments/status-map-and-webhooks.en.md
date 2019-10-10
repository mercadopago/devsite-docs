---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Status map

An Advanced Payment can take different states.
A Marketplace can be informed of the status changes of an Advanced Payment if you subscribe to the 'Payment Split' topic in [Webhooks](https://www.mercadopago.com/mla/account/webhooks), for off cart payments.

![Status map](/images/advanced-payments/advanced-payments-status-map.png)

> WARNING
>
> Important
>
> If occurs an internal error in the creation of the Advanced Payment, it will remain with status `vacated`.

#### Status definition

State               |Description                                                            |
--------------------|-----------------------------------------------------------------------|
authorized          |The payment is pending capture.                                        |
in_process          |The payment is in the analysis process.                                |
pending             |The user did not complete the payment process yet.                     |
approved            |The payment was approved and accredited.                               |
rejected            |The payment was rejected. The user could retry the payment.            |
cancelled           |The payment was canceled by one of the parties or the payment expired. |
refunded            |The payment was returned to the user.                                  |
partially_refunded  |Part of the payment was returned to the user.                          |
charged_back        |A chargeback has been made on the buyer's credit card.                 |
vacated             |There was an internal error.                                           |

# Webhooks Notifications

If you are subscribed to notifications, then you will receive a notification each time the Advanced Payment is modified.

The structure of the notification is as follows:

```json
{
  "id": 1111111,
  "user_id": 232323,
  "date_created": "2019-01-23T16:14:51.107-04:00",
  "action": "splitter.update",
  "status": "approved",
  "application_id": 9999999999999,
  "live_mode": "true",
  "version": 2,
  "data": {
    "id": "ext_ref_ibp"
  }
}
```

* `id`: Advanced Payment ID.
* `user_id`: ID of the Marketplace owner.
* `date_created`: Event date.
* `action`: Action that was made with respect to the Advanced Payment (can be splitter.insert or splitter.update).
* `status`: Status of the Advanced Payment.
* `application_id`: Application ID.
* `live_mode`: Indicates whether it is a productive (true) or sandbox (false) notification.
* `version`: Advanced Payment version.
* `data.id`: Payment External Reference.

# Binary Payment

You can define the payment so that the response is instantaneous or not.

In case it is instantaneous, the payment response will be `approved` or `rejected` (without intermediate states). On the contrary, the payment can be left as pending, for example, waiting for the payment to be credited in case of offline methods or credit card payments of high amounts where the buyer must call the card issuer to authorize the payment.

This logic can be managed by setting, at the root of the Advanced Payment, the `binary_mode` field as `true` to return the immediate response and `false` for the contrary.

```json
  "binary_mode": true
```
