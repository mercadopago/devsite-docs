# Create payer token

After the agreement creation and the buyer's approval, you must create the **payer token**. The payer token is responsible for storing the buyer's data and ensuring the security of the transaction; it is also a mandatory attribute for creating transactions throughout the validity period of the `agreement` previously created.

Check out the diagram below that illustrates how the payer token creation flow works.

![Create payer token](/images/wallet-connect/create-payer-token.en.png)


To create a **payer token**, send a POST with all necessary attributes to the endpoint [/v2/wallet_connect/agreements/{agreementId}/payer_token](/developers/en/reference/wallet_connect/_wallet_connect_agreements_agreement_id_payer_token/post) and execute the request.

With the creation of the payer token, the Wallet Connect integration will finish successfully. Therefore, we recommend you check the [Webhooks](/docs/wallet-connect/additional-content/notifications/webhooks) documentation to set notifications up and receive real-time information anytime an event occurs.

> PREV_STEP_CARD_EN
>
> Get approval
>
> Learn how to get payer approval to use payment details.
>
> [Get approval](/developers/en/docs/wallet-connect/integration-configuration/get-approval)

> NEXT_STEP_CARD_EN
>
> Notifications
>
> Configure notifications to receive real-time information about events that happen.
>
> [Notifications](/developers/en/docs/wallet-connect/additional-content/notifications/introduction)