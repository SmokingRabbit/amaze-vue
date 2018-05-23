<template>
	<section class="am-doc-section">
		<slot></slot>
	</section>
</template>

<script>
	export default {
		name: 'am-doc-section'
	}
</script>
<style lang="less">
	.am-doc-section {
		width: 100%;
		height: auto;
		margin-bottom: 25px;
		padding-left: 21px;
		padding-right: 21px;

		>h2 {
			margin-left: -21px;
		}

		>pre {
			font-size: 12px !important;
		}

		>ul.am-doc-group {
			> li {
				padding: 0.4rem 0;
				word-break: break-all;
			}
		}
	}
</style>