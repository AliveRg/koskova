<template>
    <div>
        <!-- <swiper
                :modules="modules"
                :direction="'vertical'"
                :slides-per-view="'auto'"
                :space-between="0"
                :freeMode="FreeMode"
                :speed="1000"
                :mousewheel="true"
                :autoHeight="true"
                :pagination="{
                    clickable: true,
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide> </swiper-slide>

                <swiper-slide>
                    <div class="bg-[#FFC64F] h-screen w-screen"></div>
                </swiper-slide>
            </swiper> -->
        <div
            class="bg-[#009E5C] h-screen w-screen relative flex flex-col items-center justify-center gap-[80px] z-10"
        >
            <div class="w-full h-full backLuup absolute top-0 left-0"></div>

            <div class="w-full h-full backLuup3 absolute top-0 left-0"></div>
            <div class="w-full h-full backLuup4 absolute top-0 left-0"></div>
            <div class="w-full h-full backLuup2 absolute top-0 left-0"></div>
            <div
                class="text-5xl md:text-8xl font-blackops relative text-white font-extrabold"
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
                class="uppercase font-montserrat font-bold text-2xl rounded-[40px] border-solid border-[1px] border-white py-[15px] px-[50px] relative text-white md:hover:bg-white active:bg-white lg:hover:text-[#FFC64F] active:text-[#FFC64F] transition-all"
                type="button"
            >
                забронировать билет
            </button>
        </div>
        <div
            class="bg-[#FFC64F] w-screen p-[8px] md:p-[40px] lg:p-[80px] flex flex-col gap-[80px]"
        >
            <h2
                class="text-white font-extrabold font-blackops text-6xl md:text-8xl pt-[40px] md:pt-[80px]"
            >
                TOP
                <span class="font-montserrat text-4xl md:text-6xl">
                    мероприятий за месяц</span
                >
            </h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8"
            >
                <!-- Картинка 1 -->
                <div class="relative group">
                    <div
                        class="galary rotate-[0deg] group-hover:rotate-[1deg] group-hover:backdrop-brightness-50 h-[400px] bg-[url('https://i.pinimg.com/564x/28/4e/42/284e42dbed7609a3973822562334c85a.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p class="font-blackops text-5xl text-white">
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div class="absolute -bottom-10 left-0 right-0 py-2 px-4">
                        <p
                            class="text-[#fff] tont-montserrat text-5xl font-bold rotate-[3deg] text-center group-hover:rotate-[0deg] origin-bottom-left"
                        >
                            Скорость <br />
                            В формуле 1
                        </p>
                    </div>
                </div>
                <!-- Картинка 2 -->
                <div class="relative group">
                    <div
                        class="galary rotate-[2deg] group-hover:rotate-0 group-hover:backdrop-brightness-50 h-[400px] bg-[url('https://i.pinimg.com/564x/11/dc/09/11dc09c6ef7b9d3d34ff94f8adb3883b.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p class="font-blackops text-5xl text-white">
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div class="absolute -bottom-10 left-0 right-0 py-2 px-4">
                        <p
                            class="text-[#fff] font-montserrat text-5xl font-bold rotate-[0deg] text-center group-hover:rotate-[5deg] origin-bottom-left"
                        >
                            Танцевальные <br />
                            батлы
                        </p>
                    </div>
                </div>
                <!-- Картинка 3 -->
                <div class="relative group">
                    <div
                        class="galary rotate-[-2deg] group-hover:rotate-0 group-hover:backdrop-brightness-50 h-[400px] bg-[url('https://i.pinimg.com/736x/44/b4/ec/44b4ecdb943d36c2b1087f2fde2e3fb7.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p class="font-blackops text-5xl text-white">
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div class="absolute -bottom-10 left-0 right-0 py-2 px-4">
                        <p
                            class="text-[#fff] font-montserrat text-5xl font-bold rotate-[0deg] text-center group-hover:rotate-[5deg] origin-bottom-left"
                        >
                            Выдержка <br />
                            марафон 42км
                        </p>
                    </div>
                </div>
                <!-- Добавьте здесь больше блоков для других изображений -->
            </div>
            <div
                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14"
            >
                <!-- Картинка 1 -->
                <div class="relative flex flex-col items-center group">
                    <div
                        class="galary rotate-[2deg] group-hover:rotate-0 group-hover:backdrop-brightness-50 w-full h-[200px] bg-[url('https://i.pinimg.com/564x/bb/b4/43/bbb443b10b6605db1ec9beec3c536ae0.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p
                                class="font-blackops text-xl md:text-2xl text-white"
                            >
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-xl md:text-2xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div class="absolute -bottom-10 left-0 right-0 py-2 px-4">
                        <p
                            class="text-[#fff] font-montserrat text-xl md:text-2xl font-bold rotate-[0deg] group-hover:rotate-[-2deg] text-center"
                        >
                            Футбол <br />
                            футбольные матчи
                        </p>
                    </div>
                </div>
                <!-- Картинка 2 -->
                <div class="relative flex flex-col items-center group">
                    <div
                        class="galary rotate-[2deg] group-hover:rotate-0 group-hover:backdrop-brightness-50 w-full h-[200px] bg-[url('https://i.pinimg.com/564x/2e/f7/c7/2ef7c7d16d76622d83e3e4152f07a426.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p
                                class="font-blackops text-xl md:text-2xl text-white"
                            >
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-xl md:text-2xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>

                    <div class="absolute -bottom-10 left-0 right-0 py-2 px-4">
                        <p
                            class="text-[#fff] font-montserrat text-xl md:text-2xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                        >
                            Киберспорт <br />
                            Онлайн соревнования
                        </p>
                    </div>
                </div>
                <!-- Картинка 3 -->
                <div class="relative flex flex-col items-center group">
                    <div
                        class="galary rotate-[2deg] group-hover:rotate-0 group-hover:backdrop-brightness-50 w-full h-[200px] bg-[url('https://i.pinimg.com/564x/c1/d3/de/c1d3deb897eec2a9eb33a5741b8b4844.jpg')]"
                    >
                        <div
                            class="group-hover:flex hidden text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                        >
                            <p
                                class="font-blackops text-xl md:text-2xl text-white"
                            >
                                22
                                <span class="font-montserrat font-bold"
                                    >июня</span
                                >
                                <br />
                                <span class="text-[#FFC64F]">22:00</span>
                            </p>
                            <button
                                type="button"
                                class="font-montserrat font-bold text-xl md:text-2xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                            >
                                Подробнее
                            </button>
                        </div>
                    </div>
                    <div
                        class="absolute -bottom-10 left-0 right-0 py-2 px-4 group-hover:rotate-[-2deg]"
                    >
                        <p
                            class="text-[#fff] font-montserrat text-xl md:text-2xl font-bold text-center"
                        >
                            Just Dens <br />
                            битва за кубок
                        </p>
                    </div>
                </div>

                <!-- Добавьте здесь больше блоков для других изображений -->
            </div>
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
    background-attachment: fixed;
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
