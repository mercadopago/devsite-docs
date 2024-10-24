---
content_section_with_media: 
 - title: Order
 - message: Order es una API diseñada para simplificar la integración de los productos de pago de Mercado Pago, que permite que los desarrolladores accedan a diversas soluciones de pago mediante una única integración. Esta API unificada abarca todos los métodos de pago ofrecidos por la plataforma, incluyendo pagos con Código QR, dispositivos Point y pagos online.
 - media_image: /order/landing-1.png
---

--- mini_landing_separator ---

>>>> Modelos de integración <<<<

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Pagos online
 - card_description: Construye el procesador de pagos para tu sitio web. Tú controlas toda la experiencia, desde configuraciones básicas hasta avanzadas.
 - card_button: /developers/es/docs/order/online-payments/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
 - card_avaible: true
 - card_icon: User
 - card_title: Pagos presenciales
 - card_description: XXX
 - card_button: /developers/es/docs/order/in-store-payments/introduction
 - card_buttonDescription: Saber más
 - card_pillText: DISPONIBLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

--- mini_landing_separator ---

>>>> Disponibilidad por país <<<<
---
available_countries: mla, mlb, mlm

---

---
bullet_section_with_media: 
 - title: Ventajas
 - type: normal
 - message: Al centralizar estas opciones en un solo punto de acceso, se facilita la implementación para los integradores, quienes pueden ofrecer múltiples experiencias de pago sin la necesidad de trabajar con varias APIs separadas. Ve en la tabla a continuación las principales diferencias entre la nueva API de Order y la antigua API de Pagos.
 - image: /order/landing-2.png
---

| Funcionalidad | API de Pagos | API de Order |
| --- | --- |--- |
| Modo | Automático | Automático y manual |
| Operaciones | Payments | [Payments](/developers/es/docs/order/online-payments/introduction) e [In-store](/developers/es/docs/order/in-store-payments/introduction) (QR y Point)|
| Múltiples transacciones | No tiene | Tiene |
| Envío de metadatos | Permite | No permite |
| Envío de Notification URL | Permite en el _payload_ | No permite en el _payload_ y debe ser configurado en el [Panel del desarrollador > Detalles de la aplicación](/developers/es/docs/order/additional-content/your-integrations/application-details). |
| Validaciones con respuestas de errores completas | Valida un error a la vez. | Retorna una lista con todos los errores. |
| Retorno de datos PII | Retorna en algunos escenarios (ej: aprobado). | No retorna en ningún escenario. | 

--- mini_landing_separator ---

>>>> Tipos de pago aceptados <<<<

----[mlb]----

---
available_payments: credit, debit

---
------------
----[mla]---- 

---
available_payments: credit, debit

----
------------
----[mlm]---- 

---
available_payments: credit, debit

----

------------