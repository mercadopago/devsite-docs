# osCommerce - Mercado Pago Module (v2.2 - 2.3)

* [Funcionalidad](#features)
* [Versión Disponibles](#available_versions)
* [Requisitos](#requirements)
* [Instalación](#installation)
* [Configuración](#setup)
* [Soporte técnico](#Soporte-técnico)

<a name="features"></a>
## Funcionalidad: ##

El módulo del Mercado Pago para OsCommerce esta integrado con las siguientes funcionalidad y soluciones de pago:

* [Checkout básico (Redirect, Iframe ou Modal)](https://www.mercadopago.com.ar/developers/es/solutions/payments/basic-checkout/receive-payments/)
    * Pagos con dos tarjetas


<a name="available_versions"></a>
## Versión Disponibles: ##

Versión del Plugin | Status | Versiones compatibles
-------------- | ------ | -------------------
v2.2 | Deprecated (Old version) | osCommerce 2.2
v2.3 | Stable (Current version) | osCommerce 2.3

<a name="requirements"></a>
## Requisitos: ##

**PHP**

* PHP v4+ (PHP v5+ recommended)
* Required extensions: MySQL, cURL

**Database**

* MySQL v3+ (MySQL v5+ recommended)


<a name="installation"></a>
## Instalación: ##

1. Descargue el modulo del Mercado Pago:
    * osCommerce 2.2
    * osCommerce 2.3

2. Copia la carpeta del módulo en la raíz de tu tienda OsCommerce.


<a name="setup"></a>
## Configuración: ##

1. En la página de administración de tu tienda, vaya hasta la opción **Modules > Payment**.

2. Haz clic en **Install Module**.

3. En **Mercado Pago** haga clic en el botón **Install Module**.

4. Seleccione el país:

	![Country Selecion](/images/plugins/modules/oscommerce/CountrySelection.png)

5. Seleccione los métodos de pago que **no quiere aceptar** en su tienda:

	![Payment Methods Selection](/images/plugins/modules/oscommerce/PaymentMethodsSelection.png)

6. Selecciona la categoría de la tienda:

	![Category Selection](/images/plugins/modules/oscommerce/CategorySelection.png)

7. En la siguiente pantalla, verá que el **MercadoPago** está listado en los métodos de pago. Ahora, haga clic en **Edit** situado en la derecha.

	![Payment Method List](/images/plugins/modules/oscommerce/PaymentMethodList.png)

8. Ahora, es muy importante configurar las credenciales **CLIENT_ID** y **CLIENT_SECRET**.

	Obtenga su CLIENT_ID e CLIENT_SECRET de acuerdo con su país:

  * Argentina: [https://www.mercadopago.com/mla/account/credentials?type=basic](https://www.mercadopago.com/mla/account/credentials?type=basic)
  * Brasil: [https://www.mercadopago.com/mlb/account/credentials?type=basic](https://www.mercadopago.com/mlb/account/credentials?type=basic)
  * Chile: [https://www.mercadopago.com/mlc/account/credentials?type=basic](https://www.mercadopago.com/mlc/account/credentials?type=basic)
  * Colombia: [https://www.mercadopago.com/mco/account/credentials?type=basic](https://www.mercadopago.com/mco/account/credentials?type=basic)
  * Mexico: [https://www.mercadopago.com/mlm/account/credentials?type=basic](https://www.mercadopago.com/mlm/account/credentials?type=basic)
  * Uruguay: [https://www.mercadopago.com/mlu/account/credentials?type=basic](https://www.mercadopago.com/mlu/account/credentials?type=basic)
  * Venezuela: [https://www.mercadopago.com/mlv/account/credentials?type=basic](https://www.mercadopago.com/mlv/account/credentials?type=basic)
  * Peru: [https://www.mercadopago.com/mpe/account/credentials?type=basic](https://www.mercadopago.com/mpe/account/credentials?type=basic)


	Después de realizar la instalación y configuración básica, otras opciones están disponibles para ser configuradas:

	- **Sandbox:** Por defecto está configurado el modo sandbox. 

	- **Kind of Checkout:** Puede elegir qué tipo de checkout se adapta mejor con su layout de front-end, recomendamos el checkout iframe.

	- **Instant Payment Notification (IPN) URL:** Su URL de IPN, donde recibirá notificaciones de actualizaciones de pago.

9. **NO ACTUALIZE** los campos *Country*, *Exclude Methods*, *Cod Status (fields…)*. Si desea cambiar estos campos, desinstale el módulo y vuelva a instalar el módulo.

	![Do Not Touch](/images/plugins/modules/oscommerce/DoNotTouch.png)

10. Los campos **Sucess Url** y **Pending url** se generan automáticamente, si está realizando pruebas en un entorno sandbox, los pagos no funcionará correctamente. Puede cambiar estas URL a una de su elección.

11. Para finalizar, **Guarde** la configuración.

***NOTA:*** Este módulo funcionará exclusivamente con las monedas:

* Argentina:
	* **ARS** (Argentine Peso)
* Brazil:
	* **BRL** (Brazilian Real)
* Chile:
	* **CLP** (Chilean Peso)
* Colombia:
	* **COP** (Colombian Peso)
* Mexico:
	* **MXN** (Mexican Peso)
* Peru:
	* **PEN** (Peruvian Sol)
* Venezuela:
	* **VEF** (Venezuelan Bolivar)

<a name="Soporte-técnico"></a>
## Soporte técnico: ##

Caso tenga alguna duda, problema o error tenemos un canal de contacto.
Envié un email a modulos@mercadopago.com con la seguinte información:

* Email de su cuenta de Mercado Pago.
* Detalles sobre su duda, problema o error.
* Archivos que puedan ayudar en el entendimiento (Print-Screen, Video, Archivos de logs, etc).
* Versión del OsCommerce.
* Versión del módulo, si está utilizando.

No te preocupes... Vamos a ayudarle lo más rápidamente posible.