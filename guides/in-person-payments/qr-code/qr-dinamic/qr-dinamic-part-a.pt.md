---
indexable: false  
---

# Pagamentos QR modelo dinâmico
	
## O que é o QR dinâmico?

O QR dinâmico permite que o valor a ser cobrado já esteja incluído no QR, ou seja, cada QR representa uma ordem/pedido e possui um valor único.

Este modelo possui como principal característica o pagamento único, ou seja, uma vez realizado o **pagamento do pedido o QR não será mais utilizado**.

Recomendado para um **modelo de serviço na mesa**, para pagamentos com valor incluído, entre outros.


## Características do modelo

As principais características são:
- O valor já vem configurado dentro do QR.
- O modelo é baseado no padrão definido por EMVCo.
- Permite a geração de códigos QR dinâmicos via API e de modo offline (processo manual, usando padrão EMVCo ).


## Como funciona?

1. Crie o conteúdo do QR com todas as informações requeridas para fazer uma cobrança. Teremos 2 versões Offline e Online.
2. Após isso, gere um QR com o conteúdo criado previamente.
3. Por último, mostre o QR ao seu cliente, como preferir, para que ele o pague.

## Pré cadastros
Como forma de automatizar o processo de geração da string de dados, temos uma API responsável por esta função, não se esqueça seguintes requisitos:
1. Criar [conta de teste](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/pre-requisites#bookmark_gloss%C3%A1rio) 
2. Coletar [credenciais](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/credentials)

3. Criar [Lojas e Caixas](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/stores-pos)

## Modelos do QR

### Modelo Online

O Modelo Online funcionará através de um API, onde os dados do pedido são enviados à nossa API, e o retorno dessa comunicação será uma string de dados no padrão EMVCo.
Através de um gerador de QR ou automação, o seu ponto de venda deve converter este conteúdo em QR para que o pagamento seja efetuado.

### Modelo Offline

O Modelo Offline permite que você crie sua própria string de dados, que irá conter todas as informações de sua solicitação de pagamento (pedido), o padrão desta string será conforme o padrão EMVCo. 

---
### Próximos passos

> LEFT_BUTTON_REQUIRED_PT
>
> Como integrar o Modelo Online?
>
> Conheça o passo a passo de como integrar o modelo.
>
> [Como integrar QR dinâmico Online](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/qr-dinamic/qr-dinamic-part-c/)

> RIGHT_BUTTON_REQUIRED_PT
>
> Como integrar o Modelo Offline?
>
> Conheça o passo a passo de como integrar o modelo.
>
> [Como integrar QR dinâmico Offline](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/guides/in-person-payments/qr-code/qr-dinamic/qr-dinamic-part-b)
