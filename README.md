# JSmask
Bibliote simples para mascaras em JS

# Utilização
Importe o arquivo do Script em sua página
```html
<script src="https://cdn.jsdelivr.net/gh/hnrazevedo/JSmask/JSmask.js" type="text/javascript"></script>
```
Para determinar quais inputs devem ter mascara, apenas determine o data-mask no mesmo:
```html
<input type="text" name="birth"" data-mask="##/##/####" >
```
Ou para adicionar mascara em input dinâmicamente inserido
```html
<script>
  var input = document.querySelector(...);
  Mask.add(input);
</script>
```

## Mascaras suportadas
```
#: Numérico,
A: Caractere maiusculo,
a: Caractere minusculo,
S: Caractere sem teste de maiusculo ou minusculo',
X: Caractere sem teste e numérico
```

### Exemplos
```
Data com hora    : data-mask="##/##/#### ##:##"
Data             : data-mask="##/##/####"
Tempo            : data-mask="##:##:##"
Tempo com siglas : data-mask="##h##m"
CEP              : data-mask="#####-###"
Telefone com DDD : data-mask="(##) ####-####"
CPF              : data-mask="###.###.###-#"
CNPJ             : data-mask="##.###.###/####-##"
Dinheiro         : data-mask="###.###.###.###.###.###,##"
Mixed            : data-mask="AAA ###-###"
Placa de Carro   : data-mask="AAA ####"
```

### Nota
#### Não necessita instânciar o Mask, apenas definir corretamente o dataset mask

### Créditos
- [Romulo Brasil](https://github.com/romulobrasil) - Baseado em seu projeto PureMask
