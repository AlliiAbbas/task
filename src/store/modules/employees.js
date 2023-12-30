const state = {
    employees_data: null,
};

const getters = {
    getEmployees(state){
        return state.employees_data
    }
};

const actions = {
    selectedEmployee({commit} , payload) {
        return new Promise((resolve) => {
            commit('StoreSelectedEmployee' , payload)
            resolve()
        })
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