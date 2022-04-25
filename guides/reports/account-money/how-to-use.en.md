# How to use the report?

Once the report is ready and downloaded, you will have a file to review the spreadsheets or import into the reconciliation program you use.

To review the report we recommend downloading it in .csv format to open it in the program that you view it. Configure your program to support the UTF-8 format, so you avoid reading problems.

## What does the report contain?

The report is made up of different types of transactions that you can see in the `TRANSACTION_TYPE` column. Each of them will have the gross amount of the operation.

<br/>

| Transactions | Transaction type |
| --- | --- |
| *SETTLEMENT* |<br/> Approved <br/><br/>|
| *REFUND* |----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Total or partial returns <br/><br/> ------------ ----[mpe]---- <br/> Total returns <br/><br/> ------------|
| *CHARGEBACK* | <br/> Chargeback <br/><br/> |
| *DISPUTE* |<br/> In a complaint <br/><br/>|
| *WITHDRAWAL* | <br/> Money withdrawn <br/><br/>|
| *CASHBACK* | <br/> Cashback <br/><br/> |
| *SETTLEMENT_SHIPPING* | <br/> Approved shipments <br/><br/> |
| *REFUND_SHIPPING* | ----[mla, mlm, mco, mlu, mlb, mlc]---- <br/> Total or partial returns of shipping costs <br/><br/> ------------ ----[mpe]---- Returns of shipping costs ------------ |
| *CHARGEBACK_SHIPPING* | <br/> Shipping chargeback <br/><br/> |
| *DISPUTE_SHIPPING* | <br/> The shipment is in claim <br/><br/> |

And in the `SETTLEMENT_NET_AMOUNT` column you will find the real impact on your account balance.

> NOTE
>
> Note
>
> Have the [Glossary of the Account Money report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/glossary) on hand to review it when needed or want to review a technical term.

## Report example

Note how the Account Money report is composed in this example to identify the operations and read your own reports:

![Reporte de dinero en cuenta Ejemplos Mercado Pago](/images/manage-account/reports/example-settlement-en.jpg)

The default version will show an extended view of the columns. The final report will have as much detail as possible.

<hr/>

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Generate your reports
>
> Learn the ways to generate a report and follow the steps to set your preferences.
>
> [Generate your reports](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/generate)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Glossary
>
> Know what each term means and the detail of the columns that make up the report.
>
> [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/account-money/glossary)