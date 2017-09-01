# Teste sua integração

Você pode testar sua integração antes de partir para produção, a fim de realizar os ajustes necessários. Para isso, você pode utilizar cartões de teste e simular as diferentes respostas de pagamentos, sem ter que utilizar um cartão verdadeiro.

Utilize suas credenciais de Sandbox e alguns dos cartões fornecidos abaixo, de acordo com o seu país:

| País       | Visa                | Mastercard          | American Express  |
| ---------- | ------------------- | ------------------- | ----------------- |
| Argentina  | 4509 9535 6623 3704 | 5031 7557 3453 0604 | 3711 803032 57522 |
| Brasil     | 4235 6477 2802 5682 | 5031 4332 1540 6351 | 3753 651535 56885 |
| Chile      | 4168 8188 4444 7115 | 5416 7526 0258 2580 | 3757 781744 61804 |
| Colômbia   | 4013 5406 8274 6260 | 5254 1336 7440 3564 | 3743 781877 55283 |
| México     | 4075 5957 1648 3764 | 5474 9254 3267 0366 | indisponível      |
| Peru       | 4009 1753 3280 6176 | indisponível        | indisponível      |
| Venezuela  | 4966 3823 3110 9310 | 5177 0761 6430 0010 | indisponível      |

> Temos mais [cartões de teste]() disponíveis para meios de pagamentos locais de cada país.

Para testar os possíveis resultados de um pagamento, utilize um dos seguintes prefixos no campo `name` do */card_tokens* ou no campo `cardholderName`:

| Prefixo | Descrição                     |
| ------- | ------------------------------- |
| APRO    | Pagamento aprovado              |
| CONT    | Pagamento pendente              |
| CALL    | Recusado, ligar para autorizar  |
| FUND    | Recusado por valor insuficiente |
| SECU    | Recusado por código de segurança|
| EXPI    | Recusado por data de validade   |
| FORM    | Recusado por erro no formulário |
| OTHE    | Recusado geral                  |

Assim que finalizar seus testes e estiver pronto para receber os pagamentos de produção, você deverá substituir as [credenciais]() pelas de produção e [ativar o Modo Produção](#). **Você não precisa alterar nada mais em seu código**.
