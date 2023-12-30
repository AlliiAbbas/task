const state = {
    employees_data: null,
};

const getters = {
    employees_data(state){
        return state.employees_data
    }
};

const actions = {
    selectedEmployee({commit} , payload) {
        commit('StoreSelectedEmployee' , payload)
    },
};

const mutations = {
    StoreSelectedEmployee(state, payload) {
        state.employees_data = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};