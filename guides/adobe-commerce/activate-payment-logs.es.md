# ¿Cómo activar los logs de pago?

Los _logs_ proporcionan información completa sobre las transacciones, facilitando la comprensión de los eventos ocurridos. Además, al realizar modificaciones o agregar nuevos métodos de pago, los _logs_ ayudan a validar el correcto funcionamiento de la integración.

El equipo de soporte puede solicitar el envío o verificación de los _logs_ para rastrear información específica cuando sea necesario, por lo que es importante mantenerlos activos.

Sigue los pasos a continuación para activar los _logs_ de pago.

1. Para acceder a la página de configuración, haz clic en el menú lateral **Stores > Configuration**:

![Configuración](/images/adobe-commerce/logs-configuration-es.png)

2. En **configuración**, haz clic en el menú lateral **Sales**. En el submenú que se abrirá, selecciona **Payment Methods**.

![Medios](/images/adobe-commerce/logs-payment-method-es.gif)

3. En **Otros medios de pago**, localiza el plugin de Mercado Pago y haz clic en el botón **Configure** para abrir las configuraciones.

![Configure](/images/adobe-commerce/logs-configure-es.png)

4. En la pantalla de configuración del plugin, selecciona la opción **Configuraciones básicas > Soporte para desarrolladores**.

![Support](/images/adobe-commerce/logs-support-es.png)

5. Si está marcada, desmarca la casilla de selección **Use system value** y habilita la opción **Debug** haciendo clic en **Yes**.

![Debug](/images/adobe-commerce/logs-debug-es.png)

6. Una vez hecho esto, haz clic en el botón **Save Config** para guardar la modificación.

Con esta configuración, el plugin de Mercado Pago registra los _logs_ en el servidor donde la tienda está alojada, permitiendo que un usuario administrador tenga acceso a ellos fácilmente.

> NOTE
>
> Nota
>
> Los archivos de registro generados incluyen el `payment.log`, junto con los _logs_ estándar de Adobe Commerce, como `exception.log` y `system.log`. Todos estos _logs_ se pueden encontrar en el directorio `src/var/log/`.