<template>
    <am-container customClass="container">
        <!-- grid -->
        <am-row>
            <am-col :span="4">1</am-col>
            <am-col :span="8">2</am-col>
        </am-row>
        <!-- image -->
        <div :style="{width: 100 + 'px'}">
            <am-image  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80" :thumbnail="true"></am-image>
        </div>
        <!-- table -->
        <am-table>
            <thead>
                <tr>
                    <th>网站名称</th>
                    <th>网址</th>
                    <th>创建时间</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr class="am-active">
                    <td>Amaze UI(Active)</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
                <tr>
                    <td>Amaze UI</td>
                    <td>http://amazeui.org</td>
                    <td>2012-10-01</td>
                </tr>
            </tbody>
        </am-table>
        <!-- Button -->
        <am-button radiusType="radius" size="sm">测试</am-button>
        <!-- ButtonGroup -->
        <am-button-group size="xs" type="stacked">
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" size="sm">测试</am-button>
            <am-button radiusType="radius" color="success" :loading="true" size="sm">测试</am-button>
        </am-button-group>
        <!-- button icon -->
        <am-button><am-icon type="cog"></am-icon> 测试</am-button>
        <!-- icon -->
        <am-icon type="twitter" color="success" size="sm" :btn="true"></am-icon>
        <!-- 动画 -->
        <am-animation type="spin" :iterationCount="10" :delay="3"><am-icon type="cog"></am-icon></am-animation>
        <!-- badge -->
        <am-badge color="primary" :round="true">徽章</am-badge>
        <am-badge color="primary">徽章</am-badge>
        <!-- 面包屑 -->
        <am-breadcrumb :separator="true">
            <am-breadcrumb-item :to="'/'"><am-icon type="home"></am-icon>首页</am-breadcrumb-item>
            <am-breadcrumb-item>列表</am-breadcrumb-item>
            <am-breadcrumb-item>信息</am-breadcrumb-item>
        </am-breadcrumb>
        <!-- 关闭变扭 -->
        <am-close></am-close>
        <am-close :border="true"></am-close>
        <!-- nav -->
        <div>
            <am-dropdown ref="nav">
                <am-dropdown-item :header="true">标题</am-dropdown-item>
                <am-dropdown-item :active="true" @click="dropdownClick" value="bbb"><a>快乐的方式不只一种</a></am-dropdown-item>
            </am-dropdown>
            <am-nav :pill="true" :tab="true">
                <am-nav-item :active="true"><a href="#">首页</a></am-nav-item>
                <am-nav-item><a href="#">开始使用</a></am-nav-item>
                <am-nav-item><a href="#">按需定制</a></am-nav-item>
                <am-nav-item v-dropdown:nav><a href="#">下啦菜单</a></am-nav-item>
            </am-nav>
        </div>
        <!-- 评论列表 -->
        <am-comment-list :flip="true">
            <am-comment>
                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
                <am-comment-content>
                    <am-comment-header>
                        <am-comment-header-meta>
                            <am-comment-author>某人</am-comment-author>
                        </am-comment-header-meta>
                        <am-comment-header-actions>
                            <a><am-icon type="pencil"></am-icon></a>
                        </am-comment-header-actions>
                    </am-comment-header>
                    <am-comment-body>
                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
                    </am-comment-body>
                </am-comment-content>
            </am-comment>
            <am-comment color="success" :flip="true">
                <am-comment-avatar src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96"></am-comment-avatar>
                <am-comment-content>
                    <am-comment-header>
                        <am-comment-header-meta>
                            <am-comment-author>某人</am-comment-author>
                        </am-comment-header-meta>
                        <am-comment-header-actions>
                            <a><am-icon type="pencil"></am-icon></a>
                        </am-comment-header-actions>
                    </am-comment-header>
                    <am-comment-body>
                        <p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
                        <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>
                    </am-comment-body>
                </am-comment-content>
            </am-comment>
        </am-comment-list>
        <!-- 代码 -->
<am-code :scrollable="true">
window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);
</am-code>
        <!-- 输入框 -->
        <am-input-group>
            <am-input v-model="inputVal1" type="textarea" :disabled="false" :maxLen="5"></am-input>
        </am-input-group>
        <am-input-group>
            <am-input-label slot="prepend">帐 号：</am-input-label>
            <am-input-label slot="append"><am-icon type="twitter" color="success"></am-icon></am-input-label>
            <am-input v-model="inputVal2" size="sm" type="text" :disabled="false" :maxLen="5"></am-input>
        </am-input-group>
        <!-- form -->
        <am-form title="表单" :horizontal="true" ref="form">
            <am-input-group :block="true" color="success">
                <am-input v-model="inputVal3" type="text"  :maxLen="5"></am-input>
                <am-input-label slot="prepend" :transparent="false">帐 号</am-input-label>
            </am-input-group>
            <am-button @click="formValidate">验证</am-button>
        </am-form>
        <!-- radio -->
        <section>
            <am-radio v-model="radioVal" label="1">测试1</am-radio>
            <am-radio v-model="radioVal" label="2">测试2</am-radio>
        </section>
        <section>
            <am-radio-group v-model="radioGroup">
                <am-radio label="1">测试1</am-radio>
                <am-radio label="2">测试2</am-radio>
                <am-radio label="3" color="danger">测试3</am-radio>
                <am-radio label="4">测试4</am-radio>
            </am-radio-group>
        </section>
        <!-- checkbox -->
        <section>
            <am-checkbox v-model="checkboxVal" label="1">测试1</am-checkbox>
            <am-checkbox v-model="checkboxVal" label="2">测试2</am-checkbox>
        </section>
        <section>
            <am-checkbox-group v-model="checkboxGroupVal" :disabled="false" :min="1" :max="2">
                <am-checkbox label="1">测试1</am-checkbox>
                <am-checkbox label="2">测试2</am-checkbox>
                <am-checkbox label="3" :disabled="true">测试3</am-checkbox>
                <am-checkbox label="4" color="success">测试4</am-checkbox>
            </am-checkbox-group>
        </section>
        <!-- popover -->
        <div>
            <am-popover ref="popover1" placement="right" trigger="click" color="danger">右面的提示框</am-popover>
            <am-button v-popover:popover1>单击</am-button>

            <am-popover ref="popover2" size="sm">上面的提示框</am-popover>
            <am-button v-popover:popover2>hover</am-button>

            <am-popover ref="popover3"  placement="left" size="sm">left的提示框</am-popover>
            <am-button v-popover:popover3>hover</am-button>

            <am-popover ref="popover4" placement="bottom" size="sm">bottom的提示框</am-popover>
            <am-button v-popover:popover4>hover</am-button>
        </div>
        <!-- Warning -->
        <am-warning color="success" :closeable="true">
            <h3>共同渡过</h3>
            <p>《共同渡过》是张国荣1987年发行的专辑《Summer Romance》中的一首歌。</p>
                <ul>
                <li>若我可再活多一次都盼</li>
                <li>再可以在路途重逢着你</li>
                <li>共去写一生的句子</li>
                <li>若我可再活多一次千次</li>
                <li>我都盼面前仍是你</li>
                <li>我要他生都有今生的暖意</li>
            </ul>
        </am-warning>
        <!-- panel -->
        <am-panel :collapse="true" transparent>
            <am-panel-header title="panel标题"></am-panel-header>
            <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            <am-panel-footer>footer</am-panel-footer>
        </am-panel>
        <am-panel-group :collapse="true">
            <am-panel>
                <am-panel-header title="panel标题"></am-panel-header>
                <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            </am-panel>
            <am-panel>
                <am-panel-header title="panel标题"></am-panel-header>
                <am-panel-body>每个人都有一场爱恋， 用心、用情、用力，感动也感伤。</am-panel-body>
            </am-panel>
        </am-panel-group>
        <!-- dropdown -->
        <div>
            <am-dropdown ref="dropdown1" placement="bottom" trigger="click" :caret="false">
                <am-dropdown-item :header="true">标题</am-dropdown-item>
                <am-dropdown-item :active="true" @click="dropdownClick" value="bbb"><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item :disabled="true" @click="dropdownClick" value="ccc"><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item><a>快乐的方式不只一种</a></am-dropdown-item>
                <am-dropdown-item :divider="true"></am-dropdown-item>
                <am-dropdown-item><a>快乐的方式不只一种</a></am-dropdown-item>
            </am-dropdown>
            <am-button color="danger" v-dropdown:dropdown1>dropdown</am-button>
        </div>
        <!-- modal -->
        <div>
            <am-button @click="showModal">showModal</am-button>
            <am-modal :isShow.sync="modalVisible">
                <am-modal-header>标题</am-modal-header>
                <am-modal-body>
                    <h1>Modal 内容</h1>
                </am-modal-body>
                <am-modal-footer>
                    footer
                </am-modal-footer>
            </am-modal>
        </div>
        <!-- confirm -->
        <div>
            <am-button @click="showConfirm">showConfirm</am-button>
            <am-confirm :isShow.sync="confirmVisible" title="确认框" @cancel="cancelHandle">
                看看是不是需要你确认？
            </am-confirm>
        </div>
        <!-- Prompt -->
        <div>
            <am-button @click="showPrompt">showPrompt</am-button>
            <am-prompt :isShow.sync="promptVisbile" v-model="promptVal" title="说点什么吧" @submit="submitHandle">
                想好了再说……
            </am-prompt>
        </div>
        <!-- toast -->
        <div>
            <am-button @click="showToast">toast</am-button>
        </div>
        <!-- alert -->
        <div>
            <am-button @click="showAlert">alert</am-button>
            <am-alert :isShow.sync="alertVisible" title="alert" @submit="alertSubmitHandle">
                请确认alert信息
            </am-alert>
        </div>
        <!-- actions -->
        <div>
            <am-button @click="showActions">actions</am-button>
            <am-actions :isShow.sync="actionsVisible">
                <am-actions-group>
                    <am-list>
                        <am-list-item>1</am-list-item>
                        <am-list-item>2</am-list-item>
                        <am-list-item>3</am-list-item>
                    </am-list>
                </am-actions-group>
                <am-actions-group>
                    <am-button color="secondary" :block="true">取消</am-button>
                </am-actions-group>
            </am-actions>
        </div>
        <!-- popup -->
        <div>
            <am-button @click="showPopup">showPopup</am-button>
            <am-popup :isShow.sync="popupVisible">
                <am-popup-header title="标题 - 女爵"></am-popup-header>
                <am-popup-body>
                    <p>为你封了国境<br>为你赦了罪<br>为你撤了历史记载<br>为你涂了装扮<br>为你喝了醉<br>为你建了城池围墙<br>一颗热的心穿着冰冷外衣<br>一张白的脸漆上多少褪色的情节<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味<br>为你封了国境</p><p>为你赦了罪<br>为你撤了历史记载<br>一颗热的心<br>穿着冰冷外衣<br>一张白的脸<br>漆上多少褪色的情节<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味<br>在我的空虚身体里面<br>爱上哪个肤浅的王位<br>在你的空虚宝座里面<br>爱过什麽女爵的滋味</p>
                </am-popup-body>
            </am-popup>
        </div>
        <!-- nprogress -->
        <div>
            <am-button @click="nprogressHandle">nprogress-{{ this.nprogress ? 'end' : 'start' }}</am-button>
        </div>
        <!-- slider -->
        <div>
            <am-slider>
                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></am-slider-item>
                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></am-slider-item>
                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" /></am-slider-item>
                <am-slider-item><img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" /></am-slider-item>
            </am-slider>
        </div>
        <!-- locker -->
        <div>
            <am-button @click="lockerHandle">locker</am-button>
            <am-locker :isShow.sync="lockerVisible" placement="right">
                <p>
                    我不愿让你一个人 <br/>
                    承受这世界的残忍 <br/>
                    我不愿眼泪陪你到 永恒 <br/>
                </p>
            </am-locker>
        </div>
        <!-- topbar -->
        <div>
            <am-topbar :fixed="false" :inverse="true">
                <am-container>
                    <am-topbar-brand><a href="#">Amaze UI</a></am-topbar-brand>
                    <am-topbar-toggle></am-topbar-toggle>
                    <am-topbar-collapse>
                        <am-nav :pill="true" :topbar="true">
                            <am-nav-item :active="true"><a href="#">项目</a></am-nav-item>
                        </am-nav>
                        <am-topbar-form>
                            <am-input :formGroup="true" size="sm"></am-input>
                        </am-topbar-form>
                    </am-topbar-collapse>
                </am-container>
            </am-topbar>
        </div>
        <!-- pagination -->
        <div>
            <am-pagination :total="100" v-model="pageNum" :disabled="true" @change="pageChange"></am-pagination>
        </div>
        <!-- progress -->
        <div>
            <am-progress :progress="40" color="success" :active="true" :striped="true"></am-progress>
        </div>
        <!-- datepicker -->
        <div>
            <am-datepicker v-model="date" modelType="month"></am-datepicker>
        </div>
        <!-- article -->
        <div>
            <am-article>
                <am-article-header title="永远的蝴蝶" meta="陈启佑（台湾）"></am-article-header>
                <am-article-body>
                    <am-article-lead>《永远的蝴蝶》是台湾著名作家陈启佑先生的一篇小小说。这是一篇散文化的微型小说，其语言具有较强的抒情色彩，立意含蓄隽永 。作品情节很简单，写的是一个凄美的爱情故事。在一个雨天，“我”的恋人樱子自愿帮“我”到马路对面去寄信。随着一阵拔尖的刹车声，樱子年轻的生命消逝了。</am-article-lead>
                    <p>那时候刚好下着雨，柏油路面湿冷冷的，还闪烁着青、黄、红颜色的灯火。我们就在骑楼下躲雨，看绿色的邮筒孤独地站在街的对面。我白色风衣的大口袋里有一封要寄给南部的母亲的信。樱子说她可以撑伞过去帮我寄信。我默默点头。</p>
                </am-article-body>
            </am-article>
        </div>
        <!-- select -->
        <div>
            <am-select :options="options" width="100%" :search="true" :multiple="false" color="success" :caret="false"></am-select>
        </div>
        <!-- tabs -->
        <div>
            <am-tabs :removeable="false">
                <am-tabs-panel label="流浪">
                    <p>我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？</p>
                </am-tabs-panel>
                <am-tabs-panel>
                    <span slot="label"><am-icon type="twitter"></am-icon> 我的行程</span>
                    <p>我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？</p>
                </am-tabs-panel>
                <am-tabs-panel>
                    <span slot="label"><am-icon type="twitter"></am-icon> icon测试</span>
                    <p>icon我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？</p>
                </am-tabs-panel>
            </am-tabs>
        </div>
        <!-- scrollbar -->
        <div>
            <am-scrollbar :width=300 :height=200>
                 <p>我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？我就这样告别山下的家，我实在不愿轻易让眼泪留下。我以为我并不差不会害怕，我就这样自己照顾自己长大。我不想因为现实把头低下，我以为我并不差能学会虚假。怎样才能够看穿面具里的谎话？别让我的真心散的像沙。如果有一天我变得更复杂，还能不能唱出歌声里的那幅画？</p>
            </am-scrollbar>
        </div>
        <!-- notify -->
        <div>
            <am-button @click="notify">notify</am-button>
            <am-button @click="message">message</am-button>
            <am-switch v-model="amSwitch" :disabled="false" activeText="开启" inactiveText="关闭"></am-switch>
            <am-button @click="sectionLoading">局部loading-{{ loading ? '关闭' : '开启 '}}</am-button>
            <am-button @click="globalLoading">全局loading</am-button>
        </div>
        <!-- loading -->
        <div :style="{height: '300px', position: 'relative'}">
            <am-loading color="primary" :loading="loading"></am-loading>
        </div>
        <div>
            <am-tag>标签</am-tag>
            <am-tag color="primary" @tag-remove="tagDelete(12)" :closeable="true">标签</am-tag>
            <am-tag color="secondary">标签</am-tag>
            <am-tag color="success">标签</am-tag>
            <am-tag color="warning">标签</am-tag>
            <am-tag color="danger">标签</am-tag>
        </div>
        <div>
            <am-timepicker></am-timepicker>
        </div>
        <am-form-group><am-input></am-input></am-form-group>
        <am-table :data="tableData" :select="true" :selectAll="true">
            <am-table-column prop="num" label="编码"></am-table-column>
            <am-table-column prop="title" label="名称"></am-table-column>
            <am-table-column prop="date" label="日期"></am-table-column>
        </am-table>
    </am-container>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                inputVal1: '',
                inputVal2: '',
                inputVal3: '',
                radioVal: '',
                radioGroup: '',
                checkboxVal: false,
                checkboxGroupVal: ['1'],
                modalVisible: false,
                confirmVisible: false,
                promptVisbile: false,
                promptVal: '',
                alertVisible: false,
                actionsVisible: false,
                popupVisible: false,
                nprogress: false,
                lockerVisible: false,
                pageNum: 10,
                date: '',
                options: [{
                    value: 1,
                    label: '苹果',
                    guesser: 'pingguo'
                }, {
                    value: 2,
                    label: '鸭梨',
                    guesser: 'yali'
                }, {
                    value: 3,
                    label: '香蕉',
                    guesser: 'xiangjiao'
                }, {
                    value: 1,
                    label: '苹果',
                    guesser: 'pingguo'
                }, {
                    value: 2,
                    label: '鸭梨',
                    guesser: 'yali'
                }, {
                    value: 3,
                    label: '香蕉',
                    guesser: 'xiangjiao'
                }, {
                    value: 1,
                    label: '苹果',
                    guesser: 'pingguo'
                }, {
                    value: 2,
                    label: '鸭梨',
                    guesser: 'yali'
                }, {
                    value: 3,
                    label: '香蕉',
                    guesser: 'xiangjiao'
                }, {
                    value: 1,
                    label: '苹果',
                    guesser: 'pingguo'
                }, {
                    value: 2,
                    label: '鸭梨',
                    guesser: 'yali'
                }, {
                    value: 3,
                    label: '香蕉',
                    guesser: 'xiangjiao'
                }],
                amSwitch: false,
                loading: false,
                tableData: [{
                    num: 1,
                    title: '苹果',
                    date: '2017-10-01'
                },{
                    num: 2,
                    title: {
                        render(h) {
                            return (<am-icon type="github"></am-icon>)
                        }
                    },
                    date: '2017-10-01',
                },
                {
                    num: 3,
                    title: '苹果',
                    date: '2017-10-01',
                    active: true
                },
                {
                    num: {
                        value: 4,
                        color: 'success'
                    },
                    title: '苹果',
                    date: '2017-10-01'
                }]
            };
        },
        watch: {
            inputVal1(cur, old) {
                console.log('inputVal1值：' + cur, old);
            },
            radioVal(cur, old) {
                console.log('radio选择:' + cur);
            }
        },
        methods: {
            dropdownClick(val) {
                console.log(val)
            },
            showModal() {
                this.modalVisible = true;
            },
            showConfirm() {
                this.confirmVisible = true;
            },
            cancelHandle() {
                console.log('取消了confirm')
            },
            showPrompt() {
                this.promptVisbile = true;
            },
            submitHandle() {
                console.log(this.promptVal)
            },
            showToast() {
                this.$toast.open('toast 信息');
            },
            showAlert() {
                this.alertVisible = true;
            },
            alertSubmitHandle() {
                console.log('alert submit')
            },
            showActions() {
                this.actionsVisible = true;
            },
            showPopup() {
                this.popupVisible = true;
            },
            nprogressHandle() {
                if (this.nprogress) {
                    this.$nprogress.end();
                    this.nprogress = false;
                }
                else {
                    this.$nprogress.start({
                        minimum: Math.random()
                    });
                    this.nprogress = true;
                }
            },
            lockerHandle() {
                this.lockerVisible = true;
            },
            pageChange(num) {
                console.log(num, this.pageNum)
            },
            notify() {
                this.$notify({
                    type: 'error',
                    message: '测试',
                    closeable: true,
                    onClose() {
                        console.log('notify close')
                    }
                });
            },
            message() {
                this.$message({
                    title: '测试',
                    message: '这是一条小心，请注意！',
                    type: 'error',
                    placement: 'left-bottom'
                })
            },
            sectionLoading() {
                this.loading = !this.loading;
            },
            globalLoading() {
                const _ins = this.$loading();

                setTimeout(() => {
                    _ins.close();
                }, 3000);
            },
            formValidate() {
               console.log( this.$refs['form'].validate());
            },
            tagDelete(a) {
                alert(a)
            }
        }
    }
</script>

<style lang="less">
    .container {

        >div {
            margin-top: 20px;
        }
    }
</style>
