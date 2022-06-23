# krawler-job01 sample

Download a JSON file using __Kalisio krawler__ https://github.com/kalisio/krawler

## Installation de l'environnement

### Installation de git
Télécharger à partir de : https://git-scm.com

### Installation nvm
Télécharger à partir de : https://github.com/coreybutler/nvm-windows

```bash
nvm install 16
nvm use 16.15.1
```

### Installation yarn
Télécharger à partir de : https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

## Installation de Krawler
Dans le répertoire de travail (ex : c:\workspace), créer un répertoire kalisio

```bash
cd c:\workspace\kalisio
git clone https://github.com/kalisio/krawler
cd krawler
yarn install
yarn link
```

## Installation du job01
Dans le répertoire kalisio ( ex: C:\workspace\kalisio)

```bash
git clone https://github.com/calysteau/krawler-job01
cd krawler-job01
yarn install
yarn link @kalisio/krawler
```

Lancer le job
```bash
krawler jobfile.js
```

## Remarques

Si besoin d'activer le DEBUG de Krawler

```bash
set DEBUG= krawler*   (pour CMD)
```
ou 
```bash
$env:DEBUG="krawler*"  (pour PowerShell)
```
