# Card Payment Brick 

O Card Payment Brick oferece um formulário de pagamento com um layout otimizado e temas diferentes, trazendo todos os campos necessários para se efetuar um pagamento através de cartão de crédito e/ou débito, e inclui os mecanismos necessários para receber automaticamente os dados necessários para criar o pagamento no back-end.

Este brick, além de conter os campos de coleta dos dados pessoais do titular do cartão (nome do titular e documento), conta também com campos de coleta do número do cartão, data de vencimento e código de segurança (CVV) que já estão em conformidade com padrões de segurança [PCI](/developers/pt/guides/additional-content/security/pci), eliminando a necessidade de tratamento desses dados.

Além de coletar os campos necessários para efetuar o pagamento, este componente ainda auxilia o usuário a finalizar o preenchimento da tela com alertas de campos incompletos e possíveis erros no preenchimento. Veja a seguir as principais caracteristicas deste brick. 

![cardform](checkout-bricks/card-form-pt.png)

## Layout 

O layout do Card Payment Brick foi construído com base nas melhores práticas de UX para que seja possível entregar ao comprador a melhor experiência sem que você precise se preocupar com detalhes de design. O layout traz os elementos detalhados abaixo.

> WARNING
>
> Atenção
>
> Os bricks foram criados para atender não somente necessidades técnicas de implementação e segurança, mas também para prover a melhor experiência ao comprador. Customizar um brick pode mudar drasticamente a experiência do comprador. Nossa recomendação é que você sempre faça uso do brick com a menor quantidade possível de customizações adicionais para garantir sempre a melhor experiência.

| Elemento | Características | Observações |
|---|---|---|
|Título e bandeiras aceitas <br><br> Propriedade: formTitle | **Valor (título):** Cartão de crédito ou débito <br> **Label** N/A <br> **Placeholder:** N/A <br> **Tipo:** text/imagem <br> **Formato:** N/A <br> **Máx caracteres**: N/A | Opcional <br> Customizável  </br> <br> *As bandeiras são exibidas em conjunto com o título. A única customização disponível para elas é ocultá-las junto ao título do formulário, deixando de exibir ambas informações. |
| Campo para inserção do número do cartão <br><br> Propriedade: cardNumber | **Valor:** N/A <br> *Label*: Número do cartão <br> **Placeholder:** 1234 1234 1234 1234 <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** a depender do emissor, podendo variar entre 15 e 16.| Obrigatório <br> Customizável (label, placeholder) |
| Campo para inserção da data de vencimento do cartão <br><br> Propriedade: expirationDate | **Valor:** N/A <br> **Label:** Data de vencimento <br> **Placeholder:** MM/AA <br> **Tipo:** date <br> **Formato:** MM/AA <br> **Máx. caracteres:** 5 | Obrigatório <br> <br> Customizável (label, placeholder) |
| Campo para inserção do código de segurança <br><br> Propriedade: securityCode | **Valor:** N/A <br> **Label:** Nome do titular como aparece no cartão <br> **Placeholder:** João Silva <br> **Tipo:** string <br> **Formato:** N/A <br> **Máx. caracteres:** 100 | Obrigatório <br> Customizável (label, placeholder e máximo de caracteres errados) | 
| Campo para inserção do nome do titular do cartão <br><br> Propriedade: cardholderName | **Valor:** N/A <br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório <br><br> Customizável (label, placeholder, tipo, formato e máximo de caracteres errados) |
| Campo para seleção do documento do titular do cartão <br><br> Propriedade: cardholderIdentificationType | **Valor:** ----[mlb]----CPF, CNPJ------------ ----[mla]----DNI, CI, LC, LE, Otro------------ ----[mco]----CC, CE, NIT, Otro------------ ----[mlc]----RUT, Otro
------------ ----[mlu]----CI, Otro
------------ ----[mpe]----DNI, C.E, RUC, Otro
------------ <br> **Label:** Documento <br> **Placeholder:** N/A <br> **Tipo:** select <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório* <br> Customizável (label, placeholder)<br><br> *Se os dados de tipo de documento e número de documento foram fornecidos e salvos anteriormente, este elemento se torna opcional. |
| Campo para inserção do número do documento do titular do cartão <br><br> Propriedade: cardholderIdentificationNumber | **Valor:** N/A <br> **Label:**  N/A <br> **Placeholder:** ----[mlb]----999.999.999-99 para CPF ou 99.999.9999/9999-99 para CNPJ------------ ----[mla, mlm, mpe, mco, mlu, mlc]----N/A------------. <br> **Tipo:** number <br> **Formato:** N/A <br> **Máx. caracteres:** N/A | Obrigatório <br> Não customizável |
| Campo para inserção do email do comprador <br><br> Propriedade: email | **Valor:** N/A <br> **Label:** Email <br> **Placeholder:** joaosilva@email.com <br> **Tipo:** string <br> **Formato:** padrão de e-mail convencional (exemplo@email.com) <br> **Máx. caracteres:* X | Obrigatório* <br> Customizável  (label, placeholder) <br><br> *Se os dados foram fornecidos e salvos anteriormente, este elemento se torna opcional. |
| Botão de pagamento <br><br> Propriedade: formSubmit | **Valor:** [imagem] Pagar <br> **Label:** N/A <br> **Placeholder:** N/A <br> **Tipo:** text <br> **callback:** onSubmit <br> **função**: promise(cardFormData) | Opcional <br> Ocultável e customizável  <br><br> *A função recebe os dados do formulário, incluindo o token do cartão e apresenta animação de carregamento. |

> PREV_STEP_CARD_PT
>
> Introdução
>
> Saiba mais informações sobre as vantagens de utilizar o Checkouts Bricks e conheça os bricks que irão compor o checkout.
>
> [Introdução](/developers/pt/docs/checkout-bricks/introduction)

> NEXT_STEP_CARD_PT
>
> Pré-requisitos 
>
> Conheça os pré-requisitos necessários para integrar o Checkout Bricks.
>
> [Pré-requisitos](/developers/pt/docs/checkout-bricks/card-payment-brick/prerequisites)