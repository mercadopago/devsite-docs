---
 sites_supported:
  - mlb
---

# Loja Integrada

## ¿Qué es Loja Integrada?

Loja integrada es una **plataforma virtual que te permite recibir pagos con Mercado Pago.** Es el único medio de pago disponible para cuentas gratuitas. 

Puedes activar la opción de [vender directo en tu sitio](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configura-las-formas-de-pago), [recibir pagos con boleto](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuración-de-boleto) y [ofrecer cuotas sin interés](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuración-de-cuotas).

## Pasos para configurar

Los **pasos para comenzar a cobrar con Mercado Pago** son los siguientes:

1. Crea una [cuenta vendedor](https://www.mercadopago.com.br/activities) en Mercado Pago si todavía no tienes una.
1. Instala la aplicación dentro de la tienda.
1. Configura las formas de pago con Mercado Pago.

## Instala Mercado Pago en tu tienda

Para **vincular tu cuenta de Mercado Pago a Loja Integrada**, sigue estos pasos:

1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada.
1. Haz clic en “Mercado Pago” y luego en “Instalar aplicación de Mercado Pago”.
1. Vas a ser redirigido a Mercado Pago para que ingreses con los datos de tu cuenta. Para autorizar la conexión, haz clic en “Permitir”.


    ![Installing Mercado Pago - Loja Integrada](/images/lojaintegrada/lojaintegrada-connect-1.gif)


¡Y listo! Mercado Pago ya se encuentra instalado en tu tienda y puedes empezar a cobrar.


> NOTE
>
> Cambiar cuenta de Mercado Pago
>
> Si quieres cambiar la cuenta de Mercado Pago asociada a tu sitio, es necesarios cerrar y reinstalar el aplicativo.
> 1. Cierra tu cuenta de Mercado Pago si la tienes abierta en tu navegador.
> 1. Haz clic en “Menú de opciones” y luego en “Salir”.
> 1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada, haz clic en “Mercado Pago" y por último, en “Desinstalar aplicativo”.
> 1. Finalmente, vuelve a [instalar Mercado Pago dentro tu tienda](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_instala-Mercado-Pago-en-tu-tienda) con tu nueva cuenta.

## Configura las formas de pago

Después de vincular tu cuenta, tienes la **opción de activar dos tipos de aperturas**: Checkout Transparente y Checkout Redirect. Siempre tienes que activar uno u otro. También, puedes [configurar pagos con boleto](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuración-de-boleto) y [cuotas sin interés](https://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configuración-de-cuotas).

Puedes consultar y configurar las [tasas y plazas](https://www.mercadopago.com.br/settings/release-options) de tus ventas online cuando quieras.

### Checkout Transparente

Permite que el **cliente finaliza la compra en tu sitio**, sin ser redireccionado para otro.

1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada y haz clic en “Mercado Pago”.
1. En el ítem “Checkout Transparente” cambia a la opción “Activado”.
1. Finalmente, haz clic en “Guardar cambios”.

### Mercado Pago Redirect

En este caso, el **comprador será redireccionado a Mercado Pago para realizar el pago** y terminar la compra.

1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada y haz clic en “Mercado Pago”.
1. En el ítem “Mercado Pago Redirect” cambia a la opción “Activado”.
1. Finalmente, haz clic en “Guardar cambios”.


    ![Activating Checkout transparent and Checkout redirected - Loja Integrada](/images/lojaintegrada/lojaintegrada-checkout-1.gif)


Completa los datos de tu tienda que quieras que aparezcan al realizar un pago:

- **Nombre de la Factura del Comprador**. Escribe el nombre que aparecerá en la factura de tu cliente para que pueda reconocerte (máximo de 11 caracteres).
- **Valor mínimo**. Configura el valor mínimo de compra que quieras. Por defecto, es de R$ 5,00.
- Haz clic en “Guardar cambios”.

## Configuración de boleto

 **Ofrece boleto como opción de pago**:

1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada y haz clic en “Mercado Pago”.
1. En el ítem “Boleto bancário” cambia a la opción “Activado”.
1. Luego, configura un valor mínimo para estos pagos. En caso de querer recibir todos, deja el campo con valor 0.
1. Y si quieres que tus pagos con boleto tengan un descuento, marca la opción “Usar descuento en tus boletos?” y completa el porcentaje que quieras ofrecer como descuento en “Descuento aplicado”.
1. Finalmente, haz clic en “Guardar cambios”.


    ![Setting ticket - Loja Integrada](/images/lojaintegrada/lojaintegrada-ticket-1.gif)


## Configuración de cuotas

**Ofrece la opción de pagar con cuotas** sin interés en tu sitio con Mercado Pago.

> WARNING
>
> Importante
>
> Para que funcione correctamente, es necesario tener la configuración de ofrecer cuotas sin interés activada en tu [cuenta de Mercado Pago](ttps://www.mercadopago.com.br/developers/es/plugins_sdks/plugins/unofficial/lojaintegrada#bookmark_configura-las-cuotas-sin-interés-en-tu-cuenta-de-Mercado-Pago).

1. Accede a las [configuraciones de formas de pago](https://app.lojaintegrada.com.br/painel/configuracao/pagamento/listar) en el menú de Loja Integrada y haz clic en “Mercado Pago” y navega hasta “Configuración de cuotas”.
1. Completa los siguientes campos:
  - Solo para pagos de Checkout Transparentes, **marca la opción de utilizar el servicio de cuotas externo de Mercado Pago**.
  - **Completa el valor mínimo y máximo de cuotas** que quieras recibir.
  - Y por último, según la configuración de tu cuenta, **elige el número de cuotas sin interés para tus pagos**.
1. Finalmente, haz clic en “Guardar cambios”.


    ![Setting credit card - Loja Integrada](/images/lojaintegrada/lojaintegrada-credit-card-1.gif)


### Configura las cuotas sin interés en tu cuenta de Mercado Pago

1. Ingresa a tu [cuenta de Mercado Pago](https://www.mercadopago.com.br/business) y ve a "Tu negocio".
1. Accede en la opción “Configuraciones”, navega hasta “Ofrecer cuotas sin interés” y haz clic en “Activar”.
1. Elige “¿Cuántas quieres ofrecer?” y confirma los cambios con el botón “Activar”.


    ![Setting account installment - Loja Integrada](/images/lojaintegrada/lojaintegrada-account-installment-1.gif)


> Para más información, visita el [sitio oficial de Loja Integrada](https://lojaintegrada.com.br/).
