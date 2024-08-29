# Yape

Yape é um aplicativo móvel que simplifica o processo de transferências bancárias ao permitir que usuários efetuem transações de maneira fácil e rápida diretamente pelo celular, após associarem seu cartão de débito MultiRed ao aplicativo.

> WARNING
>
> Importante
>
> Para ativar este meio de pagamento, certifique-se de que o plugin do Mercado Pago esteja atualizado para a **versão 7.7** ou superior. Caso contrário, não será possível disponibilizar Yape em sua loja. 

# Configurar o meio de pagamento

Para configurar o Yape em lojas WooCommerce, siga os passos abaixo:
1. Acesse as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago**).
2. Clique em **3. Ative e configure os meios de pagamento**.
3. Na opção "Yape", clique em **Configurar**.

![Configure](/images/woocomerce/api-configure-yape-pt.png)

4. Clique no botão deslizante na opção **Ativar checkout**, que permitirá habilitar o checkout na loja.
5. No campo **Título no checkout da loja**, insira o nome que será exibido para identificar essa forma de pagamento, como "Yape", por exemplo.

![Activar](/images/woocomerce/api-active-yape-pt.png)

6. Ative a opção **Converter moeda** para que o valor da moeda configurada em WooCommerce seja compatível com o valor da moeda utilizada no Mercado Pago

![Convertir moneda](/images/woocomerce/api-active-convert-pt.png)

Para salvar as alterações nas configurações, clique no botão **Concluir configuração**.

## Configurações avançadas

É possível customizar sua loja utilizando as opções de personalização disponíveis nas configurações avançadas de pagamento. Para acessar essas opções, clique no título **Configurações avançadas** e as opções descritas abaixo serão exibidas:
 1. **Desconto nos checkouts do Mercado Pago**: esta opção permite oferecer um desconto para os clientes que utilizarem a forma de pagamento que está sendo configurada. Para ativá-lo, insira um percentual de desconto e marque a opção **Ativar e mostrar esta informação no checkout do Mercado Pago**.
 2. **Comissão nos checkouts do Mercado Pago**: esta opção permite inserir um valor percentual adicional que será cobrado como comissão dos clientes que optarem por esta forma de pagamento. Para ativá-lo, insira um percentual de desconto e marque a opção **Ativar e mostrar esta informação no checkout do Mercado Pago**.

![Configuración avanzada](/images/woocomerce/api-advanced-settings-yape-pt.png)

Para salvar as alterações nas configurações, clique no botão **Concluir configuração**.