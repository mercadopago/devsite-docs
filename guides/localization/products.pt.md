# Produtos

Os produtos oferecidos pelo MercadoPago podem variar de acordo com cada país.

## Disponibilidade por país

### Pagamentos:

|     Produto     | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :-------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Botón de cobro  | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| Web Checkout    | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| Mobile Checkout | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |     | ✔   |
| API             | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |     | ✔   |

### Assinaturas:

|    Produto     | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Botón de cobro | ✔   | ✔   |     |     | ✔   |     |     |     |
| Web Checkout   | ✔   | ✔   |     |     | ✔   |     |     |     |
| API            | ✔   | ✔   |     |     | ✔   |     |     |     |

### Marketplace:

|   Produto    | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :----------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Web Checkout | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |
| API          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔   |     | ✔   |


## Funcionalidades de API por país

A continuación un listado de funcionalidades especificas de nuestra API por país:

|      Funcionalidad      |                  ARG                   | BRA | CHL | COL | MEX | PER | URY | VEN |
| :---------------------- | :------------------------------------- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| Autorización y captura  | ✔                                      | ✔   |     |     |     | ✔   |     |     |
| Captura por monto menor | ✔                                      | ✔   |     |     |     |     |     |     |
| Reembolsos              | ✔                                      | ✔   | ✔   | ✔   | ✔   | ✔   |     |     |
| Reembolsos parciales    | ✔                                      | ✔   | ✔   |     | ✔   |     |     |     |
| Pagamentos sin CVV           | ✔                                      | ✔   |     |     | ✔   |     |     |     |
| Soft descriptor         | ✔ (Solo MasterCard y American Express) | ✔   |     |     |     |     |     | ✔   |



## Meios de pagamento não disponíveis

Pode ser que alguns [meios de pagamento](payment-methods.pt.md) não estejam disponíveis para alguns produtos. Abaixo estão detalhados quais meios de pagamento não estão disponíveis por produto e por país.

### Argentina

|    Produto    |     Solução     |                                                                            Meios de pagamento não disponíveis                                                                       |
| :------------ | :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pagamentos         | Botão de pagamento   | N/A                                                                                                                                                                                 |
| Pagamentos         | Web Checkout    | N/A                                                                                                                                                                                 |
| Pagamentos         | Mobile Checkout | `account_money`                                                                                                                                                                     |
| Pagamentos         | API             | N/A                                                                                                                                                                                 |
| Assinaturas | Botão de pagamento   | `diners`, `naranja`, `nativa`, `shopping`, `cencosud`, `argencard`, `debvisa`, `debmaster`, `maestro`, `debcabal`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink` |
Assinaturas | Web Checkout    | `diners`, `naranja`, `nativa`, `shopping`, `cencosud`, `argencard`, `debvisa`, `debmaster`, `maestro`, `debcabal`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`|
Assinaturas | API             | `diners`, `naranja`, `nativa`, `shopping`, `cencosud`, `argencard`, `debvisa`, `debmaster`, `maestro`, `debcabal`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`|
| Marketplace | Web Checkout | N/A |
| Marketplace | API          | N/A |

### Brasil

|    Produto    |     Solução     | Medios de pago no disponibles |
| :------------ | :-------------- | :---------------------------- |
| Pagamentos         | Botão de pagamento   | N/A                           |
| Pagamentos         | Web Checkout    | N/A                           |
| Pagamentos         | Mobile Checkout | `account_money`,`bolbradesco` |
| Pagamentos         | API             | N/A                           |
| Assinaturas | Botão de pagamento   | `bolbradesco`, `giftcard`     |
| Assinaturas | Checkout        | `bolbradesco`, `giftcard`     |
| Assinaturas | API             | `bolbradesco`, `giftcard`     |
| Marketplace   | Web Checkout    | N/A                           |
| Marketplace   | API             | N/A                           |

### Chile

|   Produto   |     Solução     |        Meios de pagamento não disponíveis   |
| :---------- | :-------------- | :------------------------------------------ |
| Pagamentos       | Botão de pagamento   | N/A                                         |
| Pagamentos       | Web Checkout    | N/A                                         |
| Pagamentos       | Mobile Checkout | `account_money`,`khipu`,`servipag`,`webpay` |
| Pagamentos       | API             | `khipu`                                     |
| Marketplace | Web Checkout    | N/A                                         |
| Marketplace | API             | `khipu`                                     |

### Colômbia

|   Produto   |     Solução     |        Meios de pagamento não disponíveis   |
| :---------- | :-------------- | :------------------------------------------ |
| Pagamentos       | Botão de pagamento   | N/A                                         |
| Pagamentos       | Web Checkout    | `davivienda`                                |
| Pagamentos       | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagamentos       | API             | `pse`                                       |
| Marketplace | Web Checkout    | `davivienda`                                |
| Marketplace | API             | `pse`                                       |

### México

|    Produto    |     Solução     |                         Meios de pagamento não disponíveis                    |
| :------------ | :-------------- | :---------------------------------------------------------------------------- |
| Pagamentos         | Botão de pagamento   | N/A                                                                           |
| Pagamentos         | Web Checkout    | N/A                                                                           |
| Pagamentos         | Mobile Checkout | `account_money`                                                               |
| Pagamentos         | API             | N/A                                                                           |
| Assinaturas | Botão de pagamento   | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | Web Checkout    | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | API             | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace   | Web Checkout    | N/A                                                                           |
| Marketplace   | API             | N/A                                                                           |

### Peru

|   Produto   |     Solução     | Medios de pago no disponibles |
| :---------- | :-------------- | :---------------------------- |
| Pagamentos       | Botão de pagamento   | N/A                           |
| Pagamentos       | Web Checkout    | N/A                           |
| Pagamentos       | Mobile Checkout | `account_money`               |
| Pagamentos       | API             | N/A                           |
| Marketplace | Web Checkout    | N/A                           |
| Marketplace | API             | N/A                           |

### Uruguai

|   Produto   |    Solução    | Medios de pago no disponibles |
| :---------- | :------------ | :---------------------------- |
| Pagamentos       | Botão de pagamento | N/A                           |
| Pagamentos       | Web Checkout  | N/A                           |
| Marketplace | Web Checkout  | N/A                           |

### Venezuela

|   Produto   |     Solução     |           Meios de pagamento não disponíveis       |
| :---------- | :-------------- | :------------------------------------------------- |
| Pagamentos       | Botão de pagamento   | N/A                                                |
| Pagamentos       | Web Checkout    | N/A                                                |
| Pagamentos       | Mobile Checkout | `account_money`,`banesco`,`mercantil`,`provincial` |
| Pagamentos       | API             | N/A                                                |
| Marketplace | Web Checkout    | N/A                                                |
| Marketplace | API             | N/A                                                |
