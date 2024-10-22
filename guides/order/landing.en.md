---
content_section_with_media: 
 - title: Order
 - message: Order is an API designed to simplify the integration of Mercado Pago's payment products, allowing developers to access various payment solutions through a single integration. This unified API encompasses all payment methods offered by the platform, including QR Code payments, Point devices, and online payments.
 - media_image: /order/landing-1.png
---

--- mini_landing_separator ---

>>>> Integration models <<<<

---
future_product_avaible:
 - card_avaible: true
 - card_icon: Card
 - card_title: Online payments
 - card_description: Build the payment processor for your website. You control the entire experience, from basic to advanced settings.
 - card_button: /developers/en/docs/order/online-payments/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
 - card_linkAvailable: true
 - card_avaible: true
 - card_icon: User
 - card_title: In-store payments
 - card_description: XXX
 - card_button: /developers/en/docs/order/in-store-payments/introduction
 - card_buttonDescription: Learn more
 - card_pillText: AVAILABLE
 - card_linkAvailable: false
 - card_linkProof:
 - card_linkProofDescription:
---

--- mini_landing_separator ---

>>>> Availability by country <<<<
---
available_countries: mla, mlb, mlm

---

---
bullet_section_with_media: 
 - title: Advantages
 - type: normal
 - message: By centralizing these options into a single access point, implementation for integrators is easier, enabling them to offer multiple payment experiences without the need to work with several separate APIs. Check the table below for the main differences between the new Order API and the old Payments API.
 - image: /order/landing-2.png
---

| Functionality | Payments API | Order API |
| --- | --- |--- |
| Mode | Automatic | Automatic and manual |
| Operations | Payments | [Payments](/developers/en/docs/order/online-payments/introduction) and [In-store][In-store](/developers/en/docs/order/in-store-payments/introduction) (QR and Point)|
| Multiple transactions | Not supported | Supported |
| Sending metadata | Allowed | Not allowed |
| Sending Notification URL | Allows in the payload. | Does not allow in the payload and must be configured in the [Developer panel > Application details](/developers/en/docs/order/additional-content/your-integrations/application-details). |
| Validations with complete error responses | Validates one error at a time. | Returns a list of all errors. |
| Return of PII data | Returns in some scenarios (e.g., approved). | Does not return in any scenario. |

--- mini_landing_separator ---

>>>> Accepted payment types <<<<

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