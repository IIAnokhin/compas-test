<template>
  <div class="modal">
      <h3>Вы хотите удалит новость</h3>
    <div class="modal-footer">
      <button class="button" @click="$emit('remove', $event)">Да</button>
      <button class="button" @click="$emit('close', $event)">Нет</button>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang="scss">
  .modal {
    position: absolute;
    background-color: #fff;
    color: #000;
    border:1px solid #a6a6a6;
    border-radius: 6px;
    padding: 20px;
    left: 50%;
    top: 50%;
    &-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .button {
      border: 1px solid deepskyblue;
      background: white;
      margin: 10px;
      height: 40px;
      width: 60px;
      color: deepskyblue;
      border-radius: 6px;
    }
  }
</style>