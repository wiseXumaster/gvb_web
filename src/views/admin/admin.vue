<template>
    <div class="gvb_admin">
        <aside>
            <div>

            </div>
        </aside>
        <div class="main">
            <header>
                <div class="left">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item><a href="#">个人中心</a></a-breadcrumb-item>
                        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="right">
                    <div class="icon_actions">
                        <i class="fa fa-home"></i>
                        <i v-if="theme" class="fa fa-sun-o" @click="setTheme"></i>
                        <i v-else class="fa fa-moon-o" @click="setTheme"></i>
                        <i class="fa fa-arrows-alt"></i>
                    </div>
                    <div class="avatar">
                        <img src="http://sly9bn5nh.hn-bkt.clouddn.com/gvb/20241026194124_QQ%E5%9B%BE%E7%89%8720240604160049.jpg"
                             alt="">
                    </div>
                    <div>
                        <a-dropdown>
                            <a class="ant-dropdown-link" @click.prevent>
                                18sui
                                <i class="fa fa-angle-down"></i>
<!--                                <DownOutlined />-->
                            </a>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item>
                                        <a href="javascript:;">1st menu item</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">2nd menu item</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">3rd menu item</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </div>
<!--                    <div class="drop_menu">-->
<!--                        <a-dropdown>-->
<!--                            <a class="ant-dropdown-link" @click.prevent>-->
<!--                                18sui-->
<!--                                <i class="fa fa-angle-down"></i>-->
<!--                            </a>-->
<!--                            <template #overlay>-->
<!--                                <a-menu @click="menuClick">-->
<!--                                    <a-menu-item key="user_center">-->
<!--                                        <a href="javascript:;">个人中心</a>-->
<!--                                    </a-menu-item>-->
<!--                                    <a-menu-item key="my_messages">-->
<!--                                        <a href="javascript:;">我的消息</a>-->
<!--                                    </a-menu-item>-->
<!--                                    <a-menu-item key="article_list">-->
<!--                                        <a href="javascript:;">文章列表</a>-->
<!--                                    </a-menu-item>-->
<!--                                    <a-menu-item key="logout">-->
<!--                                        <a href="javascript:;">注销退出</a>-->
<!--                                    </a-menu-item>-->
<!--                                </a-menu>-->
<!--                            </template>-->
<!--                        </a-dropdown>-->
<!--                    </div>-->
                </div>
            </header>
            <div class="tabs"></div>
            <main></main>
        </div>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"
import {ref} from "vue";

const router = useRouter()

function menuClick({key}) {
    if (key === "logout") {
        console.log("logout")
        return
    }
    router.push({
        name: key
    })
}

const theme = ref(true)// true代表日常模式,false代表夜间模式
function setTheme() {
    // console.log(theme)
    theme.value = !theme.value
    if (theme.value) {
        //日常模式
        document.documentElement.classList.remove("dark")
    } else {
        //夜间模式
        document.documentElement.classList.add("dark")

    }
}
</script>

<style lang="scss">
.gvb_admin {
  width: 100%;
  display: flex;

  aside {
    width: 240px;
    height: 100vh;
    background-color: #2b3539;
  }

  .main {
    width: calc(100% - 240px);

    header {
      height: 60px;
      background-color: white;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        display: flex;
        align-items: center;
      }

      .icon_actions {
        margin-right: 20px;

        i {
          margin-left: 10px;
          cursor: pointer;
          font-size: 16px;
          color: var(--text);
        }

        i:hover {
          color: var(--active);
        }
      }

      .avatar {
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }

      .drop_menu {
        margin-left: 10px;
      }
    }

    .tabs {
      height: 30px;
      border: 1px solid #f0eeee;
    }

    main {
      background-color: var(--bg);
      height: calc(100vh - 90px);
    }
  }
}
</style>
