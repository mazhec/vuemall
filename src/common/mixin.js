import { debounce } from "./utils"
import BackTop from "components/content/backTop/BackTop";
import {BACK_POSITION} from "./const"
export const itemListenerMixin = {
    data() {
        return {
            itemListenerMixin: {}
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 500);

        // 对监听的事件进行保存
        this.itemImgListener = () => {
            refresh();
        };

        this.$bus.$on("itemImageLoad", this.itemImgListener);
    }
}

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        // 返回顶部
        backTop() {
            this.$refs.scroll.scrollTo(0, 0);
        },
        listenShowBackTop(position) {
            this.isShow = -position.y > BACK_POSITION;
        }
    },
}