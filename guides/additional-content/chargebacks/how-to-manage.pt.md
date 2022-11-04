# Como gerenciar disputas de contestação?

Uma disputa ocorre quando **você deseja argumentar** o pedido de contestação com informações e documentos que **validam a transação** e garantem que o produto foi entregue em conformidade.

Abaixo você encontra as informações necessárias para o gerenciamento das disputas das contestações feitas.

1. Configure as [notificações IPN](/developers/panel/notifications/ipn) no painel e ative a opção **Contestações (chargebacks)**
   
2. Consulte todas as informações de uma contestação com o método [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get)
   1. Identifique se a contestação é [elegível a cobertura](https://www.mercadopago[FAKER][URL][DOMAIN]/ajuda/294) e se é necessário apresentar alguma documentação, através dos campos `coverage_elegible` e `documentation_required`, respectivamente.

> WARNING
>
> Atenção
>
> Só é necessário continuar com os próximos passos se:
> 
>  1. A contestação for elegível a cobertura.
> 2. For necessária a apresentação de documentação.
>3. O prazo não expirou
>

3. Encaminhe os documentos que comprovem que a venda é válida através do método a seguir
```curl
curl -X POST  \
-F 'files[]=@/path/to/file/file1.png' \
-F 'files[]=@/path/to/file/file2.pdf' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
https://api.mercadopago.com/v1/chargebacks/ID/documentation
```

>WARNING
>
>Nota
>
>Os arquivos poderão ser `.jpg`, `.png` ou `.pdf` e, no total, não poderão superar 10mb.

Se a documentação for carregada no site com sucesso, a API responderá com status `200 OK` e modificará o valor de `documentation_status` para `review_pending`.

4. Aguarde a notificação IPN referente à resolução. Cheque novamente a contestação usando o método [Obter estorno](/developers/pt/reference/chargebacks/_chargebacks_id/get). O valor de `coverage_applied` pode ter assumido um dos possíveis valores:

| Valor           | Descrição
| ----            | ----
| **true**  | Indica que a decisão foi a favor do vendedor e o dinheiro será devolvido.
| **false** | Indica que a decisão foi contra o vendedor e o dinheiro será descontado.
