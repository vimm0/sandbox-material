<template>
  <div class="hello">
    <div class="nav-menu">
        <a class="nav-item" href="#">Gmail</a>
        <a class="nav-item" href="#">Images</a>
        <a class="nav-item grid-icon" href="#"></a>
        <a class="nav-item rid" href="#"></a>
        <a class="nav-item avatar"></a>
        <!-- <img src="/../avatar.jpg" alt="Avatar" style="border-radius: 50%;"> -->

    </div>
  <div class="container">
    <div class="google-image">
      <h1 id="logo"></h1>
    </div>
    <div class="form">
      <div class="input-container z-depth-2">
        <input type="text" />
        <a class="voice" title="Search by voice"><span class="reco"></span></a>
      </div>
      <input type="submit" value="Google Search"/>
      <input type="submit" value="I'm Feeling Lucky"/>
    </div>
    <p><small id="google-offer">Google offered in: <a href="#">नेपाली</a></small></p>
  </div>
  <div class="footer">
  <div class="footer-location">
    <span class="footer-item-location">Nepal</span>
  </div>
    <span class="footer-item-left">
      <a>Advertising</a>
      <a>Bussiness</a>
      <a>About</a>
       </span>
       <span class="footer-item-right">
      <a>Privacy</a>
      <a>Terms</a>
      <a>Settings</a>
    </span>
    </div>
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
