# Test the integration

Before going into production, it is very important to test the payments flow, checking whether the configurations you made at the preference level are effectively reflected in the checkout.

You should check if:

+ The information about the product or service to be paid is correct.
+ If you recognize the customer’s account to send the email.
+ It offers the payment methods you wish.
+ The payment experience is adequate and the payment result is reported.

## To test the integration, follow the steps below:

1. Configure the [Public Key]([FAKER][CREDENTIALS][URL]) in your application.
2. Create the preference on your server with the [Access Token]([FAKER][CREDENTIALS][URL]).
3. Complete the form, entering the digits of a test card. On the expiration date you must enter any date after the current date and a 3-or 4-digit security code, depending on the card.
4. To **test different payment results,** complete the information you want in the name of the cardholder. Check more information in [Availability of products and payment methods.](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/additional-content/localization/consult-payment-methods)