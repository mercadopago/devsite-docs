# Assinaturas sem plano associado 

Assinaturas sem plano associado é quando diferentes assinaturas possuem características distintas por serem específicas para cada pagador. Por exemplo: uma assinatura de um único mês com um desconto específico.

Este modelo de assinatura pode ser feito de duas maneiras:

### Com pagamento autorizado
Permitem que a parcela de uma assinatura seja gerada e cobrada com base na recorrência definida, fazendo com que o mecanismo de assinatura agende e crie os pagamentos automaticamente com base no meio de pagamento definido no ato da criação da assinatura.

[**Acesse assinaturas com pagamento autorizado**](/developers/pt/docs/subscriptions/integration-configuration/subscription-no-associated-plan/authorized-payments)

### Com pagamento pendente
São um modelo de assinaturas onde um meio de pagamento não é definido no momento de sua criação. Quando isso ocorre, os pagamentos automaticamente ficam com status `pending` e dependem que o usuário busque uma forma de concluir o pagamento.

[**Acesse assinaturas com pagamento pendente**](/developers/pt/docs/subscriptions/integration-configuration/subscription-no-associated-plan/pending-payments)