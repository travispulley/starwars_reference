<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Star Wars Reference
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!-- <q-item-label header>Essential Links</q-item-label> -->
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/movies" exact>
          <q-item-section avatar>
            <q-icon name="local_movies" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Movies</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/people" exact>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>People</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/planets" exact>
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Planets</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/species" exact>
          <q-item-section avatar>
            <q-icon name="emoji_nature" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Species</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/starships" exact>
          <q-item-section avatar>
            <q-icon name="directions_boat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Starships</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/vehicles" exact>
          <q-item-section avatar>
            <q-icon name="drive_eta" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Vehicles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
