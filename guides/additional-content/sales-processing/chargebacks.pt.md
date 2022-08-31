# Gerenciamento de operações contestadas

Encontre toda a informação sobre contestação de pagamentos, como preveni-las e gerenciá-las pela API.

## O que é uma contestação de pagamento?

Uma contestação é criada quando o **cliente reclama de uma cobrança no seu cartão de crédito ou débito perante o banco emissor do seu cartão e solicita a devolução do dinheiro.**

----[mla, mlm, mpe, mco, mlu, mlb]----

Quando isso acontece, podemos reter o dinheiro da cobrança até o problema ser solucionado e gerenciamos o caso com a entidade emissora do cartão. Temos 10 dias para apresentação dos comprovantes da operação e o processo de validação pode demorar até 140 dias.

------------

----[mlc]----
Quando isso acontece, podemos reter o dinheiro da cobrança até o problema ser solucionado e gerenciamos o caso com a entidade emissora do cartão. Temos 7 dias para apresentação dos comprovantes da operação e o processo de validação pode demorar até 150 dias.

------------

Caso a reclamação seja aceita pela entidade emissora, o dinheiro será devolvido ao comprador. Mas não se preocupe, se você atender aos [requisitos do Programa de Proteção ao Vendedor](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294), nós vamos realizar o estorno sem descontar o dinheiro da sua venda.

> NOTE
>
> Nota
>
> Se você recebeu uma reclamação e não sabe o que fazer, consulte as nossas [perguntas frequentes](https://www.mercadopago.com.ar/ayuda/recib%C3%AD-un-contracargo_4249).

## Recomendações para prevenir contestações de pagamento

Não é possível evitar todas as contestações, porém, você pode diminuir a probabilidade de que um pagamento vire uma contestação.

### Preencha os dados do seu negócio

Caso o comprador não reconheça a cobrança na fatura do seu cartão, ele poderá contestá-la. Para evitá-las, preencha a [informação do seu negócio](https://www.mercadopago.com.ar/settings/account) para definir como você quer aparecer nas faturas de cartões e nos SMS de confirmação de pagamento.

### Adicione o código de segurança no seu site

Vamos te ajudar a detectar comportamentos incomuns dos clientes com o nosso código de segurança para prevenir a fraude.

É muito simples. Adicione o script, configure a seção do seu site na qual está e, pronto! Você só deve substituir o valor de `view`pelo nome da página na qual quiser adicioná-lo.

```html
<script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
```

#### Possíveis valores para `view`

| Valor | Seção |
| --- | --- |
| *home* | Página inicial do seu site. |
| *search* | Página de pesquisa ou lista de produtos. |
| *item* | Página de um produto específico. |

> NOTE
>
> Nota
>
> Caso não tenha um valor disponível para a seção, você pode deixar vazio.

### Envie o comprovante de compra

É importante que você envie o comprovante de pagamento via email ou por mensagem de texto para ajudar seu cliente a lembrar o motivo do pagamento que ele fez.

### Detalhe toda a informação sobre o pagamento

Para otimizar a validação de segurança dos pagamentos, encaminhe para nós a maior quantidade de dados possíveis no momento de criar o pagamento. Por exemplo, se você encaminhar para nós os dados do comprador, podemos detectar se realizou pagamentos suspeitos em outro momento e alertá-lo sobre isso.
Você pode obter mais informações sobre cada atributo nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/payments/_payments/post).

### Faça a devolução de pagamentos suspeitos

Notificaremos você por meio de [notificações IPN](/developers/pt/docs/notifications/ipn/introduction) quando detectarmos algum comportamento irregular ou recebermos uma notificação de que o cartão usado foi roubado. Além disso, entraremos em contato por e-mail para notificá-lo. Nessa situação, você deve cancelar a compra e devolver o dinheiro ao comprador para evitar o estorno. Para começar a receber notificações, [preencha suas informações](https://www.mercadolibre.com/jms/mla/lgz/msl/login/H4sIAAAAAAAEAzWNwW4DIQxE_2XOaLlz7I8glzUbq4CRcbKpovx7tWp7HM28Ny80PWRk_56MBH7OJkUcAbORV7WeZUdCnwhY4vwXG10TMursbAvpdYkO3j-4ql2qSm0xAujut1ybnki_XwiQlfnpbINaPvnzIXy1_8ShSLi5z5ViPM9z62yFdp106Fa0b2Rx5wc3nWwrThrc4lCXKoVcdKwoc-AdUGl5dqPyheR25_cPATlhVe8AAAA/user) e escolha a opção "Alertas de fraude".

### Revise os dados ao cobrar com Point

Solicite a seus compradores a carteira de identidade no momento de fazer o pagamento e confira que os dados e a assinatura coincidam com os do cartão.

## Gerencie suas operações contestadas pela API

### Apresentação da contestação

Vamos avisar via [notificações IPN](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/notifications/ipn/introduction) toda vez que você receber uma contestação. Para [começar a receber notificações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/notifications/ipn/introduction), você deve preencher seus dados e escolher a opção Chargebacks.

### Consulte sobre a contestação

A notificação IPN vai conter a ID da contestação. Utilize a ID para obter informação sobre esse pagamento.

```
curl -X GET \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID
```

Você vai obter as seguintes informações:

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
      "url": "https://api.mercadopago.com/v1/chargebacks/documentation/op/op-4ccf4f39-b6f7-4c7b-a5ce-e8941a2a2b5f",
      "description": "File: img.png, Size: 3324"
    }
  ],
  "date_documentation_deadline": "2018-12-08T09:50:37.000-04:00",
  "date_created": "2018-09-14T16:20:54.000-04:00",
  "date_last_updated": "2018-11-28T10:48:48.000-04:00",
  "live_mode": true
}
```

> NOTE
>
> Nota
>
> Você pode obter mais informações nas [Referências de API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/chargebacks/_chargebacks_id/get).

### Compreensão de cobertura

Dependendo do caso, a política de cobertura pelo Mercado Pago pode variar.
O campo `coverage_elegible` define se a contestação pode ser coberta e `documentation_required` indica se é necessário apresentar documentação.
Para mais detalhes, você pode ver o [Programa de Proteção ao Vendedor](https://www.mercadopago.com.ar/ayuda/requisitos-programa-proteccion-vendedor_294).

> WARNING
>
> Importante
>
>Só é possível continuar com os outros passos caso a contestação possa ser coberta, é requerida a apresentação de documentação e o prazo não expirou.

### Disputa da contestação

Você pode encaminhar informação que valide que a venda foi feita pela API.

```
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID/documentation
```

Se a documentação for carregada no site com sucesso, a API responderá com status '200 OK' e modificará o valor de `documentation_status` para `review_pending`.

> NOTE
>
> Nota
>
> Os arquivos poderão ser .jpg, .png, .pdf e, no total, não poderão superar os 10mb.

### Resolução

Enviada a documentação, um representante do Mercado Pago fará a revisão.
Eventualmente, a contestação poderá ter dois tipos de resoluções possíveis no campo `coverage_applied`:


| Valor           | Descrição
| ----            | ----
| **true**  | Indica que a decisão foi a favor do vendedor e o dinheiro será devolvido.
| **false** | Indica que a decisão foi contra o vendedor e o dinheiro será descontado.

Após a resolução, será enviada uma nova notificação IPN para você conferir o caso.
