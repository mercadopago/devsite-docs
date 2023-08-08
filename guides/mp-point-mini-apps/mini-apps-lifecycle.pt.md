# Ciclo de vida do Mini App

O ciclo de vida dos Mini Apps é controlado por meio de eventos de callback que podem ser inscritos como qualquer evento personalizado `DOM`. Existem três categorias de eventos de ciclo de vida, veja mais informações abaixo sobre os eventos suportados.

## GlobalState

Esta categoria apresenda o estado do ciclo de vida geral do Mini App, podendo ser:

* `GlobalState.shown`: o Mini App está visível e em primeiro plano.
* `GlobalState.hidden`: o Mini pp não está visível e foi para o primeiro plano.
* `GlobalState.error`: o Mini App fica em um estado inválido.

## PageState

Esta categoria apresenda o estado do ciclo de vida da página do Mini App, podendo ser:

* `PageState.ready`: se o MiniApp estiver pronto para ser usado, mas for para segundo plano antes de estar totalmente carregado, é possível que este evento seja enviado após o estado oculto (`GlobalState.hidden`).
* `PageState.back`: se no manifest `control_back_action` for declarado como 'true' e o usuário pressionar o botão **Voltar** no dispositivo, este evento será enviado ao Mini App.

## PointPayment

Esta categoria apresenta o estado de pagamentos, podendo ser:

* `PointPayment.Success`: um fluxo de tentativa de pagamento foi iniciado, o pagamento foi concluído com sucesso e o Mini App foi totalmente carregado.
* `PointPayment.Error`: um fluxo de tentativa de pagamento foi iniciado, mas o usuário pressionou o botão **Voltar** e pagamento não foi concluído.

<center>

![miniapps-lifecycle](/mini-apps/miniapps-lifecycle-pt.png)

</center>       