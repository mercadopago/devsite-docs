# Ciclo de vida dos Mini Apps

O ciclo de vida do MiniApps é controlado por meio de eventos de callback que podem ser inscritos como qualquer evento personalizado `DOM`. Existem três categorias de eventos de ciclo de vida, veja mais informações abaixo.

## GlobalState

Esta categoria apresenda o estado do ciclo de vida geral do MiniApp, podendo ser:

* `GlobalState.shown`: o MiniApp está visível e em primeiro plano.
* `GlobalState.hidden`: o MiniApp não está visível e foi para o primeiro plano.
* `GlobalState.error`: o MiniApp fica em um estado inválido.

## PageState

Esta categoria apresenda o estado do ciclo de vida da página do MiniApp, podendo ser:

* `PageState.ready`: se o MiniApp estiver pronto para ser usado, mas for para segundo plano antes de estar totalmente carregado, é possível que este evento seja enviado após o `GlobalState.hidden`.
* `PageState.back`: se no [manifesto]() `control_back_action` for declarado como verdadeiro e o usuário pressionar o botão voltar no dispositivo, este evento será enviado ao MiniApp.

## PointPayment

Esta categoria apresenta o estado dos pagamentos, podendo ser:

* `PointPayment.Success`: um fluxo de tentativa de pagamento foi iniciado, o pagamento foi concluído com sucesso e o Mini App foi totalmente carregado.
* `PointPayment.Error`: um fluxo de tentativa de pagamento foi iniciado, mas o usuário pressionou o botão **Voltar** e pagamento não foi concluído.

[IMAGEM]        