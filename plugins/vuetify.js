import Vue from 'vue'
// Helpers
import colors from 'vuetify/es5/util/colors'

import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar
  },
  theme: {
    primary: colors.green.darken4,
    secondary: colors.lime.darken3,
    accent: colors.blueGrey.base,
    error: colors.deepOrange.darken1,
    warning: colors.yellow.darken2,
    info: colors.blue.lighten1,
    success: colors.green.base

    // primary: colors.teal.darken3,
    // secondary: colors.amber.darken4,
    // accent: colors.orange.lighten2,
    // error: colors.red.base,
    // info: colors.blue.accent4,
    // success: colors.green.accent4,
    // warning: colors.orange.darken2
  }
})
