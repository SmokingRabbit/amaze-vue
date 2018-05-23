<template>
	<am-article>
		<am-article-header title="输入框"></am-article-header>
		<am-article-body>
			<hr>
			<am-doc-section>
				<h2>基础用法</h2>

				<ul class="am-doc-group">
					<li><am-doc-code>am-input</am-doc-code> 输入框</li>
					<li><am-doc-code>am-input-label</am-doc-code> label</li>
					<li><am-doc-code>am-input-group</am-doc-code> 输入框容器</li>
				</ul>

				<am-example>
					<am-input></am-input>
				</am-example>
<am-code syntax="xml">&lt;am-input&gt;&lt;/am-input&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>配合<am-doc-code>am-input-group</am-doc-code>使用</h2>
				<am-example>
					<am-input-group>
			            <am-input v-model="inputVal1" :max-len="5"></am-input>
			        </am-input-group>
			        <p>您输入的值是：<am-doc-code>{{inputVal1}}</am-doc-code></p>
				</am-example>
<am-code syntax="xml">&lt;am-input-group&gt;
    &lt;am-input v-model=&quot;inputVal1&quot; :max-len=&quot;5&quot;&gt;&lt;/am-input&gt;
&lt;/am-input-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>配合<am-doc-code>am-input-group</am-doc-code>和<am-doc-code>am-input-label</am-doc-code>使用</h2>
				<am-example>
					<am-input-group>
			            <am-input-label slot="prepend">帐 号：</am-input-label>
			            <am-input-label slot="append"><am-icon type="twitter" color="success"></am-icon></am-input-label>
			            <am-input></am-input>
			        </am-input-group>
				</am-example>
<am-code syntax="xml">&lt;am-input-group&gt;
    &lt;am-input-label slot=&quot;prepend&quot;&gt;帐 号：&lt;/am-input-label&gt;
    &lt;am-input-label slot=&quot;append&quot;&gt;&lt;am-icon type=&quot;twitter&quot; color=&quot;success&quot;&gt;&lt;/am-icon&gt;&lt;/am-input-label&gt;
    &lt;am-input&gt;&lt;/am-input&gt;
&lt;/am-input-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>文本框</h2>
				<am-example>
					<am-input-group>
			            <am-input type="textarea"></am-input>
			        </am-input-group>
				</am-example>
<am-code syntax="xml">&lt;am-input-group&gt;
    &lt;am-input type=&quot;textarea&quot;&gt;&lt;/am-input&gt;
&lt;/am-input-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>使用<am-doc-code>block</am-doc-code>属性</h2>
				<am-example>
					<am-input-group :block="true" color="success">
		                <am-input></am-input>
		                <am-input-label slot="prepend" :transparent="true">帐 号：</am-input-label>
		            </am-input-group>
				</am-example>
<am-code syntax="xml">&lt;am-input-group :block=&quot;true&quot; color=&quot;success&quot;&gt;
    &lt;am-input&gt;&lt;/am-input&gt;
    &lt;am-input-label slot=&quot;prepend&quot; :transparent=&quot;true&quot;&gt;帐 号：&lt;/am-input-label&gt;
&lt;/am-input-group&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>获取验证码</h2>
				<am-example>
					<am-input-group>
						<am-input-label slot="prepend">手机号码</am-input-label>
		                <am-input v-model="phoneNum" :disabled="isGetCode" placeholder="请输入11位手机号码" :max-len="11" regex="^1\d{10}$"></am-input>
		                <am-input-label slot="append" :transparent="true">
		                	<am-button color="primary" :disabled="waitCode" @click="getCode">{{getCodeBtnText}}</am-button>
		                </am-input-label>
		            </am-input-group>
				</am-example>
<am-code syntax="xml">&lt;template&gt;
&lt;am-input-group&gt;
	&lt;am-input-label slot=&quot;prepend&quot;&gt;手机号码&lt;/am-input-label&gt;
    &lt;am-input v-model=&quot;phoneNum&quot; :disabled=&quot;isGetCode&quot; placeholder=&quot;请输入11位手机号码&quot; :max-len=&quot;11&quot; regex=&quot;^1\d{10}$&quot;&gt;&lt;/am-input&gt;
    &lt;am-input-label slot=&quot;append&quot; :transparent=&quot;true&quot;&gt;
    	&lt;am-button color=&quot;primary&quot; :disabled=&quot;waitCode&quot; @click=&quot;getCode&quot;&gt;{{getCodeBtnText}}&lt;/am-button&gt;
    &lt;/am-input-label&gt;
&lt;/am-input-group&gt;
&lt;/template&gt;
&lt;script&gt;
	export default {
		data() {
			phoneNum: &#x27;&#x27;,
			getCodeBtnText: &#x27;获取验证码&#x27;,
			waitCode: true,
			isGetCode: false
		},
		methods: {
			getCode() {
				if (this.waitCode || this.isGetCode) {
					return ;
				}

				this.isGetCode = true;
				let timer = null;
				let timw = 60;
				timer = setInterval(() =&gt; {
					if (timw === 1) {
						clearInterval(timer);
						this.getCodeBtnText = &#x27;获取验证码&#x27;;
						this.isGetCode = false;
					}
					this.getCodeBtnText = timw + &#x27;S后重试&#x27;;
					timw--;
				}, 1000);
			}
		},
		watch: {
			phoneNum(curVal) {
				if (!/^1\d{10}$/.test(curVal)) {
					this.waitCode = true;
				}
				else {
					this.waitCode = false;
				}
			}
		}
	}
&lt;/script&gt;</am-code>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-input</am-doc-code></h2>
				<am-table :data="props">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-input-label</am-doc-code></h2>
				<am-table :data="labelProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

			<am-doc-section>
				<h2>Props <am-doc-code>am-input-group</am-doc-code></h2>
				<am-table :data="groupProps">
					<am-table-column label="参数" prop="prop"></am-table-column>
					<am-table-column label="说明" prop="desc"></am-table-column>
					<am-table-column label="类型" prop="type"></am-table-column>
					<am-table-column label="可选值" prop="values"></am-table-column>
					<am-table-column label="默认值" prop="default"></am-table-column>
				</am-table>
			</am-doc-section>

		</am-article-body>
	</am-article>
</template>

<script>
	export default {
		data() {
			return {
				inputVal1: '最多五个字',
				phoneNum: '',
				getCodeBtnText: '获取验证码',
				waitCode: true,
				isGetCode: false,
				props: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'size',
					desc: '输入框尺寸',
					type: 'String',
					values: 'lg、sm',
					default: 'NULL'
				}, {
					prop: 'type',
					desc: '原生属性，增加textarea支持',
					type: 'String',
					values: '-',
					default: 'text'
				}, {
					prop: 'max-len',
					desc: '输入内容的最大长度',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'min-len',
					desc: '输入内容的最小长度',
					type: 'Number',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'regex',
					desc: '输入内容的正则表达式',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'placeholder',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'readonly',
					desc: '原生属性',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'disabled',
					desc: '禁用输入',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'name',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'max',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'min',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'step',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'autofocus',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'autocomplete',
					desc: '原生属性',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'resize',
					desc: '仅在textarea下起作用',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				labelProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'transparent',
					desc: '背景透明',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}],
				groupProps: [{
					prop: 'custom-class',
					desc: '自定义className',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'prop',
					desc: '内部属性名称',
					type: 'String',
					values: '-',
					default: 'NULL'
				}, {
					prop: 'error-notice',
					desc: '错误提示信息',
					type: 'String',
					values: '-',
					default: '您输入的信息有误'
				}, {
					prop: 'color',
					desc: '输入框容器内部组件颜色',
					type: 'String',
					values: 'primary, secondary, success, warning, danger',
					default: 'NULL'
				}, {
					prop: 'block',
					desc: '输入框是否撑满',
					type: 'Boolean',
					values: '-',
					default: 'false'
				}, {
					prop: 'size',
					desc: '输入框大小',
					type: 'String',
					values: 'lg、sm',
					default: 'NULL'
				}]
			}
		},
		methods: {
			getCode() {
				if (this.waitCode || this.isGetCode) {
					return ;
				}

				this.isGetCode = true;
				let timer = null;
				let timw = 60;
				timer = setInterval(() => {
					if (timw === 1) {
						clearInterval(timer);
						this.getCodeBtnText = '获取验证码';
						this.isGetCode = false;
					}
					this.getCodeBtnText = timw + 'S后重试';
					timw--;
				}, 1000);
			}
		},
		watch: {
			phoneNum(curVal) {
				if (!/^1\d{10}$/.test(curVal)) {
					this.waitCode = true;
				}
				else {
					this.waitCode = false;
				}
			}
		}
	}
</script>