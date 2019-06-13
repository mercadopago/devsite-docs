---
sites_supported:
    - mla
    - mlb
    - mlm
    - mlc
    - mpe
---

# Canceling an Advanced Payment

An Advanced Payment that has been left in `pending` state may be canceled. These cases can be given for payments with offline methods or any payment by credit card that has entered the manual review flow. 

#### Request
```curl
curl -X PUT \
    -H 'Accept":"application/json' \
    -H 'Content-Type: application/json' \
    'https://api.mercadopago.com/v1/advanced_payments/ID?access_token=MKT_ACCESS_TOKEN' \
    -d '{...}'
```

#### Body
```json
{
  "status": "cancelled"
}
```  
