# Stores

A **physical shop** in which your clients can get products and services. You can have multiple stores on one account.

## What are the benefits of creating stores?

- **Tracking**. Each pay will be linked with a store. This will be useful to obtain reconciliation reports and identify transactions per store.
- **Map Visibility**. Stores will appear on Mercado Pago and Mercado Libre maps, so user will be able to find you.
- **Better organization for your POS**.


## How to create a store?

To create a store, it is important to declare name, working hours, location and an identifier. 

Run the following code to generate a store: 

[[[
 ```curl
curl -X POST \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
https://api.mercadopago.com/users/$USER_ID/stores \
-d \
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

Learn more with our [API reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores/post).

> WARNING
>
> Important
>
> 1. You must know your `country_id` of the country where you are in [our API of countries](https://api.mercadolibre.com/countries).
> 2. The `state_name` must match the **states** according to the country in question (https://api.mercadolibre.com/countries/$country_id).
> 3. The `city_name` must match the **cities** according to their states. (https://api.mercadolibre.com/states/$state_id).