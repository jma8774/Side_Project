<script setup>
import { ref, onMounted } from 'vue';
import { connect } from '@/core/socket';

onMounted(async () =>{ 
  initialize();
})

const initialize = () => {
  connect();
}

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
