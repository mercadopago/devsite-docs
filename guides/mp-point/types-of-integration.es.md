# Tipos de integración

Es posible usar Point de dos maneras:

* **Sin integración:** En este modelo, el vendedor ingresa manualmente los datos de pago y luego inserta la tarjeta del comprador en la máquina Point. Luego de estos pasos, el vendedor seguirá los siguientes pasos en base a las instrucciones que se muestran en la app de Mercado Pago. Para ofrecer pagos con Point sin integración, consulte la sección [Cómo usar Point sin integración](/developers/es/docs/mp-point/how-tos/how-to-use-point-without-integration).<br><br>
* **Integrado:** En este modelo, el vendedor tiene 4 tipos diferentes de integración que variarán según las necesidades del negocio y el conocimiento técnico del integrador. Consulte la siguiente tabla para obtener detalles sobre cada tipo de integración disponible y elija la más adecuada para su modelo de negocio.

----[mla]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El deep linking es una forma de integración que se realiza a partir de un link generado por Mercado Pago que incluye todos los datos de facturación (nombre del comprador/monto/medio de pago). Una vez que se llama a este link, el comprador es redirigido a una página de Mercado Pago para ingresar los detalles del pago y completar la transacción. Consulte la sección [Integrar via Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Mini |
| Vía API | En este método, todo el proceso de integración se realiza a través de las API de Point. Consulte [Integrar via API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Mini |
| API para PDVs | La API de integraciones de Point le permite conectar sus puntos de venta (PDV) al ecosistema de Point para recibir pagos en terminales pre configuradas, lo que garantiza una experiencia de pago unificada. Consulte [Integrar con PDV](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) para obtener más información. | Point Plus |

------------

----[mlb]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El deep linking es una forma de integración que se realiza a partir de un link generado por Mercado Pago que incluye todos los datos de facturación (nombre del comprador/monto/medio de pago). Una vez que se llama a este link, el comprador es redirigido a una página de Mercado Pago para ingresar los detalles del pago y completar la transacción. Consulte la sección [Integrar vía Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Mini NFC 1 |
| Vía API | En este método, todo el proceso de integración se realiza a través de las APIs de Point. Consulte [Integrar vía API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Mini NFC 1 |
| API para PDVs | La API de integraciones de Point le permite conectar sus puntos de venta (PDV) al ecosistema de Point para recibir pagos en terminales pre configuradas, lo que garantiza una experiencia de pago unificada. Consulte [Integrar con PDV](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) para obtener más información. | Point Pro 2  |

------------

----[mlm]----

| Tipo de integración | Descripción | Dispositivos |
| --- | --- | --- |
| Deep linking | El deep linking es una forma de integración que se realiza a partir de un link generado por Mercado Pago que incluye todos los datos de facturación (nombre del comprador/monto/medio de pago). Una vez que se llama a este link, el comprador es redirigido a una página de Mercado Pago para ingresar los detalles del pago y completar la transacción. Consulte la sección [Integrar vía Deep Linking](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) para obtener más información. | Point Blue|
| Vía API | En este método, todo el proceso de integración se realiza a través de las APIs de Point. Consulte [Integrar vía API](/developers/es/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) para obtener más información. | Point Blue |

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