# Credentials

Credentials are **exclusive access keys** used to identify an integration in your account. They are necessary to securely capture payments on online stores and other platforms.

Each application will have **two pairs of production credentials** and, when applicable to the product, **a pair of test credentials**.

## Obtaining credentials 

To obtain the credentials, whether for production or testing, you must first **create an application** within Mercado Pago. If you have not created any yet, access the [Developer panel](/developers/en/docs/your-integrations/dashboard#bookmark_create_a_new_application) documentation for more information.

Next, learn how to obtain your credentials and in which situations they should be used.

### Production credentials

**Production credentials** are a set of keys that allow you to receive real payments on stores and other applications.

You can obtain your production credentials in two ways:

1. By accessing [**Your integrations > "Your application" > Production > Production credentials**](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).

----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)

------------

2. Through your Mercado Pago account, by accessing [**Your business > Settings > Management and administration > Credentials**](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) through the [Developer dashboard](/developers/en/docs/checkout-bricks/additional-content/your-integrations/dashboard).

----[mlb]----
![Como acessar as credenciais através do Mercado Pago](/images/credentials/credentials-prod-mp-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Mercado Pago](/images/credentials/credentials-prod-mp-es.gif)

------------

When accessing your production credentials, the following credential pairs will be displayed: **Public Key and Access Token**, along with **Client ID and Client Secret**.

### Public Key and Access Token

The **Public Key** and the **Access Token** are credentials that will be used, not necessarily together, in integrations made with Mercado Pago's payment solutions, including:

- [Checkout Pro](/developers/en/docs/checkout-pro/landing)
- [Checkout Bricks](/developers/en/docs/checkout-bricks/landing)
- ----[mlb]---- [Checkout Transparente](/developers/en/docs/checkout-api/landing)----------------[mla, mlu, mlc, mlm, mco, mpe]---- [Checkout API](/developers/en/docs/checkout-api/landing)------------
- [Assinaturas](/developers/en/docs/subscriptions/landing)
----[mla, mlb, mlm]----
- [Mercado Pago Point](/developers/en/docs/mp-point/landing)
------------
----[mla, mlb, mlc, mlu]----
- [QR Code](/developers/en/docs/qr-code/landing)
------------

These credentials are also used in Mercado Pago plugin integrations with [e-commerce platforms](/developers/en/docs#platform-list).
> WARNING
>
> Important
>
> In some payment solutions, the Public Key and Access Token will also be used to test the integration. However, in these situations, the credentials of a [test account](/developers/en/docs/your-integrations/test/accounts) previously created.

| Type | Description |
| :--- | :--- |
| Public key | The application's public key is usually used on the frontend. It allows, for example, accessing information about payment methods and encrypting card data. |
| Access token | The application's private key that should always be used on the backend to generate payments. It is essential to keep this information secure on your servers. |

For more information on which credentials will be needed for your integration, consult the [specific documentation](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/docs) of the solution being integrated.

### Client ID and Client Secret

The **Client ID** and **Client Secret** are credentials used in some older integrations with e-commerce platforms and primarily in integrations that use [OAuth](/developers/en/docs/security/oauth/introduction) as a protocol for obtaining private information from Mercado Pago accounts. Specifically, they are used during the **Client Credentials** flow (grant type), which allows access to a resource on one's own behalf and obtaining an Access Token without user interaction.

| Type | Description |
| :--- | :--- |
| Client ID | Unique identifier that represents your integration. |
| Client secret | A private key used in some plugins to generate payments. It is extremely important to keep this information secure on your servers and not allow access to any system user or intruder. |

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

When creating an application, if you selected a Mercado Pago product **that does not require test credentials**, you will see the following screen:

----[mla, mlu, mlc, mlm, mco, mpe]----
![Blocked test account screen](/images/credentials/blocked-test-credentials-es-v2.png)

------------
----[mlb]----
![Blocked test account screen](/images/credentials/blocked-test-credentials-es-v3.png)

------------

If you are integrating a product that does not use test credentials, you will not be able to use them. Instead, you should use [test accounts](/developers/en/docs/your-integrations/test/accounts) to test your integration properly. 

> **Test accounts** do not have test credentials enabled. If you are using a test account, you will need to use its production credentials.

## Share credentials

When you receive assistance in integrating or setting up your payment channels, you can safely share your credentials with another Mercado Pago account. To do so, you can do it in two ways:

**Through Your integrations on Mercado Pago Developers:**

1. Go to [Your integrations](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and access an application.
2. Go to the **Test** or **Production** section, depending on the type of credential you want to share.
3. Once you select the credentials, go to the *Share credentials with a developer* section and click on the **Share credentials** button.
4. Enter the email of the person you want to grant access to. Remember that the email must be associated with a Mercado Pago account.

----[mlb]----
![Share credentials in Your Integrations](/images/credentials/share-credentials-panel-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Share credentials in Your Integrations](/images/credentials/share-credentials-panel-es.gif)

------------

**Through Mercado Pago:**

1. Access your Mercado Pago account.
2. Go to [Your business > Settings > Management and Administration > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).
3. On that page, select the production credentials or test credentials, depending on what you want to share.
4. Once you select the credentials, go to the *Share credentials with a developer* section and click on the **Share credentials** button.
5. Select the application from which you want to share your credentials and enter the email of the person you want to grant access to. Remember that the email must be associated with a Mercado Pago account.

----[mlb]----
![Share credentials in Mercado Pago](/images/credentials/share-credentials-mp-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Share credentials in Mercado Pago](/images/credentials/share-credentials-mp-es.gif)

------------

> WARNING
>
> Important
>
> You can share the credentials **up to a maximum of 10 times** with other Mercado Pago accounts. If you reach this limit, you will need to delete old permissions, which will not impact integrations already configured. 
> <br><br>
> Also, if for security reasons you do not wish to continue sharing your credentials, you can cancel access.

## Renew credentials

If for security reasons or any other relevant reason you need to renew your credentials, click on **More options** (three dots at the end of the card) > **Renew**.

> WARNING
> 
> Attention
>
> Note that if the credentials you renew are being used in any of your integrations, they will be affected, and you will need to replace them with the new credentials you obtain after the renewal.

----[mlb]----
![Como renovar suas credenciais](/images/credentials/renew-credentials-pt.gif)

------------
----[mla, mlu, mlc, mlm, mco, mpe]----
![Cómo renovar tus credenciales](/images/credentials/renew-credentials-es.gif)

------------