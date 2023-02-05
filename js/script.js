let user = {
    user_name: 'Sheroz',
    user_surname: 'Pulatov',
    user_gender: "Male",
    user_age: 15,
    user_status: 'Schoolboy',
    user_phon: 998991234567,
    passport: {
        serries: "FA3213213",
        date: 2023,
        exp: 2000
    },
    user_visa: 'There is not',
    user_adres: "Unknown",
};

let new_object = {
    game: 'Gta five',
    game_year: 2013,
    game_status: '95%',
    game_bud: 256,
    game_yes: true,
    game_no: false
};

let com = Object.assign({}, user, new_object);
let cop_key = Object.keys(com);
let cop_val = Object.values(com,);
let fil_ter = cop_key.concat(cop_val);

let types = {
    string: [],
    number: [],
    boolean: [],
    object: [],
};

let fil = fil_ter.filter(item => {
    if (typeof item === 'string') {
        types.string.push(item)
    } else if (typeof item === 'number') {
        types.number.push(item)
    } else if (typeof item === 'boolean') {
        types.boolean.push(item)
    } else if (typeof item === 'object') {
        types.object.push(item)
    }
})

console.log(types)