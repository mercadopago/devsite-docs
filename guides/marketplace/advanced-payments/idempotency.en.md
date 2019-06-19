---
sites_supported:
  - mla
  - mlb
  - mlm
  - mlc
  - mpe
---

# Idempotency

Sometimes connection problems, service drops, etc. may occur, and this could interrupt the communication when sending or receiving data to create an Advanced Payment.

To ensure its creation, you can retry sending the same data, but it is possible that the Advanced Payment has already been created and, due to the interruption, the correct response was not received, causing a new Advanced Payment to be generated when performing the retry.

To avoid duplication, you can send a unique key in the `X-Idempotency-Key` header that identifies the creation of a single Advanced Payment no matter how many times the same data is sent.

This way, when the retry is made, the same key can be sent to indicate that it is the same process. If the Advanced Payment has already been created, the information is returned without creating a new one.

```curl
curl -X POST \
     -H 'X-Idempotency-Key: faDF8323asd298' \
     -H 'accept: application/json' \
     -H 'content-type: application/json' \
     'https://api.mercadopago.com/v1/advanced_payments?access_token=MKT_ACCESS_TOKEN' \
     -d '{...}'
```
