Use test accounts to ensure that your integration supports all possible flows and scenarios. They have the same features as a real Mercado Pago account, which allows you to test the functioning of the integrations you are developing.

To perform the test, you must have at least two accounts:

* **Seller**: account required to **configure application and credentials**. This is your user account.
* **Buyer**: account required to **test the purchase process**.

In addition to these accounts, it is also important to use [test cards](/developers/en/docs/testing/test-cards) to test payment integration and simulate the purchase process, as well as **balance in the test user's Mercado Pago account**. See more details below.

To create accounts and test how the integrations work, follow the steps below.

1. In [Devsite](/developers/en/docs), access the menu **Your Integrations > Test Accounts** and click on the **Create Test Account** button.
2. On the "Create New Account" screen, enter a description for the account identification. Example: "Salesperson - store 1".
3. Next, select the **country of operation** for the account. This information **cannot be edited later** and, in addition, Buyer and Seller users must be from the same country.
4. Fill in a **fictitious amount of money** that will serve as a reference for you to test your applications. This amount will appear as a balance in the test user's Mercado Pago account and can be used to simulate payments, as well as with a [test card](/developers/en/docs/testing/test-cards).
5. Click **Create Test Account**.

> WARNING
>
> Attention
>
> You can generate up to 15 test user accounts at the same time and it is not yet possible to delete them at the moment.

Ready! The test account has been created and will be displayed in the table with the following information:

* **Country** location of origin of the account selected in your registration.
* **Account ID**: description for test account identification.
* **User**: auto-generated test account username. This username is used to log in with the test user.
* **Password**: automatically generated test user account access password. To generate a new password, click on the 3 vertical dots at the end of the table row and select the option **Generate new password**.
* **Creation Date**: date the test account was created.

> NOTE
>
> Important
>
> To edit the **account ID** or **add more play money** to test your applications, click on the **3 vertical dots** at the end of the table row and select the option **Edit data**. 