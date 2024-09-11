# Prerequisites

Keep these aspects in mind before you start:

* Access to an account
* Create an application
* Generate test users
* Obtain your Access token
* Identify your integration

## 1. Access to an account

To start integrating, you must **have a Mercado Pago or Mercado Libre account**.

You can sign in with an existing account or [Create a new account](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).

## 2. Create an application

Creating a credential is necessary to make transactions using the Mercado Pago integration. This credential contains an ID and an Access Token required to make transactions using a Mercado Pago account.

You must create an application to obtain credentials and set up webhook notifications.

It's quite easy to do:

1. Enter [Your integrations](https://www.mercadopago.com/developers/panel/app) and click on **Create application**.
2. Name the application so you can identify it later.
3. Select the option **In-person Payments** and then **QRCode**
4. Optionally, you can select the integration mode, either **attended** or **dynamic**.
5. Accept our Terms and Conditions, and then click on **Create application** again. Done!

> NOTE
>
> Note
>
>If your Point of Sale (POS) integrator has several tenants, see topic 4 and 5 within this same section. Check your integration security and implement [OAuth.](/developers/es/docs/qr-code/additional-content/security/oauth/introduction)

## 3. Generate test users

Use test accounts to ensure that your integration supports all possible flows and scenarios. They have the same features as a real Mercado Pago account, which allows you to test the functioning of the integrations you are developing.

To perform the test, you must have at least two accounts:

* **Seller**: account required to **configure application and credentials**. This is your user account.
* **Buyer**: account required to **test the purchase process**.

In addition to these accounts, it is also important to use [test cards](/developers/en/guides/additional-content/your-integrations/test-cards) to test payment integration and simulate the purchase process, as well as **balance in the test user's Mercado Pago account**. See more details below.

![testuser](/images/dashboard/new-test-users-es.png)

To create accounts and test how the integrations work, follow the steps below.

1. On the [Devsite](/developers/en/docs), navigate to **[Your integrations](/developers/panel/app)** and click on the card corresponding to your application.
2. On the application page, go to the **Test accounts** section and click the **+ Create test account** button.
3. In the "Create new account" screen, enter a description for the account identification. Example: "Seller - Store 1".
4. Next, select the **operating country** for the account. This information **cannot be edited later**, and furthermore, the Buyer and Seller users need to be from the same country.
5. Fill in with a **fictional money value** that will serve as a reference for testing your applications. This value will appear as the balance in the Mercado Pago account of the test user and can be used for payment simulation, just like with the [test cards](/developers/en/guides/additional-content/your-integrations/test-cards).
6. Authorize the use of your personal data in accordance with the ----[mlb]----[Privacy Statement](https://www.mercadopago.com.br/privacidade)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Privacy Statement](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad)------------ and ensure that your account uses Mercado Pago's tools in accordance with the [Terms and Conditions](https://www.mercadopago.com.br/developers/en/docs/resources/legal/terms-and-conditions) by checking the checkbox.
7. Click on **Create test account**.

Done! The test account has been created and will be displayed in the table with the information below.

![testuser](/images/dashboard/test-users-es.png)

* **Country**: Origin location of the account selected in your registration.
* **Account identification**: Description for the test account identification.
* **User**: Automatically generated username of the test account. This is the username used to log in with the test user.
* **Password**: Automatically generated password to access the test user account. To generate a new password, click on the vertical ellipsis (three dots) at the end of the table row and select the **Generate new password** option.
* **Created on**: Date when the test account was created.

> NOTE
>
> Note
>
> To edit the **account identification** or **add more fictional money** to test your applications, click on the **vertical ellipsis** (three dots) at the end of the table row and select the **Edit data** option.<br> <br> You can generate **up to 15 test user accounts** simultaneously, and for now, it is not possible to delete them.

## Validate login with test users

When logging into a website with test users and trying to access some sections of the Developer Dashboard, you may be required to authenticate with a code sent via email.

Since these are fictional users, you will not have access to the account that will receive the code. Instead, you can perform this authentication by entering the **last 6 digits that make up the User ID of the test account** you are trying to access, or the **last 6 digits that make up the production Access Token**.

> WARNING
>
> Important
>
> To access the User ID or Access Token of a test account, you must have previously created an application. To learn how to do this, refer to the documentation on the [Developer Panel](/developers/en/docs/your-integrations/dashboard). <br> <br> If you have any doubts on how to obtain the User ID or Access Token, refer to [Application details](/developers/en/docs/your-integrations/application-details) or [Credentials](/developers/en/docs/your-integrations/credentials).

Please note that when you log in with a test account, you will not have access to certain sections within the Developer Dashboard, such as Test Credentials or Integration Quality. These are sections that are not only not necessary for this type of accounts, but can also interfere with their proper and desired use.

Once the test users are created, you can begin with your integration by creating a store and POS (Point of Sale).

## 4. Obtain your Access Token (OAuth)

If you are an integrator that works with several retailers enabling them to operate with Mercado Pago, we recommend to perform the **OAuth - authentication between accounts** process. The process enables customers securely share personal data with a third-party system.

The Access Token is not shareable in any way other than through OAuth. You can learn more information about it reading our [documentation](/developers/es/docs/qr-code/additional-content/security/oauth/introduction).

## 5. Identify your integration (Sponsor ID)

When a Mercado Pago account is created, it is assigned wiyh a User ID, if they are users, or a Cust ID, if they are a seller. Both are unique IDs that are automatically generated, and will allow the integrations to be associated with each account by including them in the API requests.

When you make integrations for third parties, the `sponsor_id` parameter will allow you to identify the orders that are placed by your point of sale.  You will have to send the Sponsor ID in the [in-store orders API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders_v2/_instore_qr_seller_collectors_user_id_stores_external_store_id_pos_external_pos_id_orders/put) requests. Follow the instructions below to learn how to collect and send this information.

1. If you haven't done so yet, create an account on the Mercado Pago portal.
2. Obtain the user identification (Cust ID or User ID) of your account by accessing the [details of the application](/developers/en/docs/qr-code/additional-content/your-integrations/application-details) that you have created earlier.
3. Include the User ID of your integrator account in the seller's Sponsor ID.
4. Submit the Sponsor ID on all QR transactions, as shown in our [API Reference](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/reference/instore_orders/_mpmobile_instore_qr_user_id_external_id/post).