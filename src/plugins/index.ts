/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import firebaseApp from "@/firebase";
import {VueFire} from "vuefire";
// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(VueFire, { firebaseApp })
}
