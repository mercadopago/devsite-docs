# Teste de integração 

Antes de sair à produção, recomendamos testar o funcionamento da sua integração e do processamento de pagamentos. Isso permitirá verificar se a integração foi feita corretamente e se os pagamentos estão sendo processados sem erros. 

## Pré-requisitos
Para testar a integração integração com o modelo atendido do Código QR, é importante atender aos requisitos mostrados abaixo.

| Requisito | Descrição |
|---|---|
| Usuários de teste (vendedor e comprador) | Os [usuários de teste](/developers/pt/docs/qr-code/additional-content/your-integrations/test/accounts) têm os mesmos recursos de uma conta real do Mercado Pago, o que permite testar o funcionamento das integrações que você está desenvolvendo sem comprometer dados reais.<br>Tenha em mente que toda a fase de desenvolvimento da integração do Código QR deve ser feita com usuários de teste. Por isso, recomendamos que **você crie novos usuários** para a fase de teste de integração. |
| Credenciais produtivas de usuários de teste | Para testar sua integração, você precisará utilizar as **credenciais de produção** do usuário de teste que você criou. Você pode obter mais informações sobre as credenciais acessando a [nossa documentação](/developers/pt/docs/qr-code/additional-content/your-integrations/credentials). |

Se todos os requisitos foram cumpridos, siga as etapas seguintes para iniciar os testes.

