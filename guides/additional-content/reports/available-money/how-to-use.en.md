
# How to use the report?


Once the report is ready and downloaded, you will have a file to review the spreadsheets or import into the reconciliation program you use.

To review the report we recommend downloading it in .csv format to open it in the program that you view it. Configure your program to support the UTF-8 format, so you avoid reading problems.

> WARNING
>
> TThe Available Balance report will be disabled from March 01, 2022
>
> Use the [Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/released-money/introduction) to reconcile the transactions that affect the balance available in your account, including your bank withdrawals.

## What does the report contain?

The report is composed by:

| Report composition | Description |
| --- | --- |
| *Initial Available Balance* |<br/> Initial balance.<br/><br/>|
| *Release* |<br/> The detail of the money releases that includes the initial balance.<br/><br/> |
| *Block* | <br/> Money blocks due to disputes.<br/><br/> |
| *Unblock* |<br/> Unlocks for the resolution of disputes.<br/><br/>|
| *Subtotal* | <br/> The sum of the operations that make up each section.<br/><br/>|
| *Total*| <br/> It is the final result composed of the sum of all subtotals.<br/><br/> That is to say:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = Resultado total<br/><br/> |

In addition, the report reflects the accounting concepts of *owe* (money you must pay) and *will have* (money you must collect) in two columns, one for each concept:

> Your *will have* will be seen in the `NET_CREDIT` column
> <br>
> Your *owe* will be seen in the `NET_DEBIT` column

You will see the available balance from the released transactions in the `NET_CREDIT` (credited) and `NET_DEBIT` (debited) columns, depending on whether the amount is positive or negative. You will also see there the gross amount and the financing costs, taxes and shipping costs that we deducted to reach the net amount.

> NOTE
>
> Note
>
> Have the [Glossary](https://www.mercadopago.com.ar/ayuda/_2118) of the Available Balance report on hand to review it when needed or want to review a technical term.

**Do you want to add details to the operations view?**

Select the columns you want to export and include in the Report Settings, depending on what you want to analyze and reconcile.

**What happens if a withdrawal fails?**

If this happens, the report is still valid. The money goes back to your account and the transaction will appear in the report as a new line in the `NET_CREDIT` column.

## Report example

Note how the available balance report is composed in this example to identify the sections and read your own reports:

![Reporte de Dinero disponible Ejemplos Mercado Pago](/images/manage-account/reports/examples-en.png)

The default version will show an extended view of the columns. The final report will have as much detail as possible. If you want less detail or there are columns that do not help you to reconcile, you can modify which ones to include and which not in the Settings.

> WARNING
>
> Important: differences between partial withdrawal and total withdrawal.
>
> When you withdraw all your available money, the total report will match that amount. On the other hand, when you make a partial withdrawal, which does not include all of your released account money, the total available balance and the total of the report will not match.
><br>
> For example, imagine that you have $ 3,000 available to withdraw to a bank account but only withdraw $ 2,000. The withdrawal is partial but the total value of the report will continue to show you the amount of the initial balance that was at the time of withdrawal, that is, the $ 3,000 you had available. On the other hand, if you withdraw the $ 3,000, the total value of the report will match the value of that withdrawal.

<hr/>

### Next steps

> LEFT_BUTTON_REQUIRED_EN
>
> Generate your reports
>
> Learn the ways to generate a report and follow the steps to set your preferences.
>
> [Generate your reports](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/available-money/generate)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Glossary
>
> Know what each term means and the detail of the columns that make up the report.
>
> [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/available-money/glossary)
