# ¿Cómo evitar un contracargo?

No es posible evitar todos los contracargos, pero puedes disminuir la probabilidad de que se reviertan siguiendo estas recomendaciones:

1. **Completa la información de tu negocio** para definir cómo quieres aparecer en los resúmenes de tarjetas y en los SMS de confirmación de pago.
   
2. Agrega el código de seguridad de Mercado Pago a tu sitio, reemplazando el valor de `view` con el nombre de la sección en la que deseas agregarlo (Ej.: home, search, item).
```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

> WARNING
>
> Atención
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

3. Asegúrate de agregar todos los detalles de pago y del cliente, como nombre, dirección y medio de pago, en la solicitud [Crear pago](/developers/es/reference/payments/_payments/post).
   
4. [Envía el comprobante del pago](https://www.mercadopago.com.ar/ayuda/16170) a tu cliente por e-mail o mensaje de texto.
   
## Alerta de fraude

<<<<<<< HEAD
Te avisaremos vía notificaciones IPN  cuando detectemos un comportamiento irregular o recibamos una notificación de que la tarjeta usada fue robada. Además,  nos contactaremos  vía e-mail para avisarte. Ante esta situación, debes [cancelar la compra](/developers/es/guides/additional-content/sales-processing/cancellations-and-refunds) y devolver el dinero al comprador para evitar el contracargo.

Configura y habilita [las notificaciones IPN](/developers/panel/ipn) para recibir alertas por comportamiento irregular al habilitar **Alerta de fraude**(`delivery_cancellation`).
=======
Te avisaremos vía notificaciones IPN o Webhook cuando detectemos un comportamiento irregular o recibamos una notificación de que la tarjeta usada fue robada. Además,  nos contactaremos  vía e-mail para avisarte. Ante esta situación, debes [cancelar la compra](/developers/es/guides/additional-content/sales-processing/cancellations-and-refunds) y devolver el dinero al comprador para evitar el contracargo.

Configura y habilita las notificaciones [IPN](/developers/panel/ipn) o [Webhook](/developers/panel/webhooks) desde tu dashboard, y recibirás alertas por comportamiento irregular al activar **Alerta de fraude** (`delivery_cancellation`).
>>>>>>> 38a7e1757d73aa0a25ec209376144363041bffa1

> NOTE
>
> Importante
> 
> Al cobrar con Point, revisa los datos del comprador y solicita siempre una identificación.