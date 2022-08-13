# Events to validate QR Merchant

| Event | Expected output | Comments |
| --- | --- | --- |
|QR scan before creating the order. The customer scans a valid QR code before placing the order.| App displays a loading screen.| Verify the `fixed_amount` = **true** on the Point of Sale. |
|QR scanning. The user scans a valid QR code after the order creation.|App showcases a checkout screen.|Verify the amount displayed on the checkout screen.|
|Approved payment. The user makes a successful payment.|POS system receives information about the approved payment.|[Verify Notifications](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction) receipt.|
|Rejected payment. The user makes a rejected payment.|POS system receives information about the rejected payment and continues waiting for the order to be paid.|`merchant_order` status must be opened.|
|Second payment attempt. At first, the user performs a rejected payment and then executes an approved payment.| POS system receives information about the rejected payment and of the approved one later.| Do not remove the order after a rejected payment.|
|Refunds. The payment refund is performed from the Point of Sale.| Refunds impact the buyer account.|[See Refunds](/developers/en/docs/qr-code/additional-content/refunds).|
|Cancel order. The user decides to pay instead with cash.| The order is removed, and thus when scanning the QR only the loading screen is displayed.| Remove order from the Point of Sale.|
