# Configure seu dispositivo no modo Ponto de Venda

> WARNING
>
> Importante
>
> Antes de configurar o dispositivo Point no modo Ponto de Venda, você deve acessar sua conta do Mercado Pago e ter criado um [aplicativo](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard) com **PointdeMercadoPago** como o produto a ser integrado.
>
> Além disso, lembre-se de acessar suas [credenciais de produção](/developers/pt/docs/mp-point/additional-content/your-integrations/credentials) para gerenciar corretamente sua integração.

Para iniciar sua integração com o Mercado Pago Point via API, você deve configurar seu dispositivo no modo Ponto de Venda. Para fazer isso, siga as etapas abaixo.

## Crie uma loja e um PDV

Para configurar o dispositivo Point no modo Ponto de Venda, você deve associá-lo a uma loja e a um ponto de venda nesta loja.

Se você ainda não criou nenhuma loja ou PDV, pode fazê-lo por meio de nossa API.

Primeiro, você deve criar uma loja usando o endpoint [Criar loja](/developers/pt/reference/stores/_users_user_id_stores/post). Você deve substituir os valores `user_id` e `YOUR_ACCESS_TOKEN` pelos obtidos ao criar seu aplicativo, bem como modificar os parâmetros necessários de acordo com as características do seu negócio.

Em seguida, você deve criar um PDV usando o endpoint [Criar PDV](/developers/pt/reference/pos/_pos/post). Este PDV deve ser associado à loja criada anteriormente, portanto, você deve substituir o parâmetro `external_store_id` pelo obtido durante a criação da loja.

## Associe o dispositivo Point à sua conta do Mercado Pago

Para vincular o dispositivo Point à sua conta do Mercado Pago, você precisa ter o aplicativo do Mercado Pago instalado em seu dispositivo móvel.

Faça login no aplicativo com seu nome de usuário e senha e toque no ícone do QR code para escanear o código que aparece quando você liga o dispositivo Point. Dessa forma, o dispositivo será vinculado à sua conta.

> NOTE
>
> Nota
>
> Se você for operar em nome de outros vendedores, poderá gerenciar a vinculação com segurança, integrando [OAuth.](/developers/pt/docs/mp-point/additional-content/security/oauth/introduction)

## Configure sua loja e PDV

Depois de vincular seu dispositivo Point à sua conta do Mercado Pago e ter criado a loja e o PDV, você deve preencher os dados comerciais e configurar o PDV para associá-los ao dispositivo.

Para fazer isso, você pode acessar o [site do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores) e ir para **Seu negócio > Lojas e registros**.

> NOTE
>
> Nota
>
> Você também pode configurar a loja e o PDV diretamente do dispositivo Point, uma vez que esteja vinculado. O próprio dispositivo irá guiá-lo se você escolher configurá-lo dessa maneira.

## Ative o modo PDV no dispositivo Point

Para integrar o dispositivo Point com nossa API, é necessário ativar o modo Ponto de Venda (PDV).

Para ativá-lo pela primeira vez, obtenha os dispositivos por meio da API [Obter dispositivos](/developers/pt/reference/integrations_api/_point_integration-api_devices/get). Essa chamada retornará uma lista de dispositivos associados à sua conta do Mercado Pago. Você pode identificar o dispositivo Point desejado pelos últimos caracteres do campo `id`, que devem corresponder ao número de série exibido na etiqueta traseira do dispositivo.

Em seguida, faça uma solicitação PATCH para o endpoint [Alterar modo de operação](/developers/pt/reference/integrations_api/_point_integration-api_devices_device-id/patch), substituindo `device.id` pelo valor obtido nesse campo a partir da resposta à solicitação GET anterior.

``` curl
curl -X PATCH \
      'https://api.mercadopago.com/point/integration-api/devices/{device-id}' \
       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN \
       -H 'Content-Type: application/json' \ 
      -d '{
  "operating_mode": "PDV"
}'
```

Você receberá uma resposta como esta:

``` json
{
"operating_mode": "PDV"
}
```

> WARNING
>
> Importante
>
> Tenha em mente que apenas um único dispositivo no modo Ponto de Venda é permitido por caixa, e ele deve ser manipulado apenas por um operador da loja. O uso de um dispositivo em modo [self-service](/developers/pt/docs/mp-point/integration-api/glossary) será de total responsabilidade do comerciante. Considere essa limitação ao implementar a integração para garantir um uso adequado e seguro dos dispositivos.

Por fim, você precisará reiniciar seu dispositivo para que a alteração no modo de operação seja efetiva.

Caso você precise usar o dispositivo no modo não integrado, você deve configurar o campo `operating_mode` com o valor `STANDALONE`.

> NOTE
>
> Nota
>
> Se você já ativou o modo Ponto de Venda em um dispositivo via API e, por algum motivo, precisa reconfigurá-lo, você pode fazer isso diretamente no dispositivo, não sendo necessário recorrer à API novamente.
