# Make a test purchase

In this documentation, we will show you step-by-step how to perform a test purchase in your Checkout Pro integration.

## Create the payment

1. Log in to the Mercado Pago website using the username and password of the **seller test account** you created earlier.
2. Create a new application for a Checkout Pro integration. Obtain the **production credentials** (`access_token`) **of the seller test user there**.
3. In your integration, use the `access_token` you just obtained in the Preference of your integration. Remember, it should be the `access_token` of the **production credentials of the seller test account**.
4. Initialize your checkout using the `id` value of the preference you created while integrating Checkout Pro. You can find more information about the response parameters by accessing the API documentation for [Create preference](/developers/es/reference/preferences/_checkout_preferences/post).

> WARNING
>
> Important
>
> If your integration uses a [Direct opening scheme](/developers/en/docs/checkout-pro/checkout-customization/user-interface/opening-schema#bookmark_direct_opening_scheme), you must initialize your checkout using the `init_point` value found in the response. You can find more information about the response parameters by accessing the API documentation for [Create preference](/developers/en/reference/preferences/_checkout_preferences/post).

## Make the payment

1. Log in to the Mercado Pago website using the username and password of the **buyer test account**. We recommend doing this in an "Incognito mode" browser.
2. Go to the website where you integrated Checkout Pro and click on the Mercado Pago buy button that you previously rendered.
3. Finally, follow the instructions of Checkout Pro and make a test purchase using the **buyer test account**. For this, provide data from [Test Cards](/developers/en/docs/checkout-pro/integration-test/prerequisites/test-cards) ----[mla, mlb, mpe, mco, mlu, mlc]----and a nine-digit identification document------------. Keep in mind that you can simulate different purchase results using different test cards.