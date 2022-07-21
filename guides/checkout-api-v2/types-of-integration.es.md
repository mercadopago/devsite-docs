# Tipos de integración

La integración con Checkout API se puede realizar mediante diferentes procedimientos que varían en función de los conocimientos técnicos y las necesidades de negocio. La siguiente tabla detalla cada una de las opciones disponibles.


| Tipo de integración  | Medios de pago  | Complejidad a nível front-end | User interface (UI)  | 
| --- | --- | --- | --- | 
| [Checkout Bricks](/developers/es/docs/checkout-bricks/landing)  | Débito y Crédito  | Fácil | Componentes con UI predefinida y que puede ser personalizada si es necesario.  | 
| [Cardform](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-cardform)  | Todos los medios disponibles | Medio | Formulario sin opciones de estilización para empezar la configuración desde cero.  |
| [Métodos Core](/developers/es/docs/checkout-api/integration-configuration/card/integrate-via-core-methods)  | Todos los medios disponibles | Alto | Crea tu formulario y su estilización  | 

Los tres tipos de integración mencionados anteriormente son elegibles para la **certificación PCI SAQ A**. Esto se debe a que los **datos de la tarjeta**, **CVV** y **fecha de vencimiento** viajan a través de un iframe directamente a los servidores de Mercado Pago, lo que evita que los datos PCI (número de tarjeta, código de seguridad y fecha de vencimiento) sean accesible a terceros.

> NOTE
>
> Importante
> 
> Para ser elegible para PCI SAQ A, es necesario que su integración se realice mediante Secure Fields (campos de tarjeta en formato Iframe).


Además de los medios de pago que se muestran en la tabla anterior, también es posible ofrecer otros métodos de pago. Para obtener una lista detallada de todas las opciones disponibles para la integración, envíe un **GET** al punto final [/v1/payment_methods](/developers/es/reference/payment_methods/_payment_methods/get) y ejecute la solicitud. En la respuesta tendrás acceso a cada una de las opciones.

> NEXT_STEP_CARD_ES
>
> Requisitos previos
>
> Consulta los requisitos previos que se necesitan para integrar Checkout API.
>
> [Requisitos previos](/developers/es/docs/checkout-api/prerequisites)
