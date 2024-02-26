<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <RouterView />
    <div
        class="min-h-screen bg-[#1F1F1F] p-[8px] pb-[60px] md:p-[40px] lg:p-[80px] flex relative"
    >
        <div class="container mx-auto flex items-start justify-start relative">
            <!-- Левая сторона с информацией -->
            <div class="text-secondary w-1/2 flex flex-col gap-8">
                <p
                    class="uppercase text-[30px] md:text-[80px] font-montserrat font-extrabold text-white tracking-wider"
                >
                    КОНТАКТЫ
                </p>
                <div
                    class="flex items-start justify-center flex-col font-montserrat text-white gap-4 mb-[50px]"
                >
                    <div class="flex flex-col items-start justify-start">
                        <p class="text-[21px]">Общие вопросы</p>
                        <a href="" class="text-[16px] text-white/60"
                            >+7 918 057-30-01</a
                        >
                        <a href="" class="text-[16px] text-white/60"
                            >info@platano-fest.ru</a
                        >
                    </div>
                    <div class="flex flex-col items-start justify-start">
                        <p class="text-[21px]">Общие вопросы</p>
                        <a href="" class="text-[16px] text-white/60"
                            >+7 918 057-30-01</a
                        >
                        <a href="" class="text-[16px] text-white/60"
                            >info@platano-fest.ru</a
                        >
                    </div>
                </div>
            </div>
            <!-- Правая сторона с картинкой -->
        </div>
    </div>
</template>

<style scoped></style>
