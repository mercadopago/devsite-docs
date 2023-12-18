# Get Terminal

Before creating payment intentions, you need to query the `id` of the device. This query aims to obtain the terminal code of a device based on its serial number, identified in the call as `terminalCode`, which you can find on the back of each device.

To query the `id` of a device, make an API call using the GET method to `{https://api-dev.redelcom.cl:20010/v2}/terminal?serialNumber={terminalCode}`, replacing `X-Authentication`, `clientId`, and `secret` with your credentials, and `terminalCode` with the number located on the back of the specific device:

```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/terminal?serialNumber={terminalCode}' \
--header 'X-Authentication: clientId;secret'

```


The response to this request will return the `terminal` field with the numerical value associated with the unique and unchanging `id` of the device.

```json
{
   "terminal": "3127"
}

```


> WARNING 
> 
> Important 
>
> Once you have obtained the terminal `id`, you should save it for use in every API request you make. There's no need to query it again since it is a unique and unchanging code associated with each device.
>
> If the serial number is not registered in the system, doesn't belong to the requesting user, or if the encryption is done incorrectly, the response will return a 401 authentication error.
