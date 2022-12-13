----[mlb]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de crédito, tarjeta de débito virtual Caixa, Pix, boleto, pago en agencia de lotería, utilizar la Cuenta de Mercado Pago y Cuotas sin tarjeta.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-mlb](checkout-bricks/payment-brick-layout-mlb-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: CPF, CNPJ <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: 999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta, pix, boleto o PEC | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con boleto ou PEC | Campo para seleccionar el tipo de documento <br><br> Propriedade: buyerIdentificationType | **Valor**: CPF, CNPJ<br> **Label**: Documento <br> **Placeholder**: N/A<br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder)  <br><br> _*Si los datos de tipo de documento y número de documento se proporcionaron y guardaron previamente, este elemento se convierte en opcional._|
| Formulario de pago con boleto ou PEC  |Campo para ingresar el número de documento <br><br> Propriedade: buyerIdentificationNumber | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: 999.999.999-99 para CPF o 99.999.9999/9999-99 para CNPJ <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Obligatorio <br> <br> No personalizable |
| Formulario de pago con boleto ou PEC  | Campo de entrada de nombre <br><br> Propriedade: buyerName | **Valor**: N/A <br> **Label**: Nome <br> **Placeholder**: Ex: Maria <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder) | 
| Formulario de pago con boleto ou PEC  | Campo de entrada de apellido <br><br> Propriedade: buyerLastName | **Valor**: N/A <br> **Label**: Documento <br> **Placeholder**: Santos Pereira <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder) |
| Formulario de pago con boleto ou PEC  | Campo para ingresar el código postal <br><br> Propriedade: zipCode | **Valor**: N/A <br> **Label**: CEP <br> **Placeholder**: 99999-999 <br> **Tipo**: string <br> **Formato**: XXXXX-XX <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder) |
| Formulario de pago con boleto ou PEC  | Campo para ingresar el estado<br><br> Propriedade: addressState | **Valor**: N/A <br> **Label**: Estado <br> **Placeholder**: São Paulo <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Obligatorio <br> Personalizable (label, placeholder) |
| Formulario de pago con boleto ou PEC  | Campo para ingresar la ciudade <br><br> Propriedade: addressCity | **Valor**: N/A <br> **Label**: Cidade <br> **Placeholder**: São Paulo <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder) | 
| Formulario de pago con boleto ou PEC  |  Campo para ingresar el barrio <br><br> Propriedade: addressNeighborhood | **Valor**: N/A <br> **Label**: Bairro <br> **Placeholder**: Bela Vista <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obligatorio <br> Personalizable (label, placeholder) |
| Formulario de pago con boleto ou PEC  |  Campo para ingresar la calle  <br><br> Propriedade: addressStreet | **Valor**: N/A <br> **Label**: Rua <br> **Placeholder**: Av. Paulista <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: a depender do emissor, podendo variar entre 15 e 16.| Obligatorio <br> Personalizable (label, placeholder) |
| Formulario de pago con boleto ou PEC  | Campo para ingresar el número de la casa <br><br> Propriedade: addressNumber | **Valor**: N/A <br> **Label**: Número <br> **Placeholder**: N/A <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres:** N/A | Obligatorio <br> Personalizable (label) |
| Formulario de pago con boleto ou PEC  | Campo para insertar el complemento de la residencia <br><br> Propriedade: addressComplement | **Valor**: N/A <br> **Label**: Complemento <br> **Placeholder**: N/A <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Opcional <br> Personalizable (label) | 

------------
----[mla]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito, Pago Fácil, Rapipago, utilizar la Cuenta de Mercado Pago y Cuotas sin tarjeta.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-mla](checkout-bricks/payment-brick-layout-mla-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: DNI, CI, LC, LE, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta, Rapipago o Pago Fácil | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |

------------
----[mlm]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito, pagos con dinero en efectivo via ticket o utilizar la Cuenta de Mercado Pago.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-mlm](checkout-bricks/payment-brick-layout-mlm-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: CURP, IFE, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta o ticket | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  | 

------------
----[mpe]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito o utilizar la Cuenta de Mercado Pago. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos en efectivo.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: DNI, C.E, RUC, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  | 

------------
----[mco]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito o utilizar la Cuenta de Mercado Pago. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos en efectivo.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: CC, CE, NIT, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  | 

------------
----[mlu]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito o utilizar la Cuenta de Mercado Pago. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos en efectivo.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: CI, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  | 

------------
----[mlc]----

# Payment Brick 

Payment Brick es una solución modular y personalizable que permite agregar varios medios de pago a tu tienda con solamente un Brick, permitiendo guardar los datos de tarjetas para compras futuras. Al utilizar Payment Brick, tendrás a tu disposición diferentes medios de pago y podrás elegir cuáles habilitar para tu sitio.

Por el momento, podrás darle a tus clientes la posibilidad de hacer pagos a través de tarjetas de débito y crédito o utilizar la Cuenta de Mercado Pago. En el corto plazo sumaremos la posibilidad de que, usando este mismo Brick, puedas permitirle también realizar pagos en efectivo.

La posibilidad de guardar los datos de tarjetas que ya fueron cargadas en compras anteriores, hace que el proceso de pago sea más eficiente y rápido. Para el comprador ya no es necesario tener que volver a cargar los datos cada vez que ingrese al checkout. 

![payment-Brick-layout-all](checkout-bricks/payment-brick-layout-all-es.gif)

A su vez, nuestro procesador cumple con todas las garantías de seguridad para darle a los usuarios la máxima protección al guardar sus datos. Esa es una de las grandes ventajas de sumar Checkout Bricks a su sitio: la tranquilidad de brindar una solución segura, con el respaldo de Mercado Pago, pero personalizado a las necesidades de su empresa.

## Layout 

El layout de Payment Brick se basa en las mejores prácticas UX para que sea posible ofrecer al comprador la mejor experiencia sin que debas preocuparte por detalles de diseño. Presenta los elementos detallados a continuación.

> WARNING
>
> Atención
>
> Los Bricks se crearon no solo para satisfacer las necesidades técnicas de implementación y seguridad, sino también para brindar la mejor experiencia al comprador. La personalización de un Brick puede cambiar drásticamente la experiencia del comprador. Nuestra recomendación es que siempre hagas uso del Brick con la menor personalización adicional posible para garantizar siempre la mejor experiencia.

### Campos de los formularios

| Sección | Elemento  | Características  | Observaciones  |
| --- | --- | --- | --- |
| Container de opciones de pago | Título <br><br> Propiedad: formTitle  | **Valor (título)**: Tarjeta de crédito o débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: text/imagen <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Opcional <br> Personalizable |
| Container de opciones de pago  | Botón de pago <br> Propiedad: formSubmit  | **Valor**: [imagen] Pagar <br> **Label**: N/A  **Placeholder**: N/A <br> **Tipo**: text <br> **callback**: onSubmit <br> **função**: promise(cardFormData)  | Opcional <br> Ocultable y personalizable <br><br> *La función recibe los datos del formulario, incluido el token de la tarjeta, y presenta una animación de carga.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de tarjeta <br><br> Propiedad: cardNumber  | **Valor**: N/A <br> **Label**: Número de tarjeta <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: dependiendo del emisor, pudiendo variar entre 15 y 16.  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar la fecha de vencimiento de la tarjeta <br><br> Propiedad: expirationDate  | **Valor:** N/A <br> **Label:** Fecha de vencimiento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5  | Obligatorio <br> Personalizable (label, placeholder y máximo de caracteres incorrectos)  |
| Formulario de pago con tarjeta | Campo para ingresar el código de seguridad <br><br> Propiedad: securityCode  | **Valor:** N/A <br> **Label:** Código de seguridad <br> **Placeholder**: 1234 <br> **Tipo**: integer <br> **Formato**: N/A <br> **Máx. caracteres**: 4  | Obligatorio <br> Personalizable (label, placeholder)  |
| Formulario de pago con tarjeta | Campo para ingresar el nombre del titular de la tarjeta <br><br> Propiedad: cardholderName  | **Valor:** N/A <br> **Label**: Nombre del titular tal y como aparece en la tarjeta <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100  | Obligatorio <br><br> Personalizable (label, placeholder, tipo, formato y máximo de caracteres incorrectos.)  |
| Formulario de pago con tarjeta| Campo para seleccionar el documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationType  | **Valor**: RUT, Otro <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos de tipo y número de documento se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  |
| Formulario de pago con tarjeta | Campo para ingresar el número de documento del titular de la tarjeta <br><br> Propiedad: cardholderIdentificationNumber  | **Valor**: N/A <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: N/A  | Obligatorio <br> No personalizable  |
| Formulario de pago con tarjeta | Campo para ingresar el correo electrónico del comprador <br> Propiedad: email  | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: formato de e-mail convencional (ejemplo@email.com)  **Máx. caracteres**: N/A  | Obligatorio* <br> Personalizable (label, placeholder) <br><br> *Si los datos se proporcionaron y guardaron previamente, este elemento se vuelve opcional.  | 

------------