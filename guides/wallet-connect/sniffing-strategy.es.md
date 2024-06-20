# Estrategia de Sniffing

El **_Sniffing_** es una funcionalidad que permite identificar si un usuario tiene la aplicación de Mercado Pago instalada en su dispositivo móvil y abrir dicha aplicación automáticamente. En caso afirmativo, al abrir el `agreement_uri` en un navegador, el flujo de vinculación se inicia automáticamente en la aplicación, sin que el usuario necesite iniciar sesión manualmente.

La función de _Sniffing_ simplifica el proceso de vinculación al eliminar la necesidad de que el usuario inicie sesión manualmente en la aplicación de Mercado Pago. Esto mejora la experiencia del usuario al reducir la fricción en el proceso de vinculación.

## Modelos de utilización del Sniffing

Los modelos disponibles son:

> WARNING
>
> Atención
>
> Los modelos preferidos de utilización del _Sniffing_ deben ser coordinados con el **equipo de Integraciones** para que estos sean previamente configurados en su aplicación.

- **App Link (disponible solo para dispositivos Android)**: si la aplicación de Mercado Pago está instalada en el dispositivo del usuario, esta interceptará cuando se navegue hacia `agreement_uri` y abrirá automáticamente el flujo de vinculación en el contexto de la aplicación.
- **Navegador (disponible para dispositivos Android y iOS)**: al abrir el `agreement_uri` en un navegador, la página reconocerá el contexto y aplicará diferentes estrategias para intentar abrir la aplicación de Mercado Pago: <br>
  - Si el usuario tiene la aplicación instalada, el flujo de vinculación se abrirá automáticamente en la aplicación.
  - Si el usuario no tiene la aplicación instalada, se dirigirá al navegador predeterminado del usuario y, en este caso, es posible que el usuario tenga que iniciar sesión manualmente.

> NOTE
>
> Importante
>
> El _Sniffing_ está disponible solo en el navegador del dispositivo móvil cuando el usuario tiene la aplicación de Mercado Pago instalada y, dependiendo del dispositivo y del sistema operativo, la experiencia de abrir una aplicación desde un navegador puede variar. En general, se requiere la confirmación del usuario a través de un modal del sistema y, en otros escenarios como en _webviews_ de otras aplicaciones, el funcionamiento puede verse afectado.

## Configuración

Para utilizar el recurso de Sniffing, basta con abrir un enlace en el navegador web del dispositivo móvil para activar la detección y seguir el flujo de vinculación. Ve abajo cómo disponibilizar la funcionalidad de _Sniffing_ en su integración.

1. Envíe un **GET** con los atributos necesarios, principalmente el `return_uri`, al _endpoint_ [/v2/wallet_connect/agreements](/developers/es/reference/wallet_connect/_wallet_connect_agreements/post) y ejecute la solicitud para [iniciar una vinculación](/developers/es/docs/wallet-connect/account-linking-flow/create-agreement).

> WARNING
>
> Atención
>
> Es necesario que la URL utilizada en el parámetro `return_uri` sea para un recurso _web_ (no se pueden utilizar _deeplinks_) y el inicio de la misma debe **coincidir con la URL de retorno configurada en la aplicación del vendedor**. Para más información, acceda a los [Detalles de la aplicación](/developers/es/guides/additional-content/your-integrations/application-details).

2. Se devolverán los parámetros `agreement_id` y `agreement_uri`. Utilice un componente **_In-App Browser_** para navegar hasta el `agreement_uri`, dirección a la cual el comprador es redirigido para conceder el acceso a la billetera de Mercado Pago para realizar el pago. Según el sistema operativo, utilice el **_Custom Tabs_** para dispositivos _Android_ y el **_SVC_** para dispositivos iOS.
3. A partir de eso, utilice la URL de retorno `return_uri` para finalizar el proceso de vinculación.

Después de configurada, es posible desactivar la función de _Sniffing_ de su aplicación y esta acción debe ser coordinada con el **equipo de Integraciones** de Mercado Pago.