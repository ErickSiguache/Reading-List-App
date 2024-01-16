import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import type { App } from 'vue'

const listIcons = [faBook]

export function enableUseIcons(app: App<Element>): App<Element> {
  library.add(...listIcons)

  return app.component('font-awesome-icon', FontAwesomeIcon)
}
