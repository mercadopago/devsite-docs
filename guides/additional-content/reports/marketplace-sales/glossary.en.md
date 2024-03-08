# Report fields

You can find descriptions of each field present in the report in the table below.

| Field                   | Description                                                                                                                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Collector and Nickname** | **ID** and nickname of each **seller** linked to the marketplace.                                                                                                                                           |
| **Payment**              | Identification number of each payment.                                                                                                                                                          |
| **Status description**   | Payment status. It can be **Approved** if the payment has already been approved, or **Rejected** if it has been rejected.                                                                            |
| **Status Detail**        | Details of the payment status. For payments with the status **Approved**, the detail will be **accredited**. However, for rejected payments, you can obtain three different details depending on the reasons for rejection. You can find out why and how to resolve them in our documentation on [improving payment approval](/developers/en/docs/checkout-pro/how-tos/improve-payment-approval/reasons-for-rejection). |
| **Order ID**       | Purchase order number.                                                                                                                                                                   |
| **External Reference**       | Field used to be filled with the integration ID (used for reconciliations).                                                                                                                                                                   |
| **Metadata**       | Field for free use (commonly contains content in JSON format).                                                                                                                                                                   |
| **Payment method type** | Indicates the payment method used for the purchase, whether it's a credit card, debit card, or other means.                                                                              |
| **Transaction amount LC** | Gross transaction value.                                                                                                                                                                  |
| **Created and Approved Date** | Dates of payment creation and approval, respectively.                                                                                                                          |
| **Marketplace fee amount LC**   | Value of the fee corresponding to the marketplace.                                                                                                                                               |
| **MP fee amount LC**       | Value of the fee corresponding to Mercado Pago.                                                                                                                                               |
| **Total Paid Amount**   | Total amount paid by the **payer**, expressed in the corresponding currency.                                                                                                            |
| **Net Received Amount LC**  | Amount collected by the **collector** after deductions (fees, taxes, etc.).                                                                                                               |
