# KŌDŌ — Les sources olfactives

Site vitrine élégant pour une maison de parfumerie artisanale haut de gamme.

## ✨ Caractéristiques

- **Design épuré et luxueux** : Inspiration japonaise, palette beige/or/noir
- **Architecture moderne** : Next.js 14 (App Router) + TypeScript + TailwindCSS
- **Responsive** : Optimisé mobile, tablette et desktop
- **Performance** : Fonts Google optimisées, transitions fluides
- **SEO-ready** : Métadonnées configurées

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Installer les dépendances**

```bash
npm install
```

2. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

3. **Build de production**

```bash
npm run build
npm start
```

## 📦 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet depuis GitHub/GitLab
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

### Méthode 2 : Via la CLI Vercel

1. **Installer Vercel CLI**

```bash
npm install -g vercel
```

2. **Se connecter à Vercel**

```bash
vercel login
```

3. **Déployer le projet**

```bash
vercel
```

Suivez les instructions interactives. Pour un déploiement en production :

```bash
vercel --prod
```

## 📂 Structure du projet

```
kodo/
├── src/
│   ├── app/
│   │   ├── a-propos/
│   │   │   └── page.tsx          # Page À Propos
│   │   ├── parfums/
│   │   │   └── page.tsx          # Page Nos Parfums
│   │   ├── mentions-legales/
│   │   │   └── page.tsx          # Page Mentions légales
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Page d'accueil
│   │   └── globals.css           # Styles globaux
│   ├── components/
│   │   ├── Header.tsx            # Header fixe
│   │   ├── Footer.tsx            # Footer
│   │   └── ParfumCard.tsx        # Carte de parfum
│   └── data/
│       └── parfums.ts            # Données des parfums
├── public/
│   └── images/                   # Images (à ajouter)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Couleurs

- **Cream** : `#FAF7F2` (fond principal)
- **Beige** : `#E8E3D6` (accents)
- **Gold** : `#D4AF37` (détails luxe)
- **Noir** : `#000000` (texte et footer)

### Typographie

- **Titres** : Playfair Display (serif élégant)
- **Texte** : Inter (sans-serif moderne)

## 🌐 Pages du site

- **/** : Page d'accueil avec introduction poétique
- **/parfums** : Grille des 3 parfums de la collection
- **/a-propos** : Philosophie et artisanat de la marque
- **/mentions-legales** : Informations légales

## 📝 Personnalisation

### Ajouter un parfum

Modifiez le fichier `src/data/parfums.ts` :

```typescript
{
  id: 'nouveau-parfum',
  name: 'NOUVEAU PARFUM',
  notes: ['Note 1', 'Note 2', 'Note 3'],
  description: 'Description du parfum...',
  image: '/images/nouveau-parfum.jpg',
}
```

### Modifier les couleurs

Éditez `tailwind.config.ts` dans la section `theme.extend.colors`.

### Changer les polices

Modifiez les imports dans `src/app/layout.tsx`.

## 🖼️ Images

Les images des parfums sont référencées dans `/public/images/`. 
Pour l'instant, des placeholders visuels avec des icônes sont utilisés dans les cartes.

Pour ajouter de vraies images :
1. Placez vos images dans `/public/images/`
2. Les noms doivent correspondre aux valeurs `image` dans `parfums.ts`
3. Formats recommandés : JPG/PNG optimisés (max 500Ko par image)

## 📄 Licence

© 2025 KŌDŌ. Tous droits réservés.

---

**Créé avec ❤️ pour une expérience olfactive digitale intemporelle.**


