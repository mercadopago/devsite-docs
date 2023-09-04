# Introdução

Os mini apps são uma solução híbrida, baseada em tecnologias web embarcadas em um wrapper nativo, que fornece as capacidades nativas e serviços de pagamento oferecidos pelo Mercado Pago, através da [Point Smart](/developers/pt/docs/mp-point/integration-configuration/integrate-with-pdv/introduction).

## Compatibilidade

Para assegurar que os aplicativos funcionarão da melhor forma, recomendamos o uso das seguintes linguagens de programação:

* **React**.
* **Vanilla JS**.
* **Versões de Angular menores ou iguais à 12**.

> Considere que os navegadores da Point Smart possuem a **versão 52.0.2743.100**, que pode não ser compatível com outras tecnologias.

## Segurança

Todas as URLs devem funcionar em HTTPS.

No caso de que seu mini app seja nativo, para subi-lo ao ecossistema do Mercado Pago e garantir sua segurança e das posteriores atualizações, os integradores devem assiná-lo digitalmente por meio de um certificado.

Este documento deve ser o mesmo tanto para o pacote inicial, como para as novas versões. Consulte como assinar o aplicativo com o certificado gerado pelo desenvolvedor na [documentação oficial de Android](https://developer.android.com/studio/publish/app-signing?hl=pt-br).