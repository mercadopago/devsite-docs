# ¿Cómo evitar un contracargo?

No es posible evitar todos los contracargos, pero puedes disminuir la probabilidad de que se reviertan siguiendo estas recomendaciones:

1. Completa la [información de tu negocio](https://www.mercadopago[FAKE][URL][DOMAIN]/business#from-section=menu) para definir cómo quieres aparecer en los resúmenes de tarjetas y en los SMS de confirmación de pago.
   
2. Agrega el código de seguridad de Mercado Pago a tu sitio, reemplazando el valor de `view` con el nombre de la sección en la que deseas agregarlo (Ej.: home, search, item).
```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

>WARNING
>
>Importante
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

3. Asegúrate de agregar todos los detalles de pago y del cliente, como nombre, dirección y medio de pago, en la solicitud [Crear pago](/developers/es/reference/payments/_payments/post).
   
4. [Envía el comprobante del pago](https://www.mercadopago[FAKER][URL][DOMAIN]/ayuda/16170) a tu cliente por e-mail o mensaje de texto.
   
5. Configura y habilita [las notificaciones IPN](/developers/panel/notifications/ipn) para recibir alertas por comportamiento irregular al habilitar **Alerta de fraude**(`delivery_cancellation`) 

>WARNING
>
>Importante
> 
> Al cobrar com Point, revisa los dados del comprador y solicita siempre una identificación
>

