<template>
	<span class="am-docs-code"><slot></slot></span>
</template>

<script>
	export default {
		name: 'am-doc-code'
	}
</script>

<style lang="less" scped="true">
	.am-docs-code {
		margin: 0px 4px;
		background-color: #f8f8f8;
		color: #d44950;
		// border: 1px solid #dedede;
		border-radius: 2px;
		padding: 2px 4px;
	}
</style>