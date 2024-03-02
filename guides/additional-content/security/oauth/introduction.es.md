# OAuth

OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. A través del protocolo HTTP, introduce una capa de autenticación y autorización en la que solicitas acceso a los recursos protegidos de los vendedores mediante un token de acceso limitado a una aplicación en particular. Esto se logra sin necesidad de las credenciales de los vendedores a través de los flujos de acceso.
 
Los flujos, también llamados grant types, se refieren a la forma en que una aplicación obtiene un access token que permite acceder a los datos expuestos a través de una API. En el caso de Mercado Pago, hay dos flujos de acceso disponibles: `authorization_code` y `refresh_token`. En ambos flujos, las principales entidades involucradas en los procesos son:
 
* **Access token**: código utilizado en diferentes solicitudes de origen público para acceder a un recurso protegido que representa una autorización otorgada por un vendedor a una aplicación cliente que contiene scopes y un tiempo de vigencia limitado para dicho acceso.
  - **PKCE** (_Proof Key for Code Exchange_):  es un protocolo de seguridad utilizado con OAuth para proteger contra ataques de código malicioso durante el intercambio de códigos de autorización por _Access token_. Añade una capa extra de seguridad generando un _verifier_ que se transforma en un _challenge_ para asegurar que, incluso si el código de autorización es interceptado, no sea útil sin el _verifier_ original. Puedes habilitar esta función a través de la opción "¿Habilitar verificación PKCE?" en la pantalla de [Detalles de la aplicación](/developers/es/docs/your-integrations/application-details), lo que permitirá generar un código secreto adicional para ser utilizado durante el proceso de autorización. Consulta [PKCE](/developers/es/guides/additional-content/security/oauth/pkce) para obtener más información.
  <br>
* **Temporal grants**: códigos temporales usados para intercambiarse por un access token. Son del tipo `authorization_code` y `refresh_token`.
 
> NOTE
>
> Nota
>
> El uso del protocolo OAuth difiere del proceso de uso compartido de credenciales. OAuth no aborda cuestiones relacionadas con la autenticación del cliente, ni información relacionada con la misma. Su responsabilidad radica en los métodos de obtención de un token para acceder a un recurso.