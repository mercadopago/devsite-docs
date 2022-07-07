# Assinaturas sem plano associado 

Assinaturas sem plano associado é quando diferentes assinaturas possuem características distintas por serem específicas para cada pagador. Por exemplo: uma assinatura de um único mês com um desconto específico.

Este modelo de assinatura pode ser feito de duas maneiras:

* [Com pagamento autorizado](/developers/pt/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_assinaturas_com_pagamento_autorizado) 
* [Com pagamento pendente](/developers/pt/guides/subscriptions/integration-configuration/subscription-no-associated-plan#bookmark_assinaturas_com_pagamento_pendente) 

## Assinaturas com pagamento autorizado

Assinaturas com pagamento autorizado permitem que a parcela de uma assinatura seja gerada e cobrada com base na recorrência definida, fazendo com que o mecanismo de assinatura agende e crie os pagamentos automaticamente com base no meio de pagamento definido no ato da criação da assinatura.

Para oferecer **assinaturas sem um plano associado e com pagamento autorizado**, envie um POST com os atributos necessários ao endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `authorized`. 

Finalizando o preenchimento dos campos, execute a requisição.

> NOTE
>
> Importante
>
> Para comprovar a validade do cartão, realizamos um pagamento com um valor mínimo. Se o pagamento obter sucesso, procedemos com a realização da devolução desse pagamento. O valor pode diferir conforme cada país.

### Lógica de novas tentativas de cobrança

Ao automatizar a recorrência de suas cobranças, são criados pagamentos autorizados que terão uma data de débito configurada com base na periodicidade definida na assinatura. A primeira parcela é cobrada até o período aproximado de uma hora após a assinatura.

#### Status de pagamento

----[mlb, mlm]----

Duas alternativas podem surgir na hora em que a parcela é cobrada com base no resultado do seu pagamento:

* __O pagamento é feito com sucesso__ assim a parcela será processada no status `processed` e não ocorrerá uma nova tentativa de cobrança. 

* __O pagamento é recusado__ portanto, a parcela permanecerá em status de `recycling` enquanto a parcela não estiver vencida ou não tiver atingido o número máximo de novas tentativas. Caso contrário, será processada com o status `processed`. 


#### Pagamentos recusados

Quando uma parcela permanece no status de `recycling` ela entra em um esquema de nova tentativa com um máximo de 4 possibilidades, no qual a parcela é cobrada novamente. O resultado pode ser qualquer um dos dois pontos mencionados acima.

Se o pagamento for recusado, ele é atualizado para uma nova data de cobrança adicionando 1 das 4 possibilidades dentro de dez dias como uma janela de tempo de nova tentativa à última data disponível.

Por padrão, o pagamento é tentado novamente dentro de uma janela de 10 dias. Caso a parcela tenha uma data de vencimento, a janela de tempo é ajustada a essa data e mantém a lógica de 4 tentativas.

------------

----[mla]----

Três alternativas podem surgir na hora em que a parcela é cobrada com base no resultado do seu pagamento:

* __O pagamento é feito com sucesso__ assim a parcela será processada no status `processed` e não será mais tentado novamente. 

* __O pagamento está sendo processado__ portanto, a parcela permanecerá pendente em status `waiting for gateway` até que o pagamento seja resolvido.

* __O pagamento é recusado__ portanto, a parcela permanecerá em status de `recycling` enquanto a parcela não estiver vencida ou não tiver atingido o número máximo de novas tentativas. Caso contrário, será processada com o status `processed`.


#### Pagamentos recusados

Quando uma parcela permanece no status de `recycling` ela entra em um esquema de nova tentativa com um máximo de 4 possibilidades, no qual a parcela é cobrada novamente. O resultado pode ser qualquer um dos três pontos mencionados acima.

Se o pagamento for recusado, ele é atualizado para uma nova data de cobrança adicionando 1 das 4 possibilidades dentro de dez dias como uma janela de tempo de nova tentativa à última data disponível.

Por padrão, o pagamento é tentado novamente dentro de uma janela de 10 dias. Caso a parcela tenha uma data de vencimento, a janela de tempo é ajustada a essa data e mantém a lógica de 4 tentativas.

#### Pagamentos em processamento

Se uma parcela está com o status `waiting for gateway` e quando o pagamento é resolvido resulta em rejeitado e a data de vencimento é cumprida, a parcela passará automaticamente a processada com o status `processed`. Caso contrário, entrará no esquema de nova tentativa.

------------

Caso a parcela não possa ser cobrada na quarta tentativa, ela estará automaticamente no status `processed` associada a um pagamento recusado.

Após 3 parcelas com pagamentos recusados a assinatura será automaticamente cancelada e a conta do vendedor será notificada do cancelamento da assinatura por e-mail.


> NOTE
> 
> Importante
> 
> O resultado de uma assinatura não afeta a geração e o processamento das parcelas restantes para a mesma assinatura.

## Assinaturas com pagamento pendente 

Assinaturas com pagamento pendente são um modelo de assinaturas onde um meio de pagamento não é definido no momento de sua criação. Quando isso ocorre, os pagamentos automaticamente ficam com status `pending` e dependem que o usuário busque uma forma de concluir o pagamento.

Neste caso, é possível atualizar a assinatura e definir um meio de pagamento através do endpoint [/preapproval/{id}](/developers/pt/reference/subscriptions/_preapproval_id/put), ou compartilhar um link de pagamento para que o comprador possa concluir a compra com o meio de pagamento de sua preferência.

Para oferecer **assinaturas sem um plano associado e com pagamento pendente**, envie um POST com os atributos necessários ao endpoint [/preapproval](/developers/pt/reference/subscriptions/_preapproval/post) e atente-se ao parâmetro `status`, que deverá ser preenchido com o valor `pending`. 

Finalizando o preenchimento dos campos, execute a requisição.

> PREV_STEP_CARD_PT
>
> Assinaturas com plano associado
>
> Veja mais informações sobre as assinaturas utilizadas quando é necessário ter a mesma assinatura em ocasiões diferentes e organizá-las em grupos identificáveis. 
>
> [Assinaturas com plano associado](/developers/pt/docs/subscriptions/integration-configuration/subscriptions-associated-plan)

----[mlb]----
> NEXT_STEP_CARD_PT
>
> Boleto bancário
>
> Saiba como disponibilizar para o assinante a opção de pagar a assinatura com boleto bancário.
>
> [Boleto bancário](/developers/es/docs/subscriptions/integration-customization/payment-methods/boleto-bancario)
------------

----[mla, mlm, mpe, mco, mlu, mlc]----
> NEXT_STEP_CARD_PT
>
> Valor proporcional (Pro rata)
>
> Veja como definir o valor cobrado do assinante caso a assinatura comece em um dia diferente da data de cobrança definida pelo vendedor.
>
> [Valor proporcional (Pro rata)](/developers/pt/docs/subscriptions/integration-customization/payment-methods/proportional-amount)
------------