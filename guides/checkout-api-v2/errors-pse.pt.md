# Erros em pagamentos com PSE
Ao processar transações através do PSE, a chamada para envio de pagamento pode retornar erros externos ao Checkout.

Abaixo, você confere quais são e quais formas você pode oferecer ao comprador para resolvê-los.


| Código | Descrição | Mensagem sugerida |
|---|---|---|
| 400 | O valor da transação ultrapassa os limites estabelecidos no PSE para o negócio. | *O valor da transação ultrapassa os limites estabelecidos no PSE para a empresa. Por favor contacte as nossas linhas de atendimento ao cliente por telefone (nnn)nnnn, ou por email email@email.com* |
| 500 - cause code 9034 | A transação não pode ser concluída agora. Você precisa tentar novamente mais tarde. | *A transação não pôde ser criada. Tente novamente mais tarde ou entre em contato conosco pelo telefone: (nnn)nnnn ou pelo email: email@email.com* |