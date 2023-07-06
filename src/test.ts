export const test = (arg: number): string => {
  console.log(arg);
  document.body.innerHTML = "Hello World";
  return "test";
};
