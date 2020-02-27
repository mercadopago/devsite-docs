---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Advanced Payments
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

#### Release of money from your Sellers

* The release of money from your Sellers will be 30 days by default.

[Start using split payments in Marketplace](https://www.mercadopago.com.br/developers/en/guides/marketplace/advanced-payments/receive-split-payments/).