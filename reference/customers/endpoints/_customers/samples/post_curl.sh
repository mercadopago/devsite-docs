curl -X POST \
  'https://api.mercadopago.com/v1/customers?access_token=ACCESS_TOKEN_ENV' \ 
  -d '{
        "email": "bruno@gmail.com",
        "first_name": "Bruce",
        "last_name": "Wayne",
        "phone": {
            "area_code": "023",
            "number": "12345678"
        },
        "identification": {
            "type": "DNI",
            "number": "12345678"
        },
        "address": {
            "zip_code": "SG1 2AX",
            "street_name": "Old Knebworth Ln"
        },
        "description": "Lorem Ipsum"
    }'