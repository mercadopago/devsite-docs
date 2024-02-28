# Instalación vía Composer

Para instalar el módulo de Mercado Pago en Adobe Commerce vía Composer, deberás seguir estos pasos:

1. En tu terminal, ejecuta el siguiente comando para descargar el módulo de Adobe Commerce utilizando Composer:

```
composer require mercadopago/adb-payment
```

2. A continuación, ejecuta el siguiente comando para instalar el módulo:

```
bin/magento setup:upgrade
```

3. Ejecuta el siguiente comando para compilar los archivos del módulo:

```
bin/magento setup:di:compile
```

4. Ahora debes ejecutar este comando para limpiar la caché de Adobe Commerce:

```
bin/magento cache:clean
```

5. Cuando la tienda esté en modo de producción, será necesario generar nuevamente los archivos estáticos. Puedes hacerlo de la siguiente manera:

```
bin/magento setup:static-content:deploy
```

En caso de que experimentes problemas de permisos de carpeta al acceder a la tienda, deberás renovar los permisos de esta manera:

```
chmod 777 -R var/ pub/ generated/
```

¡Y listo! Ya instalaste con éxito el módulo de Mercado Pago para Adobe Commerce.