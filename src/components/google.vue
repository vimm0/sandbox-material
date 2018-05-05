<template>
  <div class="hello">
    <nav>
      <ul>
        <li>
          <a href="">Gmail</a>
        </li>
        <li>
          <a href="">Images</a>
        </li>
        <li>
          <a href="">;;</a>
        </li>
        <li>
          <a href="">notification</a>
        </li>
        <li>
          <a href="">avatar</a>
        </li>
      </ul>
    </nav>
    <img src="./../assets/google.png">    
    <form>
      <input type="search"/>
      <input type="submit" value="Google Search"/>
      <input type="submit" value="I'm Feeling Lucky"/>
    </form>
    <footer>
      <nav>
        <ul>
          <li><a>Advertising</a></li>
          <li><a>Bussiness</a></li>
          <li><a>About</a></li>
          <li><a>Privacy</a></li>
          <li><a>Terms</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Google",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
