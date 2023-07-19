import { ClassModType } from './type'

export const classNames = (
  classMain: string,
  classOther: string[] = [],
  classMod: ClassModType = {}
): string =>
  [
    classMain,
    ...classOther.filter(Boolean),
    ...Object.entries(classMod)
      .filter(([, classValue]) => Boolean(classValue))
      .map(([className]) => className),
  ].join(' ')
