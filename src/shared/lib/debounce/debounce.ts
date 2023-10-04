// export const debounce = (fn: Function, ms = 300) => {
//   let timeoutId: ReturnType<typeof setTimeout>
//   return function (this: any, ...args: any[]) {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => fn.apply(this, args), ms)
//   }
// }
//
// export const debounce = <F extends (...args: any) => any>(
//   func: F,
//   waitFor: number
// ) => {
//   const timeout: number = 0
//
//   const debounced = (...args: any) => {
//     clearTimeout(timeout)
//     setTimeout(() => func(...args), waitFor)
//   }
//
//   return debounced as (...args: Parameters<F>) => ReturnType<F>
// }
export function debounce(func: (...args: any[]) => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout> | null = null
  console.log('in debounce', timerId)

  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func(...args)
    }, delay)
    console.log('after setTimer', timerId)
  }
}
