<template>
    <div>
        <div class="main">
            <swiper
                :modules="modules"
                :direction="'vertical'"
                :slides-per-view="1"
                :space-between="0"
                :speed="400"
                :mousewheel="true"
                :autoHeight="true"
                :pagination="{
                    clickable: true,
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div
                        class="bg-[#009E5C] h-screen w-screen relative -z-10 flex items-center justify-center"
                    >
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
                        <div
                            class="text-8xl font-blackops relative text-white font-extrabold max-w-[500px]"
                        >
                            <span>SportOrigin Fest</span>
                            <div
                                class="h-[70px] w-[8px] bg-white inline-block m-4 -mb-[2px]"
                            ></div>
                            <div class="inline-block text-xl -mb-4">
                                <p class="">
                                    главные <br />
                                    мероприятия <br />
                                    года
                                </p>
                            </div>
                        </div>
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
import { Thumbs, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default defineComponent({
    data() {},
    setup() {
        return {
            modules: [Mousewheel, Pagination],
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
.swiper-pagination-bullet {
    background: #fff;
}
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
