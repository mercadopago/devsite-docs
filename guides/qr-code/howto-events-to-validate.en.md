# Events to validate
## Events to validate QR Attended

| Event | Expected output | Comments |
| --- | --- | --- |
| **QR scan before creating the order**. The customer scans a valid QR code before placing the order.| App displays a loading screen. | Verify the `fixed_amount` = **true** on the Point of Sale. |
| **QR scanning**. The user scans a valid QR code after the order creation.| App showcases a checkout screen. | Verify the amount displayed on checkout. |
| **Approved payment**. The user makes a successful payment. | POS system receives information about the approved payment.| [Verify Notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction) receipt. |
| **Rejected payment**. The user makes a rejected payment.| POS system receives information about the rejected payment and continues waiting for the order to be paid.| `merchant_order` status must be **opened**. |
| **Second payment attempt**. At first, the user performs a rejected payment and then executes an approved payment. | POS system receives information about the rejected payment and of the approved one later.| Do not remove the order after a rejected payment.|
| **Refunds**. The payment refund is performed from the Point of Sale.| Refunds impact the buyer account.| [See Refunds](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/sales-processing/cancellations-and-refunds/#bookmark_refunds). |
| **Cancel order**. The user decides to pay instead with cash. | The order is removed; thus, when scanning the QR only the loading screen is displayed. | Remove order from the Point of Sale. |

## Events to validate QR Dynamic

| Event | Expected output | Comments |
| --- | --- | --- |
|QR scanning. The user scans a valid QR code after the order creation.|App showcases a checkout screen.|Verify the amount displayed on the checkout screen.|
|Approved payment. The user makes a successful payment.|POS system receives information about the approved payment.|[Verify Notifications receipt]()|
|Rejected payment. The user makes a rejected payment.|POS system receives information about the rejected payment and continues waiting for the order to be paid.|`merchant_order` status must be opened.|
|Second payment attempt. At first, the user performs a rejected payment and then executes an approved payment.| POS system receives information about the rejected payment and of the approved one later.| Do not remove the order after a rejected payment.|
|Refunds. The payment refund is performed from the Point of Sale.| Refunds impact the buyer account.|[See Refunds]()|
|Order expiration. The user attempts to pay after the QR has expired.|The order is deleted; therefore, when scanning the QR, the error screen is displayed. Try to scan the QR after exceeding the `expiration_date`|




---
### Next Steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> ¿What’s a QR code?
>
> Learn about QR code integration.
>
> [¿What’s a QR code?](/developers/en/guides/qr-code/introduction)


> RIGHT_BUTTON_RECOMMENDED_EN
>
> How to generate a QR
>
> Learn about all the options to charge with QR depending on your type of business.
>
> [Test your integration](/developers/en/guides/qr-code/integrations)
