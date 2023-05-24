<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  label: {type: String as PropType<"button" | "link">, required: true} 
})
</script>

<template>
  <button>{{ label }}</button>
</template>
