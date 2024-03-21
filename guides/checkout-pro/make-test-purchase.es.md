# Realizar compra de prueba

En esta documentación, te mostraremos el paso a paso para realizar una compra de prueba en tu integración de Checkout Pro. 

## Crear el pago

1. Inicia sesión en la web de Mercado Pago con el usuario y contraseña de la **cuenta de prueba de vendedor** que creaste anteriormente.
2. Crea una nueva aplicación para una integración Checkout Pro. Allí, obtén las **credenciales productivas** (`access_token`) **del usuario de prueba vendedor**.
3. En tu integración, utiliza el `access_token` que acabas de obtener en la Preferencia de tu integración. Recuerda que debe ser el `access_token` de las **credenciales de producción de la cuenta de prueba del vendedor**. 
4. Inicializa tu checkout usando el valor `id` de la preferencia que creaste mientras integrabas Checkout Pro. Puedes encontrar más información sobre los parámetros de la respuesta ingresando a la documentación de la API de [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

> WARNING
>
> Importante
>
> Si tu integración utiliza un [Esquema de apertura directa](/developers/es/docs/checkout-pro/checkout-customization/user-interface/opening-schema#bookmark_esquema_de_apertura_directa), deberás inicializar tu checkout a través del valor `init_point` que encontrarás en la respuesta. Pueden encontrar más información sobre los parámetros de la respuesta ingresando a la documentación de la API de [Crear preferencia](/developers/es/reference/preferences/_checkout_preferences/post).

## Realizar el pago

1. Inicia sesión en la web de Mercado Pago con el usuario y contraseña de la **cuenta de prueba del comprador**. Recomendamos hacerlo en un navegador en "Modo incógnito".
2. Ve al sitio donde integraste Checkout Pro y haz clic en el botón de compra de Mercado Pago que renderizaste previamente. 
3. Finalmente, sigue las instrucciones del Checkout Pro y realiza una compra de prueba utilizando la **cuenta de prueba del comprador**. Para eso, proporciona datos de [Tarjetas de prueba](/developers/es/docs/checkout-pro/integration-test/prerequisites/test-cards) ----[mla, mlb, mpe, mco, mlu, mlc]----y un documento de identidad de nueve dígitos------------. Ten en cuenta que puedes simular diferentes resultados de compra utilizando distintas tarjetas de pruebas.