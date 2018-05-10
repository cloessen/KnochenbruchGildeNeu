<template>
    <div>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                app
                :temporary="true"
                :disable-resize-watcher="true"
        >
            <scrollactive class="my-nav" active-class="btn--active" :duration="600" :offset="64">
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.id">
                        <v-list-tile-action>
                            <v-btn @click="drawer = false" :href="'#'+link.to" class="scrollactive-item ">{{link.caption}}</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </scrollactive>
        </v-navigation-drawer>
        <v-toolbar  fixed app >
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="hidden-md-and-up ml-0">Altenholzer Knochenbruchgilde</v-toolbar-title>
            <v-toolbar-title class="hidden-sm-and-down">Altenholzer Knochenbruchgilde von 1839 e.V.</v-toolbar-title>
            <v-spacer></v-spacer>
            <scrollactive  class="my-nav hidden-sm-and-down" active-class="btn--active" :duration="600" :offset="64">
                <v-btn flat v-for="link in links" :key="link.id" :href="'#'+link.to" class="scrollactive-item ">{{link.caption}}</v-btn>
            </scrollactive>
        </v-toolbar>
    </div>

</template>

<script>
    export default {
      name: 'TheHeader',
      data () {
        return {
          links: [
            {
              id: 1,
              to: 1,
              caption: 'Home'
            },
            {
              id: 2,
              to: 2,
              caption: 'About Us'
            },
            {
              id: 3,
              to: 3,
              caption: 'Portfolio'
            },
            {
              id: 4,
              to: 4,
              caption: 'Impressum'
            }
          ],
          drawer: false
        }
      }
    }
</script>

<style scoped>

</style>