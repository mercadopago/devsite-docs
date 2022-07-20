# Possible erros

Below you will find lists of errors that may occur during brick integration. Whether they are related to **sending variables** or **communication with external services** (Mercado Pago APIs).

## Variables passed by the integrator

During the Brick integration process, it is possible that **when the Brick is instantiated**, different errors related to sending variables may be shown to the integrator. These errors will be shown through a log in the browser console (the buyer does not receive any message).

| Error  | Message  | Cause code  |
| --- | --- | --- |
| Empty configuration object  | [Initialization error] Settings object is empty, please pass required properties  | settings_empty  |
| Absence of the property amount (total amount of the purchase)  | [Initialization error] Amount property is required  | missing_amount_property  |
| Absence of the callbacks of onReady and onError  | [Initialization error] Callbacks onReady and onError are required  | missing_required_callbacks  |
| Absence of an ID of an HTML element that serves as the container of the brick  | [Initialization error] You must provide an HTML element ID as a container to allow component rendering  | missing_container_id  |
| Absence of the property locale (preferred language)  | [Initialization error] Locale property is required  | missing_locale_property  |
| Generic error occurred during brick initialization, usually some validation that failed due to a value sent by the integrator  | [Initialization error] Brick incorrectly initialized: {error}  | incorrect_initialization  |

## Communication with external services (Mercado Pago APIs)

| Error | Message for the user | Message for the integrator | Critical? | Cause code |
| --- | --- | --- | --- | --- |
| Inability to generate Secure Fields within the Card Payment brick form  | An error occurred  | The integration with Secure Fields failed  | Yes  | fields_setup_failed  |
| It wasn’t possible to get the payment method information according to the integrator's public_key  | An error occurred. Please try again later.  | An error occurred while trying to search for payment methods  | No  | get_payment_methods_failed  |
| It wasn’t possible to create the token that represents the card information  | An error occurred and the payment could not be processed. Please try again later.  | Failed to create card token  | No  | card_token_creation_failed  |
| Error when searching for types of identification documents according to the country defined in the MercadoPago.js SDK  | An error occurred. Please try again later.  | Failed to get identification types  | No  | get_identification_types_failed  |
| Failed to get bin based card information  | An error occurred. Please try again later.  | Failed to get payment methods using card bin  | No  | get_card_bin_payment_methods_failed  |
| Error searching card issuing banks  | An error occurred. Please try again later.  | Failed to get card issuer(s)  | No  | get_card_issuers_failed  |
| Error when searching the amount and the values of the payment installments according to the _amount_ sent by the integrator  | An error occurred. Please try again later.  | Failed to get payment installments  | No  | get_payment_installments_failed  |
| Incomplete payment fields for some reason (fees, card issuer, _payment_method_id_)  | An error occurred. Please try again later.  | SOne of the following messages will be returned according to the type of error: * The payment method id is missing * The payment installments are missing * The card issuer is missing  |  No  | missing_payment_information  |

> PREV_STEP_CARD_EN
>
> Select language
>
> You can select the Card Payment Brick's language when required. Check how.
>
> [Select language](/developers/en/docs/checkout-bricks/additional-customization/select-language)

> NEXT_STEP_CARD_EN
>
> GitHub project
>
> Get access to functional project and technical documentation links.
>
> [GitHub project](/developers/en/docs/checkout-bricks/additional-content/github-project)