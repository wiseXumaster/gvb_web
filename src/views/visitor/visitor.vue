<template>
    <div class="visitor">
        <VisitorAside @dataFetched="handleData"/>
        <div class="visitor-right">
            <main class="visitor-main-content">
                <div class="image-gallery">
                    <a-card v-for="(image, index) in images" :key="index" hoverable class="gallery-card">
                        <template #cover>
                            <div class="card-image-container">
                                <img :src="image.url" :alt="image.name" class="card-image" @error="onImageError(index)">
                            </div>
                        </template>
                    </a-card>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useThemeStore } from '@/stores/stores';
import VisitorAside from '@/components/visitor/visitor-aside.vue';
import '@/assets/css/visitor-theme.css';
import { ref } from "vue";

const router = useRouter();
const themeStore = useThemeStore();
const { theme, toggleTheme } = themeStore;
const images = ref([]);
const visible = ref(false);

function onImageError(index) {
    console.warn(`Image at index ${index} failed to load:`, images.value[index].url);
    images.value[index].url = 'path/to/default-image.jpg';
}

const handleData = (fetchedData) => {
    console.log(fetchedData);
    if (fetchedData && fetchedData.data && Array.isArray(fetchedData.data.list)) {
        images.value = fetchedData.data.list.map(item => {
            return { url: item.path, name: item.name, type: item.image_type };
        });
    }
};

function menuClick({ key }) {
    if (key === 'logout') {
        console.log('logout');
        return;
    }
    router.push({ name: key });
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}
</script>