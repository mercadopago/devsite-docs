# Manifesto de Mini Apps 

Cada Mini App deve conter um arquivo de manifesto chamado como `miniapp_manifest.json` no diretório raiz do arquivo **.zip**. O manifesto do Mini App é um documento JSON que contém parâmetros essenciais e opcionais utilizados para a configuração da integração do Mini App com o Mercado Pago Super App.

O manifesto dos Mini Apps pode conter os seguintes campos:

| Campo  | Tipo  | Obrigatório  | Descrição |
| --- | --- | --- | --- |
| name | string | sim | Caso o Super App precise exibir o nome do Mini App, o valor deste campo será utilizado para esse fim. | 
| version | string | sim | O número da versão do Mini App formatado como um número dividido por pontos.| 
| state_persistence | boolean | não | Define se o Mini App mantém seu estado após ser fechado. <br><br> Isso é _True__ por padrão. | 
| show_action_bar | boolean | não | Define se os Mini Apps suportam a barra de ação do Android. <br><br> Isso é _False_ por padrão. | 
| use_wide_view_port | boolean | não | Define se os Mini Apps suportam uma porta de visualização ampla. <br><br> Isso é _False_ por padrão. | 
| related_hosts | array < string > | não | Funciona como uma lista de permissões, declarando com quais hosts o Mini App pode se comunicar. Se o host não estiver na lista, a comunicação será bloqueada. | 
| client_id | string | sim | Funciona como ID do MiniApp ao lançar um fluxo de pagamento para rastreabilidade de pagamentos. | 
| control_back_action | boolean | não | Define se o Mini App pode lidar com ações de retorno nativas. <br><br> Isso é _False_ por padrão. | 

Veja abaixo um exemplo de `miniapp_manifest.json`.

```json
{
   "name": "MercadoPago",
   "version": "1.0.0",
   "related_hosts": [
  	"mercadopago.com",
	"mercadolibre.com"
   ],
   "state_persistence": true,
   "show_action_bar": false,
   "use_wide_view_port": true,
   “client_id”:”123456786543”,
   “control_back_action”: true
}
```