# ⚡🐛 Application d'affichage de Pokemons tirés au hasard depuis une API

## 1. Description 
Ce projet est un exercice pratique de programmation asynchrone en **JavaScript**, utilisant une [API gratuite](https://pokeapi.co/) dédiée aux Pokemons.
Il permet l'affichage aléatoire d'un Pokemon sous forme de GIF, si fournit par l'API; sinon, sous forme d'image.
Le nom du Pokemon est également affiché de manière dynamique, en utilisant une police personnalisée via `@font-face`.

---

## 2. Fonctionnalités
- Un bouton pour un lancer la "randomization".
L'aléatoire est géré au niveau du **JavaScript** avec les méthodes `Math.floor(Math.random())` sur le nombre total de Pokemons disponibles via l'API (au nombre de 1025 à la date de réalisation de l'application).

- **Responsive Design** : l'application a été légèrement adaptée pour les utlisateurs mobile (ex. taille des noms des Pokemons)

---

## 3. Installation

1. Clonez ce projet depuis GitHub :
   ```bash
   git clone https://github.com/Xylo87/API_Pokemon.git
   cd API_Pokemon
   ```
   
2. Exécutez le fichier principal pour tester le projet :
   ```bash
   index.html
   ```

---

## 4. Accès

Accédez directement au projet via [ce lien](https://xylo87.github.io/API_Pokemon/)


## 5. Auteur
Projet réalisé par Théo Arbogast (aka Xylo87).
N'hésitez pas à ouvrir une issue ou à me contacter pour toute suggestion ou question.
