# VirtueMart – Módulo de Mercado Pago (v3.0.x)

* [Requerimientos](#Requerimientos)
* [Versiones disponibles](#Versiones_disponibles)
* [Funcionalidad](#Funcionalidad)
* [Instalación](#Instalación)
* [Configuración del Checkout básico](#configuración_basico)
* [Configuración del Checkout personalizado - Tarjeta de crédito](#configuración_custom)
* [Configuración del Checkout personalizado - Ticket](#configuración_custom_ticket)
* [Soporte técnico](#Soporte-técnico)

<a name="Requerimientos"></a>
## Requerimientos: ##

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
## Funcionalidad: ##

El módulo del Mercado Pago para VirtueMart esta integrado con las siguientes funcionalidad y soluciones de pago:

* [Checkout básico (Redirect, Iframe ou Modal)](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * Pagos con dos tarjetas

* Checkout Personalizado
    * [Pagos con Tarjetas](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * [Pagos con un click (Clientes y Tarjetas)](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/one-click-charges/javascript/)
    * [Pagos con otros medios](https://www.mercadopago.com.ar/developers/es/solutions/payments/custom-checkout/charge-with-other-methods/)

<a name="Instalación"></a>
## Instalación: ##

1. Descargar el zip del módulo
2. Ir a **Extensions > Extension Manager**
3. En **Upload Package File > Package File** seleccionar **cart-virtuemart.zip** y clickear en **Upload & Installation**

<a name="configuración_basico"></a>
## Configuración del Checkout básico: ##

1. Ir a **VirtueMart > Payment Methods** and click **New**

2. Completar el formulario:
  - **Payment set** setear **Mercado Pago**
  - **Sef Alias** setear **mercadopago**
  - **Payment Method** seleccionar **Mercado Pago**
  - **Published** setear **true**
3. Click en **Save**

4. Ir a **Configuration** <br/>
  Primero que nada, necesitas configurar las credenciales de tu cliente. Para hacerlo, complete tu **Client_id** y **Client_secret** en la sección de la configuración de las credenciales.

![Instrucciones de instalación](/images/virtuemart-credentials.png) <br />

  Puedes obtener tu **Client_id** y **Client_secret**, dependiendo e tu país en los siguientes links:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)

5. Configuraciones del Checkout. <br/>

![Instrucciones de instalación](/images/virtuemart-checkout_settings.png) <br />

  **Typo de Checkout**: Como tus clients van a interactuar con MercadoPaog para pagar sus ordenes.;<br />
  **Auto Redirect**: Si está seteado, la plataforma volverá a tu tienda cuando el pago sea aprobado.<br />
  **Maxima cantidad de cuotas**: La mayor cantidad de cuotas permitidas para tus clientes;<br />
  **Excluir métodos de pago**: Seleccionar los métodos de pago que no quieres trabajar con MercadoPago.<br />
  **Ancho del iFrame**: El ancho, en pixeles, del iFrame (sólo para integraciones que utilizan el iframe);<br />
  **Altura del iFrame**: La altura, en pixeles, del iFrame (sólo para integraciones que utilizan el iframe);<br />
  **Mercado Pago Sandbox**: Testea tus pagos en el ambiente de sandbox de Mercado Pago;<br/>

6. Configuraciones de IPN. <br/>

![Instrucciones para la instalación](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.

7. Otras configuraciones. <br/>

![Instruciones para la instalación](/images/virtuemart-other_settings.png) <br />

  **Categoría de la tienda**: Define la categoría de la tienda. ;<br />
  **Log**: Habilitar/Deshabilitar logs.<br />
  **Logo**: Seleccionar el logo. Debes agregar el archivo en la carpeta /images/stories/virtuemart/payment <br />

<a name="configuración_custom"></a>
## Configuración del Checkout personalizado - Tarjeta de crédito: ##

1. Ir a **VirtueMart > Payment Methods** y hacer click en **New**

2. Completar los campos:
  - **Nombre de pago** setear **Tarjeta de crédito - Mercado Pago**
  - **Sef Alias** setear **mercadopago**
  - **Método de pago** seleccionar **Mercado Pago**
  - **Publicar** setear **true**

3. Click en **Save**

4. Ir a **Configuración**

5. En **Producto Mercado Pago** seleccionar **Tarjeta de crédito - Checkout personalizado**

6. Configura tus credenciales. Para hacerlo, complete tu **access_token** en la sección de configuración de las credenciales.

![Instrucciones para la instalación](/images/virtuemart-credentials_custom.png) <br />

Puedes obtener tu **Public Key** y **Access Token**, dependiendo de tu país, en:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)

7. Configuración del checkout. <br/>

![Instruciones para la instalación](/images/virtuemart-checkout_settings_custom.png) <br />

**Statement Descriptor**: Setea la etiqueta que el cliente verá en su facture.;<br />
**Binary**: Cuando se define como true, el pago solo puede ser aprobado o rechazado. Sino el status de in_process es agregado.<br />

8. Configuración IPN. <br/>

![Instrucciones para la instalación](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.

<a name="configuración_custom_ticket"></a>
## Configuración del Checkout personalizado - Ticket: ##

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

![Instrucciones para la instalación](/images/virtuemart-credentials_custom_ticket.png) <br />

Puedes obtener tu **Public Key** y **Access Token**, dependiendo de tu país, en:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials](https://www.mercadopago.com/mla/account/credentials)
  * Brazil: [https://www.mercadopago.com/mlb/account/credentials](https://www.mercadopago.com/mlb/account/credentials)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials](https://www.mercadopago.com/mlc/account/credentials)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials](https://www.mercadopago.com/mco/account/credentials)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials](https://www.mercadopago.com/mlm/account/credentials)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials](https://www.mercadopago.com/mpe/account/credentials)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials](https://www.mercadopago.com/mlu/account/credentials)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials](https://www.mercadopago.com/mlv/account/credentials)

7. Configuración IPN. <br/>

![Instrucciones para la instalación](/images/virtuemart-ipn_settings.png) <br />

  * **Elige el status para ordenes aprobadas**: Setea el status de la orden cuando los pagos son aprobados.
  * **Elige el status para ordenes pendientes**: Setea el status de la orden cuando los pagos son pendientes.
  * **Elige el status para ordenes están en proceso**: Setea el status de la orden cuando los pagos están en proceso.
  * **Elige el status para ordenes están en mediación**: Setea el status de la orden cuando los pagos están en mediación.
  * **Elige el status para ordenes son devueltas**: Setea el status de la orden cuando los pagos son devueltos.
  * **Elige el status para ordenes tienen contracargos**: Setea el status de la orden cuando los pagos son contracargos.
  * **Elige el status para ordenes canceladas**: Setea el status de la orden cuando los pagos son cancelados.
  * **Elige el status para ordenes rechazadas**: Setea el status de la orden cuando los pagos son rechazados.


<a name="Soporte-técnico"></a>
## Soporte técnico: ##

Caso tenga alguna duda, problema o error tenemos un canal de contacto.
Envié un email a modulos@mercadopago.com con la seguinte información:

* Email de su cuenta de Mercado Pago.
* Detalles sobre su duda, problema o error.
* Archivos que puedan ayudar en el entendimiento (Print-Screen, Video, Archivos de logs, etc).
* Versión del VirtueMart y Joomla.
* Versión del módulo, si está utilizando.
