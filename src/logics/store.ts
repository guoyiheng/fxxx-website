import websiteArrayJson from './website.json'
import type { Website, WebsiteType } from './types'

export const websiteArray = computed<WebsiteType[]>(() => {
  return websiteArrayJson
})
