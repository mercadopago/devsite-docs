# Mercado Pago com o Checkout Pro

Com o Checkout Pro, o comprador será direcionado da loja para o site do Mercado Pago, onde deverá preencher as informações solicitadas e efetuar o pagamento. Dessa forma, a transação é processada e concluída fora do ambiente da loja. 

Não é necessário que o comprador tenha conta no Mercado Pago, **mas recomendamos o incentivo ao login em uma conta Mercado Pago para facilitar todo o processo de compra**. Ao final da transação, o comprador pode ser devolvido à loja.

> Recomendamos o incentivo ao login em uma conta Mercado Pago para garantir as vantagens que os compradores podem ter ao realizar um pagamento logado, como: <br/></br>
> <br/></br>
> * **Entrar com facilidade**: iniciar a sessão com o mesmo e-mail e senha do Mercado Livre.
> * **Pagar com facilidade**: utilizar os cartões salvos em conta, Pix ou saldo disponível em conta.
> * **Proteger a compra**: recupera el dinero si no recibe el producto.

## Configure o meio de pagamento

1. Para ativar o checkout, você deve clicar no botão deslizante.
2. No campo **Título no checkout da loja** você pode escolher o nome com que essa forma de pagamento será exibida na loja. Por exemplo, você pode chamá-la de **Mercado Pago**.
3. A opção **Converter moeda** permite que o valor da moeda configurada no WooCommerce seja compatível com o valor da moeda que você utiliza no Mercado Pago. Se você quiser ativá-la, basta clicar no botão deslizante.
4. Em **Escolha as formas de pagamento aceitas na loja** você pode escolher quais formas de pagamento aceitará na loja através do Checkout Pro, podendo ser:
----[mlb]----
    - Cartões de débito e crédito.
    - Dinheiro (saldo da conta Mercado Pago ou boleto bancário).
    - Transferência bancária (Pix e PEC). A opção de pagamento Pix só será exibida se houver uma chave Pix cadastrada no Mercado Pago.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
    - Cartões de débito e crédito.
    - Dinheiro (saldo da conta Mercado Pago).
    - Transferência bancária.
------------
5. No campo **Parcelas máximas** você pode escolher quantas parcelas deseja oferecer aos clientes através do Mercado Pago. Você pode escolher entre 1 e 24 parcelas.

Para salvar as alterações nas configurações, clique no botão **Salvar alterações**.

## Configuração avançada

Se desejar, você pode alterar as opções nas configurações avançadas da forma de pagamento para oferecer uma experiência mais personalizada na loja. Para acessar essas opções, clique no título **Configurações Avançadas** e as opções descritas abaixo serão exibidas:

- **Experiência de pagamento**: esta opção permite que você escolha se a experiência de pagamento será dentro da loja ou redirecionando os clientes para o site do Mercado Pago.
- **Voltar à loja**: clique no botão deslizante para escolher se deseja que o cliente retorne à loja assim que o pagamento for concluído ou se prefere que sua experiência de compra termine no site do Mercado Pago.
- **URL de sucesso**: este campo permite que você coloque um URL de sucesso personalizado para redirecionar os clientes assim que eles concluírem a compra.
- **URL de pagamento recusado**: esta opção permite colocar um URL personalizado para redirecionar os clientes caso o pagamento tenha sido recusado.
- **URL de pagamento pendente**: este campo permite que você coloque um URL personalizado para o qual os clientes serão redirecionados se o pagamento estiver pendente de aprovação.
- **Rejeição automática de pagamentos sem aprovação instantânea**: ative esta opção com o botão deslizante para rejeitar automaticamente pagamentos aprovados instantaneamente.
- **Desconto em checkouts do Mercado Pago**: permite que você escolha um valor percentual de desconto que deseja oferecer aos clientes que pagam por esta forma de pagamento. Para ativá-lo, você deve inserir uma porcentagem e selecionar o botão _Ativar e mostrar esta informação no checkout do Mercado Pago_.
- **Comissões nos checkouts do Mercado Pago**: permite que você escolha um valor percentual adicional que deseja cobrar como comissão aos clientes que optarem por esta forma de pagamento. Para ativá-lo, você deve inserir uma porcentagem e selecionar o botão _Ativar e mostrar esta informação no checkout do Mercado Pago_.

Para salvar as alterações nas configurações, clique no botão **Salvar alterações**.

