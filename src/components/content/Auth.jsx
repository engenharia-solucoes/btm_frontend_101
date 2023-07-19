import { useState } from 'react';

export const authenticate = (email, password) => {

    const [loginSuccess, setLoginSuccess] = useState(false); // Novo estado para indicar login com sucesso

    // Simulação de autenticação
    const authenticatedEmail = 'test@gmail.com';
    const authenticatedPassword = 'senha';
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === authenticatedEmail && password === authenticatedPassword) {
          // Lógica de autenticação bem-sucedida
          setLoginSuccess(true)
          resolve();
        } else {
          // Lógica de autenticação falhou
          reject('Email ou senha inválidos');
        }
      }, 1000); // Simulação de tempo de autenticação
    });
  };  