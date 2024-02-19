# Mercado Crédito

É a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem precisar de cartão de crédito.

Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

Atualmente o **Mercado Crédito** é oferecido em nosso [Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro) (**Checkout Mercado Pago**) e agora também é possível acessá-lo diretamente do checkout da loja. 

Para **exibir o Mercado Crédito no checkout da sua loja**, siga os passos abaixo.

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Mercado Crédito".
6. Após localizá-lo, selecione-o, clique em **Instalar** e, por fim, em **Conectar**.
7. Selecione **Instalar app > Mais ações** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/your-integrations/credentials) à mão.
9. Para finalizar a instalação, clique em **Ativar**.

<center>

![shopify-mercado-credito](/images/shopify/mercado-credito-es.gif)

</center>

> WARNING
>
> Atenção
>
> Importante salientar que no plugin do Mercado Crédito **não existe um fluxo de teste**, então não é necessário selecionar o _checkbox_ "habilite o modo de teste".
> <br/><br/>
> No caso de renovar suas credenciais, lembre-se de substituí-las em sua integração.

Pronto! A modalidade de financiamento está habilitada em sua loja.