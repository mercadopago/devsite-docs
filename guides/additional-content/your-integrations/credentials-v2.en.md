# Credentials

Credentials are **exclusive passwords** used to identify an integration in your account. They are necessary to securely capture payments on online stores and other platforms.

Each application will have **two pairs of production credentials** and, when applicable to the product, **a pair of test credentials**.

## Obtaining Credentials

To obtain the credentials, you must first **create an application** within Mercado Pago. If you have not created any yet, you can learn how to do it in the [Developer Panel documentation](/developers/en/docs/your-integrations/dashboard#bookmark_create_a_new_application).

Next, learn how to obtain your credentials and in what situations you should use them.

### Production Credentials

**Production credentials** are a set of keys that allow you to receive real payments on online stores and other applications.

You can obtain your production credentials in two ways:

1. By accessing [**Your integrations > "Your application" > Production > Production credentials**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)
------------

2. Through your Mercado Pago account, by accessing **Your business > Settings > Management and administration > Credentials**.

----[mlb]----
![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)
------------

When accessing your production credentials, you will be able to see the following pairs of credentials:

#### Public Key and Access Token

| Type | Description |
| :--- | :--- |
| Public key | The application's public key is usually used on the frontend. It allows, for example, accessing information about payment methods and encrypting card data. |
| Access token | The application's private key that should always be used on the backend to generate payments. It is essential to keep this information secure on your servers. |

The **Public Key** and the **Access Token** are credentials that will be used, not necessarily together, in integrations made with Mercado Pago's payment solutions (Checkout Pro, Checkout Bricks,----[mlb]---- Checkout Transparente------------ ----[mla, mlu, mlc, mlm, mco, mpe]----Checkout API------------ ----[mla, mlb, mlc, mlu]----, Subscriptions and QR Code------------ ----[mco, mlm, mpe]---- and Subscriptions------------) and in integrations of the Mercado Pago plugin with e-commerce platforms such as Shopify, WooCommerce, and ----[mla, mlu, mlc, mlm, mco, mpe]----Tiendanube------------ ----[mlb]----Nuvemshop------------.

In some payment solutions, the Public Key and Access Token will also be used to test the integration. However, in these situations, the credentials of a [test account](/developers/en/docs/your-integrations/test/accounts) that has been created will be used.

To obtain more information about which credentials will be used in your integration, [consult the corresponding documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs) of the solution you are integrating.

#### Client ID and Client Secret

| Type | Description |
| :--- | :--- |
| Client ID | The client ID is a unique identifier that represents your integration. |
| Client secret | A private key used in some plugins to generate payments. It is extremely important to keep this information secure on your servers and not allow access to any system user or intruder. |

The **Client ID** and **Client Secret** are credentials used in some older integrations of the Mercado Pago plugin with e-commerce platforms, primarily in obtaining the Access Token using the **Client Credentials** grant type flow. This flow is used when the credentials are going to be used to access a resource on behalf of oneself, meaning it is used to obtain an Access Token without user interaction.

Access the [OAuth documentation](/developers/en/docs/security/oauth/introduction) for more information.

> NOTE
>
> Note
>
> If for security reasons or any other relevant reason you need to renew your credentials, simply click on **More options** (three dots at the end of the card) **>** **Renew**. Keep in mind that your integration may be affected by the change.

### Test Credentials

Test credentials are a set of keys that are **not available in all applications**, only in the products where these keys will be used to test the respective integration.

These credentials can be combined with test credit cards to simulate transactions and verify the proper functioning of the integrations.

You can obtain your test credentials by accessing [Your integrations > "Your application" > Test Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-test-pt.gif)
------------

----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-test-es.gif)
------------

> WARNING
>
> Important
>
> If for security reasons you do not wish to continue sharing your credentials, you can cancel it.