# Integration Test

After creating the Zero Dollar Auth validation, it is important to perform integration tests to confirm its functionality. To test the validation, there are two steps:

* Generate card token
* Validate integration

## Generate card token

To test the Zero Dollar Auth validation, the first step is to generate a card token. To do this, use our [Mercado Pago SDK JS](/developers/en/docs/sdks-library/landing) library to capture card data and generate the token.

To obtain the card token, use the test data that we share with you in the table below.

> WARNING
>
> Important
>
> To simulate **approvals**, use the specific card `4074090000000004`. To simulate **rejections**, use any other card.

| Value | Example |
|---|---|
| Card number | 4074090000000004 |
| Expiration month | 02 |
| Expiration year | 2031 |
| Security code | 123 |
| Cardholder name | APRO |
| Identification type. It can be one of the following types:<br>CPF: Individual Taxpayer Registration, Brazil.<br>CNPJ: National Register of Legal Entities, Brazil.<br>CUIT: Unique Tax Identification Code, Argentina.<br>CUIL: Unique Labor Identification Code, Argentina.<br>DNI: National Identity Document, Argentina.<br>CURP: Single Population Registration Code, Mexico.<br>RFC: Federal Registry of Taxpayers, Mexico.<br>CC: Citizenship Card, Colombia.<br>RUT: Single Tax List, Chile.<br>CI: Identity Card, Uruguay. | CPF |
| Document number | 15635614680 |

> WARNING
>
> Important
>
> In order to perform transactions with the card data open, directly in the API call, it is necessary for the seller to be [PCI Compliant](/developers/en/docs/security/pci). Otherwise, these data cannot be transacted in the backend of your application.

## Validate integration

As a last step, it is necessary to validate the integration using the token obtained in the previous step. To do this, send the parameters described in the table below to the [/v1/payments](/developers/en/reference/payments/_payments/post) endpoint and execute the request.

| Parameter | Type | Description | Example |
|---|---|---|---|
| token | String | Card token | 12346622341 |
| payment_method_id | String | Indicates the identifier of the payment method selected to make the payment | master |
| payer.id | String | Payer's ID | 123456 |
| payer.type | String | Type of identification of the associated payer | customer |
| description | String | Description of the validation | "zero dollar card validation with master credit without cvv" |
| transaction_amount | Number | Cost of the validation | Always zero (0) for Zero Dollar Auth |