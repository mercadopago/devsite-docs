# Teste sua Integração
Para testar sua integração, basta criar um pagamento PIX Open Finance e realizar o seguinte:

* Redirecionar para a url informada em `point_of_interaction.transaction_data.ticket_url`, que possui o link para o ambiente de Sandbox;

* Informar o `transaction_data.bank_info.origin_bank_id` com o id do banco escolhido, resultado da listagem pública de bancos disponíveis para o Open Finance;

* Informar a url de callback no `callback_url`.

No ambiente de Sandbox será mostrada uma tela que simula a instituição detentora da conta, com três botões que irão permitir escolher qual será o status final desse pagamento de teste:

* approved
  
* pending
  
* rejected.

Por fim, após escolher o status final do pagamento, ocorrerá o redirecionamento para a tela de feedback.

Note que, somente no fluxo de testes após escolher o status final do pagamento, antes de acontecer o redirecionamento de volta para a url passada no `callback_url` será mostrada uma tela de “espera” que não aparecerá nos fluxos produtivos.

> WARNING
> 
> Importante
> 
> Nos testes em Sandbox não é possível ver o callback que ocorre no navegador (no domínio do Mercado Pago por questões regulatórias). 