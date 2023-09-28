# Imprimir comprovantes

A impressão de comprovantes de pagamento é responsabilidade do operador que utiliza os dispositivos. 

Para poder fazer isso, o integrador precisará adicionar a biblioteca `*.jar` fornecida, que permitirá que o POS seja conectado a elementos periféricos, como uma impressora.

Para integrar a biblioteca `*.jar NeptuneLiteAPI` e habilitar a impressão de comprovantes, siga as etapas abaixo:

1. Abra seu projeto no Android Studio e vá para **File > Project Structure > Dependencies**.

</center>

![imagem mostrando onde encontrar a guia Módulos](/images/Redelcom/importar-librería2.png)

</center>

2. Selecione o botão "+" correspondente à criação de um novo módulo. Uma janela pop-up aparecerá para você selecionar o tipo de módulo, que deve ser "Import .JAR/.AAR Package".

</center>

![imagem mostrando onde encontrar a biblioteca](/images/Redelcom/importar-librería3.png)

</center>

3. Na próxima janela, navegue até o caminho da biblioteca necessária clicando no botão de pesquisa localizado no lado direito do campo "File name".

</center>

![imagem mostrando onde navegar](/images/Redelcom/importar-librería4.png)

</center>

4. Pressione o botão **Finish** e adicione a biblioteca como **Module Dependencies** ao projeto.

</center>

![imagem mostrando onde encontrar as Dependências do Módulo](/images/Redelcom/integrar-librería5.png)

</center>

E pronto! A importação do arquivo `.jar` foi bem-sucedida, e agora você pode usar a biblioteca para imprimir.


## Impressão

Para realizar uma impressão usando o Demo App RDC, você deve instanciar o objeto da seguinte forma:

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


Abaixo, você pode ver os possíveis valores que o campo `printer.getPrinterStatus()` pode retornar, dependendo do estado da impressora que receberá o comando.

| Status | StatusCode2Str(Status) |
|:---:|---|
| 0 | Correto |
| 1 | Impressora ocupada |
| 2 | Sem papel |
| 3 | Erro de formato de dados |
| 4 | Problema com a impressora, verifique o status da impressora |
| 8 | Impressora superaquecida |
| 9 | Tensão baixa na impressora |
| 240 | Impressora ocupada |
| 252 | Nenhuma fonte de texto disponível na impressora |
| 254 | Pacote de dados muito longo |
