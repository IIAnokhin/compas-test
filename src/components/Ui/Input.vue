<template>
  <input
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :id="id"
  />
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
defineProps({
  modelValue: { type: String },
  value: { type: String },
  id: { type: String}
});
defineEmits(["update:modelValue"]);
</script>
