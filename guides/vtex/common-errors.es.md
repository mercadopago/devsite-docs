# Errores al configurar la integración

Cuando configuras la integración de Mercado Pago en tiendas VTEX, puedes encontrarte con algunos errores comunes.  A continuación, te dejamos una lista de aquellos relacionados específicamente con Mercado Pago y su explicación, así como posibles vías para solucionarlos.

|Mensaje|Descripción|
|---|---|
|`unauthorized_use_of_live_credentials`|Esto significa que las credenciales de producción de la cuenta de Mercado Pago no están activadas. Debes ir a la [página de credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials) y activarlas.|
|`invalid installments`|Se está intentando procesar el pago financiado con una tasa que no está habilitada. Debes ir a la [configuración del medio de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) y establecer las tarifas en "Automático".|
|`invalid_users`|Estás intentando pagar con el mismo usuario al que le estas cobrando. Vuelve a intentar el pago con un correo electrónico de pagador diferente.|
|`Cannot infer Payment Method`|Estas intentando pagar con una tarjeta que no es el tipo de tarjeta seleccionado (por ejemplo, se ha introducido un número de tarjeta de crédito en la opción de tarjeta de débito). Vuelve a intentar el pago con la tarjeta correcta. |
|`Invalid users involved`|Ocurre cuando se utilizan credenciales productivas en un entorno de prueba o viceversa. <br> **Ejemplo:** Utilizar un correo electrónico de prueba en el nodo "pagador" cuando se utiliza la credencial de producción de un usuario real.|
----[mlb]----|`Collector user without key enabled for QR render`|Ocurre cuando el vendedor aún no ha creado una clave **Pix** con la cuenta de Mercado Pago.|------------

> WARNING
>
> Importante
>
> Recuerda que, antes de pasar a producción, debes activar tus [credenciales](/developers/es/docs/vtex/additional-content/your-integrations/credentials).

En caso de encontrarte con un error que no está listado, puedes consultar el [sitio oficial de VTEX](https://help.vtex.com/) para ver los errores más frecuentes dentro de la plataforma, y el [sitio de status de VTEX](https://status.vtex.com/),  para conocer los incidentes reportados en tiempo real.