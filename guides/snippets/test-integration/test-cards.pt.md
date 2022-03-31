Você pode utilizar cartões de teste de métodos de pagamento locais e simular diferentes respostas dos pagamentos, sem a necessidade de usar um cartão real.

> WARNING
>
> Atenção
>
>  É necessário que o DNI associado ao cartão seja o mesmo do usuário de teste que está realizando a compra. Para confirmar essa informação, na sua conta de usuário do Mercado Pago acesse **Seu perfil > Seus dados** e revise o campo **Documento**, garantindo que será o mesmo a ser associado ao cartão.
 
Para isso, de acordo com o seu país, utilize algum dos cartões que disponibilizamos a seguir.

----[mla]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------

----[mlb]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 4332 1540 6351 | 123 | 11/25 |
| Visa | 4235 6477 2802 5682 | 123 | 11/25 |
| American Express | 3753 651535 56885 | 1234 | 11/25 |

------------

----[mlc]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5416 7526 0258 2580 | 123 | 11/25 |
| Visa | 4168 8188 4444 7115 | 123 | 11/25 |
| American Express | 3757 781744 61804 | 1234 | 11/25 |

------------

----[mco]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5254 1336 7440 3564 | 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------

----[mlm]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Visa | 4075 5957 1648 3764 | 123 | 11/25 |

------------

----[mlu]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4509 9535 6623 3704 | 123 | 11/25 |

------------

----[mpe]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5031 7557 3453 0604 | 123 | 11/25 |
| Visa | 4009 1753 3280 6176 | 123 | 11/25 |
| American Express | 3711 803032 57522 | 1234 | 11/25 |

------------
 
Para **testar diferentes resultados de pagamento**, preencha o status desejado no nome do titular do cartão:
 
| Status de pagamento | Descrição |
| --- | --- |
| `APRO` | Pagamento aprovado |
| `CONT` | Pagamento pendente |
| `OTHE` | Recusado por erro geral |
| `CALL` | Recusado com validação para autorizar |
| `FUND` | Recusado por quantia insuficiente |
| `SECU` | Recusado por código de segurança inválido |
| `EXPI` | Recusado por problema com a data de vencimento |
| `FORM` | Recusado por erro no formulário |