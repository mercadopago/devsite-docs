# Manifesto de MiniApps 

Cada MiniApp deve conter um arquivo de manifesto chamado como `miniapp_manifest.json` no diretório raiz do arquivo **.zip**. O manifesto do MiniApp é um documento _JSON_ que contém parâmetros essenciais e opcionais utilizados para a configuração da integração do MiniApp com o Mercado Pago Super App.

O manifesto dos MiniApps pode conter os seguintes campos:

| Parâmetro  | Tipo  | Obrigatório | Descrição |
| --- | --- | --- | --- |
| name | string | true | Caso o Super App precise exibir o nome do MiniApp, o valor deste campo será utilizado para esse fim. | 
| version | string | true | O número da versão do MiniApp formatado como um número dividido por pontos.| 
| state_persistence | boolean | true | Define se o MiniApp mantém seu estado após ser fechado. <br><br> Isso é *True* por padrão. | 
| show_action_bar | boolean | false | Define se os MiniApps suportam a barra de ação do Android. <br><br> Isso é *False* por padrão. | 
| use_wide_view_port | boolean | false | Define se os MiniApps suportam uma porta de visualização ampla. <br><br> Isso é *False* por padrão. | 
| related_hosts | array  string  | false | Funciona como uma lista de permissões, declarando com quais hosts o MiniApp pode se comunicar. Se o host não estiver na lista, a comunicação será bloqueada. | 
| client_id | string | true | Funciona como ID do MiniApp ao lançar um fluxo de pagamento para rastreabilidade de pagamentos. | 
| control_back_action | boolean | false | Define se o MiniApp pode lidar com ações de callback nativas. <br><br> Isso é *False* por padrão. | 

Veja abaixo um exemplo de `miniapp_manifest.json`.

```javascript
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