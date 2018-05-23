<template>
	<am-article>
		<am-article-header title="工具样式"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>浮动相关</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-cf</am-doc-code>  清除浮动</li>
					<li><am-doc-code>.am-nbfc</am-doc-code> 创建新的 BFC 清除浮动</li>
					<li><am-doc-code>.am-fl</am-doc-code> 左浮动</li>
					<li><am-doc-code>.am-fr</am-doc-code> 右浮动</li>
					<li><am-doc-code>.am-center</am-doc-code> 水平居中</li>
				</ul>
				<am-example>
					<div class="am-cf">
						<am-button color="success" custom-class="am-fl">向左浮动</am-button>
						<am-button color="success" custom-class="am-fr">向右浮动</am-button>
					</div>
				</am-example>
<am-code syntax="xml">&lt;div class=&quot;am-cf&quot;&gt;
	&lt;am-button color=&quot;success&quot; custom-class=&quot;am-fl&quot;&gt;向左浮动&lt;/am-button&gt;
	&lt;am-button color=&quot;success&quot; custom-class=&quot;am-fr&quot;&gt;向右浮动&lt;/am-button&gt;
&lt;/div&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>垂直对齐</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-vertical-align</am-doc-code>  将这个 class 添加到父容器，父容器需要指定高度</li>
					<li><am-doc-code>.am-vertical-align-middle</am-doc-code> 需要垂直居中的元素</li>
					<li><am-doc-code>.am-vertical-align-bottom</am-doc-code> 添加到需要底部对齐的元素</li>
				</ul>
				<am-example>
					<div class="am-vertical-align" style="height: 150px;">
						<div class="am-vertical-align-middle">飘在半空中的 XX</div>
						<div class="am-vertical-align-bottom">DOWN 到了谷底...降到零下几度 C</div>
					</div>
				</am-example>
<am-code syntax="xml">&lt;div class=&quot;am-vertical-align&quot; style=&quot;height: 150px;&quot;&gt;
	&lt;div class=&quot;am-vertical-align-middle&quot;&gt;飘在半空中的 XX&lt;/div&gt;
	&lt;div class=&quot;am-vertical-align-bottom&quot;&gt;DOWN 到了谷底...降到零下几度 C&lt;/div&gt;
&lt;/div&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>块元素、行内元素 <small>设置display属性</small></h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-block</am-doc-code>  block</li>
					<li><am-doc-code>.am-inline</am-doc-code> inline</li>
					<li><am-doc-code>.am-inline-block</am-doc-code> inline-block</li>
				</ul>
			</am-doc-section>

			<am-doc-section>
				<h2>隐藏元素</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-hide</am-doc-code></li>
				</ul>
			</am-doc-section>

			<am-doc-section>
				<h2>文字颜色</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-text-primary</am-doc-code>  主要颜色</li>
					<li><am-doc-code>.am-text-secondary</am-doc-code>  次要颜色</li>
					<li><am-doc-code>.am-text-success</am-doc-code>  成功颜色</li>
					<li><am-doc-code>.am-text-warning</am-doc-code>  警告颜色</li>
					<li><am-doc-code>.am-text-danger</am-doc-code>  危险颜色</li>
				</ul>
				<am-example>
					<p>快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-primary">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-secondary">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-success">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-warning">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-danger">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
				</am-example>
				<am-code syntax="xml">&lt;p&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-primary&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-secondary&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-success&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-warning&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-danger&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>文字大小 <small>根字体大小为14px的情况下</small></h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-text-xs</am-doc-code>  10px <small>部分浏览不支持小于12号的字体</small></li>
					<li><am-doc-code>.am-text-sm</am-doc-code>  12px</li>
					<li><am-doc-code>.am-text-default</am-doc-code>  14px</li>
					<li><am-doc-code>.am-text-lg</am-doc-code>  16px</li>
					<li><am-doc-code>.am-text-xl</am-doc-code>  18px</li>
					<li><am-doc-code>.am-text-xxl</am-doc-code>  20px</li>
					<li><am-doc-code>.am-text-xxxl</am-doc-code>  22px</li>
				</ul>
				<am-example>
					<p class="am-text-sm">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-default">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-lg">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-xl">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-xxl">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
					<p class="am-text-xxl">快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。</p>
				</am-example>
				<am-code syntax="xml">&lt;p class=&quot;am-text-sm&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-default&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-lg&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-xl&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-xxl&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;
&lt;p class=&quot;am-text-xxl&quot;&gt;快乐，不是拥有的多，而是计较的少;乐观，不是没烦恼，而是懂得知足。&lt;/p&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>文本左右对齐方式</h2>
				<am-table :data="props">
					<am-table-column label="左对齐" prop="left"></am-table-column>
					<am-table-column label="右对齐" prop="right"></am-table-column>
					<am-table-column label="居中" prop="center"></am-table-column>
					<am-table-column label="自适应" prop="justify"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>文本垂直对齐方式</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-text-top</am-doc-code>  顶对齐</li>
					<li><am-doc-code>.am-text-middle</am-doc-code>  居中对齐</li>
					<li><am-doc-code>.am-text-bottom</am-doc-code>  底对齐</li>
				</ul>
			</am-doc-section>

			<am-doc-section>
				<h2>
					单行文本截断
					<small>
						需要截断的元素不能位 <am-doc-code>display</am-doc-code>属性不能为<am-doc-code>inline</am-doc-code>
					</small>
				</h2>
				<ul class="am-doc-group">
					<li><am-doc-code>.am-text-truncate</am-doc-code> </li>
				</ul>
			</am-doc-section>
		</am-article-body>
	</am-article>
</template>

<script>
	export default {
		data() {
			return {
				props: [{
					left: '.am-text-left',
					right: '.am-text-right',
					center: '.am-text-center',
					justify: '.am-text-justify'
				}, {
					left: '.am-sm-text-left',
					right: '.am-sm-text-right',
					center: '.am-sm-text-center',
					justify: '.am-sm-text-justify'
				}, {
					left: '.am-sm-only-text-left',
					right: '.am-sm-only-text-right',
					center: '.am-sm-only-text-center',
					justify: '.am-sm-only-text-justify'
				}, {
					left: '.am-md-text-left',
					right: '.am-md-text-right',
					center: '.am-md-text-center',
					justify: '.am-md-text-justify'
				}, {
					left: '.am-md-only-text-left',
					right: '.am-md-only-text-right',
					center: '.am-md-only-text-center',
					justify: '.am-md-only-text-justify'
				}, {
					left: '.am-lg-text-left',
					right: '.am-lg-text-right',
					center: '.am-lg-text-center',
					justify: '.am-lg-text-justify'
				}, ]
			}
		}
	}
</script>

<style lang="less" scoped="true">
	.am-vertical-align {
		border: 1px dashed #ddd;
		height: 150px;
	}
</style>