# Subir la tienda

Para activar Mercado Pago en la tienda, sigue los pasos detallados a continuación.

> Para subir y hacer deploy del sitio, puedes utilizar una herramienta compatible con WebDAV. 

## Configuración del cartucho

Para activar el cartucho “int_mercadopago” y utilizarlo como procesador de pagos, es necesario configurarlo como se indica en los siguientes pasos.

1. Ve al panel de configuración de Salesforce Commerce Cloud, en **Administración > Sitios > Administrar sitios > _tu sitio_ > Configuración**. 
2. Agrega "int_mercadopago" a la lista de cartuchos como primer elemento (o, al menos, antes de "app_storefront_base").
3. Comprime la carpeta "int_mercadopago/metadata" en un archivo _.zip_.
4. En **Administración > Desarrollo del sitio > Importación y exportación del sitio**, sube este archivo .zip usando la opción **Subir**.
5. Selecciona el .zip cargado e impórtalo usando la opción **Importar**.
6. Ve hasta el final de esta página y comprueba los resultados en la sección **Estado**.

## Configuración de credenciales de Mercado Pago

Para usar Mercado Pago con Salesforce Commerce Cloud, debes tener una cuenta de Mercado Pago. Sigue [esta documentación](/developers/es/docs/salesforce-commerce-cloud/additional-content/your-integrations/credentials) para generar tus credenciales. Después de eso, ve a **Herramientas comerciales > Preferencias personalizadas > MercadopagoCredentials** y completa los campos **Public Key** y **Access Token**.

¡Listo! Ya puedes usar el cartucho de Mercado Pago en el sitio de tu tienda Salesforce Commerce Cloud.