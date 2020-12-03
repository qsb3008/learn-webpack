<template>
  <div class="example">
    {{ msg }}
    <img src="/public/file.png">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>