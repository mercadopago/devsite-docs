# Configurar dispositivos no modo Ponto de Venda

> WARNING
>
> Importante
> Antes de iniciar a configuração do dispositivo Point em modo Ponto de Venda, é necessário acessar sua conta no Mercado Pago e criar um [aplicativo](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard), selecionando **PointdeMercadoPago** como o produto a ser integrado. Não se esqueça também de verificar suas [credenciais de produção](/developers/pt/docs/mp-point/additional-content/your-integrations/credentials), para assegurar a gestão adequada da integração.
> <br><br>
> Além disso, lembre-se de acessar suas [credenciais de produção](/developers/pt/docs/mp-point/additional-content/your-integrations/credentials) para gerenciar corretamente sua integração.

Para iniciar sua integração com o Mercado Pago Point via API, você deve configurar seu dispositivo no modo Ponto de Venda. Para fazer isso, siga as etapas abaixo.

## Criar loja e caixa

Para configurar o dispositivo Point no modo Ponto de Venda, você deve associá-lo a uma loja e a um ponto de venda nesta loja.

Se você ainda não criou nenhuma loja ou caixa, pode fazê-lo por meio de nossa API.

Primeiro, você deve criar uma loja usando o endpoint [Criar loja](/developers/pt/reference/stores/_users_user_id_stores/post). Você deve substituir os valores `user_id` e `YOUR_ACCESS_TOKEN` pelos obtidos ao criar seu aplicativo, bem como modificar os parâmetros necessários de acordo com as características do seu negócio.

Em seguida, você deve criar uma caixa usando o endpoint [Criar caixa](/developers/pt/reference/pos/_pos/post). Esta caixa deve ser associado à loja criada anteriormente, portanto, você deve substituir os parâmetros `external_store_id` e `store_id` pelos obtidos durante a criação da loja. No caso de `store_id`, o valor corresponderá ao `id` retornado nessa resposta.

## Associar dispositivo Point à sua conta Mercado Pago

Para vincular seu dispositivo Point à sua conta Mercado Pago, é necessário ter o aplicativo Mercado Pago instalado no seu celular.

Abra o aplicativo e faça login usando seu nome de usuário e senha. Em seguida, toque no ícone de QR code e escaneie o código exibido ao ligar o dispositivo Point. Ao fazer isso, você estará vinculando o dispositivo à sua conta de maneira prática e segura.

> Se você for operar em nome de outros vendedores, poderá gerenciar a vinculação com segurança, integrando [OAuth](/developers/pt/docs/mp-point/additional-content/security/oauth/introduction).

## Configurar loja e caixa

Depois de vincular seu dispositivo Point à sua conta do Mercado Pago e ter criado a loja e a caixa, você deve preencher os dados comerciais e configurar a caixa para associá-las ao dispositivo.

Para fazer isso, você pode acessar o [site do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/stores) e ir para **Seu negócio > Lojas e registros**.

> Uma vez que o dispositivo Point esteja vinculado, é possível configurar sua loja e a caixa diretamente por ele. O dispositivo exibirá orientações passo a passo caso opte por essa configuração.

## Ativar modo PDV no dispositivo Point

Para integrar o dispositivo Point com nossa API, é necessário ativar o modo Ponto de Venda (PDV).

Para ativá-lo pela primeira vez, obtenha os dispositivos por meio da API [Obter dispositivos](/developers/pt/reference/integrations_api/_point_integration-api_devices/get). Essa chamada retornará uma lista de dispositivos associados à sua conta do Mercado Pago. Você pode identificar o dispositivo Point desejado pelos últimos caracteres do campo `id`, que devem corresponder ao número de série exibido na etiqueta traseira do dispositivo.

Em seguida, faça uma solicitação PATCH para o endpoint [Alterar modo de operação](/developers/pt/reference/integrations_api/_point_integration-api_devices_device-id/patch), substituindo `device-id` pelo valor obtido nesse campo a partir da resposta à solicitação GET anterior.

``` curl
curl -X PATCH \
      'https://api.mercadopago.com/point/integration-api/devices/{device-id}' \
       -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
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

> Se você já ativou o modo Ponto de Venda em um dispositivo via API e, por algum motivo, precisa reconfigurá-lo, você pode fazer isso diretamente no dispositivo, não sendo necessário recorrer à API novamente.