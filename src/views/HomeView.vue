<template>
    <div>
        <div class="main">
            <swiper
                :modules="modules"
                :direction="'vertical'"
                :slides-per-view="'auto'"
                :space-between="0"
                :freeMode="FreeMode"
                :speed="1000"
                :mousewheel="false"
                :autoHeight="true"
                :pagination="{
                    clickable: true,
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div
                        class="bg-[#009E5C] h-screen w-screen relative -z-10 flex flex-col items-center justify-center gap-[80px]"
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
                            class="text-8xl font-blackops relative text-white font-extrabold"
                        >
                            <span
                                >SportOrigin <br />
                                Fest</span
                            >
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
                        <button
                            class="uppercase font-montserrat font-bold text-2xl rounded-[40px] border-solid border-[1px] border-white py-[15px] px-[50px] relative text-white lg:hover:bg-white active:bg-white lg:hover:text-[#FFC64F] active:text-[#FFC64F] transition-all"
                            type="button"
                        >
                            забронировать билет
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div
                        class="bg-[#FFC64F] h-screen w-screen p-[80px] flex flex-col gap-[80px] overflow-y-scroll"
                    >
                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                        >
                            <!-- Картинка 1 -->
                            <div class="relative group">
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 h-[400px] bg-[url('https://i.pinimg.com/564x/66/34/f4/6634f465527283e3a20afacab0d08eaa.jpg')]"
                                ></div>
                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                                >
                                    <p
                                        class="text-[#fff] tont-montserrat text-3xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                                    >
                                        Подпись к изображению 1
                                    </p>
                                </div>
                            </div>
                            <!-- Картинка 2 -->
                            <div class="relative group">
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 h-[400px] bg-[url('https://i.pinimg.com/564x/66/34/f4/6634f465527283e3a20afacab0d08eaa.jpg')]"
                                ></div>
                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                                >
                                    <p
                                        class="text-[#fff] font-montserrat text-3xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                                    >
                                        Подпись к изображению 2
                                    </p>
                                </div>
                            </div>
                            <!-- Картинка 3 -->
                            <div class="relative group">
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 h-[400px] bg-[url('https://i.pinimg.com/564x/66/34/f4/6634f465527283e3a20afacab0d08eaa.jpg')]"
                                ></div>
                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                                >
                                    <p
                                        class="text-[#fff] font-montserrat text-3xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                                    >
                                        Подпись к изображению 3
                                    </p>
                                </div>
                            </div>
                            <!-- Добавьте здесь больше блоков для других изображений -->
                        </div>
                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                        >
                            <!-- Картинка 1 -->
                            <div
                                class="relative flex flex-col items-center group"
                            >
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 w-[200px] h-[200px] bg-[url('https://i.pinimg.com/564x/66/34/f4/6634f465527283e3a20afacab0d08eaa.jpg')]"
                                ></div>
                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                                >
                                    <p
                                        class="text-[#fff] font-montserrat text-3xl font-bold rotate-[0deg] group-hover:rotate-[-2deg] text-center"
                                    >
                                        Подпись к изображению 1
                                    </p>
                                </div>
                            </div>
                            <!-- Картинка 2 -->
                            <div
                                class="relative flex flex-col items-center group"
                            >
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 w-[200px] h-[200px] bg-[url('https://i.pinimg.com/564x/18/d6/aa/18d6aa208569efc10b5cc57bd68a1887.jpg')]"
                                ></div>

                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                                >
                                    <p
                                        class="text-[#fff] font-montserrat text-3xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                                    >
                                        Подпись к изображению 2
                                    </p>
                                </div>
                            </div>
                            <!-- Картинка 3 -->
                            <div
                                class="relative flex flex-col items-center group"
                            >
                                <div
                                    class="galary md:rotate-[2deg] group-hover:rotate-0 w-[200px] h-[200px] bg-[url('https://i.pinimg.com/564x/c1/d3/de/c1d3deb897eec2a9eb33a5741b8b4844.jpg')]"
                                ></div>
                                <div
                                    class="absolute -bottom-10 left-0 right-0 py-2 px-4 group-hover:rotate-[-2deg]"
                                >
                                    <p
                                        class="text-[#fff] font-montserrat text-3xl font-bold text-center"
                                    >
                                        Подпись к изображению 3
                                    </p>
                                </div>
                            </div>
                            <!-- Добавьте здесь больше блоков для других изображений -->
                        </div>
                    </div>
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
import { Thumbs, Mousewheel, Pagination, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
export default defineComponent({
    data() {
        return {
            FreeMode: false,
        };
    },
    setup() {
        return {
            modules: [Mousewheel, Pagination, FreeMode],
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
.galary {
    background-size: cover;
    background-position: center;
}
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
