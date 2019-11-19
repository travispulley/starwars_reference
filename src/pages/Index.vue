<template>
  <q-page class="flex flex-center">
    <h3>Star Wars Reference</h3>

    <q-list>
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
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
