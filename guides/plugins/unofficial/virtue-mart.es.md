# VirtueMart – Módulo de Mercado Pago (v3.0.x)

## Requerimientos ##

Basicamente, los requerimientos de este plugin son los mismos que se necesitan para utilizer Virtuemart y Joomla. Tu máquina debería tener:

**Plataformas**

* <a href="https://www.joomla.org/download.html">Joomla</a> 2.5 o mayor;
* <a href="https://virtuemart.net/downloads/">VirtueMart</a> 3.0.x o mayor;

**Web Server Host**

* <a href="http://php.net/">PHP</a> 5.3 o mayor con soporte CURL;
* <a href="http://www.mysql.com/">MySQL</a> version 5.5;
* <a href="https://httpd.apache.org/">Apache 2.x</a>.

**Certificado SSL**

Si estás utilizando Checkout básico, es un requerimiento que tengas un certificado SSL y el formulario del pago proveído bajo una página HTTPS.
Durante los testeos en modo Sandbox, puedes operar sobre HTTP, pero para la homologaión necesitarás adquirir este certificado en caso de que no lo tengan.


<a name="Versiones_disponibles"></a>
## Versiones disponibles ##
<table>
  <thead>
    <tr>
      <th>Version del plugin</th>
      <th>Status</th>
      <th>Versiones compatibles de Virtuemart</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>v2.0.3</td>
      <td>Estable (Versión actual)</td>
      <td>VirtueMart v3.0.x</td>
    </tr>
  </tbody>
</table>

<a name="Funcionalidad"></a>
## Funcionalidad ##

El módulo de Mercado Pago para VirtueMart esta integrado con las siguientes funcionalidad y soluciones de pago:

* [Checkout básico (Redirect, Iframe ou Modal)](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * Pagos con dos tarjetas

* Checkout Personalizado
    * [Pagos con Tarjetas](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Pagos con un click (Clientes y Tarjetas)](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pagos con otros medios](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/charge-with-other-methods/)

## Instalación ##

1. Descargar el zip del módulo
2. Ir a **Extensions > Extension Manager**
3. En **Upload Package File > Package File** seleccionar **cart-virtuemart.zip** y clickear en **Upload & Installation**

## Configuración del Checkout básico ##

1. Ir a **VirtueMart > Payment Methods** and click **New**

2. Completar el formulario:
  - **Payment set** setear **Mercado Pago**
  - **Sef Alias** setear **mercadopago**
  - **Payment Method** seleccionar **Mercado Pago**
  - **Published** setear **true**
3. Click en **Save**

4. Ir a **Configuration** <br/>
  Primero que nada, necesitas configurar las credenciales de tu cliente. Para hacerlo, completa tu **Client_id** y **Client_secret** en la sección de la configuración de las credenciales.

![Setting client id and client secret](/images/virtuemart-credentials.png) <br />

Encuentra tu **Client id** y **Client secret** en la [sección de Credenciales]([FAKER][CREDENTIALS][URL_BASIC]).

5. Configuraciones del Checkout. <br/>

![Settings checkout](/images/virtuemart-checkout_settings.png) <br />

  **Typo de Checkout**: Como tus clients van a interactuar con MercadoPaog para pagar sus ordenes.;<br />
  **Auto Redirect**: Si está seteado, la plataforma volverá a tu tienda cuando el pago sea aprobado.<br />
  **Maxima cantidad de cuotas**: La mayor cantidad de cuotas permitidas para tus clientes;<br />
  **Excluir métodos de pago**: Seleccionar los métodos de pago que no quieres trabajar con MercadoPago.<br />
  **Ancho del iFrame**: El ancho, en pixeles, del iFrame (sólo para integraciones que utilizan el iframe);<br />
  **Altura del iFrame**: La altura, en pixeles, del iFrame (sólo para integraciones que utilizan el iframe);<br />
  **Mercado Pago Sandbox**: Testea tus pagos en el ambiente de sandbox de Mercado Pago;<br/>

6. Configuraciones de IPN. <br/>

![Setting Notification - IPN](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.

7. Otras configuraciones. <br/>

![Store category](/images/virtuemart-other_settings.png) <br />

  **Categoría de la tienda**: Define la categoría de la tienda. ;<br />
  **Log**: Habilitar/Deshabilitar logs.<br />
  **Logo**: Seleccionar el logo. Debes agregar el archivo en la carpeta /images/stories/virtuemart/payment <br />

## Configuración del Checkout personalizado - Tarjeta de crédito

1. Ir a **VirtueMart > Payment Methods** y hacer click en **New**

2. Completar los campos:
  - **Nombre de pago** setear **Tarjeta de crédito - Mercado Pago**
  - **Sef Alias** setear **mercadopago**
  - **Método de pago** seleccionar **Mercado Pago**
  - **Publicar** setear **true**

3. Click en **Save**

4. Ir a **Configuración**

5. En **Producto Mercado Pago** seleccionar **Tarjeta de crédito - Checkout personalizado**

6. Configura tus credenciales. Para hacerlo, complete tu **Access token** en la sección de configuración de las credenciales.

![Settings credentials - Transparent checkout - Credit card](/images/virtuemart-credentials_custom.png) <br />

Para poder encontrarlas, ve a tus [credenciales]([FAKER][CREDENTIALS][URL]).

7. Configuración del checkout. <br/>

![Instruciones para la instalación](/images/virtuemart-checkout_settings_custom.png) <br />

**Statement Descriptor**: Setea la etiqueta que el cliente verá en su facture.;<br />
**Binary**: Cuando se define como true, el pago solo puede ser aprobado o rechazado. Sino el status de in_process es agregado.<br />

8. Configuración IPN. <br/>

![Setting Notification - IPN ](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.

## Configuración del Checkout personalizado - Ticket

1. Ir a **VirtueMart > Payment Methods** y hacer click en **New**

2. Completar los campos:
  - **Nombre de pago** setear **Ticket - Mercado Pago**
  - **Sef Alias** setear **mercadopago**
  - **Método de pago** seleccionar **Mercado Pago**
  - **Publicar** setear **true**

3. Click en **Save**

4. Ir a **Configuración** tab

5. En **Mercado Pago Product** seleccionar **Ticket - Checkout Custom**

6. Ahora configure tus credenciales. Para hacerlo, complete **public_key** y **access_token** en la sección de configuración de credenciales.

![Settings credentials - Transparent checkout - Ticket](/images/virtuemart-credentials_custom_ticket.png) <br />

Puedes obtener tu **Access Token** [en la sección credenciales]([FAKER][CREDENTIALS][URL]).

> Encuentra toda la información sobre tus credenciales en nuestras [preguntas frecuentes](https://www.mercadopago.com.ar/developers/es/guides/faqs/credentials/). 

7. Configuración IPN. <br/>

![Setting Notification - IPN - Custom Checkout](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.

## Soporte técnico

Contáctanos a nuestro canal de [soporte](/support) con la siguiente información:

* Email de su cuenta de Mercado Pago.
* Detalles sobre su duda, problema o error.
* Archivos que puedan ayudar en el entendimiento (Print-Screen, Video, Archivos de logs, etc).
* Versión del VirtueMart y Joomla.
* Versión del módulo, si está utilizando.
