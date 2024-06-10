# Prerequisites

To start using Mercado Pago's Debt and Bulk Links Management tool, you must be registered by the commercial area. For this purpose, the following information will be required.

> WARNING
>
> Important
>
> The data must be shared with the commercial consultant through a spreadsheet or sent via the ticket previously created for this purpose, according to the provided guidance.

| Data                             | Description                                                                                                                                                      | Possible Values/Examples                                                                                           |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Site                         | Country where the seller operates.                                                                                                                                    | Debts: MLA (Argentina), MLM (Mexico) Links: MLA (Argentina), MLB (Brazil), MCO (Colombia), MLC (Chile), MLM (Mexico), MPE (Peru), MLU (Uruguay)        |
| Mercado Pago User         | Seller's Mercado Pago user_ID. It is the identification number of the Mercado Pago account that receives the money from sales, that is, the account responsible for collecting the values. You can find it in the developer panel by accessing any application. | 1117105806                                                                                                                                                            |
| Company Name to be Visible to Payer | Seller's name that will be displayed to the payer within the payment and search options.                                                        | Visible company name.                                                                                      |

## Wallet 

Fill in the following data if the seller publishes debts in Mercado Pago's wallet:

| Data                        | Description                                                                                                         | Possible Values/Examples                                                                                                    |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Customer Identification  | Type of identifier that the seller will use to distinguish its customer.                                      | DNI / CUIT / CUIL (only for Argentina) <br> Customer code                                                                         |
| Customer Identification Format | Defines the characters that the identifier can obtain.                                                          | Numbers, Letters, Numbers and letters                                                                                            |
| Segment                     | Market segment to which the company belongs.                                                                   | telecom, energy, gas, government, financial, water, insurance, catalog, wallet, utilities, health, ecommerce, teaching, other, transport, electricity, bank, penalty, sanitation, subscriptions, municipality |
| Product Category            | Company's product category.                                                                                      | electricity, gas, generic, home, tv, phone, water, teaching, catalog, government, telecom, transport, sube                     |
| Payment Methods      | Payment methods that the company wants to enable for its payers.                                                                              | money in account (mandatory), credit card, debit card, offline methods (tickets), consumer credits (Mercado Credito), debin (exclusive for Argentina)                     |
| Logos                       | Images that will be shown to payers in Mercado Pago's wallet (optional).                        | The logos to be uploaded must be in .jpg or .png format and must weigh up to 5 MB. The logo size must be up to 50x50px and the image must be circular. |

## SFTP

Fill in the following data if the seller uses SFTP for uploading and downloading information:

| Data                        | Description                                                                                   | Possible Values/Examples                                                                                                    |
|-----------------------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Company Legal Name        |                                                                                          |                                                                                                                         |
| Tax ID                      | Company's fiscal identifier.                                                                                         | Example: CUIT in Argentina, CNPJ in Brazil.                                                                                                                        |
| Third-Party Contact Email    | Seller's email account.                                                               |                                                                                                                         |
| SFTP - Name               | Responsible for the SFTP user.                                                                |                                                                                                                         |
| SFTP - Email                | Email of the SFTP user's responsible person.                                                       |                                                                                                                         |
| SFTP - Phone             | Phone number of the SFTP user's responsible person.                                                    |                                                                                                                         |
| SFTP - SSH Public Key    | Public key associated with the user who will connect to SFTP. To create the key, access the documentation [How to create an SSH public/private key](/developers/en/docs/links-and-debts/public-and-private-key). | Key generated with the command `ssh-keygen -t rsa -b 4096 -C`.                                                                |
| SFTP - IP Range             | Public IP range that the seller will use to upload the files.                        | Format 123.123.123.123/32                                                                                                  |