# Glossary

Some terms are new and you might not be familiar with them. Use this glossary to avoid getting lost:

| Product         | Term             | Description                                                                                                                                                                                    |
|-----------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Point and QR    | Credentials      | Your [credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) are the keys that we provide you to configure your integrations. To find them, go to your credentials and select the production ones.                                     |
| Point and QR    | Access token     | Private key with which you can generate charges. You must use it to identify yourself in your integrations. It is very important that this data is protected on your servers and not accessible by any user or attacker.                 |
| Point and QR    | Intent           | Payment intention that contains the details of the transaction to be made. When created through the In-store Ecosystem API, it receives an 'intent_id' that identifies it.                  |
| Point and QR    | PDV              | Point of Sale. Device mode in which it operates with the In-store Ecosystem API. It receives the value `device-id`.                                                                           |
| Point and QR    | Caja (POS)       | It is a point of sale that exists in a physical store or shop. Each cash register will have a unique QR code linked to it, and can only be associated with a PDV mode device. In the In-store Ecosystem API, cash registers are identified with the 'external_id' field. |
| Point and QR    |  Store   | It is a physical store where your customers can purchase your products or services. You can have multiple branches in the same account.                                                        |
| Point           | Poi              | Serial number of the Point device. You can see it on the back of the device (SN, NS).                                                                                                           |
| Point           | Poi Type         | Device type.                                                                                                                                                                                   |
| Point           | Self-service     | It is the model where the customer can use the devices autonomously and self-manageably. This model is discouraged for devices in PDV mode.                  |
| QR              | Cash out         | Operation available to be carried out through the QR Code. It consists of cash withdrawal by generating a QR code or using the QR code associated with the cash register.                     |
| QR              | Extra cash       | Operation available to be carried out through the QR Code. It consists of generating an order through which a customer can pay for a product and withdraw cash in a single transaction.      |

## Possible states of an intent

### Point

| State | Description |
|---|---|
| Opened | Initial state of an intent when created from the Point of Sale (POS) device. |
| On_Terminal | Intermediate state of an intent when obtained from the Point device. |
| Processing | Intermediate state of an intent when reconciling with a financial entity. |
| Processed | Intermediate state of an intent when the reconciliation with a financial entity is completed. |
| Closed | Final state of an intent when the transaction is completed. Upon receiving this state, you should go to [Payments API](/developers/en/reference/payments/_payments_search/get) to verify the final payment status using the received `id`. |
| Confirmation_required | Final state of an intent when it finishes without receiving a payment status. Once received, this state will not change. You must confirm the payment status on your device using the `payment_id` received in the response before delivering your product or service. |
| Canceled | Final state of an intent when it is canceled. |
| Error | Final state of an intent when an error occurs in the transaction. |
| Expired | Final state of an intent when it is not processed within one hour after being generated. |

### QR

| Term | Description |
|---|---|
| Opened | Initial state of an intent when created. |
| Closed | Final state of an intent when the transaction is completed. Upon receiving this state, you should go to [Payments API](/developers/en/reference/payments/_payments_search/get) to verify the final payment status using the received `id`. |
| Canceled | Final state of an intent when it is canceled. |
| Expired | An intent reaches this state when the payment was not made within the date sent in the `expiration_date` field or when more than 3 months have passed without being processed. |


