curl -X POST \
  'https://api.mercadopago.com/users/{user_id}/stores' \
  -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
  -d '{  
   "name":"Sucursal Instore",
   "business_hours":{  
      "monday":[  
         {  
            "open":"08:00",
            "close":"12:00"
         },
         {  
            "open":"14:00",
            "close":"18:00"
         }
      ],
      "tuesday":[  
         {  
            "open":"09:00",
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
   "external_id":"1234"
}'
