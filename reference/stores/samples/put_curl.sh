curl -X PUT \
   'https://api.mercadopago.com/users/USER_ID/stores/STORE_ID?access_token=PROD_ACCESS_TOKEN'
   -d {
  "name": "Cambio Sucursal",
  "business_hours": {
    "monday": [
      {
        "open": "08:00",
        "close": "13:00"
      },
      {
        "open": "15:00",
        "close": "18:00"
      }
    ],
    "tuesday": [
      {
        "open": "08:00",
        "close": "18:00"
      }
    ],
    "wednesday": [
      {
        "open": "07:00",
        "close": "10:00"
      }
    ]
  },
   "location":{  
      "street_number":"13298",
      "street_name":"H. Yrigoyen",
      "city_name":"Almirante Brown",
      "state_name":"Buenos Aires",
      "latitude": -32.8897322,
      "longitude": -68.8443275
      "reference":"3er Piso"
  }
}
