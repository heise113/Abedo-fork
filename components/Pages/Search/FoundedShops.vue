<template>
    <div class="founded-shops">
      <h1 class="founded-shops__title title-normal">Найденные заведения</h1>
      <div class="founded-shops__content content">
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
  </div>
</template>

<script>
export default {
  name: "FoundedShops",
};
</script>

<style lang="scss" scoped>
.founded-shops {
  width: 100%;
  max-width: $maxwidth;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    width: 100%;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
  }
}
</style>
