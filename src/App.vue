<template>
  <div class="page">
    <div class="sidebar">
      <div class="info">
        <div class="info-content">
          <img class="info-content-avatar" src="https://loremflickr.com/200/200" alt="avatar">
          <div class="info-content-block">
            <div class="info-content-block__title">User</div>
            <div class="info-content-block__email">test@eamil.ru</div>
          </div>
        </div>
      </div>
      <div class="nav">
        <div class="nav-item">
          <div class="nav-item__content">
            <router-link to="/"><IconHome class="icon"/>Все новости</router-link>
          </div>
        </div>
        <div class="nav-item">
          <div class="nav-item__content">
            <router-link to="/create"><IconCreate class="icon"/>Добавить запись</router-link></div>
          </div>
      </div>
    </div>
    <div class="views">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import IconHome from "@/components/Icons/IconHome.vue";
import IconCreate from "@/components/Icons/IconCreate.vue";
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
.page {
  box-sizing: border-box;
  display: flex;
  height: 80rem;
  font-family: 'Open Sans', sans-serif;
}
.sidebar {
  position: relative;
  background: #FFF;
  width: 300px;
  height: 100%;
  box-shadow: 5px 0 5px -2px #888;
  .info {
    border-bottom: 1px solid #a6a6a6;
    &-content {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      margin: 10px;
      &-block {
        display: flex;
        flex-direction: column;
        &__title {
          font-size: 16px;
        }
        &__email {
          font-size: 12px;
          color: #a6a6a6;
        }
      }
      &-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &-item {
    &__content {
      margin: 10px;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: black;
        display: flex;

      }
      a:hover {
        color: deepskyblue;
      }

      a:hover > .icon{
        fill: deepskyblue;
      }
    }
    &__content:hover {
      color: aqua;
    }
    .icon {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .nav-item:not(:last-child) {
    border-bottom: 1px solid #a6a6a6;
  }
}
.views {
  background: aliceblue;
  flex: 1 0 auto;
}
</style>