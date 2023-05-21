//!-Crie um estado para armazenar o valor atual do campo de entrada de usuário e outro estado para armazenar 
//o valor atual do campo de entrada de senha no componente React Native.

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode fazer a validação comparando os valores com os dados do usuário
    if (username === 'username_correto' && password === 'senha_correta') {
      // Lógica de login bem-sucedido
      console.log('Login bem-sucedido!');
    } else {
      // Lógica de login inválido
      console.log('Nome de usuário ou senha incorretos!');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;




/*

2-No exemplo acima, estamos usando o componente TextInput para renderizar os campos de entrada de usuário e senha.
O valor atual de cada campo é controlado por meio dos estados username e password, respectivamente.

3-No método handleLogin, você pode fazer a validação comparando os valores dos campos username e password com os 
dados do usuário que você tem. No exemplo, estamos comparando com valores fixos 'username_correto' 
e 'senha_correta', mas você pode substituí-los pelos seus próprios dados.

4-Dependendo do resultado da validação, você pode executar a lógica adequada para um login bem-sucedido ou 
inválido. No exemplo, estamos apenas imprimindo uma mensagem no console, mas você pode adicionar sua própria 
lógica, como redirecionar para outra tela ou exibir uma mensagem na interface.

Este é apenas um exemplo básico para ilustrar o conceito. Em uma aplicação real, você provavelmente estará usando
algum tipo de gerenciamento de estado, como o Redux ou o Context API, para armazenar os dados do usuário e 
realizar a validação corretamente. Além disso, é importante considerar a segurança do armazenamento de senhas e 
a implementação de medidas adequadas de proteção.

*/





