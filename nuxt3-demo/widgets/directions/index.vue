<script setup lang="ts">
import directions from "~/mockData/directions.js";

const lazyMatrixDirections = computed(() => {
  if (directions.length) {
    return Array.from(lazyChunks(directions, 3))
  }
  return []
})

const matrixDirections = computed(() => {
  if (directions.length) {
    return chunks(directions, 3)
  }
  return []
})
</script>

<template>
  <section id="directions" class="directions">
    <h1 class="directions__header">Направления</h1>
    <div class="directions__actions"></div>
    <div class="directions__slider">
      <shared-slider :slides="lazyMatrixDirections">
        <template #content="{slide, slideIndex}">
          <div class="directions__container">
            <components-directions-card
                v-for="(card, cardIndex) in slide"
                :key="cardIndex"
                :card-info="card"
                class="directions__container--item"
            />
          </div>
        </template>
      </shared-slider>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .directions {
    padding: 0;
    background-color: $primary;
    &__slider {
      position: relative;

    }
    &__container {
      width: 100%;
      display: flex;
      height: fit-content;
      flex-direction: row;
      column-gap: 20px;
      &--item {
        height: 350px;
      }
    }
  }
</style>