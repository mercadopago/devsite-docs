# ¿Cómo actualizar la versión del plugin?

Estamos constantemente mejorando el plugin de Mercado Pago para Adobe Commerce. Para aprovechar las funcionalidades más recientes implementadas, es esencial mantener actualizado su plugin. El proceso de actualización es sencillo y sus personalizaciones se conservan. Siga los pasos a continuación para asegurar una actualización exitosa:

> WARNING
>
> Nota
>
> Esta documentación está dirigida a usuarios que ya hayan actualizado al **nuevo plugin (módulo) de Adobe Commerce**. Las versiones del plugin de Mercado Pago para Adobe Commerce anteriores a la **3.19** han sido descontinuadas. Si aún lo tiene instalado, le recomendamos que [actualice al nuevo plugin de Adobe Commerce](/developers/es/docs/adobe-commerce/upgrade-to-the-new-plugin).

1. En su terminal, ejecute el siguiente comando para descargar el módulo:

```terminal
composer update mercadopago/adb-payment
```

2. A continuación, ejecute el siguiente comando para actualizar el módulo:

```terminal
bin/magento setup:upgrade
```

3. Ejecute el siguiente comando para compilar los archivos del módulo:

```terminal
bin/magento setup:di:compile
```

4. Por último, ejecute el siguiente comando para limpiar la caché de Adobe Commerce:

```terminal
bin/magento cache:clean
```

> NOTE
>
> Nota
>
> El plugin está construido sobre la plataforma, lo que implica la preservación de las personalizaciones durante la actualización. No hay pérdida de datos ni configuraciones al actualizar la versión de su plugin.