# Card Payment Brick 

Card Payment Brick offers a payment form with an optimized design and different themes, providing all the necessary fields to make a payment with a credit and/or debit card, and includes the necessary mechanisms to automatically receive the necessary data to create the payment in the back end.

This Brick, in addition to containing the fields to collect the personal data of the cardholder (name of the cardholder and ID), also has fields to collect the card number, the expiration date and the security code (CVV), which already comply with [PCI](/developers/en/guides/additional-content/security/pci) security standards, eliminating the need to process this data.

In addition to collecting the necessary fields to make the payment, this component also helps the user to complete the screen with alerts for incomplete fields and possible input errors. See below the main features of this Brick.

---
live_demo_code_action:
 - title: Try our Brick
 - description: Build and check out the Card Payment Brick visual experience in real time. When you are ready, download or copy the generated code.
 - link: /developers/en/live-demo/card-payment-brick
 - image:https://http2.mlstatic.com/frontend-assets/dx-devsite/images/card-payment-brick.png
 - linkName: Demo
 - buttonDescription: Build your Card Payment Brick
---

## Layout 

The Card Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

<center>

![cardform](checkout-bricks/card-form-en.png)

</center>

| Element  | Characteristics  | Comments  |
| --- | --- | --- |
| Accepted title and flags <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable <br><br>  *Flags are displayed along with the title. The only customization available for them is to hide them along with the form title, no longer displaying that information.  |
| Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> customizable (label, placeholder)  |
| Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br><br> customizable (label, placeholder)  |
| Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br><br> customizable (label, placeholder and maximum of wrong characters)  |
| Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br><br> customizable (label, placeholder, type, format and maximum of wrong characters.)  |
| Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value:** ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro ------------ ----[mlu]----CI, Otro ------------ ----[mpe]----DNI, C.E, RUC, Otro ------------ <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder:** ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------.<br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br><br> non customizable (label, placeholder)  |
| Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** X  | Mandatory <br> customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |
| Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |