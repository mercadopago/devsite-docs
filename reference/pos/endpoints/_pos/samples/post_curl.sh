curl -X POST \
  'https://api.mercadopago.com/pos?access_token=PROD_ACCESS_TOKEN' \
  -d '{
    "name":"Caja Principal", 
    "fixed_amount": true,
    "category": 621102,
    "store_id": "123456",
    "external_store_id": "BK021",
    "external_id": "4lph4num3r1c",
    "url": "https://www.miempresa.com/MP?locationId=6232&positionId=01" 
}'
