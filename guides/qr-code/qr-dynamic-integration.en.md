# How to integrate the QR Dynamic Model

For collecting with a Dynamic Model QR code, you must generate an order and, depending on the obtained response, create a code using an external service.

## Model flow

Find below how this model works:

1. Create an order with all the necessary payment information.
2. The response will include a data string under the attribute `qr_data`.
3. Generate a QR code with the received attribute.
4. Finally, provide the QR code to the customer for payment, as you prefer.

There are two ways to follow these steps: **creating an order**, or **creating an order associated to a POS**. We'll see them next.

## Create an order

First of all, generate the order publication. Once the data is sent to Mercado Pago, a string with the standard [EMVCo](https://www.emvco.com/emv-technologies/qrcodes) will be available.

To create an order, access our [API Reference](/developers/en/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/post) and execute the curl you will find there. The response will include the data required to create the QR code.

----[mco]----
> If you must pay taxes for the products in your order, visit the [Considerations IVA Colombia section](/developers/en/guides/additional-content/localization/iva-colombia).
------------

> NOTE
>
> Note
>
> The model does not include an option to delete the order. Therefore, we recommend setting an expiration date using the `expiration_date` attribute.

**Response**

```json
{
  "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```

The response will be a string with the EMVCo standard. Use the `qr_data` to make the QR code available with a generator or by your application.

----[mlb]----
If you have a **Pix key configured** in your Mercado Pago account, the string structure will contain Pix-related data.
For example:

```json
{
  "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------

## Crear an order associated with a POS

In addition to generating the QR code, you also have the option to create and assign the same order to the point of sale’s fixed QR code.

Execute the API call detailed [in this section of our API Reference](/developers/en/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/put) to generate the order and assign it to the POS. The response will contain the data required to create the QR code, associated with the declared QR.

## Receive orders notifications

An IPN (Instant Payment Notification) notification is an **automatic message that notifies the creation of new orders and their status updates**. I.e.: If an order is approved, rejected, or pending.

Go to [IPN notifications](/developers/en/docs/qr-code/additional-content/your-integrations/notifications/ipn) to learn how to implement them, more specifically the `merchant_order` notifications, which are the ones associated with orders. You will be able to identify each one of theses orders by the `external_reference` parameter.

> NOTE
>
> Note
>
> You can check our [tutorial video on how to integrate a dynamic model QR Code](/developers/en/docs/qr-code/resources/tutorial-videos/qr-videos-dynamic).