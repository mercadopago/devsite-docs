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

# Previous requirements to integrate 

## Glossary

We know some concepts may be new for you. Before starting, here’s a cheatsheet.

| Term                            | Description                                                  |
| -----------------------------------| ------------------------------------------------------------ | 
| Credentials        | Your credentials are the keys we give you so you can set up your integrations. To find them, go to your [credentials]([FAKER][CREDENTIALS][URL]) and select the **productive** ones on _Customized checkout._ |
| `ACCESS_TOKEN` | The private app key to generate payments. You’ll find it on [credentials](FAKER][CREDENTIALS][URL]) section. You must use it to identify yourself in your integrations. Always use the Production Mode credentials. |
| `COLLECTOR_ID` | Buyer’s user ID in Mercado Pago, consist on the last 9 digits on the `access_token`, the numbers after the dash. Also known as the `USER_ID`.|
| `SPONSOR_ID` | Supplier’s ID on the integrated system with Mercado Pago. Consist on the last 9 digits of the `access_token`, after the dash mark. `sponsor_ID` must be different than `COLLECTOR_ID`.|
| Store | A **physical shop** in which your clients can get products and services. You can have multiple stores on one account. |
| Point of sale (POS) | A place to perform a transaction on a store or physical shop. Each POS will be linked with a unique QR code. |
| Order | A purchase made by your client. Contains a list of product with an associated cost. |

## Previous requirements

To continue, you must: 

**1. Access to Mercado Pago or Mercado Libre account**

To start the integration, you must have a Mercado Pago or Mercado Libre account. 
If you don’t have an account yet, you can [create one here](https://www.mercadopago.com.ar).


> NOTE
> 
> Note
> 
> If you were to operate in behalf of others, you can work with their credentials safer and easier through [Marketplace](https://www.mercadopago.com.ar/developers/en/guides/marketplace/api/introduction/).


### Next steps

<div>
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/general-considerations/stores-pos/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Stores and POS<span class="card-status-tag card-status-tag-required">REQUIRED</span></p>
<p>To build the integration, you must set up your stores and POS first.</p>
</blockquote>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
