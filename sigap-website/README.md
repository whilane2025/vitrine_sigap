# SIGAP - Site Web One-Page

Système Intégré de Gestion des Activités Phytosanitaires

## Description

Site web one-page présentant SIGAP, le cockpit temps réel pour la gestion des activités commerciales phytosanitaires.

## Structure du Projet

```
sigap-website/
├── index.html              # Page principale HTML5
├── css/
│   └── styles.css         # Styles CSS avec variables et reset
├── js/
│   └── main.js            # JavaScript avec fonctions de base
├── images/                # Dossier pour les futurs visuels
└── README.md              # Ce fichier
```

## Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS et gradients
- **JavaScript (Vanilla)** - Interactions sans framework
- **Google Fonts** - Montserrat & Open Sans

## Charte Graphique

### Couleurs Principales
- Vert Primary: `#4CAF50`
- Vert Dark: `#2E7D32`
- Bleu Secondary: `#0D47A1`
- Bleu Light: `#1565C0`

### Couleurs Neutres
- Gris Texte: `#424242`
- Gris Border: `#E0E0E0`
- Blanc: `#FFFFFF`
- Fond Clair: `#f8fafc`

### Couleurs d'Alerte
- Rouge: `#F44336`
- Orange: `#FF9800`

### Typographie
- **Titres**: Montserrat (400, 600, 700, 900)
- **Corps de texte**: Open Sans (400, 600)

## Sections du Site

1. **Hero** - Section d'accueil avec titre principal
2. **Problématique** - Présentation des défis actuels
3. **Solution** - Comment SIGAP répond aux besoins
4. **Fonctionnalités** - Détail des fonctionnalités clés
5. **Bénéfices** - Avantages pour les utilisateurs
6. **Témoignages** - Retours d'expérience clients
7. **Tarifs** - Offres et formules d'abonnement
8. **FAQ** - Questions fréquentes
9. **CTA Final** - Appel à l'action pour conversion

## Fonctionnalités JavaScript

### Implémentées
- ✅ Smooth scroll vers les sections
- ✅ Navigation sticky au scroll
- ✅ Fonctions utilitaires (debounce, viewport detection)

### À Développer
- ⏳ Animations au scroll (Intersection Observer)
- ⏳ Validation de formulaires
- ⏳ Accordéon FAQ
- ⏳ Carrousel témoignages
- ⏳ Mise à jour de l'élément actif dans la navigation

## Classes Utilitaires CSS

### Layout
- `.container` - Conteneur centré (max-width: 1200px)
- `.section` - Padding standard pour les sections
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` - Grilles responsives
- `.flex`, `.flex-center`, `.flex-between` - Flexbox

### Boutons
- `.btn-primary` - Bouton vert principal
- `.btn-secondary` - Bouton bleu secondaire
- `.btn-outline` - Bouton avec bordure

### Texte
- `.text-center`, `.text-left`, `.text-right` - Alignement
- `.mt-1` à `.mt-5` - Marges supérieures
- `.mb-1` à `.mb-5` - Marges inférieures

## Installation

1. Cloner ou télécharger le projet
2. Ouvrir `index.html` dans un navigateur web
3. Aucune installation de dépendances requise

## Développement

### Prérequis
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Éditeur de code (VS Code recommandé)

### Démarrage
Ouvrir le fichier `index.html` directement dans le navigateur ou utiliser un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis accéder à `http://localhost:8000`

## Responsive Design

Le site est optimisé pour :
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px
- **Petit mobile** : < 480px

## Optimisations Implémentées

### SEO ✅
- ✅ Meta description optimisée (155 caractères)
- ✅ Meta keywords ciblés
- ✅ Open Graph tags (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards
- ✅ Meta robots (index, follow)
- ✅ Title optimisé (< 60 caractères)
- ✅ Structure sémantique HTML5

### Performance ✅
- ✅ Preconnect Google Fonts
- ✅ Google Fonts chargées dans HTML (pas CSS @import)
- ✅ CSS Variables pour réutilisation
- ✅ Intersection Observer pour animations lazy
- ✅ Transitions CSS optimisées

### Accessibilité ✅
- ✅ Structure sémantique (header, main, section, footer)
- ✅ aria-labels sur boutons interactifs
- ✅ Navigation au clavier supportée
- ✅ Contraste WCAG 2.1 AA conforme
- ✅ lang="fr" sur HTML

## Optimisations à Faire (Production)

- [ ] Créer favicons (16x16, 32x32, 180x180)
- [ ] Créer og-image.png (1200x630px)
- [ ] Créer twitter-card.png (1200x600px)
- [ ] Minification CSS/JS pour production
- [ ] Optimisation des futures images (compression, WebP)
- [ ] Lazy loading des images (attribut loading="lazy")
- [ ] Mise en place de Google Analytics
- [ ] Créer sitemap.xml
- [ ] Créer robots.txt
- [ ] Test PageSpeed Insights (score > 90)

Voir [OPTIMIZATION.md](OPTIMIZATION.md) pour le guide complet.

## Accessibilité

- Structure HTML sémantique
- Balises ARIA à ajouter
- Navigation au clavier à tester
- Contraste des couleurs conforme WCAG 2.1

## Navigateurs Supportés

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)

## Licence

Tous droits réservés - SIGAP 2025

## Contact

Pour toute question concernant le projet SIGAP.

---

**Version**: 1.0.0
**Dernière mise à jour**: 2025
