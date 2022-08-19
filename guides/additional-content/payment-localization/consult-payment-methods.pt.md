# Disponibilidade dos produtos e meios de pagamento

Os produtos e seus meios de pagamento oferecidos pelo Mercado Pago variam de acordo com cada país. Veja abaixo como consultar todos os meios de pagamento que estão disponíveis e, a partir disso, quais estarão ou não disponíveis por produto e por país.

# Consultar meios de pagamento

Para consultar todas os meios de pagamento disponíveis e obter uma lista com os detalhes de cada uma delas e suas propriedades, realize um GET ao endpoint[/v1/payment_methods](/developers/pt/reference/payment_methods/_payment_methods/get). Você poderá obter mais informações sobre os atributos em [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get) nas referências da API.

Ao consultar os meios de pagamento disponíveis, no `response` serão indicados os resultados que coincidirão com o país associado à sua conta Mercado Pago.

# Produtos e meios de pagamentos disponíveis por país
 
See below which are the **products available by country** and, from that, which **means of payment will or will not be available by product and by country**.
 
## Pagamentos:
 
----[mlb]----
| Produto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pagamento | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Checkout Pro | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Mobile Checkout | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | | ✔ |
| Chackout Transparente | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pagamento | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Checkout Pro | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Mobile Checkout | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | | ✔ |
| Chackout API | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |

------------
 
## Assinaturas:
 
----[mlb]----
| Produto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pagamento | ✔ | ✔ | | | ✔ | | | |
| Checkout Pro | ✔ | ✔ | | | ✔ | | | |
| Checkout Transparente | ✔ | ✔ | | | ✔ | | | |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | ARG | BRA | CHL | COL | MEX | PER | URY | VEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Link de pagamento | ✔ | ✔ | | | ✔ | | | |
| Checkout Pro | ✔ | ✔ | | | ✔ | | | |
| Checkout API | ✔ | ✔ | | | ✔ | | | |

------------
 
A partir das informações anteriores, abaixo estão detalhados quais meios de pagamento estão e não estão disponíveis por país.
 
## Argentina
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Tarjeta Naranja | `credit_card` | `naranja` |
| Tarjeta Nativa | `credit_card` | `nativa` |
| Tarjeta Shopping | `credit_card` | `shopping` |
| Tarjeta Cencosud | `credit_card` | `cencosud` |
| Tarjeta CMR MasterCard | `credit_card` | `cmr_master` |
| Argencard | `credit_card` | `argencard` |
| Cordial | `credit_card` | `cordial` |
| Cordobesa | `credit_card` | `cordobesa` |
| Cabal | `credit_card` | `cabal` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Maestro | `debit_card` | `maestro` |
| Cabal Débito | `debit_card` | `debcabal` |
| Pago Fácil | `ticket` | `pagofacil` |
| RapiPago | `ticket` | `rapipago` |
| Carga Virtual | `ticket` | `cargavirtual` |
| Cobro Express | `ticket` | `cobroexpress` |
| Red Link | `atm` | `redlink` |
| Dinheiro em conta | `account_money` | `account_money` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout Transparente | N/A |
| Assinaturas | Link de pagamento | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress` |
Assinaturas | Checkout Pro |`naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
Assinaturas | Checkout Transparente | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout API | N/A |
| Assinaturas | Link de pagamento | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress` |
Assinaturas | Checkout Pro |`naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
Assinaturas | Checkout API | `naranja`, `nativa`, `shopping`, `debvisa`, `debmaster`, `maestro`, `pagofacil`, `rapipago`, `bapropagos`, `cargavirtual`, `redlink`, `cobroexpress`|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |

------------
 
## Brasil
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento. | ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Hipercard | `credit_card` | `hipercard` |
| Diners Club International | `credit_card` | `diners` |
| Elo | `credit_card` | `elo` |
| Cartão Mercado Livre | `credit_card` | `melicard` |
| Boleto Bancário | `ticket` | `bolbradesco` |
| Dinheiro em conta | `account_money` | `account_money` |
| Giftcard | `digital_currency` | `giftcard` |
| Pagamento na Lotérica | `ticket`| `pec` |
| Paypal | `digital_wallet` | `paypal` |
| Pix | `bank_transfer` | `pix` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money`, `pix` |
| Pagamentos | Checkout Transparente | N/A |
| Assinaturas | Link de pagamento | `bolbradesco`, `giftcard`, `pix` |
| Assinaturas | Checkout Pro | `bolbradesco`, `giftcard`, `pix` |
| Assinaturas | Checkout Transparente | `bolbradesco`, `giftcard`, `pix` |
| Marketplace | Checkout Pro | `pix` |
| Marketplace | Checkout Transparente | `pix` |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money`, `pix` |
| Pagamentos | Checkout API | `pix` |
| Assinaturas | Link de pagamento | `bolbradesco`, `giftcard`, `pix`  |
| Assinaturas | Checkout Pro | `bolbradesco`, `giftcard`, `pix`  |
| Assinaturas | Checkout API | `bolbradesco`, `giftcard`, `pix`  |
| Marketplace | Checkout Pro | `pix` |
| Marketplace | Checkout API | `pix` |

------------
 
## Chile
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Tarjeta CMR | `credit_card` | `cmr` |
| Tarjeta Magna | `credit_card` | `magna` |
| Tarjeta Presto | `credit_card` | `presto` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Redcompra | `debit_card` | `redcompra` |
| Dinheiro em conta | `account_money` | `account_money` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout Transparente | N/A|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money`|
| Pagamentos | Checkout API | N/A|
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |

------------
 
## Colômbia
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Diners Club International | `credit_card` | `diners` |
| Crédito Fácil Codensa | `credit_card` | `codensa` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Efecty | `ticket` | `efecty` |
| PSE | `bank_transfer` | `pse` |
| Dinheiro em conta | `account_money` | `account_money` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagamentos | Checkout Transparente | `account_money` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | `account_money` |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money`,`davivienda`,`efecty`,`pse` |
| Pagamentos | Checkout API | `account_money` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | `account_money` |

------------
 
## México
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| American Express | `credit_card` | `amex` |
| Visa Débito | `debit_card` | `debvisa` |
| Mastercard Débito | `debit_card` | `debmaster` |
| Tarjeta Mercado Pago | `prepaid_card` | `mercadopagocard` |
| Oxxo | `ticket` | `oxxo` |
| PayCash | `ticket` | `paycash` |
| BBVA Bancomer | `atm` | `bancomer` |
| Banamex | `atm` | `banamex` |
| Santander | `atm` | `serfin` |
| Dinheiro em conta | `account_money` | `account_money` |
| Bitcoin | `digital_currency` | `bitcoin` |
| Paypal | `digital_wallet` | `paypal` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout Transparente | N/A |
| Assinaturas | Link de pagamento | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | Checkout Pro | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | Checkout Transparente | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout API | N/A |
| Assinaturas | Link de pagamento | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | Checkout Pro | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Assinaturas | Checkout API | `amex`, `mercadopagocard`, `oxxo`, `bancomer`, `banamex`, `serfin`, `bitcoin` |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |

------------
 
### Peru
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Visa Débito | `dedit_card` | `debvisa` |
| Diners Club International | `credit_card` | `diners` |
| Mastercard Débito | `debit_card` | `debmaster` |
| BCP, BBVA Continental u otros | `atm` | `pagoefectivo_atm` |
| Dinheiro em conta | `account_money` | `account_money` |
 
* **Indisponíveis:**
 
----[mlb]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout Transparente | N/A |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout Transparente | N/A |

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Pagamentos | Mobile Checkout | `account_money` |
| Pagamentos | Checkout API | N/A |
| Marketplace | Checkout Pro | N/A |
| Marketplace | Checkout API | N/A |

------------
 
## Uruguai
 
* **Disponíveis:**
 
| Meio de pagamento | ID do tipo de pagamento| ID |
| :--- | :--- | :--- |
| Visa | `credit_card` | `visa` |
| Mastercard | `credit_card` | `master` |
| Diners Club International | `credit_card` | `diners` |
| OCA | `credit_card` | `oca` |
| Lider | `credit_card` | `lider` |
| Abitab | `ticket` | `abitab` |
| Red Pagos | `ticket` | `redpagos` |
| Dinheiro em conta | `account_money` | `account_money` |
 
* **Indisponíveis:**
 
| Produto | Solução | Meios de pagamento não disponíveis |
| :--- | :--- | :--- |
| Pagamentos | Link de pagamento | N/A |
| Pagamentos | Checkout Pro | N/A |
| Marketplace | Checkout Pro | N/A |