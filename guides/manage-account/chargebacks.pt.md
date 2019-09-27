# Gestão de compras contestadas

> NOTE
>
> Nota
>
> **O que é?** Quando o comprador se comunica com a entidade que emitiu o cartão (um banco, por exemplo) e desconhece um pagamento realizado através desse meio, é gerada uma _contestação_. [Mais informações aqui](https://www.mercadopago.com.br/ajuda/contestaram-um-pagamento-o-que-faco_589)

A compra contestada, a princípio, significa que o Mercado Pago irá reter o dinheiro da venda até que o problema seja solucionado.

As contestações podem ser geridas via API.
É importante, nesse processo, mencionar quais são as instâncias chave:

1. Notificação da compra contestada
2. Consulta da compra contestada
3. Entendimento da cobertura
4. Disputa da compra contestada
5. Revisão por parte do Mercado Pago
6. Resolução

Agora entraremos em detalhe em cada uma delas:

## Notificação da compra contestada

Vía [IPN](/guides/notifications/ipn.pt.md) será enviada uma notificação instantâneamente cada vez que uma contestação for recebida. Para que isso aconteça, deve-se cadastrar a opção `chargebacks` dentro da [configuração](https://www.mercadopago.com.br/ipn-notifications).


## Consulta da contestação

A notificação IPN vai conter o `ID` da compra contestada.
Com esse `ID` pode-se realizar um **GET** a `https://api.mercadopago.com/v1/chargebacks/ID?access_token=` para consultar suas informaçõeso:

```
curl -XGET https://api.mercadopago.com/v1/chargebacks/ID?access_token=<ACCESS_TOKEN>
```

para consultar suas informações:


```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "[FAKER][CURRENCY][ACRONYM]",
  "amount": 100.20,
  "reason": "fraud",
  "coverage_applied": false,
  "coverage_elegible": true,
  "documentation_required": true,
  "documentation_status": "valid",
  "documentation": [
    {
      "type": "image/png",
      "url": "https://api.mercadopago.com/v1/chargebacks/documentation/op/op-4ccf4f39-b6f7-4c7b-a5ce-e8941a2a2b5f?access_token=TEST-7330838325999170-111309-c5e69fb44fb5dc008668f64e27653767-345521533",
      "description": "File: img.png, Size: 3324"
    }
  ],
  "date_documentation_deadline": "2018-12-08T09:50:37.000-04:00",
  "date_created": "2018-09-14T16:20:54.000-04:00",
  "date_last_updated": "2018-11-28T10:48:48.000-04:00",
  "live_mode": true
}
```

## Entendimento da cobertura

De acordo com a operação do vendedor, seu acordo comercial, ou ambos, pode-se variar a política de cobertura de cada contestação por parte do Mercado Pago. O campo `coverage_elegible` define se a compra contestada é passível de ser disputado ou não.

| Campo               | Valor     | Descrição
| ----                | ----      | ----
| `coverage_elegible` | **false** | Indica que a compra contestada não pode ser disputado
| `coverage_elegible` | **true**  | Indica que a compra contestada pode ser disputado

Além disso conta-se com o campo `documentation_required` que indica se é preciso que se envie a documentação para análise.

| Campo                    | Valor     | Descrição
| ----                     | ----      | ----
| `documentation_required` | **false** | Indica que não se requer documentação para a compra contestada
| `documentation_required` | **true**  | Indica que se requer documentação para a compra contestada


----[mla,mlc,mlm,mpe,mco,global]----
Caso seja requerida a documentação, conta-se com um prazo de 7 dias desde a criação da contestação para enviá-la. Na resposta da sua consulta da compra contestada pode-se ver quando se expira este prazo no campo `date_documentation_deadline`.
------------
----[mlb]----
Caso seja requerida a documentação, conta-se com um prazo de 10 dias desde a criação da contestação para enviá-la. Na resposta da sua consulta da compra contestada pode-se ver quando se expira esse prazo no campo `date_documentation_deadline`.
------------

> WARNING
> 
> Requisitos
>
> Só é possível continuar com o resto dos passos se a contestação **pode ser disputada**, **se requer que se envie documentação** e **se o prazo ainda não foi expirado.** 

## Disputa da compra contestada

Se a contestação segue os critérios anteriormente mencionados, é possível enviar via API, os documentos e informações que comprovem que o produto foi entregue. [Mais informações aqui](https://www.mercadopago.com.br/ajuda/contestaram-um-pagamento-o-que-faco_589) 

Para realizar o envio, deve-se fazer um **POST** a `https://api.mercadopago.com/v1/chargebacks/ID/documentation` da seguinte forma:
```
curl -XPOST -F 'files[]=@/path/to/file/file1.png' -F 'files[]=@/path/to/file/file2.pdf' https://api.mercadopago.com/v1/chargebacks/ID/documentation?access_token=
```

A api responderá com status `200 OK` se a documentação foi enviada com sucesso. A resposta mudará o status do atributo `documentation_status` a **review_pending**.

> NOTE
>
> Nota
>
> Os arquivos poderão ser .jpg, .png, .pdf e em seu conjunto não podem ultrapassar 10mb e 10 arquivos.

## Revisão por parte de Mercado Pago

Uma vez enviada a documentação, um representante de Mercado Pago a revisará.

## Resolução

Eventualmente a contestação poderá ter dois tipos de resolução possíveis:

| Campo              | Valor     | Descrição
| ----               | ----      | ----
| `coverage_applied` | **false** | Indica que a documentação enviada não é válida e o dinheiro será devolvido ao comprador.
| `coverage_applied` | **true**  | Indica que a documentação enviada é válida e o dinheiro será devolvido ao vendedor.

Quando a resolução acontece, independentemente do resultado, se enviará uma nova notificação via **IPN** para que se possa verificar o que houve.
