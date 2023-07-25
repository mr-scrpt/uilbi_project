// Не импортировать реакт иначе будет ошибка типов
declare module '*.svg' {
  // eslint-disable-next-line
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.svg?inline' {
  const content: any
  export default content
}
