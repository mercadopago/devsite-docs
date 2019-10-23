---
sites_supported:
  - mla
  - mco
  - global
---

# Mercado Pago Gateway: Introduction

## What is it?

**Mercado Pago Gateway** is an operation model that allows your business to process credit and debit card payments with your own merchant IDs (also known as merchant of record). In this model, Mercado Pago offers you all its technology and sturdiness to operate with your own commercial agreements with acquirers or issuers.

## Which are the main differences with the "normal" Mercado Pago?

To the "normal" Mercado Pago, the one you are probably more used to, in the payment industry is known as an **Aggregator Model**. The commercial agreements with acquirers and issuers are handled by the Aggregator: Mercado Pago. The sellers registered in the platform are "added" or subscribe to the usage of those agreements.

The **Aggregator Model** is the one offered by default in Mercado Pago unless the seller qualifies (view requisites below) to operate in the **Gateway Model**.

_Main differences between the two models:_

|Trait| Aggregator Model | Gateway Model |
|---|:---:|:---:|
|Processing | ✔ | ✔ |
|Fraud Prevention (Scoring) | ✔ | ✔ (*) |
|Fraud Prevention (Manual Review) | ✔ | ✔ (*) |
|Reconciliation (with Mercado Pago) | ✔ | ✔ |
|Reconciliation (with Acquirers & Issuers) | Included | Not offered |
|Financing (Installments & Promotions) | Included | Not applicable |
|Chargebacks (Management) | Included | Not offered |
|Chargebacks (Coverage) |Included | Not offered |

> (\*) Optional

## Are there any differences in the technical integration?

Yes, there are some differences, but they are minor.

If you are starting a new business we recommend starting with the **Aggregator Model**. Once your business grows consider moving to the **Gateway Model**. The fact the the technical changes are small, allows you to change your model without incurring in high efforts or costs.

## Hybrid mode (Aggregator + Gateway)

The integration with Mercado Pago also allows you to operate in a hybrid mode, unique in latin-america. With the same integration you will be able to offer all Mercado Pago's payment methods and promotions in **Aggregator Model** plus your own in the **Gateway Model**, giving your customers the largest offering in means of payments and financing.

## Requisites to operate in the Gateway Model

### If you are currently operating with Mercado Pago

* Get in touch with your sales representative.

## Service costs

The service costs in the **Gateway Model** are negotiated one on one. The cost depends on the seller's monthly payment volume.

### Next steps

* [Configure your merchant IDs and payment methods](https://www.mercadopago.com.ar/developers/en/guides/gateway/general-considerations/configuration) in Mercado Pago's backoffice
* [Integrate the Smart Checkout](https://www.mercadopago.com.ar/developers/en/guides/gateway/web-checkout/receiving-payments) for the Gateway Model
* [Integrate the API](https://www.mercadopago.com.ar/developers/en/guides/gateway/api/receiving-payments) for the Gateway Model
