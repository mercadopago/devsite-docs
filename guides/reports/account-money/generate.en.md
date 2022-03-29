
# How to generate your Account Money report?

> NOTE
>
> Easily keep track of your sales made with a QR Code
>
> We have created new columns that allow you to identify which digital wallets or banks your clients use when they pay with a Mercado Pago QR Code. Update your settings preferences [from the panel](https://www.mercadopago[FAKER][URL][DOMAIN]/balance/reports/settlement/settings) or [via API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/api) so that you can include these columns in your reports. 

## Generation channels

There are two ways to generate an Available Balance report:

| Channels | Description |
| --- | --- |
| Mercado Pago panel | <br/> It's very simple and fast. To generate it from your Mercado Pago account, go to ----[mla]---- [your reports](https://www.mercadopago.com.ar/balance/reports?page=1#!/settlement-report) ------------ ----[mlm]---- [your reports](https://www.mercadopago.com.mx/balance/reports?page=1#!/settlement-report) ------------ ----[mlu]---- [your reports](https://www.mercadopago.com.uy/balance/reports?page=1#!/settlement-report) ------------ ----[mlc]---- [your reports](https://www.mercadopago.cl/balance/reports?page=1#!/settlement-report) ------------ ----[mco]---- [your reports](https://www.mercadopago.com.co/balance/reports?page=1#!/settlement-report) ------------ ----[mpe]---- [your reports](https://www.mercadopago.com.pe/balance/reports?page=1#!/settlement-report) ------------ ----[mlb]---- [your reports](https://www.mercadopago.com.br/balance/reports?page=1#!/settlement-report) ------------ and choose the Reports option.<br/><br/>Follow the step by step to [generate reports from this panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/panel).<br/><br/> |
| API integration | <br/>Schedule the frequency of your report according to your needs. It can be both manually and on a scheduled basis.<br/><br/>Read the documentation to [generate reports through API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/api). <br/><br/> |

<br/>

## Technical characteristics of the report

Consider the following technical information when you want to generate, schedule and set up your reports.

### Report Schedule

Set up how and how often you want to generate your reports.

| Element | Characteristics |
| --- | --- |
| Schedule | <br/>- Daily<br/> - Weekly<br/>- Monthly<br/><br/> |
| Generation | <br/>- Manual<br/><br/> |

### Report Structure

Know the characteristics of the elements that make up your report.

| Element or Action | Characteristics |
| --- | --- |
| Tables Detail | <br/>The detail of the tables includes information generated in at least 1 day.<br/> <br/> |
| Column Order |<br/> Permanent. <br/> <br/> |
| Maximum Period | <br/> Reports with data of up to 60 days. <br/> <br/> |
| Currency | <br/> Local (based on the country where the Mercado Pago account is registered). <br/> <br/> |
| Time zone of the columns | <br/> GMT-4 <br/> <br>Take as reference the place where you download the report from.<br/><br/> |
| Date selection via API |<br/> Timezone format: UTC / GMT-0. <br/> <br/> |
| Date selection via web | <br/> It must be based on the timezone of the user's account. <br/> For example, the timezone of São Paulo corresponds to the user account registered in Brazil. <br/> <br/> |

### Report Export

All the options you have available when downloading your report.

| Element or Action | Characteristics |
| --- | --- |
| Filename format | <br/>When the report is scheduled or manual:<br/> "&#60;prefix-configurable&#62;-<span>&#60;yyyy-MM-dd-hhmmss&#62;.&#60;format&#62;</span>" <br/> Example: mystore-2019-05-28-104010.csv<br/><br/> |
| Download formats | <br/>.csv, .xlsx <br/><br/>Tip: Download the report in .csv to import the data and use it in other applications. Download it in .xlsx to read the information in the spreadsheet tables. <br/><br/> |
| File | <br/>The generated reports are saved in your Mercado Pago account.<br/><br/> |
| Set up available via API | <br/>- Columns to generate per report.<br/> - File prefix for easy identification.<br/> - SFTP upload.<br/> - Column separator (period or semicolon).<br/> - Email notification.<br/><br/> |


> NOTE
>
> Note
>
> Have the [Glossary of the Account Money report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/glossary) on hand to review it when needed or want to review a technical term.

<hr/>

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Generating from Mercado Pago  
>
> Download your reports manually or scheduled from your Mercado Pago account.
>
> [Generating from Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/panel)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Generating through API
>
> Create reports in a scheduled and manual way through an integration with Mercado Pago.
>
> [Generating through API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/api)
