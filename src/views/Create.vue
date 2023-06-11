<template>
  <div class="create">
    <div class="title">
      <h1>Добавить запись</h1>
    </div>
    <div class="content">
      <div class="form">
        <form @submit.prevent="handleSubmit" class="form-group">
          <div class="input"><Input id="name" v-model="form.name" /></div>
          <div class="input"><Input id="email" v-model="form.email" /></div>

          <div class="count">
            <label>Символов: {{countMessage}}</label>
          </div>
          <div class="textarea">
            <textarea v-model="form.message"></textarea>
          </div>
          <div class="checkbox">
            <Checkbox  :label="`Согласен на обработку персональных данных`" v-model="form.agree" />
          </div>
          <div class="control">
            <button class="button" type="submit">Отправить</button>
          </div>
        </form>
      </div>
      <div v-if="formDone" class="response">
        <div class="response-block">
          <div class="response-block__label">Name: <span class="response-block__value">{{ submittedForm.name }}</span></div>
          <div class="response-block__label">Email: <span class="response-block__value">{{ submittedForm.email }}</span></div>
          <div class="response-block__label">Message: <span class="response-block__value">{{ submittedForm.message }}</span></div>
          <div class="response-block__label">Agree: <span class="response-block__value">{{submittedForm.agree}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, reactive, ref} from "vue";
import Input from "@/components/Ui/Input.vue";
import Checkbox from "@/components/Ui/Checkbox.vue";

let form = reactive({
  name: '',
  email: '',
  message: '',
  agree: false
})
let submittedForm = reactive({
  name: '',
  email: '',
  message: '',
  agree: false
})
const countMessage = computed(() => {
  return form.message.length
})

const formDone = ref(false)

const handleSubmit = (e) => {
  formDone.value = true
  submittedForm.name = form.name
  submittedForm.email = form.email
  submittedForm.message = form.message
  submittedForm.agree = form.agree
  e.target.reset()
  form = {
    name: '',
    email: '',
    message: '',
    agree: false
  }
}
</script>
<style scoped lang="scss">
.create {
  .title {
    margin-top: 30px;
    margin-left: 20px;
    h1 {
      font-weight: bold;
    }
  }
  .content {
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
    height: 400px;
    .form {
      background: #fff;
      width: 50%;
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .input {
          display: flex;
          align-items: center;
          input {
            width: 100%;
            margin: 20px 20px 0 20px;
            height: 40px;
            font-size: 16px;
            border-radius: 6px;
            box-sizing: border-box;
            border: 1px solid #a6a6a6;
            outline: none;
          }
          input:hover {
            outline: none !important;
            border:1px solid deepskyblue;
          }
        }
        .count {
          display: flex;
          justify-content: flex-end;
          margin-right: 20px;
          color: #a6a6a6;
          font-size: small;
        }
        .textarea {
          display: flex;
          align-items: center;
          textarea {
            width: 100%;
            margin: 0 20px;
            height: 100px;
            font-size: 16px;
            border-radius: 6px;
          }
          textarea:hover {
            outline: none !important;
            border:1px solid deepskyblue;
          }
        }
        .checkbox {
          margin: 0 20px;
        }
        .control {
          display: flex;
          justify-content: flex-end;
          margin-right: 10px;
          .button {
            border: 1px solid deepskyblue;
            background: white;
            margin: 10px;
            height: 40px;
            color: deepskyblue;
            border-radius: 6px;
          }
        }
      }
    }
    .response {
      background: #fff;
      width: 50%;
      &-block {
        margin: 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        &__label {
          font-size: 20px;
          color: #a6a6a6;
        }
        &__value {
          font-size: 20px;
          color: black;
        }
      }
    }
  }
}
</style>