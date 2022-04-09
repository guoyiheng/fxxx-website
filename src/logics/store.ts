import type { Website } from './types'
import websiteArrayJson from '~/logics/website.json'
import myFavorite from '~/logics/myFavorite.json'

export const historyVisit = useStorage<Website[]>('history-visit', [])

export const websiteArray = computed(() => {
  return [{
    name: '历史访问',
    children: historyVisit.value,
  }, ...myFavorite, ...websiteArrayJson]
})

export const websiteRef = reactive<Record<string, HTMLElement>>({})
export function setWebsiteRef(el: HTMLElement, name: string | number): string {
  if (el)
    websiteRef[name] = el
  return ''
}
