import './styles/base.less';

import { Button, ButtonGroup } from './components/button';
import { Icon } from './components/icon';
import { Animation } from './components/animation';
import { Badge } from './components/badge';
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb';
import { Close } from './components/close';
import {
    Comment,
    CommentList ,
    CommentAvatar,
    CommentContent,
    CommentHeader,
    CommentHeaderMeta,
    CommentAuthor,
    CommentHeaderActions,
    CommentBody
} from './components/comment';
import { Code } from './components/code';
import { Input, InputLabel } from './components/input';
import { Form } from './components/form';
import { List, ListItem } from './components/list';
import { Radio, RadioGroup } from './components/radio';
import { Checkbox, CheckboxGroup } from './components/checkbox';
import { Warn } from './components/warn';
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    panelGroup
} from './components/panel';
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

const install = function (Vue) {
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
    Vue.component(InputLabel.name, InputLabel);
    Vue.component(Form.name, Form);
    Vue.component(List.name, List);
    Vue.component(ListItem.name, ListItem);
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);
    Vue.component(Panel.name, Panel);
    Vue.component(PanelHeader.name, PanelHeader);
    Vue.component(PanelBody.name, PanelBody);
    Vue.component(PanelFooter.name, PanelFooter);
    Vue.component(panelGroup.name, panelGroup);
    Vue.component(Warn.name, Warn);
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
}

export default {
    install
};
