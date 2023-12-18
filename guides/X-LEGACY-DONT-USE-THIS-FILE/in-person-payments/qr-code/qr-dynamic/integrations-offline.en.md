---
indexable: false  
---

# How can dynamic QR be integrated?

## Values for QR

QR code needs to have a set of data ordered and endorsed by EMVCo standard.
The following table shows all the data contained:


| ID | Meaning in Mercado Pago | Size | Presence - Restriction |
| --- | --- | --- | --- |
| ID 00: Payload Format Indicator | QR Code Template Version. | 02 | Mandatory |
| ID 01: Point of Initiation Method | It identifies whether QR information is dynamic or static. | 02 | Mandatory |
| ID 43.00 Merchant Account Information | Mercado Libre Identification.| 16 | Mandatory |
| ID 43.02 | Mercado Pago Template Version. | up to 2 | Mandatory |
| ID 43.03 | User ID. | up to 10 | Mandatory |
| ID 43.04 | Sponsor ID. | up to 10 | Optional |
| ID 52: Merchant Category Code | Code for business classification.. | 04 | Mandatory |
| ID 53: Transaction Currency | Numeric currency corresponding to total amount. ----[mlb]---- Brazil: 986 ------------ ----[mla]---- Argentina: 032 ------------ ----[mlc]---- Chile: 152 ------------ ----[mlu]---- Uruguay: 858 ------------ ----[mco]---- Colombia: 170 ------------ ----[mpe]---- Peru: 604 ------------ ----[mlm]---- Mexico: 484 ------------.  | 03 | Mandatory |
| ID 54: Transaction Amount | Total purchase price: E.g. 10.00 | up to 13 | Mandatory |
| ID 58: Country Code | Seller Country. ----[mlb]---- Brazil: `BR` ------------ ----[mla]---- Argentina: `AR` ------------ ----[mlc]---- Chile: `CL` ------------ ----[mlu]---- Uruguay: `UY` ------------ ----[mco]---- Colombia: `CO` ------------ ----[mpe]---- Peru: `PE` ------------ ----[mlm]---- Mexico: `MX` ------------. | 02 | Mandatory |
| ID 59: Merchant Name | Your Business Name. | up to 25 | Mandatory |
| ID 60: Merchant City | Seller City.  | up to 15 | Mandatory |
| ID 62.05: Reference Label | ID defined by integrator to associate transaction to Mercado Pago payment.   | up to 25 | Mandatory |
| ID 62.07: Terminal Label | Cashier's *External_id*.  | up to 10 | Optional |
| ID 62.08: Purpose of Transaction | Description header making reference to purchase purpose.  | up to 25 | Optional |
| ID 63: CRC |  Checksum - Content validation.  | 04 | Mandatory |


>For more information about data to be filled out on your account, [see glosary](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/pre-requisites/#bookmark_glosario).



## How to create QR

Once **the values to be included in your QR are understood and reviewed**, we leave you an example about how to set it up. 

Take into account that you only need to change the example values. Fixed values don't need to be changed at creation time. 



| ID | Sub ID | Length | Fixed value | Example value |
| --- | --- | --- | --- | --- |
| 00 | - | 02 | 01 | - |
| 01 | - | 02 | 12 | - |
| 43 | - | *Total Length* | - | 38 |
| - | 00 | 16 | com.mercadolibre | - |
| - | 02 | 01 | 1 | - |
| - | 03 | 09 | - | ----[mlb]---- 582245993 ------------ ----[mla]---- 446566691 ------------ ----[mlc]---- 582115007 ------------ ----[mlu]---- 519253179 ------------ ----[mco]---- 582249137 ------------ ----[mpe]---- 582252133 ------------ ----[mlm]---- 582256360 ------------ |
| 52 | - | 04 | 5206 | -|
| 53 | - | 03 | ----[mlb]---- 986 ------------ ----[mla]---- 032 ------------ ----[mlc]---- 152 ------------ ----[mlu]---- 858 ------------ ----[mco]---- 170 ------------ ----[mpe]---- 604 ------------ ----[mlm]---- 484 ------------ | - |
| 54 | - | 03 | - | 5.0 |
| 58 | - | 02 | ----[mlb]---- BR ------------ ----[mla]---- AR ------------ ----[mlc]---- CL ------------ ----[mlu]---- UY ------------ ----[mco]---- CO ------------ ----[mpe]---- PE ------------ ----[mlm]---- MX ------------  | - |
| 59 | - | 09 | - | *TuNegocio* |
| 60 | - | ----[mlb]---- 10 ------------ ----[mla]---- 12 ------------ ----[mlc]---- 8 ------------ ----[mlu]---- 10 ------------ ----[mco]---- 6 ------------ ----[mpe]---- 4 ------------ ----[mlm]---- 11 ------------ | - | ----[mlb]---- *Sao Paulo* ------------ ----[mla]---- *Buenos Aires* ------------ ----[mlc]---- *Santiago* ------------ ----[mlu]---- *Montevideo* ------------ ----[mco]---- *Bogotá* ------------ ----[mpe]---- *Lima* ------------ ----[mlm]---- *Guadalajara* ------------ |
| 62 | - | *Total Length* | - | 35 |
| - | 05 | 10 | - | ticket-123 |
| - | 07 | 07 | - | CAJA001 |
| - | 08 | 06 | - | Bebida |
63 | - | 04 | - | ----[mlb]---- 9D3B ------------ ----[mla]---- 5259 ------------ ----[mlc]---- B680 ------------ ----[mlu]---- 9512 ------------ ----[mco]---- 2735 ------------ ----[mpe]---- 91B1 ------------ ----[mlm]---- C8D9 ------------ |


> NOTE
>
> Data to take into account
>
> - For total length of ID 43 and 62 with 3 Sub IDs each, the **total length of all characters within the ID** need to be included. For example: ----[mlb]---- 43380016com.mercadolibre020110309582245993 ------------ ----[mla]---- 43380016com.mercadolibre020110309446566691 ------------ ----[mlc]---- 43380016com.mercadolibre020110309582115007 ------------ ----[mlu]---- 43380016com.mercadolibre020110309519253179 ------------ ----[mco]---- 43380016com.mercadolibre020110309582249137 ------------ ----[mpe]---- 43380016com.mercadolibre020110309582252133 ------------ ----[mlm]---- 43380016com.mercadolibre020110309582256360 ------------ 
> - If **character length** is less than 10, left pad integer number with one 0. For example: “06”.
> - *CRC* is a **content verification**. You need to use `CRC-16/CCITT-FALSE Hexadecimal` method. 

## Create QR

Once all the data is obtained, unify the above explained values so that QR contains all the order data.

Join each row like this: `ID + Sub ID + Length + Value`


> WARNING
>
> Important
>
> Remember the value needs to be fixed or variable as mentioned above.

For example, the results of table values: 

----[mlb]---- `00020101021243380016com.mercadolibre02011030958224599352045812530398654045.005802BR5909TuNegocio6009Sao Paulo62350510ticket-1230707CAJA0010806Bebida63049D3B` ------------ ----[mla]---- `00020101021243380016com.mercadolibre02011030944656669152045206530303254035.05802AR5909TuNegocio6012Buenos Aires62350510ticket-1230707CAJA0010806Bebida63045259` ------------ ----[mlc]---- `00020101021243380016com.mercadolibre02011030958211500752045812530315254045.005802CL5909TuNegocio6008Santiago62350510ticket-1230707CAJA0010806Bebida6304B680` ------------ ----[mlu]---- `00020101021243380016com.mercadolibre02011030951925317952045812530385854045.005802UY5909TuNegocio6010Montevideo62350510ticket-1230707CAJA0010806Bebida63049512` ------------ ----[mco]---- `00020101021243380016com.mercadolibre02011030958224913752045812530317054045.005802CO5909TuNegocio6006Bogotá62350510ticket-1230707CAJA0010806Bebida63042735` ------------ ----[mpe]---- `00020101021243380016com.mercadolibre02011030958225213352045812530360454045.005802PE5909TuNegocio6004Lima62350510ticket-1230707CAJA0010806Bebida630491B1` ------------ ----[mlm]---- `00020101021243380016com.mercadolibre02011030958225636052045812530348454045.005802MX5909TuNegocio6011Guadalajara62350510ticket-1230707CAJA0010806Bebida6304C8D9` ------------ 


With data obtained, you can generate your QR! 


## Tests

To validate the QR, you only need to [create a test user](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/integration-test) to design the QR and another one for scanning and paying from Mercado Pago or Mercado Libre App.

> NOTE
>
> Note
>
> Any QR not compliant with the defined value restrictions will be interpreted as invalid QR and an error screen will pop up when you scan it.

## Notifications

To get the payment data, you need to configure the notification URL in [Mercado Pago panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction). 

With the URL configured, you can validate orders as shown in [Notifications section](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/notifications/ipn/introduction). 



## Start receiving payments

To receive payments, you only need to ensure that all your productive data is well defined.  

Then, it shows QR code to your customer the way he/she prefers to pay.  And ready!


---
### Next steps


> LEFT_BUTTON_RECOMMENDED_EN
>
> Advanced Integration
>
> Learn about your options for your integration to reach the next level.
>
> [Advanced Integration](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/guides/in-person-payments/qr-code/advanced-integration)
