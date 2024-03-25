const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI); // Utilisation de la nouvelle syntaxe avec async/await
    console.log("Mongo connecté");
  } catch (err) {
    console.log(err);
    process.exit(1); // Arrête l'application en cas d'erreur de connexion
  }
};

module.exports = connectDB;
