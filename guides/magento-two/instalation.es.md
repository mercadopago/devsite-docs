# Instala el plugin

Existen varias formas de instalar el plugin de Mercado Pago para Magento 2, pero todas tienen el mismo resultado de integración.

Puedes instalar el plugin de Mercado Pago en Magento 2 de tres maneras diferentes:

* Instalación via Composer
* Instalación via Marketplace de Magento
* Instalación via FTP

## Instalación via Composer

Para instalar el plugin de Mercado Pago en Magento 2 vía Composer, deberás seguir estos pasos:

1. En tu terminal, ejecuta este comando para descargar el plugin de Magento 2 con Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Luego, ejecuta este comando para actualizar la lista de plugins de Magento:

```
bin/magento setup:upgrade
```

3. Ahora deberás ejecutar este comando para limpiar el cache de Magento:

```
bin/magento cache:clean
```

4. Cuando la tienda esté en **modo productivo**, será necesario generar los archivos `static` nuevamente. Puedes hacerlo de esta manera:

```
bin/magento setup:static-content:deploy
```

En caso de que experimentes problemas de permisos de carpeta al acceder a la tienda, deberás renovar los permisos de esta manera:

```
chmod 777 -R var/ pub/ generated/
```

¡Y listo! Ya instalaste con éxito el plugin de Mercado Pago para Magento 2.

## Instalación via Marketplace de Magento

Puedes instalar la extensión de Mercado Pago sin costo a través de la tienda de Magento, es muy simple. Sigue estos pasos:

1. Accede a la [tienda oficial de Magento](https://marketplace.magento.com/). En el buscador, deberás colocar Mercado Pago y seleccionar [la extensión oficial](https://marketplace.magento.com/mercadopago-core.html). 
2. Despliega el menú **Edition** y selecciona la edición que requieras del plugin. Luego abre el menú **Your store version** y selecciona el tipo de versión que necesites para tu negocio. Finalmente haz clic en **Add to cart** para añadir el módulo al carrito.
3. Haz clic en el carrito que se encuentra en la parte superior derecha del sitio y luego haz clic en **Proceed to Checkout** para finalizar tu compra.
4. Para continuar, deberás hacer login con tu cuenta de Magento o crear una nueva. Una vez registrado, podrás descargar el módulo de Mercado Pago e instalarlo.


## Instalación via FTP

1. Descarga el **módulo Mercado Pago** disponible [en Github](https://github.com/mercadopago/cart-magento2).

2. Crea una carpeta con el nombre **code** dentro de la carpeta **app** de Magento.

3. Para tener acceso a la carpeta **MercadoPago** es necesario descomprimir el archivo *.zip*.

4. Copia la carpeta **MercadoPago** que se encuentra la carpeta **code/src**.

5. Luego, sigue las instrucciones de [Instalación via Composer](#bookmark_instalación_via_composer)

¡Y listo! Ya instalaste con éxito el plugin de Mercado Pago para Magento 2.

> PREV_STEP_CARD_ES
>
> Requisitos previos de integración
>
> Conoce los requisitos previos para realizar la integración.
>
> [Requisitos previos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/previous-requirements)

> NEXT_STEP_CARD_ES
>
> Configuración de pagos
>
> Sigue los pasos para configurar los pagos de Custom Checkout (Transparente).
>
> [Configuración de pagos](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/payment-configuration)