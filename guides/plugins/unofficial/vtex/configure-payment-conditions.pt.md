# Configurar condições de pagamento

**Condições de pagamento** são as formas de pagamento exibidas no site para a finalização de compra. Permitem a configuração de parcelamento, juros, condições especiais etc.

Após ter criado sua afiliação com o **MercadoPagoV2**, você deverá configurar as **condições de pagamento** que serão oferecidas aos compradores.

> WARNING
>
> Importante
>
> Certifique em sua loja de aplicativos da VTEX se o App **Mercado Pago Payment APP** esteja instalado para utilização das condições de pagamento **MercadoPagoPro, MercadoPagoWallet e MercadoPagoOff** ou solicite a instalação pela equipe VTEX através de ticket no [Support VTEX](https://help.vtex.com/es/support).

A configuração das **condições de pagamento** é feita na aba **Condições de pagamento** do menu **Configurações** no módulo de **Pagamentos** no portal do administrador da plataforma VTEX. 

Nessa aba, você deverá clicar no botão  "+" (*Adicionar nova condição de pagamento para...*) e selecionar uma das seguintes condições de pagamento:

* **Cartão de Crédito:** refere-se a transações com cartões de crédito. A configuração das condições de pagamento com cartão de crédito requer que você selecione a bandeira do cartão de crédito que deseja adicionar. [Você pode clicar aqui para descobrir quais bandeiras de cartão de crédito você pode selecionar](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/payment-methods). Além disso, sua configuração pode exigir o preenchimento de campos adicionais aos campos comuns a todos os condições de pagamento. dependendo se você selecionar À vista ou Parcelado. Para mais informações sobre como configurar parcelas na VTEX, clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#parcelado-sem-juros).
* **Cartão de Débito:** refere-se a transações com cartões de Débito.
* **Outro:** pode referir-se a transações com **MercadoPagoOff**, **MercadoPagoWallet**, ou **MercadoPagoPro**.
  * Se você configurar **MercadoPagoPro**, o comprador realizará o pagamento no ambiente do Mercado Pago via formulário web modal diretamente em sua loja e terá acesso a ttodos os meios de pagamentos disponíveis da plataforma.
  * Se você configurar **MercadoPagoWallet**, o comprador finaliza o pagamento com a carteira do Mercado Pago exclusivamente de usuários cadastrados e uma vez concluído o processo, voltará para sua loja.
  * Se você configurar **MercadoPagoOff**, onde poderá contar com Boleto Bancário e Pagamentos com PEC (em lotéricas), utilizando sua afiliação com o MercadoPagoV2.----[mlb]----
* **Boleto Bancário:** refere-se a transações com boleto bancário.
* **Pix:** refere-se a transações com Pix. Para configurar o Pix em sua integração com o Mercado Pago é necessário que sua chave Pix esteja configurada. Para obter mais informações sobre como criar sua chave Pix, clique [aqui](https://www.mercadopago[FAKER][URL][DOMAIN]/stop/pix?url=https%3A%2F%2Fwww.mercadopago.com.br%2Fadmin-pix-keys%2Fmy-keys&authentication_mode=required). Se você já tem sua chave Pix, o processo segue os passos comuns às demais condições de pagamento. ------------

> NOTE
>
> Nota
> 
> Você também pode configurar **condições especiais** de pagamento. Clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456?&utm_source=admin) para obter mais informações.

![Configurar condições de pagamento](/images/vtex/paymentconditions-pt.gif)

Na próxima tela, deve-se:

1. Escrever o **Nome da Regra**.  Você pode escrever qualquer nome para identificá-la facilmente.
2. Selecionar **MercadoPagoV2** na lista oferecida pelo campo `Processar com a afiliação`.
3. Ativar a condição de pagamento no campo `Status`. Ele deve estar ativado para que sua seleção no campo `Processar com a afiliação` funcione.
4. Salvar suas alterações clicando em `Salvar`.

![Configurar condições de pagamento com cartão de crédito](/images/vtex/paymentconditions-cc-pt.gif)

> WARNING
>
> Importante
> 
> As mudanças nas Condições de pagamento podem levar até 10 minutos para serem aplicadas.

Para mais informações sobre como configurar as condições de pagamento na VTEX, clique [aqui](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455).

> NOTE
>
> Nota
> 
> Se você tiver dificuldades durante sua integração, verifique nosso [lista de erros](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/common-errors) e nosso documento sobre [logs do VTEX](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/logs).


> LEFT_BUTTON_REQUIRED_PT
>
> Device Fingerprint
>
> Conheça como configurar o fingerprint.
>
> [Device Fingerprint](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/plugins/unofficial/vtex/device-fingerprint)
