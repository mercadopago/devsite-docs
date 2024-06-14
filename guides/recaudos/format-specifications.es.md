# Instrucciones para configuración del archivo

Para crear Deudas en gran cantidad o Links masivos, sube un archivo con datos de los clientes que se van a cobrar, siguiendo las especificaciones de este documento.

> WARNING
>
> Importante
>
> Utiliza una coma (,) para separar la información de tu archivo. <br>
> No ingreses el nombre de las columnas en el archivo.

| Orden en el archivo | Categoría               | Dato                | Descripción                                                                                                                                          | Formato                         | Ejemplo      |
|---------------------|-------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|--------------|
| 1                   | Obligatorio             | Referencia          | Identificador único del cobro que pagará el cliente. Gestionado por la empresa                                                                        | Campo alfanumérico de 1 a 50 caracteres | REF1234      |
| 2                   | **Links de pago**: Opcional <br> **Deudas**: Obligatorio. **Condicional** para empresas en Argentina que identifican sus clientes mediante DNI/CUIL/CULT | DNI/CUIL/CUIT       | DNI, CUIL o CUIT del cliente. | Campo numérico entero de hasta 11 caracteres | 01234567895 |
| 3                   | **Links de pago**: Opcional <br> **Deudas**: Obligatorio. **Condicional** para empresas que identifican sus clientes mediante Código del cliente | Código del cliente  | Identificador utilizado por la empresa para identificar a sus clientes. | Campo alfanumérico de 1 a 20 caracteres | COD1234      |
| 4                   | Obligatorio             | Fecha 1º vencimiento | Fecha del primer vencimiento, en formato AAAAMMDD                                                                                                          | Campo numérico de 8 caracteres | 20242012     |
| 5                   | Obligatorio             | Importe 1º vencimiento | Importe del primer vencimiento. Es un número entero donde los dos últimos dígitos son decimales                                                           | Campo numérico con hasta 2 decimales. Utiliza punto, no coma | 123.50       |
| 6                   | Opcional                | Fecha 2º vencimiento | Fecha del segundo vencimiento, en formato AAAAMMDD                                                                                                        | Campo numérico de 8 caracteres | 20242212     |
| 7                   | Opcional                | Importe 2º vencimiento | Importe del segundo vencimiento. Es un número entero donde los dos últimos dígitos son decimales                                                          | Campo numérico con hasta 2 decimales. Utiliza punto, no coma | 130.00       |
| 8                   | Opcional                | Fecha 3º vencimiento | Fecha del tercer vencimiento, en formato AAAAMMDD                                                                                                        | Campo numérico de 8 caracteres | 20242212     |
| 9                   | Opcional                | Importe 3º vencimiento | Importe del tercer vencimiento. Es un número entero donde los dos últimos dígitos son decimales                                                          | Campo numérico con hasta 2 decimales. Utiliza punto, no coma | 147.50       |
| 10                  | Opcional                | Nombre completo     | Nombre completo del cliente (sin caracteres especiales)                                                                                                    | Campo alfabético de hasta 100 caracteres | Jose Silva   |
| 11                  | Opcional                | Teléfono cliente    | Teléfono del cliente                                                                                                                                  | Campo alfanumérico de hasta 20 caracteres | 4852698653201|
| 12                  | Opcional                | E-mail cliente      | Dirección de e-mail del cliente para recibir notificaciones sobre nuevas deudas                                                                            | Campo alfanumérico de hasta 64 caracteres | nombre@mail.com |
| 13                  | Opcional                | Motivo              | Descripción que aparece para el cliente al pagar en la app Mercado Pago. Recomendado para mejor aprobación.                                                  | Campo alfanumérico de hasta 30 caracteres | Cuota        |
| 14                  | Opcional                | Comentario          | Concepto o comentario. El vendedor decide qué prefiere identificar                                                                                   | Campo alfanumérico                  | Ref 2024     |
| 15                  | Opcional (solo para casos en Colombia) | Tax                  | Impuesto.                                                                                                                                              | Campo numérico entero. Puede ser 0, 5 o 19. Si no se ingresa un valor, se utilizará 19 por defecto | 5            |

> NOTE
>
> Cómo nombrar el archivo antes de subirlo
>
> Tu empresa puede elegir el nombre del archivo, que debe obedecer el formato **.csv**. Los caracteres permitidos son letras, números, guion medio, guion bajo y punto.

## Archivos de ejemplo para Links de pago

### Archivos de carga

A continuación, tienes un ejemplo de archivo cargado con todos los datos ingresados de manera correcta:

```csv
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer, 1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

Este otro archivo, en cambio, es un ejemplo de archivo cargado sólo con datos obligatorios ingresados de manera correcta:

```csv
ext2024030614313,,,,,20250312,549.57,,,,,,,,,,,,,,,,,,,
```

Para identificar los ejemplos de acuerdo con la obligatoriedad y el orden en el archivo, consulta la tabla a continuación:

| Orden en el archivo | Categoría               | Ejemplo               |
|--------|-------------------------|-------------------------|
| 1      | Obligatorio             | ext2024030614313        |
| 2      | Opcional condicional    | 521998672               |
| 3      | Opcional condicional    | 1002                    |
| 4      | Obligatorio             | 20250312                |
| 5      | Obligatorio             | 549.57                  |
| 6      | Opcional                | 20250315                |
| 7      | Opcional                | 778.87                  |
| 8      | Opcional                | 20250318                |
| 9      | Opcional                | 801.87                  |
| 10     | Opcional                | Miss Kristopher Kautzer |
| 11     | Opcional                | 1138225523              |
| 12     | Opcional                | felica.walsh@example.com |
| 13     | Opcional                | Cuota                   |
| 14     | Opcional                | Ref2024                 |
| 15     | Opcional                | 5                       |

### Archivos de resultado

A continuación, tienes un ejemplo de archivo con Links de pago devuelto por Mercado Pago en caso de éxito, siendo 'ext2024030615501' la referencia, y 'https://mpago.la/2WTWRHT', el Link de pago.

```csv
"ext2024030615501", "https://mpago.la/2WTWRHT"
```

A continuación, tienes un ejemplo de archivo con informe de errores devuelto por Mercado Pago en casos de procesamiento fallido o parcial. En este caso, el '4' representa la línea con el error, y 'E008 last date must be after today' la descripción del error encontrado en esa línea.

```csv
4,ext2024030615504,E008:Due last date must be after today
```

## Archivos de ejemplo para Deudas

### Archivos de carga

A continuación, tienes un ejemplo de archivo cargado con todos los datos ingresados de manera correcta:

```csv
ext2024030614313,521998672,1002,20250312,549.57,20250315,778.87,20250318,801.87,Miss Kristopher Kautzer, 1138225523,felica.walsh@example.com,Cuota,Ref2024,5
```

Este otro archivo, en cambio, es un ejemplo de archivo cargado sólo con datos obligatorios ingresados de manera correcta:

```csv
ext2024030614313,521998672,,20250312,549.57,,,,,,,,,,
```

Para identificar los ejemplos de acuerdo con la obligatoriedad y el orden en el archivo, consulta la tabla a continuación:

| Orden en el archivo | Categoría               | Ejemplo               |
|--------|-------------------------|-------------------------|
| 1      | Obligatorio             | ext2024030614313        |
| 2      | Obligatorio condicional    | 521998672               |
| 3      | Obligatorio condicional    | 1002                    |
| 4      | Obligatorio             | 20250312                |
| 5      | Obligatorio             | 549.57                  |
| 6      | Opcional                | 20250315                |
| 7      | Opcional                | 778.87                  |
| 8      | Opcional                | 20250318                |
| 9      | Opcional                | 801.87                  |
| 10     | Opcional                | Miss Kristopher Kautzer |
| 11     | Opcional                | 1138225523              |
| 12     | Opcional                | felica.walsh@example.com |
| 13     | Opcional                | Cuota                   |
| 14     | Opcional                | Ref2024                 |
| 15     | Opcional                | 5                       |

### Archivos de resultado

A continuación, tienes un ejemplo de archivo de Deudas devuelto por Mercado Pago en caso de éxito, donde 'ext2024030615501' representa la referencia, y 'Success' la deuda creada con éxito.

```csv
"ext2024030615501", "Success"
```

A continuación, tienes un ejemplo de archivo con informe de errores devuelto por Mercado Pago en casos de procesamiento fallido o parcial, donde '4' representa la línea con el error, 'ext2024030615501' la referencia y 'E008
last date must be after today' la descripción del error encontrado en la línea.

```csv
4,ext2024030615504,E008:Due last date must be after today
```