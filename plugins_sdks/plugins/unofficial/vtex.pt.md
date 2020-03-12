# VTEX

## O que é VTEX?

VTEX é uma **plataforma e-commerce (PCI Compliance) com operação em toda América Latina** para sua loja virtual, que permite processar pagamentos através do Mercado Pago.

Você poderá oferecer aos seus clientes a possibilidade de pagar com [cartão de crédito](#bookmark_condição_de_pagamento_cartão_de_crédito) e [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário) no próprio [checkout da sua loja ou redirecionado para o site do Mercado Pago](#bookmark_condição_de_pagamento_checkout_mercado_pago).


## Etapas para configurar

Os **passos para começar a operar com Mercado Pago**, são os seguintes:

1. Crie uma [conta de vendedor](https://www.mercadopago.com.br/activities) no Mercado Pago caso ainda não tenha uma.
2. Cadastre uma afiliação de gateway de pagamento com o "Mercado Pago".
3. Configure as condições de pagamento Mercado Pago.
4. Configure as condições de pagamentos customizados usando MercadoPago (América Latina) 
5. Configure DeviceID.

## Criando afiliação de gateway Mercado Pago

Para criar uma **afiliação de gateway de pagamento com o Mercado Pago**, siga os passos abaixo:

1. No painel de administração de sua loja, acesse **Configurações** do módulo de pagamentos.
2. Na aba **Afiliações de Gateways**, clique no botão **"+"** (Quero receber pagamento pelo conector).
3. Clique no conector **MercadoPagoV1**.
4. Defina qual o nome que identificará a sua **Afiliação**.
5. O campo **OAuth login** não é utilizado. Deixe-o como está.
6. Preencha os campos de cadastro **PublicKey e AccessToken** com suas [credenciais da conta MercadoPago](#bookmark_credenciais_de_sua_conta_mercado_pago).
7. Deixe os campos **RefreshToken, ExpiredTokenIn e Merchant Account Id** em branco.
8. Em **Processing Mode**, escolha como você quer usar o MercadoPagoV1: como aggregator ou gateway.
9. No campo **CountryName**, selecione o país da sua loja.
10. Em **SoftDescriptor**, indique o que vai aparecer para identificar a transação realizada na sua loja.
11. Já em **Description**, escreva uma breve descrição do seu negócio (o preenchimento é opcional).
12. No campo **CategoryId**, escolha a categoria dos produtos que você vende na sua loja.
13. Já o campo **Financial Institution** é opcional e deve ser preenchido apenas se sua loja operar do "Chile".
14. Em Use **External Installments**, utilização as condições de parcelamento diretamente de sua conta Mercado Pago.
15. No campo **Antifraud**, informe se deseja usar um antifraude.
16. Em **Time Zone**, indique a região que define seu horário local.
17. Em **orderExpirationHours**, defina por quantas horas o sistema deve checar o status do pedido antes de sua expiração. Quando essa opção não é preenchida, é adotado o padrão de 192 horas.
18. No campo **maxInstallments**, escolha a quantidade máxima de parcelas enviadas ao MercadoPago.
19. Em **Categoria Principal**, escolha a categoria que mais se encaixa com sua loja.
20. Já o campo **Captura de segurança antecipada** é opcional e deve ser preenchido apenas por lojas na "Argentina e no Brasil". Você pode desativar a função ou escolher em quanto tempo quer realizar a captura (depois da aprovação da transação e da análise do antifraude).
21. Clique em "Salvar".

    ![Setting affiliation in VTEX](/images/vtex/vtex_afiliacao_gateway_1.gif)

E pronto! Sua afiliação com o Mercado Pago já está ativa!

> NOTE
>
> 
> Modo de processamento Mercado Pago com a VTEX
>
> **Modo Agregador**
> Receba pagamentos usando todos os cartões e promoções que o Mercado Pago oferece, além de transferências bancárias e métodos de pagamento off-line.
>
> **Modo Gateway**
> Receba pagamentos diretamente nos códigos comerciais do vendedor usando todas as promoções do vendedor.
>
> **Modo All In**
> Combine a operação Gateway e Agregador oferecendo ao comprador a melhor opção de pagamento.

## Configurar condições de pagamento

Após ter criado sua afiliação com o Mercado Pago, você tem a opção de oferecer em sua loja pagamentos com [cartão de crédito](#bookmark_condição_de_pagamento_cartão_de_crédito), [boleto bancário](#bookmark_condição_de_pagamento_boleto_bancário) e também pagamentos via [Checkout Mercado Pago](#bookmark_condição_de_pagamento_checkout_mercado_pago).

### Condição de pagamento cartão de crédito

Para criar uma **condição de pagamento cartão de crédito** utilizando sua afiliação com o Mercado Pago, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+" (Adicionar nova condição de pagamento para...).
3. Na seção "Cartão de Crédito", escolha qual bandeira irá adicionar ao meio de pagamento.
4. Informa o "nome da regra" para facilitar a identificação.
5. Ative a condição de pagamento no campo "Status".
6. Informar sua afiliação com o Mercado Pago, no campo "Processar com a afiliação".
7. Em opções de parcelamento, escolha parcelamento “Automático”, onde utiliza as condições de **parcelamento diretamente de sua conta Mercado Pago**.
8. Clique em “Salvar”.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_cartao_2.gif)

### Condição de pagamento boleto bancário

Para criar uma **condição de pagamento [boleto bancário](#bookmark_condições_de_pagamentos_offline)** utilizando sua afiliação com o Mercado Pago, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+" (Adicionar nova condição de pagamento para...).
3. Na seção "Boleto", escolha "Boleto Bancário" para adicionar ao meio de pagamento.
4. Informa o "nome da regra" para facilitar a identificação.
5. Ative a condição de pagamento no campo "Status".
6. Informar sua afiliação com o Mercado Pago, no campo "Processar com a afiliação".
7. Clique em “Salvar”.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_boleto_3.gif)

### Condição de pagamento Checkout Mercado Pago

O comprador será **redirecionado ao site do Mercado Pago** e uma vez finalizado o processo, voltará para sua loja.
Para criar essa condição de pagamento, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+" (Adicionar nova condição de pagamento para...).
3. Na seção "Outro", selecione a condição de pagamento "Mercado Pago".
4. Informa o "nome da regra" para facilitar a identificação.
5. Ative a condição de pagamento no campo "Status".
6. Informar sua afiliação com o Mercado Pago, no campo "Processar com a afiliação".
7. Clique em “Salvar”.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_redirect_4.gif)

## Configure as condições de pagamentos customizados usando MercadoPago (América Latina) 

Você pode usar o Mercado Pago para oferecer pagamentos customizados (usando cartões de crédito locais) na sua loja que atuam nos seguintes países da América Latina: Argentina, Chile, Colômbia e Uruguai.
Para isso, você precisa primeiro cadastrar a afiliação de gateway MercadoPagoV1 com as informações do país correspondente a sua loja.

### Condição de pagamento customizado (América Latina)

Para criar uma **condição de pagamento customizada** utilizando sua afiliação com o Mercado Pago, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba Pagamentos customizados, clique em um dos botões "Configurar" embaixo de Cartões da Loja (Co-Branded).
3. Preencha os dados do formulário de acordo com o cartão escolhido, confira as informações dos cartões para [Argentina](#bookmark_cartões_locais_da_américa_latina_-_argentina), [Chile](#bookmark_cartões_locais_da_américa_latina_-_chile), [Colômbia](#bookmark_cartões_locais_da_américa_latina_-_colômbia) e [Uruguai](#bookmark_cartões_locais_da_américa_latina_-_uruguai).
4. Clique em Salvar.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_customizado_5-1.gif)

1. Você será redirecionado para a tela de configuração da condição de pagamento.
2. Informa o "nome da regra" para facilitar a identificação.
3. Ative a condição de pagamento no campo "Status".
4. Informar sua afiliação com o Mercado Pago, no campo "Processar com a afiliação".
5. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa "Usar Antifraude."
6. Em opções de parcelamento, escolha parcelamento “Automático”, onde utiliza as condições de parcelamento diretamente de sua conta Mercado Pago.
7. Clique em “salvar”.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_customizado_5-2.gif)

----[mlc]----
### Condição de pagamento Webpay

Para criar uma **condição de pagamento Webpay**, utilizando sua afiliação com o Mercado Pago, siga os passos abaixo:

1. No painel de administração de sua loja, acesse "Configurações" do módulo de pagamentos.
2. Na aba "Condições de pagamento", clique no botão "+" (Adicionar nova condição de pagamento para...).
3. Na seção "Outro", selecione a condição de pagamento "Webpay".
4. Informa o "nome da regra" para facilitar a identificação.
5. Ative a condição de pagamento no campo "Status".
6. Informar sua afiliação com o Mercado Pago, no campo "Processar com a afiliação".
7. Clique em “Salvar”.

    ![Setting payments in VTEX](/images/vtex/vtex_condicao_pagamento_webpay_8.gif)
------------

### Cartões locais da América Latina - Argentina

###### Argencard
- Nome: Argencard
- Descrição: Argencard
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 501105-501105
- Código de Pagamento em Adquirente (opcional): argencard

###### Cencosud
- Nome: Cencosud
- Descrição: Cencosud
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 603493-603493
- Código de Pagamento em Adquirente (opcional): cencosud

###### CMR
- Nome: CMR
- Descrição: CMR
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 557039-557039
- Código de Pagamento em Adquirente (opcional): cmr

###### Cordial
- Nome: Cordial
- Descrição: Cordial
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 522135-522135,522137-522137,527555-527555
- Código de Pagamento em Adquirente (opcional): cordial

###### Cordobesa
- Nome: Cordobesa
- Descrição: Cordobesa
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 542702-542702,544764-544764,550073-550073,528824-528824
- Código de Pagamento em Adquirente (opcional): cordobesa

###### MercadoPago + Banco Patagonia
- Nome: Mercado Pago - Patagonia
- Descrição: Mercado Pago - Patagonia
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 515073-515073,515070-515070,532383-532383,532384-532384
- Código de Pagamento em Adquirente (opcional): mercadopago_cc

### Cartões locais da América Latina - Chile

###### CMR
- Nome: CMR
- Descrição: CMR
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 499847-499847,460072-460072,445596-445596,465375-465375,548740-548740,548742-548742,533187-533187,558984-558984
- Código de Pagamento em Adquirente (opcional): cmr

###### Magna
- Nome: Magna
- Descrição: Magna
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 568000-568099
- Código de Pagamento em Adquirente (opcional): magna

###### Presto
- Nome: Presto
- Descrição: Presto
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 920000-920099
- Código de Pagamento em Adquirente (opcional): presto

### Cartões locais da América Latina - Colômbia

###### Codensa
- Nome: Codensa
- Descrição: Codensa
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 590712-590712
- Código de Pagamento em Adquirente (opcional): codensa (minúscula)

### Cartões locais da América Latina - Uruguai

###### OCA
- Nome: OCA
- Descrição: OCA
- Meio de Pagamento: Mastercard
- Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (opcional): 589892-589892,542991-542991,549530-549530,549564-549564,549571-549571,549576-5495762
- Código de Pagamento em Adquirente (opcional): oca

> NOTE
>
> Condições de pagamentos Off-Line
> 
> As condições de pagamentos Off-Line são as modalidades de pagamentos onde são realizadas em dois passos:
>
> - Primeiro, um ticket é gerado com instruções de pagamento.
> - Em seguida, o pagamento é feito em dinheiro ou através de um caixa eletrônico seguindo as instruções do ticket.
> 
> Meios de Pagamentos Off-Line por país
> - Argentina: PagoFácil, Rapipago, RedLink.
> - Chile: Servipag.
> - Colombia: Efecty, Davivienda.
> - México: Banamex, Bancomer, Oxxo.
> - Perú: PagoEfectivo.
> - Uruguay: Abitab, Redpagos.
> - Brasil: Boleto Bancário

## Configurar DeviceID

Para configurar o DeviceID Mercado Pago, siga os passos abaixo:

1. No painel de administração de sua loja, acesse Checkout do módulo "Configurações da Loja".
2. Clique no ícone "editar", referente a configuração de seu site.
3. Acessar a aba "Código" e clique em "checkout5-custom.js" no módulo arquivos.
4. Copiar e colar o seguinte código e clique em salvar.

```
var dmlscript = document.createElement("script");
dmlscript.src = "https://http2.mlstatic.com/storage/bmsdk/js/dml-0.0.7.min.js";
dmlscript.onload = () => {
    new DMLSDK({
        publicKey: "APP_USR-aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
        out: "vtex.deviceFingerprint"
    });
}
document.body.appendChild(dmlscript);
```

    ![Setting deviceid in VTEX](/images/vtex/vtex_deviceid_6.gif)


## Configurando o parcelamento em sua conta Mercado Pago.

1. Acesse sua [conta Mercado Pago](https://www.mercadopago.com.br/business/) e clique em "Seu negócio"
2. Clique na opção Configurações, navegue até o campo "Oferecer parcelas sem acréscimo" e clique em “Ativar”.
3. Escolha “Quantas parcelas você quer oferecer?” e clique em “Ativar” para confirmar as alterações.

    ![Setting affiliation in VTEX](/images/vtex/vtex-account-installment-7.gif)

E pronto! Você está oferecendo parcelamento sem acréscimo, assumindo as tarifas de parcelamento que você configurou.

## Credenciais de sua conta Mercado Pago

Você conta com dois pares de chaves para conectar-se com a VTEX, uma para um ambiente de testes e a outra para o ambiente de produção. Estas chaves podem ser encontradas na seção [credenciais da sua conta](https://www.mercadolibre.com/jms/mlb/lgz/login?platform_id=mp&go=https://www.mercadopago.com/mlb/account/credentials).

Modo Sandbox - As chaves "Public key e Access token" do modo sandbox, são utilizadas para o processamento de pagamento de teste.

Modo Produção - As chaves "Public key e Access token" do modo produção, são utilizadas para o processamento de pagamento de reais.

> Antes de iniciar sua operação em produção, assegure se de preencher o formulário ‘Eu quero ir para produção’. Caso já realizou este passo o link não será apresentado.

## Entendendo um pouco sobre os principais logs da VTEX

Os logs permitem revisar a informação que retorna MercadoPago e VTEX expõe para poder ter um maior entendimento de o que ocorreu com uma transação.

Também em caso de modificação ou ativação de novos meios de pagamento, os logs nos dão a possibilidade de poder validar se tudo está funcionando segundo o previsto.

Por último, provém um maior entendimento às equipes comerciais para que possam dar um melhor suporte aos vendedores e converter se em uma primeira instância de suporte.

Para acessar o Log deve acessar a transação da VTEX
Então buscar o LOG que contenha o status response e clicar em _ver mais_.

Os dados mais significativos são os seguintes:

- `"Id":10302316` Número da transação de Mercado Pago.
- `"Payment_method_id":"visa"`: Meio de pagamento.
- `"Payment_type_id":"credit_card"`: Meio de pagamento.
- `"Status":"authorized"`: Estado do pagamento.
- `"Status_detail":"pending_capture"`: Detalhe do estado do pagamento.
- `"External_reference":"503451"`: Identificador da VTEX enviado a Mercado Pago.
- `"First_six_digits":"450995"`: Bin do cartão de crédito.
- `"Processing_mode":"gateway"`: Modo de processamento do pagamento (Agregador / Gateway).
- `"Merchant_account_id"`:"83bb673420b8201f80aff598b3743864": Código de comércio (somente para Gateway).

Quando confrontado com uma rejeição, é muito importante rever o `Status_detail` que especifica o motivo do mesmo.

- `"Status":"rejected"`: Pagamento rejeitado.
- `"Status_detail":"cc_rejected_other_reason"`: Rejeição do cartão de crédito, sem informação do motivo.
- `"Status_detail":"cc_rejected_call_for_authorize"`: Rejeição do cartão de crédito, o cliente deve ligar para autorizar o pagamento.
- `"Status_detail":"cc_rejected_insufficient_amount"`: Rejeição do cartão de crédito, o cliente não tem saldo suficiente disponível.
- `"Status_detail":"cc_rejected_high_risk"`: Rejeição de Mercado Pago, risco de fraude.


> Para mais informação, visite o site [oficial da VTEX](https://help.vtex.com/).
