import { InputGroup } from '../../input';

export default {
    name: 'am-form-group',
    mixins: [ InputGroup ],
    props: {
        formGroup: {
            default: true
        }
    }
};
