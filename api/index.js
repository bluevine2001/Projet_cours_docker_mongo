const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = "mongodb://mongoadmin:secret@localhost:27017/";
mongoose.connect(mongoURI);

// Un schéma est un objet qui définit la structure des documents stockés dans une collection MongoDB.
// ils permettent de définir les champs et les types de données de chaque champ d'un document.
// cela permet aussi de valider les données et leurs types avant de les insérer dans la base de données.
// comparable à un schéma zod ou prisma en javascript
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// le modèle est une classe qui permet d'interagir avec la collection de la base de données.
// il permet de créer, lire, mettre à jour et supprimer des documents de la collection.
// il est comparable à un modèle laravel ou php dans une structure MVC.
const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("Bienvenue sur notre API avec MongoDB et Docker!");
});

app.post("/create-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(200).send({ message: "Utilisateur créé avec succès!" });
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).send(user);
});

app.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: "Utilisateur modifié avec succès!" });
});

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send({ message: "Utilisateur supprimé avec succès!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`));
