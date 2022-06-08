# Stores and POS

The **Stores** and **POS** are critical for receiving in-store payments with QR. They allow creating your store and assign its points of sale.

![POS and Stores](/images/mobile/stores_pos.es.png)

## Stores

*Physical store** where your customers can acquire products and services. You can have multiple stores in the same account.

### Benefits

The benefits of creating stores are:

- **Ensure traceability**. Each payment shall be associated with a specific store, and when obtaining your reconciliation reports, it will be valuable to identify transactions by store.
- **Map Visibility**. The created stores appear on the Mercado Pago or Mercado Libre App's map as they receive payments. Thus, customers can easily find them.
- **Improve Stores and POS organization**.

## Create a store

It is relevant to declare the store name, working hours, location, and an identification reference to create a new store.

Go to [Create store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/stores/_users_user_id_stores/post) in our API Reference to create a new store. There you will find all the necessary information.

> WARNING
>
> Important
>
> 1. You should know the `country_id` of your current location at [our countries API](https://api.mercadolibre.com/countries).
> 2. The `state_name` has to match the **states** of [the specific country](https://api.mercadolibre.com/countries/$country_id).
> 3. The `city_name` must match the **cities** of [the states](https://api.mercadolibre.com/states/$state_id).


# Point of Sale (POS)

It is a **point of sale** that exists in a branch or physical store. Each POS will be linked to a unique QR code.

### Create POS

Having your stores set, you can create your POS. Consider the following:

| Term | Description |
| --- | --- |
| `EXTERNAL_STORE_ID` | Links the POS to the store. It is a mandatory field and matches the `external_id` of the previously created store. |
| `EXTERNAL_ID` | Identifies each Point of Sale (POS). It is required and can not be modified nor repeated on the same Mercado Pago account. You may also find it as `EXTERNAL_POS_ID`. |


Go to [Create POS](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/pos/_pos/post) in our API Reference to create a POS. There you will find all the necessary information.

> NOTE
>
> Note
>
> After the Point of Sale creation, you will see the QR files in the `Response` section, with other relevant data.

---

### Next steps

> LEFT_BUTTON
>
> QR attended model
>
> Integrate QR attended model.
>
> [QR attended model](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/qr-attended-model/introduction)

> RIGHT_BUTTON_RECOMMENDED_EN
>
> QR dynamic model
>
> Integrate QR dynamic model.
>
> [QR dynamic model](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs/qr-code/qr-dynamic-model/introduction)