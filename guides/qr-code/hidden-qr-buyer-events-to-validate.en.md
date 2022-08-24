# Events to validate QR Buyer

| Event | Expected output | Comments |
| --- | --- | --- |
|The merchant presses the keyboard keys while scanning. |The hardware does not modify the scanned tramma.|The payment must be successful.|
|Change POS language before scanning.|The characters in the scanned tramma must not change; therefore, the transaction must be successful.|The POS must not allow changing the language.|
|Approved payment. The user makes a successful payment.| POS system receives information about the approved payment.|The response status must be approved.|
|Rejected payment. The user makes a rejected payment.| POS system receives information about the rejected payment. Open the scanner to read a QR again.|The response status must be rejected.|
|Refunds. The payment refund is performed from the Point of Sale.| Refunds impact the buyer account.|[See Refunds](/developers/en/docs/qr-code/additional-content/refunds)|
|Payment search due to connection loss. The order is deleted; therefore, when scanning the QR, the error screen is displayed.|Try to scan the QR after exceeding the `expiration_date`.|