// expands object types one level deep
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never
// expands object types recursively
export type ExpandRecursively<T> = T extends object ? (T extends infer O ? { [K in keyof O]: ExpandRecursively<O[K]> } : never) : T

interface WebsiteI {
  title: string
  description: string
  link: string
}
interface WebsiteTypeI {
  id: string
  name: string
  children: Website[]
}

export type Website = Expand<WebsiteI>
export type WebsiteType = Expand<WebsiteTypeI>
