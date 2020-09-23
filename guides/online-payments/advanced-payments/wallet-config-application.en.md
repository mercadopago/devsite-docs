---
  indexable: false
---

# Set up an Application to Process Payments with Wallet Connect

In order to process payments in Wallet Connect mode, the following steps must be taken.

### Create a Mercado Pago account

The account must be created from the Mercado Pago website in the country where you wish to receive payments.

* Argentina: www.mercadopago.com.ar
* Brazil: www.mercadopago.com.br
* Mexico: www.mercadopago.com.mx

### Create an application

The application will be used to request access permits to payers. The application must be created by accessing `https://applications.mercadopago.com/` and completing the requested information. In the `Redirect URI` field, you must enter the address to which users will be redirected when the wallet usage authorization step is completed. Once the application is created, the `APP_ID` value will be obtained, which will be necessary for the following steps.

### Enable your application to receive payments in Wallet Connect mode 

Contact your account executive and inform the `APP_ID` of the application to require the validation of the Wallet Connect modality.
