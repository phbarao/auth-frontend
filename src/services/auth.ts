interface Response {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        user: {
          name: 'Teste',
          email: 'teste@teste.com',
        },
        token: 'kfhludhfnchksjdkasjdanjshdaksdhajhd',
      });
    }, 2000);
  });
}
