<template>
	<transition name="fade">
	    <section class="app">
	    	<am-topbar customClass="topbar">
	    		<section class="topbar-container">
		    		<am-topbar-brand>
		    			<router-link :to="'/'">
                            <span class="logo"></span>
                            amaze-vue
                            <small>别让vue禁锢了你的amaze ui</small>
                        </router-link>
		    		</am-topbar-brand>
					<button class="am-btn am-btn-primary am-btn-sm am-topbar-btn am-topbar-toggle am-show-sm-only" @click.stop="navHandle">
						<i class="am-icon-bars"></i>
					</button>
		    		<am-topbar-collapse>
		                <am-nav :pill="true" :topbar="true" customClass="am-topbar-right">
		                    <am-nav-item>
		                    	<a href="https://github.com/smokingRabbit/amaze-vue" target="blank">
                                    <am-icon type="github"></am-icon>
                                </a>
		                   	</am-nav-item>
		                </am-nav>
		            </am-topbar-collapse>
		        </section>
	    	</am-topbar>
            <section class="doc-content">
                <div :class="sideNavClass">
                    <side-nav></side-nav>
                </div>
                <div class="right-side">
                    <transition name="slide-right">
                        <router-view></router-view>
                    </transition>
                </div>
            </section>
            <footer class="footer">
                <h1>
                    <a href="https://github.com/smokingRabbit/amaze-vue">
                        <am-icon type="github"></am-icon> amaze-vue
                    </a>
                </h1>
                <p>copyright&copy;2017</p>
            </footer>
	    </section>
	</transition>
</template>

<script>
	import SideNav from './components/side-nav';

    export default {
    	data() {
    		return {
    			navShow: false
    		};
    	},
    	methods: {
    		navHandle() {
    			this.navShow = !this.navShow;
    		},
            globalClick() {
                this.navShow = false;
            }
    	},
    	watch: {
    		'$route'() {
    			if (window.innerWidth < 736) {
    				this.navShow = false;
    			}
    		},
            navShow(curVal) {
                if (curVal) {
                    document.body.addEventListener('click', this.globalClick, false);
                }
                else {
                    document.body.removeEventListener('click', this.globalClick);
                }
            }
    	},
    	computed: {
    		sideNavClass() {
    			const classes = ['left-side'];
    			if (this.navShow) {
    				classes.push('show');
    			}
    			return classes.join(' ');
    		}
    	},
    	components: {
    		SideNav
    	},
		mounted() {
			setTimeout(() => {
                this.$message({
                    title: 'camelCase vs. kebab-case',
                    type: 'warning',
                    message: (<span>参考文档： <a href="http://suo.im/2xK0JU" target="_blank">http://suo.im/2xK0JU</a></span>),
                    delay: 0,
                    closeable: true,
                    placement: 'right-bottom'
                });
            }, 2000);
		}
    }
</script>


<style lang="less">
	@logo-main-color: #fff;

	.app {
		width: 100%;
		height: 100%;
		background-color: #f5f9fc;
	}

    .topbar {
        background-color: #fff !important;

        .am-topbar-brand {
            a {
                color: #444;

                small {
                    color: #666;
                    font-size: 12px;
                }
            }
        }
    }

    .topbar-container {
        padding: 0px 50px;

        .logo {
            width: 28px;
            height: 28px;
            display: inline-block;
            background-color: #dd514c;
            position: relative;
            vertical-align: middle;
            margin-right: 6px;

            &::after {
                content: '';
                display: block;
                width: 14px;
                height: 9px;
                position: absolute;
                top: 0px;
                right: 0px;
                background-color: #5eb95e;
                border-left: 2px solid @logo-main-color;
                border-bottom: 2px solid @logo-main-color;
            }

            &::before {
                content: '';
                display: block;
                width: 14px;
                height: 19px;
                position: absolute;
                bottom: 0px;
                right: 0px;
                background-color: #3bb4f2;
                border-left: 2px solid @logo-main-color;
            }
        }

        .am-topbar-right {
            i {
                font-size: 26px;
            }
        }
    }

	.doc-content {
		background-color: #fff;
		box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        margin: 0px 50px 20px 50px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        padding: 25px 0px 20px 0px;

        .left-side {
            width: 250px;
            padding-left: 20px;
        }
        .right-side {
            flex: 1;
            padding: 0px 20px;
            overflow: hidden;

            .hljs {
                display: inline;
                padding: 0;
                background-color: transparent;
            }
        }
	}

    .footer {
        text-align: center;
    }

	@media screen and (max-width: 736px) {
        .topbar-container {
            padding: 0px 10px;
        }

        .doc-content {
            margin-left: 0px;
            margin-right: 0px;

            .left-side {
                position: fixed;
                z-index: 99999;
                left: -100%;
                top: 0px;
                bottom: 0px;
                overflow-y: scroll;
                padding-top: 20px;
                padding-bottom: 20px;
                background-color: #fff;
                transition: left 0.3s ease-in;
                box-shadow: 3px 0px 8px rgba(0, 0, 0, .15);

                &.show {
                    left: 0px;
                }
            }
        }
	}
</style>
