<script>
    export default {
        name: 'am-tabs-nav-item',
        props: {
            panel: {}
        },
        render(h) {
            const { panel } = this;

            if (panel.$slots.label) {
                console.log(panel.$slots.label)
            }
            else {
                return panel.label;
            }
        }
    }
</script>