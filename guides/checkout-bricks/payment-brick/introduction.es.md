# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

----[mlb]----
Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de crédito y la tarjeta de débito virtual Caixa. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos con Pix, boleto y en lotérica.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos en efectivo.

------------

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-brick-layout](checkout-bricks/payment-brick-layout-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

O layout do Payment Brick foi construído com base nas melhores práticas de UX para que seja possível entregar ao comprador a melhor experiência sem que você precise se preocupar com detalhes de design. O layout traz os elementos detalhados abaixo.

> WARNING
>
> Atención
>
> Los bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de formulario de tarjeta

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable* |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro
------------ ----[mlu]----CI, Otro
------------ ----[mpe]----DNI, C.E, RUC, Otro
------------ <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------. <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> no personalizable  |
| Formulario de pago con tarjeta | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |