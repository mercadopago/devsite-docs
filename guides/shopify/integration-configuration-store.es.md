# Configurar información de la tienda

Te recomendamos personalizar la información del checkout de la tienda para poder garantizar una mejor experiencia de compra y una integración más estrecha entre el checkout de Mercado Pago en Shopify. Para hacerlo, sigue los pasos a continuación:

----[mla, mlm, mpe, mco, mlu, mlc]----
> WARNING
>
> Atención
>
> Si estás usando la aplicación antigua de Mercado Pago ("Mercado Pago"), [haz clic aquí](/developers/es/docs/shopify/how-tos/migration) para saber cómo migrar a la versión actual ("Checkout Mercado Pago").

------------

## Configura el nombre de la empresa

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. Dentro del panel administrativo de la tienda, haz clic en **Configuración**.
3. Una vez allí, selecciona la opción **Pantalla de pago**.
4. En la sección **Información del cliente**, selecciona el campo “Nombre de la empresa” como obligatorio.

![configurar empresa español](/images/shopify/configurar-empresa-ES.gif)

## Configura el idioma de la tienda

Dentro del panel administrativo de la tienda, haz clic en **Configuración**. Allí, haz clic en **Idiomas**.
En la sección "Idiomas de la tienda" podrás elegir el idioma en el que quieres que la tienda opere. Haz clic en **Cambiar el valor predeterminado**. 
En la siguiente pantalla, elige el idioma predeterminado y haz clic en **Guardar**.

![configurar idioma es](/images/shopify/cambiar-idioma-ES.png)

## Ajusta los valores de identificación personal del comprador

La tienda de Shopify mostrará los campos de solicitud de identificación personal del comprador con el término “Company”. Para cambiarlo por la identificación solicitada por el país en donde opera la tienda, sigue estos pasos:

1. Dentro del panel administrativo de la tienda, haz clic en **Configuración**. Allí, haz clic en **Pantalla de pago**.
2. En la sección "Idioma de la pantalla de pago", haz clic en **Gestionar idioma de pantalla de pago**. 
3. En la siguiente pantalla, utiliza la barra de búsqueda del sitio para buscar la palabra "Company". La búsqueda devolverá varios campos que podrás modificar.
5. Reemplaza las siguientes entradas con la indicación del tipo de identificación personal que solicitará tu tienda según el país en donde opere (por ejemplo, CPF para Brasil):
    * **Company label**
    * **Optional company label**
    * **Address company blank**
    * **Address – Company**
6. Haz clic en Guardar.