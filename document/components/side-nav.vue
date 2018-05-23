<template>
	<section class="am-side-nav">
		<am-nav>
			<am-nav-item :header="true">开始</am-nav-item>
			<am-nav-item :active="$route.path === '/'">
				<router-link to="/">快速上手<span class="am-nav-en">Start</span></router-link>
			</am-nav-item>

			<!-- 基础 -->
			<am-nav-item :header="true">基础类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/utility'">
				<router-link to="/utility">工具样式<span class="am-nav-en">utility class</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/container'">
				<router-link to="/container">布局容器<span class="am-nav-en">am-container</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/grid'">
				<router-link to="/grid">栅格<span class="am-nav-en">am-row & am-col</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/color'">
				<router-link to="/color">颜色<span class="am-nav-en">color</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/icon'">
				<router-link to="/icon">图标<span class="am-nav-en">am-icon</span></router-link>
			</am-nav-item>

			<!-- 通用 -->
			<am-nav-item :header="true">通用类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/button'">
				<router-link to="/button">按钮<span class="am-nav-en">am-button</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/close'">
				<router-link to="/close">关闭按钮<span class="am-nav-en">am-close</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/badge'">
				<router-link to="/badge">徽章<span class="am-nav-en">am-badge</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/image'">
				<router-link to="/image">图片<span class="am-nav-en">am-image</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/panel'">
				<router-link to="/panel">面板<span class="am-nav-en">am-panel</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/article'">
				<router-link to="/article">文章页<span class="am-nav-en">am-article</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/comment'">
				<router-link to="/comment">评论列表<span class="am-nav-en">am-comment</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/code'">
				<router-link to="/code">代码<span class="am-nav-en">am-code</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/slider'">
				<router-link to="/slider">幻灯片<span class="am-nav-en">am-slider</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/scrollbar'">
				<router-link to="/scrollbar">滚动栏<span class="am-nav-en">am-scrollbar</span></router-link>
			</am-nav-item>

			<!-- 动画 -->
			<am-nav-item :header="true">动画类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/animation'">
				<router-link to="/animation">动画<span class="am-nav-en">am-animation</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/transition'">
				<router-link to="/transition">Transtion<span class="am-nav-en">transition</span></router-link>
			</am-nav-item>


			<!-- 表单 -->
			<am-nav-item :header="true">表单类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/input'">
				<router-link to="/input">输入框<span class="am-nav-en">am-input</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/radio'">
				<router-link to="/radio">单选<span class="am-nav-en">am-radio</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/checkbox'">
				<router-link to="/checkbox">多选<span class="am-nav-en">am-checkbox</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/switch'">
				<router-link to="/switch">开关<span class="am-nav-en">am-switch</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/datepicker'">
				<router-link to="/datepicker">日历<span class="am-nav-en">am-datepicker</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/timepicker'">
				<router-link to="/timepicker">时间<span class="am-nav-en">am-timepicker</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/select'">
				<router-link to="/select">选择列表<span class="am-nav-en">am-select</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/dropdown'">
				<router-link to="/dropdown">下拉菜单<span class="am-nav-en">am-dropdown</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/form'">
				<router-link to="/form">表单<span class="am-nav-en">am-form</span></router-link>
			</am-nav-item>


			<!-- 数据组件 -->
			<am-nav-item :header="true">数据类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/tag'">
				<router-link to="/tag">标签<span class="am-nav-en">am-tag</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/table'">
				<router-link to="/table">表格<span class="am-nav-en">am-table</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/list'">
				<router-link to="/list">列表<span class="am-nav-en">am-list</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/pagination'">
				<router-link to="/pagination">分页<span class="am-nav-en">am-pagination</span></router-link>
			</am-nav-item>

			<!-- 导航组件 -->
			<am-nav-item :header="true">导航类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/breadcrumb'">
				<router-link to="/breadcrumb">面包屑<span class="am-nav-en">am-breadcrumb</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/nav'">
				<router-link to="/nav">导航<span class="am-nav-en">am-nav</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/topbar'">
				<router-link to="/topbar">置顶导航<span class="am-nav-en">am-topbar</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/tabs'">
				<router-link to="/tabs">选项卡<span class="am-nav-en">am-tabs</span></router-link>
			</am-nav-item>


			<!-- 进度组件 -->
			<am-nav-item :header="true">进度类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/progress'">
				<router-link to="/progress">进度条<span class="am-nav-en">am-progress</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/nprogress'">
				<router-link to="/nprogress">加载进度条<span class="am-nav-en">am-nprogress</span></router-link>
			</am-nav-item>

			<!-- 提醒组件 -->
			<am-nav-item :header="true">通知类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/warning'">
				<router-link to="/warning">提醒面板<span class="am-nav-en">am-warning</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/notify'">
				<router-link to="/notify">通知<span class="am-nav-en">am-notify</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/message'">
				<router-link to="/message">消息<span class="am-nav-en">am-message</span></router-link>
			</am-nav-item>

			<!-- 弹层组件 -->
			<am-nav-item :header="true">弹层类组件</am-nav-item>
			<am-nav-item :active="$route.path === '/modal'">
				<router-link to="/modal">Modal<span class="am-nav-en">am-modal</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/alert'">
				<router-link to="/alert">Alert<span class="am-nav-en">am-alert</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/confirm'">
				<router-link to="/confirm">Confirm<span class="am-nav-en">am-confirm</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/prompt'">
				<router-link to="/prompt">Prompt<span class="am-nav-en">am-prompt</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/toast'">
				<router-link to="/toast">Toast<span class="am-nav-en">am-toast</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/actions'">
				<router-link to="/actions">Actions<span class="am-nav-en">am-actions</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/popup'">
				<router-link to="/popup">Popup<span class="am-nav-en">am-popup</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/locker'">
				<router-link to="/locker">抽屉<span class="am-nav-en">am-locker</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/popover'">
				<router-link to="/popover">Popover<span class="am-nav-en">am-popover</span></router-link>
			</am-nav-item>
			<am-nav-item :active="$route.path === '/loading'">
				<router-link to="/loading ">Loading<span class="am-nav-en">am-loading</span></router-link>
			</am-nav-item>
		</am-nav>
	</section>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped="true">
	.am-side-nav {
		border-right: 1px solid #eee;

		.am-nav-header {
			border-left: 3px solid #3bb4f2
		}

		li {
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;

			>a {
				color: #777;

			    .am-nav-en {
				    margin-left: 5px;
				    color: #aaa;
				    font-size: 10px;
				    vertical-align: bottom;
				}
			}

			&.am-active {
				border-right: 1px solid #3bb4f2;
				margin-right: -1px;
			}

			&.am-active a,
			&.am-active a:hover,
			&.am-active a:focus {
				background: #f5f5f5;
	    		color: #333;
			}
		}
	}
</style>