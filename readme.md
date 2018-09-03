# Validador de cartao v.1.0.0

Esta biblioteca  destina-se a validação de números de cartão de crédito para uso em aplicações web.

### Para validação utilizamos o Algoritmo de Lunh que conhecido como " 10"ou" modificação 10 " é um um método para validar números de identificação.

# Método para realização do cálculo:

Dado uma sequência de números inteiros positivos, devemos inverte-los e extrair os indices pares e multiplica-los por 2. Se o resultado desta multiplicação for igual ou maior que 10, devemos subtrair o resultado por 9. Ao final desta operação devemos somar todos os indices e verficar se o resultado desta soma é divisilvel por 10. Se positivo o número do cartão é válido.

A versão atual é recebe uma string númerica e verificará se o número é válido ou não.

# Os métodos utilizados na biblioteca são:
cardValidator(string);
Exemplo de uso:

$node
> let numeroCartao = require("cardvalidator")
> cardValidator('5232840484143290'); //'CARTÃO VÁLIDO!'

# versão 1.0.0
funcionalidades: Pode receber um numro ou  string númerica e realiza  validação;

você deverá ter o node + npm instalados. Para guia de instalação, visite o site oficial.
proceda com a instalação com $npm install chayote-lib
roadmap oficial do projeto

# versão 2.0.0 (previsão outubro/2018)
correção de bugs não aceitar letras e números inferior ao permitido;
README translated to english;
