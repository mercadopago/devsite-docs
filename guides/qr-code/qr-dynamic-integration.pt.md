# Integrar o QR Modelo Dinâmico

Para cobrar através de um QR Modelo Dinâmico, você precisará criar um pedido e, a partir da resposta, criar um código usando um serviço externo.

## Fluxo do modelo

Assim é como o modelo dinâmico funciona:

1. Um pedido com todos os dados de pagamento necessários é criado.
2. A resposta incluirá uma string de dados com o atributo `qr_data'.
3. Um código QR com o atributo recebido é gerado.
4. Finalmente, o código QR é disponibilizado para que o cliente, à sua escolha, efetue o pagamento.
   
Essas etapas podem ser seguidas de duas maneiras: **criar um pedido** e **criar um pedido associado a uma caixa**. Vamos vê-los abaixo.

## Criar um pedido

Antes de mais nada, gere a publicação do pedido. Assim que os dados forem enviados ao Mercado Pago, uma string com o padrão [EMVCo](https://www.emvco.com/emv-technologies/qrcodes) será disponibilizada.

Para gerar um pedido, acesse nossa [Referência de API](/developers/pt/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/post)  e execute a curl encontrada na mesma. Na resposta, você receberá os dados necessários para criar o código QR.

----[mco]----
> Se você tiver que pagar IVA pelos produtos em seu pedido, consulte a [seção Considerações IVA Colômbia](/developers/en/guides/additional-content/localization/iva-colombia).
------------

> NOTE
>
> Nota
>
> O modelo não tem a opção de remover o pedido. Portanto, recomendamos que você defina uma data de expiração com o atributo `expiration_date`.

**Resposta**

Json
{
  "qr_data": "00020101021243650016COM.MERCADOLIBRE02013063638f1192a-5fd1-4180-a180-8bcae3556bc35204000053039865802BR5925IZABEL AAAA DE MELO6007BARUERI62070503***63040B6D"
}
```
A resposta será uma string com o padrão EMVCo. Utilize o `qr_data` para disponibilizar o código QR com um gerador ou através da sua aplicação.

----[mlb]----


Se você tiver uma **chave Pix configurada** na sua conta Mercado Pago, a estrutura da string terá dados referentes a Pix.
Por exemplo:

```json
{
  "qr_data": "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/fdf9ece0-6137-4e1e-a49d-94f55ec9eee25204000053039865802BR5925FELIPE AAAAAA AAAAA 6009SAO PAULO62070503***6304B61D"
}
```

------------

## Criar um pedido associado a uma caixa

Além da geração do código QR, você também tem a opção de criar e atribuir o mesmo pedido ao código QR fixo do caixa.

Execute a chamada à API detalhada [nesta seção da nossa Referência de API](/developers/pt/reference/qr-dynamic/_instore_orders_qr_seller_collectors_user_id_pos_external_pos_id_qrs/put) para gerar o pedido e a atribuição ao caixa. Na resposta, você receberá o dado para criar o código QR e este ficará associado ao QR declarado.

## Receba notificações de pedidos

As notificações IPN (Instant Payment Notification) são a **forma automática de notificar a criação de novos pedidos e as atualizações de status das mesmas**. Por exemplo, se eles foram aprovados, recusados ou se estão pendentes.

Implemente o IPN de `merchant_order` com uma busca do pedido por `external_reference` como um método de contingência.

[Receber notificações IPN](/developers/pt/guides/additional-content/notifications/ipn/introduction)