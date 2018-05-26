<template>
  <div id="css">
    <div class="background-attachment-class">

    </div>
    <h1 id="hello-world">Hello, World</h1>
    <p class="roboto">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <a href="http://google.com">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
    <p class="error error-style">This is error in tag.</p>
    <p>
      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </p>
    <p>
      Why do we use it?
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at
      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
      opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
      packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like).
    </p>
  </div>
</template>
<script>
  export default {
    name: 'cssPractice'
  }
</script>
<style>
  .background-attachment-class {
    padding: 30rem 0;
    position: relative;
    background: url('https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg') no-repeat fixed center;
    background-attachment: fixed;
  }

  #hello-world {
    position: absolute;
    top: 50%;
    /*margin:auto;*/
  }

  .roboto {
    position: absolute;
    top: 50%;
    /*margin:auto;*/
  }

  .roboto::before {
    content: attr(class);
    font-weight: bold;
    margin-right: 2rem;
  }

  a::before {
    content: attr(href);
    font-weight: bold;
    margin-right: 4px;
  }

  .error:after {
    content: "Error Message";
  }

  .error:after, .error-style {
    color: red;
  }
</style>
