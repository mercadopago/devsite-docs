# Print receipts

The printing of payment receipts is responsibility of the operator using the devices. To be able to do this, the integrator will need to add the `*.jar library` provided, which will allow the POS to be connected to peripheral elements, like a printer.

To integrate the `NeptuneLiteAPI *.jar` library and enable receipt printing, follow the steps below:

1. Open your project in Android Studio and go to **File > Project Structure > Dependencies**.

![image showing where to find the Modules tab](/images/redelcom/importar-librería2.png)

2. Select the "+" button, which corresponds to creating a new module. A popup window will appear for you to select the type of module, which should be "Import .JAR/.AAR Package."

![image showing where to find the library](/images/redelcom/importar-librería3.png)

3. In the next window, browse for the path to the required library by clicking the search button located on the right side of the "File name" field.

![image showing where to browse](/images/redelcom/importar-librería4.png)

4. Press the **Finish** button and add the library as a Module Dependency to the project.

![image showing where to find the Modules Dependencies](/images/redelcom/integrar-librería5.png)

And that's it! The .jar import was successful, and you can now use the library for printing.


## Printing
To perform a print using the Demo App RDC, you should instantiate the object as follows:

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

Below, you can see the possible values that the field `printer.getPrinterStatus()` can return, depending on the state of the printer that will receive the command.

| Status | StatusCode2Str(Status) |
|:---:|---|
| 0 | Correct |
| 1 | Printer busy |
| 2 | Out of paper |
| 3 | Data format error |
| 4 | Printer problem, please check printer status |
| 8 | Printer overheated |
| 9 | Low voltage in printer |
| 240 | Printer busy |
| 252 | No available text font in printer |
| 254 | Data packet too long |

