# Distribuição do main app

Para a fase de distribuição da sua solução, siga estas etapas:

1. Compartilhe com o Mercado Pago a lista de dispositivos, pessoas usuárias, caixas e sucursais que o aplicativo utilizará. Assim, a equipe pode fazer a pré-configuração das maquininhas.
2. Se for obter informações da pessoa vendedora ou fazer operações sobre a conta, defina a validação do [fluxo de OAuth](/developers/pt/docs/main-apps/additional-content/security/oauth/introduction) como parte do _onboarding_.
3. Para subir sua solução ao ecossistema do Mercado Pago, garantindo a segurança do aplicativo e de suas posteriores versões, faça a assinatura digital do certificado. Este documento deve ser o mesmo tanto para o pacote inicial, como para cada uma das atualizações. O Android disponibiliza [um passo a passo de como assinar o app digitalmente](https://developer.android.com/studio/publish/app-signing?hl=pt-br#generate-key), com o certificado gerado pela pessoa desenvolvedora.
4. Compartilhe o pacote **.apk** com a equipe de suporte do Mercado Pago. Ela fará uma série de validações e notificará a empresa integradora sobre o resultado.

> **A equipe de suporte do Mercado Pago é responsável por facilitar as seguintes operações:**
> <br><br>
> - Entrega de novas versões. <br>
> - Pré-configuração dos dispositivos. <br>
> - Validações de UX e segurança. <br>
> - Distribuição dos APKs nativos. <br>