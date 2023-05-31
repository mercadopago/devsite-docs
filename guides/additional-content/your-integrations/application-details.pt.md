# Detalhes da aplicação

Para acessar os dados gerais da sua aplicação, navegue até o [Painel do desenvolvedor](/developers/panel/app)  e clique sobre o card de uma aplicação para acessar os **Detalhes da aplicação**.


## Qualidade da aplicação

Nesta seção, vamos garantir que sua aplicação atenda aos requisitos de qualidade e segurança necessários para proporcionar a melhor experiência tanto para vendedores quanto para compradores com o Mercado Pago.


### Atualizar pontuação

A pontuação indica o quão segura e alinhada com as boas práticas de integração do Mercado Pago é a configuração da sua aplicação.

Clique em **Atualizar pontuação** para iniciar o processo de análise da sua integração. Analise os pontos de melhoria identificados durante a análise e faça as alterações necessárias na sua integração. Nesse processo, serão analisados ​​uma série de campos associados, para saber mais, leia a documentação [Qualidade da integração](/developers/pt/guides/additional-content/homologator/homologator).

> Após realizar as melhorias, clique novamente em **Atualizar pontuação** para reavaliar sua integração e verificar se atende aos padrões exigidos.

----[mla, mlm, mlu, mco, mlc, mpe]----
> WARNING
>
> Atenção
>
> Por enquanto, a seção **Qualidade da integração** só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Mercado Pago Point,](/developers/pt/docs/mp-point/landing) [Checkout API](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)


------------
----[mlb]----
> WARNING
>
> Atenção
>
> Por enquanto, a seção **Qualidade da integração** só está disponível para integrações com o [Checkout Pro,](/developers/pt/docs/checkout-pro/landing) [Mercado Pago Point,](/developers/pt/docs/mp-point/landing) [Checkout Transparente](/developers/pt/docs/checkout-api/landing) e [Checkout Bricks.](/developers/pt/docs/checkout-bricks/landing)


------------

## Dados da aplicação
* **Dados da aplicação**: esta seção exibe os dados básicos da aplicação, incluindo:
 - **User ID**: número de identificação do usuário criado automaticamente.
 - **Número da aplicação**: número de identificação da aplicação criado automaticamente.
 - **Integração com**: o produto ou plataforma integrada com a aplicação. 
 - **Modelo da integração** (se houver): as opções de modelo de integração são disponibilizadas de acordo com o produto ou plataforma utilizada. 

### Editar dados
Você pode clicar no botão **Editar dados** para visualizar e editar as configurações avançadas que incluem os dados da sua aplicação e o produto a ser integrado. São elas:
* **Logotipo**: imagem em formato JPG ou PNG de até 1MB.
* **Nome de aplicação**: para identificar suas aplicações com mais facilidade (máximo de 50 caracteres).
* **Nome curto da aplicação**: para identificação pessoal do usuário criador da aplicação. 
* **Descrição da aplicação** (máximo de 150 caracteres).
* **Setor**: escolha a categoria que melhor descreve seu negócio.
* **URL do site em produção** (opcional).
* **Solução de pagamento a ser integrada**: edite a solução de pagamento a ser integrada entre **Pagamentos on-line** e **Pagamentos presenciais**.
- **Pagamentos online**: se você pretende utilizar uma plataforma de comércio eletrônico, marque **Sim**. Em seguida, selecione a **plataforma** com a qual você irá integrar. Por fim, escolha o **produto** que está integrando.

Caso você não esteja utilizando uma plataforma de comércio eletrônico, marque **Não** e selecione o **produto** que está integrando. Opcionalmente, você poderá selecionar o(s) modelo(s) de integração.

  - **Pagamentos presenciais**: selecione o **produto** que você está integrando. Se você selecionar a opção Código QR, opcionalmente você também poderá escolher o(s) modelo(s) de integração.
* **Redirect URL**: URL (em https) na qual você deseja receber o código de autorização quando sua integração for configurada como Marketplace ou realizada através de OAuth. Veja [OAuth](/developers/pt/docs/security/oauth/introduction) para mais detalhes.
* **Permissões da aplicação**: opções de acesso da sua aplicação, sendo elas: read (ler), offline access (acesso offline) e write (escrever). Por padrão, sua aplicação é criada com todas as permissões ativadas, mas você pode desativar uma permissão clicando na caixa de seleção referente à permissão que você deseja alterar.
</br>
### Excluir aplicação
Para remover uma aplicação, siga estas etapas: 
1. Acesse a página "Editar aplicação". 
2. Role até o final da página e clique no botão **Excluir aplicação**. 
Dessa forma, a aplicação será excluída com sucesso.

> WARNING
>
> Atenção
>
> Ao excluir uma aplicação, é importante ter em mente que sua loja perderá a capacidade de receber pagamentos por meio da integração associada a essa aplicação. Além disso, todas as configurações, incluindo as credenciais associadas, serão perdidas. **Uma vez excluída uma aplicação, não há como recuperá-la**.
