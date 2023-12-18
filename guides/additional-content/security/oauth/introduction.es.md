# OAuth

OAuth es un protocolo de autorización que permite que las aplicaciones tengan acceso limitado a la información privada de las cuentas de Mercado Pago. A través del protocolo HTTP, introduce una capa de autenticación y autorización en la que solicitas acceso a los recursos protegidos de los vendedores mediante un token de acceso limitado a una aplicación en particular. Esto se logra sin necesidad de las credenciales de los vendedores a través de los flujos de acceso.
 
Los flujos, también llamados grant types, se refieren a la forma en que una aplicación obtiene un access token que permite acceder a los datos expuestos a través de una API. En el caso de Mercado Pago, hay dos flujos de acceso disponibles: `authorization_code` y `refresh_token`. En ambos flujos, las principales entidades involucradas en los procesos son:
 
* **Access token**: código utilizado en diferentes solicitudes de origen público para acceder a un recurso protegido que representa una autorización otorgada por un vendedor a una aplicación cliente que contiene scopes y un tiempo de vigencia limitado para dicho acceso.
* **Temporal grants**: códigos temporales usados para intercambiarse por un access token. Son del tipo `authorization_code` y `refresh_token`.
 
> NOTE
>
> Nota
>
> El uso del protocolo OAuth difiere del proceso de uso compartido de credenciales. OAuth no aborda cuestiones relacionadas con la autenticación del cliente, ni información relacionada con la misma. Su responsabilidad radica en los métodos de obtención de un token para acceder a un recurso.