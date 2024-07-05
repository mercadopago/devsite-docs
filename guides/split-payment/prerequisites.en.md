# Prerequisites

To integrate the Split payments solution, it is important to meet the requirements shown below.

> NOTE
>
> Important
>
> This documentation is specific to the 1:1 Split payments model. If you need information about the 1:N model, we recommend contacting our sales team for more details. Additionally, if it is necessary to make configurations regarding the commission release date (marketplace fee or application fee), contact your **assisted commercial executive**.

| Requirement                      | Description                                                                                                                                                                                                                                      |
|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mercado Pago Seller Account      | To integrate, you need a seller account on Mercado Pago with a KYC 6 level. This ensures a solid foundation of trust and security in transactions. If you don't have one, you can [create it](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing) for free. |
| Mercado Pago Application         | It is necessary to have the Mercado Pago application to manage the received payments. You can download [its version for Android devices](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419), or [for iOS devices](https://apps.apple.com/ar/app/mercado-pago/id925436649).                                                                       |
| OAuth                            | Resellers in the Marketplace must go through the OAuth authorization process to establish a secure and authenticated connection. This procedure ensures the legitimacy of commercial transactions and protects the integrity of operations. Refer to the OAuth documentation for more information. |
| Integration with Mercado Pago     | The Marketplace must integrate with Mercado Pago using **Pro and ----[mla, mlu, mlc, mlm, mpe, mco]----API------------ ----[mlb]----Transparente------------** checkouts (1:1 model).                                                                                                           |
| Credentials                     | Exclusive passwords used to identify an integration in your account and allow secure navigation and user data protection. Refer to the [Credentials documentation](/developers/pt/docs/split-payments/additional-content/your-integrations/credentials) for more information.                     |
| Test Accounts                    | Test accounts allow you to perform tests in the application to ensure that everything is working correctly. You can create them in [Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]developers/panel/app).                                                                              |