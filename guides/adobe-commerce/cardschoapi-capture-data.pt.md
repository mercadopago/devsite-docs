# Captura de dados do cliente no formulário de pagamento

Esta função permite capturar documentos de clientes a partir de um campo adicional no formulário de pagamento. Caso a loja ainda não capture esses dados, basta selecionar a opção **Habilitado** em **Capturar documento de identificação**. 

A ativação desta funcionalidade proporciona a inserção automática do CPF do cliente no formulário de pagamento, otimizando a experiência de preenchimento dos dados.

![Capture data](/images/magento-two/captura_de_dados.gif)


> WARNING
>
> Importante
>
> Nosso módulo tenta capturar a informação do campo `vat_id` de sua loja, caso não encontre iremos sobrescrever a sua configuração pois esse é um valor obrigatório para o pagamento.