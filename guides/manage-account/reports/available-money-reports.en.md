# What is the Available Balance Report?

> INDEX
>
> In this page
>
> - [Introduction](#bookmark_introduction) 
>
> - [Use cases](#bookmark_use_cases)
>
> - [How to use the report](#bookmark_how_to_use_the_report) 
>
>    + [Examples](#bookmark_examples)
>


## Introduction

The Available Balance Report is a **downloadable report** in .csv or .xlsx format that allows you to know the liquidity of your business, that is, how much money you have to spend. It contains the **detail of the released** payments that are ready to withdraw to a bank account or invest in Mercado Pago.

Access your reports from the Reports section in your Mercado Pago account by following these steps:
1. [Login](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAy2OQQ7DIAwE_-JzlNw59iPIIoagQo2MI1pF_XtN1OOux2NfUDjll9dPI3BA71ZyyAoLtIIaWarPuw1qs6pnpX8sOBEUrKQkHdw1RYn2B9nSVKmcZAyeevhYeFh1n7IusYVDtXW3bWOMtZIE3Llh4jVwXVE2w4RS7man-cCt-y4QsatXwfAEF7F0-v4AxU1qhMMAAAA/user) to Mercado Pago.
1. Go to [Reports](https://www.mercadopago.com/mla/account/movements) and then access your [Reports](https://www.mercadopago.com/mla/account/movements).
1. In Reports, select Available Balance, where you will find a list of the generated reports.

Keep in mind that the generation of the report takes a while, that is, it will not always be ready instantly and, until then, you will see the “In preparation” status on the screen. Once available, it will be in your report tray and you can always download it in two ways:
* From a downloadable link we will send you by email.
* From your Mercado Pago account, in Reports of Available Balance. 

It is important to clarify that the total value of the report does not always coincide with the values of the Money in Account report or the billing reports. Depending on [the terms and rates you choose](https://www.mercadopago.com.ar/settings/release-options), the money you earn from a sale will be released some time after the payment is credited. To find out the exact date on which money from an operation will be available, check the details of your [credited charges](https://www.mercadopago.com.ar/activities/balance).
 
These terms are related the terms of the banks or the intermediation flows when the operations are carried out in Mercado Libre. Other operations that may affect the release of your money are Chargebacks and Complaints that you may receive for a sale.


## Use cases

Generally, this report **is used to reconcile** withdrawals and includes the transactions that comprise it.

We generate an Available Balance Report in these three situations: 
1. Every time you generate it manually.
1. Scheduled, according to your settings.
1. With each withdrawal of money to a bank account.

Use the Available Balance Report in these cases: 
1. When you want to have an account liquidity report,
1. To reconcile how operations that impact your available balance on a transactional level are composed,
Monthly or periodic reconciliation with the detail of the movements that generate available balance to withdraw.
1. To know:
     + The history of available balance between two dates or two withdrawals
     + The detail of the events that make up an automatic or manual withdrawal, total or partial.
     + The detail of disputes, refunds, shipping, chargebacks, taxes and other operations that affect the available balance.
     + The detail of the installments released and the “In installments” operations.


## How to use the report

To read the report we recommend using a .csv file and that you review the character settings. It must be in UTF-8 format. Check it in the settings of your spreadsheet (Excel, LibreOffice Calc, etc):

![Available Balance Report excel Mercado Pago](/images/manage-account/reports/ms-excel.png)
<p style="text-align:center;font-size:12px;">Example in Excel </p>

![Available Balance Report Open Office Mercado Pago](/images/manage-account/reports/open-office.png)
<p style="text-align:center;font-size:12px;">Example in Open Office</p>

The report contains 4 sections:
1. Initial Balance (Initial Available Balance)
1. Money Release Details (Releases)
1. Freezing of money due to disputes (Block)
1. Unfreeze for dispute resolution (Unblock)

You will see a section of **subtotals** for each block and, finally, the **total result**. We calculate this total on the net subtotals of each section, it is the net sum of:

> Subtotal Release - Subtotal Block + Subtotal Unblock = Total Result

View the [Complete glossary](https://www.mercadopago.com.ar/developers/en/guides/manage-account/reports/available-money-reports-glossary)

We reflect the universal accounting concepts of *debit* (money you have to pay) and *credit* (money you have to collect) writing the report in two columns, one for each concept:

> NOTE
>
> Note
>
> Your credit will be in the column `NET_CREDIT`
>
> Your debit will be in the column `NET_DEBIT`

You will see the available balance from the operations released in the `NET_CREDIT` (credited) and `NET_DEBIT` (debited) columns, depending on whether the amount is positive or negative. There, you will also see the gross amount and the financing, taxes and shipping costs that we deduct to reach the net amount.

**What happens if a withdrawal fails?**

If this happens, the report is still valid. The money goes back to your account and the operation will appear in the report as a new line in the `NET_CREDIT` column.

### Examples

Note how the available balance report is composed in this example to identify the sections and read your own reports:

![Available Balance Report Examples Mercado Pago](/images/manage-account/reports/examples.png)

The default version will show an extended view of the columns. The final report will have as much detail as possible. If you want less details or there are columns that are not useful for reconciliation, you can change which ones to include and which not in Settings.

> WARNING
> 
> Important
>
> **Differences between partial and total withdrawal.**
> 
> When you withdraw all your available balance, the total in the report will match that amount. On the other hand, when you make a partial withdrawal, which does not include all of the released money in your account, the total available balance and the total of the report will not match.
>
> For example, imagine that you have $ 3,000 available to withdraw to a bank account but you withdraw only $ 2,000. The withdrawal is partial but the total of the report will continue to show you the amount of the initial balance that was at the time of withdrawal, that is, the $ 3,000 you had available. On the other hand, if you withdraw the $ 3,000, the total of the report will match the amount of that withdrawal.