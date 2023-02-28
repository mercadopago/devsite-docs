# Lista de errores

Los siguientes son errores comunes que pueden ocurrir durante tu integración:

|Mensaje|Significado|
|---|---|
|`unauthorized_use_of_live_credentials`|Esto significa que las credenciales de la cuenta de Mercado Pago no están activadas. Debes ir a la página de [credenciales]([FAKER][CREDENTIALS][URL]) y activarlas.|
|`invalid installments`|Se está intentando procesar el pago con una tasa que no está habilitada. Debes ir a la [configuración del medio de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros) y establecer las tarifas en "Automático".|
|`invalid_users`|Estas intentando pagar con el mismo usuario al que le estas cobrando. Vuelve a intentar el pago con un correo electrónico de pagador diferente.|
|`Cannot infer Payment Method`|Estas intentando pagar con una tarjeta que no es el tipo de tarjeta seleccionado (por ejemplo, se ha introducido un número de tarjeta de crédito en la opción de tarjeta de débito).|
|`Invalid users involved`|Ocurre cuando se utilizan credenciales productivas en un entorno de prueba o viceversa. **Ejemplo:** Utilizar un correo electrónico de prueba en el nodo "pagador" cuando se utiliza la credencial de producción de un usuario real.|
----[mlb]----|`Collector user without key enabled for QR render`|Ocurre cuando el vendedor aún no ha creado una clave **Pix** con la cuenta de Mercado Pago.|------------

> WARNING
>
> Importante
>
> Antes de comenzar tu operación de producción, debes activar tus [credenciales]([FAKER][CREDENTIALS][URL]).

Para más información, visita el [site oficial de VTEX](https://help.vtex.com/) y el [site de status de VTEX.](https://status.vtex.com/)