# Cartões de crédito e débito

Ao configurar a ----[mla, mlu, mlc, mlm, mpe, mco]----Checkout API------------ ----[mlb]----Checkout Transparente------------ em lojas VTEX, você pode oferecer pagamentos com cartão de débito e/ou crédito. 

Para configurar esses meios de pagamento, acesse o painel de administração da plataforma VTEX, e vá para **Pagamentos > Configuração > Condições de pagamento**. Logo, siga os passos abaixo: 

1.  Clique no botão "+ (Adicionar novo plano de pagamento para...)". 
2. Dentro das categorias **Cartão de débito** ou **Cartão de crédito**, você encontrará as diferentes marcas de cartão que pode oferecer. Clique nelas e configure cada uma individualmente para habilitá-las. Você pode obter mais informações sobre essa configuração na seção de [tutoriais da VTEX](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros). 
3. Após selecionar a marca do cartão que deseja oferecer, preencha os campos exibidos na próxima tela: 
    1. Digite o **Nome da regra**, que permitirá identificar esse meio de pagamento. 
    2. Em **Processo com a afiliação**, selecione **MercadoPagoV2**. 
    3. No campo **Status**, ative a condição de pagamento usando o botão deslizante. 
    4. Para ativar o pagamento parcelado, selecione a opção **Automático**. Será oferecida a opção de financiamento previamente configurada na conta do vendedor do Mercado Pago. Consulte a seção "Parcelamento e juros" para obter mais informações.

> NOTE
>
> Nota
>
> Você também pode configurar **condições especiais** de pagamento. Para mais informações, leia a [documentação](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin).

4. Clique em **Salvar** para ativar a configuração desse cartão e, se desejar, repita o processo para configurar outras marcas.

![Configurar condições de pagamento com cartão de crédito](/images/vtex/paymentconditions-cc-imagenv2-pt.gif)

## Parcelamento e juros

Atualmente, o Mercado Pago oferece apenas a opção de parcelamento sem juros dentro da plataforma VTEX.

Da mesma forma, você tem a opção de configurar o parcelamento e os juros diretamente a partir da conta de vendedor do Mercado Pago. Para isso, siga as etapas descritas abaixo.

1. Clique no botão **Definir Parcelas e Juros** e faça o login na sua conta de pessoa vendedora Mercado Pago.
2. Selecione a opção **Código QR e pagamentos online**, habilite o parcelamento e selecione o número de parcelas que deseja oferecer no checkout. As opções vão de 1 a 12 vezes.

![Installment and interest](/images/adobe-commerce/parcelamento.gif)

Finalizadas essas etapas, o parcelamento no checkout estará configurado e pronto para processar vendas.

> NOTE
>
> Nota
>
> As mudanças nas condições de pagamento podem levar até 10 minutos para serem aplicadas.

