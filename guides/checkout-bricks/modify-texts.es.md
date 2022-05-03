## Modificar textos

| Brick  | Card Payment Brick  |
| --- | --- |
| Momento de personalización  | Al renderizar el brick  |
| Propiedad  | 'customization.texts.{cardNumber, cardExpirationDate, cardSecurityCode, cardholderName, cardholderIdentification, cardholderEmail, formTitle, emailSectionTitle, installmentsSectionTitle, selectInstallments, formSubmit}  |
| Atributo  | label, placeholder  |
| Tipo  | String  |
| Observaciones  | Al enviar texto vacío, la pantalla presentará el texto definido por el layout predeterminado. Por otro lado, al enviar un texto personalizado, reemplazará el texto predeterminado. Para comprobar cuáles son los textos por defecto, consulta la sección Layout del brick deseado.  Si los textos personalizados son más grandes que el espacio disponible, el texto mostrado se interrumpirá hasta el tamaño máximo permitido y el excedente será reemplazado por el símbolo "...".  |
