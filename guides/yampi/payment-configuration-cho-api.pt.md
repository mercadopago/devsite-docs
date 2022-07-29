# Configurar os pagamentos com  Checkout Transparente 

Com o [Checkout Transparente](/developers/pt/guides/checkout-api/landing), todo o processo de finalização de compra acontecerá dentro do ambiente da loja online, sem a necessidade de redirecionamento para uma página externa. Além de permitir maior controle no processo de customização e integração, o checkout oferece uma estrutura completa para processamento de pagamentos com os principais meios disponíveis no mercado. 

Veja abaixo quais são os meios de pagamento disponíveis para a loja ao integrar o Checkout Transparente.

* Cartões de crédito.
* Boleto bancário.
* Pix (transferência bancária disponível 24h por dia).

Para integrar o Checkout Transparente do Mercado Pago à sua loja na Yampi, siga os passos abaixo.

1. Na tela de **gerenciamento dos gateways de pagamento**, localize o meio de pagamento que deseja utilizar ou editar e clique em **Visualizar**. 
2. Na tela de **gerenciamento do meio pagamento selecionado**, caso ainda não esteja indicado, selecione a **afiliação** registrada para o Mercado Pago.
3. Para alguns dos meios de pagamento disponíveis você também poderá configurar algumas informações, como:
 
* **Boleto bancário**: indicar um percentual de desconto para pagamentos realizados com boleto, informar a quantidade de dias a serem considerados para vencimento e cancelamento dos boletos vencidos, além de inserir possíveis instruções relacionadas ao meio de pagamento.
* **Pix**: indicar um percentual de desconto para pagamentos realizados com Pix.
 
4. Clique em **Salvar** para finalizar a configuração.

Pronto! O checkout do Mercado Pago está pronto para receber pagamentos online de sua loja na Yampi.

> NOTE
>
> Importante
> 
> Para pagamentos com cartões de crédito, as configurações de parcelamento e juros devem ser verificadas diretamente no seu [painel de usuário do Mercado Pago](https://www.mercadopago.com.br/costs-section#from-section=menu).
> 
> A opção de pagamento com Pix só poderá ser utilizada se houver uma [chave Pix cadastrada](/developers/pt/docs/checkout-api/integration-configuration/integrate-with-pix) no Mercado Pago. Além disso, existe um limite para o valor de Pix, estabelecido pelo Banco Central do Brasil, que poderá ser movimentado no decorrer do período noturno (entre 20h e 6h) de R$1 mil. Para o período diurno (entre 6h e 20h), contudo, não há limite de movimentação.

> PREV_STEP_CARD_PT
>
> Configuração da integração
>
> Integre o Mercado Pago para começar a receber pagamento em sua loja da Yampi.
>
> [Configurar a integração](/developers/pt/docs/yampi/integration)