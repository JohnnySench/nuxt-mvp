<script setup lang="ts">
interface IProps {
  cardInfo: object,
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="directions__card">
    <div class="directions__card--info">
      <span>06.07.2024 - 13.07.2024, 7 ночей, 2 взрослых</span>
      <span>Отель, авиаперелет, трансфер, страховка, виза</span>
    </div>
    <div class="directions__card--price">
      <span>от 569 500 руб</span>
    </div>
    <shared-slider-inner :images="cardInfo?.images">
      <template #content="{slideInner, slideInnerIndex}">
        <div class="directions__card--images">
          <img :src="slideInner" class="directions__card--image" />
        </div>
      </template>
    </shared-slider-inner>
  </div>
</template>

<style scoped lang="scss">
  .directions {
    &__card {
      position: relative;
      height: 350px;
      width: 466px;
      &--info {
        position: absolute;
        overflow: hidden;
        left: 30px;
        top: 30px;
        right: 30px;
        display: flex;
        flex-direction: column;
        z-index: 3;
      }
      &--price {
        position: absolute;
        bottom: 30px;
        right: -10px;
        z-index: 3;
        background-color: $primary-red;
        padding: 10px;
      }
      &--images {
        height: 350px;
        width: 466px;
      }
      &--image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }
  }
</style>