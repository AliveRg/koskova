<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <RouterView />
    <div
        class="bg-[#1F1F1F] p-[8px] md:p-[40px] lg:p-[80px] lg:pb-[30px] flex relative"
    >
        <div class="container mx-auto flex items-start justify-start relative">
            <!-- Левая сторона с информацией -->
            <div class="text-secondary w-full flex flex-col gap-8">
                <p
                    class="uppercase text-[30px] md:text-[80px] font-montserrat font-extrabold text-white tracking-wider"
                >
                    КОНТАКТЫ
                </p>
                <div
                    class="w-full flex items-start justify-center flex-col md:flex-row md:justify-between font-montserrat text-white gap-4 mb-[50px]"
                >
                    <div
                        class="flex flex-col items-start justify-between h-[100px]"
                    >
                        <p class="text-[21px]">Общие вопросы</p>
                        <div class="flex flex-col items-start justify-start">
                            <a
                                href="tel:+79180573001"
                                class="text-[16px] text-white/60 hover:text-white"
                                >+7 918 057-30-01</a
                            >
                            <a
                                href="mailto:info@platano-fest.ru"
                                class="text-[16px] text-white/60 hover:text-white"
                                >info@platano-fest.ru</a
                            >
                        </div>
                    </div>
                    <div
                        class="flex flex-col items-start justify-between h-[100px]"
                    >
                        <p class="text-[21px]">Подписывайтесь на нас</p>
                        <div class="flex gap-4">
                            <a
                                href="#"
                                class="text-[16px] text-white/60 hover:text-white"
                                >Facebook</a
                            >
                            <a
                                href="#"
                                class="text-[16px] text-white/60 hover:text-white"
                                >Instagram</a
                            >
                            <a
                                href="#"
                                class="text-[16px] text-white/60 hover:text-white"
                                >Twitter</a
                            >
                        </div>
                    </div>
                    <div
                        class="flex flex-col items-start justify-end h-[100px]"
                    >
                        <a
                            href="#"
                            class="text-[16px] text-white/60 hover:text-white"
                            >Политика конфиденциальности</a
                        >
                        <a
                            href="#"
                            class="text-[16px] text-white/60 hover:text-white"
                            >Пользовательское соглашение</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
