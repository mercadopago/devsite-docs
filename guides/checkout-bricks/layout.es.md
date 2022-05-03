## Layout 

El layout de Card Payment Brick se basa en las mejores prácticas de UX para que sea posible ofrecer la mejor experiencia de compra sin que debas preocuparte por detalles de diseño. El layout presenta los elementos que se detallan a continuación.

> WARNING
>
> Atención
>
> Los bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

| Elemento  | Características  | Observaciones  |
| --- | --- | --- |
| Título y banderas aceptados <br><br> Propiedad: formTitle  | **Valor (título):** Tarjeta de crédito <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Tipo:** text/imagen <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Opcional <br> Personalizable* <br><br> *Las banderas se muestran junto con el título. La única personalización disponible para ellos es ocultarlos junto al título del formulario, dejando de mostrar esa información.  |
| Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor:** N/A <br> **Label:** Número de tarjeta <br> **Placeholder:** 1234 1234 1234 1234 <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> personalizable (label, placeholder)  |
| Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: cardExpirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder:** MM/AA <br> **Tipo:** date <br> **Formato:** MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> personalizable (label, placeholder)  |
| Campo para ingresar el código de seguridad <br><br> Propiedad: cardSecurityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder:** 1234 <br> **Tipo:** integer <br> **Formato:** N/A <br> **Máx. caracteres:** 4  | Obligatorio <br> personalizable (label, placeholder)  |
| Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label:** Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder:** João Silva <br> **Tipo:** string <br> **Formato:** N/A <br> **Máx. caracteres:** 100  | Obligatorio <br><br> personalizable (label, placeholder)  |
| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentification  | **Valor:** CPF, CNPJ <br><br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentification  | **Valor:** N/A <br> **Label:** N/A <br> **Placeholder:** 999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ. <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Obligatorio <br> no personalizable  |
| Subtítulo <br><br> Propiedad: emailSectionTitle  | **Valor:** Completa tus datos <br>  **Label:** N/A <br> **Placeholder:** N/A <br> **Tipo:** text <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Obligatorio  |
| Campo para ingresar el correo electrónico del comprador <br> Propiedad: cardholderEmail  | **Valor:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Tipo:** string <br> **Formato:** formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres:** X  | Obligatorio* <br> personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Botón de pago <br> Propiedad: formSubmit  | **Valor:** [imagen] Pagar <br> **Label:** N/A  **Placeholder:** N/A <br> **Tipo:** text <br> **callback:** onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
