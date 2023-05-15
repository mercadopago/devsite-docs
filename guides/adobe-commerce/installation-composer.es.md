# Instalación vía Composer

Para instalar el módulo de Mercado Pago en Adobe Commerce (Magento) vía Composer, deberás seguir estos pasos:

1. En tu terminal, ejecuta este comando para descargar el módulo de Adobe Commerce (Magento) con Composer:

```
composer require mercadopago/magento2-plugin:3.*
```

2. Luego, ejecuta este comando para actualizar la lista de módulos de Magento:

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

¡Y listo! Ya instalaste con éxito el módulo de Mercado Pago para Adobe Commerce (Magento).
