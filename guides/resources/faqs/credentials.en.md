# Credentials

## What are my credentials and where can I find them

The credentials are the keys that we provided you so that you could make your integrations.

Your credentials include:

| Key | Description |
| --- |--- |
| Public key  | Public key of the application that you will use in your frontend and will allow you, for example, to know available payment methods and encrypt card data.|
| Access token | Private key of the application that you will use in your backend to generate payments. It is very important that this data is protected on your servers and is not accessible by any system user or attacker. |

They are available in the [Credentials]([FAKER][CREDENTIALS][URL]) panel or from your Mercado Pago account in [Your Business > Settings > Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

We recommend to use first your test credentials, or those of a test user, to verify that everything works correctly in Sandbox and then you can use the productive ones to start receiving payments.

## How to share my credentials

Share your credentials in the safest way with those who help you integrate or configure your payment channels.

In [Credentials](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials), select the “Share my credentials” option and enter the e-mail of the person you want to give access to. Note that the email address must be registered in Mercado Pago or Mercado Libre.

> From your shared credentials, you can [remove permissions](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) when your integration is complete.

## Request access to keys from other accounts

You can request access to another account´s credentials in order to integrate  Mercado Pago and have all the information needed on your panel at hand.

In [Credentials > Other credentials](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share), click on "Request credentials" and enter the e-mail of the account for which you need the data. Please note that the email address must be registered in Mercado Pago or Mercado Libre.

At the end of the integrations, remove the access permissions to the credentials that were shared with you to take care of data security.

## Where can I find the shared credentials

Find the keys that someone shared with you in [Credentials > Other credentials](https://mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials/share).

You can see the list of accounts that gave you access, those that are still pending approval and the option to remove the permissions that you no longer need.

## I am already integrated and tested, how do I implement in production?

To go to production, you must [activate your credentials]([FAKER][CREDENTIALS][URL]).

> If they are already active, you don't have to do anything.

## I want to update my credentials, how can I renew them?

You can renew your credentials from [Credentials]([FAKER][CREDENTIALS][URL]).

For exceptional security reasons, your credentials may need to be updated. But don't worry, you can renew them as many times as necessary.

Please note that you have to replace the credentials previously used in your integration with the new ones.