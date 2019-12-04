---
sites_supported:
- mla
- mpe
- mco
- mlu
- mlm
- mlc
- mlb
---

# Advanced Integration

## Receive notifications of your orders

[IPN notifications](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn/) are an **automatic way of receiving notifications for order creation and status updates**. I.e.: when orders are approved, rejected or pending. 

Implement IPN `merchant_order` with an order search by `external_reference` as a contingency method.


## Refunds

Refunds happen when a payment was completed but the seller decides to cancel it partially or totally. You can find information in [Refunds and cancellations](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds) section.

> WARNING
> 
> Note
> 
> Remember that in the case QR payments, refunds are available but cancellations are not.

## Generate reports of your sales

Integrate [Mercado Pago reports](https://www.mercadopago.com.ar/developers/en/guides/reports/general-considerations/reconciliation-reports/) with your system to make sales reconcilitation and know about your account movements.

## Test and validate your integration 

We detailed all necessary cases you should try to make sure your system is succesfully integrated with Mercado Pago. 
Find all this information in the Tests section.


### Next steps

<div>  
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/final-steps/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Test your integration<span class="card-status-tag card-status-tag-recommended">RECOMMENDED</span></p>
<p>Perform the most frequent use cases to validate your integration.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
