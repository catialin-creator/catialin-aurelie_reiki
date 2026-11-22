# Proposition : add-site-vitrine

## Why

Aurélie n'a aujourd'hui aucune présence en ligne : un visiteur qui trouve sa carte de visite ne peut ni comprendre ce qu'est une séance de Reiki, ni la joindre facilement depuis son téléphone. Ce premier changement met en ligne la page unique (exigences F1 du PRD et exigences non fonctionnelles), base sur laquelle viendront le formulaire, les mentions légales et le nom de domaine.

## What Changes

- Création de `index.html` : page unique reprenant les textes et les SVG validés de `docs/prototype.html` :
  - en-tête (nom, accroche « Soin énergétique en Reiki », texte d'introduction, illustration des mains dorées) avec les boutons « Me contacter » (ancre `#contact`) et « Appeler » (`tel:`) ;
  - bandeau citation avec l'emblème mandala / yin-yang ;
  - section « Qu'est-ce que le Reiki ? » (définition, Rei et Ki, repères historiques) ;
  - section « Comment se déroule une séance » (4 étapes, conseils, avertissement médical) ;
  - section « Me contacter » avec téléphone, e-mail et adresse (lien itinéraire). Le formulaire viendra dans `add-formulaire-contact` ;
  - pied de page avec les coordonnées et le lien « Mentions légales ».
- Ajout d'un menu d'ancres (Reiki, Séance, Contact), absent du prototype.
- **Suppression** du module « Mes disponibilités » du prototype (section, dialogue de réservation, outils propriétaire, code `window.claude`). Le bouton principal « Voir mes disponibilités » devient « Me contacter ».
- Création de `assets/css/style.css` : charte (bleu nuit, or, rose, fond clair) en variables CSS sur `:root`, mode sombre, mobile d'abord.
- Auto-hébergement des polices Cormorant Garamond et Jost en `.woff2` dans `assets/fonts/`, sans appel à Google Fonts.
- Balises de base : `lang="fr"`, `title` et `meta description` corrigés (sans mention des disponibilités). Open Graph, Schema.org, sitemap et robots viendront dans `add-mentions-legales-seo`.

## Capabilities

### New Capabilities
- `contenu-site` : sections éditoriales de la page d'accueil (en-tête, citation, Reiki, séance, avertissement, coordonnées) et règles de contenu (pas de promesse thérapeutique, vouvoiement).
- `navigation-site` : menu d'ancres, boutons d'action de l'en-tête, pied de page commun et lien vers les mentions légales.
- `charte-visuelle` : couleurs, typographies auto-hébergées, mode sombre, mise en page responsive (320 à 1440 px), accessibilité WCAG 2.1 AA, mouvement réduit et budget de performance.

### Modified Capabilities
Aucune : aucune spécification n'existe encore dans `openspec/specs/`.

## Impact

- Nouveaux fichiers : `index.html`, `assets/css/style.css`, `assets/fonts/*.woff2`. `assets/js/main.js` n'est pas nécessaire pour ce changement (aucun comportement scripté) et sera créé avec le formulaire.
- Aucune dépendance npm, aucune étape de build, aucun service tiers.
- Le lien « Mentions légales » du pied de page pointe vers `mentions-legales.html`, livré par `add-mentions-legales-seo`. D'ici là, il mène à une page 404 de GitHub Pages. Ne pas annoncer le site au public avant ce changement.
- Mise en ligne : activer GitHub Pages sur `main`, dossier racine, une fois ce changement fusionné.
