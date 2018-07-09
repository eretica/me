import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        list: [
            {'text': 'aaa', 'show': true},
            {'text': 'bbb', 'show': true}
        ]
    },
    mutations: {
        show (state, id) {
            state.list[id].show = true;
        },
        hide (state, id) {
            state.list[id].show = true;
        },
    }
})

export default store