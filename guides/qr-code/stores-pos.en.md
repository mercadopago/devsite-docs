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

> ![Cajas y Sucursales](/images/stores_pos.en.png) 


## Stores

A **physical shop** in which your clients can get products and services. You can have multiple stores on one account.

### What are the benefits of creating stores?

- **Tracking**. Each pay will be linked with a store. This will be useful to obtain reconciliation reports and identify transactions per store.
- **Map Visibility**. Stores will appear on Mercado Pago and Mercado Libre maps, so user will be able to find you.
- **Better organization for your POS**.


### How to create a store?

To create a store, is importante to declare name, working hours, location and an identifier. 

Run the next code to generate a store: 

[[[
 ```curl
curl -X POST https://api.mercadopago.com/users/$USER_ID/stores?access_token=PROD_ACCESS_TOKEN -d
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

> WARNING
>
> IMPORTANT
>
> 1. You must know your `country_id` of the country where you are in [our API of countries](https://api.mercadolibre.com/countries).
> 2. The `state_name` must match the **states** according to the country in question (https://api.mercadolibre.com/countries/$country_id).
> 3. The `city_name` must match the **cities** according to their states. (https://api.mercadolibre.com/states/$state_id).


## Point of Sale (POS)

It is a **point of sale** that exists in a branch or physical store. Each POS will be linked with a unique QR code.

### How to create a Point of Sale?

Once you created your stores, the next step is to generate your POS. Some considerations:

| Term       |  Description  | 
| ------------- | -------------------------------------------- |
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

Once Point of Sale is created, you’ll be able to see the QR files in the _Response_ section, along with other relevant data. 


---
### Next steps

> LEFT_BUTTON_RECOMMENDED_EN
>
> Integrate QR attended model
>
> Learn step by step how to integrate this model.
>
> [Integrate QR attended model](https://www.mercadopago.com.ar/developers/en/guides/qr-code/qr-attended-part-b/)
