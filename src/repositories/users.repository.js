const path = require('path');
const uuid = require('uuid');
const { readJsonFile, writeJsonFile } = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'data', 'users.json');

const usersRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },
    async getSpecName(){
        const users =  await  readJsonFile(FILE_PATH) || [];
        let specialnosti = new Map();
        users.forEach((user)=>{
            specialnosti.set(user.group.specialnost.spec_name,user.group.specialnost.spec_name);
        })
        return specialnosti;
    },

    async get(id) {
        const users = await this.getAll();
        return users.find(user => user.id === id);
    },

    async add(user) {
        const users = await this.getAll();
        const newUser = {
            id: uuid.v1(),
            ...user
        };
        users.push(newUser);

        await writeJsonFile(FILE_PATH, users);

        return newUser;
    }
};

module.exports = usersRepository;
