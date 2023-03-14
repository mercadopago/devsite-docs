# Ler código QR

Para ler um código QR utilizando a câmera do dispositivo, chame a função `launchScannerCode` como no exemplo abaixo.

```javascript
launchScannerCode((data, error) => {
    if (error != null) {
       // Ocorreu um erro
       return
    }
    // Utilize dados var como resultado da leitura do scanner
})
```

> WARNING
>
> Atenção
>
> Você deve validar os dados antes de utilizá-los porque existem riscos de _XSS_ e _JavaScript Injection Attacks_. Você é responsável por seu aplicativo.