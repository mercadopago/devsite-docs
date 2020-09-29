---
indexable: false
---

# Lógica de novas tentativas de cobrança

Ao automatizar a recorrência de suas cobranças, são criados pagamentos autorizados que terão uma data de débito configurada com base na periodicidade definida na assinatura.

## Status de pagamento

Três alternativas podem surgir na hora em que a parcela é cobrada com base no resultado do seu pagamento:

* __O pagamento é feito com sucesso__ assim a parcela será `processed` processada no `status` processado e não será mais tentado novamente. 
----[mla]----
* __O pagamento está sendo processado__ portanto, a parcela permanecerá pendente em status `waiting for gateway` até que o pagamento seja resolvido.
------------
* __O pagamento é recusado__ portanto, a parcela permanecerá em status de `recycling` e quando a parcela não estiver vencida ou não tiver atingido o número máximo de novas tentativas. Caso contrário, permanecerá em processada com o status `processed`.


## Pagamentos recusados

Quando uma parcela permanece no status de `recycling` ela entra em um esquema de nova tentativa com um máximo de 4 possibilidades, no qual a parcela é cobrada novamente. O resultado pode ser qualquer um dos três pontos mencionados acima.

Se o pagamento for recusado, ele é atualizado para uma nova data de cobrança adicionando 1 das 4 possibilidades dentro de dez dias como uma janela de tempo de nova tentativa à última data disponível.

Por padrão, o pagamento é tentado novamente dentro de uma janela de 10 dias. Caso a parcela tenha uma data de vencimento, a janela de tempo é ajustada a essa data e mantém a lógica de 4 tentativas.

----[mla]----

## Pagamentos em processamento

Se uma parcela está com o status `waiting for gateway` e quando o pagamento é resolvido resulta em rejeitado e a data de vencimento é cumprida, a parcela passará automaticamente a processada com o status `processed`. Caso contrário, entrará no esquema de nova tentativa.


------------

Caso a parcela não possa ser cobrada na quarta tentativa, ela estará automaticamente no status `processed` associada a um pagamento recusado.

> NOTE
> 
> Note
> 
> O resultado de uma assinatura não afeta a geração e o processamento das parcelas restantes para a mesma assinatura.

------------
### Próximos passos

> LEFT_BUTTON_RECOMMENDED_PT
>
> Integração avançada
>
> Atualize, altere ou cancele suas assinaturas.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/advenced-integration/)

> RIGHT_BUTTON_RECOMMENDED_PT
>
> testes
>
> Verifique se suas assinaturas estão configuradas corretamente com os usuários de teste.
>
> [Pruebas](http://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/online-payments/subscriptions/testing/)
