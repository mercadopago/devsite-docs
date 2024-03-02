# Teste de integração

É crucial realizar testes do fluxo completo antes de ir para a produção, verificando se a criação de pagamentos é feita corretamente e se as mensagens são eficazes na comunicação com o usuário. Uma boa experiência para seus clientes no checkout ajuda a melhorar a conversão.

Para realizar uma compra teste é preciso utilizar as **credenciais de teste do seu usuário de produção**. Para obtê-las, acesse **Detalhes da aplicação > Credenciais** dentro do [Painel do desenvolvedor](/developers/panel/app) ou em sua conta Mercado Pago, acessando [Seu negócio > Configurações > Gestão e Administração > Credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials).

Você pode utilizar cartões de teste de métodos de pagamento locais e simular diferentes respostas dos pagamentos, sem a necessidade de usar um cartão real.

Para isso, de acordo com o seu país, utilize algum dos cartões de **crédito** que disponibilizamos a seguir.
 
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
| Mastercard | 5254 1336 7440 3564| 123 | 11/25 |
| Visa | 4013 5406 8274 6260 | 123 | 11/25 |
| American Express | 3743 781877 55283 | 1234 | 11/25 |

------------
----[mlm]----
| Cartão | Número | Código de segurança | Data de vencimento |
| :--- | :---: | :---: | :---: |
| Mastercard | 5474 9254 3267 0366 | 123 | 11/25 |
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

Para **testar diferentes resultados de pagamento**, preencha o status desejado no nome do titular do cartão (campo `card_holder_name`):

----[mla]---- 
| Status de pagamento | Descrição | Documento de identidade |
| --- | --- | --- |
| `APRO` | Pagamento aprovado | (DNI) 12345678 |
| `OTHE` | Recusado por erro geral | (DNI) 12345678 |
| `CONT` | Pagamento pendente | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------
----[mlb]---- 
| Status de pagamento | Descrição | Documento de identidade |
| --- | --- | --- |
| `APRO` | Pagamento aprovado | (CPF) 12345678909 |
| `OTHE` | Recusado por erro geral | (CPF) 12345678909 |
| `CONT` | Pagamento pendente | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------
----[mlc]---- 
| Status de pagamento | Descrição | Documento de identidade |
| --- | --- | --- |
| `APRO` | Pagamento aprovado | (otro) 123456789 |
| `CONT` | Pagamento pendente | (otro) 123456789 |
| `OTHE` | Recusado por erro geral | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------
----[mco]---- 
| Status de pagamento | Descrição | Documento de identidade | 
| --- | --- | --- | 
| `APRO` | Pagamento aprovado | 123456789 |
| `OTHE` | Recusado por erro geral | 123456789 |
| `CONT` | Pagamento pendente | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------
----[mlm]---- 
| Status de pagamento | Descrição |
| --- | --- |
| `APRO` | Pagamento aprovado |
| `OTHE` | Recusado por erro geral |
| `CONT` | Pagamento pendente |
| `CALL` | Recusado com validação para autorizar |
| `FUND` | Recusado por quantia insuficiente |
| `SECU` | Recusado por código de segurança inválido |
| `EXPI` | Recusado por problema com a data de vencimento |
| `FORM` | Recusado por erro no formulário |

------------
----[mlu]---- 
| Status de pagamento | Descrição | Documento de identidade |
| --- | --- | --- |
| `APRO` | Pagamento aprovado | (CI) 12345678 <br> (otro) 123456789 |
| `OTHE` | Recusado por erro geral | (CI) 12345678 <br> (otro) 123456789 |
| `CONT` | Pagamento pendente | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------
----[mpe]---- 
| Status de pagamento | Descrição | Documento de identidade |
| --- | --- | --- |
| `APRO` | Pagamento aprovado | 123456789 |
| `OTHE` | Recusado por erro geral | 123456789 |
| `CONT` | Pagamento pendente | - |
| `CALL` | Recusado com validação para autorizar | - |
| `FUND` | Recusado por quantia insuficiente | - |
| `SECU` | Recusado por código de segurança inválido | - |
| `EXPI` | Recusado por problema com a data de vencimento | - |
| `FORM` | Recusado por erro no formulário | - |

------------

> Para mais informações sobre o fluxo de teste, acesse a seção de **Realizar compra teste** no [Checkout Transparente](/developers/pt/docs/checkout-api/integration-test/make-test-purchase) ou no [Checkout Bricks](/developers/pt/docs/checkout-bricks/integration-test/test-payment-flow).