----[mlb]----

# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through credit cards, the Caixa virtual debit card, Pix, boleto, payment in lottery, use the Mercado Pago Wallet and Installments without card.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
|| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
|| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: CPF, CNPJ <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder:** 999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card, Pix, boleto or PEC payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |
| Boleto or PEC payment form | Field for selecting the document type<br><br> Propriedade: buyerIdentificationType | **Valor**: CPF, CNPJ<br> **Label**: Documento <br> **Placeholder**: N/A<br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder)  <br><br> _*If document type and document number data were previously provided and saved, this element becomes optional._|
| Boleto or PEC payment form  | Field for entering the document number <br><br> Propriedade: buyerIdentificationNumber | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: 999.999.999-99 to CPF or 99.999.9999/9999-99 to CNPJ <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Mandatory <br>  Non customizable |
| Boleto or PEC payment form  | First name input field <br><br> Propriedade: buyerName | **Valor**: N/A <br> **Label**: Nome <br> **Placeholder**: Ex: Maria <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder) | 
| Boleto or PEC payment form  | Last name input field <br><br> Propriedade: buyerLastName | **Valor**: N/A <br> **Label**: Documento <br> **Placeholder**:  Ex.: Santos Pereira <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder) |
| Boleto or PEC payment form  | Field for entering the zip code<br><br> Propriedade: zipCode | **Valor**: N/A <br> **Label**: CEP <br> **Placeholder**: 99999-999 <br> **Tipo**: string <br> **Formato**: XXXXX-XX <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder) |
| Boleto or PEC payment form  | Field for entering the state<br><br> Propriedade: addressState | **Valor**: N/A <br> **Label**: Estado <br> **Placeholder**: Ex.: São Paulo <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Mandatory <br> Customizável (label, placeholder) |
| Boleto or PEC payment form | Field for entering the city <br><br> Propriedade: addressCity | **Valor**: N/A <br> **Label**: Cidade <br> **Placeholder**: Ex.: São Paulo <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder) | 
| Boleto or PEC payment form  | CField for entering the neighborhood <br><br> Propriedade: addressNeighborhood | **Valor**: N/A <br> **Label**: Bairro <br> **Placeholder**: Ex.: Bela Vista <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Mandatory <br> Customizável (label, placeholder) |
| Boleto or PEC payment form  | Field for entering the house number <br><br> Propriedade: addressStreet | **Valor**: N/A <br> **Label**: Rua <br> **Placeholder**: Ex.: Av. Paulista <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: depending on the issuer, and may vary between 15 and 16.| Mandatory <br> Customizável (label, placeholder) |
| Boleto or PEC payment form  | Field for inserting the residence complement<br><br> Propriedade: addressNumber | **Valor**: N/A <br> **Label**: Número <br> **Placeholder**: N/A <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Mandatory  <br> Customizável (label) |
| Boleto or PEC payment form  | Campo para inserção do complemento da residência <br><br> Propriedade: addressComplement | **Valor**: N/A <br> **Label**: Complemento <br> **Placeholder**: N/A <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Optional <br>Customizável (label) | 

------------
----[mla]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards, Pago Fácil, Rapipago, using the Mercado Pago Wallet and Installments without card.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
|Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: DNI, CI, LC, LE, Otro <br> **Label**: ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Rapipago, Pago Fácil, card, Pix, boleto or PEC payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  | 

------------
----[mco]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards or use the Mercado Pago Wallet. In the short term we will add the possibility that, using this same Brick, you can also allow them to make cash payments.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: CC, CE, NIT, Otro <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type**: number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |

------------
----[mpe]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards or use the Mercado Pago Wallet. In the short term we will add the possibility that, using this same Brick, you can also allow them to make cash payments.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: DNI, C.E, RUC, Otro <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type**: number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |

------------
----[mlu]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards or use the Mercado Pago Wallet. In the short term we will add the possibility that, using this same Brick, you can also allow them to make cash payments.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: CI, Otro  <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type**: number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |

------------
----[mlc]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards or use the Mercado Pago Wallet. In the short term we will add the possibility that, using this same Brick, you can also allow them to make cash payments.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
|Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: RUT, Otro <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type**: number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |

------------
----[mlm]----
# Payment Brick 

Payment Brick is a modular and customizable solution that allows you to add several payment methods to your store with just one Brick, allowing you to save card data for future purchases. By using Payment Brick, you will have different payment methods at your disposal and you will be able to choose which ones to enable for your site.

For now, you will be able to give your customers the possibility of making payments through debit and credit cards, payments with cash via ticket, using the Mercado Pago Wallet and Installments without card.

The possibility of saving the data of cards that have already been charged in previous purchases, makes the payment process more efficient and faster. For the buyer, it is no longer necessary to have to reload the data each time they enter the checkout.

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-en.gif)

In turn, our processor complies with all security guarantees to give users maximum protection when saving their data. This is one of the great advantages of adding Checkout Bricks to your site: the peace of mind of providing a secure solution, backed by Mercado Pago, but customized to the needs of your company.

## Layout 

The Payment Brick layout is based on the best UX practices, so that it is possible to offer the best shopping experience without having to worry about design details. The layout offers the elements detailed below.

> WARNING
>
> Attention
>
> The Bricks were created not only to meet the technical needs of implementation and security, but also to provide the best experience for the buyer. Customizing a Brick can drastically change the buyer's experience. Our recommendation is that you always use the Brick with as little additional customization as possible to always ensure the best experience.

### Forms fields

| Section | Element  | Characteristics  | Comments  |
| --- | --- | --- | --- |
| Payment options container | Title <br><br>  Property: formTitle  | **Value (title):** Credit or debit card  <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text/image <br> **Format:** N/A <br> **Max. characters:** N/A  | Optional <br> Customizable |
| Payment options container | Payment button <br><br> Property: formSubmit  | **Value:** [imagen] Pay <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Type:** text <br> **callback:** onSubmit <br> **function**: promise(cardFormData)  | Optional <br> Concealable and customizable <br><br> *The function receives the data from the form, including the card token, and presents a loading animation.  |
| Card payment form | Card number input field <br><br> Property: cardNumber  | **Value:** N/A <br> **Label:** Card number <br> **Placeholder:** 1234 1234 1234 1234 <br> **Type:** number <br> **Format:** N/A <br> **Max. characters:** depending on the issuer it can vary between 15 and 16.  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form | Card expiration date input field <br><br> Property: expirationDate  | **Value:** N/A <br> **Label:** expiration date <br> **Placeholder:** MM/AA <br> **Type:** date <br> **Format:** MM/AA <br> **Max. characters:** 5  | Mandatory <br> Customizable (label, placeholder)  |
| Card payment form  Security code input field <br><br> Property: securityCode  | **Value:** N/A <br> **Label:** Security code <br> **Placeholder:** 1234 <br> **Type:** integer <br> **Format:** N/A <br><br>  **Max. characters:** 4  | Mandatory <br> Customizable (label, placeholder and maximum of wrong characters)  |
| Card payment form | Card cardholder name input field <br><br> Property: cardholderName  | **Value:** N/A <br> **Label:** Name of the holder as it appears on the card <br> **Placeholder:** João Silva <br> **Type:** string <br> **Format:** N/A <br> **Max. characters:** 100  | Mandatory <br> Customizable (label, placeholder, type, format and maximum of wrong characters.)  |
| Card payment form  Cardholder ID selection field <br><br> Property: cardholderIdentificationType  | **Value**: CURP, IFE, Otro <br> **Label:** ID <br> **Placeholder:** N/A <br> **Type:** select <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the document type and number data were previously provided and saved, this element becomes optional.  |
| Card payment form | Cardholder ID number input field <br><br> Property: cardholderIdentificationNumber  | **Value:** N/A <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Type**: number <br> **Format:** N/A <br> **Max. characters:** N/A  | Mandatory <br> Non customizable (label, placeholder)  |
| Card or ticket payment form | Buyer’s email input field <br><br> Property: email  | **Value:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Type:** string <br> **Formato:** conventional email format (example@email.com) <br> **Max. characters:** N/A  | Mandatory <br> Customizable (label, placeholder) <br><br> *If the data was previously provided and saved, this element becomes optional.  |

------------