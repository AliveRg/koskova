<template>
    <div>
        <div class="main">
            <swiper
                :modules="modules"
                :direction="'vertical'"
                :slides-per-view="1"
                :space-between="0"
                :speed="800"
                :mousewheel="true"
                :autoHeight="true"
                :parallax="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <div
                    slot="container-start"
                    class="parallax-bg"
                    :style="{
                        'background-image':
                            'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                    }"
                    data-swiper-parallax="-23%"
                ></div>
                <swiper-slide>
                    <div class="bg-[#009E5C] h-screen w-screen relative -z-10">
                        <div
                            class="w-full h-full backLuup absolute top-0 left-0"
                        ></div>

                        <div
                            class="w-full h-full backLuup3 absolute top-0 left-0"
                        ></div>
                        <div
                            class="w-full h-full backLuup4 absolute top-0 left-0"
                        ></div>
                        <div
                            class="w-full h-full backLuup2 absolute top-0 left-0"
                        ></div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-[#FFC64F] h-screen w-screen"></div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-[#000] h-screen w-screen"></div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { Thumbs, Mousewheel, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
export default defineComponent({
    data() {},
    setup() {
        return {
            modules: [Mousewheel, Parallax],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper: any) {
            console.log(swiper);
        },
        onSlideChange() {
            console.log("slide change");
        },
    },
});
</script>

<style scoped>
.swiper-slide {
    height: auto !important;
}

.backLuup {
    background-image: url("../assets/img/1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 100%;
}
.backLuup2 {
    background-image: url("../assets/img/2.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 100%;
}
.backLuup3 {
    background-image: url("../assets/img/3.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 100%;
}
.backLuup4 {
    background-image: url("../assets/img/4.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0% 100%;
}
</style>
