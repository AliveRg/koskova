<template>
    <div class="w-screen bg-[#FFC64F]">
        <div
            class="min-h-screen flex flex-col gap-10 items-center justify-center"
        >
            <div
                class="container mx-auto flex items-start justify-start relative p-8 shadow-md rounded-md"
            >
                <!-- Левая сторона с информацией -->
                <div class="text-secondary w-3/4 flex flex-col gap-8">
                    <h1
                        class="text-[42px] font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Добро пожаловать на страницу мероприятий!
                    </h1>
                    <p
                        class="text-[16px] font-montserrat font-extrabold text-black tracking-wider"
                    >
                        Здесь вы можете просмотреть все мероприятия, их цены,
                        информацию и даты проведения:
                    </p>
                    <router-link
                        to="/"
                        replace
                        class="text-[42px] font-montserrat font-extrabold tracking-wider bg-[#1F1F1F]/80 text-white px-4 py-2 rounded-md mr-2 hover:bg-[#1F1F1F] text-center"
                    >
                        Вернуться на главную
                    </router-link>
                </div>
                <!-- Правая сторона с картинкой -->
            </div>
            <div class="flex flex-col items-start w-full">
                <div
                    v-for="(event, index) in events"
                    :key="index"
                    class="bg-[#FEF2D9] mb-6 container mx-auto flex flex-col items-start justify-start relative p-8 shadow-md rounded-md"
                >
                    <h2 class="text-lg font-bold">{{ event.name }}</h2>
                    <p class="text-gray-500">
                        Дата: {{ event.date }}, Цена: {{ event.price }}
                    </p>
                    <p class="text-gray-700">{{ event.description }}</p>
                    <p class="text-gray-700">{{ event.location }}</p>
                    <div class="mt-4">
                        <button
                            class="bg-[#1F1F1F]/80 text-white px-4 py-2 rounded-md mr-2 hover:bg-[#1F1F1F]"
                            @click="showModalI(event)"
                        >
                            Купить билет
                        </button>
                        <button
                            @click="showModal(event)"
                            class="bg-[#375A44]/70 text-white px-4 py-2 rounded-md hover:bg-[#375A44]"
                        >
                            Узнать подробнее
                        </button>
                    </div>
                </div>
            </div>
            <div
                v-if="selectedEvent"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
                <div
                    class="bg-white p-8 max-w-4xl mx-auto rounded-md shadow-md"
                >
                    <h2 class="text-lg font-bold">{{ selectedEvent.name }}</h2>
                    <img
                        :src="selectedEvent.image"
                        class="w-full h-auto rounded-md mb-4"
                        alt="Изображение мероприятия"
                    />
                    <p class="text-gray-500">
                        Дата: {{ selectedEvent.date }}, Цена:
                        {{ selectedEvent.price }}
                    </p>
                    <p class="text-gray-700">{{ selectedEvent.description }}</p>
                    <p class="text-gray-700">{{ selectedEvent.location }}</p>
                    <div class="mt-4">
                        <p class="text-gray-700">{{ selectedEvent.content }}</p>
                        <button
                            @click="closeModal"
                            class="bg-[#375A44]/70 text-white px-4 py-2 rounded-md mt-4 hover:bg-[#375A44]"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="selectedEventI"
            class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
            <div class="bg-white p-8 max-w-4xl mx-auto rounded-md shadow-md">
                <h2 class="text-lg font-bold">{{ selectedEventI.name }}</h2>
                <p class="text-gray-500">
                    Дата: {{ selectedEventI.date }}, Цена:
                    {{ selectedEventI.price }}
                </p>
                <p class="text-gray-700">{{ selectedEventI.description }}</p>
                <p class="text-gray-700">{{ selectedEventI.location }}</p>
                <div class="mt-4">
                    <p class="text-gray-700">{{ selectedEventI.content }}</p>
                    <!-- Добавляем данные о покупаемом билете -->
                    <p class="text-gray-700">
                        Вы приобретаете билет на "{{ selectedEventI.name }}"
                    </p>
                    <p class="text-gray-700">
                        Цена: {{ selectedEventI.price }}
                    </p>
                    <!-- Добавляем поля для ввода информации о покупателе -->
                    <div class="mt-4">
                        <div class="relative p-6 flex-auto">
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Имя:</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    v-model="formData.name"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="surname"
                                    class="block text-sm font-medium text-gray-700"
                                    >Фамилия:</label
                                >
                                <input
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    v-model="formData.surname"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="patronymic"
                                    class="block text-sm font-medium text-gray-700"
                                    >Отчество:</label
                                >
                                <input
                                    type="text"
                                    id="patronymic"
                                    name="patronymic"
                                    v-model="formData.patronymic"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="phone"
                                    class="block text-sm font-medium text-gray-700"
                                    >Телефон:</label
                                >
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    v-model="formData.phone"
                                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- Добавьте другие поля для ввода информации о покупателе, если необходимо -->
                    <!-- Кнопка для завершения покупки -->
                    <button
                        @click="buyTicket"
                        class="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
                    >
                        Купить
                    </button>
                    <button
                        @click="closeModalI"
                        class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4 hover:bg-gray-400 ml-2"
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    components: {
        Event,
    },
    data() {
        return {
            selectedEvent: null,
            selectedEventI: null,
            events: [
                {
                    name: "Чемпионат мира по футболу",
                    date: "25.06.2024",
                    price: "1500 руб.",
                    location: 'Стадион "Лужники", Москва, Россия',
                    description:
                        "Самое престижное событие в мире футбола, собирающее лучшие команды со всего мира!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Чемпионат мира по футболу - это главное событие в мире футбола, объединяющее лучшие команды из разных стран. Зрители могут насладиться увлекательными матчами и испытать атмосферу настоящего спортивного праздника.",
                },
                {
                    name: "Олимпийские игры",
                    date: "08.08.2024",
                    price: "2000 руб.",
                    location: "Различные локации, Париж, Франция",
                    description:
                        "Самое престижное спортивное событие в мире, объединяющее спортсменов из всех уголков планеты!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Олимпийские игры - это глобальное спортивное событие, собирающее лучших спортсменов со всего мира. Участие в Олимпийских играх представляет честь для каждого спортсмена, а зрители могут насладиться неповторимой атмосферой соревнований и гордиться успехами своих стран.",
                },
                {
                    name: "Формула 1 Гран При",
                    date: "20.09.2024",
                    price: "1200 руб.",
                    location:
                        'Гоночная трасса "Спа-Франкоршамп", Брюссель, Бельгия',
                    description:
                        "Эмоциональные гонки, привлекающие миллионы зрителей со всего мира!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Гран-при Формулы-1 - это одно из самых престижных автоспортивных соревнований в мире. Здесь собираются лучшие гонщики и команды, чтобы сразиться за звание победителя в самых динамичных и захватывающих гонках на планете.",
                },
                {
                    name: 'Теннисный турнир "Уимблдон"',
                    date: "05.07.2024",
                    price: "1000 руб.",
                    location: 'Клуб "Алл Энглэнд", Лондон, Великобритания',
                    description:
                        "Самый престижный теннисный турнир в мире, привлекающий внимание публики своей атмосферой и традициями!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Уимблдон - это самый престижный теннисный турнир, который привлекает внимание зрителей своей историей и атмосферой. Лучшие теннисисты мира сражаются за титул чемпиона на знаменитых газонах клуба 'Алл Энглэнд' в Лондоне.",
                },
                {
                    name: "Чемпионат мира по баскетболу",
                    date: "10.08.2024",
                    price: "800 руб.",
                    location: 'Арена "Мадисон Сквер Гарден", Нью-Йорк, США',
                    description:
                        "Соревнование лучших баскетбольных команд мира, предлагающее захватывающий спортивный опыт!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Чемпионат мира по баскетболу - это соревнование, которое привлекает внимание любителей этого спорта со всего мира. Лучшие баскетбольные команды сражаются за звание чемпиона на арене 'Мадисон Сквер Гарден' в Нью-Йорке, предлагая зрителям захватывающие моменты и эмоции.",
                },

                {
                    name: "Чемпионат мира по хоккею на льду",
                    date: "20.05.2024",
                    price: "1000 руб.",
                    location: 'Ледовый дворец "Барклайс", Нью-Йорк, США',
                    description:
                        "Самое важное событие в мире хоккея, собирающее лучшие команды на ледовой арене!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Чемпионат мира по хоккею на льду - это одно из самых значимых событий в мире хоккея. Лучшие команды собираются на ледовой арене 'Барклайс' в Нью-Йорке, чтобы сразиться за звание чемпиона и предложить зрителям захватывающие игры и незабываемые моменты.",
                },
                {
                    name: "Международный фестиваль кинематографа",
                    date: "02.09.2024",
                    price: "1500 руб.",
                    location: "Каннский палас де фестивал, Канны, Франция",
                    description:
                        "Встречаются знаменитости и кинолюбители со всего мира на этом престижном кинособытии!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Международный фестиваль кинематографа - это встреча знаменитостей и кинолюбителей со всего мира на престижном кинособытии. Здесь представлены лучшие фильмы и произведения искусства киноиндустрии, создавая неповторимую атмосферу волшебства и творчества.",
                },
                {
                    name: "Чемпионат мира по гольфу",
                    date: "12.06.2024",
                    price: "1800 руб.",
                    location:
                        'Поле для гольфа "Ст. Эндрюс", Сент-Эндрюс, Шотландия',
                    description:
                        "Самые талантливые гольфисты мира соревнуются за звание лучшего на этом великолепном поле!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Чемпионат мира по гольфу - это соревнование, в котором участвуют самые талантливые гольфисты мира на великолепном поле для гольфа 'Ст. Эндрюс' в Шотландии. Зрители могут насладиться уникальными моментами игры и наблюдать за борьбой за звание лучшего.",
                },
                {
                    name: "Международный музыкальный фестиваль",
                    date: "30.07.2024",
                    price: "900 руб.",
                    location: "Гранд-парк, Чикаго, США",
                    description:
                        "Три дня музыки и веселья, собирающие лучшие музыкальные группы и артистов со всего мира!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Международный музыкальный фестиваль - это три дня музыки и веселья, собирающие лучшие музыкальные группы и артистов со всего мира в Гранд-парке в Чикаго. Посетители могут насладиться живыми выступлениями и разнообразными музыкальными жанрами, создавая неповторимую атмосферу праздника и радости.",
                },
                {
                    name: "Выставка современного искусства",
                    date: "20.11.2024",
                    price: "600 руб.",
                    location: 'Художественная галерея "Современность", Минск',
                    description:
                        "Изучите работы современных художников и погрузитесь в мир современного искусства!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Выставка современного искусства - это возможность изучить работы современных художников и погрузиться в мир современного искусства в Художественной галерее 'Современность' в Минске. Здесь представлены самые интересные и оригинальные произведения, позволяющие гостям почувствовать силу и красоту современного творчества.",
                },
                {
                    name: "Музыкальный фестиваль",
                    date: "15.12.2024",
                    price: "1200 руб.",
                    location: 'Открытая площадка "Звездный Ковер", Сочи',
                    description:
                        "Насладитесь живой музыкой от известных артистов на берегу моря!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Музыкальный фестиваль - это возможность насладиться живой музыкой от известных артистов на берегу моря на открытой площадке 'Звездный Ковер' в Сочи. Здесь собираются музыкальные группы различных жанров, чтобы подарить зрителям незабываемые моменты и неповторимые впечатления от выступлений.",
                },

                {
                    name: "Комикс-конвент",
                    date: "08.02.2025",
                    price: "900 руб.",
                    location: 'Выставочный центр "Капитан Комикс", Москва',
                    description:
                        "Встречи с авторами комиксов, косплей-конкурсы, продажа коллекционных предметов и многое другое в мире комиксов!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Комикс-конвент - это мероприятие, объединяющее поклонников комиксов, авторов и художников в Выставочном центре 'Капитан Комикс' в Москве. Здесь посетители могут встретиться с авторами комиксов, принять участие в косплей-конкурсах, приобрести коллекционные предметы и насладиться общением с единомышленниками в мире комиксов!",
                },

                {
                    name: "Выставка робототехники",
                    date: "10.04.2025",
                    price: "1000 руб.",
                    location:
                        'Выставочный центр "Будущее Сегодня", Санкт-Петербург',
                    description:
                        "Изучите последние достижения в области робототехники и будущие технологии!",
                    image: "path/to/f1_image.jpg", // путь к изображению мероприятия
                    content:
                        "Выставка робототехники - это возможность изучить последние достижения в области робототехники и будущие технологии в Выставочном центре 'Будущее Сегодня' в Санкт-Петербурге. Здесь представлены инновационные разработки и технологии, позволяющие гостям узнать о будущем мира роботов и автоматизации.",
                },

                // Добавьте здесь свои мероприятия
            ],
            formData: {
                name: "",
                surname: "",
                patronymic: "",
                phone: "",
            },
        };
    },
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
    methods: {
        buyTicket() {
            // Вы можете здесь обработать данные о покупке, например, отправить их на сервер
            console.log("Покупка билета", this.selectedEventI, this.formData);
            // Закрыть модальное окно после завершения покупки
            this.selectedEventI = null;
        },
        showModal(event: any) {
            this.selectedEvent = event;
        },
        showModalI(event: any) {
            this.selectedEventI = event;
        },
        closeModal() {
            this.selectedEvent = null;
        },
        closeModalI() {
            this.selectedEventI = null;
        },
    },
};
</script>
