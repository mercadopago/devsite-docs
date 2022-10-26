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
> Have the [Glossary of Releases report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/reports/released-money/glossary) on hand to review it when needed or want to review a technical term.


## Report example

Note how the Release report is composed in this example to identify the sections and read your own reports:

![Mercado Pago Release report example](/images/manage-account/reports/example-release-en.jpg)

The default version will show an extended view of the columns. The final report will have as much detail as possible.

----[mpe]----
## How do I analyze the reports generated from January 2022 onwards?
------------
----[mlu]----
## How do I analyze the reports generated from March 2022 onwards?
----[mlc, mco]----
## How do I analyze the reports generated from August 2022 onwards?
------------
----[mla, mlm]----
## How do I analyze the reports generated from October 2022 onwards?
------------
----[mpe, mlu, mla, mlm, mlc, mco]----
The reports generated as of  ------------ ----[mpe]----January------------  ----[mlu]----March------------ ----[mla, mlm]----October------------  ----[mco, mlc]----August ------------  ----[mpe, mlu, mla, mlm, mlc, mco]---- 2022 have the following characteristics:

1. The movements are displayed in chronological order, which allows you to identify them more easily and better control your orders.
2. If there is a complaint or chargeback due to a problem with the service or the product provided, the respective amount is withheld until the mediation is resolved. This information is included in your report and you can find it by searching for the prefix "reserve-".  
3. The movements related to the money withdrawals and/or transfers from your available money are displayed as "Payout", and all the mediations that may arise when a complaint is initiated or resolved are shown as "Dispute". You can review this glossary to check the description of all the other movements and terms.

## What information is in the report?

The report has a simplified structure to make it easier to understand it:

| Report Composition | Description |
| --- | --- |
| Initial Available Balance |<br/> Initial balance. Indicates the amount that was available on the initial date of the period you selected to make the reconciliation.  <br/><br/>|
| Release |<br/> The detail of the transactions that impact the total balance. <br/><br/> |
| Total| <br/> It is the difference between the total net amount credited and the total net amount debited. <br/><br/> |

## Example of a report

Check in this example how the report "Releases" is composed to identify the sections and analyze your own reports:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-n-ledger-en.jpg) 

------------