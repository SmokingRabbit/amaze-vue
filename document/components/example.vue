<template>
	<section class="am-example">
		<slot></slot>
	</section>
</template>

<script>
	export default {
		name: 'am-example'
	}
</script>

<style lang="less">
	.am-example {
	    border: 1px solid #eee;
	    border-top-right-radius: 0;
	    border-top-left-radius: 0;
	    padding: 0 1.5rem 1.5rem;

	    &::before {
		    content: 'Demo';
		    display: block;
		    color: #bbb;
		    text-transform: uppercase;
		    margin: 0 -15px 15px;
		    padding: 4px 10px;
		    font-size: 12px;
		}
		+pre {
			margin-top: -1px;
		}
	}
</style>