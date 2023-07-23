<template>
  


   <!-- <v-col cols="12">


          <VueDatePicker v-model="date" placeholder="Start Typing ..." text-input />
        </v-col> -->
        <div>
          {{ date }}
          <button @click="increase">Add 1</button>
          {{ lbl }}
        </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const lbl: string = 'abc';
const date = ref(123);
const increase = (event: Event) : number => {
  // alert(`Hello ${name.value}!`)
  // // `event` is the native DOM event
  // if (event) {
  //   alert(event.target.tagName)
  // }
  return 3;
}
</script>