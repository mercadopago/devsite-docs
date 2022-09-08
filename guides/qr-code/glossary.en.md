# Glossary

We know some concepts may be new for you. Before starting, here's a cheatsheet.

| Term | Description |
| --- | --- |
| Credentials | Your credentials are the keys we give you so you can set up your integrations. To find them, go to your [credentials]([FAKER][CREDENTIALS][URL]) and select the productive ones. |
| `ACCESS_TOKEN` | The private app key to generate payments. You'll find it on the [credentials]([FAKER][CREDENTIALS][URL]) section. You must use it to identify yourself in your integrations. Always use the Production Mode credentials. |
| `USER_ID` | Buyer's user ID in Mercado Pago, consists of the last digits on the `access_token`, after the last dash. So, for instance, if your `access_token` is **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-446566691**, then your `USER_ID` is **446566691**. Also known as the `COLLECTOR_ID`. |
| `SPONSOR_ID` | Supplier's ID on the integrated system with Mercado Pago. Consist of the last digits of the `access_token`, after the last dash. So, for instance, if your `access_token` is **APP_USR-8499883828799661-062409-bf057c51fc05f87eba5608328f869879-776566693**, then your `USER_ID` is **776566693**. `sponsor_ID` must be different than `USER_ID`. |
| Store | A **physical shop** in which your clients can get products and services. You can have multiple stores on one account. |
| Point of sale (POS) | A **place to perform a transaction** on a store or physical shop. Each POS will be linked with a unique QR code. |
| Order | A purchase made by your client. Contains a list of products with an associated cost. |