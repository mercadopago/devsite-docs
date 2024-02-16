# Processar reembolsos

Reembolsos são transações realizadas quando determinada cobrança é revertida e os valores pagos retornam para o comprador. Isso significa que o cliente receberá de volta em sua conta ou na fatura do cartão de crédito, o valor pago na aquisição de determinado produto ou serviço.

É possível integrar Point via API para ponto de venda e realizar reembolsos de três formas distintas:

1. **Através do dispositivo Point:**
 * Reembolse transações recentes diretamente do dispositivo Point pelo valor total.
 * Busque os pagamentos realizados, selecione aquele que deseja reembolsar, e siga as instruções do dispositivo.

2. **Através da API de Payments:**
 * Reembolse total ou parcialmente qualquer tipo de pagamento usando o recurso de reembolso da [API de Payments](/developers/pt/reference/chargebacks/_payments_id_refunds/post).

3. **Através da API para dispositivos Point:**
 * Reembolse transações integralmente com até 90 dias.
 * O processamento do reembolso é realizado pelo dispositivo Point, o que permitirá imprimir recibos e reembolsar pagamentos efetuados com cartão presente.
 * Receba notificações Webhook após a conclusão do ciclo da intenção de reembolso.

É possível escolher a opção de reembolso que melhor atenda às suas necessidades. No entanto, recomendamos usar nossa API para dispositivos Point sempre que for necessária a **impressão de tickets de reembolso ou realizar reembolsos aproximando o cartão do dispositivo**.

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

