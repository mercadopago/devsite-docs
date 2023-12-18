# Report use

Once the report is ready and downloaded, you will have a file to consult spreadsheets or import into the reconciliation program of your choice.

To view it, we recommend downloading it in .csv format and opening it in a spreadsheet or any visualization program. If you choose the latter option, it's important to configure the program to support the *UTF-8* format beforehand to avoid reading issues.

## Report content

The report lists transactions made by sellers associated with a marketplace. Each line details an independent transaction, including values, fees, *status*, and *status_detail*. While the *status* field indicates payment approval, *status_detail* provides additional information, such as rejection reasons.

For more details on *status* and *status_detail*, refer to the "Response parameters" section in the [Payments API documentation](https://www.mercadopago.com.ar/developers/es/reference/payments/_payments/post).

> NOTE
>
> Note
> 
> Additionally, in the **Net Received Amount LC** column, you will find the actual impact on your money.

Take a look at how the sales report is structured in this example to identify the operations and read your own reports:

![Example for identifying operations and reading your own reports](/images/manage-account/reports/marketplace-sales/image2.png)