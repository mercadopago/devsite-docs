# Homologate a local integration

The homologation process for a local integration consists of two parts:

1. In a video call with our team, you must **carry out a series of predefined transactions** that will allow them to verify if the behaviors are as desired, as well as **demonstrate certain functionalities** that must be present in your app.
2. Once that process is approved, you must **fill out a form** to send it to our team, who will use that information to upload your application.

## 1. Carry out transactions and demonstrate functionalities

Below, you will find the transactions that you must carry out as the first step of your homologation. You can perform them with real cards and fake buyer data, as it is a test environment and no charges will be made.

> WARNING
>
> Important
>
> Remember that this step must be done in a video call with our team, who may ask you to show the different screens or behaviors of the device. Additionally, you must store the `usertransactionID` associated with each transaction in your database, and you must have integrated [Payment Query](/developers/en/docs/redelcom/local-integration/android/payments-processing/payment-query) using this same parameter, as a demonstration will be requested.

1. [Create a transaction](/developers/en/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) to be paid with a **debit card** in an amount **higher than 20,000 CLP**.
2. [Create a transaction](/developers/en/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) to be paid with a **credit card** in **two or more installments**, and in an amount **higher than 30,000 CLP**.
3. [Create a transaction](/developers/en/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) for the **exact amount of 2,222 CLP**. This transaction will return an error configured in the environment and, in your application, you must show the `mensaje_visor` field, which will allow you to inform the client of the reason for the error. The use of a pop-up to display this message will be required.
4. [Create a transaction](/developers/en/docs/redelcom/local-integration/android/payments-processing/create-payment-intent) to be paid with a **debit card** in an amount **lower than 50 CLP**, and it should not be processed if you have correctly implemented the validation that does not allow operations for low amounts. The use of a pop-up for this validation will also be required.
5. **Make a payment** for any amount and **cancel it from the device** while it is being processed. In your application, you must show the `mensaje_visor` field, which will allow you to manage it from the device. The use of a pop-up to display this message will be required.

In addition, certain specific cases may require a few more steps:
* If you use **multiservice parameters** (load money, bill payment or telecommunications recharges), you may be asked to perform new operations.
* If you use an **external printer**, you must show what the printed invoices look like.
* If you use the **infrared and camera of the device**, you must show the operation in which they are needed.

## 2. Fill out the form

Once the homologation process by video call is completed and approved, our team will provide you with a form that you must complete considering the data and particularities of your application.

To do this, follow the descriptions below:
 * **App Icon:** refers to the icon of your application. It should have a recommended size of 512x512 pixels, in PNG format.
 * **App Name:** refers to the name of your app in the PAX store. Its maximum length is 60 characters.
 * **Business Category:** refers to the category of the business integrated through the application. You must select this category according to the table below, and you can choose more than one option.

![Business Category options](/images/Redelcom/rdc-business-category.png)

 * **Short Description:** is a brief description of the application, not exceeding 120 characters.
 * **Description:** is a more elaborate description of the application, mentioning its processes such as payments or menu. Its maximum length is 5000 characters.
 * **Screenshots:** you must submit screenshots of the application in some of its payment or menu processes. They must be at least 3 in a recommended size of 720x1280 and in PNG format.
 * **Featured Image:** this image should have a recommended size of 320x280 and in PNG format.
 * **Package Name:** the name of the package with which the application will be identified. It should be related to the application or company.
 * **Send login:** refers to a screenshot of the login module before entering the application.
 * **APK:** you must send the APK of the application, having exported it in *release* mode.

> WARNING
>
> Important
>
> Your application integrated with Redelcom **must not use** the MAGCARD, ICC, PICC, PED permissions, as they are potentially risky permissions for the security of the integration.

Once completed, send the form to the same email address where you received it. If the information is correct, you will soon receive permission to go live with your Redelcom integration.