# Autorização e redirecionamento
O redirecionamento deve ocorrer para o canal digital seguro da Instituição Financeira detentora da conta, podendo ser:

* App-to-App
  
* App-to-Browser
  
* Browser-to-Browser
  
* Browser-to-App

![Exemplo de tela de redirecionamento](/images/api/open-finance(advanced)/authorization.gif)


É necessário avisar que o redirecionamento faz parte do Open Finance, portanto o cliente está sendo redirecionado, seguramente, da Instituição Iniciadora de Transação de Pagamento - Mercado Pago para a Instituição Detentora de Conta, usando os mesmos elementos gráficos para ambas as instituições.

> WARNING
> 
> Importante
> 
> Lembre-se de que o Banco Central do Brasil obriga que o cliente esteja ciente da Iniciadora de Transação de Pagamentos que está orquestrando a transação, por esse motivo é necessário nesse passo informar que a transação é "realizada através do Mercado Pago".