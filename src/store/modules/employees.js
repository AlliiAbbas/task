const state = {
    employees_data: null,
    all_employees_data:[
        {
            id: 1,
            name: 'Ahmed',
            position: 'Team Leader',
            department: 'Front-End',
            email: 'ahmed@test.com',
            image_url: 'https://img.freepik.com/free-photo/happy-business-man-wearing-grey-suit-standing-isolated-white-wall_231208-9211.jpg?w=740&t=st=1703897020~exp=1703897620~hmac=19f7f404ca6a78d16e52c298470a8409716d6580f143cc8bac950f9241e22a2c',
        },

        {
            id:2,
            name:'Ziad',
            position:'Junior',
            department:'Front-End',
            email:'Ziad@test.com',
            image_url:'https://img.freepik.com/free-photo/businessman-giving-handshake_186202-42.jpg?w=740&t=st=1703904518~exp=1703905118~hmac=7d960e1ef667dad14fd780dd7c3b85f09feae0621bc7ce73f92642ff78e34318',
        },

        {
            id:3,
            name:'Khaled',
            position:'Med',
            department:'Ui-Ux',
            email:'Khaled@test.com',
            image_url:'https://img.freepik.com/free-photo/business-man-isolated_144627-5770.jpg?w=740&t=st=1703897299~exp=1703897899~hmac=a4fbe241888266c77faa0ed420bb148f0821a906bf4d187247e5d5f9bead6356',
        },

        {
            id:4,
            name:'Ali',
            position:'Senior',
            department:'Data Analyst',
            email:'Ali@test.com',
            image_url:'https://img.freepik.com/free-photo/portrait-middle-aged-businessman_144627-27263.jpg?w=740&t=st=1703897331~exp=1703897931~hmac=e8997cde63d15a3dc1d7160a96e9a9f4337caf9439ecc843f5729cc88b6fd2e3',
        },

        {
            id:5,
            name:'Ibrahim',
            position:'CEO',
            department:'Ai',
            email:'Ibrahim@test.com',
            image_url:'https://img.freepik.com/free-photo/handsome-businessman-offering-handshake_144627-28925.jpg?w=740&t=st=1703897360~exp=1703897960~hmac=6cb2ec0cc54fd942cb6cf70336517d477a3b4aa30bb0fd3dba0cb8ccfc62bc32',
        }
    ]

};

const getters = {
    getEmployees(state){
        return state.employees_data
    },
    getAllEmployeesData(state){
        return state.all_employees_data
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