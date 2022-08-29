# Payment Brick 

O Payment Brick é uma solução modular e personalizável que permite adicionar vários métodos de pagamento à sua loja com apenas um Brick, permitindo que você salve os dados do cartão para compras futuras. Ao utilizar o Payment Brick, você terá diferentes métodos de pagamento à sua disposição e poderá escolher quais habilitar para o seu site.

----[mlb]----
Neste momento, você poderá dar aos seus clientes a possibilidade de efetuarem pagamentos através de cartões de crédito e do cartão de débito virtual Caixa. A curto prazo, adicionaremos a possibilidade de que, usando este mesmo Brick, você também possa permitir que eles façam pagamentos com Pix, boleto e na lotérica.

------------

----[mla, mlm, mpe, mco, mlu, mlc]----
Por enquanto, você pode dar aos seus clientes a possibilidade de fazer pagamentos por meio de cartões de débito e crédito. A curto prazo, adicionaremos a possibilidade de que, usando este mesmo Brick, você também possa permitir que eles façam pagamentos em dinheiro.

------------

A possibilidade de guardar os dados dos cartões que já foram debitados em compras anteriores torna o processo de pagamento mais eficiente e rápido. Para o comprador, não é mais necessário recarregar os dados cada vez que entrar no checkout.

![payment-brick-layout](checkout-bricks/payment-brick-layout-pt.gif)

Por sua vez, nosso processador cumpre todas as garantias de segurança para oferecer aos usuários a máxima proteção ao salvar seus dados. Essa é uma das grandes vantagens de adicionar o Checkout Bricks ao seu site: a tranquilidade de oferecer uma solução segura, respaldada pelo Mercado Pago, mas customizada para as necessidades da sua empresa.

## Layout 

O layout do Payment Brick foi construído com base nas melhores práticas de UX para que seja possível entregar ao comprador a melhor experiência sem que você precise se preocupar com detalhes de design. O layout traz os elementos detalhados abaixo.

> WARNING
>
> Atenção
>
> Os bricks foram criados para atender não somente necessidades técnicas de implementação e segurança, mas também para prover a melhor experiência ao comprador. Customizar um brick pode mudar drasticamente a experiência do comprador. Nossa recomendação é que você sempre faça uso do brick com a menor quantidade possível de customizações adicionais para garantir sempre a melhor experiência.

### Campos do formulário de cartão

| Seção | Elemento | Características | Observações |
|---|---|---|---|
| Container das opções de pagamento |Título <br><br> Propriedade: formTitle | **Valor (título):** Cartão de crédito ou débito <br> **Label**: N/A <br> **Placeholder**: N/A <br> **Tipo**: string <br> **Formato:** N/A <br> **Máx caracteres**: N/A | Opcional <br> Customizável |
| Container das opções de pagamento | Botão de pagamento <br><br> Propriedade: formSubmit | **Valor:** [imagem] Pagar <br> **Label:** N/A <br> **Placeholder**: N/A <br> **Tipo**: string <br> **callback**: onSubmit <br> **função**: promise(cardFormData) | Opcional <br> Ocultável e customizável  <br><br> *A função recebe os dados do formulário, incluindo o token do cartão e apresenta animação de carregamento. |
| Formulário do pagamento com cartão | Campo para inserção do número do cartão <br><br> Propriedade: cardNumber | **Valor**: N/A <br> **Label**: Número do cartão <br> **Placeholder**: 1234 1234 1234 1234 <br> **Tipo**: number <br> **Formato**: N/A <br> **Máx. caracteres**: a depender do emissor, podendo variar entre 15 e 16.| Obrigatório <br> Customizável (label, placeholder) |
| Formulário do pagamento com cartão | Campo para inserção da data de vencimento do cartão <br><br> Propriedade: expirationDate | **Valor**: N/A <br> **Label**: Data de vencimento <br> **Placeholder**: MM/AA <br> **Tipo**: date <br> **Formato**: MM/AA <br> **Máx. caracteres:** 5 | Obrigatório <br> <br> Customizável (label, placeholder) |
| Formulário do pagamento com cartão | Campo para inserção do código de segurança <br><br> Propriedade: securityCode | **Valor**: N/A <br> **Label**: Nome do titular como aparece no cartão <br> **Placeholder**: João Silva <br> **Tipo**: string <br> **Formato**: N/A <br> **Máx. caracteres**: 100 | Obrigatório <br> Customizável (label, placeholder e máximo de caracteres errados) | 
| Formulário do pagamento com cartão | Campo para inserção do nome do titular do cartão <br><br> Propriedade: cardholderName | **Valor**: N/A <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obrigatório <br><br> Customizável (label, placeholder, tipo, formato e máximo de caracteres errados) |
| Formulário do pagamento com cartão | Campo para seleção do documento do titular do cartão <br><br> Propriedade: cardholderIdentificationType | **Valor:** ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro
------------ ----[mlu]----CI, Otro
------------ ----[mpe]----DNI, C.E, RUC, Otro
------------ <br> **Label**: Documento <br> **Placeholder**: N/A <br> **Tipo**: select <br> **Formato**: N/A <br> **Máx. caracteres**: N/A | Obrigatório* <br> Customizável (label, placeholder)<br><br> *Se os dados de tipo de documento e número de documento foram fornecidos e salvos anteriormente, este elemento se torna opcional. |
| Formulário do pagamento com cartão | Campo para inserção do número do documento do titular do cartão <br><br> Propriedade: cardholderIdentificationNumber | **Valor**: N/A <br> **Label**:  N/A <br> **Placeholder**: ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------. <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório <br> Não customizável |
| Formulário do pagamento com cartão | Campo para inserção do email do comprador <br><br> Propriedade: email | **Valor**: N/A <br> **Label**: Email <br> **Placeholder**: joaosilva@email.com <br> **Tipo**: string <br> **Formato**: padrão de e-mail convencional (exemplo@email.com) <br> **Máx. caracteres:** N/A | Obrigatório* <br> Customizável  (label, placeholder) <br><br> *Se os dados foram fornecidos e salvos anteriormente, este elemento se torna opcional. |


