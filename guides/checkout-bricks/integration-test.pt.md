# Crie usuários de teste

[TXTSNIPPET][/guides/snippets/test-integration/create-test-users]

# Teste o fluxo de pagamento
 
## 1. Configure a integração com os dados do seu usuário vendedor
 
Configure a [public key de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste comprador** no frontend da sua aplicação e o [access token de produção]([FAKER][CREDENTIALS][URL]) do seu **usuário de teste vendedor** no seu backend.
 
## 2. Realize um pagamento com seu usuário comprador
 
### Testes com cartão de crédito
 
Inicie sua integração configurada com as credenciais do seu usuário de teste vendedor:
 
1. Preencha os dados de um [cartão de teste](/developers/pt/guides/checkout-api/integration-test/test-cards).
1. Insira o e-mail do seu usuário de teste comprador.
2. Confirme a compra e pronto!
 
## Começar a receber pagamentos
 
Para começar a cobrar, você deve cumprir os [requisitos para entrar em produção](/developers/pt/guides/checkout-api/goto-production) e [ativar suas credenciais]([FAKER][CREDENTIALS][URL]).
 
Antes de ativá-las, certifique-se de que as credenciais na sua integração sejam as da conta que recebe o dinheiro das vendas.
