# Layout 

The Card Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

![cardform](checkout-bricks/card-form__es.png)

> WARNING
>
> Attention
>
> The bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a brick can drastically change the buyer's experience. Our recommendation is that you always use the brick with as little additional customization as possible to always ensure the best experience.

| Element  | Characteristics  | Comments  |
| --- | --- | --- |
| Accepted title and flags <br><br>  Property: formTitle  | **Value (title):** Credit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable <br><br>  *Flags are displayed along with the title. The only customization available for them is to hide them along with the form title, no longer displaying that information.  |
| Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> customizable (label, placeholder)  |
| Card expiration date input field <br><br> Property: cardExpirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br><br> customizable (label, placeholder)  |
| Security code input field <br><br> Property: cardSecurityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br><br> customizable (label, placeholder)  |
| Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br><br> customizable (label, placeholder)  |
| Cardholder ID selection field <br><br> Property: cardholderIdentification  | **Value:** CPF, CNPJ <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Cardholder ID number input field <br><br> Property: cardholderIdentification  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder:** 999.999.999-99 for CPF ou 99.999.9999/9999-99 for CNPJ.<br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br><br> non customizable (label, placeholder)  |
| Subtitle <br><br> Property: emailSectionTitle  | **Value:** Complete with your information <br> **Label**: N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory  |
| Buyer’s email input field <br><br> Property: cardholderEmail  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** X  | Mandatory <br> customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |
| Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
