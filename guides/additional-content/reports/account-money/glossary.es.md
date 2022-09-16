# Glosario

Lo sabemos, algunos términos son técnicos y puede que no estés familiarizado con todos ellos. ¡Usa este glosario para no perderte!

| Nombre de la columna del reporte | Qué significa |
| --- | --- |
| EXTERNAL_REFERENCE | <br> ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br> <br> |
| SOURCE_ID | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). |
| USER_ID | Código de la cuenta del vendedor. (Cust ID) |
| PAYMENT_METHOD | Consulta los ----[mla]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_argentina)  ------------ ----[mlb]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_brasil) ------------ ----[mpe]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_perú)  ------------ ----[mco]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_colombia)  ------------ ----[mlm]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_méxico) ------------ ----[mlu]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_uruguay) ------------ ----[mlc]---- [medios de pago disponibles](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/additional-content/payment-localization/consult-payment-methods/#bookmark_chile) ------------ según el país con el que operes en Mercado Pago. |
| PAYMENT_METHOD_TYPE | Tipo de medio de pago.<br><br>Puede ser:<br><br>*credit_card*: tarjeta de crédito.<br>*debit_card*: tarjeta de débito.<br>*bank_transfer*: transferencia.<br>*atm*: cajero<br>*ticket*: efectivo<br>*available_money*: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br><br> |
| SITE | ----[mla]---- MLA: Argentina ------------ ----[mlb]---- MLB: Brasil ------------ ----[mpe]---- MPE: Perú  ------------ ----[mco]---- MCO: Colombia  ------------ ----[mlm]---- MLM: México ------------ ----[mlu]---- MLU: Uruguay ------------ ----[mlc]---- MLC: Chile ------------  |
| TRANSACTION_TYPE | Tipo de operación. <br><br>Puede ser:<br><br>*SETTLEMENT*: pago aprobado.<br> ----[mlu, mla, mlm, mco, mlc, mlb]---- *REFUND*: pago devuelto total o parcialmente.------------ ----[mpe]---- *REFUND*: pago devuelto totalmente.------------ <br>*CHARGEBACK*: el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>*DISPUTE*: el comprador inició un reclamo por ese pago.<br>*WITHDRAWAL*: retiro a la cuenta bancaria.<br>*WITHDRAWAL_CANCEL*: retiro a la cuenta bancaria que fue cancelado.<br>*PAYOUT*: extracción en efectivo de dinero disponible en Mercado Pago. ----[mlb]----  <br>*TRAVA_DE_RECEBIVEL*: bloqueo por cobrar. ------------ <br><br> |
| TRANSACTION_AMOUNT | Monto bruto de la operación. |
| TRANSACTION_CURRENCY | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| SELLER_AMOUNT | Monto recibido por compras por split. |
| TRANSACTION_DATE | Fecha de acreditación de la operación. |
| FEE_AMOUNT | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. |
| SETTLEMENT_NET_AMOUNT | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del `TRANSACTION_AMOUNT`. |
| SETTLEMENT_CURRENCY | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br><br> |
| SETTLEMENT_DATE | Fecha en que se acreditó el dinero de la operación. |
| REAL_AMOUNT | Monto neto de la operación, si es un *settlement*, se le descuentan los montos por contracargos, reclamos o devoluciones. |
| COUPON_AMOUNT | Monto del cupón de descuento. **Solo se descuenta del monto bruto** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |
| METADATA | ----[mlu, mla, mlm, mco, mlc, mlb]---- Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa.------------ ----[mpe]---- Datos extras, como por ejemplo, datos provistos por el vendedor en caso de tener una integración externa.------------ ----[mlb]---- Cuando se muestra "Fee discount" se entiende como la reducción en el cargo por venta por la participación en una campaña comercial. ------------ |
| MKP_FEE_AMOUNT | Comisión de Mercado Libre. Incluye IVA. |
| FINANCING_FEE_AMOUNT | Costo por ofrecer cuotas sin interés. |
| SHIPPING_FEE_AMOUNT | Costo de envío. |
| TAXES_AMOUNT | ----[mla]---- Impuestos cobrados por retenciones de Ingresos Brutos, IVA, Ganancias; e impuestos sobre los Créditos y Débitos, entre otros. Ver más detalle sobre retenciones y percepciones.[Ver más detalle sobre retenciones y percepciones](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------ ----[mco]---- Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. ------------ ----[mlu]---- Impuestos cobrados por retenciones de IVA.  ------------ ----[mlu, mpe, mlm]---- Impuestos cobrados. ------------ |
| INSTALLMENTS | Cantidad de cuotas en las que fue realizada la operación. |
| TAX_AMOUNT_TELCO | ----[mco]---- Descripción del impuesto retenido por operación en el TAXES_AMOUNT. <br><br>Puede tomar el valor de:<br><br> fuente<br>iva<br>ica<br><br> ------------ ----[mlu]---- Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. ------------ |
| TAX_DETAIL | Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. ----[mla]---- <br><br>Puede tomar los siguientes valores según la jurisdicción: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ <br><br> |
| POS_ID | ID de caja si el pago se realiza a través de un comercio físico. |
| POS_NAME | Nombre de caja para el pago realizado a través de un comercio físico. |
| EXTERNAL_POS_ID | ----[mla, mlm]---- ID de caja definido por el usuario para el pago realizado a través de un comercio físico. ------------ |
| STORE_ID | ID de sucursal si el pago se realiza a través de un comercio físico. |
| STORE_NAME | ----[mla, mlm]---- Nombre de sucursal para el pago realizado a través de un comercio físico. ------------ |
| EXTERNAL_STORE_ID | ----[mla, mlm]---- ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. ------------ |
| ORDER_ID | ----[mla, mlm]---- Orden de compra. ------------ |
| SHIPPING_ID | ----[mla, mlm]---- Identificador de envío. ------------ |
| SHIPMENT_MODE | ----[mla, mlm]---- Modalidad de envío. ------------ |
| PACK_ID | ----[mla, mlm]---- Identificador del paquete en el carrito. ------------ |
| TAXES_DISAGGREGATED | Impuestos desagregados en formato JSON. |
| POI_ID | ID del lector si el pago se realiza a través de un comercio físico. |
| POI_WALLET_NAME | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un ----[mla]----[código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----código QR de Mercado Pago------------.|
| POI_BANK_NAME | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un ----[mla]----[código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----código QR de Mercado Pago------------.|
| CARD_INITIAL_NUMBER | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. |
| OPERATION_TAGS | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br>  -   WHATSAPP_PAY: Esta etiqueta indica que el pago fue hecho a través de whatsApp. <br> -   CASHOUT: Esta etiqueta indica que la operación corresponde a un Pix Saque. <br> -   EXTRACASHOUT: Esta etiqueta indica que la operación corresponde a un Pix Troco. <br> -   PIX: Esta etiqueta indica que la operación corresponde a un pago Pix. | ----[mla]----
| PAYER_NAME* | Nombre de quien hace un pago o una donación. | ------------ ----[mla]----
| PAYER_ID_TYPE* | Tipo de identificación de quien hace un pago o una donación. | ------------ ----[mla]----
| PAYER_ID_NUMBER* | Número de identificación de quien hace un pago o una donación. | ----------------[mla]----  ------------
| BUSINESS_UNIT | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery.|
| SUB_UNIT | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. |
> INFO
>
> (*) Esta información solo se podrá usar para conciliar, será tratada conforme a las leyes de protección de datos 
> personales aplicables y estará disponible cuando se reciban pagos con QR, transferencias o cuando reciba una donación 
> como ONG.
------------
