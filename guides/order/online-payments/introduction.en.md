# Pagos online

----[mlb]----
**Checkout Transparente** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------
----[mla, mlm]----
**Checkout API** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------
An online payment order can be created to be processed in two ways: **Automatic mode** and **Manual mode**.

## Automatic Mode

The Automatic Mode is the default mode of the application. Here, the transaction is completed in a single step, and modifications are limited. To create the order in automatic mode, you need to ensure that the `processing_mode` field, that responsible for defining the format of creation and processing of the transaction, is set to `automatic` and that all information is being sent in this single request.

The allowed operations are:

- [**Create and process order**](/development/en/reference/order/online-payments/create/post): responsible for creating the order and simultaneously processing the transaction.
- [**Retrieve transaction**](/development/en/reference/order/online-payments/get-order/get): allows you to locate an existing order intent.
- [**Capture transaction**](/development/en/reference/order/online-payments/capture/post): enables the capture of the authorized amount of an order. This option is only valid for credit cards.
- [**Cancel transaction**](/development/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing order that has not yet been processed/ finalized.
- [**Refund transaction**](/development/en/reference/order/online-payments/refund/post): in automatic mode, the refund will always be total.

## Manual Mode

The Manual Mode is where it is possible to divide the processing of the transaction into steps that can be configured and executed incrementally. It allows customization of each step of the payment process, adapting to different needs and scenarios. To create the order in manual mode, you need to ensure that the `processing_mode` field, that is responsible for defining the format of creation and processing of the transaction, is set to `manual`.

The allowed operations are:

- [**Create order (with or without transactions)**](/development/en/reference/order/online-payments/create/post): responsible for creating and authorizing the order without simultaneous processing.
- [**Add transaction**](/development/en/reference/order/online-payments/add-transaction/post): this operation can only be performed in manual mode and is responsible for adding more than one transaction in the same _payload_.
- **[Modify](/development/en/reference/order/online-payments/update-transaction/patch) and/or [remove](/development/en/reference/order/online-payments/delete-transaction/delete) transaction**: modifying and removing transactions can only be done in manual mode, and allow to change payment information that had been previously added to the order. These are operations that modifies an item within any field of the `transactions` parameter.
- [**Capture transaction**](/development/en/reference/order/online-payments/capture/post): responsible for capturing the authorized amount of an order. This option is only valid for credit cards.
- [**Process transaction**](/development/en/reference/order/online/process-order/post): allows executing the transactions created and/or modified in manual mode.
- [**Retrieve transaction**](/development/en/reference/order/online-payments/get-order/get): allows you to locate an existing order intent.
- [**Cancel transaction**](/development/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing order that has not yet been processed.
- [**Refund transaction**](/development/en/reference/order/online-payments/refund/post): in manual mode, total or partial refunds can be created for a payment. The order will be fully refunded if all transactions are refunded completely.
   - **Total refund**: the value to be refunded should not be indicated in the request’s `body`.
   - **Partial refund**: the amount to be refunded must be specified in the request’s `body`. All other transactions will remain as they are, and only the modified transaction will be refunded.   