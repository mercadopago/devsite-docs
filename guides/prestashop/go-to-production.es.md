# Recibir pagos

Después de realizar la integración y las pruebas, su tienda está lista para entrar en producción. Para comenzar a recibir pagos, debes activar el modo de producción. Para hacer esto, sigue los procedimientos a continuación.
 
1. En el Panel Administrativo de tu tienda PrestaShop, accede al menú **Módulos y Servicios**, localiza el plugin Mercado Pago y haz clic en **configure**.
2. En la pantalla de administración del plugin, confirma que las [credenciales](/developers/es/guides/additional-content/your-integrations/credentials) de producción son las mismas que las de la cuenta de la cual que obtienes dinero por las ventas. Esta información se puede ver en tu [Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/introduction).
3. Luego haz clic en **sí** para activar el modo de producción.
 
¡Listo! El módulo Mercado Pago está listo para recibir pagos en línea. 

> NOTE
>
> Importante
>
> Con todos los pasos completados, tus clientes podrán realizar compras en tu tienda. Al realizar una transacción, es común que algunos mensajes regresen con información específica sobre la compra, ya que cada venta genera un estado de pago que muestra el estado de la venta incluyendo confirmación, pendiente o rechazo de pago y otra información importante sobre la transacción. Para más información accede a la sección **Actividades**** de tu cuenta de Mercado Pago. <br>
> </br> <br/>
> Hay algunas razones que pueden afectar directamente la aprobación de pagos en su tienda. Vea más información en [Razones por las que se rechazan los pagos](/developers/es/docs/prestashop/additional-content/reasons-for-refusals).

![Estado de pago](/images/prestashop/status_es.png)