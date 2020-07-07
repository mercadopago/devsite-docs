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

# Stores and POS

## Introduction

**Stores** and **Points of Sale** are the concepts you’ll use on Mercado Pago to manage your business and keep track of your accounts. You can have several POS in one Store.

| Term       |  Description                                                 |
| ------------- | ------------------------------------------------------------ |
| Store      | A **physical shop** in which your clients can get products and services. You can have multiple stores on one account. |
| POS           | A **place to execute a transaction** on a store or physical shop. Each POS will be linked with a unique QR code.  |

> ![Cajas y Sucursales](/images/stores_pos.en.png) 



## Stores

### What are the benefits of creating stores?

- **Tracking**. Each pay will be linked with a store. This will be useful to obtain reconciliation reports and identify transactions per store.
- **Map Visibility**. Stores will appear on Mercado Pago and Mercado Libre maps, so user will be able to find you.
- **Better organization for your POS**.




### How to create a store

To create a store, is importante to declare name, working hours, location and an identifier. 

Run the next code to generate a store: 

[[[
 ```curl
curl -X POST https://api.mercadopago.com/users/$COLLECTOR_ID/stores?access_token=PROD_ACCESS_TOKEN -d
{  
   "name":"Store 1",
   "business_hours":{  
      "monday":[  
         {  
            "open":"08:00",
            "close":"13:00"
         },
         {  
            "open":"15:00",
            "close":"18:00"
         }
      ],
      "tuesday":[  
         {  
            "open":"08:00",
            "close":"18:00"
         }
      ]   
   },
   "location":{  
      "street_number":"3039",
      "street_name":"Caseros",
      "city_name":"Belgrano",
      "state_name":"Capital Federal",
      "latitude":-32.8897322,
      "longitude":-68.8443275,
      "reference":"3er Piso"
   },
   "external_id":"STORE001"
}
```
]]]

Learn more with our [API reference](https://www.mercadopago.com.ar/developers/en/reference/stores/_users_user_id_stores/post/).



## Point of Sale (POS)

Once you created your stores, the next step is to generate your POS. Some considerations:


| Term       |  Description                                                 |
| ------------- | ------------------------------------------------------------ |
| `EXTERNAL_STORE_ID`     | Links a Point of Sale (POS) to a store. This is a required field and same as the Store *external_id* previously created. |
| `EXTERNAL_ID`           | Identifies each Point of Sale (POS). This is required and can’t be modified nor repeated on the same Mercado Pago account. |


[[[
 ```curl
curl -X POST https://api.mercadopago.com/pos?access_token=PROD_ACCESS_TOKEN -d     
{
  "name":"Main Pos", 
  "fixed_amount": true,
  "category": 621102,
  "external_store_id": "STORE001",
  "external_id": "POS0001"
}
```
]]]

Learn more with our [API Reference](https://www.mercadopago.com.ar/developers/en/reference/pos/_pos/post/).

Once Point of Sale is created, you’ll be able to see the QR files in the “Response” section, along with other relevant data. 



### Next steps

<div>
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/qr-attended/qr-attended-part-a/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Integrate QR attended model<span class="card-status-tag card-status-tag-recommended">RECOMMENDED</span></p>
<p>Check this if your selling process needs an operator.</p>
</blockquote>
</a>    
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/qr-unattended/qr-unattended-part-a/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Integrate QR unattended model<span class="card-status-tag card-status-tag-recommended">RECOMMENDED</span></p>
<p>If your selling process only needs a client action, this is the model for you.</p>
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

> LEFT_BUTTON_RECOMMENDED_EN
>
> Integrate QR attended model
>
> Check this if your selling process needs an operator.
>
> [Integrate QR attended model](https://www.mercadopago.com.ar/developers/en/guides/qr-code/qr-attended/qr-attended-part-a/)
