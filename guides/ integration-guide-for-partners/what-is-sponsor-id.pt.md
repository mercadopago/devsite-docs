# O que é Sponsor ID?

O "Sponsor ID" é o identificador necessário utilizado em todas as transações dos lojistas que fazem parte da plataforma do parceiro. 
Sua aplicação consiste em atribuir o ID da conta Mercado Pago em nome do parceiro nas requisições de pagamento, utilizando o campo `sponsor_id` no corpo da solicitação.

```bash
"sponsor_id": "(ID Conta MP da plataforma)"
```