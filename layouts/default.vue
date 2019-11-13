<template>
  <v-app light>
    <v-content>
      <v-container class="body-container" color="primary">
        <v-row align-content-md="center" align-content="center">
          <!-- Left Component -->
          <v-col>
            <UserColumn></UserColumn>
          </v-col>
          <!-- Right component -->
          <v-col>
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts" src='./default.ts'>
</script>

<style>
.body-container{
  max-width: 1000px;
}
</style>