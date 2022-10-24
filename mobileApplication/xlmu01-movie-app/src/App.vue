<template>
  <header>
    <router-link to="/">
      <h1><span>VUE</span>movie</h1>
    </router-link>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  a{
    text-decoration: none;
  }
}
body{
  background: rgb(249, 239, 222);

}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: rgba(161, 133, 89, 0.93);

  h1{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color: #32475b;
    letter-spacing: -2px;
    span{
      color: #3fb27f;
    }
  }
}

</style>
