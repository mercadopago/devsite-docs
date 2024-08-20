# Obter lista de parcelas

Para obter a lista de parcelas associadas a um valor específico, utilize a função `getInstallmentsAmount`. Ela está acessível pela instância `PaymentInstallmentTools`, por meio do objeto `MPManager`.

> WARNING
>
> Atenção
>
> Atualmente, essa opção só está disponível para soluções implementadas no Brasil.

Para usar a função, você deve: 

1. Selecionar o método de pagamento **CREDIT-CARD**.
2. Usar um valor maior que R$ 10,00.

Dessa forma:

[[[
```kotlin
MPManager.paymentInstallmentTools.getInstallmentsAmount(
   callback = { mpResponse ->
       mpResponse.doIfSuccess { installments ->
           // Gerencie com sucesso a lista de parcelas
       }.doIfError {
           // Gerencie o erro na solicitação de parcelas 
       }
   },
   amount = "11.0"
)
```
```java
final PaymentInstallmentTools paymentInstallmentTools = MPManager.INSTANCE.getPaymentInstallmentTools();

final Function1<MPResponse<List<InstallmentAmount>>, Unit> callback = (final MPResponse<List<InstallmentAmount>> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerencie com sucesso a lista de parcelas
 } else {
   // Gerencie o erro na solicitação de parcelas 
 }
 return Unit.INSTANCE;
};
final String amount = "11.0";

paymentInstallmentTools.getInstallmentsAmount(callback, amount);
```
]]]

|Campo|Descrição|
|---|---|
|**callback ((MPResponse&lt;List&lt;InstallmentAmount&gt;&gt;) -&gt; Unit)**|Função de resposta com o resultado da solicitação da lista de parcelas.|
|**amount (String)**|Valor com o qual se determina a lista de parcelas.|
|**installment (Int)**|Número de parcelas.|
|**amount (Double)**|Valor de cada parcela.|
|**inancialAmount (Double)**|Porcentagem de acréscimo de cada parcela.| 