# Meios de pagamento off-line

Este meio de pagamento irá adicionar o----[mlb]---- Checkout Transparente ------------ ----[mla, mlm, mpe, mco, mlu, mlc]---- Checkout API------------, permitindo assim a oferta de opções de pagamento em dinheiro utilizando métodos offline através do Mercado Pago.

1. Para ativar o Checkout, vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Clique em **3. Ative e configure os meios de pagamento**.
----[mlb]----
3. Na opção "Boleto e lotérica", clique em **Configurar**.

![Active and configure](/images/woocomerce/cho-pro-active-configure-pt.png)

------------
----[mla, mlm, mpe, mco, mlu, mlc]----
3. Na opção "Efectivo", clique em **Configurar**.

------------
4. A opção "Ativar checkout" permite habilitar ou desabilitar o Checkout em sua loja. Para ativar, clique no botão deslizante.
5. No campo **Título no checkout da loja**, insira o nome pelo qual esta forma de pagamento será identificada na loja. Por exemplo, você pode chamá-la de **Pagamento em dinheiro**.
----[mlb]----
![Active and title](/images/woocomerce/api-active-boleto-pt-br.png)

------------
6. A opção **Converter moeda** permite que o valor da moeda configurada no WooCommerce seja compatível com o valor da moeda que você utiliza no Mercado Pago. Para ativá-la, clique no botão deslizante.
7. Na seção **Meios de pagamento**, habilite quais métodos de pagamento em dinheiro deseja oferecer na loja. Você pode habilitar a opção "Todos os métodos de pagamento" ou apenas alguns.
8. Em **Vencimento do pagamento**, configure em quantos dias os pedidos com pagamento em dinheiro expirarão.
----[mlb]----
![Convert and payments methods](/images/woocomerce/api-convert-and-payments-methods-boleto-pt-br.png)

------------
Para salvar as alterações nas configurações, clique no botão **Concluir configuração**.

### Configurações avançadas

É possível personalizar as opções na seção de configurações avançadas da forma de pagamento, proporcionando uma experiência mais customizada na loja. Para acessar essas opções, clique no título **Configurações avançadas** e as opções descritas abaixo serão exibidas:

- **Reduzir inventário**: ative a redução de inventário durante a criação de um pedido, independentemente da aprovação do pagamento. Desative esta opção apenas quando os pagamentos forem aprovados.
- **Desconto nos checkouts Mercado Pago**: insira um valor percentual de desconto para os clientes que pagarem por esta forma de pagamento. Para ativá-lo, insira um percentual de desconto e marque a opção "Ativar e mostrar esta informação no checkout do Mercado Pago".
- **Comissão nos checkouts Mercado Pago**: insira um valor percentual adicional que quiser cobrar como comissão aos clientes que optarem por esta forma de pagamento. Para ativá-lo, insira um percentual de desconto e marque a opção "Ativar e mostrar esta informação no checkout do Mercado Pago".
----[mlb]----
![Advanced settings](/images/woocomerce/advanced-settings-boleto-pt-br.gif)

------------
Para salvar as alterações nas configurações, clique no botão **Concluir configuração**.