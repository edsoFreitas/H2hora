// Função que navega para a tela de registro
export function RegisterScreen(navigation) {
  if (navigation) {
    navigation.navigate('Register');
  }
}

// Função que navega para a tela de login
export function LoginScreen(navigation) {
  if (navigation) {
    navigation.navigate('Login');
  }
}

// Função que navega para a tela de escolha
export function ChoseScreen(navigation) {
  if (navigation) {
    navigation.navigate('Chose');
  }
}

// Função que navega para a tela inicial (home)
export function homeScreen(navigation) {
  if (navigation) {
    navigation.navigate('Home');
  }
}
