----[mlb]----
# Linha de Crédito

------------
----[mlm]----
# Meses sin Tarjeta

------------
----[mla]----
# Cuotas sin Tarjeta

------------

É a modalidade de financiamento do Mercado Pago que oferece a opção de parcelar sem precisar de cartão de crédito.

Com essa linha de crédito, administrada pelo Mercado Pago, o pagamento é creditado integralmente na conta do vendedor, podendo o cliente optar por pagar em até 12 parcelas fixas mensais e sem a necessidade de cartão. O usuário terá apenas que entrar em sua conta no Mercado Pago (ou criar uma), saber o limite disponível e escolher em quantas parcelas deseja pagar.

----[mlb]----
Atualmente, você pode oferecer **Linha de Crédito** através do nosso [Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro) ou diretamente do checkout da sua loja com o app **Mercado Pago Linha de Crédito**.

Para **exibir a Linha de Crédito no checkout da sua loja**, siga os passos abaixo.

------------
----[mlm]----
Atualmente, você pode oferecer **Meses sin Tarjeta** através do nosso [Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro) ou diretamente do checkout da sua loja com o app **Mercado Pago Meses sin Tarjeta**.

Além disso, você poderá complementar a integração com a habilitação do app **Mercado Pago Banner**, um app que permite promover durante o processo de compra, a opção de pagamento com **Mercado Pago Meses sin Tarjeta**. Para mais informações sobre o como habilitar o banner, acesse a documentação [Como promover "Meses sin Tarjeta" em sua loja](/developers/pt/docs/shopify/shopify/how-tos/banner).

Para **exibir o Meses sin Tarjeta no checkout da sua loja**, siga os passos abaixo.

------------
----[mla]----
Atualmente, você pode oferecer **Cuotas sin Tarjeta** através do nosso [Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro) ou diretamente do checkout da sua loja com o app **Mercado Pago Cuotas sin Tarjeta**.

Para **exibir o Cuotas sin Tarjeta no checkout da sua loja**, siga os passos abaixo.

------------
1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações**.
3. Uma vez lá, selecione a opção **Pagamentos**. 
4. Em "Formas de pagamento adicionais", clique em **Adicionar formas de pagamento**.
----[mlb]----
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Mercado Pago Linha de Crédito".

------------
----[mlm]----
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Mercado Pago Meses sin Tarjeta".

------------
----[mla]----
5. Acesse a aba **Pesquisar por fornecedor** e procure o novo app com o nome "Mercado Pago Cuotas sin Tarjeta".

------------
6. Após localizá-lo, selecione-o, clique em **Instalar** e, por fim, em **Conectar**.
7. Selecione **Instalar app > Mais ações** e, depois, clique em **Gerenciar**.
8. Insira as suas **credenciais de produção** (`public key` e `access token`) nos campos solicitados e clique em **Salvar**. Lembre-se de ter suas [credenciais](/developers/pt/docs/shopify/additional-content/your-integrations/credentials) à mão.
9. Para finalizar a instalação, clique em **Ativar**.
----[mlm]----
![shopify-mercado-credito](/images/shopify/meses-sin-tarjeta-mlm.png)

------------
----[mlb]----
> WARNING
>
> Atenção
>
> Importante salientar que no app "Mercado Pago Linha de Crédito" **não existe um fluxo de teste**, então não é necessário selecionar o _checkbox_ "habilite o modo de teste".
> <br/><br/>
> No caso de renovar suas credenciais, lembre-se de substituí-las em sua integração.

------------
----[mlm]----
> WARNING
>
> Atenção
>
> Importante salientar que no app "Mercado Pago Meses sin Tarjeta" **não existe um fluxo de teste**, então não é necessário selecionar o _checkbox_ "habilite o modo de teste".
> <br/><br/>
> No caso de renovar suas credenciais, lembre-se de substituí-las em sua integração.

------------
----[mla]----
> WARNING
>
> Atenção
>
> Importante salientar que no app "Mercado Pago Cuotas sin Tarjeta" **não existe um fluxo de teste**, então não é necessário selecionar o _checkbox_ "habilite o modo de teste".
> <br/><br/>
> No caso de renovar suas credenciais, lembre-se de substituí-las em sua integração.

------------
Pronto! A modalidade de financiamento está habilitada em sua loja.