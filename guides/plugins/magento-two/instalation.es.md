# Instala el plugin

Para instalar el plugin de Mercado Pago en Magento 2, deberás realizarlo vía Composer de la siguiente manera:

1. En tu terminal, descarga el plugin con Composer ejecutando este comando:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Luego, ejecuta este comando para actualizar Magento:

```
bin/magento setup:upgrade
```

3. Ejecuta este comando para limpiar el cache de Magento:

```
bin/magento cache:clean
```

4. Cuando la tienda esté en modo productivo, será necesario generar los archivos `static` nuevamente. Puedes hacerlo de esta manera:

```
bin/magento setup:static-content:deploy
```

En caso de que experimentes problemas de permisos de carpeta al acceder a la tienda, deberás renovar los permisos de esta manera:

```
chmod 777 -R var/ pub/ generated/
```

¡Y listo! Ya instalaste con éxito el plugin de Mercado Pago para Magento 2.

### Próximo paso

> LEFT_BUTTON_REQUIRED_ES
>
> Configuración de pagos con tarjeta de crédito y tickets
>
> Sigue los pasos para configurar los pagos de Custom Checkout.
>
> 
> [Configuración de pagos con tarjeta de crédito y tickets](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/guides/plugins/magento-two/payment-configuration)