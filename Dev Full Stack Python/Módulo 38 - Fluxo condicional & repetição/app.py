codigo_de_acesso = 110
codigo_de_acesso_cadastrado = 110
senha = 1234
senha_cadastrada = 1234

if (codigo_de_acesso == codigo_de_acesso_cadastrado) & (senha == senha_cadastrada):
    print('Acesso liberado')
elif (codigo_de_acesso != codigo_de_acesso_cadastrado) & (senha == senha_cadastrada):
    print('código de acesso errado!')
elif (codigo_de_acesso == codigo_de_acesso_cadastrado) & (senha != senha_cadastrada):
    print('senha errada !')
else: 
    print('Código e senha erradas !')


#for variavel_temp in range(0, 10):
    #print(variavel_temp)

#for i in range(0, 10*10):
#    print(i)
#    if i == 10:
#        break

numero = 56
if numero % 2 == 0:
    print(f'O numero {numero} é par!')
else: 
    print(f'O numero {numero} é impar !')