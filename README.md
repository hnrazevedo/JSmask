# JSmask
Simple JS library for masks
#### Bibliote simples para mascaras em JS

# Use
Import the Script file into your page
#### Importe o arquivo do Script em sua página
```html
<script src="https://cdn.jsdelivr.net/gh/hnrazevedo/JSmask/JSmask.js" type="text/javascript"></script>
```
To determine which inputs should be masked, just determine the data-mask in it:
#### Para determinar quais inputs devem ter mascara, apenas determine o data-mask no mesmo:
```html
<input type="text" name="birth"" data-mask="##/##/####" >
```
Or to add mask to dynamically inserted input
#### Ou para adicionar mascara em input dinâmicamente inserido
```html
<script>
  var input = document.querySelector(...);
  Mask.add(input);
</script>
```

## Supported masks
```
#: Number,
A: Uppercase character,
a: Lowercase character,
S: Character without uppercase or lowercase test',
X: Untested and numeric character
```

### Examples
```
Date with time           : data-mask="##/##/#### ##:##"
Date                     : data-mask="##/##/####"
Time                     : data-mask="##:##:##"
Time with acronyms       : data-mask="##h##m"
Zip code                 : data-mask="#####-###"
Telephone with area code : data-mask="(##) ####-####"
CPF                      : data-mask="###.###.###-#"
CNPJ                     : data-mask="##.###.###/####-##"
Money                    : data-mask="###.###.###.###.###.###,##"
Mixed                    : data-mask="AAA ###-###"
Car License Plate        : data-mask="AAA ####"
```

### Nota
#### There is no need to instantiate the Mask, just set the dataset mask correctly
Não necessita instânciar o Mask, apenas definir corretamente o dataset mask

### Credits
- [Romulo Brasil](https://github.com/romulobrasil) - Based on your Pure Mask project
