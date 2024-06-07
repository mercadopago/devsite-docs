# File Processing

Mercado Pago offers an efficient solution for debt management and bulk link generation, allowing the use of an SFTP service to process information contained in files.

When processing a new file, validation of the structure and content of the information is performed. The frequency for uploads depends entirely on your business logic, as invoice management depends on processes external to Mercado Pago, such as the generation of new invoices.

For more information, please read the details of the flow below.

## Functional Flow

The functioning of the product is detailed below:

1. The user generates and uploads a file containing the information to be processed, respecting the correct format for the upload file. For more information, consult the [documentation on format specifications](/developers/es/docs/links-and-debts/format-specifications).
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Input`|

2. The system processes the file and performs validations of format and content of the information (for more details, see the [Validations](/developers/es/docs/links-and-debts/validations) section). Then, it returns a zip file with the results of these validations. If errors are detected, the results file indicates the row and nature of the error.
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Output`|

> WARNING
>
> Important
>
> In case of errors, the system will continue processing the correct rows (OK), either to generate new links or to load debts. Rows with errors are recorded in the error file. Links and debts generated in previous uploads are not affected by this new processing.

3. For the bulk Links flow, the system processes the information and returns the payment links generated in the _success_ file.
| Domain               | Directory          |
|----------------------|--------------------|
| sftp.mercadolibre.io| `Self-Service-Output`|

4. After successfully processing the file for loading debts into the Mercado Pago Wallet, notifications and emails are scheduled for paying users.
    - Push notifications are sent to payers who have an account in Mercado Pago and have registered in the "Agenda" option within "Accounts and Services" of the account.
    - Emails are sent to the addresses provided in the input file, as long as they have not been excluded from notifications.
The sending of push notifications and emails will occur after the processing finishes, provided it ends within the hours of 8:00 to 19:30. In case of uploads outside of this schedule, communications will be scheduled for the next 8:00 hours.

> NOTE
>
> Note
> 
> Files remain available for 7 days after upload. Currently, the option to make direct updates to a row that has been previously uploaded is not available.

![Flowchart](/images/recaudos/fluxograma.png)