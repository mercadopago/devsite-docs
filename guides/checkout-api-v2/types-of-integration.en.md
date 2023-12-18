# Types of integration

The integration with Checkout API can be done by using different procedures that vary according to technical knowledge and business needs. See the table below for details on each of the available options.

----[mlb]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, the Caixa virtual debit card, Pix, boleto, payment in lottery, Mercado Pago Wallet and Installment payment without a card. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

------------

----[mla]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit, Pago Fácil, Rapipago, Mercado Pago Wallet and Installment payment without a card. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

------------

----[mlm]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit, Mercado Pago Wallet, Installment payment without a card, Cash and ATM. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

----[mpe]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit, Mercado Pago Wallet and ATM. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

----[mco]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit, Mercado Pago Wallet, Efecty and PSE. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

----[mlu]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit, Mercado Pago Wallet, Abitab and Redpagos. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

----[mlc]---- 
| Integration type | Payment methods | Frontend complexity | User Interface (UI) |
| --- | --- | --- | --- |
| [Checkout Bricks](/developers/en/docs/checkout-bricks/landing) | Credit, debit and Mercado Pago Wallet. See more details in our documentation [Available payment methods](/developers/en/docs/sales-processing/payment-methods). | Easy | Components with UI already defined and that can be customized if necessary. |
| [Cardform](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-cardform) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | Medium | Form without styling so it is possible to start the settings from scratch. |
| [Core Methods](/developers/en/docs/checkout-api/integration-configuration/card/integrate-via-core-methods) | [All available methods](/developers/en/docs/sales-processing/payment-methods). | High | Create your form and styling |

------------

The three types of integration mentioned above are eligible for **PCI SAQ A certification**. This is because **card data**, **CVV** and **expiration date** travel through an iframe directly to Mercado Pago servers, which prevent PCI data (card number, security code and expiration date) from being accessible to third parties.

In addition to the payment methods shown in the table above, it is also possible to offer other payment methods. For a detailed list of all available options for integration, send a **GET** to the endpoint [/v1/payment_methods](/developers/en/reference/payment_methods/_payment_methods/get) and execute the request. In the answer you will have access to each of the options.

