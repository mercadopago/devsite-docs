# Report use

## How to use the report?

Once the report is ready and downloaded, you will have a file to consult in spreadsheets or import into the reconciliation program of your choice.

To consult it, we recommend downloading it in *.csv* format and opening it in a spreadsheet or any visualization program. If you choose the latter option, it is important to configure the program in advance to support the *UTF-8* format and avoid reading issues.

### What does the report contain?

The report consists of a list of transactions made by the sellers linked to a marketplace. Each row represents an independent transaction with details about the different amounts and fees, as well as their **status** and **status_detail**. The `status` field indicates whether the payment was approved or not, while the `status_detail` field provides more details, including the reasons for rejection. You can find more information about the ***status*** and ***status_detail*** in the **Response Parameters** section of the [Payments API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments/post) documentation.

> NOTE
>
> Additionally, in the Net Received Amt LC column, you will find the actual impact on your money.

Observe how the sales report of the *Marketplace* is structured in this example to identify the operations and read your own reports:

![Example to identify operations and read your own reports](/images/manage-account/reports/marketplace-sales/image2.png)