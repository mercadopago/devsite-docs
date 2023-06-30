# Events to validate QR Dynamic

| Event | Expected output | Comments |
| --- | --- | --- |
|QR scanning. The user scans a valid QR code after the order creation.|App showcases a checkout screen.|Verify the amount displayed on the checkout screen.|
|Approved payment. The user makes a successful payment.|POS system receives information about the approved payment.|[Verify Notifications receipt](/developers/en/docs/qr-code/additional-content/your-integrations/notifications)|
|Rejected payment. The user makes a rejected payment.|POS system receives information about the rejected payment and continues waiting for the order to be paid.|`merchant_order` status must be opened.|
|Second payment attempt. At first, the user performs a rejected payment and then executes an approved payment.| POS system receives information about the rejected payment and of the approved one later.| Do not remove the order after a rejected payment.|
|Refunds. The payment refund is performed from the Point of Sale.| Refunds impact the buyer account.|[See Refunds and cancellations](/developers/en/docs/qr-code/additional-content/cancellations-and-refunds)|
|Order expiration. The user attempts to pay after the QR has expired.|The order is deleted; therefore, when scanning the QR, the error screen is displayed. Try to scan the QR after exceeding the `expiration_date`|