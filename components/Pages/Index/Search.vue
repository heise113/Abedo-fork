<template>
  <div class="search-wrapper index-page-search wrapper">
    <div class="search">
      <h1 class="title title-big lightblack">Быстрая доставка еды</h1>
      <form @submit.prevent="search" class="search__input">
        <button class="search__input-button push-hover-active">
          <svg
            class="search__input-button-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1887_4787)">
              <path
                d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                fill="#A6A8A8"
              />
              <path
                d="M19.7617 18.6122L15.1005 13.9509C14.7829 13.6333 14.2685 13.6333 13.9509 13.9509C13.6332 14.2683 13.6332 14.7832 13.9509 15.1005L18.6121 19.7618C18.7709 19.9206 18.9788 20 19.1869 20C19.3948 20 19.6029 19.9206 19.7617 19.7618C20.0793 19.4444 20.0793 18.9295 19.7617 18.6122Z"
                fill="#A6A8A8"
              />
            </g>
            <defs>
              <clipPath id="clip0_1887_4787">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <input
          placeholder="Найти магазин товар или услугу "
          type="text"
          minlength="3"
          required
          class="search__input-input"
          v-model="query"
        />
        <transition name="opacity">
          <button
            v-if="query.length"
            @click.prevent="query = ''"
            class="search__input-button search__input-button-close"
          >
            <svg
              class="search__input-button-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
                fill="#A6A8A8"
              />
            </svg>
          </button>
        </transition>
        <transition name="opacity">
          <div
            class="search__input__dropdown-content push-hover-active"
            @mouseenter="showResult"
            v-if="show_result == true"
          >
            <div class="search__input__dropdown-content__shops">
              <NuxtLink
                to="#"
                class="search__input__dropdown-content__shops-shop"
              >
                <img
                  src="@/assets/images/limonchello.png"
                  class="search__input__dropdown-content__shops-shop-image"
                />
                <p class="search__input__dropdown-content__shops-shop-name">
                  Ресторан “Тангос”
                </p>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="search__input__dropdown-content__shops-shop"
              >
                <p class="search__input__dropdown-content__shops-shop-name">
                  Ресторан “Тангос”
                </p>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="search__input__dropdown-content__shops-shop"
              >
                <img
                  src="@/assets/images/limonchello.png"
                  class="search__input__dropdown-content__shops-shop-image"
                />
                <p class="search__input__dropdown-content__shops-shop-name">
                  Ресторан “Тангос”
                </p>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="search__input__dropdown-content__shops-shop"
              >
                <p class="search__input__dropdown-content__shops-shop-name">
                  Ресторан “Тангос”
                </p>
              </NuxtLink>
              <NuxtLink
                to="#"
                class="search__input__dropdown-content__shops-shop"
              >
                <img
                  src="@/assets/images/limonchello.png"
                  class="search__input__dropdown-content__shops-shop-image"
                />
                <p class="search__input__dropdown-content__shops-shop-name">
                  Ресторан “Тангос”
                </p>
              </NuxtLink>
            </div>
            <div class="search__input__dropdown-content__products">
              <div class="search__input__dropdown-content__products-product">
                <img
                  src="@/assets/images/shop-placeholder.png"
                  class="
                    search__input__dropdown-content__products-product-image
                  "
                />
                <div
                  class="
                    search__input__dropdown-content__products-product-content
                  "
                >
                  <div
                    class="
                      search__input__dropdown-content__products-product-content-top
                    "
                  >
                    <p
                      class="
                        search__input__dropdown-content__products-product-content-top-name
                      "
                    >
                      Салат с лососем и помидорами
                    </p>
                    <p
                      class="
                        search__input__dropdown-content__products-product-content-top-shop
                      "
                    >
                      / Ресторан “Тангос”
                    </p>
                  </div>
                  <div
                    class="
                      search__input__dropdown-content__products-product-content-bottom
                    "
                  >
                    <p
                      class="
                        search__input__dropdown-content__products-product-content-bottom-price
                      "
                    >
                      450руб.
                    </p>
                    <p
                      class="
                        search__input__dropdown-content__products-product-content-bottom-weight
                      "
                    >
                      320г.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ButtonStandart
              height="32"
              padding="30"
              :uppercase="false"
              @action="watchAll"
              class="search__input__dropdown-content__watch-all-button"
            >
              Cмотреть все
            </ButtonStandart>
          </div>
        </transition>
      </form>
      <div class="search__categories" v-if="categories.length">
        <CategoryItem
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_result: false,
      query: "",
      categories: [
        { id: 1, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 2, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 3, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 4, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 5, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 6, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 7, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 8, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 9, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 10, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 11, name: "Lorem ipsum dolor mi met megretto consis" },
        { id: 12, name: "Lorem ipsum dolor mi met megretto consis" },
      ],
    };
  },
  methods: {
    search() {
      this.showResult();
    },
    showResult(){
      this.show_result = true;
      this.dropdownClick();
    },
    dropdownClick(){
       const dropdownClick = (event) => {
        const dropdown_content = document.querySelector(
          ".search__input__dropdown-content"
        );
        if (!dropdown_content) return;
        let element_data = dropdown_content.getBoundingClientRect();
        if (
          !(
            event.x >= element_data.x &&
            event.x <= element_data.x + element_data.width &&
            event.y >= element_data.y &&
            event.y <= element_data.y + element_data.height
          )
        ) {
          this.show_result = false;
          document.removeEventListener("click", dropdownClick);
        }
      };
      document.addEventListener("click", dropdownClick);
    },
    watchAll() {
      this.$router.push('/search')
      console.log("watch all button");
    },
  },
};
</script>

<style lang="scss" scoped>

.search {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  max-width: $maxwidth;
  &-wrapper{
  background-color: $dark_grey;
  padding: 70px 10px !important;
  }
  .title {
    margin-bottom: 40px;
  }
  &__input {
    width: 730px;
    height: 60px;
    background-color: $white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    position: relative;
    z-index: 5;

    &__dropdown-content {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 100%;
      left: 25px;
      width: calc(100% - 50px);
      background-color: $white;
      border-radius: 0px 0px 10px 10px;
      padding: 10px 20px 20px 20px;
      &__shops {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        border-bottom: 1px solid $dark_grey;
        padding-bottom: 10px;
        &-shop {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-decoration: none;
          overflow: hidden;
          &-image {
            background-color: $blue_grey;
            width: 120px;
            height: 60px;
            object-fit: contain;
            margin-bottom: 9px;
          }
          &-name {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      &__products {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        &-product {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          min-height: 75px;
          padding: 10px 0px;
          border-bottom: 1px solid $dark_grey;
          &-image {
            width: 50px;
            height: 40px;
            border-radius: 5px;
            object-fit: contain;
            margin-right: 10px;
            flex-shrink: 0;
            flex-grow: 0;
          }
          &-content {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            flex-grow: 1;
            overflow: hidden;
            &-top {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              width: 100%;
              margin-bottom: 4px;
              &-name {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                margin-right: 5px;
                white-space: nowrap;
                max-width: 60%;
                width: max-content;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              &-shop {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: $darkblue;
                white-space: nowrap;
                max-width: 40%;
                width: max-content;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            &-bottom {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              width: 100%;
              &-price {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                margin-right: 5px;
                white-space: nowrap;
                max-width: 60%;
                width: max-content;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              &-weight {
                font-family: "SF Pro Display";
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                color: $darkblue;
                white-space: nowrap;
                max-width: 40%;
                width: max-content;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
      &__watch-all-button {
        margin-top: 15px;
      }
    }
    &-button {
      outline: none;
      border: none;
      background-color: transparent;
      margin: 0px 20px;
      &-close {
        margin-left: 0px 8px !important;
      }
      transition: 0.3s;
      
    }
    &-input {
      height: 100%;
      flex-grow: 1;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      overflow: hidden;
      border-radius: 0px 50px 50px 0px;
      &::placeholder {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
      }
    }
  }
  &__categories {
    width: 100%;
    max-width: 100%;
    display: grid;
    margin-top: 40px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    .category {
      width: 295px;
    }
  }
}
</style>
