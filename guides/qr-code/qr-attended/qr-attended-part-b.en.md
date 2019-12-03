---
sites_supported:
- mla
- mpe
- mco
- mlu
- mlm
- mlc
- mlb
---

#  How to integrate QR attended model

To charge with a QR attended model, you’ll have to create and order and then associate it with a Point of Sale.

## Create an order

```curl
curl -X POST 
https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN -d
{
    "external_reference": "Bill-0001",
    "notification_url": "www.yourserver.com",
    "items" :[{
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
    		   "unit_price" : 120.00,
    	     "quantity" : 1,
           "description": "Mercado Pago Item",
           "picture_url": "https://bit.ly/2lCRcEN"
    		    },
            {
    		   "title" : [FAKER][COMMERCE][PRODUCT_NAME],
    		   "currency_id" : [FAKER][CURRENCY][ACRONYM],
    		   "unit_price" : 100.00,
    		   "quantity" : 2
    		    }],
    "sponsor_id": 446566691
}
```

Obtain more information in our [API Reference](https://www.mercadopago.com.ar/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post/).

> NOTE
> 
> Note
> 
> Remember that if you haven’t previously provided your business name or logo in your [Mercado Pago account](https://www.mercadopago.com.ar/settings/account), the order title and image showcased to your client in the app will be taken from the first item uploaded.

## Order validity

By default, QR orders expires 10 minutes after being created or automatically if it’s closed. 

If you require a different expiration time, you can send the header `X-Ttl-Store-Preference` with the time you need expressed in seconds. I.e., if you want 5 minutes as the available time, you’ll have to send the header `X-Ttl-Store-Preference`: 300.



## Eliminate an order

To delete a QR associated order before it’s closed or expires, you can use this following method:

```curl
curl -X DELETE https://api.mercadopago.com/mpmobile/instore/qr/$USER_ID/$EXTERNAL_ID?access_token=PROD_ACCESS_TOKEN  -d 
```
Answer will be `HTTP 204 No Content`.

### Next steps

<div>
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/final-steps/advanced-integration/" style="text-decoration:none;color:inherit">       
<blockquote class="next-step-card next-step-card-left">
<p class="card-note-title">Advanced Integration<span class="card-status-tag card-status-tag-required">REQUIRED</span></p>
<p>Learn the options to take your integration to the next level.</p>
</blockquote>
</a>    
<a href="https://www.mercadopago.com.ar/developers/en/guides/qr-code/final-steps/integration-test/" style="text-decoration:none;color:inherit">
<blockquote class="next-step-card next-step-card-right">
<p class="card-note-title">Test your integration<span class="card-status-tag card-status-tag-recommended">RECOMMENDED</span></p>
<p>Try the most frequent use cases to validate your integration.</p>
</blockquote>
</a>
</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
