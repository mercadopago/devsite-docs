----[mlb]----
La integración del Checkout Transparente de Mercado Pago para tarjetas permite que puedas ofrecer una opción de pagos completa dentro de tu sitio. Toda la experiencia sucede en tu tienda para que los clientes no tengan que salir al momento de realizar la compra.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
La integración del Checkout API de Mercado Pago para tarjetas permite que puedas ofrecer una opción de pagos completa dentro de tu sitio. Toda la experiencia sucede en tu tienda para que los clientes no tengan que salir al momento de realizar la compra.
------------

> WARNING
> 
> Importante
> 
> Tu integración con la API transparente de Mercado Pago puede ser elegible para [PCI SAQ A](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/security/pci-v2#bookmark_ventajas_de_un_saq-a). Esta categoría de PCI requiere menos requisitos del vendedor, lo que acelera el proceso de certificación. Para ser elegible para esta categoría, tu integración debe realizarse mediante campos de tarjeta en formato Iframe.

**Fields** utiliza componentes HTML iframe permite que los datos PCI (`cardNumber`,` securityCode`, y `expirationDate`) sean inaccesibles para terceros y procesados ​​por los servidores de Mercado Pago, aumentando la seguridad del comprador, vendedor y adquiriente.

![Fields](/images/api/api-integration-introduction-v2-es.png)

Actualmente hay dos formas de implementar esta solución. La primera es mediante el uso de **métodos core**, donde el integrador es responsable de todo el flujo de pago, lo que permite una mayor flexibilidad para experiencias totalmente personalizadas. El segundo utiliza **cardForm**, un componente creado por nosotros que facilita la integración, realizando algunos pasos del proceso de forma automática.
