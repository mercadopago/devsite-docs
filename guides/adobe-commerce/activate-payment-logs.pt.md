# Como ativar os logs de pagamento?

Os logs fornecem informações completas sobre as transações, facilitando a compreensão dos eventos ocorridos. Além disso, ao realizar modificações ou adicionar novos métodos de pagamento, os logs ajudam a validar o correto funcionamento da integração.

A equipe de suporte pode solicitar o envio ou verificação dos _logs_ para rastrear informações específicas, quando necessário. Por isso, é importante mantê-los ativos. Para isso, siga o seguinte passo a passo:

1. Para acessar a página de configurações, clique no menu lateral **Lojas** e, então, em **Configuração**:

![Configuração](/images/adobe-commerce/logs-configuration-pt.png)

2. Nas configurações, clique no menu lateral **Vendas**. No submenu que será aberto, selecione **Forma de pagamento**:

![Métodos](/images/adobe-commerce/logs-payment-method-pt.gif)

3. Em "Outros meios de pagamento", localize o plugin do Mercado Pago e clique no botão **Configurar** para abrir as configurações:

![Configure](/images/adobe-commerce/logs-configure-pt.png)

4. Na tela de configurações do plugin, selecione a opção **Configurações básicas** e, então, clique em **Suporte para desenvolvedores**. 

![Suporte](/images/adobe-commerce/logs-support-pt.png)

5. Caso esteja marcada, desmarque a caixa de seleção **Utilizar o valor do sistema** e habilite o campo "Depurar" selecionando **Sim**.

![Debug](/images/adobe-commerce/logs-debug-pt.png)

6. Feito isso, clique no botão **Gravar Configuração** para salvar a alteração.

Com essa configuração, o plugin do Mercado Pago registrará os logs no servidor onde a loja está hospedada, permitindo que um usuário administrador da loja os acesse diretamente no servidor.

> NOTE
>
> Nota
>
> Os arquivos de log gerados incluem o `payment.log`, juntamente com os logs padrão de Adobe Commerce, como o  `exception.log` e o `system.log`. Todos esses logs podem ser encontrados no diretório `src/var/log/`.


