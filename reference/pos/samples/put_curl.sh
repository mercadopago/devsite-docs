curl -X PUT \
   'https://api.mercadopago.com/pos/POS_ID?access_token=PROD_ACCESS_TOKEN'
   -d {
    "name":"Caja Secundaria", 
    "fixed_amount": false,
    "category": 473000,
    "store_id": "123456",
    "external_store_id": "BK022",
    "url": "https://www.myserver.com?pos=001"
}


