# Configuración de medios de pago

Para comenzar a recibir pagos con Mercado Pago, luego de crear una afiliación de gateway MercadoPagoV2, deberás configurar los medios de pago que deseas disponibilizar.

> WARNING
>
> Importante
>
> La afiliación de gateway MercadoPagoV1 será discontinuada para el procesamiento de pagos. Si ya cuentas con una afiliación de gateway MercadoPagoV1, deberás [migrar a MercadoPagoV2](/developers/es/docs/vtex/mp1-mp2-migration) para continuar operando con Mercado Pago y aprovechar las ventajas que este nuevo conector ofrece.

Al utilizar MercadoPagoV2 como conector, podrás elegir qué métodos de pago ofrecer en tiendas VTEX a través de la configuración de nuestros checkouts: 

* ----[mla, mlu, mlc, mlm, mpe, mco]----[Checkout API:](/developers/es/docs/vtex/payments-configuration/checkout-api)------------ ----[mlb]---- [Checkout Transparente:](/developers/es/docs/vtex/payments-configuration/checkout-api)------------ Puedes ofrecer pagos financiados sin interés, ----[mla, mlm, mlb]----financiación sin tarjeta,------------ pagos con tarjeta de débito, ----[mlb]---- con Boleto Bancário o Pix------------, y todo el proceso de pago se realizará dentro del entorno de la tienda, sin necesidad de redirigir a una página externa. 

* [Checkout Pro](/developers/es/docs/vtex/payments-configuration/checkout-pro) el comprador será dirigido desde la tienda al sitio web de Mercado Pago, donde se procesará y completará la transacción con cualquiera de los medios de pago que estén configurados previamente. Al finalizar esta transacción, el cliente será redirigido a la tienda VTEX.


> WARNING
>
> Importante
>
> Verifica haber instalado Mercado Pago Payment APP para poder configurar medios de pago en tu tienda VTEX. En caso de que no haberlo hecho, puedes instalarla desde la sección “Mis Apps”.