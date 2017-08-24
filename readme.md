# Présentation

Ce projet a pour but d'aggréger et de faire des statistiques sur des cartes trello représentant des tâches dans un processus de développement

To use this extension you have to:
- write 'Sprint n' in some columns of a Trello board
- write a number of working days at the end of the title of the colum
- on cards you have to put a value at the end of the title (for example 5U)

When on your trello board and clicking on the extention icon it will compute:
- the values of remaining tasks
- the velocity of the sprint

# Installation et utilisation

<!-- # Comment est né ce projet ?

Un seul point d'entrée pour les développeurs et le scrum master, représentant tout le projet dans un tableau trello.
Le but est de:

* minimiser les interactions avec les outils
* avoir une visibilité rapide et claire de tout le projet

# Pourquoi le publier ? -->

# Technlogies in use
* JQuery est utilisé car il s'agit de lire le DOM de trello et de sélectionner des informations pour en faire des stats
* extension chrome
* Les titres, les valeurs et les états des tâches sont parsés à l'aide d''[expressions régulières](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp "RegExp - JavaScript | MDN")

# Future developments
* chars
* use of html templates and mustache