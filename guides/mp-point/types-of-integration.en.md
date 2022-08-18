# Types of integration

It is possible to use Point in two ways:

* **Without integration:** In this model, the seller manually enters the payment data and then inserts the buyer's card in the Point machine. After these steps, the seller will follow the next steps based on the instructions displayed in the Mercado Pago app. To offer Point payments without the need of an integration, see the section [How to use Point without integration](/developers/en/docs/mp-point/how-tos/how-to-use-point-without-integration). <br><br>
* **Integrated:** In this model, the seller has 4 different types of integration that will vary according to the business needs and technical knowledge of the integrator. See the table below for details on each type of integration available and choose the most appropriate one for your business model.

----[mla]----

| Integration type | Description | Devices |
| --- | --- | --- |
| Deep linking | Deep Linking is the way Android devices generate a request or event in a native application by invoking a Web URI. In this case, to open the payment flow in Mercado Pago. <br><br> Deep Link can be used from a web page, non-native application or via a link in sms or messages. Furthermore, this type of integration can also be implemented from a native application. See the section [Integrate via Deep linking](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) for more information. | Point Mini |
| Via API | Integration via API is when the interfaces of a service hosted on a server are consumed to enable the integrator mode, that is, create, query and delete orders to be executed by the payment flow on Mercado Pago. <br><br> These orders are received in the Mercado Pago app through push notifications, opening the Point billing flow. See [Integrate via API](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) for more information. | Point Mini |
| API for POS | The Point integrations API allows you to connect your points of sale (POS) to the Point ecosystem to receive payments on pre-configured terminals, ensuring a unified payment experience. See [Integrate with POS](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) for more information. | Point Plus <br><br> Point Smart |

------------

----[mlb]----

| Integration type | Description | Devices |
| --- | --- | --- |
| Deep linking | Deep Linking is the way Android devices generate a request or event in a native application by invoking a Web URI. In this case, to open the payment flow in Mercado Pago. <br><br> Deep Link can be used from a web page, non-native application or via a link in sms or messages. Furthermore, this type of integration can also be implemented from a native application. See the section [Integrate via Deep linking](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) for more information. | Point Mini NFC 1 |
| Via API | Integration via API is when the interfaces of a service hosted on a server are consumed to enable the integrator mode, that is, create, query and delete orders to be executed by the payment flow on Mercado Pago. <br><br> These orders are received in the Mercado Pago app through push notifications, opening the Point billing flow. See [Integrate via API](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) for more information. | Point Mini NFC 1 |
| API for POS | The Point integrations API allows you to connect your points of sale (POS) to the Point ecosystem to receive payments on pre-configured terminals, ensuring a unified payment experience. See [Integrate with POS](/developers/en/docs/mp-point/integration-configuration/integrate-with-pdv/introduction) | Point Pro 2 |

------------

----[mlm]----

| Integration type | Description | Devices |
| --- | --- | --- |
| Deep linking | Deep Linking is the way Android devices generate a request or event in a native application by invoking a Web URI. In this case, to open the payment flow in Mercado Pago. <br><br> Deep Link can be used from a web page, non-native application or via a link in sms or messages. Furthermore, this type of integration can also be implemented from a native application. See the section [Integrate via Deep linking](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-deep-linking) for more information. | Point Blue |
| Via API | Integration via API is when the interfaces of a service hosted on a server are consumed to enable the integrator mode, that is, create, query and delete orders to be executed by the payment flow on Mercado Pago. <br><br> These orders are received in the Mercado Pago app through push notifications, opening the Point billing flow. See [Integrate via API](/developers/en/docs/mp-point/integration-configuration/integrate-mobile-devices/integrate-via-api) for more information. | Point Blue |

------------