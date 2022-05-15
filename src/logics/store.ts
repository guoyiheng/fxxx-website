import type { Website } from './types'
import favoriteJson from '~/logics/favorite.json'

export const historyVisit = useStorage<Website[]>('history-visit', [])

export const websiteArray = computed(() => {
  return historyVisit.value.length > 0
    ? [{
      name: '历史访问',
      children: historyVisit.value,
    }, ...favoriteJson]
    : [...favoriteJson]
})

export const websiteRef = reactive<Record<string, HTMLElement>>({})
export function setWebsiteRef(el: HTMLElement, name: string | number): string {
  if (el)
    websiteRef[name] = el
  return ''
}

const icon = useFavicon()
const isLeft = usePageLeave()
watchEffect(() => {
  if (isLeft.value)
    icon.value = 'leave.svg'
  else
    icon.value = 'favicon.svg'
})
