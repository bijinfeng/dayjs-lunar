import type { PluginFunc } from 'dayjs'

declare module 'dayjs' {
  interface Dayjs {
    lunar: (template?: string) => string
  }
}

declare const plugin: PluginFunc
export = plugin
