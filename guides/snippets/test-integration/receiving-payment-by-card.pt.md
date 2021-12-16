----[mlb]----
A integração por Checkout Transparente do Mercado Pago para pagamentos com cartões permite que você possa oferecer uma opção de pagamento totalmente no seu site. Toda a experiência acontece na sua loja para que os clientes não tenham que sair no momento de realizar a compra.
------------
----[mla, mlm, mpe, mco, mlu, mlc]----
A integração por Checkout API do Mercado Pago para pagamentos com cartões permite que você possa oferecer uma opção de pagamento totalmente no seu site. Toda a experiência acontece na sua loja para que os clientes não tenham que sair no momento de realizar a compra.
------------

> WARNING
> 
> Importante
> 
> Sua integração com a API transparente do Mercado Pago pode ser elegível ao [PCI SAQ A](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/security/pci-v2). Essa categoria de PCI exige menos requisitos do vendedor, o que acelera o processo de certificação. Para ser elegível a essa categoria é necessário que sua integração seja feita utilizando campos de cartão em formato Iframe. 

**Fields** utiliza HTML iframe permite que os dados PCI (`cardNumber`, `CVV`, e `expirationDate`) sejam inacessíveis para terceiros e processados pelos servidores do Mercado Pago, aumentando a segurança do comprador, vendedor e da adquirente.

![Fields](/images/api/api-integration-introv2-pt.png)

Atualmente existem duas formas de implementar essa solução. A primeira é através da utilização dos **métodos core**, onde o integrador é responsável por todo o fluxo do pagamento, permitindo maior flexibilidade para experiências totalmente customizadas. A segunda utiliza o **cardForm**, um componente criado por nós que facilita a integração realizando algumas etapas do processo automaticamente.

Use os [exemplos para download](#bookmark_exemplos_para_download) para conhecer a integração completa ou para adaptá-los de acordo com o que precisa.