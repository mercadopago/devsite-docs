---
  indexable: false
---

# Credenciais

O Mercado Pago possui dois tipos de pares de credenciais, **CLIENT_ID** | **CLIENT_SECRET** e **PUBLIC_KEY** | **ACCESS_TOKEN**. Essas credenciais servem como um tipo de chave pessoal para que você crie seu método de pagamento e integre o Mercado Pago com sua loja virtual. Segue abaixo procedimento para obtenção das Credenciais.

##Acessar conta Mercado Pago

Para obter suas credenciais, primeiramente acesse sua conta do Mercado Pago no link [https://www.mercadopago.com.br/](https://www.mercadopago.com.br/).
Caso não possua uma conta crie uma clicando em **"Cadastre-se"**. Preencha o formulário de acordo com o tipo de conta que desejar. Lembre-se que está conta ficará vinculada à sua loja virtual.

![painelMercadoPago](/images/painelMercadoPago.gif)

## Acessar Credenciais

Uma vez Autenticado em sua conta Mercado Pago, acesse o seguinte link: [https://www.mercadolibre.com/jms/[FAKER][GLOBALIZE][SITE_ID]/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials/]([FAKER][CREDENTIALS][URL]).
Você acessará a página de credenciais da sua conta.

![paginaCredenciais](/images/paginaCredenciais.gif)

Nesta página você terá acesso as chaves de configuração da sua conta Mercado Pago para instalar a integração por API ou Checkout Pro (Redirect, LightBox ou Iframe) na sua Loja Virtual.

> NOTE
>
> Nota
>
> Para configurar a integração por API será necessário informar as credencias **PUBLIC_KEY** e **ACCESS_TOKEN**.
> Para configurar o Checkout Pro (Redirect, LightBox ou Iframe) será necessário informar as credencias **CLIENT_ID** e **CLIENT_SECRET**.

## Formulário Quero ir para Produção

Ao escolher a opção de integração por API, será necessário preencher o formulário “Eu quero ir para produção”, caso contrario sua integração ficará inabilitado para receber pagamentos.
Clique em “Eu quero ir para produção” para acessar o formulário.

![queroIrParaProducao](/images/queroIrParaProducao.gif)

* Em **“Sitio web ou App”** escrever URL do site;
* Em **“Nome”** escrever seu nome;
* Em **“Documento”** escrever “CPF” e insirir somente os dígitos (por ex. CPF19119119100);
* Em **“Data de nascimento”** inserir a data do dono do documento;
* Em **“Endereço postal”** preencher o endereço completo com rua, número, complemento, bairro, cidade, estado e CEP;
* Em **“Comentários”** descrever o segmento que trabalhará e produtos que venderá na sua loja;
* Marque os **“checks”** das 3 afirmações;
* Clicar em **“Enviar”**.

Pronto! Você será redirecionado para a página inicial das credenciais, e sua integração configurada na sua loja virtual estará apta a transacionar.
