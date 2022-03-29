---
  indexable: false
---

# Credentials

The Mercado Pago has two types of credential pairs, **_CLIENT_ID_** | **_CLIENT_SECRET_** and **_PUBLIC_KEY_** | **_ACCESS_TOKEN_**. These credentials serve as a kind of personal key to create your payment method and integrate the Mercado Pago with your online store.

## Getting your Credentials

## Access Mercado Pago account

To obtain your credentials, first access your Mercado Pago account at the link [https://www.mercadopago.com/](https://www.mercadopago.com.br/).
If you do not have an account, create one by clicking **"Register"**. Fill out the form according to the type of account you want. Remember that this account will be linked to your virtual store.

![painelMercadoPago](/images/painelMercadoPago.gif)

## Access Credentials

Once Authenticated in your Mercado Pago account, access the following link [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials/]([FAKER][CREDENTIALS][URL]).
You'll be taken to the credentials page of your account.

![paginaCredenciais](/images/paginaCredenciais.gif)

On this page you will have access to the configuration keys of your Mercado Pago account to install the API integration or Checkout Pro (Redirect, LightBox or Iframe) in your Virtual Store.

> NOTE
>
> Note
>
> To set up API integration you will need to enter the credentials **_PUBLIC_KEY_** and **_ACCESS_TOKEN_**.
> To configure the Checkout Pro (Redirect, LightBox or Iframe) you will need to enter the credentials **_CLIENT_ID_** and **_CLIENT_SECRET_**.

## Form I want to go to Production

By choosing the API integration option, you will need to fill out the "I want to go to production" form, otherwise your integration will be disabled to receive payments.
Click "I want to go to production" to access the form.

![queroIrParaProducao](/images/queroIrParaProducao.gif)

* In **"Website or App"** write site URL;
* In **"Name"** write your name;
* In **"Document"** write "CPF" and enter only the digits (eg CPF19119119100);
* In **"Date of birth"** insert the date of the owner of the document;
* In **"Postal address"** fill in the complete address with street, number, complement, neighborhood, city, state and zip code;
* In **"Comments"** describe the segment that will work and products that will sell in your store;
* Check the **checks** of the 3 statements;
* Click "Submit".

Ready! You will be redirected to the credentials home page, and your API integration set up in your online store will be able to transact.
