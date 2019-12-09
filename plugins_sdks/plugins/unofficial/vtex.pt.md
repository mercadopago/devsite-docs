# VTEX

## O que é VTEX?

[VTEX](https://www.vtex.com/pt/) é uma potente plataforma de e-commerce (PCI compliance) baseada no Brasil com operação em toda a América Latina que permite processar pagamentos através do Mercado Pago.
Para obter maiores informações sobre as possibilidades que a VTEX oferece acesse [sua página de ajuda](help.vtex.com/pt).

## Como posso operar com Mercado Pago na VTEX?

VTEX permite processar pagamentos em todos os modos de operação que Mercado Pago oferece.

#### Modo Agregador

Receba pagamentos usando todos os cartões e promoções que o Mercado Pago oferece, além de transferências bancárias e métodos de pagamento off-line.

#### Modo Gateway

Receba pagamentos diretamente nos códigos comerciais do vendedor usando todas as promoções do vendedor.

#### Modo All In

Combine a operação Gateway e Agregador oferecendo ao comprador a melhor opção de pagamento.

### Configurar VTEX para operar em modo Agregador

Os passos para configurar o modo Agregador são:

1. Configurar Afiliação.
1. Configurar Planos Nativos de Pagamento.
1. Configurar Planos de Pagamento Off-Line.
----[mlc]----
1. Configurar plano de pagamento Webpay
------------
1. Configurar Planos de Pagamento Personalizados.
1. Configurar DeviceID.

### Configurar afiliação

Para operar em modo Agregador sé é necessário configurar uma afiliação.

1. Expanda o menu Catalog.
2. Acesse PCI Gateway.

    ![Setting affiliation in VTEX](/images/vtex-afiliation-1.png)

3. Acesse menu lateral: Pagamento.
4. Configurações.

    ![VTEX Configuration Page](/images/vtex-config.png)

5. Acesse menu superior: Afiliações de Gateways.
6. Adicionar Nova Afiliação (Sinal de +).

    ![Affiliation search bar](/images/vtex-afiliation.png)

7. Buscar e selecionar MercadoPagoV1.

    ![Affiliations page in VTEX](/images/vtex-afiliation-3.png)

8. Completar as informações exigidas na afiliação.

    ![Complete affliation information](/images/vtex-afiliation-4.png)

- Nome da afiliação: Nome que identificará a afiliação.
- OAuth login: Não se utiliza.
- PublicKey: PublicKey do Mercado Pago, ver credenciais.
- AccessToken: AccessToken do Mercado Pago, ver credenciais.
- RefreshToken: Não se utiliza – deixar em branco.
- ExpiredTokenIn: Não se utiliza – deixar em branco.
- Merchant Account Id: Não se utiliza – deixar em branco.
- Processing Mode: Selecionar agregador.
- CountryName: Selecionar o país.
- SoftDescriptor: Texto para o resumo da descrição do pagamento no cartão de crédito (somente para o Brasil).
- Description: Descrição da operação (pode ser branco).
- CategoryId: Categoria do produto – Selecionar da lista.
- Financial Institution: Somente para o Chile - enviar 1234.
- Use External Installments: Yes.
- Antifraud: Yes.
- Time Zone: Região que define a hora local.
- orderExpirationHours: Durante quantas horas se consultará o estado do pedido no Mercado Pago.
- maxInstallments: Quantidade máxima de cotas.
- Categoria Principal: Categoria do produto - Selecionar da lista.
- Captura de segurança antecipada: Quantidade de horas para realizar a captura automática (somente para Argentina e Brasil).

### Configurar Condição de pagamento nativo

Planos de pagamentos nativos são os cartões de crédito / débito que a Vtex tem integrados

1. No menu superior.
2. Clicar em condições de pagamento.
3. No lado direito clicar adicionar nova condição.
4. Proximo ao campo de busca.
5. No botão (Sinal de +)

    ![Payment terms bar](/images/vtex-afiliation-2.png)

6. Buscar e selecionar o meio de pagamento que se quer adicionar, para o exemplo vamos usar American Express.

    ![Setting payment method in VTEX](/images/vtex-native-plan-3.png)

7. Colocar uma descrição (pode ser em branco).
8. Selecionar a afiliação.
9. Selecionar cotas automáticas.
10. Colocar Status Ativo para ativar o meio de pagamento no checkout - Pode ser configurado e ativado posteriormente.
11. Salvar a configuração.

    ![VTEX payment method configuration page](/images/vtex-native-plan-4.png)

12. Verificar se o plano nativo foi adicionado.

    ![Payment methods saved in VTEX](/images/vtex-native-plan-5.png)

###  Configurar Planos de Pagamento Offline

Planos de pagamento Off-Line são os meios de pagamento cujos pagamentos se realizam em dois passos:
- Primeiro, um ticket é gerado com instruções de pagamento.
- Em seguida, o pagamento é feito em dinheiro ou através de um caixa eletrônico seguindo as instruções do ticket.

#### Meios Off-Line por país

- Argentina: PagoFacil, Rapipago, RedLink.
- Chile: Servipag.
- Colombia: Efecty, Davivienda.
- México: Banamex, Bancomer, Oxxo.
- Perú: PagoEfectivo.
- Uruguay: Abitab, Redpagos.
- Brasil: Boleto Bancario

1. No menu superior
2. Clicar em condições de pagamento.
3. No lado direito clicar adicionar nova condição.
4. Proximo ao campo de busca.
5. No botão (Sinal de +)

    ![Payment condition bar](/images/vtex-afiliation-2.png)

6. Buscar e selecionar Boleto Bancário – Este plano de pagamento inclui todos os meios Off-Line do país.

    ![Adding ticket as payment method](/images/vtex-offline-plan-3.png)

7. Colocar uma descrição (pode ser em branco).
8. Selecionar a afiliação.
9. Colocar Status Ativo para ativar o meio de pagamento no checkout - Pode ser configurado e ativado posteriormente.
10. Salvar a configuração.


----[mlc]----
### Configurar plano de pagamento Webpay

1. Expanda o menu Catalog.
2. Acessar PCI Gateway.

    ![PCI gateway page](/images/vtex-webpay-1.png)

3. Ajustes.
4. Planos de pagamento.
5. Novo plano de pagamento.

    ![Payment plan bar in VTEX](/images/vtex-webpay-2.png)

6. Buscar e selecionar Webpay.

    ![Webpay page in VTEX](/images/vtex-webpay-3.png)

7. Colocar uma descrição (pode ser em branco).
8. Selecionar a afiliação.
9. Colocar Status Ativo para ativar o meio de pagamento no checkout - Pode ser configurado e ativado posteriormente.
10. Salvar a configuração.

    ![Payment Methods Configuration Page in Vtex](/images/vtex-webpay-4.png)
------------
### Configurar plano de pagamento personalizado

Plano de pagamento personalizado permite adicionar à VTEX cartões de crédito locais que VTEX não integra como um meio de pagamento nativo e podem ser utilizados com Mercado Pago.
Meios de pagamento personalizados por país:
Argentina: Argencard, Cencosud, CMR, Cordial, Cordobesa, Mercado Pago + Banco Patagonia.
Chile: CMR, Magna, Presto.
Colombia: Codensa.
Uruguay: Oca.

1. Expanda o menu Catalog.
2. Acessar PCI Gateway.

    ![PCI gateway page](/images/vtex-custom-1.png)

3. Ajustes.
4. Pagamentos personalizados.
5. Selecionar uma Cobrand para configurar.

    ![Custom payments page in VTEX](/images/vtex-custom-2.png)

6. Completar s campos para configurar o cartão de crédito desejado. As instruções devem ser copiadas e coladas para evitar erros.
7. Salvar a configuração.

    ![Credit Card Data Setup Page](/images/vtex-custom-3.png)

8. Colocar uma descrição (pode ser em branco).
9. Selecionar a afiliação.
10. Colocar Status Ativo para ativar o meio de pagamento no checkout - Pode ser configurado e ativado posteriormente.
11. Selecionar automático.
12. Salvar a configuração.

![Payment Methods Configuration Page](/images/vtex-custom-4.png)

### Configurar Plano de Pagamento Personalizado - Cartões da Argentina

| Name                   | Descrição              | Meio de pagamento |       Bins {min}-{max},{min}-{max},{bin1},{bin2}       | Código de pagamento no adquirente (opcional) |
|----|----|----|:-----:|-----|
| Argencard                | Argencard                | Mastercard    | 501105-501105                                           | argencard                                |
| Cencosud                 | Cencosud                 | Mastercard    | 603493-603493                                           | cencosud                                 |
| CMR                      | CMR                      | Mastercard    | 557039-557039                                           | cmr                                      |
| Cordial                  | Cordial                  | Mastercard    | 522135-522135,522137-522137,527555-527555               | cordial                                  |
| Cordobesa                | Cordobesa                | Mastercard    | 542702-542702,544764-544764,550073-550073,528824-528824 | cordobesa                                |
| Mercado Pago - Patagonia | Mercado Pago - Patagonia | Mastercard    | 515073-515073,515070-515070,532383-532383,532384-532384 | mercadopago_cc                           |

### Configurar Plano de Pagamento Personalizado – Cartões do Chile

| Nome | Descrição | Meio de pagamento |                                   Bins {min}-{max},{min}-{max},{bin1},{bin2}                                   | Código de pagamento no adquiriente (opcional) |
|---|-----|------|:-----:|-----|
| Presto | Presto      | Mastercard    | 920000-920099                                                                                                   | presto                                   |
| Magna  | Magna       | Mastercard    | 568000-568099                                                                                                   | magna                                    |
| CMR    | CMR         | Mastercard    | 499847-499847,460072-460072,445596-445596,465375-465375,548740-548740,548742-548742,533187-533187,558984-558984 | cmr                                      |

### Configurar Plano de Pagamento Personalizado – Cartões da Colombia

| Nome  | Descrição | Meio de pagamento | Bins {min}-{max},{min}-{max},{bin1},{bin2} | Código de pagamento no adquirente (opcional) |
|----|---|----|:----:|------|
| Codensa | Codensa     | Mastercard    | 590712-590712                               | codensa                                  |

### Configurar Plano de Pagamento Personalizado – Cartões do Uruguay

| Nome | Descrição | Meio de pagamento |                     Bins {min}-{max},{min}-{max},{bin1},{bin2}                     | Código de pagamento no adquirente (opcional) |
|----|-----|------|:-----:|------|
| OCA    | OCA         | Mastercard    | 589892-589892,542991-542991,549530-549530,549564-549564,549571-549571,549576-549576 | oca                                      |

## Configurar DeviceID

1. Expanda o menu Catalog.
2. Acessar Portal.

    ![Setting deviceID](/images/vtex-device-settings-1.png)

3. Selecionar o ícone de ajustes.

    ![Adjustment icon](/images/vtex-device-settings-2.png)

4. Acessar código.
5. Selecionar checkout5-custom.js.
6. Copiar e colar o seguinte código, substituindo o campo `publicKey`:

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

![Custom plan](/images/vtex-device-settings-3.png)

## Credenciais

Para obter as credenciais deve seguir os seguintes passos:

1. Faça login na conta do Mercado Pago
2. Acesse [URL]([FAKER][CREDENTIALS][URL]).
3. Selecione a guia checkout personalizado.
4. Copiar e colar a Public key e Access token (Modo Produção para processar pagamentos reais / Modo Sandbox para realizar testes).
5. Antes de passar à Produção assegure se de preencher o formulário ‘Eu quero ir para produção’ (Se já realizou este passo, o link não aparece).


## Interpretar log da VTEX
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
