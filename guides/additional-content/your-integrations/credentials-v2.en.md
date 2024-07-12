# Credentials

Credentials are **exclusive passwords** used to identify an integration in your account. They are necessary to securely capture payments on online stores and other platforms.

Each application will have **two pairs of production credentials** and, when applicable to the product, **a pair of test credentials**.

## Obtaining credentials 

To obtain the credentials, whether for production or testing, you must first **create an application** within Mercado Pago. If you have not created any yet, access the [Developer Panel](/developers/en/docs/your-integrations/dashboard#bookmark_create_a_new_application) documentation for more information.

Next, learn how to obtain your credentials and in which situations they should be used.

### Production credentials

**Production credentials** are a set of keys that allow you to receive real payments on online stores and other applications.

You can obtain your production credentials in two ways:

1. By accessing [**Your integrations > "Your application" > Production > Production credentials**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-mp-pt-v2.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-mp-es-v2.gif)

------------

2. Through your Mercado Pago account, by accessing [**Your business > Settings > Management and administration > Credentials**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

----[mlb]----
![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)

------------

When accessing your production credentials, the following credential pairs will be displayed: **Public Key and Access Token**, along with **Client ID and Client Secret**.

#### Public Key and Access Token

The **Public Key** and the **Access Token** are credentials that will be used, not necessarily together, in integrations made with Mercado Pago's payment solutions, including:

- Checkout Pro
- Checkout Bricks
- ----[mlb]---- Checkout Transparente----------------[mla, mlu, mlc, mlm, mco, mpe]---- Checkout API------------
- Assinaturas
----[mla, mlb, mlm]----
- Mercado Pago Point

------------
----[mla, mlb, mlc, mlu]----
- Código QR

------------

These credentials are also used in Mercado Pago plugin integrations with e-commerce platforms such as Shopify, WooCommerce, and ----[mla, mlu, mlc, mlm, mco, mpe]----Tiendanube----------------[mlb]----Nuvemshop------------.

> WARNING
>
> Important
>
> In some payment solutions, the Public Key and Access Token will also be used to test the integration. However, in these situations, the credentials of a [test account](/developers/en/docs/your-integrations/test/accounts) previously created.

| Type | Description |
| :--- | :--- |
| Public key | The application's public key is usually used on the frontend. It allows, for example, accessing information about payment methods and encrypting card data. |
| Access token | The application's private key that should always be used on the backend to generate payments. It is essential to keep this information secure on your servers. |

For more information on which credentials will be needed for your integration, [consult the specific documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs) of the solution being integrated.

#### Client ID and Client Secret

The **Client ID** and **Client Secret** are credentials used in some older integrations with e-commerce platforms and primarily in integrations that use [OAuth](/developers/en/docs/security/oauth/introduction) as a protocol for obtaining private information from Mercado Pago accounts. Specifically, they are used during the **Client Credentials** flow (grant type), which allows access to a resource on one's own behalf and obtaining an Access Token without user interaction.

| Type | Description |
| :--- | :--- |
| Client ID | The Client ID is a unique identifier that represents your integration. |
| Client secret | A private key used in some plugins to generate payments. It is extremely important to keep this information secure on your servers and not allow access to any system user or intruder. |

> NOTE
>
> Important
>
> If for security reasons or any other relevant reason you need to renew your credentials, simply click on **More options** (three dots at the end of the card) **>** **Renew**. Keep in mind that your integration may be affected by the change.

### Test credentials

Test credentials are a set of keys used to test the integration. They can be combined with test credit cards to simulate transactions and verify the correct operation of the integrations.

You can obtain your test credentials, **as long as they are available for your integration**, by accessing [Your integrations > "Your application" > Test credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

> WARNING
>
> Important
>
> These credentials **are not available for all Mercado Pago products**, so they will only be active in applications where you have selected a product that requires them.

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-test-panel-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-test-panel-es.gif)

------------

#### Test credentials not available

When creating an application, if you selected a Mercado Pago product that does not require test credentials, you will see the following screen:

----[mla, mlu, mlc, mlm, mco, mpe]----
![Blocked test account screen](/images/credentials/blocked-test-credentials-es-v2.png)

------------
----[mlb]----
![Blocked test account screen](/images/credentials/blocked-test-credentials-es-v3.png)

------------

If you are integrating a product that does not use test credentials, you will not be able to use them. Instead, you should use [test accounts](/developers/en/docs/your-integrations/test/accounts). 

> **Test accounts** do not have test credentials enabled. If you are using a test account, you will need to use its production credentials.

## Share credentials

When you receive assistance in integrating or setting up your payment channels, you can safely share your credentials with another Mercado Pago account. To do so, follow the steps below.

> WARNING
>
> Important
>
> If for security reasons you do not wish to continue sharing your credentials, you can cancel it.

1. Access your Mercado Pago account.
2. Go to [Your business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. On that page, select the option **Share my credentials**.
4. Enter the email of the person you want to grant access to.
5. Make sure the email is associated with the person's Mercado Pago account.