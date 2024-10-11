----[mlb]----
# Linha de Crédito

------------
----[mlm]----
# Compra ahora, paga después

------------
----[mla]----
# Cuotas sin Tarjeta

------------
----[mla, mlb]----
Es la modalidad de financiación de Mercado Pago que ofrece la opción de pagar en cuotas sin contar con una tarjeta de crédito.

------------
----[mlm]----
Es la modalidad de financiamiento de Mercado Pago que ofrece la opción de pagar en mensualidades sin contar con una tarjeta de crédito.

------------

Con esta línea de crédito, administrada por Mercado Pago, el dinero se acredita en su totalidad en la cuenta del vendedor, mientras que el cliente puede optar por pagar en hasta 12 pagos fijos mensuales, sin necesidad de contar con una tarjeta. El usuario solamente tendrá que ingresar a su cuenta de Mercado Pago (o crear una), conocer su límite disponible y elegir en cuántas cuotas quiere pagar.

----[mlb]----
**Linha de Crédito** actualmente es ofrecido en nuestro [Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro) (**Mercado Pago Checkout Pro**) y ahora también es posible acceder directo desde el checkout de la tienda.

Para **configurar Linha de Crédito en el checkout de la tienda**, sigue los pasos a continuación.

------------
----[mlm]----
**Meses sin Tarjeta** actualmente es ofrecido en nuestro [Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro) (**Mercado Pago Checkout Pro**) y ahora también es posible acceder directo desde el checkout de la tienda.

Además, podrás complementar la integración con la habilitación de la app **Mercado Pago Banner**, una aplicación que permite promover durante el proceso de compra la opción de pago con [Compra ahora, paga después](/developers/pt/docs/shopify/integration-configuration/meses-sin-tarjeta). Para más información sobre cómo habilitar el banner, accede a la documentación [Cómo promover "Compra ahora, paga después" en tu tienda](/developers/pt/docs/shopify/shopify/how-tos/banner).

Para **configurar Meses sin Tarjeta en el checkout de tu tienda**, sigue los pasos a continuación.

------------
----[mla]----
**Cuotas sin Tarjeta** actualmente es ofrecido en nuestro [Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro) (**Mercado Pago Checkout Pro**) y ahora también es posible acceder directo desde el checkout de la tienda.

Para **configurar Cuotas sin Tarjeta en el checkout de tu tienda**, sigue los pasos a continuación.

------------

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pagos**. 
4. En "Formas de pago adicionales", haz clic en **Agregar formas de pago**.
----[mlb]----
5. Dirígete a la pestaña **Buscar por proveedor** y busca la app con el nombre "Linha de Crédito". 

------------
----[mlm]----
5. Dirígete a la pestaña **Buscar por proveedor** y busca la app con el nombre "Compra ahora, paga después". 

------------
----[mla]----
5. Dirígete a la pestaña **Buscar por proveedor** y busca la app con el nombre "Cuotas sin Tarjeta". 

------------
6. Una vez que la hayas encontrado, selecciónala y haz clic en **Instalar** y luego **Conectar**.
7. Selecciona **Instalar aplicación > Más acciones** y luego **Gestionar**.
8. Coloca tus **credenciales de producción** (`public key` y `access token`) en los campos que lo solicitan y haz clic en **Guardar**. Recuerda tener a mano tus [credenciales](/developers/es/docs/shopify/additional-content/your-integrations/credentials).
9. Para completar la instalación, selecciona **Activar**.
----[mlm]----
![shopify-mercado-credito](/images/shopify/meses-sin-tarjeta-mlm.png)

------------
----[mlb]----
> WARNING
>
> Atención
>
> Es importante señalar que en el plugin de Linha de Crédito **no existe flujo de prueba**, por lo que no es necesario seleccionar el _checkbox_ "habilitar modo de prueba".
> <br/><br/>
> En caso de renovar sus credenciales, recuerde reemplazarlas en su integración.

------------
----[mlm]----
> WARNING
>
> Atención
>
> Es importante señalar que en el plugin de Meses sin Tarjeta **no existe flujo de prueba**, por lo que no es necesario seleccionar el _checkbox_ "habilitar modo de prueba".
> <br/><br/>
> En caso de renovar sus credenciales, recuerde reemplazarlas en su integración.

------------
----[mla]----
> WARNING
>
> Atención
>
> Es importante señalar que en el plugin de Cuotas sin Tarjeta **no existe flujo de prueba**, por lo que no es necesario seleccionar el _checkbox_ "habilitar modo de prueba".
> <br/><br/>
> En caso de renovar sus credenciales, recuerde reemplazarlas en su integración.

------------
----[mla, mlb]----

¡Listo! La modalidad de financiación está habilitada en tu tienda.

------------
----[mlm]----

¡Listo! La modalidad de financiamiento está habilitada en tu tienda.

------------