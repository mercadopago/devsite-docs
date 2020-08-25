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


# Test your integration

## How to test your integration?

Test users allow you to try the integration of your system with Mercado Pago without using real money.

To carry out the tests, you need to have at least two users: a buyer and a seller.

> If you did not generate your users at this point, you can do so in the [previous requirements](https://www.mercadopago.com.ar/developers/en/guides/qr-code/pre-requisites/).


Test user types | Description
----------------- | -------------------------------------
Seller | **Test account that you use to obtain credentials to set up in your system and interact with Mercado Pago APIs**. You can also access [Mercado Pago account](https://www.mercadopago.com.ar/activities) and check approved transactions. 
Buyer | **Test account you use to test the buying process**. You must access Mercado Pago app with this user data. In case of having money in the account or saved cards, they wil be available as payment methods.

## Test cards

### Payer details

Payment simulation | Name of the holder | Identification document
----------------- | -------------------- | --------------
Payment approved | APRO | 123456789
Payment rejected | OTHE | 123456789

### Card data

Card | Number | CVV | Expiration date
------------ | ------------------------ | ------------ | --------------
MasterCard | 5031 7557 3453 0604 | 123 | 11/25
Visa | 4170 0688 1010 8020 | 123 | 11/25
American Express | 3711 8030 3257 522 | 1234 | 11/25

Here you can find more [test cards](https://www.mercadopago.com.ar/developers/en/guides/localization/local-cards/).

## Test payment process

### 1. With your seller user, assign an order to a Point of Sale. 

To test attended model, generate an order with the test user [credentials]([FAKER][CREDENTIALS][URL]) you want as seller and send an order to the QR code previously created.

### 2. Make a payment with your buyer user.

- A. Log in the Mercado Pago app with your buyer test user. 
- B. Click on Pay with QR and scan the QR code from the Point of Sale. 
- C. Choose a saved card or complete the data with a new one and pay. 

### 3. Receive order notifications

Lastly, make sure you’ve received an status notification in your system. And you’re done!

## Events to validate

Event | Expected output | Comments
------------- | ----------- | ----------
**QR scan before creating the order**. A client scans a QR code before to making an order.| App shows a waiting screen. | Verify `fixed_amount` = **true** on the Point of Sale. 
**QR scanning**. User scans QR code after order is created.| App shows a checkout screen. | Verify amount displayed on checkout.
**Approved payment**. User makes a successful payment. | Point of Sale system receives information about an approved payment.| Verify [notifications](https://www.mercadopago.com.ar/developers/en/guides/notifications/ipn/) were received. |
**Rejected payment**. User makes a rejected payment.| Point of Sale system receives information about the rejected payment and keeps waiting for the order to be pay.| `merchant_order` status must be **opened**.
**Second payment attempt**. User first performs a rejected payments and then execute an approved payment. | Point of sale system receives information about the rejected payment and an approved payment later.| Don’t remove the order after a rejected payment.|
**Refunds**. These are performed from the Point of Sale.| Refunds impact in buyer account.| See [refunds](https://www.mercadopago.com.ar/developers/en/guides/manage-account/cancellations-and-refunds/#bookmark_refunds).
**Cancel order**. Users change their mind and decides to pay in cash. | Order is removed and, therefore, scanning the QR code only shows a waiting screen.  | Remove order from the Point of Sale.

## Production mode

When your app is **ready and working in test mode**, and you want to start processing real payments, you must [activate your credentials]([FAKER][CREDENTIALS][URL]). 

Afterwards, Mercado Pago will be able to audit your website, app or Point of Sale software, checking if all rules are being followed. If necessary, an advisor will contact you to discuss how to fix your integration. 

> WARNING
> 
> IMPORTANT
> 
> If you don’t activate your credentials, you won’t be able to do any type of returns.

## Why is this process needed?

By following these steps, we can guarantee security for your clients’ data and achieve the best buying experience, helping maximizing conversion. 
Breaching these norms can cause being unable to process payments and even legal actions, as stated in our [Terms & Conditions](https://www.mercadopago.com.ar/ayuda/terminos-y-condiciones_299).
