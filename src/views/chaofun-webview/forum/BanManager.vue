<template>
  <div >
    <div class="bottom">
      <div @click="add" class="btns">封禁用户</div>
      <div v-if="this.displayAdd" class="ycovers ">
        <div class="ycontainer">
          <div style="">
            <div style="margin:10px 0px;display: flex; align-items: center">
              <div style="align-content: center">用户名：</div>
              <el-autocomplete
                  v-model="state"
                  :fetch-suggestions="querySearchAsync"
                  placeholder="搜索用户名"
                  @select="handleSelect"
              ></el-autocomplete>
            </div>
            <div style="margin:20px 0px;display: flex;">
              <el-button @click="toAdd" type="success">确认</el-button>
              <el-button @click="cancelAdd" type="success">取消</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in lists" :key="index" class="item">
      <div>
        <div>用户名：{{item.userAO.userName}}  </div>
        <div>封禁时间 {{ moment(item.time).format('YY/MM/DD HH:mm') }} </div>
      </div>
      <div style="display: flex; justify-content: space-between;width: 20%">
        <div @click="toDelete(item, index)">移除</div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from "moment";

  import * as api from '@/api/api'
  import {banlist, forumAddBan} from "../../../api/api";

  export default {
    name: "mod_manager",
    // components: { adminDashboard, editorDashboard },
    data() {
      return {
        moment: moment,
        displayAdd: false,
        keyword: '',
        restaurants: [],
        state: '',
        params: {},
        forumId: '',
        userIdToBan: null,
        lists:[],
        timeout:  null
      }
    },
    props: {
      forumId0: {
        type: String,
        default() {
          return null;
        }
      }
    },
    created() {
      if (this.forumId0) {
        this.forumId = this.forumId0;
      } else {
        this.forumId = this.$route.query.forumId;
      }
      this.getBanList()
    },

    mounted() {
    },

    methods: {
      add() {
        this.displayAdd = true;
      },
      handleSelect(item) {
        this.userIdToBan= item.userId;
        console.log(item);
      },

      querySearchAsync(queryString, cb) {
        api.getSearchUser({'keyword': queryString, 'pageNum': 1}).then((res) => {
          let result = res.data.data.map(value => {
            value.value = value.userName
            return value;
          });

          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(result);
          }, 3000 * Math.random());
        });
      },

      toAdd() {
        api.forumAddBan({'forumId': this.forumId, 'userId': this.userIdToBan}).then((res) => {
          this.displayAdd = false;
          if (res.success) {
            this.$toast('成功');
            this.getBanList();
          } else {
            this.$toast(res.errorMessage);
          }
        });
      },
      toDelete(item, index) {
        this.$confirm(`是否确定解开用户封禁 【${item.userAO.userName}】？`, "提示", {
          type: "warning",
          // position: center,
        }).then(() => {
          api.forumRemoveBan({forumId: this.forumId, userId: item.userAO.userId}).then((res) => {
            if (res.success) {
              this.$toast('成功');
            } else {
              this.$toast(res.errorMessage);
            }
            this.getBanList();
          })

        })
      },
      cancelAdd() {
        this.displayAdd = false;
      },
      getBanList() {
        api.banlist({ forumId: this.forumId }).then((res) => {
          this.lists = res.data;
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .ycovers {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .ycontainer {
      background: #fff;
      width: 400px;
      max-width: 90%;
      // height: 350px;
      box-sizing: border-box;
      padding: 30px;
      border-radius: 10px;
      position: relative;
      min-height: 200px;
    }
  }
  .item {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #f1f1f1;
    overflow: hidden;
  }
  .bottom{
    left: 0;
    right: 0;
    padding: 4px 10px 10px;
    .btns{
      width: 80%;
      margin: 0 auto;
      line-height: 44px;
      background: #FF9300;
      color: #fff;
      border-radius: 30px;
      text-align: center;
      font-size: 16px;
    }
  }
  input{
    height: 44px;
    outline: none;
    border: 1px solid #ededed;
    background: #f9f9f9;
    font-size: 15px;
    padding-left: 10px;
    border-radius: 8px;
  }
</style>
<style lang="scss">
.el-message-box{
  width: 90vw;
  max-width: 400px;
}
</style>