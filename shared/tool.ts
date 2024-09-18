/**
 * 单例模式
 */
export const singleton = <T extends new (...args: any[]) => any>(className: T) => {
  let instance: InstanceType<T>
  const proxy = new Proxy(className, {
    construct(target: T, args: any[]) {
      if (!instance) {
        instance = new className(...args)
      }
      return instance
    }
  })
  ;(className.prototype as any).construct = proxy
  return proxy
}
