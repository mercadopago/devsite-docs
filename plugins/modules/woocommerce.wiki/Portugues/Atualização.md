Se você já instalou uma versão anterior do WooCommerce MercadoPago, siga as instruções. Da mesma forma como foi a instalação, novamente você tem duas opções: da sua loja do WordPress ou baixando e copiando manualmente o diretório do módulo.

### Upgrade a partir do WordPress
1. Na administração da sua loja, vá para a opção *Plugins* na barra lateral;
2. Clique no botão *atualizar agora* na janela do painel do plugin;
3. Em alguns segundos, deverá ser mostrado a mensagem *Atualizado!*.

### Atualizar com Download Manual
1. Obtenha o código fonte do módulo de um repositório (<a href="https://github.com/mercadopago/cart-woocommerce/archive/master.zip">Github</a> ou <a href="https://br.wordpress.org/plugins/woocommerce-mercadopago/">WordPress Plugin Directory</a>);
2. Descompacte a pasta e renomeie-a para "woocommerce-mercadopago;
3. Vá para o diretório *[WordPressRootDirectory]/wp-content/plugins/* e exclua o diretório existente "woocommerce-mercadopago";
4. Copie o diretório "woocommerce-mercadopago" para *[WordPressRootDirectory]/wp-content/plugins/* directory.

### Atualização de 2.x para 3.x
Antes de atualizar, por favor, considere o seguinte:
* Esta é uma atualização grande (2.x para 3.x) e além disso estamos migrando o slugname do projeto na WordPress Plugin Directory, então criar um backup do seu site e dos seus dados pode ser uma boa ideia;
* No momento, a atualização consiste nos seguintes passos:
   1. Desativar o plugin Woo Mercado Pago Module;
   2. Desinstalar o plugin Woo Mercado Pago Module;
   3. Instalar o plugin WooCommerce MercadoPago;
   4. Ativar o plugin WooCommerce MercadoPago;
   5. Configurar o plugin WooCommerce MercadoPago.
* Você pode obter a versão 3.x no link: https://wordpress.org/plugins/woocommerce-mercadopago/;
* O quanto antes estaremos disponibilizando uma migração nativa como uma funcionalidade para a versão 2.x.

Para confirmar que seu módulo está realmente atualizado, você pode ver no item *Plugins* no menu de administração da loja e verificar a atualização do seu módulo. A versão deve corresponder ao plugin atualizado recentemente.

> DICA: Lembre-se sempre de fazer um backup dos seus dados e de seu sistema antes de fazer qualquer alteração.