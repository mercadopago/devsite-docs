# Credentials

Credentials are unique passwords used to identify an integration in your account. They play a key role in securely capturing payments in online stores and other applications. You can find them in the **Application details > Credentials** within the [Developer dashboard](/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago/settings/account/credentials).

> WARNING
>
> Important
>
> If you don't have technical knowledge or you're not a developer, we recommend that you check your credentials directly in your Mercado Pago account. And if you're receiving assistance from someone to set up the integrations in your store, you can share your credentials with that person.

There are two different types of credentials:

* **Test credentials**: Use test credentials to test your integrations. They can be combined with test credit cards to simulate transactions and verify the correct functioning of the integrations. It is recommended to use these credentials before moving on to production credentials.
* **Production credentials**: Use production credentials to receive payments.

Both types of credentials consist of two pairs of keys that you should use according to the chosen product. Refer to the specific documentation of each product for details on the keys to be used.

| Type | Description |
| :--- | :--- |
| Public key | The application's public key is usually used on the frontend. It allows, for example, accessing information about payment methods and encrypting card data. |
| Access token | The application's private key that should always be used on the backend to generate payments. It is essential to keep this information secure on your servers. |

| Type | Description |
| :--- | :--- |
| Client ID | The client ID is a unique identifier that represents your integration. |
| Client secret | A private key used in some plugins to generate payments. It is extremely important to keep this information secure on your servers and not allow access to any system user or intruder. |

> NOTE
>
> Note
>
> If necessary, you can renew your credentials for security reasons or any other relevant reason. To renew them, simply click on **More options** > **Renew**.

## Sharing credentials

When receiving assistance in the integration or configuration of your payment channels, you can securely share your credentials. To do this, follow the steps below:

1. Access your Mercado Pago account.
2. Navigate to [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago/settings/account/credentials).
3. Within this page, select the option "Share my credentials".
4. Enter the email of the person you want to grant access to.
5. Make sure the email is associated with the Mercado Pago account of the respective person.

> WARNING
>
> Important
>
> It is important to remember that once the integration is completed, it is recommended to remove the credential sharing permissions to ensure the privacy and security of your data.