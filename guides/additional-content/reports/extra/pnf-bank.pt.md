---
sites_supported:
  - mlb
---

# Pagamentos no fluxo no relatório de Dinheiro disponível

Vamos lhe mostrar como ver as cobranças mês a mês da sua conta do Mercado Pago no relatório de Dinheiro disponível.

## Movimentação de seus pagamentos no fluxo

O número de parcelas escolhido pelo comprador determina o número de pagamentos que você recebe. Por isso, a visualização dos pagamentos é diferente do esquema tradicional de liberação.

## Como ver suas cobranças

A venda estará dividida no número de parcelas em que foi realizada. Portanto, o relatório mostrará cada parcela separadamente, pois cada uma delas tem uma data de liberação diferente. Isto é, cada parcela pertence a um mês diferente.

Na coluna `DESCRIPTION` você pode identificar a parcela com o valor `installment` e na coluna `INSTALLMENTS` você pode ver a que número de parcela refere cada uma.

![Ejemplo de liberación de cuota](/images/manage-account/reports/reports-information-details/pnf-liberacion-de-cuota-bank.png)

## Tipos de devoluções

Há diferentes formas de ver suas devoluções dependendo do seu tipo e das parcelas liberadas.

### Devoluções totais

Se a devolução for total, você vai encontrar o detalhe de todas as parcelas em seu relatório e, ao mesmo tempo, o reembolso do pagamento completo.

Na coluna `DESCRIPTION` você pode identificar cada parcela com o valor `installment` e a devolução total como `refund`.

> Se você tiver dúvidas sobre quais as parcelas relativas a um pagamento, procure os movimentos que tiverem o mesmo `SOURCE_ID`.

![Ejemplo de reembolso antes de liberar alguna cuota](/images/manage-account/reports/reports-information-details/pnf-reembolso-antes-de-liberar-bank.png)

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/glossary) de Dinheiro disponível para revisá-lo quando precisar ou caso queira consultar algum termo técnico.


### Devoluções parciais

Se a devolução for parcial antes da primeira cobrança, o número de parcelas e suas quantidades vão se atualizar conforme o caso. Caso você já tenha recebido algum pagamento, a devolução total que ainda reste cobrar será subtraída e o montante das parcelas será novamente especificado.

Se a devolução for maior ao montante que você ainda deve receber, não se preocupe, no próximo relatório você verá debitado o valor pela diferença para poder completá-la.

## Estornos

Você pode ver no seu relatório quando um [estorno](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/account/chargebacks) ou uma mediação é resolvido em favor do comprador. Você visualizará a lista com o detalhe de todas as parcelas, ou as que ainda não tenham sido liberadas, e o montante total pelo estorno do pagamento.

Para identificar este caso, você pode ver na coluna `DESCRIPTION` o valor `chargeback` que corresponde aos estornos das parcelas que já tenham sido cobradas.

> Se você tiver dúvidas sobre quais as parcelas relativas a um pagamento, procure os movimentos que tiverem o mesmo `SOURCE_ID`.

![Ejemplo de contracargo](/images/manage-account/reports/reports-information-details/pnf-contracargo-luego-de-liberar-bank.png)

## Adiantamento de parcelas

Se você solicitar um adiantamento, poderá ver todas as parcelas antecipadas no relatório e a respectiva comissão.

Na coluna `DESCRIPTION` você pode identificar cada parcela com o valor `installment` e a comissão como `fee-release_in_advance`.

![Ejemplo de adelanto de cuotas](/images/manage-account/reports/reports-information-details/pnf-adelanto-de-cuotas-bank.png)

> NOTE
>
> Nota
>
> Tenha em mãos o [Glossário do relatório](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/additional-content/reports/available-money/glossary) de Dinheiro disponível para revisá-lo quando precisar ou caso queira consultar algum termo técnico.
