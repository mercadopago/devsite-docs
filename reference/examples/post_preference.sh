curl -X POST \
  'https://api.mercadopago.com/checkout/preferences?access_token=ENV_ACCESS_TOKEN' \ 
  -H 'accept: application/json' \
  -H 'content-type: application/json' \
  -d '{  
        "items": [  
            {  
                "id":"0000-01",
                "title":"Title of what are you paying for",
                "quantity":1,
                "price":100
            }
        ],
        "payer": {
            "email":"test_mail@gmail.com"
        }
      }'