# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

###
Notes corrections : 

- First commit : 
     1) Correction de l'index du slider
     2) Correction de l'index de l'input radio

- Second commit : 
     1) Correction du filtres de catégories
     2) Correction des propriétés CSS React (camelCase)
     3) Ajout de l'attribut readOnly dans le composant Slider
     4) Initialisation de la variable byDateDesc dans le composant Slider
     5) Initialisation de la variable last dans Page
     6) Correction de l'affichage du mois dans Slider
     7) Correction des "key" dans Slider
     8) Activation de l'affichage de la modal quand le formulaire est envoyé
     9) Correction de l'affichage des mois dans la liste des évènements

- Third commit :
     1) Modification de l'ordre d'affichage des events dans le slider (du plus vieux au plus récent)
     2) Ajout du label correspondant au type d'évènement dans EventCard

- Last commit :
     1) Transfert des variables "last" (du composant Home) et "byDateDesc" (du composant Slider) dans le provider afin de gérer le changement de state dans le Provider et non dans le composant qui le consomme.