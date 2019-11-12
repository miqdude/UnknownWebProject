<template>
  <v-app>
    <v-content>
      <v-app-bar dark color="green">
        <v-toolbar-title>Typescript nuxt app</v-toolbar-title>
      </v-app-bar>
      <v-container>
        <v-row>
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
