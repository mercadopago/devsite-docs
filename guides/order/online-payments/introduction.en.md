# Pagos online

----[mlb]----
The **Checkout Transparente** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------
----[mla, mlm]----
The **Checkout API** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------

Differences between the new **API Order** and the old **Payments API**:

| Functionality | Payments API | Order API |
| --- | --- |--- |
| Mode | Automatic | Automatic and manual |
| Operations | Payments | Payments and [In-store](/developers/pt/docs/order/online-payments/introduction) (QR and Point)|
| Multiple transactions | Does not support | Supports |
| Sending metadata | Allows | Does not allow |
| Sending Notification URL | Allows in the payload | Does not allow in the payload and must be configured in [Developer panel > Application details](/developers/en/docs/order/additional-content/your-integrations/application-details). |
| Validations with complete error responses | Validates one error at a time | Returns a list of all errors |
| Return of PII data | Returns in some scenarios (e.g., approved) | Does not return in any scenario |

An Online payment Order can be created to be processed in two ways: **Automatic mode** and **Manual mode**.

## Automatic mode

## Manual mode