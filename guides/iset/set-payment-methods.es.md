---
 sites_supported:
  - mlb
---

# Configura las formas de pago

Luego de activar Mercado Pago, tienes la opción de ofrecer los siguientes formas de pago: [Checkout Pro](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/iset/set-payment-methods#bookmark_checkout_pro), [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/iset/set-payment-methods#bookmark_checkout_transparente) o [ambos checkouts](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/iset/set-payment-methods#bookmark_ambos_checkouts).

También tienes la opción de [ofrecer cuotas sin interés](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/iset/set-interestfree-installments) y configurar las [tasas y plazos](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/release-options/) de tus ventas online cuando quieras.

## Configura los tipos de pago

1. Ingresa en “Formas de pago” en la sección de Módulos panel de administración de tu tienda. 
2. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
3. Selecciona los tipos de pagos que quieras ofrecer: “Boleto bancario” y/o “Tarjeta de crédito”.
4. Completa en "Breve descripción/Nombre de la tienda" el nombre que aparecerá en la factura de tu cliente para que pueda reconocerte (máximo de 13 caracteres).
5. Haz clic en “Cerrar” y después en “Guardar cambios”.

![Payments Connect - iSET](/images/iset/iset_configuration_methods_2.gif)

## Checkout Pro

**El comprador será redireccionado a Mercado Pago** para realizar el pago y terminar la compra.

Para activar este modelo, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
2. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
3. En la sección Modelo de checkout, elige la opción “Patrón”.
4. Agrega el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/rofile#from-section=menu) en “E-mail de registro en Mercado Pago”.
5. Completa los campos Client ID y Client Secret con las [credenciales](/developers/es/docs/iset/additional-content/your-integrations/credentials) de tu cuenta de Mercado Pago.
6. Haz clic en “Cerrar” y después en “Guardar cambios”.

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_padrao_3.gif)

## Checkout Transparente

Permite que el **cliente finalice la compra en tu tienda** sin ser redireccionado para otro sitio.

Para activar este modelo, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
1. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
1. En la sección Modelo de checkout, elige la opción “Transparente”.
1. Completa el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/profile#from-section=menu) en “E-mail de registro en Mercado Pago”.
1. Completa en los campos Client ID, Client Secret y Public Key, las [credenciales](/developers/es/docs/iset/additional-content/your-integrations/credentials) de tu cuenta de Mercado Pago.
1. Haz clic en “Cerrar” y después en “Guardar cambios”.

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_transparente_4.gif)

## Ambos checkouts

Puedes ofrecer a tus clientes la opción de finalizar el pago directamente en tu tienda o ser redirigidos al sitio web de Mercado Pago.

Para **activar los dos checkouts**, sigue estos pasos:

1. Ingresa en “Formas de pago” en la sección de Módulos del panel de administración de tu tienda. 
2. Busca en la lista de medios de pago a Mercado Pago e ingresa en “Opciones de configuración”.
3. En la sección Modelo de checkout elige la opción “Ambos”.
4. Agrega el [e-mail de tu cuenta de Mercado Pago](https://www.mercadopago.com.br/profile#from-section=menu) en “E-mail de registro en Mercado Pago”.
5. Completa los campos “Cliend ID, Clien Secret y Public Key” con las [credenciales de tu cuenta de Mercado Pago](/developers/es/docs/iset/additional-content/your-integrations/credentials).
6. Haz clic en “Cerrar” y después en “Guardar cambios”.

![Payments Connect - iSET](/images/iset/iset_configuration_checkout_ambos_5.gif)

<!-- -->
> Para más información, visita el [sitio oficial de iSET](https://www.iset.com.br/).