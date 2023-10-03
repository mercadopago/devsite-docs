# Obtener Terminal

Previo a la creación de intenciones de pago, debes consultar el `id` del dispositivo. Esta consulta busca obtener el código de terminal de un equipo a partir de su número de serie,  identificado en la llamada como `terminalCode`, dato que podrás obtener en el  reverso de cada dispositivo.

Para consultar el `id` de un dispositivo, realiza un llamado a la API con el método `GET {https://api-dev.redelcom.cl:20010/v2}/terminal?serialNumber={terminalCode}`, reemplazando `X-Authentication`, `clientId` y `secret` por tus credenciales, y `terminalCode` por el número ubicado en el reverso del dispositivo en cuestión:


```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/terminal?serialNumber={terminalCode}' \
--header 'X-Authentication: clientId;secret'

```


La respuesta a esta solicitud te devolverá el campo `terminal` con el valor numérico asociado al `id` único e invariable del dispositivo: 


```json
{
   "terminal": "3127"
}

```


> WARNING 
> 
> Importante 
>
> Una vez que hayas obtenido el `id` de la terminal, deberás guardarlo para  utilizarlo en cada llamada a la API que realices. No será necesario volver a consultarlo, ya que se trata de un código único e invariable asociado a cada dispositivo.
> <br>
> Si el número de serie no está registrado en el sistema, no pertenece al usuario que lo solicita, o se está realizando de forma errónea la encriptación, la respuesta devolverá un error de autenticación 401.

