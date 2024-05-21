# Glosario

Consulta la descripción de cada campo presente en el reporte en la tabla siguiente.

| Nombre de la columna del reporte | Qué significa | 
|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | 
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> |
| País de origen de la cuenta de Mercado Pago (`SITE`) | ----[mla]---- MLA: Argentina ------------ ----[mlb]---- MLB: Brasil ------------ ----[mpe]---- MPE: Perú ------------ ----[mco]---- MCO: Colombia ------------ ----[mlm]---- MLM: México ------------ ----[mlu]---- MLU: Uruguay ------------ ----[mlc]---- MLC: Chile ------------ |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> ----[mlu, mla, mlm, mco, mlc, mlb]---- Devolución de dinero (REFUND): pago devuelto total o parcialmente.------------ ----[mpe]---- *REFUND*: pago reembolsado en su totalidad.------------<br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. ----[mlb]---- <br>_TRAVA_DE_RECEBIVEL_: bloqueo por cobrar. ------------ <br> | 
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. |
| Comisiones ----[mlu, mla, mlm, mco, mlc, mpe]---- + IVA ------------ (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. ----[mlu, mla, mlm, mco, mlc, mpe]----Incluyen IVA. ------------ |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |
| Datos extra (`METADATA`) | ----[mlu, mla, mlm, mco, mlc, mlb]---- Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa.------------ ----[mpe]---- Datos extras, como por ejemplo, datos provistos por el vendedor en caso de tener una integración externa.------------ ----[mlb]---- Cuando se muestra "Fee discount" se entiende como la reducción en el cargo por venta por la participación en una campaña comercial. ------------ |
| Comisión de Mercado Libre ----[mlu, mla, mlm, mco, mlc, mpe]---- + IVA ------------ (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. ----[mlu, mla, mlm, mco, mlc, mpe]----Incluye IVA. ------------ |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. |
| ----[mlu, mla, mlm, mco, mlc, mpe]----Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`)------------ ----[mlb]---- Impuestos cobrados por retenciones (`TAXES_AMOUNT`)------------ | ----[mla]---- Impuestos cobrados por retenciones de Ingresos Brutos, IVA, Ganancias; e impuestos sobre los créditos y débitos, entre otros. [Ver más detalle sobre retenciones y percepciones](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) ------------ ----[mco]---- Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. ------------ ----[mlu]---- Impuestos cobrados por retenciones de IVA. ------------ ----[mlu, mpe, mlm, mlb, mlc]---- Impuestos cobrados. ------------ |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. |
| ----[mco, mlu]---- `TAX_AMOUNT_TELCO`  ------------ | ----[mco]---- Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. Puede tomar el valor de:<br><br> fuente<br>iva<br>ica<br><br> ------------ ----[mlu]---- Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto. ------------ |
| Detalle de impuestos (`TAX_DETAIL`) | ----[mla, mlu, mlm, mlc, mco, mpe]---- Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. ------------ ----[mlb]----Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. ------------ ----[mla]---- Puede tomar los siguientes valores según la jurisdicción: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy ------------ |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. |
| ID de la orden (`ORDER_ID`) | Orden de compra. |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un ----[mla]----[código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----código QR de Mercado Pago------------. |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un ----[mla]----[código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago)------------ ----[mlu, mpe, mlm, mco, mlc, mlb]----código QR de Mercado Pago------------. |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. ----[mlb]----<br> -Pix Saque (CASHOUT): Esta etiqueta indica que la operación corresponde a un Pix Saque. <br> -Compra y extracción de efectivo en comercio (EXTRACASHOUT): Esta etiqueta indica que la operación corresponde a un Pix Troco. <br> -Pix (PIX): Esta etiqueta indica que la operación corresponde a un pago Pix. ------------ | ----[mlb]----
| Número de cuota (`INSTALLMENT_NUMBER`*) | Indica el número de la cuota que será pagada, del total de cuotas contratadas.<br> Esta información aparece cuando el cliente solicita el financiamiento de la compra.<br> Por ejemplo: 2 / 5 indica el pago de la segunda cuota, de un total de 5 cuotas contratadas.<br> Cuando el pagao es liberado en una única cuota, esta columna estará vacía. | 
| Valor líquido de la cuota (`INSTALLMENT_NET_AMOUNT`*) | Muestra el valor líquido de la cuota que será pagada.<br> Esta información aparece cuando el cliente solicita el financiamiento de la compra. | ------------ ----[mla]---- 
| Nombre de quien hace el pago (PAYER_NAME\*) | Nombre de quien hace un pago o una donación. |
| Tipo de identificación del pagador (PAYER_ID_TYPE\*) | Tipo de identificación de quien hace un pago o una donación. |
| Número de identificación del pagador (PAYER_ID_NUMBER\*) | Número de identificación de quien hace un pago o una donación. |  ------------ 
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.|

> NOTE
>
> Nota
>
> (*) Esta información solo se podrá usar para conciliar, será tratada conforme a las leyes de protección de datos personales aplicables y estará disponible cuando se reciban pagos con QR, transferencias, o cuando recibas una donación como ONG.
