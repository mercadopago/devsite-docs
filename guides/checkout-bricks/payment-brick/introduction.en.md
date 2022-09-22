# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

----[mlb]----
For now, you will be able to give your customers the possibility of making payments through credit cards, the Caixa virtual debit card, Pix, boleto, payment in lottery or use the Mercado Pago Wallet. In the short term we will add the possibility that, using this same Brick, you can also allow them to make payments with Pix, ticket and lottery.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
For now, you can give your customers the ability to make payments through debit and credit cards or use the Mercado Pago Wallet.. In the short term we will add the possibility that, using this same Brick, you can also allow them to make cash payments.

------------

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

----[mlb]----
![payment-brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-en.gif)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
![payment-brick-layout-mla](checkout-bricks/payment-brick-layout-mla-en.gif)

------------

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a brick can drastically change the buyer's experience. Our recommendation is that you always use the brick with as little additional customization as possible to always ensure the best experience.

### Card form fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br><br> customizable (label, placeholder)  |
|| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br><br> customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br><br> customizable (label, placeholder, type, format and maximum of wrong characters.)  |
|| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value:** ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro
------------ ----[mlu]----CI, Otro
------------ ----[mpe]----DNI, C.E, RUC, Otro
------------ <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder:** ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------.<br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br><br> non customizable (label, placeholder)  |
| Card payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |