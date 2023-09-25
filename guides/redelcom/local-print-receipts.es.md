# Impresión de comprobantes

La impresión de comprobantes de pago es responsabilidad de quien opera con los dispositivos. Para poder realizarla, el integrador deberá sumar la librería `*.jar` que  le es entregada, y que permitirá asociar el POS a elementos periféricos, como una impresora.

Para integrar la librería `*.jar NeptuneLiteAPI` y poder realizar impresión de comprobantes, sigue los pasos a continuación.

1. Abre tu proyecto en Android Studio, y dirígete a **File>Project Structure>Dependencies**.

![image showing where to find the Modules tab](/images/Redelcom/importar-librería2.png)

2. Selecciona el botón +, que se corresponde con la creación de un nuevo módulo. Se abrirá una ventana emergente para que selecciones el tipo de módulo, que deberá ser “Import .JAR/.AAR Package”.

![image showing where to find the library](/images/Redelcom/importar-librería3.png)

3. En la siguiente ventana, busca la ruta de la librería requerida cliqueando en el botón de búsqueda ubicado en el costado derecho del campo “File name”.

![image showing where to browse](/images/Redelcom/importar-librería4.png)

4. Presiona el botón **Finish** y agrega la librería como **Module Dependency** al proyecto.

![image showing where to find the Modules Dependencies](/images/Redelcom/integrar-librería5.png)

¡Y listo! la importación del `.jar` se realizó correctamente y ya es posible utilizar la librería para realizar impresiones.


## Realizar una impresión

Para poder realizar impresiones de comprobantes utilizando Demo App RDC, deberás instanciar el objeto de la siguiente forma: 


```android
Printer printer = Printer.getInstance(); 
printer.init(); 
int status = printer.getPrinterStatus(); 
if (status == 0) { 
printer.printTaggedText(“TEXTO A IMPRIMIR”, "iso-8859-1"); 
} else{ 
Log.e(TAG_IMPRESION, "La impresora presenta el siguiente inconveniente: " +  statusCode2Str(status); 
} 
printer.start(); 
 
```

A continuación, podrás ver los valores posibles que el campo `printer.getPrinterStatus()` puede devolver, dependiendo del estado en el que se encuentre la impresora que recibirá la orden. 

| status  | statusCode2Str(status) |
|:---:|---|
| 0  | Correcto |
| 1  | Impresora ocupada |
| 2  | Impresora sin papel |
| 3  | Error en formato de datos |
| 4  | Impresora con problemas, por favor revisar estado de impresora |
| 8  | Impresora sobrecalentada |
| 9  | Impresora con poco voltaje |
| 240  | Impresora ocupada |
| 252  | Impresora sin fuente de texto disponible |
| 254  | Paquete de datos demasiado largo |
