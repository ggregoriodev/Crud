export const agevalidation = (idade) => {
  const regex = /^[1-9][0-9]*$/;
  return regex.test(idade);
};
