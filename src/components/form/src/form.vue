<template>
    <form :class="computedClass">
        <slot></slot>
    </form>
</template>

<script>
    export default {
        name: 'am-form',
        props: {
            customClass: String
        },
        computed: {
            computedClass() {
                const classes = [];

                classes.push('am-form');

                if (this.customClass !== undefined) {
                    classes.push(this.customClass);
                }

                return classes.join(' ');
            },
            fields() {
                const arr = [];
                this.$children.forEach((vComponent, index) => {
                    let name = vComponent.$options._componentTag
                    if(name === 'am-input-group' || name === 'am-form-group') {
                        arr.push(vComponent);
                    }
                });
                return arr;
            }
        },
        methods: {
            validate() {
                let pass = true;
                this.fields.forEach((vComponent) => {
                    if (vComponent.isError) {
                        pass = false;
                    }
                    else {
                        vComponent.$children.forEach((_vComponent) => {
                            let name = _vComponent.$options._componentTag;
                            if ([
                                    'am-input', 
                                    'am-radio', 
                                    'am-radio-group', 
                                    'am-checkbox', 
                                    'am-checkbox-gorup', 
                                    'am-select', 
                                    'am-datepicker', 
                                    'am-timepicer'
                                ].includes(name) && !_vComponent.value)
                            {
                                _vComponent.isError = true;
                                pass = false;
                            }
                        });
                    }
                });
                return pass; 
            },
            resetFields() {
                this.fields.forEach((vComponent) => {
                    vComponent.isError = false;
                    vComponent.errMsg = '';
                });
            },
            validateField(prop, callback) {
                this.fields.every((vComponent) => {
                    if (vComponent.prop === prop) {
                        vComponent.$children.every((_vComponent) => {
                            if (_vComponent.name === prop) {
                                callback(_vComponent.value);
                            }
                            return true;
                        });
                        return false;
                    }
                    return true;
                });
            }
        }
    }
</script>
