<template>
  <div class="sass-practice">
    <div class="greeting">
      Hello, world <br>
      <a>click me</a>
    </div>
    <div class="content">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="andro">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="footer">
      footer 2018
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SassPractice'
  }
</script>
<style lang="scss">
  .greeting {
    color:#aaaaaa;
    font-size:2rem;
    & a {
      color:#c73232b5;
      margin: 3rem;
      font-size:3rem;
      &:hover {
        color:#757575;
      }
    }
  }
</style>
