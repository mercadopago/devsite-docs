Use test accounts to ensure that your integration supports all possible flows and scenarios. They have the same features as a real Mercado Pago account, which allows you to test the functioning of the integrations you are developing.

To perform the test, you must have at least two accounts:

* **Seller**: account required to **configure application and credentials**. This is your user account.
* **Buyer**: account required to **test the purchase process**.

In addition to these accounts, it is also important to use [test cards](/developers/en/guides/additional-content/your-integrations/test-cards) to test payment integration and simulate the purchase process, as well as **balance in the test user's Mercado Pago account**. See more details below.

To create accounts and test how the integrations work, follow the steps below.

1. On the [Devsite](/developers/en/docs), navigate to **[Your integrations](/developers/panel/app)** and click on the card corresponding to your application.
2. On the application page, go to the **Test accounts** section and click the **+ Create test account** button.
3. In the "Create new account" screen, enter a description for the account identification. Example: "Seller - Store 1".
4. Next, select the **operating country** for the account. This information **cannot be edited later**, and furthermore, the Buyer and Seller users need to be from the same country.
5. Fill in with a **fictional money value** that will serve as a reference for testing your applications. This value will appear as the balance in the Mercado Pago account of the test user and can be used for payment simulation, just like with the [test cards](/developers/en/guides/additional-content/your-integrations/test-cards).
6. Authorize the use of your personal data in accordance with the ----[mlb]----[Privacy Statement](https://www.mercadopago.com.br/privacidade)------------ ----[mla, mlm, mpe, mco, mlu, mlc]----[Privacy Statement](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad)------------ and ensure that your account uses Mercado Pago's tools in accordance with the [Terms and Conditions](https://www.mercadopago.com.br/developers/en/docs/resources/legal/terms-and-conditions) by checking the checkbox.
7. Click on **Create test account**.

> WARNING
>
> Use of credentials
>
> Always use the **production credentials** when working with a test user.

> WARNING
>
> Attention
>
> You can generate up to 15 test user accounts simultaneously, and for now, it is not possible to delete them.

Done! The test account has been created and will be displayed in the table with the following information:

* **Country**: Origin location of the account selected in your registration.
* **Account identification**: Description for the test account identification.
* **User**: Automatically generated username of the test account. This is the username used to log in with the test user.
* **Password**: Automatically generated password to access the test user account. To generate a new password, click on the vertical ellipsis (three dots) at the end of the table row and select the **Generate new password** option.
* **Created on**: Date when the test account was created.

> NOTE
>
> Important
>
> To edit the **account identification** or **add more fictional money** to test your applications, click on the **vertical ellipsis** (three dots) at the end of the table row and select the **Edit data** option.<br> <br> You can generate **up to 15 test user accounts** simultaneously, and for now, it is not possible to delete them.