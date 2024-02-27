<template>
    <div>
        <!-- <div
            class="w-full h-[40px] bg-black flex items-center justify-evenly py-[4px] px-[10px] sticky top-0 z-[100] uppercase font-montserrat font-bold"
        >
            <a
                href="#top"
                class="text-white text-lg border-[1px] border-solid border-transparent hover:border-b-[#FFC64F] transition-all"
            >
                топ мероприятия
            </a>
            <a
                href="#info"
                class="text-white text-lg border-[1px] border-solid border-transparent hover:border-b-[#FFC64F] transition-all"
            >
                информация
            </a>
            <a
                href="#news"
                class="text-white text-lg border-[1px] border-solid border-transparent hover:border-b-[#FFC64F] transition-all"
            >
                новости
            </a>
            <a
                href="#price"
                class="text-white text-lg border-[1px] border-solid border-transparent hover:border-b-[#FFC64F] transition-all"
            >
                цены на билеты
            </a>
            <a
                href="#buy"
                class="text-white text-lg border-[1px] border-solid border-transparent hover:border-b-[#FFC64F] transition-all"
            >
                купить билет
            </a>
        </div> -->
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
            id="buy"
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
            <router-link
                to="/about"
                class="uppercase font-montserrat font-bold text-lg md:text-2xl rounded-[40px] border-solid border-[1px] border-white py-[10px] px-[30px] md:py-[15px] md:px-[50px] relative text-white md:hover:bg-white md:hover:text-[#FFC64F] active:text-[#FFC64F] active:bg-white transition-all"
            >
                купить билет
            </router-link>
        </div>
        <div class="">
            <div
                class="bg-[#FFC64F] p-[8px] pb-[60px] md:p-[40px] lg:p-[80px] flex flex-col gap-[80px]"
                id="top"
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
                    <div
                        class="relative"
                        @mouseenter="visibleInf(1)"
                        @mouseleave="visibleInf(1)"
                    >
                        <div
                            class="galary h-[400px] bg-[url('https://i.pinimg.com/564x/28/4e/42/284e42dbed7609a3973822562334c85a.jpg')]"
                            :class="
                                card[1]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[1] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(1)"
                                    :class="
                                        btn[1] ? 'bg-white text-[#FFC64F]' : ''
                                    "
                                    type="button"
                                    class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div
                            class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                        >
                            <p
                                class="text-[#fff] tont-montserrat text-5xl font-bold rotate-[3deg] text-center group-hover:rotate-[0deg] origin-bottom-left"
                            >
                                Скорость <br />
                                В формуле 1
                            </p>
                        </div>
                    </div>
                    <div
                        class="relative"
                        @mouseenter="visibleInf(2)"
                        @mouseleave="visibleInf(2)"
                    >
                        <div
                            class="galary h-[400px] bg-[url('https://i.pinimg.com/564x/11/dc/09/11dc09c6ef7b9d3d34ff94f8adb3883b.jpg')]"
                            :class="
                                card[2]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[2] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(2)"
                                    :class="
                                        btn[2] ? 'bg-white text-[#FFC64F]' : ''
                                    "
                                    type="button"
                                    class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div
                            class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                        >
                            <p
                                class="text-[#fff] font-montserrat text-5xl font-bold rotate-[0deg] text-center group-hover:rotate-[5deg] origin-bottom-left"
                            >
                                Битвы <br />
                                Танцев
                            </p>
                        </div>
                    </div>
                    <div
                        class="relative"
                        @mouseenter="visibleInf(3)"
                        @mouseleave="visibleInf(3)"
                    >
                        <div
                            class="galary h-[400px] bg-[url('https://i.pinimg.com/736x/44/b4/ec/44b4ecdb943d36c2b1087f2fde2e3fb7.jpg')]"
                            :class="
                                card[3]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[3] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(3)"
                                    :class="
                                        btn[3] ? 'bg-white text-[#FFC64F]' : ''
                                    "
                                    type="button"
                                    class="font-montserrat font-bold text-5xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div
                            class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                        >
                            <p
                                class="text-[#fff] font-montserrat text-5xl font-bold rotate-[0deg] text-center group-hover:rotate-[5deg] origin-bottom-left"
                            >
                                Марафон 42км
                            </p>
                        </div>
                    </div>
                </div>
                <h3
                    class="text-white font-extrabold font-blackops text-4xl md:text-6xl pt-[20px] md:pt-[40px]"
                >
                    TOP
                    <span class="font-montserrat text-2xl md:text-4xl">
                        мероприятий за неделю</span
                    >
                </h3>
                <div
                    class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14"
                >
                    <div
                        class="relative flex flex-col items-center"
                        @mouseenter="visibleInf(4)"
                        @mouseleave="visibleInf(4)"
                    >
                        <div
                            class="galary w-full h-[200px] bg-[url('https://i.pinimg.com/564x/bb/b4/43/bbb443b10b6605db1ec9beec3c536ae0.jpg')]"
                            :class="
                                card[4]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[4] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(4)"
                                    :class="
                                        btn[4] ? 'bg-white text-[#FFC64F]' : ''
                                    "
                                    type="button"
                                    class="font-montserrat font-bold text-xl md:text-2xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div
                            class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                        >
                            <p
                                class="text-[#fff] font-montserrat text-xl md:text-2xl font-bold rotate-[0deg] group-hover:rotate-[-2deg] text-center"
                            >
                                Футбольные матчи
                            </p>
                        </div>
                    </div>
                    <div
                        class="relative flex flex-col items-center"
                        @mouseenter="visibleInf(5)"
                        @mouseleave="visibleInf(5)"
                    >
                        <div
                            class="galary w-full h-[200px] bg-[url('https://i.pinimg.com/564x/2e/f7/c7/2ef7c7d16d76622d83e3e4152f07a426.jpg')]"
                            :class="
                                card[5]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[5] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(5)"
                                    :class="
                                        btn[5] ? 'bg-white text-[#FFC64F]' : ''
                                    "
                                    type="button"
                                    class="font-montserrat font-bold text-xl md:text-2xl px-[20px] py-[15px] border-[1px] border-white border-solid active:bg-white active:text-[#FFC64F] md:hover:text-[#FFC64F] md:hover:bg-white"
                                >
                                    Подробнее
                                </button>
                            </div>
                        </div>

                        <div
                            class="absolute -bottom-10 left-0 right-0 py-2 px-4"
                        >
                            <p
                                class="text-[#fff] font-montserrat text-xl md:text-2xl font-bold rotate-[0deg] text-center group-hover:rotate-[-2deg]"
                            >
                                Киберспорт
                            </p>
                        </div>
                    </div>
                    <div
                        class="relative flex flex-col items-center"
                        @mouseenter="visibleInf(6)"
                        @mouseleave="visibleInf(6)"
                    >
                        <div
                            class="galary w-full h-[200px] bg-[url('https://i.pinimg.com/564x/c1/d3/de/c1d3deb897eec2a9eb33a5741b8b4844.jpg')]"
                            :class="
                                card[6]
                                    ? 'rotate-[1deg] backdrop-brightness-30'
                                    : 'rotate-[0deg]'
                            "
                        >
                            <div
                                class="text-white bg-black/60 w-full h-full flex-col items-center justify-center gap-[20px]"
                                :class="card[6] ? 'flex' : 'flex md:hidden'"
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
                                    @click="btnAct(6)"
                                    :class="
                                        btn[6] ? 'bg-white text-[#FFC64F]' : ''
                                    "
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
                                Just Dens
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="min-h-screen bg-[#FFC64F] p-[8px] pb-[60px] md:p-[40px] lg:p-[80px] flex relative"
            id="info"
        >
            <div
                class="w-full h-full backLuupunder absolute top-0 left-0"
            ></div>
            <div
                class="container mx-auto flex items-start justify-start relative"
            >
                <!-- Левая сторона с информацией -->
                <div class="text-secondary lg:w-1/3 flex flex-col gap-8">
                    <p
                        class="uppercase text-[42px] md:text-[80px] font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Информация
                    </p>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 relative"
                    >
                        <p
                            class="text-[22px] md:text-[42px] font-montserrat font-extrabold text-black tracking-wider"
                        >
                            Монако, Рио-де-Жанейро, <br />Токио, Нью-Йорк, Китай
                        </p>
                        <p
                            class="text-[13px] md:text-[16px] font-montserrat font-extrabold text-white tracking-wider backdrop-blur-lg p-3 rounded-md"
                        >
                            Неповторимый опыт для любителей автоспорта, Эмоции
                            от энергии и страсти бразильских болельщиков.
                        </p>
                        <p
                            class="text-[16px] md:text-[21px] font-montserrat font-extrabold text-black tracking-wider"
                        >
                            Каждый день заполнен разнообразием спортивных
                            испытаний и эмоций, и восторгом от культурного опыта
                            в Токио.
                        </p>
                        <p
                            class="text-[13px] md:text-[16px] font-montserrat font-extrabold text-white tracking-wider backdrop-blur-lg p-3 rounded-md"
                        >
                            Участие в марафоне в Нью-Йорке - это погружение в
                            энергию этого мегаполиса. Ощутите атмосферу восторга
                            и напряжения, когда профессиональные игроки
                            демонстрируют свои навыки на больших экранах, а
                            толпа болельщиков поддерживает их.
                        </p>
                    </div>
                </div>
                <!-- Правая сторона с картинкой -->
            </div>
        </div>
        <div
            class="min-h-screen bg-[#FEF2D9] p-[8px] pb-[60px] md:p-[40px] lg:p-[80px] flex relative"
            id="news"
        >
            <div
                class="w-full h-full backLuupunder2 absolute top-0 left-0"
            ></div>
            <div
                class="container mx-auto flex flex-col items-start justify-start relative"
            >
                <!-- Левая сторона с информацией -->
                <div class="text-secondary w-1/3 flex flex-col gap-8">
                    <p
                        class="uppercase text-[42px] md:text-[80px] font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Новости
                    </p>
                </div>
                <!-- Правая сторона с картинкой -->
                <div
                    class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
                >
                    <!-- Пример новости -->
                    <div
                        v-for="(news, index) in newsList"
                        :key="index"
                        class="bg-white p-4 rounded-lg shadow-md relative group"
                    >
                        <img
                            :src="news.image"
                            alt="News Image"
                            class="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div class="mt-4">
                            <marquee
                                onMouseOver="this.stop()"
                                onMouseOut="this.start()"
                                class="text-lg font-semibold truncate"
                            >
                                {{ news.title }}
                            </marquee>
                            <p
                                class="text-gray-600 mt-2 max-h-[350px] overflow-y-scroll"
                            >
                                {{ news.description }}
                            </p>
                        </div>
                        <a
                            :href="news.link"
                            class="absolute top-2 left-2 w-[40px] bg-[#FFC64F] rounded-[10px] p-2 group-hover:scale-[110%] transition-all"
                        >
                            <img
                                class="w-full"
                                src="https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477204-share2_78604.png"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="min-h-screen bg-[#FFC64F] p-[8px] pb-[60px] md:p-[40px] lg:p-[80px] flex relative"
            id="price"
        >
            <div
                class="container mx-auto flex flex-col items-start justify-start relative gap-12"
            >
                <!-- Левая сторона с информацией -->
                <div class="text-secondary flex flex-col gap-8">
                    <p
                        class="uppercase text-[42px] md:text-[80px] font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Цены на билеты
                    </p>
                    <p
                        class="text-[16px] md:w-2/3 font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Цены увеличиваются по датам и квотам. На каждую ценовую
                        категорию выделено ограниченное колличество билетов. Как
                        только билеты в категории заканчваются — цена
                        увеличивается.
                    </p>
                </div>

                <div
                    class="w-full grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8"
                >
                    <div
                        v-for="item in tickers"
                        :key="item.id"
                        class="w-full bg-white relative rounded-lg flex flex-col md:flex-row"
                    >
                        <div
                            class="uppercase md:w-2/3 flex flex-col items-center font-montserrat font-medium text-black p-[15px] border-dashed md:border-r-2 md:border-r-slate-300 border-b-2 md:border-b-slate-300"
                        >
                            <p class="text-start w-full pb-[30px]">
                                {{ item.date }} / {{ item.map }}
                            </p>
                            <p class="text-[24px] text-center w-full">
                                {{ item.tarif }} <br />{{ item.numEvent }}
                            </p>
                            <p class="text-[9px] text-center w-full">
                                МЕСТО-{{ item.plase }} / бесплатные напитки / 1
                                КВЕСТ
                            </p>
                        </div>
                        <div
                            class="md:w-1/3 flex md:flex-col items-center justify-center gap-4 m-3"
                        >
                            <button
                                type="button"
                                class="font-blackops text-white text-[10px] bg-[#FFC64F] rounded-[150px] py-[10px] px-[50px]"
                            >
                                buy ticket
                            </button>
                            <p class="text-[9px] font-montserrat text-black">
                                За 30 дней — {{ item.price[0] }} ₽
                            </p>
                            <p class="text-[9px] font-montserrat text-black/50">
                                За 20 дней — {{ item.price[1] }} ₽
                            </p>
                            <p class="text-[9px] font-montserrat text-black/30">
                                За 10 дней — {{ item.price[2] }} ₽
                            </p>
                        </div>
                    </div>
                </div>
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
            card: [false, false, false, false, false, false],
            btn: [false, false, false, false, false, false],
            tickers: [
                {
                    id: 1,
                    date: "02.09.2024",
                    map: "шанхай",
                    tarif: "Базовый",
                    plase: "Стандарт",
                    numEvent: "одно мероприятие",
                    price: [1000, 1500, 2000],
                },
                {
                    id: 2,
                    date: "02.09.2024",
                    map: "шанхай",
                    tarif: "полный",
                    plase: "VIP",
                    numEvent: "два мероприятия",
                    price: [2000, 2500, 3000],
                },
                {
                    id: 3,
                    date: "22.04.2024",
                    map: "дюрсо",
                    tarif: "Базовый",
                    plase: "Стандарт",
                    numEvent: "одно мероприятие",
                    price: [1000, 1500, 2000],
                },
                {
                    id: 4,
                    date: "22.04.2024",
                    map: "дюрсо",
                    tarif: "полный",
                    plase: "VIP",
                    numEvent: "два мероприятия",
                    price: [2000, 2500, 3000],
                },
            ],
            newsList: [
                {
                    title: "Мадридский «Реал» с минимальным счётом обыграл «Севилью» благодаря голу Модрича",
                    description:
                        "На стадионе «Сантьяго Бернабеу» завершился матч 26-го тура испанской Примеры, в котором мадридский «Реал» принимал «Севилью». Хозяева одержали победу со счётом 1:0.",
                    link: "https://news.sportbox.ru/Vidy_sporta/Futbol/Evropejskie_chempionaty/Ispaniya/spbnews_NI2021978_Gol_Modricha_prines_Realu_pobedu_nad_Seviljej_v_matche_chempionata_Ispanii#:~:text=%D0%9C%D0%B0%D0%B4%D1%80%D0%B8%D0%B4%D1%81%D0%BA%D0%B8%D0%B9%20%C2%AB%D0%A0%D0%B5%D0%B0%D0%BB%C2%BB%20%D0%BD%D0%B0%20%D1%81%D0%B2%D0%BE%D0%B5%D0%BC%20%D0%BF%D0%BE%D0%BB%D0%B5,24)%20%D0%B8%D0%B4%D0%B5%D1%82%2015%E2%80%91%D0%B9.",
                    image: "https://img.championat.com/s/1350x900/news/big/b/q/madridskij-real-s-minimalnym-schyotom-obygral-sevilyu-blagodarya-golu-modricha_1708911816615419232.jpg",
                },
                {
                    title: "Киев заочно приговорил Дениса Майданова к 15 годам колонии за песню 'Сарматушка'",
                    description:
                        "Певец и депутат Госдумы Денис Майданов получил на Украине 15 лет лишения свободы за песню 'Сарматушка', которую он написал в соавторстве с политиком Дмитрием Рогозиным.",
                    image: "https://www.m24.ru/b/d/nBkSUhL2h1Ammca0Jr6BrNOp2Z3z8Zj21iDEh_fH_nKUPXuaDyXTjHou4MVO6BCVoZKf9GqVe5Q_CPawk214LyWK9G1N5ho=U_Lz9r60VBtwskcqnvmHng.jpg",
                    link: "https://www.m24.ru/news/shou-biznes/21022024/668064",
                },
                {
                    title: "Интервью с вице-чемпионом Туринг-Лайта",
                    description:
                        "В преддверии сезона мы открываем цикл интервью с одними из самых ярких пилотов российского кольца. И сегодня поговорим с Егором Саниным, который известен болельщикам как самый молодой победитель Кубка России",
                    image: "https://static.tildacdn.com/tild3161-3462-4435-b866-373962366161/MaratDaminov_5RCRS_N.jpg",
                    link: "https://raf-rcrs.ru/tpost/z5z8ekaih1-intervyu-s-vitse-chempionom-turing-laita",
                },
                {
                    title: "Пилоты на машинах TCR с DSG разыграют Кубок SMP Racing",
                    description:
                        "В новом сезоне участники серии СМП РСКГ Туринг могут стартовать на автомобилях международной категории TCR, оснащенных не только секвентальными коробками передач, но и роботизированными агрегатами типа DSG.",
                    image: "https://static.tildacdn.com/tild3933-3433-4662-b536-616539666462/MaratDaminov_4RCRS_I.jpg",
                    link: "https://raf-rcrs.ru/tpost/2ch1oxb2b1-piloti-na-mashinah-tcr-s-dsg-razigrayut",
                },
                {
                    title: "Календарь СМП РСКГ Формула в 2023 году состоит из трех этапов",
                    description:
                        "Пилоты болидов класса Формула 4 стартуют в рамках проекта СМП РСКГ Формула на трех этапах совместно с участниками кузовных классов СМП РСКГ Туринг.",
                    image: "https://static.tildacdn.com/tild6364-6339-4965-a662-373039666262/Danil_Kolodin_RSKG_N.jpg",
                    link: "https://raf-rcrs.ru/tpost/mim2xl4841-kalendar-smp-rskg-formula-v-2023-godu-so",
                },
                {
                    title: "Есть сотня! Кучеров достиг знаковой отметки и оторвался от конкурентов",
                    description:
                        "Гонка за первое место в списке лучших бомбардиров — одна из главных интриг регулярного чемпионата НХЛ. Нэйтан Маккиннон и Никита Кучеров сменяют друг друга на вершине, но и Коннор Макдэвид нагоняет конкурентов.",
                    image: "https://ss.sport-express.ru/userfiles/materials/198/1985945/don.jpg",
                    link: "https://www.sport-express.ru/hockey/nhl/reviews/nikita-kucherov-pervym-v-sezone-nhl-nabral-100-ochkov-obzor-matcha-nyu-dzhersi-tampa-i-video-golov-25-fevralya-2024-goda-2183212/#:~:text=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BD%D0%B0%D0%BF%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9%20%C2%AB%D0%A2%D0%B0%D0%BC%D0%BF%D1%8B%C2%BB%20%D0%BD%D0%B0%D0%B1%D1%80%D0%B0%D0%BB%20%D1%87%D0%B5%D1%82%D1%8B%D1%80%D0%B5,%D1%81%20%C2%AB%D0%9D%D1%8C%D1%8E%2D%D0%94%D0%B6%D0%B5%D1%80%D1%81%D0%B8%C2%BB.&text=%D0%93%D0%BE%D0%BB%D1%8B%3A%20%D0%A5%D0%B5%D0%B4%D0%BC%D0%B0%D0%BD%20%E2%80%94%2010%20(%D0%9A%D1%83%D1%87%D0%B5%D1%80%D0%BE%D0%B2,%3A15%20%E2%80%94%200%3A2.",
                },
                {
                    title: "«Ливерпуль» победил «Челси» и ВАР. Клопп взял трофей в последний сезон на «Энфилде»",
                    description:
                        "Салах, Нуньес, Жота, Александер-Арнолд, Собослаи, Алиссон, Матип, Джонс, Алькантара, Байчетич. Это — список травмированных футболистов «Ливерпуля», а не его стартовый состав на финал Кубка лиги. ",
                    image: "https://ss.sport-express.ru/userfiles/materials/198/1985928/volga.jpg",
                    link: "https://www.sport-express.ru/football/england/reviews/liverpul-pobedil-chelsi-obzor-finala-kubka-angliyskoy-ligi-25-fevralya-2024-2183169/#:~:text=%D0%9A%D0%BB%D0%BE%D0%BF%D0%BF%20%D0%B2%D0%B7%D1%8F%D0%BB%20%D1%82%D1%80%D0%BE%D1%84%D0%B5%D0%B9%20%D0%B2%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9%20%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%20%D0%BD%D0%B0%20%C2%AB%D0%AD%D0%BD%D1%84%D0%B8%D0%BB%D0%B4%D0%B5%C2%BB&text=%D0%97%D0%B0%D1%89%D0%B8%D1%82%D0%BD%D0%B8%D0%BA%20%C2%AB%D0%9B%D0%B8%D0%B2%D0%B5%D1%80%D0%BF%D1%83%D0%BB%D1%8F%C2%BB%20%D0%92%D0%B8%D1%80%D0%B4%D0%B6%D0%B8%D0%BB%20%D0%B2%D0%B0%D0%BD%20%D0%94%D0%B5%D0%B9%D0%BA,%D0%9A%D1%83%D0%B1%D0%BA%D0%B0%20%D0%BB%D0%B8%D0%B3%D0%B8%20%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%20%C2%AB%D0%A7%D0%B5%D0%BB%D1%81%D0%B8%C2%BB.&text=%D0%9A%D1%83%D0%B1%D0%BE%D0%BA%20%D0%BB%D0%B8%D0%B3%D0%B8%20%E2%80%94%20%D1%83%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D1%85.",
                },

                // Добавьте остальные новости по аналогии
            ],
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
        visibleInf(el: number) {
            this.card[el] = !this.card[el];
        },
        btnAct(el: number) {
            this.btn.forEach((element) => {
                element = false;
            });
            this.btn[el] = !this.btn[el];
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
.backLuupunder {
    background-image: url("../assets/img/Group3.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 100% 100%;
    background-attachment: fixed;
}
.backLuupunder2 {
    background-image: url("../assets/img/Group5.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 0%;
    background-attachment: fixed;
}

.ssal {
    backdrop-filter: blur(20px);
}
</style>
