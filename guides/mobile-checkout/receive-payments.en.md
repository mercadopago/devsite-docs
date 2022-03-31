# Receiving payments

This guide will help you integrate MercadoPago’s visual payment component in your application. This component addresses the selection of the payment method, the collection of data from the payment method of the user and the communication of the payment result.

## The integration consists of two steps:
- Integration in your server: in this step, you will get the payment information.
- Integration in your application: in this step, you will configure the visual component.

![Schema payment mobile Mercado Pago](/images/mobile-sdk-schema.png)

1. Create the payment preference from your server on MercadoPago’s servers.
2. Start the checkout in your application, using the preference id.
3. The Checkout will make the payment on MercadoPago’s servers.
4. Sign up to receive notifications to find out about new payments and status updates.