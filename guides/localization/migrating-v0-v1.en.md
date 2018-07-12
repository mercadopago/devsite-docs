# Migration from Version V0 to V1 of the Mercado Pago API

At Mercado Pago we always try to optimize our platform offering the highest efficiency and security in payment processing.

We are currently working on migrating our API V0 to V1 in order to maintain the highest quality standards.
Consequently, the Mercado Pago will require the use of the new version of the API to be used as of July 30, 2018.

After this deadline, v0 will be disabled and any attempt to connect using it will fail.

### Points to consider

* The change will impact **from July 30, 2018**
* If you use only the payment buttons from mercado Pago, this change will not affect you.
* If you only use Mercado Shops, this change will not affect you.
* If you have your **own e-commerce, consult your IT staff**.
* If you **operate with some e-commerce platform**, such as: Magento, Shopify or others **consult your technical support**.

## Migrated resources

The table below shows a list of migrated resources.

| Use                     | Method | URI of the deprecated resource         | Resource URI equivalent          | Reference                                                       |
|-------------------------|--------|----------------------------------------|----------------------------------|-----------------------------------------------------------------|
| Refunds                 | `POST` | /collections/$payment_id/refunds       | /v1/payments/$payment_id/refunds |-                                                                |
| Refunds                 | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |-                                                                |
| Payment update          | `PUT`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[access](/reference/payments/endpoints/_payments_id/put.yaml)    |
| Payment update          | `PUT`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[access](/reference/payments/endpoints/_payments_id/put.yaml)    |
| Payments                | `GET`  | /payments/$payment_id                  | /v1/payments/$payment_id/        |[access](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Payments                | `GET`  | /collections/$payment_id               | /v1/payments/$payment_id/        |[access](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Payment notifications   | `GET`  | /collections/notifications/$payment_id | /v1/payments/$payment_id/        |[access](/reference/payments/endpoints/_payments_id/get.yaml)    |
| Payments search         | `GET`  | /payments/search                       | /v1/payments/search              |[access](/reference/payments/endpoints/_payments_search/get.yaml)|
| Payments search         | `GET`  | /collections/search                    | /v1/payments/search              |[access](/reference/payments/endpoints/_payments_search/get.yaml)|

### Examples

#### Total refund
'''json
curl -X POST \
        -H "content-type: application/json" \
        "https://api.mercadopago.com/v1/payments/:id/refunds?access_token=ENV_ACCESS_TOKEN"
'''

#### Partial refund

'''curl
curl -X POST \
        -H 'content-type: application/json' \
        'https://api.mercadopago.com/v1/payments/12861583/refunds?access_token=ENV_ACCESS_TOKEN' \
        -d '{
                "amount": 5.0
        }'
'''

If you need to make adaptations, **it is important that you remember to make this change in a timely manner, otherwise it is very likely that your connections to the Mercado Pago will begin to fail.**

If you have any questions or need help to successfully complete this change, please contact us at the following email: developers@mercadopago.com.br.

Mercado Pago team.
