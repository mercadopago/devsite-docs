# Credentials

Credentials are unique passwords that identify an integration in your account. They allow to capture payments in online stores and other applications securely. They can be found on the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) or in your Mercado Pago account by accessing [Your Business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

> WARNING 
> 
> Warning
> 
> If you are not a developer, we recommend you verify your credentials in your Mercado Pago account. And, if someone is helping you set up your store's integrations, you can share your credentials with them.

There are two different types of credentials:

* **Test credentials**. Test credentials check your integrations and can be used together with test users and test credit cards to simulate card receipts. We recommend you to use them before production credentials to ensure that integrations work properly.
* **Production credentials**. Production credentials receive payments. 

Both types of credentials are composed by two pairs of keys that you must use according to the chosen product (see each product's documentation for details on which keys should be used).

| Type | Description |
| :--- | :--- |
| Public key | Application's public key that will usually be used in the frontend. It allows you to know the means of payment and to encrypt card data. |
| Access token | Application's private key that will always be used in the backend to generate payments. It is very important that this data is protected in your servers and is not accessible to any system user or attacker. |

| Type | Description |
| :--- | :--- |
| Client ID | Unique ID that identifies your integration. |
| Client secret | Private key to be used in some plugins to generate payments. It is very important that this data is protected in your servers and is not accessible to any system user or attacker. |

> NOTE
> 
> Note
>
>You have the option to renovate your credentials for security reasons or others. To renew them, click on More options > Renew.

## Share credentials

Share your credentials securely with anyone who helps you integrate or configure your payment channels. In your Mercado Pago account, go to [Your business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), and click on “Share my credentials”. Then, enter the email of the person to whom you want to give access. Remember that the email must be associated with a Mercado Pago account. 

> WARNING 
> 
> Warning
>
> Once the integration is complete, delete the credential sharing permissions to ensure privacy and security.