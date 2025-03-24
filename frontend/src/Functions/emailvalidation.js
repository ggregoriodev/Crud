export const emailValidation = (email) => {
  // Regex de validação de e-mail
  const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email); // Retorna true se for válido, false se for inválido
};
