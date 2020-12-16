curl -X PUT \
'https://api.mercadopago.com/instore/qr/seller/collectors/USER_ID/stores/EXTERNAL_STORE_ID/pos/EXTERNAL_POS_ID/orders' \
 -H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
 -d '{
    "external_reference": "order-id-1234",
    "title": "Compra",
    "description": "Compra en Mercado Pago",
    "notification_url": "www.yourserver.com",
    "expiration_date": "2023-08-22T16:34:56.559-04:00",
    "total_amount": 100.0,
    "items": [
        {
            "sku_number": "KS955RUR",
            "category": "COMIDA",
            "title": "Pasta",
            "description": "Compra en Mercado Pago",
            "unit_price": 20,
            "quantity": 5,
            "unit_measure": "unit",
            "total_amount": 100
        }
    ],
    "sponsor": {
        "id": 446566691
    }
}'