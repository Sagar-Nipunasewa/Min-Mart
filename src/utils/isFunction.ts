/* eslint-disable @typescript-eslint/ban-types */
export default function isFunction<T>(
  func: T
): func is T extends Function ? T : never {
  return typeof func === "function";
}
