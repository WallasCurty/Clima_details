//Login

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onSignup: () => void;
  onForgotPassword: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onSignup, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para fazer a autenticação do usuário
    onLogin(username, password);
  };

  return (
    <View>
      <TextInput
        placeholder="Usuário ou E-mail"
        value={username}
        onChangeText={setUsername}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={{ color: 'blue', marginBottom: 10 }}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignup}>
        <Text style={{ color: 'green', marginBottom: 10 }}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

import React from 'react';
import { View } from 'react-native';
import Login from './Login';

const App: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Lógica de autenticação aqui
    console.log('Autenticado:', username, password);
  };

  const handleSignup = () => {
    // Navegar para o componente de cadastro
    console.log('Ir para a página de cadastro');
  };

  const handleForgotPassword = () => {
    // Navegar para o componente de recuperação de senha
    console.log('Ir para a página de recuperação de senha');
  };

  return (
    <View>
      <Login
        onLogin={handleLogin}
        onSignup={handleSignup}
        onForgotPassword={handleForgotPassword}
      />
    </View>
  );
};

export default App;
