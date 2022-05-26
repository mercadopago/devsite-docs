# Layout 

O layout do Card Payment Brick foi construído com base nas melhores práticas de UX para que seja possível entregar ao comprador a melhor experiência sem que você precise se preocupar com detalhes de design. O layout traz os elementos detalhados abaixo.

![cardform](checkout-bricks/card-form-pt.png)

> WARNING
>
> Atenção
>
> Os bricks foram criados para atender não somente necessidades técnicas de implementação e segurança, mas também para prover a melhor experiência ao comprador. Customizar um brick pode mudar drasticamente a experiência do comprador. Nossa recomendação é que você sempre faça uso do brick com a menor quantidade possível de customizações adicionais para garantir sempre a melhor experiência.

| Elemento | Características | Observações |
|---|---|---|
|Título e bandeiras aceitas <br><br> Propriedade: formTitle | **Valor (título):** Cartão de crédito <br> **Label** N/A <br> **Placeholder:** N/A <br> **Tipo:** text/imagem <br> **Formato:** N/A <br> **Máx caracteres**: N/A | Opcional <br> Customizável  </br> <br> *As bandeiras são exibidas em conjunto com o título. A única customização disponível para elas é ocultá-las junto ao título do formulário, deixando de exibir ambas informações. |
| Campo para inserção do número do cartão <br><br> Propriedade: cardNumber | **Valor:** N/A <br> *Label*: Número do cartão <br> **Placeholder:** 1234 1234 1234 1234 <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** a depender do emissor, podendo variar entre 15 e 16.| Obrigatório <br> Customizável (label, placeholder) |
| Campo para inserção da data de vencimento do cartão <br><br> Propriedade: cardExpirationDate | **Valor:** N/A <br> **Label:** Data de vencimento <br> **Placeholder:** MM/AA <br> **Tipo:** date <br> **Formato:** MM/AA <br> **Máx. caracteres:** 5 | Obrigatório <br> <br> Customizável (label, placeholder) |
| Campo para inserção do código de segurança <br><br> Propriedade: cardSecurityCode | **Valor:** N/A <br> **Label:** Nome do titular como aparece no cartão <br> **Placeholder:** João Silva <br> **Tipo:** string <br> **Formato:** N/A <br> **Máx. caracteres:** 100 | Obrigatório <br> Customizável (label, placeholder) | 
| Campo para inserção do nome do titular do cartão <br><br> Propriedade: cardholderName | **Valor:** CPF, CNPJ <br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório <br><br> Customizável (label, placeholder) |
| Campo para seleção do documento do titular do cartão <br><br> Propriedade: cardholderIdentification | **Valor:** CPF, CNPJ <br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório* <br> Customizável (label, placeholder)<br><br> *Se os dados de tipo de documento e número de documento foram fornecidos e salvos anteriormente, este elemento se torna opcional. |
| Campo para inserção do número do documento do titular do cartão <br><br> Propriedade: cardholderIdentification | **Valor:** N/A <br> **Label:**  N/A <br> *Placeholder:* 999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ. <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório <br> Não customizável |
| Subtítulo <br><br> Propriedade: emailSectionTitle | **Valor:** Preencha seus dados <br> *Label:* N/A <br> *Placeholder:* N/A <br> **Tipo:** text <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório |
| Campo para inserção do email do comprador <br><br> Propriedade: cardholderEmail | **Valor:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Tipo:** string <br> **Formato:** padrão de e-mail convencional (exemplo@email.com) <br> **Máx. caracteres:* X | Obrigatório* <br> Customizável  (label, placeholder) <br><br> *Se os dados foram fornecidos e salvos anteriormente, este elemento se torna opcional. |
| Botão de pagamento <br><br> Propriedade: formSubmit | **Valor:** [imagem] Pagar <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Tipo:** text <br> **callback:** onSubmit <br> **função**: promise(cardFormData) | Opcional <br> Ocultável e customizável  <br><br> *A função recebe os dados do formulário, incluindo o token do cartão e apresenta animação de carregamento. |