<template>
    <div class="control">
        <div class="profile-state">
            <div class="default-avatar"><img src="~assets/images/profile/noLogin.svg"></div>
            <div class="login-state">
                <div>登录 / 注册</div>
                <div><img src="~assets/images/profile/phone.svg">暂未绑定手机号</div>
            </div>
        </div>
        <div class="profile-more"></div>
    </div>
</template>

<script>
    export default {
        name:"ProfileControl"
    }
</script>

<style lang="less" scoped>
    .control {
        width:100vw;
        height:30vw;
        background:#ff7979;
        display:flex;
        justify-content:space-around;
        align-items:center;
        .profile-state {
            width:70%;
            height:inherit;
            display:flex;
            align-items:center;
            color:#fff;
            .default-avatar {
                width:16.667vw;
                height:16.667vw;
                border-radius:50%;
                background:#fff;
                margin-right:.5em;
                display:flex;
                justify-content:space-around;
                align-items:center;
                img {
                    width:90%;
                    height:90%;
                }
            }
            .login-state {
                img {
                    width:5.556vw;
                    height:5.556vw;
                    vertical-align:middle;
                }
                div {
                    text-align:center;
                    font-size:5vw;
                }
            }
        }
        .profile-more {
            flex:.3;
            height:6vw;
            background:url("~assets/images/profile/more.svg") no-repeat;
            background-size:100%;
            background-position:center;
        }
    }
</style>