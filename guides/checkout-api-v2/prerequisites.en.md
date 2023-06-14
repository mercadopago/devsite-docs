# Prerequisites

To integrate Checkout API, it is important to meet the requirements shown below.


| Requirement | Description |
| --- | --- |
| Application | Applications are the different integrations in one or more stores. You can create an application for each solution you implement to keep everything organized and on track for easier management. Check [Dashboard](/developers/en/docs/checkout-api/additional-content/your-integrations/introduction) for more information on how to create an application. |
| Credentials | Credentials are unique keys that we provide for you to configure your integrations. You will need a pair of test credentials to test the integration and a pair of production credentials to receive actual payments. See [Credentials](/developers/en/docs/checkout-api/additional-content/credentials) for more information. |
| MercadoPago.js | MercadoPago.js allows you to manage card data to comply with the necessary security requirements and avoid sending sensitive data to its servers. For this, our library generates a token that represents this information and allows you to operate safely. See [SDKs](/developers/en/docs/sdks-library/client-side/mp-js-v2) to access MercadoPago.js. |
----[mlb]---- | Pix Key | If you want to offer payments via Pix, you must have your keys registered. If you haven't already, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) for more information on how to register them. | ------------


If all the prerequisites have been met, you can perform the Checkout API integration.

