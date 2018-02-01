# Productos

Las productos ofrecidos por Mercado Pago pueden variar según cada país.

## Disponibilidad por país

### Pagos:

|     Producto    | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :-------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Botón de cobro  | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| Web Payment Checkout    | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| Mobile Checkout | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |     | ✔   |
| API             | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |

### Suscripciones:

|    Producto    | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Botón de cobro | ✔   | ✔   |     |     | ✔   |     |     |     |
| Web Payment Checkout   | ✔   | ✔   |     |     | ✔   |     |     |     |
| API            | ✔   | ✔   |     |     | ✔   |     |     |     |

### Marketplace:

|   Producto   | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :----------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Web Payment Checkout | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| API          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |


## Funcionalidades de API por país

A continuación un listado de funcionalidades específicas de nuestra API por país:

|      Funcionalidad      |                  ARG                   | BRA | CHL | COL | MEX | PER | URY | VEN |
| :---------------------- | :------------------------------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Autorización y captura  | ✔                                      | ✔   |     |     |     | ✔   |     |     |
| Captura por monto menor | ✔                                      | ✔   |     |     |     |     |     |     |
| Reembolsos              | ✔                                      | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |     |
| Reembolsos parciales    | ✔                                      | ✔   | ✔   |     | ✔   |     |     |     |
| Pagos sin CVV           | ✔                                      | ✔   |     |     | ✔   |     |     |     |
| Soft descriptor         | ✔ (Solo MasterCard y American Express) | ✔   |     |     |     |     |     | ✔   |



## Medios de pago no disponibles

Puede suceder que determinados [medios de pago](/guides/localization/payment-methods.es.md) no estén disponibles en algunos productos. A continuación se indica en detalle que medios de pago no están disponibles por producto, por país.

### Argentina

|    Producto   |     Solución    |                                                                            Medios de pago no disponibles                                                                            |
| :------------ | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pagos         | Botón de pago   | N/A                                                                                                                                                                                 |
| Pagos         | Web Payment Checkout    | N/A                                                                                                                                                                                 |
| Pagos         | Mobile Checkout | `account_money`                                                                                                                                                                     |
| Pagos         | API             | N/A                                                                                                                                                                                 |
| Suscripciones | Botón de pago   | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink` |
Suscripciones | Web Payment Checkout    | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`|
Suscripciones | API             | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`|
| Marketplace | Web Payment Checkout | N/A |
| Marketplace | API          | N/A |

### Brasil

|    Producto   |     Solución    | Medios de pago no disponibles |
| :------------ | :-------------- | :---------------------------- |
| Pagos         | Botón de pago   | N/A                           |
| Pagos         | Web Payment Checkout    | N/A                           |
| Pagos         | Mobile Checkout | `account_money`               |
| Pagos         | API             | N/A                           |
| Suscripciones | Botón de pago   | `bolbradesco`, `giftcard`     |
| Suscripciones | Checkout        | `bolbradesco`, `giftcard`     |
| Suscripciones | API             | `bolbradesco`, `giftcard`     |
| Marketplace   | Web Payment Checkout    | N/A                           |
| Marketplace   | API             | N/A                           |

### Chile

|   Producto  |     Solución    |        Medios de pago no disponibles        |
| :---------- | :-------------- | :------------------------------------------ |
| Pagos       | Botón de pago   | N/A                                         |
| Pagos       | Web Payment Checkout    | N/A                                         |
| Pagos       | Mobile Checkout | `account_money`,`khipu`,`servipag`,`webpay` |
| Pagos       | API             | `khipu`                                     |
| Marketplace | Web Payment Checkout    | N/A                                         |
| Marketplace | API             | `khipu`                                     |

### Colombia

|   Producto  |     Solución    |        Medios de pago no disponibles        |
| :---------- | :-------------- | :------------------------------------------ |
| Pagos       | Botón de pago   | N/A                                         |
| Pagos       | Web Payment Checkout    | N/A                                         |
| Pagos       | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagos       | API             | `account_money`                             |
| Marketplace | Web Payment Checkout    | N/A                                         |
| Marketplace | API             | `account_money`                             |

### México

|    Producto   |     Solución    |                         Medios de pago no disponibles                         |
| :------------ | :-------------- | :---------------------------------------------------------------------------- |
| Pagos         | Botón de pago   | N/A                                                                           |
| Pagos         | Web Payment Checkout    | N/A                                                                           |
| Pagos         | Mobile Checkout | `account_money`                                                               |
| Pagos         | API             | N/A                                                                           |
| Suscripciones | Botón de pago   | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | Web Payment Checkout    | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Suscripciones | API             | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace   | Web Payment Checkout    | N/A                                                                           |
| Marketplace   | API             | N/A                                                                           |

### Perú

|   Producto  |     Solución    | Medios de pago no disponibles |
| :---------- | :-------------- | :---------------------------- |
| Pagos       | Botón de pago   | N/A                           |
| Pagos       | Web Payment Checkout    | N/A                           |
| Pagos       | Mobile Checkout | `account_money`               |
| Pagos       | API             | N/A                           |
| Marketplace | Web Payment Checkout    | N/A                           |
| Marketplace | API             | N/A                           |

### Uruguay

|   Producto  |    Solución   | Medios de pago no disponibles |
| :---------- | :------------ | :---------------------------- |
| Pagos       | Botón de pago | N/A                           |
| Pagos       | Web Payment Checkout  | N/A                           |
| Marketplace | Web Payment Checkout  | N/A                           |

### Venezuela

|   Producto  |     Solución    |           Medios de pago no disponibles            |
| :---------- | :-------------- | :------------------------------------------------- |
| Pagos       | Botón de pago   | N/A                                                |
| Pagos       | Web Payment Checkout    | N/A                                                |
| Pagos       | Mobile Checkout | `account_money`,`banesco`,`mercantil`,`provincial` |
| Pagos       | API             | N/A                                                |
| Marketplace | Web Payment Checkout    | N/A                                                |
| Marketplace | API             | N/A                                                |
