import type { Viewer } from 'cesium'
import { Helper } from '../../../shared/utils'
import {
  type InjectionKey,
  type ShallowRef,
  onMounted,
  onUnmounted,
  provide,
  ref,
  shallowRef,
  toValue,
  inject
} from 'vue'

const CESIUM_VIEWER: InjectionKey<ShallowRef<Viewer | undefined>> = Symbol('viewer')

export const provideViewer = (fn: () => Viewer | PromiseLike<Viewer>) => {
  const viewer = shallowRef<Viewer>()
  const isMounted = ref(false)

  provide(CESIUM_VIEWER, viewer)

  onMounted(() => {
    const val = fn()

    if (Helper.is.promise(val)) {
      ;(val as Promise<Viewer>).then((v) => {
        isMounted.value = true
        viewer.value = v as Viewer
      })
    } else {
      isMounted.value = true
      viewer.value = val as Viewer
    }
  })

  onUnmounted(() => {
    viewer.value?.destroy()
  })

  return {
    isMounted,
    viewer
  }
}

export const getViewer = () => {
  return toValue(inject(CESIUM_VIEWER, undefined))
}
