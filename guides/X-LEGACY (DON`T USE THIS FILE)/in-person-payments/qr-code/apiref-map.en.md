# APIs Map

The following actions are available for **QR Code**.

### Stores

|Action|Description|
|---|---|
|[Get store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_stores_id/get)|Check all the information of a physical store with the ID of the store you want.|
|[Create store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores/post)|Generates a physical store where customers can purchase products or services.|
|[Search stores](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores_search/get)|Find all the information of the stores generated through specific filters.|
|[Update store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores_id/put)|Renew the data of a physical shop. |
|[Delete store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores_id/delete)|Delete a physical shop whenever you need it with the ID of the store.|

### Points of Sale

|Action|Description|
|---|---|
|[Create POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos/post)|Generate a Point of Sale in a store.|
|[Search POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos/get)|Get the information about all of your stores.|
|[Get POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos_id/get)|Check all the information of a Point of Sale with the ID of the POS you want.|
|[Update POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos_id/put)|Renew the data of a Point of Sale.|
|[Delete POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos_id/delete)|Delete a Point of Sale whenever you need it with the ID of the POS.|

### Attended Model

#### Instore Orders

|Action|Description|
|---|---|
|[Create order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post)|Generate a payment order with all the payment information for your product or service and associate it with the Point of Sale you want.|
|[Delete order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/delete)|Delete an order whenever you need to with the ID of the user and the external ID.|


#### Instore Orders v2

|Action|Description|
|---|---|
|[Create order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put)|Generate a payment order with all the payment information for your product or service and associate it with the Point of Sale you want.|
|[Get order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/get)|Check the payment information for a product or service with the ID of the order you want.|
|[Delete order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_pos_external_pos_id_orders/delete)|Delete an order whenever you need to with the ID of the user and the external ID.|

### Merchant Orders

|Action|Description|
|---|---|
|[Search orders](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_search/get)|Find all the information of the orders generated through specific filters or a specific date range.|
|[Get order](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/merchant_orders/_merchant_orders_id/get)|Check the payment information for a product or service with the ID of the order you want.|

### Payments

|Action|Description|
|---|---|
|[Search payments](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_search/get)|Search and return payments made in the last twelve months from the search date.|
|[Get payment](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/payments/_payments_id/get)|See all the information of a payment through the payment ID.|

### Refunds

|Action|Description|
|---|---|
|[Create refund](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/chargebacks/_payments_id_refunds/post)|Create Partial/Full Refund for a specific payment.|




