import { createApp } from 'vue'
import FeatureA from './FeatureA.vue'
import I18n from '~/lib/i18n'

(async function () {
  const app = createApp(FeatureA)
  app.use(await I18n('de_DE'))
  app.mount('#app')
})()
