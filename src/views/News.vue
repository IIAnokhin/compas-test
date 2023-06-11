<template>
  <div class="news">
    <div class="title">
      <h1>Все новости</h1>
    </div>
    <template v-if="!loader">
      <div class="cards" v-for="(item, index) in posts" :key="item.id">
        <div class="card" @click="showCard(index)">
          <div class="card__number">{{item.id}}</div>
          <div class="card-content">
            <div class="card-content__title">{{item.title}}</div>
            <div class="card-content__author">Id автора: {{item.userId}}</div>
            <div v-show="showCollapsed(index)" class="card-content__body">{{item.body}}</div>
          </div>
        </div>
        <div class="button" @click="removePost(item)">Удалить</div>
      </div>
    </template>
    <div v-else>
      <Loader />
    </div>

    <div>
      <Modal v-if="modalIsOpen" @remove="remove" @close="close"/>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import Modal from "@/components/Modal.vue";
import Loader from "@/components/Loader.vue";
const posts = ref([])
const selected = ref(null)
const loader = ref(false)
const modalIsOpen = ref(false)
const showCard = (index) => {
  selected.value === index ? selected.value = null : selected.value = index
}
const showCollapsed = (idx) => {
  return idx ===selected.value || false
}
const removedPost = ref(null)
const load = async () => {
  loader.value = true
  try {
    posts.value = (await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')).data
  } catch (e) {
    console.log(e)
  }
  loader.value = false
}
const removePost = (post) => {
  modalIsOpen.value = true
  removedPost.value = post
}
const close = () => {
  modalIsOpen.value = false
}
const remove = () => {
  axios.delete('https://jsonplaceholder.typicode.com/posts/' + removedPost.value.id)
  posts.value = posts.value.filter((p) => p.id !== removedPost.value.id)
  modalIsOpen.value = false
}
load()
</script>
<style scoped lang="scss">
.news {
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
  h1 {
    font-weight: bold;
  }
  .cards {
    background: #fff;
    display: flex;
    justify-content: space-between;
    .card {
      display: flex;
      flex-direction: row;
      gap: 10px;
      &__number {
        font-size: 28px;
        color: #a6a6a6;
        width: 40px;
        margin: 10px 0 0 10px;
      }
      &-content {
        display: flex;
        flex-direction: column;
        margin: 10px;
        text-align: left;
        max-width: 800px;
        &__author {
          font-size: small;
          color: #a6a6a6;
        }
        &__body {
          margin-top: 20px;
        }
      }
      &-content__title:hover {
        color: deepskyblue;
      }
    }
    .button {
      margin: 10px;
      text-align: right;
      color: #F88379;
      font-size: small;
      cursor: pointer;
    }
  }
  .cards:not(:last-child) {
    border-bottom: 1px solid #a6a6a6;
  }
}
</style>
