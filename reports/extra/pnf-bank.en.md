---
sites_supported:
  - mlb
---

# Collections month by month in Available Money report

We show you how to see your Mercado Pago account collections month by month in Available Money report.

## Collections month by month activity

Number of installments chosen by buyer sets number of payments you receive. So viewing payments is different from traditional release schedule. 

## How to see your collections

Sale will be divided into number of installments it was made with. Therefore, this report will show each installment separately since each of them has a different release date. That is, each installment belongs to a different month. 

Column `DESCRIPTION` identifies the installment with `installment` value and column `INSTALLMENTS` show the number of installment each refers to.

![Ejemplo de liberación de cuota](/images/manage-account/reports/reports-information-details/pnf-liberacion-de-cuota-bank.png)

## Types of refunds

You can see your refunds in different ways by type and installments released.

### Total refunds

If total refund, you will see the detail of all installments in your report and, at the same time, the relevant full payment refund.

Column `DESCRIPTION` identifies each installment with `installment` value and total refund as `refund`. 

> If in doubt about payment installments, search activity with the same `SOURCE_ID`. 

![Ejemplo de reembolso antes de liberar alguna cuota](/images/manage-account/reports/reports-information-details/pnf-reembolso-antes-de-liberar-bank.png)

> NOTE
>
> Nota
>
> Have the [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/available-money/glossary) of the Available Balance report on hand to review it when needed or want to review a technical term.


### Partial refund

If partial refund before first collection, number of installments and relevant amounts will be updated accordingly. In case you have received some payment, it will be deducted from total refund pending collection and installment amount will be specified again. 

If refund is higher than amount pending receipt, don't worry, the next report will show difference amount debited to complete it.

## Chargebacks

Your report shows when a [chargeback](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/account/chargebacks) or mediation is resolved in favor of buyer. You will see a list of all installments, or those pending release, and the total amount for payment chargeback.

To identify this case, column `DESCRIPTION` show `chargeback` value for chargebacks of already collected installments. 


> If in doubt about payment installments, search activity with the same `SOURCE_ID`. 

![Ejemplo de contracargo](/images/manage-account/reports/reports-information-details/pnf-contracargo-luego-de-liberar-bank.png)

## Installments in advance

If you ask for an advance you will see all the installments in advance and relevant fee in the report. 

Column `DESCRIPTION` identifies each installment with `installment` value and fee as `fee-release_in_advance`.

![Ejemplo de adelanto de cuotas](/images/manage-account/reports/reports-information-details/pnf-adelanto-de-cuotas-bank.png)

> NOTE
>
> Note
>
> Have the [Glossary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/available-money/glossary) of the Available Balance report on hand to review it when needed or want to review a technical term.


### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Create your Available Money report
>
> Learn how to create a report and follow the steps to set up your references.
>
> [Create your Available Money report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/available-money/generate)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> Information detail about your report
>
> We will explain all the information necessary about your report data and how to read them.
>
> [Information detail about your report](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/manage-account/reports/extra/reports-information-details)
