<template>
  <div>
    <div class="back_home" >
      <el-button type="primary" @click="goHome" round>←返回首页</el-button>
      <el-button type="warning" @click="change"  round>换一个</el-button>
      <el-button @click="shareLink" round>分享街景</el-button>
    </div>
    <div v-if="this.location" class="location" >
      {{this.location}}
    </div>
    <div id="map" class="container" style=""></div>
  </div>
</template>

<script>
import { loadScript } from "vue-plugin-load-script";
import * as api from '../../api/api'


export default {
  name: "RandomStreetView",
  data() {
    return {
      panorama: null,
      currentPanoId: null,
      sharePanoId: null,
      location: null,
    }
  },
  mounted() {
    document.title = "随机街景";
    document.head.insertAdjacentHTML("beforeend", `<style>a[href^="http://maps.google.com/maps"]{display:none !important}a[href^="https://maps.google.com/maps"]{display:none !important}.gmnoprint a, .gmnoprint span, .gm-style-cc {display:none;}</style>`)
    this.sharePanoId = this.$route.query.pano;
    loadScript('https://chaofun-test.oss-cn-hangzhou.aliyuncs.com/google/js-1.js').then(() => {
      this.test();
    })

    document.onkeydown=function(event){
      var e = event || window.event || arguments.callee.caller.arguments[0];
      if(e && e.keyCode===32){//空格
        this.change();
      }
    }.bind(this);
  },
  destroyed() {
    document.onkeydown = undefined;
  },

  methods: {
    test() {
      this.panorama = new google.maps.StreetViewPanorama(
          document.getElementById("map"), {
            fullscreenControl:false,
            panControl:true,
            addressControl: false,
            imageDateControl: true,
            motionTrackingControl:false,
            streetViewControl:true
          }
      );

      // // document.getElementsByTagName("a[href^=\"http://maps.google.com/maps\"]").style.display="none";
      // console.log('123')
      // // console.log(document.querySelectorAll('a[href^="https://maps.google.com/maps"]'))
      // console.log( document.getElementsByClassName('gmnoprint'))
      // console.log('234')
      // setTimeout(() => {
      //   document.querySelectorAll('a').forEach(v => {
      //     v.style.display="none";
      //   })
      //   var els = document.getElementsByClassName('gmnoprint');
      //   Array.prototype.forEach.call(els, function(el) {
      //       el.style.display="none";
      //   });
      // }, 3000)


      if (this.sharePanoId) {
        this.setPano(this.sharePanoId)
      } else {
        this.change()
      }
    },
    goHome() {
      window.location.href = '/tuxun';
    },
    setPano(panoId) {
      this.currentPanoId = panoId;
      this.panorama.setPano(panoId);
      // this.panorama.setPov({
      //   // heading: 90,
      //   // pitch: 0,
      // });
      this.panorama.setVisible(true);
      this.getLocation(panoId)
      // 调整视角大小的
      this.panorama.setZoom(0);
    },
    change() {
      this.location = null;
      this.doLoginStatus().then((res) => {
      if (res) {

        if (this.sharePanoId) {
          window.location.href = '/tuxun/random'
          return;
        }
        api.getByPath("/api/v0/tuxun/random", {mapsId: this.mapsId}).then(res => {
          this.setPano(res.data);
        })
      }
      });
    },
    getLocation(panoId) {
      api.getByPath("/api/v0/tuxun/getLocation", {panoId: panoId}).then(res => {
        this.location = res.data;
      })
    },
    shareLink() {
      var input = document.createElement('input');
      input.setAttribute('value', 'https://chao.fan/tuxun/random?pano='+ this.currentPanoId  + '&source=g');
      document.body.appendChild(input);
      input.select();
      var result = document.execCommand('copy');
      document.body.removeChild(input);
      this.$toast("复制街景地址成功");
    },
  }
}
</script>

<style lang="scss" scoped>
.back_home {
  position: absolute;
  padding-top: 1rem;
  padding-left: 1rem;
  z-index: 500;
}
.container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.location {
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  bottom: 1rem;
  padding-left: 1rem;
  z-index: 500;
}
</style>


