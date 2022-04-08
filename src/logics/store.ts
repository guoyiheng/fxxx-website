import websiteArrayJson from './website.json'
import type { WebsiteType } from './types'

export const websiteArray = computed<WebsiteType[]>(() => {
  return websiteArrayJson
})

export const websiteRef = reactive<Record<string, HTMLElement>>({})
export function setWebsiteRef(el: HTMLElement, id: string | number): string {
  if (el)
    websiteRef[id] = el
  return ''
}
