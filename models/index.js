const mongoose = require("mongoose");

const uri="mongodb+srv://harika1999:YP6yJb6VaHyy6qyz@cluster0.zwdaqlr.mongodb.net/movies?retryWrites=true&w=majority"

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };