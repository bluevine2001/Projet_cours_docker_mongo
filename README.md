# Cours Docker mongodb-docker

## Utilisation :

à la racine du projet, lancer la commande suivante :

```shell
  docker-compose up (-d)
```

-d optionnel, sert à lancer en mode détaché.

ouvrir un nouveau terminal et lancer les commandes :

```shell
cd api
pnpm install
npm run start
```

Cela va lancer l'api express, on peut utiliser post man ou insomnia pour tester les requêtes.
Dans ce Projet J'utilise mongoose qui est un ORM comme eloquent en laravel qui permet de simplifier les interactions avec la bdd mongo, mais on peut aussi utiliser prisma.

J'ai fais une interface html pour pouvoir tester l'api sans utilitaire dans le dossier client.

ensuite tu peux t'amuser un peu avec mongodb pure dans le terminal, ça ressemble beaucoup aux manips sql,
voici quelques lignes de commandes de bases à tester dans le terminal :

- `show dbs` pour voir toutes les dbs
- `use nom_de_la_base` pour utiliser une db
- `show collections` pour afficher les tables de la base
- `db.nom_de_la_collection.insertOne({ name: "Jean", age: 30 })` pour insérer un document dans la table (similaire à une ligne en sql)
- `db.nom_de_la_collection.find()` similaire à un select \*, tu peux préciser des filtres where dans les accolades.
- `db.nom_de_la_collection.updateOne({ name: "Jean" }, { $set: { age: 31 } })`pour mettre à jour un document le 1er object est un where et le 2ème on met à jour une ou plusieurs propriété du document.
- `db.nom_de_la_collection.deleteOne({ name: "Jean" })` pour supprimer un document.

## Infos essentiels :

dans le dossier api, tu peux voir un docker file, il n'est pas utilisé mais il sert d'exemple,
c'est un fichier qui permet de créer une image docker personalisé pour ton application au lieu d'utiliser une image déja présente sur le docker hub, tout est expliqué dans ce fichier, et le fichier docker-compose.yml donc n'hésite pas à regarder 😉.
