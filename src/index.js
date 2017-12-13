import './styles/base.less';

import { Container } from './components/container';
import { Row } from './components/row';
import { Col } from './components/col';
import { Image } from './components/image';
import { Table, TableColumn } from './components/table';
import { Button, ButtonGroup } from './components/button';
import { Icon } from './components/icon';
import { Animation } from './components/animation';
import { Badge } from './components/badge';
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb';
import { Close } from './components/close';
import {
    Comment,
    CommentList,
    CommentAvatar,
    CommentContent,
    CommentHeader,
    CommentHeaderMeta,
    CommentAuthor,
    CommentHeaderActions,
    CommentBody
} from './components/comment';
import { Code } from './components/code';
import { Input, InputGroup, InputLabel } from './components/input';
import { Form, FromGroup } from './components/form';
import { List, ListItem } from './components/list';
import { Nav, NavItem } from './components/nav';
import { Topbar, TopbarBrand, TopbarCollapse, TopbarForm, TopbarToggle, TopbarSlot } from './components/topbar';
import { Pagination } from './components/pagination';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    panelGroup
} from './components/panel';
import { Progress } from './components/progress';
import { Article, ArticleHeader, ArticleBody, ArticleLead } from './components/article';
import { Radio, RadioGroup } from './components/radio';
import { Checkbox, CheckboxGroup } from './components/checkbox';
import { Warning } from './components/warning';
import { Dropdown, DropdownItem } from './components/dropdown';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './components/modal';
import { Confirm } from './components/confirm';
import { Prompt } from './components/prompt';
import { Toast } from './components/toast';
import { Alert } from './components/alert';
import { Actions, ActionsGroup } from './components/actions';
import { Popup, PopupHeader, PopupBody } from './components/popup';
import { Popover } from './components/popover';
import { NProgress } from './components/nprogress';
import { Slider, SliderItem } from './components/slider';
import { Locker } from './components/locker';
import { Tabs, TabsPanel } from './components/tabs';
import { Datepicker } from './components/datepicker';
import { Select } from './components/select';
import { Scrollbar } from './components/scrollbar';
import { Notify } from './components/notify';
import { Message } from './components/message';
import { Switch } from './components/switch';
import { Loading } from './components/loading';
import { Timepicker } from './components/timepicker';
import { Tag } from './components/tag';

const install = function (Vue) {
    Vue.component(Container.name, Container);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Image.name, Image);
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Animation.name, Animation);
    Vue.component(Badge.name, Badge);
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
    Vue.component(Close.name, Close);
    Vue.component(Comment.name, Comment);
    Vue.component(CommentList.name, CommentList);
    Vue.component(CommentAvatar.name, CommentAvatar);
    Vue.component(CommentContent.name, CommentContent);
    Vue.component(CommentHeader.name, CommentHeader);
    Vue.component(CommentHeaderMeta.name, CommentHeaderMeta);
    Vue.component(CommentAuthor.name, CommentAuthor);
    Vue.component(CommentHeaderActions.name, CommentHeaderActions);
    Vue.component(CommentBody.name, CommentBody);
    Vue.component(Code.name, Code);
    Vue.component(Input.name, Input);
    Vue.component(InputGroup.name, InputGroup);
    Vue.component(InputLabel.name, InputLabel);
    Vue.component(Form.name, Form);
    Vue.component(FromGroup.name, FromGroup);
    Vue.component(List.name, List);
    Vue.component(ListItem.name, ListItem);
    Vue.component(Nav.name, Nav);
    Vue.component(NavItem.name, NavItem);
    Vue.component(Topbar.name, Topbar);
    Vue.component(TopbarBrand.name, TopbarBrand);
    Vue.component(TopbarCollapse.name, TopbarCollapse);
    Vue.component(TopbarForm.name, TopbarForm);
    Vue.component(TopbarToggle.name, TopbarToggle);
    Vue.component(TopbarSlot.name, TopbarSlot);
    Vue.component(Pagination.name, Pagination);
    Vue.component(Panel.name, Panel);
    Vue.component(PanelHeader.name, PanelHeader);
    Vue.component(PanelBody.name, PanelBody);
    Vue.component(PanelFooter.name, PanelFooter);
    Vue.component(panelGroup.name, panelGroup);
    Vue.component(Progress.name, Progress);
    Vue.component(Article.name, Article);
    Vue.component(ArticleHeader.name, ArticleHeader);
    Vue.component(ArticleBody.name, ArticleBody);
    Vue.component(ArticleLead.name, ArticleLead);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Warning.name, Warning);
    Vue.component(Dropdown.name, Dropdown);
    Vue.use(Dropdown);
    Vue.component(DropdownItem.name, DropdownItem);
    Vue.component(Modal.name, Modal);
    Vue.component(ModalHeader.name, ModalHeader);
    Vue.component(ModalBody.name, ModalBody);
    Vue.component(ModalFooter.name, ModalFooter);
    Vue.component(Confirm.name, Confirm);
    Vue.component(Prompt.name, Prompt);
    Vue.component(Toast.name, Toast);
    Vue.use(Toast);
    Vue.component(Alert.name, Alert);
    Vue.component(Actions.name, Actions);
    Vue.component(ActionsGroup.name, ActionsGroup);
    Vue.component(Popup.name, Popup);
    Vue.component(PopupHeader.name, PopupHeader);
    Vue.component(PopupBody.name, PopupBody);
    Vue.component(Popover.name, Popover);
    Vue.use(Popover);
    Vue.use(NProgress);
    Vue.component(Slider.name, Slider);
    Vue.component(SliderItem.name, SliderItem);
    Vue.component(Locker.name, Locker);
    Vue.component(Tabs.name, Tabs);
    Vue.component(TabsPanel.name, TabsPanel);
    Vue.component(Datepicker.name, Datepicker);
    Vue.component(Select.name, Select);
    Vue.component(Scrollbar.name, Scrollbar);
    Vue.use(Notify);
    Vue.use(Message);
    Vue.component(Switch.name, Switch);
    Vue.component(Loading.name, Loading);
    Vue.use(Loading);
    Vue.component(Timepicker.name, Timepicker);
    Vue.component(Tag.name, Tag);
};

// html script标签支持
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    version: '1.1.9',
    // components
    Container,
    Row,
    Col,
    Image,
    Table,
    TableColumn,
    Button,
    ButtonGroup,
    Icon,
    Animation,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Close,
    Comment,
    CommentList,
    CommentAvatar,
    CommentContent,
    CommentHeader,
    CommentHeaderMeta,
    CommentAuthor,
    CommentHeaderActions,
    CommentBody,
    Code,
    Input,
    InputGroup,
    InputLabel,
    Form,
    FromGroup,
    List,
    ListItem,
    Nav,
    NavItem,
    Topbar,
    TopbarBrand,
    TopbarCollapse,
    TopbarForm,
    TopbarToggle,
    TopbarSlot,
    Pagination,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    panelGroup,
    Progress,
    Article,
    ArticleHeader,
    ArticleBody,
    ArticleLead,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Warning,
    Dropdown,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Confirm,
    Prompt,
    Toast,
    Alert,
    Actions,
    ActionsGroup,
    Popup,
    PopupHeader,
    PopupBody,
    Popover,
    NProgress,
    Slider,
    SliderItem,
    Locker,
    Tabs,
    TabsPanel,
    Datepicker,
    Select,
    Scrollbar,
    Notify,
    Message,
    Switch,
    Loading,
    Timepicker,
    Tag
};
