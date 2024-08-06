## What is Sponsor ID?

The "Sponsor ID" is the required identifier used in all transactions for merchants that are part of the partner's platform. Its application involves including the Mercado Pago account ID on behalf of the partner in the payment requests, using the `sponsor_id` field in the request body.

```curl
"sponsor_id": "(MP Account ID of the platform)"
```