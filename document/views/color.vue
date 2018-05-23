<template>
	<am-article>
		<am-article-header title="颜色"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>主颜色</h2>
				<ul class="am-doc-group">
					<li><a href="http://www.amazeui.org/" target="blank"> Amaze Ui </a>提供了一套舒适的调色板，您也可以根据自己的设计 <a href="https://github.com/sunshineJi/amaze-vue">克隆</a> 后修改<am-doc-code>/src/styles/variables.less</am-doc-code>文件</li>
				</ul>
				<am-row>
					<am-col :span="3" :end="true">
						<div class="color primary">
							<p>Primary</p>
							<span>#0e90d2</span>
						</div>
					</am-col>
				</am-row>
			</am-doc-section>
			<am-doc-section>
				<h2>辅助色</h2>
				<am-row>
					<am-col :span="3">
						<div class="color secondary">
							<p>Secondary</p>
							<span>#3bb4f2</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color success">
							<p>Success</p>
							<span>#5eb95e</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color warning">
							<p>Warning</p>
							<span>#F37B1D</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color danger">
							<p>Danger</p>
							<span>#dd514c</span>
						</div>
					</am-col>
				</am-row>
			</am-doc-section>

			<am-doc-section>
				<h2>中性色</h2>
				<am-row>
					<am-col :span="3">
						<div class="color font1">
							<p>主要文字</p>
							<span>#222222</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color font2">
							<p>常规文字</p>
							<span>#3333333</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color font3">
							<p>次要文字</p>
							<span>#555555</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color font4">
							<p>占位文字</p>
							<span>#999999</span>
						</div>
					</am-col>
				</am-row>
				<am-row custom-class="marginTop">
					<am-col :span="3">
						<div class="color border1">
							<p>一级边框</p>
							<span>#cccccc</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color border2">
							<p>二级边框</p>
							<span>#ddddd</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color border3">
							<p>三级边框</p>
							<span>#dedede</span>
						</div>
					</am-col>
					<am-col :span="3">
						<div class="color border4">
							<p>四级边框</p>
							<span>#e5e5e5</span>
						</div>
					</am-col>
				</am-row>
			</am-doc-section>
		</am-article-body>
	</am-article>
</template>

<script>
	export default {
	}
</script>

<style lang="less" scoped="true">
	.color {
		width: 100%;
		height: 80px;
		border-radius: 4px;
		padding: 8px 12px;

		>p {
			color: #fff;
			font-size: 1.4rem;
			margin: 0;
    		margin-top: 8px;
    		margin-bottom: 6px;
		}
		>span {
			color: #eee;
			font-size: 1.2rem;
		}

		&.primary {
			background-color: #0e90d2;
		}
		&.secondary {
			background-color: #3bb4f2;
		}
		&.success {
			background-color: #5eb95e;
		}
		&.warning {
			background-color: #F37B1D;
		}
		&.danger {
			background-color: #dd514c;
		}
		&.font1 {
			background-color: #222;
		}
		&.font2 {
			background-color: #333;
		}
		&.font3 {
			background-color: #555;
		}
		&.font4 {
			background-color: #999;
		}
		&.border1 {
			background-color: #ccc;
		}
		&.border2 {
			background-color: #ddd;
		}
		&.border3 {
			background-color: #dedede;
		}
		&.border4 {
			background-color: #e5e5e5;
		}
	}
	.marginTop {
		margin-top: 20px;
	}
</style>