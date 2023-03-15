# Leer código QR

Para leer un código QR usando la cámara del dispositivo, llama a la función `launchScannerCode` como en el ejemplo a continuación.

```javascript
launchScannerCode((data, error) => {
    if (error != null) {
       // Ocurrio un error
       return
    }
    // Usar datos var como resultado de la lectura del escáner.
})
```

> WARNING
>
> Atención
>
> Debes validar los datos antes de usarlos porque existen riesgos de _XSS_ y _JavaScript Injection Attacks_. Eres responsable de tu aplicación.