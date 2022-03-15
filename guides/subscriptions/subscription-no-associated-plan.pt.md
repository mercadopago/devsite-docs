## Assinaturas sem plano associado

Assinaturas sem plano associado é quando diferentes assinaturas possuem características distintas por serem específicas para cada pagador. Por exemplo: uma assinatura de um único mês com um desconto específico.

Este modelo de assinatura pode ser feito de duas maneiras: **com pagamento autorizado** ou **com pagamento pendente**. 

### Assinaturas com pagamento autorizado

Assinaturas com pagamento autorizado permitem que a parcela de uma assinatura seja gerada e cobrada com base na recorrência definida, fazendo com que o mecanismo de assinatura agende e crie os pagamentos automaticamente com base no meio de pagamento definido no ato da criação da assinatura.

Para oferecer **assinaturas sem um plano associado e com pagamento autorizado**, envie um POST com os atributos necessários ao endpoint [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `authorized`. 

Finalizando o preenchimento dos campos, execute a requisição.


> NOTE
>
> Importante
>
> Para comprovar a validade do cartão, realizamos um pagamento com um valor mínimo. Se o pagamento obter sucesso, procedemos com a realização da devolução desse pagamento. O valor pode diferir conforme cada país.


### Assinaturas com pagamento pendente 


Assinaturas com pagamento pendente são um modelo de assinaturas onde um meio de pagamento não é definido no momento de sua criação. Quando isso ocorre, os pagamentos automaticamente ficam com status `pending` e dependem que o usuário busque uma forma de concluir o pagamento.

Neste caso, é possível atualizar a assinatura e definir um meio de pagamento através do endpoint [/preapproval/{id}](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval_id/put), ou compartilhar um link de pagamento para que o comprador possa concluir a compra com o meio de pagamento de sua preferência.

Para oferecer **assinaturas sem um plano associado e com pagamento pendente**, envie um POST com os atributos necessários ao endpoint [/preapproval](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `pending`. 

Finalizando o preenchimento dos campos,  execute a requisição.
