---
  indexable: false
---

# Credenciales

Mercado Pago tiene dos tipos de pares de credenciales, **CLIENT_ID** | **CLIENT_SECRET** y **PUBLIC_KEY** | **ACCESS_TOKEN**. Estas credenciales sirven como un tipo de clave personal para que usted cree su método de pago e integre el Mercado Pago con su tienda virtual. El siguiente es el procedimiento para obtener las credenciales.

## Acceder a la cuenta de Mercado Pago

Para obtener sus credenciales, primero acceda a su cuenta de Mercado Pago en el link [https://www.mercadopago.com/](https://www.mercadopago.com.ar/).
Si no tienes una cuenta, haz clic en **"Inscríbete"**. Rellene el formulario de acuerdo con el tipo de cuenta que desee. Recuerde que esta cuenta estará vinculada a su tienda virtual.

![painelMercadoPago](/images/painelMercadoPago.gif)

## Accdet Credenciales

Una vez Autenticado en su cuenta de Mercado Pago, acceda a lo siguiente link: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mla/account/credentials/]([FAKER][CREDENTIALS][URL]).
Usted accede a la página de credenciales de su cuenta.

![paginaCredenciais](/images/paginaCredenciais.gif)

En esta página usted tendrá acceso a las claves de configuración de su cuenta Mercado Pago para instalar la integración por API o Checkout Pro (Redirect, LightBox o Iframe) en su Tienda Virtual.

> NOTE
>
> Nota
>
> Para configurar la integración por API será necesario informar las credenciales **PUBLIC_KEY** y **ACCESS_TOKEN**.
> Para configurar el Checkout Pro (Redirect, LightBox o Iframe) será necesario informar las credenciales **CLIENT_ID** y **CLIENT_SECRET**.

## Formulario Quiero ir a Producción

Al elegir la opción de integración por API, será necesario rellenar el formulario "Quiero ir a producción", de lo contrario su integración quedará inhabilitado para recibir pagos.
Haga clic en "Quiero ir a la producción" para acceder al formulario.

![queroIrParaProducao](/images/queroIrParaProducao.gif)

* En **"Sitio web o App"** escribir URL del sitio;
* En **"Nombre"** escribir su nombre;
* En **"Documento"** escribir el tipo (DNI, CI, LC, SE, Otro) e insertar solamente los dígitos (por ejemplo DNI99999999R);
* En **"Fecha de nacimiento"** insertar la fecha del dueño del documento;
* En **"Dirección postal"** rellene la dirección completa con calle, número, complemento, barrio, ciudad, estado y código postal;
* En **"Comentarios"** describir el segmento que trabajará y los productos que vendrá en su tienda;
* Marque los **"checks"** de las 3 afirmaciones;
* Haga clic en **"Enviar"**.

Listo! Usted será redirigido a la página inicial de las credenciales, y su integración por API configurada en su tienda virtual estará en condiciones de transacción.
