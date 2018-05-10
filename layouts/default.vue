<template>
  <v-app app >
    <app-header></app-header>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app >
        <v-spacer></v-spacer>
      <span>Altenholzer Knochenbruchgilde v. 1839 e.V. &copy; {{new Date().getFullYear()}}</span>
        <v-spacer></v-spacer>
    </v-footer>


  </v-app>
</template>

<script>
    import TheHeader from '../components/TheHeader'

    export default {
      data () {
        return {
          clipped: false,
          drawer: true,
          fixed: false,
          items: [
            { icon: 'apps', title: 'Welcome', to: '/' },
            { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
          ],
          miniVariant: false,
          right: true,
          rightDrawer: false,
          title: 'Vuetify.js'
        }
      },
      components: {
        AppHeader: TheHeader
      }
}
</script>

<style scoped>
    .btn-link-active{
        background-color: lightgreen;
    }
</style>
