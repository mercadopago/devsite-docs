# How to use the report?

Once the report is ready and downloaded, you will have a file to review the spreadsheets or import into the reconciliation program you use.

To review the report we recommend downloading it in .csv format to open it in the program that you view it. Configure your program to support the UTF-8 format, so you avoid reading problems.

## What does the report contain?

The report is composed by:

| Report composition | Description |
| --- | --- |
| Initial Available Balance |<br/> Initial balance.<br/><br/>|
| Release |<br/> The detail of the money releases that includes the initial balance.<br/><br/> |
| Block | <br/>Money blocks due to disputes.<br/><br/> |
| Unblock |<br/>Unlocks for the resolution of disputes.<br/><br/>|
| Subtotal | <br/>The sum of the operations that make up each section.<br/><br/>|
| Total| <br/> It is the final result composed of the sum of all subtotals. <br/><br/>That is to say:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = total result<br/><br/> |


In addition, the report reflects the accounting concepts of *owe* (money you must pay) and *will have* (money you must collect) in two columns, one for each concept:


> Your **will have** will be seen in the `NET_CREDIT` column.
><br>
> Your **owe** will be seen in the `NET_DEBIT` column.

You will see the available balance from the released transactions in the `NET_CREDIT` (credited) and `NET_DEBIT` (debited) columns, depending on whether the amount is positive or negative. You will also see there the gross amount and the financing costs, taxes and shipping costs that we deducted to reach the net amount.

**What happens if a transfer fails?**

If this happens, the report is still valid. The money returns to your account and the transaction will appear in the report as a new line in the `NET_CREDIT` column.


> NOTE
>
> Note
>
> Have the [Glossary of Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/glossary) on hand to review it when needed or want to review a technical term.


## Report example

Note how the Release report is composed in this example to identify the sections and read your own reports:

![Mercado Pago Release report example](/images/manage-account/reports/example-release-en.jpg)

The default version will show an extended view of the columns. The final report will have as much detail as possible.

<hr/>

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Generate your report
>
> Learn the ways to generate a report and follow the steps to set your preferences.
>
> [Generate your report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/generate)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Glossary
>
> Know what each term means and the detail of the columns that make up the report.
>
> [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/glossary)
