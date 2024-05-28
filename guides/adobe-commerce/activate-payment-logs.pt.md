# Como ativar os logs de pagamento?

Os _logs_ fornecem informações completas sobre as transações, facilitando a compreensão dos eventos ocorridos. Além disso, ao realizar modificações ou adicionar novos métodos de pagamento, os _logs_ ajudam a validar o correto funcionamento da integração.

A equipe de suporte pode solicitar o envio ou verificação dos _logs_ para rastrear informações específicas, quando necessário, por isso é importante mantê-los ativos. 

Siga as etapas abaixo para ativar os _logs_ de pagamento.

1. Para acessar a página de configurações, clique no menu lateral **Lojas** > **Configuração**:

![Configuração](/images/adobe-commerce/logs-configuration-pt.png)

2. Em **configuração**, clique no menu lateral **Vendas**. No submenu que será aberto, selecione **Forma de pagamento**:

![Métodos](/images/adobe-commerce/logs-payment-method-pt.gif)

3. Em **Outros meios de pagamento**, localize o plugin do Mercado Pago e clique no botão **Configurar** para abrir as configurações:

![Configure](/images/adobe-commerce/logs-configure-pt.png)

4. Na tela de configurações do plugin, selecione a opção **Configurações básicas** > **Suporte para desenvolvedores**. 

![Suporte](/images/adobe-commerce/logs-support-pt.png)

5. Caso esteja marcada, desmarque a caixa de seleção **Utilizar o valor do sistema** e habilite o campo **Depurar** clicando em **Sim**.

![Debug](/images/adobe-commerce/logs-debug-pt.png)

6. Feito isso, clique no botão **Gravar Configuração** para salvar a alteração.

Com essa configuração, o plugin do Mercado Pago registra os _logs_ no servidor onde a loja está hospedada, permitindo que um usuário administrador os acesse facilmente.

> NOTE
>
> Nota
>
> Os arquivos de _log_ gerados incluem o `payment.log`, juntamente com os _logs_ padrão de Adobe Commerce, como o  `exception.log` e o `system.log`. Todos esses _logs_ podem ser encontrados no diretório `src/var/log/`.


