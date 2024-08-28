# Subcomercio

Los subcomercios son clientes finales que tienen **Facilitadores de pago**, entidades que ofrecen soluciones de pago que permiten a estos subcomercios comercializar sus productos y/o servicios. Son responsables de capturar, procesar y liquidar las transacciones directamente a sus subcomercios, convirtiéndose en acreedores del adquirente.

En el mercado actual podemos identificar dos tipos de Facilitadores de pagos:

- **Subacreditador:** es una entidad legal que habilita a otras empresas o personas físicas para aceptar pagos con tarjeta, intermediando las transacciones de pago en nombre de los subcomercios y realizando la liquidación de los ingresos en sus respectivas cuentas bancarias.
- **Marketplace:** es un sitio o plataforma que vende productos o servicios propios y de terceros, intermedia en las transacciones de pago, y realiza la liquidación de los ingresos en sus respectivas cuentas bancarias. Está sujeto a las mismas reglas que un subacreditador porque funciona como intermediario en el flujo financiero para el subcomercio.

> WARNING
>
> Importante
>
> La Circular BCB 3978 nº determina que todos los Facilitadores de Pago identifiquen a los beneficiarios finales en el momento de la transacción. Para cumplir con esta norma, se vuelve obligatorio enviar los atributos del parámetro `sub_merchant` que se detallan en la tabla que encontrarás a continuación. En caso de que los campos no sean enviados, la bandera de la tarjeta podrá aplicar penalizaciones que serán trasladadas al Facilitador de Pago.

Ve a continuación los detalles de cada atributo perteneciente a `forward_data.sub_merchant`.

| Atributo | Tipo | Descripción | Requerido/Opcional | Ejemplo |
|---|---|---|---|---|
| `sub_merchant_id` | Texto | Código del subcomercio. | Requerido | 123123 |
| `mcc` | Texto | MCC (Merchant Code Category) del subcomercio conforme a la decisión de la Abecs y/o el CNAE primario. | Requerido | 5462 |
| `country` | Texto | País en donde el subcomercio está ubicado. | Requerido | BRA |
| `address_door_number` | Número | Número de la calle en donde el subcomercio está ubicado. | Requerido | 1 |
| `zip` | Texto | CEP del subcomercio. | Requerido | 2222222 |
| `document_number` | Texto | Identificación del CPF o CNPJ del subcomercio. | Requerido | 222222222222222 |
| `city` | Texto | Ciudad en donde el subcomercio está ubicado. | Requerido | SÃO PAULO |
| `address_street` | Texto | Calle en donde el subcomercio está localizado. | Requerido | RUA A |
| `legal_name` | Texto | Nombre del subcomercio. | Requerido | LOJINHA DO ZÉ |
| `region_code_iso` | Texto | Estado en donde el subcomercio está ubicado. | Requerido | BR-MG |
| `region_code` | Texto | Código postal del subcomercio. | Requerido | BR |
| `document_type` | Texto | Número del CPF o CNPJ del subcomercio. | Requerido | CNPJ |
| `phone` | Texto | Teléfono del subcomercio. | Requerido | 123123123 |
| `url` | Texto | URL del Facilitador de Pago. | Requerido | www.nomedofacilitador.com.br |

> WARNING
>
> Atención
>
> El Facilitador de Pagos debe asignar para cada transacción el MCC que describa de forma más precisa la actividad final de su subcomercio. La atribución incorrecta de MCC por parte del Facilitador de Pagos puede resultar en la aplicación de multas y restitución del intercambio adeudado por parte de las marcas. Estas multas pueden ser trasladadas al Facilitador de Pagos por Mercado Pago.<br><br>Para obtener más detalles y acceder al Registro Unificado de MCC, consulta el sitio web oficial de [Abecs](https://www.abecs.org.br/consulta-mcc-individual) (Associação Brasileira das Empresas de Cartões de Crédito e Serviços).