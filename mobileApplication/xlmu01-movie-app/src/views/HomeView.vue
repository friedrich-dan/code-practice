<template>
  <div class="content">
    <div class="movieCard">
       <router-link to="/movie/qdwqd" >
          <img src="https://s.yimg.com/ny/api/res/1.2/6QpSKEQMmEzmyb74AS4xCA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/zh-Hant-TW/homerun/nownews.com/9469b0ff26fb4665df5f79852ddb14d5" alt="" class="movirImg">
       </router-link>
       <div class="movieHeader">
            <p>大胸执照</p>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
  .content{
    width:100%;
    padding:20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    .movieCard{
      width: 100%;
      height: 200px;
      overflow: hidden;
      border-radius: 20px;
      margin: 10px 0;
      position: relative;
      img{
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
      .movieHeader{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        color: aliceblue;
        background-color: rgba(0,0,0,0.5);
        p{
          font-size: 25px;
          font-weight: lighter;
        }
      }
    }

  }

</style>