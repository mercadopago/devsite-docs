# Releases report

The Releases Report is a downloadable file detailing the balance available in your Mercado Pago account. It not only displays the total available amount but also provides information on transactions conducted within a specified period, including situations like fund blocks and unblocks.

Additionally, it informs you whether your money is available or not, allowing you to request this information for a convenient date range. Keep in mind that currently, this report is only generated through your computer.

----[mpe]----
## Analysis of reports from January 2022
------------
----[mlu]----
## Analysis of reports from March 2022
----[mlc, mco]----
## Analysis of reports from August 2022
------------
----[mla, mlm]----
## Analysis of reports from October 2022
------------
----[mlb]----
## Analysis of reports from January 2023
------------

The reports you generate from ----[mpe]----January 2022------------  ----[mlu]----March 2022------------ ----[mla, mlm]----October 2022------------  ----[mco, mlc]----August 2022------------ ----[mlb]----January 2023------------ have the following characteristics:

1. Movements are shown in chronological order, making them easier to identify and providing more control over your sales.
2. In case of any complaints or disputes related to an issue with the service or product offered, the corresponding amount is held until the mediation is resolved. This information is included in your report, and you can find it by searching for the "reserve-" prefix.
3. Movements related to withdrawals and/or transfers from your available balance appear as "Payout," and all mediations that arise when a complaint is initiated or resolved appear as "Dispute." To check the description of other movements and terms, refer to [the glossary](/developers/en/docs/checkout-pro/additional-content/reports/released-money/report-use).
4. You will find a new column called "Sale detail," providing detailed information about the items sold, facilitating reconciliation and control of your sales. Each entry in this column shows the first element of the sale, followed by the grouping of other items.

## Download report

Follow this path to learn how to generate and download the Releases Report:
**Reports and Billing -> Sales and Account Statements -> Release**.

### Create report via API

Manually create the Releases Report as often as you wish or schedule it according to your frequency needs through the [API](/developers/en/docs/checkout-pro/additional-content/reports/released-money/api).

Report generation takes a few minutes, depending on how much information you want to include. It won't always be ready instantly, and until it is, you will see the status "In preparation" on the screen.

> Refer to ["How to analyze the Releases Report?"](https://www.mercadopago.com.br/ajuda/28771) for a better understanding of your report.

### Report values

Depending on the [selected fees and deadlines](https://www.mercadopago.com.br/settings/release-options), the value obtained from the sale will be released after the payment is credited. Therefore, the total amount indicated in the report may not always coincide with your total balance or the total amount in billing reports.

Release deadlines are related to banking processes and mediation flows when transactions are made on Mercado Livre. Additionally, disputes and complaints received in sales can impact money release.

> For the exact date of availability of funds from a transaction, it is important to review [the details of credited payments](https://www.mercadopago.com.br/activities/balance).

## Using the report

The Releases Report is an essential tool for both reconciliation and analysis of your financial history. It details account transactions, provides understanding and reconciliation of available balances on specific dates, and provides data for each transaction, including date, concept, and amount.

Furthermore, this report presents the complete history of released money, covering events such as bank transfers, disputes, refunds, and chargebacks, and highlights settled installments compared to those pending payment.

> NOTE
>
> Note
>
> Use the [Releases Report Glossary](https://www.mercadopago.com.br/developers/en/docs/checkout-pro/additional-content/reports/released-money/report-use) for technical term reference, if needed.