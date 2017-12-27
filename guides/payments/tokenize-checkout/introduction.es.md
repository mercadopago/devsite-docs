---
  sites_supported:
      - mla
---

# Tokenize Checkout

Con el Tokenize Checkout de Mercado Pago puedes obtener los datos necesarios para realizar un pago, sin preocuparte por crear las pantallas de checkout. Esto simplifica y hace más seguro el procesamiento de pagos online.

Integra el Tokenize Checkout en tu sitio para brindarle a tus usuarios una estilizada experiencia de compra que Mercado Pago mantiene en constante mejora.

Los datos sensibles de las tarjetas quedan fuera de tus servidores, y Mercado Pago cuida todos los aspectos relacionados al cumplimiento de las normativas PCI.

## Consideraciones generales

Para garantizar la mejor experiencia y seguridad para tus usuarios, te recomendamos tener en cuenta los siguientes puntos:

### Dominio seguro

Es recomendable activar HTTPS en tu página de checkout. Mercado Pago se hace cargo del resto.

### Mobile-ready

Para una correcta visualización, necesitas establecer el viewport, agregando el siguiente código dentro de la etiqueta <head> de tu página de checkout:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
```

### Navegación

Ten en cuenta evitar el uso del hash `#` en la URL de tu página de checkout. Mercado Pago utiliza esta técnica para permitir una navegación transparente entre la ejecución del Tokenize Checkout y tu página de checkout (ver punto 4.3).

### Procesamiento del pago

Mercado Pago no crea un pago, sino que solo completa una parte del proceso de pago. Tienes que programar el procesamiento del pago y la pantalla en la que le comunicas al usuario que el pago se ha efectuado. Puedes ver cómo en la sección *"4. Procesa el pago"*.

### Promociones

Junto con el checkout puedes incluir el [link de promociones](https://www.mercadopago.com.ar/promociones) de Mercado Pago, o bien implementar uno de nuestros [banners de medios de pago](https://www.mercadopago.com/mla/com.mercadopago.web.landing.LandingController?id=banners).

### Soporte de navegadores

Para garantizar una navegación segura y cumplir con las normativas PCI, Mercado Pago no brinda una experiencia de pago en los browsers que no soportan el protocolo TLS 1.0 o mayor, o cuyo porcentaje de visitas no es significativo.

En el caso de brindar una experiencia nula, se le indicará al usuario que no podrá realizar el pago hasta que actualice su navegador, ya que el mismo puede representar un problema de seguridad.

Soporte browsers desktop:

- Chrome: *completo*
- Firefox: *completo*
- Internet Explorer 7, 8, 9, 10: *nulo*
- Internet Explorer 11: *completo*
- Edge: *completo*
- Safari: *completo*
- Opera: *completo*

Soporte browsers mobile:

- Chrome: *completo*
- Firefox: *completo*
- Windows Phone (Internet Explorer Mobile): *nulo*
- Safari Mobile: *completo*
- Opera Mini: básico
- Android Browser: *nulo (hasta la versión 4.4.4 inclusive)*

## Cómo implementar el botón

### 1. Incluye el código para mostrar el botón

Para hacer uso de este botón debes comenzar insertando el siguiente código en el lugar donde va a estar ubicado dentro de tu página de checkout:

```html
<form action="/procesar-pago.php" method="POST">
  <script
  src="https://beta.mercadopago.com.ar/integrations/v1/checkout.js"
  data-public-key="ENV_PUBLIC_KEY"
  data-transaction-amount="123.45">
  </script>
</form>
```

### 2. Configura los datos

En el fragmento de código del punto 1, encontrarás algunos datos que deben ser configurados:

#### "action"

Es la URL de la página donde procesarás el pago. Por ejemplo:

```html
<form action="/procesar-pago.php">...
```

> NOTA: Tienes que programar el procesamiento del pago y la pantalla en la que le avisas al usuario que el pago se ha efectuado (ver sección "4. Procesa el pago").

#### "data-public-key"

Tu [clave pública](https://www.mercadopago.com.ar/account/credentials) es la que te identifica para poder iniciar el checkout de forma segura. Por ejemplo:

```html
data-public-key="ENV_PUBLIC_KEY"
```

> NOTA: Esta es una clave pública del entorno de pruebas. Para capturar tarjetas reales deberás reemplazarla por tu [clave pública productiva](https://www.mercadopago.com.ar/account/credentials).

#### "data-transaction-amount"

Es el monto que Mercado Pago le mostrará a tus usuarios al pedirle los datos de pago:

```html
data-transaction-amount="123.45"
```

### 3. Personaliza el botón *(opcional)*

Mercado Pago imprimirá el botón de pago en el mismo lugar donde hayas incluido el código:

![Payment button](/images/paybutton.png)

Opcionalmente, puedes personalizar el botón para que se adapte al diseño de tu sitio.

#### Personalización visual

Para utilizar tu propio diseño, incluye el siguiente código CSS:

```css
button.mercadopago-button {
  /* Tus atributos CSS aquí */
}
```

Por ejemplo:

```css
button.mercadopago-button {
  background-color: #fff;
  color: #111;
  border: 1px solid #111;
  border-radius: 0;
}
```

![Payment button - Modified CSS](/images/paybutton-modified-css.png)


#### Personalización de texto

Por defecto, el botón contiene el texto "Pagar". Puedes modificar el texto del botón agregando el atributo "data-button-label" al fragmento de código del punto 1. Por ejemplo:

```html
data-button-label="Comprar"
```

![Payment button - Modified label](/images/paybutton-modified-label.png)

### 4. Procesa el pago

Una vez que hayas obtenido el token de la tarjeta de crédito de tu usuario desde el Tokenize Checkout, puedes usar la API de Mercado Pago **en tu servidor** para generar el pago.

#### 4.1. Obtén los datos necesarios

En la URL que hayas definido en el atributo "action" del punto 2 (por ejemplo: `"/procesar-pago.php"`), recibirás algunos de los datos necesarios para realizar un pago.

A través del método POST recibirás los siguientes datos:

- **token:** Identificador del token de tarjeta.
- **installments:** Cantidad de cuotas seleccionada por el usuario.
- **payment_method_id:** Método de pago elegido para hacer el pago.
- **issuer_id:** El emisor del método de pago elegido.

Por temas que pueden comprometer la seguridad, **no** recibirás los siguientes datos:

- **transaction_amount:** El monto por el cual se realizará el pago.
- **payer.email:** El email del usuario al cuál se le hará el cobro por el monto definido.

**En ambos casos deberás usar los mismos datos con los que configuraste el botón.**

Ejemplos:

**php**

```
$token = $_REQUEST["token"];
```

**java**

```
String token = request.getParameter("token");
```

**node**

```
const token = req.body.token;
```

**ruby**

```
token = request.body.token
```

**c#**

```
token = Request["token"]
```

#### 4.2. Genera un pago

Para realizar el pago, debes realizar un API call usando el [SDK de Mercado Pago](http://beta.mercadopago.com/developers/es/plugins) que corresponda con el lenguaje de programación que estés utilizando en tu sitio.


#### 4.3. Comunícale al usuario

La respuesta que recibirás de la API de Payments de Mercado Pago será la siguiente:

```json
{
  "status": "approved",
  "status_detail": "accredited",
  "id": 3055677,
  "date_approved": "2017-02-23T00:01:10.000-04:00",
  "payer": {
    ...
    },
    "payment_method_id": "master",
    "payment_type_id": "credit_card",
    "refunds": [],
    ...
}
```

La respuesta tendrá el estado del pago (approved o rejected). Por lo tanto, podrás mostrarle al usuario un mensaje acorde a la situación de su pago.

##### En caso de problemas... *(opcional)*

Cuando la API de Payments de Mercado Pago especifique el estado "rejected" puedes ofrecerle al usuario la opción de volver a hacer el pago. Para eso existe una forma de redirigir al usuario a la pantalla de checkout con el modal de pago abierto.

Para eso, incluye un link con la URL de tu página de checkout, incluyendo "#checkout" al final.

Por ejemplo:

Si `https://tusitio.com/carrito` es donde has incluido el botón de pago de Mercado Pago, entonces `https://tusitio.com/carrito#checkout` será la misma página con el modal de pago abierto por defecto.

## Ambiente de pruebas

### Genera un token

Para crear un token puedes hacer un POST a la siguiente URL. Para pruebas, usa la public_key de test.

POST:

```
https://api.mercadopago.com/v1/card_tokens?public_key=ENV_PUBLIC_KEY
```

Con body:

```json
{
  "card_number": "4544610257481730",
  "security_code": "122",
  "expiration_month": "7",
  "expiration_year": "2030",
  "cardholder": {
    "name": "Test test",
    "identification": {
      "type": "DNI",
      "number": "12345678"
    }
  }
}
```

#### Para hacer el pago

Una vez hecho esto, usando el ID del token de la respuesta, haz el pago, usando tu access_token de test.

Para salir a producción deberás enviar tu access_token productivo, pero para que esto funcione es necesario que hayas pasado por homologación (si no, la API de Payments devolverá un error).

POST:

```
https://api.mercadopago.com/v1/payments?access_token=ENV_ACCESS_TOKEN
```

Con body:

```json
{
  "transaction_amount" : 100,
  "installments" : 1,
  "payment_method_id" : "visa",
  "token" : "ff8080814c11e237014c1ff593b57b4d",
  "payer" : {
    "email": "test_user_19653727@testuser.com"
  }
}
```

> INFO: Cada vez que hagas un pago, el token se marcará como usado. Se pueden crear tantos tokens como se necesiten, usando el mismo API call, sólo cambiando el body del pago.

> INFO: Puedes ver tus credenciales (public_key + acces_token de test y productivos) en [este enlace](https://www.mercadopago.com/mla/account/credentials).
