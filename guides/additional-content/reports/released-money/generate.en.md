# Generate report

You can generate a report of Releases through your Mercado Pago account or via API integration. Refer to the table below for more information.

----[mla]----
> NOTE
>
> Manage your sales with QR code easily
>
> We've created new columns that allow you to identify the digital wallets or banks your customers use when paying with a Mercado Pago QR code. Update your configuration preferences [in the panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings) or [via API](/developers/en/guides/additional-content/reports/released-money/api) to include these columns in your reports.

------------

## Generation channels

You can generate a report of Releases through your Mercado Pago account:

| Channels                   | Description                                                                                                                                                                                                                                                                                                                  |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago Panel         | Manually create the report through the Mercado Pago panel. Access the [Sales and Billing](https://www.mercadopago.com.br/movements) section, click **Go to Payment and Account Statement Reports**, and select the report. For more information, read the documentation [Generate report through the panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/panel).                                               |
| API Integration            | Create the report manually or scheduled according to the desired frequency using our API integration. For more information, refer to the documentation [Generate report via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/api). |

## Technical features of the report

Consider the following technical information whenever you create, schedule, or configure a report.

### Report structure

Understand the characteristics of the elements that compose your report.

| Actions and components | Characteristics |
| --- | --- |
| Table details | Table details comprise information for at least 1 day. |
| Column order | Fixed |
| Maximum period | Reports with data for up to 60 days. |
| Currency | Local (based on the country where the Mercado Pago account is registered). |
| Column time zone: | GMT-4 <br/> <br/> Take as reference the place from where the report is downloaded. |
| Web date selection | Based on the user account's time zone. <br/>For example, a user account registered in Brazil corresponds to the São Paulo time zone. |

### Report export

All options available when downloading your report.

| Actions and components | Characteristics |
| --- | --- |
| File name format | Scheduled or manual report:<br/> "configurable-prefix-<span style='color:#999999;'>creation-date.csv</span>" <br/> Example: mystore-28-05-2024.csv. |
| Download formats | ._csv_, ._xlsx_ <br/><br/>**Note**: download the report in ._csv_ to import the data and use it in other applications. Download it in ._xlsx_ to read the information in spreadsheet tables. |
| File | Generated reports are saved in your Mercado Pago account. |

## Notifications

### Webhook

Webhook, also known as "web callback," is an efficient method to receive real-time information whenever an event occurs in an application or system. This approach allows the passive transfer of data between two systems through HTTP POST requests. Regarding reports used in reconciliation, a notification is sent to the user who has configured this service as soon as the corresponding files are generated.

| Attribute        | Description                         |
|-----------------|-----------------------------------|
| transaction_id  | Transaction ID                   |
| request_date    | Request date                     |
| generation_date | Creation date                    |
| files           | Available files                  |
| type            | File format                      |
| url             | Download link                    |
| name            | File name                        |
| status          | Report status                    |
| creation_type   | Manual or scheduled creation      |
| report_type     | Report type                      |
| is_test         | Determines if it is a test        |
| signature       | Webhook notification digital signature |

### Encryption password

The encryption password is essential to secure the notification process to the system. In the message body (_payload_), an attribute called **_"signature"_** is sent to validate the legitimate origin of the Mercado Pago Webhook notification, avoiding possible imitations.

The creation of the **signature** occurs by combining the `transaction_id` with the `encrypted password` in the **_"Webhook Notification"_** section, along with the `generation_date` of the report. These values are then encrypted using the **_BCrypt_** algorithm as follows:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

To validate that it is Mercado Pago who issued the notification, the **_verification function_** offered by the **_BCrypt_** algorithm for the desired language must be used.

**Java example:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Have the [Glossary of Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/glossary) on hand to review it when needed or want to review a technical term.