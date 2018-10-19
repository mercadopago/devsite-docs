# Migration from version 0 to version 1 of the Mercado Pago API

At Mercado Pago we always try to optimize our platform offering the highest efficiency and security in payment processing.

We are currently working on migrating our API version 0 to version 1 in order to maintain the highest quality standards.

Consequently, the Mercado Pago will require the use of the new version of the API to be used as of December 10, 2018.

After this deadline, version 0 will be disabled and any attempt to connect using it will fail.

### Points to consider

* The change will impact **from December 10, 2018**
* If you use only the payment buttons from mercado Pago, this change will not affect you.
* If you only use Mercado Shops, this change will not affect you.
* If you have your **own e-commerce, consult your IT staff**.
* If you **operate with some e-commerce platform**, such as: Magento, Shopify or others **consult your technical support**.
* If you use the payment search endpoint, you must consume the new resource and add a new parameter to obtain the same result. Please see the examples section below.

## Migrated resources

The table below shows a list of migrated resources.

| Use                     | Method | URI of the deprecated resource         | Resource URI equivalent          | Reference                                                       |
|-------------------------|--------|----------------------------------------|----------------------------------|-----------------------------------------------------------------|
| Refunds                 | `POST` | /collections/$payment_id/refunds       | /v1/payments/$payment_id/refunds |-                                                                |
| Refunds                 | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/put/)-                                                                |
| Payment update          | `PUT`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/put/)    |
| Payment update          | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/put/)    |
| Payments                | `GET`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get)    |
| Payments                | `GET`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get)    |
| Payment notifications   | `GET`  | /collections/notifications/$payment_id | /v1/payments/$payment_id/        |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_id/get)    |
| Payments search         | `GET`  | /payments/search                       | /v1/payments/search              |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_search/get)|
| Payments search         | `GET`  | /collections/search                    | /v1/payments/search              |[access](https://www.mercadopago.com.ar/developers/en/reference/payments/_payments_search/get)|


### Examples

#### Payments search

To search of payments using the endpoint /v1/payments/search should take into account that the result of this search will return the payments as payer and collector of the invoker.

To maintain the semantic consistency with the results of the endpoint /payments/search you must add the parameter payer.id with your user ID.

```json
curl -X GET \
 "http://api.mercadopago.com/v1/payments/search?access_token=ENV_ACCESS_TOKEN&site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&payer.id=PAYER_ID" 
```

To maintain the semantic consistency with the results of the endpoint / collections / search you must add the collector.id parameter with your user ID.

```json
curl -X GET \
 "http://api.mercadopago.com/v1/payments/search?access_token=ENV_ACCESS_TOKEN&site_id=MLA&limit=50&range=date_created&end_date=NOW&begin_date=NOW-90DAYS&sort=date_created&criteria=desc&collector.id=COLLECTOR_ID" 
```

#### Total refund
```json
curl -X POST \
        -H "content-type: application/json" \
        "https://api.mercadopago.com/v1/payments/:id/refunds?access_token=ENV_ACCESS_TOKEN"
```

#### Partial refund

```curl
curl -X POST \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/payments/12861583/refunds?access_token=ENV_ACCESS_TOKEN' \
        -d '{
                "amount": 5.0
        }'
```

If you need to make adaptations, **it is important that you remember to make this change in a timely manner, otherwise it is very likely that your connections to the Mercado Pago will begin to fail.**

If you have any questions or need help to successfully complete this change, please contact us at the following [form](https://www.mercadopago.com.ar/developers/en/support).

Mercado Pago team.
