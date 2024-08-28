# Submerchants

Submerchants are end customers that have **Payment facilitators**, entities that offer payment solutions allowing these submerchants to sell their products and/or services. They are responsible for capturing, processing, and settling transactions directly to their submerchants, becoming creditors of the acquirer.

In the current market, we can identify two types of Payment facilitators:

- **Subacquirer:** it is a legal entity that enables other companies or individuals to accept card payments, mediating payment transactions on behalf of submerchants and settling the revenue into their respective bank accounts.
- **Marketplace:** it is a site or platform that sells its own products or services and those of third parties, facilitating payment transactions and settling the revenue into their respective bank accounts. It is subject to the same rules as a subacquirer because it intermediates the financial flow for the submerchant.

> WARNING
>
> Important
>
> Circular BCB 3978 no. determines that all Payment facilitators identify the ultimate beneficiaries at the time of the transaction. To comply with this regulation, it becomes mandatory to send the attributes of the `sub_merchant` parameter that are detailed in the table below. In case the fields are not sent, the card networks may apply penalties that will be passed on to the Payment Facilitator.

See below the details of each attribute belonging to `forward_data.sub_merchant`.

| Attribute | Type | Description | Required/Optional | Example |
|---|---|---|---|---|
| `sub_merchant_id` | Text | Submerchant code. | Required | 123123 |
| `mcc` | Text | Submerchant MCC (Merchant Code Category) according to Abecs decision and/or primary CNAE. | Required | 5462 |
| `country` | Text | Country where the submerchant is located. | Required | BRA |
| `address_door_number` | Number | Street number where the submerchant is located. | Required | 1 |
| `zip` | Text | CEP of the submerchant. | Required | 2222222 |
| `document_number` | Text | CPF or CNPJ identification of the submerchant. | Required | 222222222222222 |
| `city` | Text | City where the submerchant is located. | Required | SÃO PAULO |
| `address_street` | Text | Street where the submerchant is located. | Required | RUA A |
| `legal_name` | Text | Name of the submerchant. | Required | LOJINHA DO ZÉ |
| `region_code_iso` | Text | State where the submerchant is located. | Required | BR-MG |
| `region_code` | Text | Postal code of the submerchant. | Required | BR |
| `document_type` | Text | CPF or CNPJ number of the submerchant. | Required | CNPJ |
| `phone` | Text | Phone number of the submerchant. | Required | 123123123 |
| `url` | Text | Payment Facilitator URL. | Required | www.paymentfacilitator.com.br |

> WARNING
>
> Attention
>
> El Facilitador de Pagos debe asignar para cada transacción el MCC que describa de forma más precisa la actividad final de su subcomercio. La atribución incorrecta de MCC por parte del Facilitador de Pagos puede resultar en la aplicación de multas y la restitución del intercambio adeudado por parte de las marcas. Estas multas pueden ser trasladadas al Facilitador de Pagos por Mercado Pago.<br><br>Para obtener más detalles y acceder al Registro Unificado de MCC, consulta el sitio web oficial de [Abecs](https://www.abecs.org.br/consulta-mcc-individual) (Associação Brasileira das Empresas de Cartões de Crédito e Serviços).