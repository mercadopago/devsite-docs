# How to generate your Releases report?

----[mla]----
> NOTE
>
> Easily keep track of your sales made with a QR Code
>
> We have created new columns that allow you to identify which digital wallets or banks your clients use when they pay with a Mercado Pago QR Code. Update your settings preferences [from the panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings) or [via API](/developers/en/guides/additional-content/reports/released-money/api) so that you can include these columns in your reports.
------------
----[mco, mlc]----
> WARNING
>
> Important
>
> The reports you generate from June onwards will show your movements in chronological order so that you can identify more easily when they took place. [Learn how to use this report.](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/release/settings)
------------

## Generating channels

You can generate a Release report from your Mercado Pago account:

| Channels | Description |
| --- | --- |
| Mercado Pago panel | To manually generate the report from your Mercado Pago panel, go to [Reports](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) and choose "Created reports".<br/><br/>Follow the step by step to [generate reports from your panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/panel).|
| API integration | <br/>Schedule the frequency of your report according to your needs. It can be both manually and on a scheduled basis.<br/><br/>Read the documentation to [generate reports through API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/api).|



## Technical characteristics of the report

Consider the following technical information when you want to generate, schedule and set up your reports


### Report structure

Know the characteristics of the elements that make up your report.


| Element or action | Characteristics |
| --- | --- |
| Tables Detail | The detail of the tables includes information generated in at least 1 day. |
| Column Order | Fix |
| Maximum Period | Reports with data of up to 60 days. |
| Currency | Local (based on the country where the Mercado Pago account is registered) |
| Time zone of the columns | <br/> GMT-4 <br/> <br/> Take as reference the place where you download the report from. |
| Date selection via web | <br/> It must be based on the timezone of the user's account. <br/> For example, the timezone of Sao Paulo corresponds to the user account registered in Brazil. |


### Report Export

All the options you have available when downloading your report.

| Element or action | Characteristics |
| --- | --- |
| Filename format | When the report is scheduled or manual: "prefix-custom-<span style='color:#999999;'>created-date.csv</span>" <br/> Example: mystore-28-05-2019.csv |
| Download formats | .csv, .xlsx <br/><br/>Tip:Download the report in .csv to import the data and use it in other applications. Download it in .xlsx to read the information in the spreadsheet tables. |
| File | Generated reports are saved in your Mercado Pago account. |


## Notifications

### Webhook

Webhook (also known as "web callback") is a simple method that allows an application or system to send real-time data whenever a particular event takes place, that is, it is a way to passively receive information between two systems via an HTTP POST. In the case of the reports used for reconciliation, a notification is sent to the user who has set up this service when their files are generated.

| Attribute       | Description                  |
|-----------------|------------------------------|
| transaction_id  | Transaction ID               |
| request_date    | Request date                 |
| generation_date | Generation date              |
| files           | Available files              |
| type            | File format                  |
| url             | Download link                |
| name            | File name                    |
| status          | Report status                |
| creation_type   | Manual or scheduled creation |
| report_type     | Report type                  |
| is_test         | Determines if it is a test   |
| signature       | Notification signature       |

### Password for encryption

To ensure the notification process to the system, an attribute called **_signature_** will be sent in the body of the message (payload) in order to validate that the Webhook notification originated from Mercado Pago and that it is not an imitation.

The **_signature_** is build up by joining the `transaction_id` with the `password for encryption` configured in the **_"Webhook Notification"_** section, plus the `generation_date` of the report. Once the values are joined, they are encrypted using the **_BCrypt_** algorithm as follows:

`signature = BCrypt(transaction_id + '-' + password_for_encryption + '-' + generation_date)`

To validate that it is Mercado Pago who issued the notification, the **_verification function_** offered by the **_BCrypt_** algorithm for the desired language must be used.

**Java example:**

`BCrypt.checkpw(transaction_id + '-' + password_for_encryption + '-' + generation_date, payload_signature)`

> Have the [Glossary of Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/glossary) on hand to review it when needed or want to review a technical term.

<hr/>

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Glossary
>
> Know what each term means and the detail of the columns that make up the report.
>
> [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/glossary)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> How to use this report
>
> Learn how the report is composed and how to analyze it to make your reconciliation. 
>
> [How to use this report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/how-to-use)
