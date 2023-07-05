# Reports

Mercado Pago reports are sets of financial information that help you visualize your account data (available balance, transactions, liquidity), allowing you to combine sales and other operations with your internal management systems.

Check the table below for more details on the available report types.

| Report type | Description |
|---|---|
| Releases report| Informs how the balance available in your account is composed, detailing all amounts involved in a period of time. For more information [click here](/developers/en/docs/checkout-api/additional-content/reports/released-money). |
| Account balance report| Informs the transactions/movements that affected your account balance. For more information [click here](/developers/en/docs/checkout-api/additional-content/reports/account-money/introduction). |
| Available balance report| Informs the liquidity of your business, showing the amount available for use in the account. [Click here](/developers/en/docs/checkout-api/additional-content/reports/available-money/introduction) for more information. <br><br>* **This report will be deprecated soon**. We recommend using the [Released Report](/developers/en/docs/checkout-api/additional-content/reports/released-money) to reconcile the transactions that compose the balance available in your account, including your bank withdrawals. |

> NOTE
>
> > WARNING
>
> The Available Balance report will be disabled from March 1st, 2022
>
> You can use the [Releases report](/developers/en/docs/checkout-api/additional-content/reports/released-money) to reconcile the transactions that affect the balance available in your account, including your bank withdrawals.

