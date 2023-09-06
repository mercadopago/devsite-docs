# Ativar o modo PDV no dispositivo Point

> WARNING
>
> Importante
>
> Esta etapa é necessária apenas para integrar dispositivos Point.


Para ativar o modo PDV em seu dispositivo Point, primeiro você precisará identificá-lo. Para isso, você deverá fazer uma solicitação GET ao endpoint ----[mla]----[Obter dispositivos](/developers/pt/reference/instore_api_mla/_instore-api_pointdevices/get)------------ ----[mlb]---- [Obter dispositivos](/developers/pt/reference/instore_api_mlb/_instore-api_pointdevices/get)------------.

> Esta solicitação retornará como resposta os dispositivos associados à conta do Mercado Pago. Se você tiver vários dispositivos listados, poderá identificar o Point desejado pelos últimos caracteres do campo `id`. Os últimos números desse valor devem coincidir com o número de série que aparece na etiqueta traseira do dispositivo Point com o qual você está integrando.

Em seguida, faça uma solicitação PATCH ao endpoint ----[mla]----[Alterar o modo de operação](/developers/pt/reference/instore_api_mla/_instore-api_pointdevices_device_id/patch)------------ ----[mlb]---- [Alterar o modo de operação](/developers/pt/reference/instore_api_mlb/_instore-api_pointdevices_device_id/patch)------------, substituindo `device.id` pelo valor obtido nesse campo na resposta à solicitação GET anterior.

Por fim, reinicie o dispositivo Point. Quando ele for reativado, você verá uma confirmação na tela, e seu Point estará vinculado ao modo PDV.

> WARNING
>
> Importante
>
> Lembre-se de que apenas um único dispositivo em modo PDV é permitido por caixa e que ele só deve ser manipulado por um operador da loja. O uso de um dispositivo em [self-service não supervisionado](/developers/pt/docs/instore-api/glossary) será de total responsabilidade do comerciante. Considere essa limitação ao implementar a integração para garantir o uso adequado e seguro dos dispositivos.
