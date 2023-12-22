# Report uses

Once the report is ready and downloaded, you will have a file ready to consult spreadsheets and import them into the program you use.

To review the report, we recommend downloading it in CSV format to open it in a program that can visualize it. The file should be configured in UTF-8 format to avoid reading issues.

## Report content

| Report field | Description |
| --- | --- |
| Initial Available Balance |<br/> Initial balance. Indicates the amount available on the initial date of the period you selected for reconciliation. <br/><br/>|
| Release |<br/>Details of releases of money, including the initial balance and transactions impacting the total balance. <br/><br/> |
| Block | <br/>Money blocks due to disputes.<br/><br/> |
| Unblock |<br/> Unblocks after dispute resolution.<br/><br/>|
| Subtotal | <br/>Sum of transactions within each section.<br/><br/>|
| Total| <br/> Final result composed of the sum of all subtotals. <br/><br/>In other words:<br/> subtotal `Release` + subtotal `Block` + subtotal `Unblock` = total result. <br/><br/>It is the difference between the total credited net amount and the total debited net amount. |

Additionally, the report reflects accounting concepts of debit (money you need to pay) and credit (money you are due to receive), organizing the report into two columns, one for each concept:

> Your **credit** will be in the `NET_CREDIT_AMOUNT` column.
><br>
> Your **debt** will be in the `NET_DEBIT_AMOUNT` column.

The available balances of transactions are displayed in the `NET_CREDIT` (credit) and `NET_DEBIT` (debit) columns according to positive or negative values. In these fields, the gross amount and discounts related to financing, taxes, and shipping costs are also detailed, resulting in the final net amount.

If a transfer is not completed, the report remains valid. The amount will be refunded to your account, and the transaction will be displayed on a new line in the `NET_CREDIT` column.

> NOTE
>
> Important
>
> Have the [Release Report Glossary](https://www.mercadopago.com.br/developers/en/guides/additional-content/reports/released-money/glossary) on hand to consult when needed to check any technical term.

## Report example

Observe what comprises the Release Report in the following example to identify the sections and analyze your own reports:
----[mla]----
![Reporte de liquidaciones](/images/manage-account/reports/example-release-es.jpg)

------------
----[mlm, mlb, mlc, mco, mlu, mpe]----
![Reporte de liberaciones](/images/manage-account/reports/example-release-es.jpg)

------------
The default version will show an extended view of the columns. The final report will have the most detailed information possible.

## Report organization

See the following example for the organization of the report:

![Reporte de Dinero retirado Ejemplos Mercado Pago](/images/manage-account/reports/example-nledger-es.jpg) 