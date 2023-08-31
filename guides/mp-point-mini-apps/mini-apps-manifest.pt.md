# Mini Apps anifesto

Cada mini app deve conter um arquivo de manifesto chamado como `miniapp_manifest.json` no diretório raiz do arquivo **.zip**. O manifesto do mini app é um documento _JSON_ que contém parâmetros essenciais e opcionais utilizados para a configuração da integração com o Mercado Pago Super App.

O manifesto dos MiniApps pode conter os seguintes campos:

| Campo  | Tipo  | Obrigatório | Descrição |
| --- | --- | --- | --- |
| name | string | sim | Caso o Super App precise exibir o nome do mini app, o valor deste campo será utilizado para esse fim. | 
| version | string | sim | O número da versão do mini app formatado como um número dividido por pontos (.). | 
| state_persistence | boolean | sim | Define se o mini app mantém seu estado após ser fechado. <br><br> É "true" por padrão. | 
| show_action_bar | boolean | não | Define se os Mini Apps suportam a barra de ação do Android. <br><br> É "false" por padrão. | 
| use_wide_view_port | boolean | não | Define se os Mini Apps suportam uma porta de visualização ampla. <br><br> É "false" por padrão. | 
| related_hosts | array&lt;string&gt;   | não | Funciona como uma lista de permissões, declarando com quais hosts o mini app pode se comunicar. Se o host não estiver na lista, a comunicação será bloqueada. | 
| client_id | string | sim | Funciona como id pelo mini app ao lançar um fluxo de pagamento para rastreabilidade de pagamentos. | 
| control_back_action | boolean | não | Define se o MiniApp pode lidar com ações de retorno nativas. <br><br> É "false" por padrão. | 

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