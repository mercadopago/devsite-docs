---
indexable: false  
---

# Cómo integrar QR dinámico

## Valores para el QR

El QR debe contener una serie de datos ordenados y avalados por el standard EMVCo.
La siguiente tabla muestra todos los datos que contiene:


| ID | Significado en Mercado Pago | Tamaño | Presencia/Restricción |
| --- | --- | --- | --- |
| ID 00: Payload Format Indicator | Versión del template del Código QR. | 02 | Obligatorio |
| ID 01: Point of Initiation Method | Identifica si la información del QR es dinámica o estática. | 02 | Obligatorio |
| ID 43.00 Merchant Account Information | Identificador de Mercado Libre.| 16 | Obligatorio |
| ID 43.02 | Versión del template de Mercado Pago. | Hasta 2 | Obligatorio |
| ID 43.03 | Collector ID. | Hasta 10 | Obligatorio |
| ID 43.04 | Sponsor ID. | Hasta 10 | Opcional |
| ID 52: Merchant Category Code | Código para clasificar el negocio. | 04 | Obligatorio |
| ID 53: Transaction Currency | Moneda numérica correspondiente al monto total. ----[mlb]---- Brasil: 986 ------------ ----[mla]---- Argentina: 032 ------------ ----[mlc]---- Chile: 152 ------------ ----[mlu]---- Uruguay: 858 ------------ ----[mco]---- Colombia: 170 ------------ ----[mpe]---- Perú: 604 ------------ ----[mlm]---- México: 484 ------------.  | 03 | Obligatorio |
| ID 54: Transaction Amount | Precio total de la compra. Ej: 10.00 | Hasta 13 | Obligatorio |
|ID 58: Country Code | País del vendedor. ----[mlb]---- Brasil: `BR` ------------ ----[mla]---- Argentina: `AR` ------------ ----[mlc]---- Chile: `CL` ------------ ----[mlu]---- Uruguay: `UY` ------------ ----[mco]---- Colombia: `CO` ------------ ----[mpe]---- Perú: `PE` ------------ ----[mlm]---- México: `MX` ------------. | 02 | Obligatorio |
| ID 59: Merchant Name | Nombre de tu negocio. | Hasta 25 | Obligatorio |
| ID 60: Merchant City | Ciudad del vendedor.  | Hasta 15 | Obligatorio |
| ID 62.05: Reference Label | ID definido por el integrador para asociar la transacción a un pago de Mercado Pago.  | Hasta 25 | Obligatorio |
| ID 62.07: Terminal Label | *External_id* de la caja.  | Hasta 10 | Opcional |
| ID 62.08: Purpose of Transaction | Título descriptivo que hace referencia al propósito de la compra.  | Hasta 25 | Opcional |
| ID 63: CRC |  Checksum - Validación del contenido.  | 04 | Obligatorio |


>Para más información sobre los datos que tienes que completar sobre tu cuenta, [consulta el glosario](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/pre-requisites/#bookmark_glosario).



## Cómo crear el QR

Una vez **entendido y analizado los valores que debe incluir tu QR**, te dejamos un ejemplo de cómo puedes armarlo.

Ten en cuenta que solo tienes que modificar los valores de ejemplo. Los valores fijos no deben modificarse a la hora de la creación. 


| ID | Sub ID | Largo | Valor fijo | Valor ejemplo |
| --- | --- | --- | --- | --- |
| 00 | - | 02 | 01 | - |
| 01 | - | 02 | 12 | - |
| 43 | - | *Largo total* | - | 38 |
| - | 00 | 16 | com.mercadolibre | - |
| - | 02 | 01 | 1 | - |
| - | 03 | 09 | - | ----[mlb]---- 582245993 ------------ ----[mla]---- 446566691 ------------ ----[mlc]---- 582115007 ------------ ----[mlu]---- 519253179 ------------ ----[mco]---- 582249137 ------------ ----[mpe]---- 582252133 ------------ ----[mlm]---- 582256360 ------------ |
| 52 | - | 04 | 5206 | - |
| 53 | - | 03 | ----[mlb]---- 986 ------------ ----[mla]---- 032 ------------ ----[mlc]---- 152 ------------ ----[mlu]---- 858 ------------ ----[mco]---- 170 ------------ ----[mpe]---- 604 ------------ ----[mlm]---- 484 ------------ | - |
| 54 | - | 03 | - | 5.0 |
| 58 | - | 02 | ----[mlb]---- BR ------------ ----[mla]---- AR ------------ ----[mlc]---- CL ------------ ----[mlu]---- UY ------------ ----[mco]---- CO ------------ ----[mpe]---- PE ------------ ----[mlm]---- MX ------------  | - |
| 59 | - | 09 | - | *TuNegocio* |
| 60 | - | ----[mlb]---- 10 ------------ ----[mla]---- 12 ------------ ----[mlc]---- 8 ------------ ----[mlu]---- 10 ------------ ----[mco]---- 6 ------------ ----[mpe]---- 4 ------------ ----[mlm]---- 11 ------------  | - | ----[mlb]---- *Sao Paulo* ------------ ----[mla]---- *Buenos Aires* ------------ ----[mlc]---- *Santiago* ------------ ----[mlu]---- *Montevideo* ------------ ----[mco]---- *Bogotá* ------------ ----[mpe]---- *Lima* ------------ ----[mlm]---- *Guadalajara* ------------ |
| 62 | - | *Largo total* | - | 35 |
| - | 05 | 10 | - | ticket-123 |
| - | 07 | 07 | - | CAJA001 |
| - | 08 | 06 | - | Bebida |
| 63 | - | 04 | - | ----[mlb]---- 9D3B ------------ ----[mla]---- 5259 ------------ ----[mlc]---- B680 ------------ ----[mlu]---- 9512 ------------ ----[mco]---- 2735 ------------ ----[mpe]---- 91B1 ------------ ----[mlm]---- C8D9 ------------ |


> NOTE
>
> Datos a tener en cuenta
>
> - Para el largo total del ID 43 y 62, que contienen 3 Sub IDs cada uno, es necesario incluir el largo total de **todos los caracteres dentro del ID**. Por ejemplo: ----[mlb]---- 43380016com.mercadolibre020110309582245993 ------------ ----[mla]---- 43380016com.mercadolibre020110309446566691 ------------ ----[mlc]---- 43380016com.mercadolibre020110309582115007 ------------ ----[mlu]---- 43380016com.mercadolibre020110309519253179 ------------ ----[mco]---- 43380016com.mercadolibre020110309582249137 ------------ ----[mpe]---- 43380016com.mercadolibre020110309582252133 ------------ ----[mlm]---- 43380016com.mercadolibre020110309582256360 ------------
> - Si el **largo de los caracteres** es menor a 10, debe incluirse un 0 a la izquierda del número entero. Por ejemplo: “06”.
> - El *CRC* es una **verificación del contenido**. Debes usar el método `CRC-16/CCITT-FALSE Hexadecimal`. 

## Crear el QR

Una vez obtenidos todos los datos, se deben unificar los valores anteriormente explicados, para que el QR contenga ya todos los datos de la orden.

Unir según cada fila de la siguiente manera: `ID + Sub ID + Largo + Valor`

> WARNING
>
> Importante
>
> Recuerda que el valor puede ser fijo o variable según lo mencionado anteriormente.

Como por ejemplo, el resultado de los valores de tabla: 

----[mlb]---- `00020101021243380016com.mercadolibre02011030958224599352045812530398654045.005802BR5909TuNegocio6009Sao Paulo62350510ticket-1230707CAJA0010806Bebida63049D3B` ------------ ----[mla]---- `00020101021243380016com.mercadolibre02011030944656669152045206530303254035.05802AR5909TuNegocio6012Buenos Aires62350510ticket-1230707CAJA0010806Bebida63045259` ------------ ----[mlc]---- `00020101021243380016com.mercadolibre02011030958211500752045812530315254045.005802CL5909TuNegocio6008Santiago62350510ticket-1230707CAJA0010806Bebida6304B680` ------------ ----[mlu]---- `00020101021243380016com.mercadolibre02011030951925317952045812530385854045.005802UY5909TuNegocio6010Montevideo62350510ticket-1230707CAJA0010806Bebida63049512` ------------ ----[mco]---- `00020101021243380016com.mercadolibre02011030958224913752045812530317054045.005802CO5909TuNegocio6006Bogotá62350510ticket-1230707CAJA0010806Bebida63042735` ------------ ----[mpe]---- `00020101021243380016com.mercadolibre02011030958225213352045812530360454045.005802PE5909TuNegocio6004Lima62350510ticket-1230707CAJA0010806Bebida630491B1` ------------ ----[mlm]---- `00020101021243380016com.mercadolibre02011030958225636052045812530348454045.005802MX5909TuNegocio6011Guadalajara62350510ticket-1230707CAJA0010806Bebida6304C8D9` ------------ 

Con los datos obtenidos, ¡ya puedes generar tu QR! 


## Pruebas

Para validar el QR, solo necesitas [crear un usuario de prueba](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/integration-test) para diseñar el QR y otro para escanear y pagar desde la App de Mercado Pago o Mercado Libre.

> NOTE
>
> Nota
>
> Todo QR que no cumpla con las restricciones de los valores para el QR será interpretado como QR inválido y te aparecerá una pantalla de error al momento de escanearlo.

## Notificaciones

Para obtener los datos del pago, es necesario configurar la URL de notificación en el [panel de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction). 

Al tener la URL configurada, ya se pueden validar las órdenes como lo indica la [sección de Notificaciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/notifications/ipn/introduction).


## Comenzar a recibir pagos

Para recibir pagos, solo tienes que asegurarte de tener todos tus datos productivos bien definidos.

Luego, muestra el QR a tu cliente del modo que prefieras para que lo pueda pagar ¡y listo!


---
### Próximos pasos


> LEFT_BUTTON_RECOMMENDED_ES
>
> Integración avanzada
>
> Conoce las opciones que dispones para llevar tu integración al siguiente nivel.
>
> [Integración avanzada](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/in-person-payments/qr-code/advanced-integration)

