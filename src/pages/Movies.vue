<template>
  <q-page class="flex flex-center">
    <h3>Movies</h3>
    <q-list v-for="movie in movies" :key="movie.title">
      <q-item>
        <q-item-section>
          <q-item-label>{{ movie.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Movies',
  async created () {
    let baseUrl = 'https://swapi.co/api/'
    // TODO FIXME: catch errors
    const films = await this.$axios.get(baseUrl + 'films')
    this.movies = films.data.results
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>
