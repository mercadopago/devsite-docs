# Gestão de Estornos

> NOTE
>
> Nota
>
> **O que é?** Quando o comprador se comunica com a entidade que emitiu o cartão (um banco, por exemplo) e desconhece um pagamento realizado através desse meio, se gera um _estorno_. [Mais informações aqui](https://www.mercadopago.com.br/ajuda/contestaram-um-pagamento-o-que-faco_589)

O estorno, a princípio, significa que o Mercado Pago irá reter o dinheiro da venda até que o problema seja solucionado.

Os estornos podem ser geridos via API.
É importante, nesse processo, mencionar quais são as instâncias chave:

1. Aparição do estorno
2. Consulta do estorno
3. Entendimento da cobertura
4. Disputa do estorno
5. Revisão por parte do Mercado Pago
6. Resolução

Agora entraremos em detalhe em cada uma delas:

## Aparição do estorno

Vía [IPN](https://www.mercadopago.com.br/developers/pt/guides/notifications/ipn) será enviada uma notificação instantâneamente cada vez que um estorno for recebido. Para que isso aconteça, deve-se cadastrar a opção `chargebacks` dentro da [configuração](https://www.mercadopago.com.br/ipn-notifications).

## Consulta de estorno

A notificação IPN vai conter o `ID` do estorno.
Com esse `ID` pode-se realizar um **GET** a `https://api.mercadopago.com/v1/chargebacks/ID` para consultar suas informaçõeso:

```json
{
  "id": "43589345903450",
  "payments": [
    345345345
  ],
  "currency": "ARS",
  "amount": 100.20,
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

De acordo com a operação do vendedor, seu acordo comercial, ou ambos, pode-se variar a política de cobertura de cada estorno por parte do Mercado Pago. O campo `coverage_elegible` define se o estorno é passível de ser disputado ou não.

| Campo               | Valor     | Descrição
| ----                | ----      | ----
| `coverage_elegible` | **false** | Indica que o estorno não pode ser disputado
| `coverage_elegible` | **true**  | Indica que o estorno pode ser disputado

Além disso conta-se com o campo `documentation_required` que indica se é preciso que se envie a documentação para análise.

| Campo                    | Valor     | Descrição
| ----                     | ----      | ----
| `documentation_required` | **false** | Indica que não se requer documentação para o estorno
| `documentation_required` | **true**  | Indica que se requer documentação para o estorno


----[mla,mlc,mlm,mpe,mco,global]----
Caso seja requerida a documentação, conta-se com um prazo de 7 dias desde a criação do estorno para enviá-la. Na resposta da sua consulta do estorno pode-se ver quando se expira este prazo no campo `date_documentation_deadline`.
------------
----[mlb]----
Caso seja requerida a documentação, conta-se com um prazo de 10 dias desde a criação do estorno para enviá-la. Na resposta da sua consulta do estorno pode-se ver quando se expira esse prazo no campo `date_documentation_deadline`.
------------

> WARNING		 
> 
> Requisitos
>
> Só é possível continuar com o resto dos passos se o estorno  **pode ser disputado**, **se requer que se envie documentação** e **se o prazo ainda não foi expirado.** 

## Disputa do estorno

Se o estorno segue os critérios anteriormente mencionados, é possível enviar via API a informação confirmatória que valida que a venda ocorreu. [Mais informações aqui](https://www.mercadopago.com.br/ajuda/contestaram-um-pagamento-o-que-faco_589) 

Para realizar o envio, deve-se fazer um **POST** a `https://api.mercadopago.com/v1/chargebacks/ID/documentation` da seguinte forma:
```
curl -XPOST -F 'files[]=@/path/to/file/file1.png' -F 'files[]=@/path/to/file/file2.pdf' https://api.mercadopago.com/v1/chargebacks/ID/documentation?access_token=
```

A api responderá com status `200 OK` se a documentação foi enviada com sucesso. A resposta mudará o status do atributo `documentation_status` a **review_pending**.

> NOTE
>
> Nota
>
> Os arquivos poderão ser .jpg, .png, .pdf e em seu conjunto não podem ultrapassar 10mb.

## Revisão por parte de Mercado Pago

Uma vez enviada a documentação, um representante de Mercado Pago a revisará.

## Resolução

Eventualmente o estorno poderá ter dois tipos de resolução possíveis:

| Campo              | Valor     | Descrição
| ----               | ----      | ----
| `coverage_applied` | **false** | Indica que Mercado Pago falhou _contra_ o vendedor (o dinheiro é devolvido ao comprador)
| `coverage_applied` | **true**  | Indica que Mercado Pago falhou _a favor_ do vendedor (se devolve o dinheiro ao vendedor)

Quando a resolução acontece, independentemente do resultado, se enviará uma nova notificação via **IPN** para que se possa verificar o que houve.
