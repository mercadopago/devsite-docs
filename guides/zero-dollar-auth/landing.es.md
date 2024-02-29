---
content_section_with_media: 
 - title: Validación de tarjetas (Zero Dollar Auth)
 - message: Zero Dollar Auth es una función desarrollada para mejorar la validación de tarjetas de crédito o débito, con el objetivo de optimizar la experiencia del cliente. Con ella, es posible asegurar que no se cobren cargos efectivos en la tarjeta del cliente, eliminando la necesidad de cancelaciones o devoluciones después de la autorización de la transacción.
 - media_image: /zero-dollar-auth/credit-card.png
---

> WARNING
>
> Importante
>
> Es importante destacar que no se recomienda el uso de procedimientos de validación de pagos seguidos de devoluciones inmediatas como práctica estándar. Tales acciones, especialmente cuando se realizan en volúmenes elevados, pueden resultar en penalizaciones por parte de las operadoras de tarjetas de crédito.

Esta validación se realiza a través de la API y utiliza el token de la tarjeta de crédito del cliente. Después de la solicitud y tras recibir una respuesta positiva, se podrá asociar la tarjeta al cliente para generar pagos en el futuro.

A continuación, compartimos el flujo que ilustra cómo funciona la validación Zero Dollar Auth.

![Flujo de funcionamiento para la validación de Zero Dollar Auth](/zero-dollar-auth/Fluxo_ZDA_ES_Final.png)

