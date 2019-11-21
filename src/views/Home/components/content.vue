

<template>
  <div class="content">
    <div class="one">
      <ul @click="$router.push('/default')">
        <li>
          <p class="title">健康药品</p>
          <p class="imgs">
            <img src="../image/1.png" alt />
          </p>
          <p class="go">
            <span>GO</span>
          </p>
        </li>
        <li>
          <p class="title">厨具</p>
          <p class="imgs">
            <img src="../image/02.png" alt />
          </p>
          <p class="go">
            <span>GO</span>
          </p>
        </li>
        <li>
          <p class="title">手机</p>
          <p class="imgs">
            <img src="../image/13.png" alt />
          </p>
          <p class="go">
            <span>GO</span>
          </p>
        </li>
        <li>
          <p class="title">服饰</p>
          <p class="imgs">
            <img src="../image/03.png" alt />
          </p>
          <p class="go">
            <span>GO</span>
          </p>
        </li>
        <li>
          <p class="title">配饰</p>
          <p class="imgs">
            <img src="../image/04.png" alt />
          </p>
          <p class="go">
            <span>GO</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="two">
      <div>
        <span class="title MainTitle">热销推荐</span>
        <span class="Subheading">最新款式 任你挑选</span>
      </div>
      <div class="contentTwo clear" @click="$router.push('/default')">
        <div class="oneTwo" style="
    width:261.75px">
          <img src="../image/leftAds.png" alt />
        </div>
        <div class="twoTwo">
          <p class="imgOne" style="
    width: 334.75px">
            <img src="../image/2.png" alt />
          </p>
          <p class="imgtwo" style="margin-top:9px;">
            <img src="../image/3.png" alt />
          </p>
        </div>
        <div class="twoTwo">
          <p class="imgOne" style="
    width: 334.75px">
            <img src="../image/4.png" alt />
          </p>
          <p class="imgtwo" style="margin-top:9px;">
            <img src="../image/5.png" alt />
          </p>
        </div>
        <div class="oneTwo">
          <img src="../image/6.png" alt />
        </div>
      </div>
    </div>
    <div class="three">
      <div>
        <span class="title MainTitle">新品上架</span>
        <span class="Subheading">最新款式 任你挑选</span>
      </div>
      <div class="threeContent clear" @click="$router.push('/default')">
        <div class="threeOne">
          <img src="../image/tc.png" alt />
        </div>
        <div class="threeTwo">
          <!-- 箭头 -->
          <p class="right">
            <img src="../image/7.png" alt />
          </p>
          <p class="left">
            <img src="../image/8.png" alt />
          </p>
          <!-- 列表 -->
          <ul>
            <li
              v-for="(item,index) in arr1"
              :key="index"
              @click="$router.push('/default')"
              @mousemove="moves(index)"
              @mouseleave="leave"
            >
              <p class="icon">
                <img :src="item.url" alt />
              </p>
              <p class="Name animated" :class="move===index?'hovers fadeInDown':'fadeIn'">
                <span>
                {{item.name}}
                  <span class="price">{{item.price}}</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="three">
      <div>
        <span class="title MainTitle">精品推荐</span>
        <span class="Subheading">献给聪明可爱的你</span>
      </div>
      <div class="threeContent clear">
        <div class="threeOne">
          <img src="../image/12.png" alt />
        </div>
        <div class="threeTwo">
          <!-- 箭头 -->
          <p class="right">
            <img src="../image/7.png" alt />
          </p>
          <p class="left">
            <img src="../image/8.png" alt />
          </p>
          <!-- 列表 -->
          <ul>
            <li
              v-for="(item,index) in arr2"
              :key="index"
              @mousemove="move1s(index)"
              @mouseleave="leave1"
              @click="$router.push('/default')"
            >
              <p class="icon">
                <img :src="item.url" alt />
              </p>
              <p class="Name animated" :class="move1===index?'hovers fadeInDown':'fadeIn'">
                <span>
                  {{item.name}}
                  <span class="price">{{item.price}}</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="end">
      <div>
        <span class="title MainTitle">猜你喜欢</span>
        <span class="Subheading">最新款式 任你挑选</span>
      </div>
      <div class="contentEnd">
        <!-- 箭头 -->
        <p class="right">
          <img src="../image/7.png" alt />
        </p>
        <p class="left">
          <img src="../image/8.png" alt />
        </p>
        <div class="shop">
          <ul class="endOne">
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/39217/31/12508/24952/5d39442fE4590e4aa/27e8d86dc4118828.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                 保温杯
                  <span class="price">￥299</span>
                </span>
              </p>
            </li>
            <li class="clear" @click="$router.push('/default')">
              <p class="endtwoleft">
                <img src="../image/15.png" alt />
              </p>
              <p class="endtworight">
                <span class="biaoti">
                  <span>雀氏品牌旗舰店</span>
                  <br />
                  <span style="color:#FC7406">尖货直降，满减折上折</span>
                </span>
                <span class="price">￥199</span>
              </p>
            </li>
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/62588/14/9122/148779/5d6dd690E8df80637/b0260ef848d7ff89.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                    按摩椅
                  <span class="price">￥1299</span>
                </span>
              </p>
            </li>
          </ul>
          <ul class="endOne">
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/46302/37/16216/206860/5dd50ddbE4aafb238/dba43fac56240eeb.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  桶面
                  <span class="price">￥9.9</span>
                </span>
              </p>
            </li>
            <li class="clear" @click="$router.push('/default')">
              <p class="endtwoleft">
                <img src="../image/15.png" alt />
              </p>
              <p class="endtworight">
                <span class="biaoti">
                  <span>雀氏品牌旗舰店</span>
                  <br />
                  <span style="color:#FC7406">尖货直降，满减折上折</span>
                </span>
                <span class="price">￥199</span>
              </p>
            </li>
            <li @click="$router.push('/default')">
              <p class="icon">
                                <img src="https://img14.360buyimg.com/jdcms/s150x150_jfs/t1/872/37/1427/478079/5b935fd5Ea87be364/0f2dd85af9352a36.jpg.webp" alt />

              </p>
              <p class="Name animated">
                <span>
                  时尚卫衣
                  <span class="price">￥299</span>
                </span>
              </p>
            </li>
          </ul>
          <ul class="endTwo">
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img13.360buyimg.com/jdcms/s150x150_jfs/t21328/196/2041019064/384878/80486e1e/5b4567f9Ne10ca8f9.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  保冷杯
                  <span class="price">￥99</span>
                </span>
              </p>
            </li>
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/71445/10/15447/281869/5dcbae51E9ced0b76/ffbe7966ce0bc141.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  老凤祥金项链
                  <span class="price">￥4299</span>
                </span>
              </p>
            </li>
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t11140/17/2025828529/114627/6c075c2c/5a0e5779N721b63f5.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                 放大镜
                  <span class="price">￥9</span>
                </span>
              </p>
            </li>
            <li @click="$router.push('/default')">
              <p class="icon">
                <img src="https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/103832/37/2552/176071/5dd18aa8Edef80dff/cb04e33607d7022d.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                      冬季新款
                  <span class="price">￥499</span>
                </span>
              </p>
            </li>
          </ul>
          <ul class="endTwo" @click="$router.push('/default')">
            <li>
              <p class="icon">
                <img src="../image/14.png" alt />
              </p>
              <p class="Name animated">
                <span>
保湿面膜
                  <span class="price">￥99</span>
                </span>
              </p>
            </li>
            <li>
              <p class="icon">
                <img src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t5896/316/3962082345/279707/6e33eb44/5944a966Nfa97729b.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  旅行箱
                  <span class="price">￥139</span>
                </span>
              </p>
            </li>
            <li>
              <p class="icon">
                <img src="https://img11.360buyimg.com/jdcms/s150x150_jfs/t1/63824/28/15124/810077/5dc98bf7E1896e539/0b32842ee5e2ee14.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  办公室茶具套装
                  <span class="price">￥999</span>
                </span>
              </p>
            </li>
            <li>
              <p class="icon">
                <img src="https://img30.360buyimg.com/jdcms/s150x150_jfs/t1/80283/25/15596/129666/5dd1f958E1267fc20/0366ab96738092db.jpg.webp" alt />
              </p>
              <p class="Name animated">
                <span>
                  iPhone11
                  <span class="price">￥5288</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
      arr1: [
        {
          url: require("../image/10.png"),
          name: "17新品 时尚条纹格子 格列夫 ",
          price: "￥89"
        },
        { url: require("../image/11.png") ,
          name: "不锈钢电热饭盒 ",
          price: "￥89"},
        { url: require("../image/12s.png"),
          name: "电动刮胡刀  ",
          price: "￥188" },
        { url: require("../image/13s.png"),
          name: "德国进口花园小铲子 ",
          price: "￥49 " },
        { url: require("../image/14s.png") ,
          name: "折叠旋转办公桌  ",
          price: "￥820"},
        { url: require("../image/15s.png"),
          name: "全棉加厚柔软吸水浴巾  ",
          price: "￥20.8" }
      ],
      arr2:  [
        {
          url: require("../image/1d.png"),
          name: "小辣椒 红辣椒8X 4GB+64GB  ",
          price: "￥1289"
        },
        { url: require("../image/2d.png") ,
          name: "多功能笔记本电脑包  ",
          price: "￥178"},
        { url: require("../image/3d.png"),
          name: "蒲公英茶   ",
          price: "￥19.9" },
        { url: require("../image/4d.png"),
          name: "德国进口花园小铲子  ",
          price: "￥49 " },
        { url: require("../image/5d.png") ,
          name: "四季舒服纱布裤子   ",
          price: "￥82"},
        { url: require("../image/6d.png"),
          name: "全棉加厚柔软吸善存（Centrum）佳维片   ",
          price: "￥68" }
      ],
      move: "",
      move1: ""
    };
  },
  methods: {
    //移动动画
    moves(index) {
      this.move = index;
    },
    leave() {
      this.move = "";
    },
    move1s(index) {
      this.move1 = index;
    },
    leave1() {
      this.move1 = "";
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  padding-top: 27px;
  padding-bottom: 27px;
  //   height: 1000px;
  background: rgb(245, 245, 245);
  > div {
    width: 1190px;
    margin: 0 auto;
    // padding: 0 360px;
  }
  .one > ul {
    display: flex;
    li:nth-child(1) {
      margin: 0;
    }
    li {
      width: 224px;
      cursor: pointer;
      margin-left: 20px;
      flex: 1;
      height: 261px;
      background: white;
      .title {
        color: #333;
        font-size: 16px;
        text-align: center;
        padding-top: 17px;
      }
      .imgs {
        height: 184px;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 140px;
          transform: translate(-50%, -50%);
        }
        // width: 90%;
      }
      .go {
        text-align: center;
        span {
          display: inline-block;
          line-height: 20px;
          width: 49px;
          height: 20px;
          color: #fc7406;
          border: 1px solid #fc7406;
          border-radius: 5px;
          border-radius: 5px;
        }
      }
    }
  }
  .two {
    margin-top: 30px;
    cursor: pointer;

    .content {
    }
    .title {
      color: #057142;
    }
    .oneTwo {
      //   width: 260px;
      height: 407px;
      img {
        width: 254.25px;
        height: 407px;
        display: block;
      }
    }
    .twoTwo {
      //   width: 335px;
      //   height: 199px;
      .imgOne,
      .imgtwo {
        > img {
          width: 327.25px;
          height: 199px;
        }
      }
    }
  }
  .three {
    margin-top: 40px;
    cursor: pointer;

    .title {
      color: #333;
    }
    .threeContent {
      margin-top: 18px;
      > div {
        float: left;
      }
      .threeOne {
        width: 255px;
        height: 574px;
        img {
          width: 255px;
          height: 574px;
        }
      }
      .threeTwo {
        width: 921px;
        position: relative;
        height: 567px;
        margin-top: 8px;
        background: #fff;
        margin-left: 13px;
        .right {
          position: absolute;

          top: 50%;
          right: 0;
          img {
            width: 31px;
            height: 32px;
          }
        }
        .left {
          position: absolute;
          top: 50%;
          left: 0;
          img {
            width: 31px;
            height: 32px;
          }
        }
        ul {
          display: flex;
          display: -webkit-flex;
          height: 100%;
          width: 100%;
          flex-wrap: wrap;
          li {
            width: 33.1%;
            height: 50%;
            border: 1px solid #e3e4e5;
            .icon {
              text-align: center;

              img {
                height: 202px;
              }
            }
            .hovers {
              background: #056e40;
              color: #fff !important;
            }
            .Name {
              // margin-top: 20px;
              text-align: center;
              font-size: 14px;
              line-height: 79px;
              height: 79px;
              color: #444;
              //   background: #057142;
              .price {
                margin-left: 10px;
                color: #fc7406;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
  .end {
    margin-top: 30px;
    cursor: pointer;
    .contentEnd {
      position: relative;
      height: 1140px;
      background: #fff;
      margin-top: 20px;
      .right {
        position: absolute;

        top: 50%;
        right: 0;
        img {
          width: 31px;
          height: 32px;
        }
      }
      .left {
        position: absolute;
        top: 50%;
        left: 0;
        img {
          width: 31px;
          height: 32px;
        }
      }
      .shop {
        height: 100%;
        .endOne {
          height: 25%;
          display: flex;
          li {
            height: 100%;
            border: 1px solid #e3e4e5;
            // background: red;
            .icon {
              text-align: center;
              margin-top: 40px;
              img {
                height: 202px;
              }
            }
            .Name {
              //   margin-top: 20px;
              text-align: center;
              font-size: 14px;
              line-height: 40px;
              height: 40px;
              color: #444;
              //   background: #057142;
              .price {
                margin-left: 10px;
                color: #fc7406;
                font-size: 13px;
              }
            }
          }
          li:nth-child(1),
          li:nth-child(3) {
            flex: 1;
          }
          li:nth-child(2) {
            flex: 2;
          }
        }
        .endTwo {
          height: 25%;
          display: flex;
          li {
            height: 100%;
            border: 1px solid #e3e4e5;
            // background: red;
            .icon {
              text-align: center;
              margin-top: 40px;
              img {
                height: 202px;
              }
            }
            .Name {
              //   margin-top: 20px;
              text-align: center;
              font-size: 14px;
              line-height: 40px;
              height: 40px;
              color: #444;
              //   background: #057142;
              .price {
                margin-left: 10px;
                color: #fc7406;
                font-size: 13px;
              }
            }
          }
          li {
            flex: 1;
          }
        }
      }
    }
  }
}
.contentTwo > div {
  margin-top: 20px;
  float: left;
}
.endtwoleft {
  float: left;
  width: 390px;
  text-align: center;
  height: 100%;
  // background: #fc7406;
  img {
    width: 370px;
    height: 100%;
  }
}
.endtworight {
  position: relative;
  float: left;
  height: 100%;
  width: 202px;
  .biaoti {
    display: block;
    height: 70px;
    width: 163px;
    background: rgb(250, 250, 248);
    margin: 50% auto;
    line-height: 38px;
    text-align: center;
  }
  .price {
    position: absolute;
    display: block;
    bottom: 65px;
    left: 32%;
    color: #fc7406;
  }
}
</style>
