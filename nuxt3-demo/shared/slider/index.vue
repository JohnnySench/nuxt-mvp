<script setup lang="ts" generic="T">
interface IProps {
  slides: Array<T>
}
const props = defineProps<IProps>()

const prev = shallowRef<HTMLElement | null>(null)
const next = shallowRef<HTMLElement | null>(null)
const swiperOptions = computed(() => {
  return {
    speed: 1200,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesToShow: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    navigation: {
      nextEl: next.value,
      prevEl: prev.value,
    },
    modules: [SwiperPagination, SwiperNavigation],
    class: 'shared-slider'
  }
})
</script>

<template>
  <swiper v-bind="swiperOptions">
    <div class="nav__container">
      <div ref="prev" class="prev-arrow">
        <svgo-arrow-left />
      </div>
      <div ref="next" class="next-arrow">
        <svgo-arrow-right />
      </div>
    </div>
    <swiper-slide v-for="(slide, slideIndex) in slides" :key="slideIndex">
      <slot name="content" v-bind="{slide, slideIndex}"/>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.shared-slider {
  position: static;
}
.nav__container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  left: -26px;
  right: -16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  pointer-events: none;
}

.prev-arrow,
.next-arrow {
  pointer-events: auto;
  cursor: pointer;
  width: 52px;
  height: 52px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
}

</style>