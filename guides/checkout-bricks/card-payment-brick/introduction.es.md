# Card Payment Brick 

Card Payment Brick ofrece un formulario de pago con un diseño optimizado y diferentes temas, trayendo todos los campos necesarios para realizar un pago con tarjeta de crédito y/o débito, e incluye los mecanismos necesarios para recibir automáticamente los datos necesarios para crear el pago en el back-end.

Este brick, además de contener los campos para recolectar los datos personales del titular de la tarjeta (nombre del titular y documento), también tiene campos para recolectar el número de tarjeta, la fecha de vencimiento y el código de seguridad (CVV), que ya cumplen con los estándares de seguridad [PCI](/developers/es/guides/additional-content/security/pci), eliminando la necesidad de procesar estos datos.

Además de recopilar los campos necesarios para realizar el pago, este componente también ayuda al usuario a terminar de completar la pantalla con alertas de campos incompletos y posibles errores en el llenado. Ve a continuación las principales características de este brick.

---
live_demo_code_action:
 - title: Prueba nuestro Brick
 - description: Construye y comprueba la experiencia visual de Card Payment Brick en tiempo real. Cuando esté todo listo, descarga o copia el código generado.
 - link: /developers/es/live-demo/card-payment-brick
 - image:https://i.ibb.co/KWH0Szk/Card-Payment-Brick-Gif-1.png
 - linkName: Demo
 - buttonDescription: Construir tu Card Payment Brick
---
<br>

## Layout 

El layout de Card Payment Brick se basa en las mejores prácticas de UX para que sea posible ofrecer la mejor experiencia de compra sin que debas preocuparte por detalles de diseño. El layout presenta los elementos que se detallan a continuación.

> WARNING
>
> Atención
>
> Los bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

| Elemento  | Características  | Observaciones  |
| --- | --- | --- |
| Título y banderas aceptados <br><br> Propiedad: formTitle  | **Valor (título):** Tarjeta de crédito o débito <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Tipo:** text/imagen <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Opcional <br> Personalizable* <br><br> *Las banderas se muestran junto con el título. La única personalización disponible para ellos es ocultarlos junto al título del formulario, dejando de mostrar esa información.  |
| Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor:** N/A <br> **Label:** Número de tarjeta <br> **Placeholder:** 1234 1234 1234 1234 <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> personalizable (label, placeholder)  |
| Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder:** MM/AA <br> **Tipo:** date <br> **Formato:** MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder:** 1234 <br> **Tipo:** integer <br> **Formato:** N/A <br> **Máx. caracteres:** 4  | Obligatorio <br> personalizable (label, placeholder)  |
| Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label:** Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder:** João Silva <br> **Tipo:** string <br> **Formato:** N/A <br> **Máx. caracteres:** 100  | Obligatorio <br><br> personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor:** ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro
------------ ----[mlu]----CI, Otro
------------ ----[mpe]----DNI, C.E, RUC, Otro
------------ <br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor:** N/A <br> **Label:** N/A <br> **Placeholder:** ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------. <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** N/A  | Obligatorio <br> no personalizable  |
| Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Tipo:** string <br> **Formato:** formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres:** X  | Obligatorio* <br> personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Botón de pago <br> Propiedad: formSubmit  | **Valor:** [imagen] Pagar <br> **Label:** N/A  **Placeholder:** N/A <br> **Tipo:** text <br> **callback:** onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |