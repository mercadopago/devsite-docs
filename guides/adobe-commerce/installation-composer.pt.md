# Instalação via Composer

Para instalar o módulo Mercado Pago no Adobe Commerce (Magento) via Composer, siga os passos abaixo.

1. Em seu terminal, execute este comando para baixar o módulo Adobe Commerce (Magento) com o Composer:

```
composer require mercadopago/adb-payment
```

2. Em seguida, execute este comando para instalar o módulo:

```
bin/magento setup:upgrade
```

3. Execute este comando para compilar os arquivos do módulo:

```
bin/magento setup:di:compile
```

4. Agora você deve executar este comando para limpar o cache do Adobe Commerce (Magento):

```
bin/magento cache:clean
```

5. Quando a loja estiver em modo produção, será necessário gerar novamente os arquivos estáticos. Você pode fazer desta maneira:

```
bin/magento setup:static-content:deploy
```

Caso você enfrente problemas de permissão de pasta ao acessar a loja, será necessário renovar as permissões da seguinte forma:

```
chmod 777 -R var/ pub/ generated/
```

Pronto! Você instalou com sucesso o módulo Mercado Pago para Adobe Commerce (Magento).