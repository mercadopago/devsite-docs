# How to generate your Releases report?


## Generating channels

You can generate a Release report from your Mercado Pago account:

| Channels | Description |
| --- | --- |
| Mercado Pago panel | To manually generate the report from your Mercado Pago panel, go to [Reports](https://www.mercadopago[FAKER][URL][DOMAIN]/movements) and choose "Created reports".<br/><br/>Follow the step by step to [generate reports from your panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/panel).|
| API integration | <br/>Schedule the frequency of your report according to your needs. It can be both manually and on a scheduled basis.<br/><br/>Read the documentation to [generate reports through API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/api).|



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


> NOTE
>
> Note
>
> Have the [Glossary of Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/glossary) on hand to review it when needed or want to review a technical term.

<hr/>

### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Glossary
>
> Know what each term means and the detail of the columns that make up the report.
>
> [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/glossary)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> How to use this report
>
> Learn how the report is composed and how to analyze it to make your reconciliation. 
>
> [How to use this report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/how-to-use)
