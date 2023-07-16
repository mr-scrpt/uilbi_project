import { ClassModType } from "./type";

export const classNames = (
  classMain: string,
  classOther: string[]=[],
  classMod: ClassModType = {},
): string => {

  return [
    classMain,
    ...classOther.filter(Boolean),
    ...Object
      .entries(classMod)
      .filter(([_, classValue]) => Boolean(classValue))
      .map(([className]) => className),
  ].join(" ");

}
