import Vue from "vue";
import qs from 'qs';
let local_storage_name = "cart";
export const state = () => ({
    products: [],
    partner: {},
    promo: null,
    promo_result: {
        success: null,
        value: null,
        timer: null
    },
    synchronization_timer: null
});
export const mutations = {
    action(state, action) {
        action(state);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    set(state, { index, product }) {
        Vue.set(state.products, index, product)
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    remove(state, index) {
        Vue.delete(state.products, index);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    clear(state) {
        Vue.set(state, "products", []);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    set_partner(state, partner) {
        Vue.set(state, 'partner', partner);
        localStorage.setItem(local_storage_name, JSON.stringify(state));
    },
    local_set(state) {
        const local_data = JSON.parse(localStorage.getItem(local_storage_name) ?? null);
        if (local_data) {
            state.products = local_data.products;
            state.partner = local_data.partner;
        }
    }
};
export const actions = {
    action(state, action) {
        action(state);
    },
    add_to_cart(state, { product, partner, selected_options = [] }) {
        product.count = product.min_count;
        product.selected_options = selected_options;
        Vue.set(product, "count", product.min_count);
        if (!+state.state?.partner?.id || !state.state.products.length) state.dispatch("change_shop", { product, partner })
        else if (+state.state?.partner?.id == +partner.id) {
            state.commit('set_partner', partner);
            state.commit('set', { index: state.state.products.length, product });
        }
        else this.commit('modals/open', { modal_name: 'switch_shop', product: product, partner: partner });
    },
    crease(state, product) {
        state.commit("action", () => product.count++);
        state.commit('set', { index: state.state.products.findIndex(el => +el.id == +product.id), product });
    },
    decrease(state, product) {
        state.commit("action", () => product.count--);
        if (product.count < product.min_count) state.commit("remove", state.state.products.findIndex(el => +el.id == +product.id));
        else state.commit('set', { index: state.state.products.findIndex(el => +el.id == +product.id), product });
    },
    remove(state, product) {
        state.commit("remove", state.state.products.map(element => +element.id).indexOf(+product.id));
    },
    change_shop(state, { product, partner }) {
        this.commit("modals/close");
        state.commit('clear');
        state.commit("set", { index: state.commit('set', { index: state.state.products.length, product }), product: product });
        state.commit("set_partner", partner);
    },
    synchronization(state) {
        const sync = () => {
            const { promo, products, partner } = state.state;
            let products_final = [];
            for (let product of products) {
                products_final.push({
                    id: product.id,
                    count: product.count,
                    props: product.props
                });
            }
            // console.log("products final are");
            // console.log(products_final);
            // console.log(promo);
            let params = qs.stringify({
                promo_code: promo,
                products: products_final,
                shop_id: partner.id
            });
            this.$axios.get(`/api/order/getOrder?${params}`).then((response) => {
                console.log("Response");
                console.log(response.data);
            }).catch(error => {
                if (error?.response?.status == 422) state.commit('action', state => state.promo_result.value = error.response.data.errors.promo_code[0] ?? null)
            });
        }

        state.commit("action", (state) => {
            clearTimeout(state.synchronization_timer);
            state.synchronization_timer = setTimeout(sync, 600);
        });
    }
};


export const getters = {
    total_price(state) {
        let summ = 0;
        state.products.forEach(product => {
            summ += product.price.toFixed(2) * +product.count;
            summ += product.selected_options.map(option => +option.price * +product.count).reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
        });

        return summ % 1 == 0 ? +summ : +summ.toFixed(2);
    },
    total_discount_price(state) {
        let summ = 0;
        state.products.forEach(product => {
            summ += (+product.price.toFixed(2) - (product.price.toFixed(2) * (product.discount?.percent ?? 0) / 100).toFixed(2)) * +product.count;
            summ += product.selected_options.map(option => +option.price * +product.count).reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
        });
        return summ % 1 == 0 ? +summ : +summ.toFixed(2);
    },

};
