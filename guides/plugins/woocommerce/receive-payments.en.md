# Test and receive payments

## How to test the module

> WARNING
>
> Importante
>
> The payment statuses in woocommerce are not updated in test mode, once you are in productive mode you will be able to see them reflected.

The Mercado Pago module comes with the Sandbox environment active by default. Simulate payments in the store with this testing environment and verify that everything works well before you start receiving real payments from your customers.
 
This is where the test credentials that you have copied into the module come into play when [integrating Mercado Pago to your store](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/plugins/woocommerce/integration). You need them to be able to test the module.

When testing, verify that the payment flow works correctly and that the payment preferences are what you have set. Do you see that everything is going well? Disable Testing and go to Production mode to receive real payments.

> NOTE
>
> Note
>
> All our modules have an open source license. **Do you want to participate in its construction?** [Suggest improvements and editions](https://github.com/mercadopago/cart-woocommerce) on Github.

## Test Cards

----[mla]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
----[mlb]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------
----[mlc]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------
----[mco]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------
----[mlu]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------
----[mpe]----

| Card | Number | CVV | Expiration Date |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------


To **test different payment results,** complete the information you want in the name of the cardholder:

- APRO: Payment approved.
- CONT: Payment pending.
- OTHE: Rejected by general error.
- CALL: Rejected with validation to authorize.
- FUND: Rejected for insufficient amount.
- SECU: Rejected by invalid security code.
- EXPI: Rejected due to problem with expiration date.
- FORM: Rejected by error in the form.

## Go to production

To start charging you must [activate your credentials](https://www.mercadopago.com/mla/account/credentials/).

> Check out the [requirements to go to production](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/online-payments/checkout-api/goto-production) if you have any questions during the process.

Verify that the Production credentials of the module are those of the account that receives the money from the sales.

Activate Production mode only when you are ready to sell and have tested the module with simulated payments in Sandbox.

![Homologation Flow](/images/woocomerce/es_woo_homologacion.gif)

### Done! The Mercado Pago module is ready to receive online payments.
