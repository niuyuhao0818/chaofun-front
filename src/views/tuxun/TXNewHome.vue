<template>
  <div class="container" :style="{'background-image':'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url('+imgOrigin+ this.backgroundImage +')','background-size':'cover','background-position': 'center'}">
    <div class="top">
      <div>
        <img style="margin-top: 25px; margin-left: 25px; width: 5rem; height: 3rem" :src="imgOrigin + 'biz/1658657631523_45db8dd090dc49af99f2a8a4ace01122.svg'"></img>
        <div style="margin-left: 25px; color: white">探索真实世界，收集线索，找出自己的位置</div>
      </div>
      <div class="top-right">
        <el-button type="primary" @click="toUserHome" round>个人首页</el-button>
        <div style="height: 10px">
        </div>
        <el-button type="primary" @click="toRank" round>积分排行</el-button>
      </div>
    </div>

    <div class="game">
      <div class="info" @click="toFirstTournament">炒饭网络迷踪图寻第四届个人赛圆满结束！</div>
      <div v-if="times" class="times">图寻总轮次数：<span style="font-size: 18px">{{times}}</span></div>
      <section class="game_entrance">
        <div class="first_session_head">单人</div>
        <div class="line"></div>
        <div class="grid_main">
          <div class="card" @click="redirectPage( '/tuxun/daily_challenge')">
            <div class="title">
              每日挑战
            </div>
            <div class="describe">
              每天五题，神清气爽
            </div>
            <div class="card-top-right">可移动</div>
          </div>
          <div class="card" @click="redirectPage( '/tuxun/streak')">
            <div class="title">
              连胜挑战
            </div>
            <div class="describe">
              是男人就坚持一百题
            </div>
            <div class="card-top-right">可移动</div>
          </div>
          <div class="card" @click="redirectPage( '/tuxun/maps')">
            <div class="title">
              练习赛
            </div>
            <div class="describe">
              走遍大江南北
            </div>
            <div class="card-top-right">可移动</div>
          </div>
        </div>

        <div class="first_session_head">多人</div>
        <div class="line"></div>
        <div class="grid_main">
        <div class="card" @click="redirectPage( '/tuxun/guoqing')">
            <div class="title">
              淘汰赛
            </div>
            <div class="describe">
              满3人发车
            </div>
          <div class="card-top-right">可移动</div>
        </div>
          <div class="card" @click="redirectPage( '/tuxun/main_game')">
            <div class="title">
              积分赛
            </div>
            <div class="describe">
              对战赢取积分/徽章/奖励
            </div>
          </div>
          <div class="card" @click="soloMatch" >
            <div class="title">
              匹配Solo
            </div>
            <div class="describe">
              缘，妙不可言(积分)
            </div>
          </div>
          <div class="card" @click="createSolo" >
            <div class="title">
              邀请Solo
            </div>
            <div class="describe">
              邀请朋友图寻对决吧！
            </div>
          </div>
          <div class="card" @click="createTeam" >
            <div class="title">
              邀请组队对战
            </div>
            <div class="describe">
              组队对决，群体的力量
            </div>
          </div>
        </div>

        <div class="first_session_head">其他</div>
        <div class="line"></div>
          <div class="grid_main">

          <div class="card" @click="redirectPage( '/tuxun/random')">
            <div class="title">
              随机街景
            </div>
            <div class="describe">
              漫步孤独星球
            </div>
            <div class="card-top-right">可移动</div>
          </div>
          <div class="card" @click="redirectPage( '/tuxun/publicity')">
            <div class="title">
              直播/视频/教程
            </div>
            <div class="describe">
              看看图寻er们都创作了哪些内容吧
            </div>
          </div>
          <div class="card" @click="toForum()">
            <div class="title">
              讨论区
            </div>
            <div class="describe">
              全国最好的网络迷踪社区
            </div>
          </div>
          <div class="card" @click="redirectPage( '/scratch/home')">
            <div class="title">
              炒饭小测验
            </div>
            <div class="describe">
              地理小测验，帮助你玩好图寻
            </div>
          </div>
        </div>
        <div class="thx">
          <p>提示：如倒计时不准/卡死/黑屏，可关闭代理，系统时间对齐互联网时间再试</p>
          <p>快捷键：空格-确定选择, 空格-换一个(随机街景)，WASD-方向&视角移动(随机街景,需先点击街景), 上下左右-方向&视角移动(随机街景,需先点击街景)</p>
          <p>
            积分规则：大原则是按照你和对手在一场比赛中的期望排名来算的，在积分赛中，每局会有额外的2分距离分。如果距离小于1000公里，则加2分，大于则减2分。
          </p>
          <p>
            小建议：尽量使用街景中的信息进行猜测，不借助搜索引擎，才能让你更快成为高手。
          </p>
          <p>
            特别鸣谢：猫，南山大王cf，网络迷踪版主, GeoGuessr，百度街景，Google街景
          </p>
          <p>
            QQ群：943507031
          </p>
          <p>
            微博：@炒饭社区 微信公众号：炒饭社区
          </p>
          <p>
            地图审图号：GS（2022）2885号
          </p>
          <p>
            背景图：巴塞罗那
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import * as api from '../../api/api'

export default {
  name: "TXNewHome",
  data() {
    return {
      times: null,
      backgroundImage: 'biz/1665370526912_495e8dbd52364a83b6f5235ce2ddafa8_0.jpeg?x-oss-process=image/quality,q_80'
    }
  },
  created() {
    // if (!this.canUseWebP()) {
    //   this.backgroundImage = 'biz/1665370526912_495e8dbd52364a83b6f5235ce2ddafa8_0.jpeg';
    // }
  },

  mounted() {
    var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    if (Notification) {
      Notification.requestPermission(function (status) {
      })
    }
    this.getTimesInterval();
  },
  methods:{
    getTimesInterval() {
      this.getTimes()
      setInterval(() => {
        this.getTimes();
      }, 5000)
    },
    getTimes() {
      api.getByPath('/api/v0/tuxun/getTotalGuess').then(res=>{
        this.times = res.data;
      })
    },
    toPage(title, path) {
      try {
        window.flutter_inappwebview.callHandler('toViewPage',{url: location.origin+path,title:title,showHeader: true})
      } catch (e) {
        window.open(location.origin + path);
      }
    },
    toForum(){
      try {
        window.flutter_inappwebview.callHandler('toAppForum',{forumId: 84+''})
      } catch (e) {
        window.open(location.origin + '/f/84',"_blank");
      }
    },

    createSolo() {
      api.getByPath("/api/v0/tuxun/solo/create").then(res => {
        var id = res.data.id;
        // window.open(location.origin + '/tuxun/solo_game?gameId=' + id,"_blank");
        window.location.href = '/tuxun/solo_game?gameId=' + id;
        // this.$router.push({path: '/tuxun/solo_game?gameId=' + id}).catch((e) => {})
      });
    },
    createTeam() {
      api.getByPath("/api/v0/tuxun/team/create").then(res => {
        var id = res.data.id;
        // window.open(location.origin + '/tuxun/solo_game?gameId=' + id,"_blank");
        window.location.href = '/tuxun/team_game?gameId=' + id;
        // this.$router.push({path: '/tuxun/solo_game?gameId=' + id}).catch((e) => {})
      });
    },

    redirectPage(path) {
      window.location.href = path
    },

    soloMatch() {
        window.location.href = '/tuxun/solo_game'
    },
    toRank() {
      window.location.href = location.origin + '/tuxun/rank'
    },
    toUserHome() {
      this.doLoginStatus().then((res) => {
        if (res) {
          window.location.href = location.origin + '/tuxun/user/' + this.$store.state.user.userInfo.userId;
        }
      });
    },
    toFirstTournament() {
      try {
        window.flutter_inappwebview.callHandler('toAppPost', {postId: '1219541'});
      } catch (e) {
        window.open('/p/1219541', "_blank");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #18182A;

  .top {
    display: flex;
    justify-content: space-between;
    .top-right {
      padding-top: 2rem;
      padding-right: 2rem;
    }
  }

  .game {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 80rem;
    .info {
      color: white;
      font-size: medium;
      padding-top: 1rem;
      text-decoration:underline;
    }
    .times {
      color: white;
      padding-top: 5px;
      span: {
        color: green;
      }
    }
    section {
      padding-top: 20px;
      display: block;
    }
    .game_entrance {
      margin-top: 3%;
      .line {
        width: 100%;
        height: 2px;
        background-color: white;
        margin-bottom: 2rem;
        margin-top: 1rem;
      }
      .first_session_head {
        font-size: 24px;
        color: whitesmoke;
        font-weight: bolder;
        text-align: center;
      }
    }
  }
  .thx {
    font-size: 12px;
    color: white;
    padding-top: 40px;
    padding-bottom: 2rem;
  }
  .grid_main {
    padding-bottom: 2rem;
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    .card {
      position: relative;
      border-radius: 1rem;
      background-color: rgb(25,26,46, 0.9);
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      box-sizing: border-box;
      box-radius: 1rem;
      flex-direction: column;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding: 2rem;
      min-height: 110px;
      .title {
        font-size: 1.5rem;
        color: white;
        font-weight: 700;
        padding-bottom: 0.2rem;
      }
      .describe {
        color: yellow;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      .card-top-right {
        position: absolute;
        right: 2px;
        top: 2px;
        color: white;
        font-weight: bold;
        font-size: 16px;
        padding-left: 5px;
        padding-right: 5px;
        background-color: #3590FF;
      }
    }
  }
}

@media only screen and (max-width: 679px) {
  .container {
    .grid_main {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
