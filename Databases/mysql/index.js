
const db = require("./db");
async function ShowDB() {
    const db = require("./db");
    const clientes = await db.selectCustomers();
};
async function InsertDB() {
    const db = require("./db");
    const result = await db.insertCustomer({nome: "Zéma", idade: 18, uf: "SP"});
    const clientes = await db.selectCustomers();
};
async function UpdateDB (){
const result2 = await db.updateCustomer(3, {nome: "Zé José", idade: 19, uf: "SP"});
};
async function DeleteDB(){
const result3 = await db.deleteCustomer(7);
};

module.exports = {InsertDB,UpdateDB,DeleteDB,ShowDB};