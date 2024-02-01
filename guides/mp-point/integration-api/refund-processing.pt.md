# Processar reembolsos

Reembolsos são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

Ao integrar o Point via API para Ponto de Venda, é possível realizar reembolsos de duas formas distintas: 
 * **Utilizando o dispositivo Point:** sempre que se tratar de transações recentes, você pode buscar os pagamentos efetuados para selecionar aquele que deseja reembolsar. As etapas para realizar este reembolso serão exibidas na tela do dispositivo Point.

 * **Utilizando  nossa API:** você poderá reembolsar transações que não são exibidas no dispositivo. Além disso, efetuar reembolsos por meio da API proporciona maior controle sobre a operação.


----[mlb]----

> WARNING
>
> Importante
>
> O processamento de reembolsos está disponível apenas para dispositivos Point Pro 2.
------------

Para efetuar reembolsos via API, é necessário primeiramente criar uma intenção de reembolso e, em seguida, processá-la. Além disso, é possível consultar o status de uma intenção de reembolso ou cancelá-la, se for preciso. Veja abaixo as etapas necessárias para realizar cada operação. 


## Criar intenção de reembolso

Uma intenção de reembolso é uma chamada que contém os detalhes da transação que se deseja realizar. Esta chamada deve ser criada para iniciar o processo de reembolso de um pagamento previamente realizado via API.

Esta é uma tentativa que, se bem-sucedida, retornará um `ID` e seu status. Tenha em mente que as intenções de reembolso são a base para o processamento de reembolsos com dispositivos Point. Portanto, é essencial registrar e salvar os dados obtidos durante sua criação, principalmente o `ID`.

> WARNING
>
> Importante
>
> A intenção de reembolso só pode ser criada para o dispositivo no qual o pagamento foi processado e para o usuário que realizou a transação.

Para [criar uma intenção de reembolso](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_refund/post) e atribuí-la ao dispositivo Point, utilize a chamada a seguir e preencha o parâmetro `payment_id` com a identificação do pagamento que deseja reembolsar. 

``` curl
curl --location --request POST 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
--data-raw '{
    "payment_id": "93921210001"
}'

```


Como resposta, você receberá algo semelhante ao exemplo abaixo: 

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "device_id": "PAX_A910__SMARTPOS1490451054"
}
```

## Processar intenção de reembolso

Após criar a intenção de reembolso, você pode acessá-la no seu dispositivo Point. Para isso, inicie a transação pressionando a tecla correspondente: no caso de Point Plus e Point Pro 2 o **botão verde** e, no caso de Point Smart, o botão digital **Atualizar**.

## Verificar status da intenção de reembolso

Para acessar informações sobre uma intenção de reembolso específica, você deve [verificar seu status](/developers/pt/reference/integrations_api/_point_integration-api_refund_refundintentid/get) utilizando o `ID` obtido da criação da intenção.

Lembre-se que o `ID` e status da intenção de reembolso (por exemplo, *7f25f9aa-eea6-4f9c-bf16-a341f71ba2f1*) são distintos do `ID` e status associados ao pagamento e ao reembolso em si (por exemplo, *65412345*). Neste caso, trata-se de consultar os detalhes de uma tentativa. 


> WARNING
>
> Importante
>
> O principal mecanismo recomendado para obter o resultado de uma intenção de pagamento são as [notificações de integrações](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/notifications). A utilização do endpoint disponível nesta seção é aconselhada somente como uma alternativa secundária.

Para consultar o status da intenção de reembolso, insira o `ID` correspondente no PATH do código abaixo e execute a requisição.

``` curl
curl --location --request GET 'https://api.mercadopago.com/point/integration-api/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

A resposta obtida será similar ao exemplo a seguir.

``` json
{
   "device_id": "GERTEC_MP35P__8701012142072431",
   "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1",
   "payment_id": "93921210001",
   "state": "FINISHED"
}
```

Para mais detalhes sobre os possíveis status de uma intenção de reembolso, acesse nosso [Glossário](/developers/pt/docs/mp-point/integration-api/glossary).


## Cancelar  uma intenção de reembolso

Se desejar, você pode cancelar uma intenção de reembolso atribuída a um dispositivo Point, desde que o status da intenção seja `open` e ainda não tenha sido enviada para o dispositivo. 

Se esses requisitos forem atendidos, você pode [cancelar uma intenção de reembolso via API](/developers/pt/reference/integrations_api/_point_integration-api_devices_deviceid_refund_refundintentid/delete) realizando a seguinte chamada:

``` curl
curl --location --request DELETE 'https://api.mercadopago.com/point/integration-api/devices/{deviceid}/refund/{intentid}' \
--h 'Authorization: Bearer YOUR_ACCESS_TOKEN' \

```

Se a execução for bem-sucedida, você receberá uma resposta como esta:

``` json
{
  "id": "75j8sfa-euu6-4x56-slk8-a341f71ba2f1"
}

```

> NOTE
>
> Nota
>
> O único caso em que é possível cancelar uma intenção de reembolso no estado `on_terminal` é se for um reembolso a ser feito em um cartão de pagamento sem contato. O dispositivo aguardará que o cartão seja aproximado para confirmar o reembolso ou que o operador cancele a tentativa.