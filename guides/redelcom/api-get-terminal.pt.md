# Obter Terminal

Antes de criar intenções de pagamento, você precisa consultar o `id` do dispositivo. Essa consulta tem como objetivo obter o código do terminal de um dispositivo com base em seu número de série, identificado na chamada como `terminalCode`, que você pode encontrar na parte de trás de cada dispositivo.

Para consultar o `id` de um dispositivo, faça uma chamada de API usando o método GET para `{https://api-dev.redelcom.cl:20010/v2}/terminal?serialNumber={terminalCode}`, substituindo `X-Authentication`, `clientId` e `secret` pelas suas credenciais, e `terminalCode` pelo número localizado na parte de trás do dispositivo específico:


```curl
curl -X GET \
'https://api-dev.redelcom.cl:20010/v2/terminal?serialNumber={terminalCode}' \
--header 'X-Authentication: clientId;secret'

```


A resposta a esta solicitação retornará o campo `terminal` com o valor numérico associado ao `id` exclusivo e inalterável do dispositivo.


```json
{
   "terminal": "3127"
}

```


> WARNING 
> 
> Importante 
>
> Assim que você tiver obtido o `id` do terminal, você deve salvá-lo para uso em cada solicitação de API que você fizer. Não há necessidade de consultá-lo novamente, pois é um código exclusivo e inalterável associado a cada dispositivo.
>
> Se o número de série não estiver registrado no sistema, não pertencer ao usuário solicitante ou se a criptografia for feita incorretamente, a resposta retornará um erro de autenticação 401.
