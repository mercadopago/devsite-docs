# Integração via Intent-Based

> WARNING
>
> Importante
>
> * Esta integração só está disponível para Android versão 2.8.0 ou superior.

Outra forma de integrar-se com a aplicação de Mercado Pago é mediante código nativo de Android, mediante o conceito de _Intent-Based_.

Deve utilizar o método “startActivityForResult” para iniciar diretamente o processo de pagamento. O resultado do pagamento irá retornar como “activityResult”.

É muito importante que o código trate a possibilidade de que o usuário não tenha instalada a aplicação do Mercado Pago em seu dispositivo. Neste caso recomendamos redirecionar o usuário a Play Store para baixar a mesma.

Como referência é possível utilizar o código de exemplo e documentação que tem o formato para poder enviar a informação do pagamento e tratar o objeto de retorno.

No artigo do [GitHub](https://github.com/mercadopago/point-android_integration#intent) é possível obter mais informação e o exemplo correspondente.