# ¿Cómo activar los logs de pago?

Los logs proporcionan información completa sobre las transacciones, facilitando la comprensión de los eventos ocurridos. Además, al realizar modificaciones o agregar nuevos métodos de pago, los logs ayudan a validar el correcto funcionamiento de la integración.

El equipo de soporte puede solicitar el envío o la verificación de los _logs_ para rastrear información específica cuando sea necesario. Por lo tanto, es importante mantenerlos activos. Para ello, sigue el siguiente paso a paso:

1. Para acceder a la página de configuración, haz clic en el menú lateral **Stores** y luego en **Configuration**:

![Configuración](/images/adobe-commerce/logs-configuration-es.png)

2. En la configuración, haz clic en el menú lateral **Sales**. En el submenú que se abrirá, selecciona **Payment Methods**.

![Medios](/images/adobe-commerce/logs-payment-method-es.gif)

3. En "Otros medios de pago", localiza el plugin de Mercado Pago y haz clic en el botón **Configure** para abrir las configuraciones.

![Configure](/images/adobe-commerce/logs-configure-es.png)

4. En la pantalla de configuración del plugin, selecciona la opción **Configuraciones básicas** y luego haz clic en **Soporte para desarrolladores**.

![Support](/images/adobe-commerce/logs-support-es.png)

5. Si está marcada, desmarca la casilla de selección **Use system value** y habilita la opción "Debug" seleccionando **Yes**.

![Debug](/images/adobe-commerce/logs-debug-es.png)

6. Una vez hecho esto, haz clic en el botón **Save Config** para guardar la modificación.

Con esta configuración, el plugin de Mercado Pago registrará los logs en el servidor donde está alojada la tienda, lo que permite que un usuario administrador de la tienda los acceda directamente en el servidor.

> NOTE
>
> Nota
>
> Los archivos de registro generados incluyen el `payment.log`, junto con los logs estándar de Adobe Commerce, como `exception.log` y `system.log`. Todos estos logs se pueden encontrar en el directorio `src/var/log/`.