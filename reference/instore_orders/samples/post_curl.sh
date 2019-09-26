curl -X POST \
'https://api.mercadopago.com/mpmobile/instore/qr/USER_ID/EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN' \
 -d '{
    "external_reference": "Factura-0001",
    "notification_url": "www.yourserver.com",
    "sponsor_id": 446566691,
    "items" :[{
    		"id" : "78123172",
  		    "title" : "Shampoo",
    		"currency_id" : "ARS",
    		"unit_price" : 120.00,
    		"quantity" : 1,
            "description": "Almendras",
            "picture_url": "https://bit.ly/2nxdWHa"
    		    }
              ]
    }'