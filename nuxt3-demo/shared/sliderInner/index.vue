<script setup lang="ts">
interface IProps {
  images: Array<string>
}
const props = defineProps<IProps>()

const swiperOptions = computed(() => {
  return {
    speed: 1200,
    nested: true,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesToShow: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    pagination: {
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
    modules: [SwiperPagination, SwiperNavigation],
    class: 'shared-slider-inner'
  }
})
</script>

<template>
  <swiper v-bind="swiperOptions">
    <swiper-slide v-for="(slideInner, slideInnerIndex) in images" :key="slideInnerIndex">
      <slot name="content" v-bind="{slideInner, slideInnerIndex}"/>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.shared-slider-inner {
  position: static;
}

:deep(.swiper-pagination) {
  position: absolute;

}
:deep(.swiper-pagination-bullet) {
  transform: scale(1);
}

</style>