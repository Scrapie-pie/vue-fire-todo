<template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="2">
        <v-app-bar-title>VueFire Todo</v-app-bar-title>
      </v-app-bar>

      <v-container class="fill-height">
        <v-responsive class=" text-center fill-height">
          <ToDoList />
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

import ToDoList from "@/components/ToDoList.vue";
</script>
