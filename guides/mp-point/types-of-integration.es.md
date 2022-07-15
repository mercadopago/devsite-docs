# Tipos de integración

Es posible usar Point de dos maneras:

* **Sin integración:** En este modelo, el vendedor ingresa manualmente los datos de pago y luego inserta la tarjeta del comprador en la máquina Point. Luego de estos pasos, el vendedor seguirá los siguientes pasos en base a las instrucciones que se muestran en la app de Mercado Pago. Para ofrecer pagos con Point sin integración, consulte la sección [Cómo usar Point sin integración](/developers/es/docs/mp-point/how-tos/how-to-use-point-without-integration).<br><br>
* **Integrado:** En este modelo, el vendedor tiene 4 tipos diferentes de integración que variarán según las necesidades del negocio y el conocimiento técnico del integrador. Consulte la siguiente tabla para obtener detalles sobre cada tipo de integración disponible y elija la más adecuada para su modelo de negocio.

----[mla]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El Deep Linking la forma cómo Android genera una solicitud o evento en una aplicación nativa cuando se invoca un URI web, en este caso para abrir el flujo de cobro de point en Mercado Pago. Se puede usar desde una web page, app no nativa, o desde se puede establecer un link a una URL como en un sms o mensaje. Adicionalmente, también se puede implementar desde una app nativa este tipo de integración.
Consulte la sección [Integrar via Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Mini |
| Vía API | Como su nombre lo indica es cuando se consumen las  interfaces de un servicio alojado en un servidor para habilitar el modo integrador, crear, consultar, eliminar  órdenes para ejecutar por el flujo de cobro en Mercado Pago. Estas órdenes son recibidas en la app de MP por medio de notificaciones push y esto abre el flujo de cobro point. Consulte [Integrar via API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Mini |
| API para PDVs | La API de integraciones de Point le permite conectar sus puntos de venta (PDV) al ecosistema de Point para recibir pagos en terminales pre configuradas, lo que garantiza una experiencia de pago unificada. Consulte [Integrar con PDV](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) para obtener más información. | Point Plus |

------------

----[mlb]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El Deep Linking la forma cómo Android genera una solicitud o evento en una aplicación nativa cuando se invoca un URI web, en este caso para abrir el flujo de cobro de point en Mercado Pago. Se puede usar desde una web page, app no nativa, o desde se puede establecer un link a una URL como en un sms o mensaje. Consulte la sección [Integrar vía Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Mini NFC 1 |
| Vía API | Como su nombre lo indica es cuando se consumen las  interfaces de un servicio alojado en un servidor para habilitar el modo integrador, crear, consultar, eliminar  órdenes para ejecutar por el flujo de cobro en Mercado Pago. Estas órdenes son recibidas en la app de MP por medio de notificaciones push y esto abre el flujo de cobro point. Consulte [Integrar vía API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Mini NFC 1 |
| API para PDVs | La API de integraciones de Point le permite conectar sus puntos de venta (PDV) al ecosistema de Point para recibir pagos en terminales pre configuradas, lo que garantiza una experiencia de pago unificada. Consulte [Integrar con PDV](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) para obtener más información. | Point Pro 2  |

------------

----[mlm]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El Deep Linking la forma cómo Android genera una solicitud o evento en una aplicación nativa cuando se invoca un URI web, en este caso para abrir el flujo de cobro de point en Mercado Pago. Se puede usar desde una web page, app no nativa, o desde se puede establecer un link a una URL como en un sms o mensaje. Consulte la sección [Integrar vía Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Blue|
| Vía API | Como su nombre lo indica es cuando se consumen las  interfaces de un servicio alojado en un servidor para habilitar el modo integrador, crear, consultar, eliminar  órdenes para ejecutar por el flujo de cobro en Mercado Pago. Estas órdenes son recibidas en la app de MP por medio de notificaciones push y esto abre el flujo de cobro point. Consulte [Integrar vía API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Blue |

------------

> PREV_STEP_CARD_ES
>
> Requisitos previos
>
> Conoce los requisitos previos para integrarte con Mercado Pago Point.
>
> [Requisitos previos](/developers/es/docs/mp-point/prerequisites)


> NEXT_STEP_CARD_ES
>
> Configuración de la integración
>
> Aprende a integrar Mercado Pago Point en tu PDV
>
> [Integrar con PDV](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction)