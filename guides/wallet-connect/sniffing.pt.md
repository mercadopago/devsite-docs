El "sniffing" es una funcionalidad que permite identificar si un usuario tiene la aplicación de Mercado Pago instalada en su dispositivo móvil y abrir dicha app automáticamente. En caso afirmativo, se inicia automáticamente el flujo de vinculación en la aplicación, sin necesidad de que el usuario tenga que iniciar sesión de forma manual.
Propósito
El propósito de esta documentación es brindar a los integradores la información necesaria para habilitar y usar la función de "sniffing" en sus integraciones con Mercado Pago.
Implementación
Para disponer de la funcionalidad de "sniffing" solo es necesario abrir un enlace en el navegador web móvil para activar la detección:
Realizar una solicitud POST a: https://api.mercadopago.com/v2/wallet_connect/agreements para crear un agreement.
En este momento se debe especificar la dirección de retorno return_uri.
Obtener el valor de agreement_uri en la respuesta
Utilizar un componente In-App Browser para navegar a agreement_uri
Según el OS utilizar:
Custom Tabs en Android
SVC en iOS
Capturar la URL de retorno return_uri para finalizar el proceso de vinculación. 