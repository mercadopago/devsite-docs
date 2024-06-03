# Integrar el Device ID

El **Device ID** es una información importante para lograr una mejor seguridad y, en consecuencia, una mejor tasa de aprobación de pagos. Representa un **identificador único para el dispositivo de cada comprador** en el momento de la compra.

Si un comprador frecuente hace una compra desde un dispositivo diferente al habitual, esto podría representar un comportamiento atípico. Aunque puede no ser necesariamente un fraude, el Device ID nos ayuda a refinar la evaluación y evitar el rechazo de pagos legítimos.


## Obtener y enviar el Device ID

Puedes agregar el código de seguridad de Mercado Pago a tu sitio reemplazando el valor de `view` con el nombre de la sección de tu web en la que deseas agregarlo. Si bien lo más importante es hacerlo en la página del checkout, también puedes hacerlo en otras páginas, tales como _home_, _search_ o _ítem_, ya que ayuda a enriquecer la información recolectada.

> NOTE
>
> Importante
>
> En caso de no tener un valor disponible para la sección, puedes dejarlo vacío.

## Uso del Device ID en la web

Para usar el Device ID en la web y prevenir posibles compras fraudulentas, debes seguir los siguientes pasos:


### 1. Agrega nuestro código de seguridad

Para implementar la generación del Device ID en tu sitio, agrega el siguiente código a tu página de Checkout:

```html
<script src="https://www.mercadopago.com/v2/security.js" view="checkout"></script>
```

### 2. Obtén el device ID

Una vez que hayas agregado el código de seguridad de Mercado Pago a tu sitio, automáticamente se crea una variable JavaScript global con el nombre `MP_DEVICE_SESSION_ID`, cuyo valor es el ID del dispositivo. 

Si prefieres asignarlo a otra variable, indica el nombre agregando el atributo `output` al script de seguridad, como en el siguiente ejemplo:
```html
  <script src="https://www.mercadopago.com/v2/security.js" view="checkout" output="deviceId"></script>
```

También puedes **crear tu propia variable** agregando una etiqueta HTML a tu sitio con el identificador `id="deviceID"`, como en el siguiente ejemplo:
```html
  <input type="hidden" id="deviceId">
```

### 3. Uso del Device ID

Una vez que tengas el valor del Device ID, debes **enviarlo a nuestros servidores** al crear un pago. Para hacer esto, agrega el siguiente **encabezado (*header*)** a la solicitud:

```html
X-meli-session-id: device_id
```

> WARNING
> 
> Atención
>
> Recuerda reemplazar `device_id` con el nombre de la variable que contiene su valor de ID del dispositivo.