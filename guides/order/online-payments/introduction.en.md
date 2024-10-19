# Pagos online

----[mlb]----
The **Checkout Transparente** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------
----[mla, mlm]----
The **Checkout API** from Mercado Pago allows the entire checkout process, from filling in user information to completing the payment, to take place in a single environment without the need to redirect to an external page outside your store.

------------

An Online payment Order can be created to be processed in two ways: **Automatic mode** and **Manual mode**.

## Automatic Mode

The Automatic Mode, as the name suggests, is the default mode of the application. In this mode, the transaction is completed in a single step, and modifications are limited. To create the Order in automatic mode, you need to ensure that the `processing_mode` field is set to `automatic` and that all information is being sent in this single request. The `processing_mode` field is responsible for defining the format of creation and processing of the transaction.

The allowed operations are:

- [**Create and process Order**](/development/en/reference/order/online-payments/create/post): responsible for creating the Order along with the simultaneous processing of the transaction.
- [**Retrieve transaction**](/development/en/reference/order/online-payments/get-order/get): allows you to locate an existing Order intent.
- [**Capture transaction**](/development/en/reference/order/online-payments/capture/delete): enables the capture of the authorized amount of an Order. This option is only valid for credit cards.
- [**Cancel transaction**](/development/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing Order that has not yet been processed/ finalized.
- [**Refund transaction**](/development/en/reference/order/online-payments/refund/post): in automatic mode, the refund will always be total.

## Manual Mode

The Manual Mode is where we can divide the processing of the transaction into steps that can be configured and executed incrementally. It allows customization of each step of the payment process, adapting to different needs and scenarios. To create the Order in manual mode, you need to ensure that the `processing_mode` field is set to `manual`. This field is responsible for defining the format of creation and processing of the transaction.

The allowed operations are:

- [**Create Order (with or without transactions)**](/development/en/reference/order/online-payments/create/post): responsible for creating and authorizing the Order without simultaneous processing.
- [**Add transaction**](/development/en/reference/order/online-payments/add-transaction/post): this operation for adding transactions can only be done in manual mode and is responsible for adding more than one transaction in the same _payload_.
- **[Modify](/development/en/reference/order/online-payments/update-transaction/patch) and/or [remove](/development/en/reference/order/online-payments/delete-transaction/delete) transaction**: this operation for modifying and removing transactions can only be done in manual mode and is responsible for changing payment information that had been previously added to the Order. It is an operation that modifies an item within any field of the `transactions` parameter.
- [**Capture transaction**](/development/en/reference/order/online-payments/capture/delete): responsible for capturing the authorized amount of an Order. This option is only valid for credit cards.
- [**Process transaction**](/development/en/reference/order/online/process-order/post): allows executing the transactions created and/or modified in manual mode.
- [**Retrieve transaction**](/development/en/reference/order/online-payments/get-order/get): allows you to locate an existing Order intent.
- [**Cancel transaction**](/development/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing Order that has not yet been processed or finalized.
- [**Refund transaction**](/development/en/reference/order/online-payments/refund/post): in manual mode, total or partial refunds can be created for a payment. The Order will be fully refunded if all transactions are refunded completely.
   - **Total refund**: a value to be refunded should not be indicated in the request’s `body`.
   - **Partial refund**: the amount to be refunded must be specified in the request’s `body`. All other transactions will remain as they are, and only the modified transaction will be refunded.   