# Portfolio Personnel

Un portfolio moderne et responsive pour présenter vos projets et compétences.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : S'adapte à tous les écrans (mobile, tablette, desktop)
- **Navigation fluide** : Menu de navigation avec défilement smooth
- **Sections complètes** :
  - Hero section avec présentation
  - À propos
  - Projets avec liens de démonstration et code source
  - Compétences avec barres de progression animées
  - Contact avec liens sociaux

## 📁 Structure du projet

```
Portfolio/
├── index.html          # Structure HTML principale
├── css/
│   └── styles.css      # Styles CSS
├── js/
│   └── script.js       # JavaScript pour l'interactivité
├── assets/             # Dossier pour images et autres ressources
├── .gitignore          # Fichiers à ignorer par Git
└── README.md           # Documentation
```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `index.html` pour personnaliser :

- **Nom** : Remplacez "Omar" dans la section hero
- **Description** : Modifiez le texte dans la section "À propos"
- **Compétences** : Ajustez les barres de progression dans la section "Skills"

### 2. Informations du projet

Dans le fichier `js/script.js`, décommentez et modifiez la fonction `updateProjectInfo()` :

```javascript
const projectData = {
    title: 'Nom de votre projet',
    description: 'Description détaillée de votre projet',
    tags: ['React', 'Node.js', 'MongoDB'], // Vos technologies
    demoLink: 'https://votre-projet-deploye.com', // URL de déploiement
    codeLink: 'https://github.com/votre-username/votre-repo' // URL GitHub
};
```

### 3. Informations de contact

Dans le fichier `js/script.js`, décommentez et modifiez la fonction `updateContactInfo()` :

```javascript
const contactData = {
    email: 'votre.email@example.com',
    github: 'https://github.com/votre-username',
    linkedin: 'https://linkedin.com/in/votre-profile'
};
```

### 4. Couleurs

Modifiez les variables CSS dans `css/styles.css` (section `:root`) pour changer le thème :

```css
:root {
    --primary-color: #6366f1;    /* Couleur principale */
    --secondary-color: #8b5cf6;  /* Couleur secondaire */
    /* ... autres couleurs */
}
```

## 🚀 Déploiement

### Option 1 : GitHub Pages (Gratuit)

1. Créez un repository sur GitHub
2. Poussez votre code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` et le dossier `/ (root)`
5. Votre portfolio sera disponible à : `https://votre-username.github.io/votre-repo`

### Option 2 : Netlify (Gratuit)

1. Allez sur [netlify.com](https://www.netlify.com)
2. Connectez votre repository GitHub
3. Netlify détectera automatiquement les fichiers statiques
4. Cliquez sur "Deploy"
5. Votre site sera disponible avec une URL Netlify

### Option 3 : Vercel (Gratuit)

1. Allez sur [vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Vercel détectera automatiquement le projet
4. Cliquez sur "Deploy"
5. Votre site sera disponible avec une URL Vercel

### Option 4 : Surge.sh (Gratuit)

1. Installez Surge :
   ```bash
   npm install -g surge
   ```
2. Déployez :
   ```bash
   surge
   ```
3. Suivez les instructions pour créer un compte et déployer

## 📝 Prérequis

Aucun prérequis nécessaire ! Le portfolio fonctionne directement dans le navigateur.

Pour le développement local :
- Un navigateur web moderne
- (Optionnel) Un serveur local comme Live Server dans VS Code

## 🛠️ Technologies utilisées

- HTML5
- CSS3 (avec variables CSS et animations)
- JavaScript (Vanilla JS, pas de dépendances)
- Google Fonts (Inter)

## 📱 Compatibilité

- ✅ Chrome/Edge (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 🎯 Prochaines étapes

Pour améliorer votre portfolio, vous pouvez :

1. Ajouter plus de projets dans la section projets
2. Ajouter un formulaire de contact fonctionnel
3. Ajouter des animations supplémentaires
4. Intégrer un blog ou une section articles
5. Ajouter un mode sombre
6. Optimiser les images et les performances

## 📄 Licence

Ce projet est libre d'utilisation pour vos besoins personnels.

## 🤝 Contribution

N'hésitez pas à forker ce projet et à le personnaliser selon vos besoins !

---

**Bon déploiement ! 🚀**

