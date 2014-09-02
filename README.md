## Site web-CV personnel

Ce paquet nodeJS permet de générer un site web statique français/anglais présentant son parcours et ses projets à partir de fichiers de données au format JSON.

Exemple : [http://antoinegiraudmaillet.com/](http://antoinegiraudmaillet.com/)

### Installation
  * Cloner le repository
  * Dupliquer les fichiers `content_XX.sample.json` en `content_XX.json` et compléter les données avec vos informations.
  * Ajouter un avatar de taille 150px/150px sous le nom `avatar.png` dans le dossier `res`
  * Installer le paquet avec npm : `npm install`
  * Lancer la tâche "default" de grunt pour générer le site statique : `grunt`
  * Copier le contenu du dossier de sortie `dist` à la racine du serveur de destination

~~~~

## Personal CV-website

This nodeJS packet was created to generate a french/english static website to describe your timeline, your projects and your skills from JSON-formatted datafiles.

Example : [http://antoinegiraudmaillet.com/](http://antoinegiraudmaillet.com/)

### Set-up
  * Clone the repository
  * Duplicate `content_XX.sample.json` files into `content_XX.json` and fill them with your data.
  * Add a custom 150px/150px avatar under `avatar.png` in the `res` folder
  * Install the package with npm : `npm install`
  * Execute grunt "default" task to generate the static website : `grunt`
  * Copy the content of the `dist` output folder to your server root
