---
sites_supported:
    - mla
    - mlb
    - mlm
    - mlc
    - mpe
---

# Advanced Payments

> WARNING
>
> Important
>
> Before using this API, it is important that you contact your Mercado Pago account executive. 

## Introduction

Advanced Payments is an API that allows processing payments with additional functionalities to the regular [API of Payments](https://www.mercadopago.com.br/developers/en/guides/payments/api/introduction/). It currently allows to make Marketplace split payments.

#### Marketplace split payments

The Split Payment functionality provides a solution for Marketplace payments where the business model requires splitting money among multiple Sellers.

> NOTE
>
> Note
>
> For more information, please view the [Marketplaces](https://www.mercadopago.com.br/developers/en/guides/marketplace/api/introduction/) documentation.

#### Payment division

* A payment made by a Buyer that corresponds to a Marketplace, is divided among multiple Sellers.
* The division is made at the time of payment approval.
* There is no limit of Sellers to divide the money and the Marketplace gets a commission for each sale made.
* You can configure who pays the Mercado Pago commission.

#### Flexibility to apply commission

* The Marketplace retains part of the sale amount as commission.
* The commission charged by the Marketplace applies to each payment.
* This allows having different commissions for different Sellers and in turn different commissions according to the type or category of the product offered by a Seller.

#### Flexible release of Sellers money

* At the time of integration, a range of days is set in which the money of the Sellers can be released.
* The release is set in each payment and can be modified later.
