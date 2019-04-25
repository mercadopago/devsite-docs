# Obtaining Permissions and Data from the Sellers

The Marketplace that you wish to integrate, must request permits from its Sellers to be able to operate and make payments on their behalf. For this, you must follow the steps of [Mercado Pago Connect](https://www.mercadopago.com.br/developers/en/guides/marketplace/api/create-marketplace).

By following these steps, the Marketplace can obtain the `user_id` that should be used as `collector_id` in each `disbursement` that you want to create in the Advanced Payment. It is important to keep the `user_id` of the Seller in order to identify the owner of the Mercado Pago account in case it is needed.
