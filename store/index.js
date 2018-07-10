import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        list: [
            {
                'head': 'Accounts',
                'content': '',
                'show': true
            },
            {
                'head': 'bbb',
                'content': '<button>aaaa</button>',
                'show': true
            }
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