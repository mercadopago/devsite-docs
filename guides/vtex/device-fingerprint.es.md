# Configurar Device Fingerprint

Mercado Pago tiene sus propias herramientas de prevención de fraude, y el Device Fingerprint es una de ellas. Se trata de un identificador único para el dispositivo con el que el comprador realiza una compra. Device Fingerprint actúa en el procesamiento de pagos con el objetivo de mejorar el análisis del riesgo de fraude en cada transacción.

Siempre que sea posible, te recomendamos que envíes información sobre el comportamiento del cliente para detectar movimientos inusuales y evitar transacciones fraudulentas. No te preocupes, cuidamos los datos de tus clientes y no los compartimos con nadie.

Para configurar **Device Fingerprint**, sigue los pasos a continuación:

1. Ve al panel de administración de tu tienda y selecciona **Checkout > Configuración de la Tienda**.
2. Haz clic en el ícono **editar**, referente a la configuración de tu site.
3. En el módulo **Archivos**, accede a la pestaña **Código** y haz clic en **checkout6-custom.js**.
4. Alli, copia y pega el siguiente código, reemplazando la advertencia: 

```javascript
var script = document.createElement("script");
script.src = "https://www.mercadopago.com/v2/security.js";
script.setAttribute("output","vtex.deviceFingerprint");
script.setAttribute("view","checkout");
document.body.appendChild(script);
```

5. Haz clic en **Guardar**.

![Configuración de fingerprint](/images/vtex/devicefingerprint-imagenv2-es.gif)

Ya tienes Device Fingerprint configurado para mejorar la evaluación del riesgo de fraude.

> NOTE
>
> Nota
>
> Si quieres saber más información sobre cómo utilizar el Device Fingerprint para optimizar la aprobación de tus pagos, dirígete a [Cómo mejorar la aprobación de pagos](/developers/es/docs/vtex/how-tos/payment-approval) o bien consulta la [documentación de apoyo de VTEX](https://help.vtex.com/tutorial/configuring-mercado-pagos-device-fingerprint--m2knP9z69HGHHBIiFq0Ga).
