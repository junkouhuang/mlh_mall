<template>
  <div>
    <div class="home-footer">
      <div class="home-footer-title">
        <el-row>
          <el-col :span="6"><div><router-link to="/default"><img  src="./Image/bottom_good_icon.png" /><span>正品保障，精致服务</span></router-link></div></el-col>
          <el-col :span="6"><div><router-link to="/default"><img src="./Image/bottom_quick_icon.png"><span>闪电发货，急速配送</span></router-link></div></el-col>
          <el-col :span="6"><div><router-link to="/default"><img src="./Image/bottom_save_icon.png"><span>天天低价，畅选无忧</span></router-link></div></el-col>
          <el-col :span="6"><div><router-link to="/default"><img src="./Image/bottom_much_icon.png"><span>品类齐全，轻松购物</span></router-link></div></el-col>
        </el-row>
      </div>
      <div class="home-footer-item">
        <div class="container">
          <el-row>
            <el-col  :span="19">
              <el-row>
                <el-col :span="5">
                  <span>新手入门</span>
                  <router-link to="/default">
                  <ul class>
                    <li>购物流程</li>
                    <li>常见问题</li>
                    <li>发票说明</li>
                    <li>订单查询</li>
                  </ul>
                  </router-link>
                </el-col>
                <el-col :span="5">
                  <span>配送方式</span>
                  <router-link to="/default">
                  <ul class>
                    <li>配送范围及运费</li>
                    <li>快递信息查询</li>
                    <li>验收政策</li>
                  </ul>
                  </router-link>
                </el-col>
                <el-col :span="5">
                  <span>支付方式</span>
                  <router-link to="/default">
                  <ul class>
                    <li>货到付款</li>
                    <li>在线支付</li>
                  </ul>
                  </router-link>
                </el-col>
                <el-col :span="5">
                  <span>售后服务</span>
                  <router-link to="/default">
                  <ul class>
                    <li>退换货流程</li>
                    <li>退换货政策</li>
                    <li>退货流程</li>
                    <li>退换货运费规则</li>
                  </ul>
                  </router-link>
                </el-col>
                <el-col :span="4">
                  <a>商家支持</a>
                  <router-link to="/default">
                  <ul class>
                    <li>商家入驻</li>
                    <li>商家规则</li>
                    <li>商家常见问题</li>
                  </ul>
                  </router-link>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="5">
              <div class="qrcode">
                <img src="./Image/wecchat subscription.png"/>
                <div class="e">
                  <p>扫一扫，关注公众号</p>
                  <img src="./Image/wecchat.png"/>
                  <img src="./Image/sina.png"/>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="commpany-info">
        <ul>
          <li>友情链接：</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
        </ul>
        <p>版权所有：民乐荟健康产业（深圳）有限公司 粤ICP备18160672号</p>
        <p>Copyright © 2019 minlehui All Rights Reserve</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
      }
    },
    components: {

    }
  }
</script>

<style  lang="less">
  @width:1190px;
  .home-footer {
    width:100%;
    margin: auto;
    .home-footer-title {
      width:@width;
      height: 95px;
      line-height: 95px;
      margin: auto;
      div {
        cursor: pointer;
        img {
          vertical-align:middle;
        }
        span {
          color: #444444;
          margin-left: 11px;
          font-size: 18px;
          font-weight:bold;
        }
      }
    }
    .home-footer-item {
      width: 100%;
      border-top: 1px solid #E3E4E5;
      border-bottom: 1px solid #E3E4E5;
      .container {
        padding: 53px 0;
        text-align: left;
        width:@width;
        margin: auto;
        span {
          font-size: 17px;
          font-weight:400;
        }
        ul {
          li {
            margin-top: 17px;
            font-size: 13px;
            cursor: pointer;
            &:hover {
              color: #3C3C3C;
            }
          }

        }
        .qrcode {
          display: flex;
          align-items: center;
          .e {
            p {
              color: #555555;
              font-size: 13px;
              margin-bottom: 12px;
            }
            img {
              width: 35px;
              margin-left: 7px;
            }
          }
        }
      }
    }
    .commpany-info {
      padding: 27px 0;
      width:@width;
      margin: auto;
      ul {
        line-height: 32px;
        display: flex;
        justify-content: center;
        li{
          color: #444444;
          font-size: 13px;
          margin-left: 10px;
        }
      }
      p {
        line-height: 32px;
        color: #444444;
        font-size: 14px;
        margin-left: 10px;
        text-align: center;
      }
    }
  }
</style>

