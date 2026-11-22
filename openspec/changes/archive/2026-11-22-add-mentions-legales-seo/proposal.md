# Proposition : add-mentions-legales-seo

## Why

Le site est en ligne, mais deux liens y sont cassés (« Mentions légales » et « Politique de confidentialité ») et il manque les informations que la loi impose à tout site professionnel (LCEN) et à tout formulaire qui collecte des données (RGPD). Le site n'est pas non plus préparé pour Google ni pour les partages sur les réseaux sociaux, alors que la cible arrive souvent par une recherche locale. Ce changement couvre F4 et les exigences SEO et RGPD du PRD. Une fois les marqueurs `[À COMPLÉTER]` remplis par Aurélie, le site pourra être diffusé.

## What Changes

- Nouvelle page `mentions-legales.html` :
  - éditeur : Aurélie Irigoyen, statut juridique et SIRET en `[À COMPLÉTER]`, adresse et contact ;
  - directrice de la publication ;
  - hébergeur : GitHub ;
  - services tiers : Web3Forms, Google Maps, Facebook, Instagram ;
  - propriété intellectuelle et avertissement médical ;
  - section `#confidentialite` : données collectées, finalité, base légale, destinataires, durée de conservation, transferts hors UE, droits, réclamation auprès de la CNIL, absence de cookies.
- Nouvelle page `404.html` dans le style du site, avec un lien de retour vers l'accueil, exclue de l'indexation.
- Dans `index.html` :
  - URL canonique ;
  - balises Open Graph et Twitter Card ;
  - données structurées Schema.org `LocalBusiness` en JSON-LD (nom, adresse, téléphone, e-mail, URL, image, zone desservie).
- Nouvelle image de partage `assets/img/og-image.png` (1200 × 630) aux couleurs de la charte, avec les mains dorées et le nom.
- Nouveaux fichiers `sitemap.xml` (accueil et mentions légales) et `robots.txt`.
- Les nouvelles pages reprennent le menu, le pied de page commun et les icônes des réseaux sociaux.

## Capabilities

### New Capabilities
- `mentions-legales` : page des mentions légales et politique de confidentialité, informations obligatoires et marqueurs à compléter.
- `referencement` : métadonnées de recherche et de partage, données structurées, plan du site, consignes aux robots.

### Modified Capabilities
- `navigation-site` : ajout d'une page 404 qui ramène à l'accueil. Le pied de page commun est désormais vérifié sur les trois pages.

## Impact

- Nouveaux fichiers : `mentions-legales.html`, `404.html`, `sitemap.xml`, `robots.txt`, `assets/img/og-image.png`.
- Fichier modifié : `index.html` (balises du `head` uniquement). `style.css` reçoit quelques styles pour les pages de texte. Aucun JavaScript nouveau.
- **Adresse du site provisoire** : l'URL canonique, Open Graph, le sitemap et `robots.txt` utilisent `https://catialin-creator.github.io/catialin-aurelie_reiki/`. Le changement 4 (`add-nom-de-domaine`) les remplacera par le domaine définitif. D'ici là, `robots.txt` n'est pas lu par les moteurs de recherche, qui ne le consultent qu'à la racine d'un domaine.
- Informations à fournir par Aurélie avant la diffusion : statut juridique, SIRET, validation de la durée de conservation des messages, adresses Facebook et Instagram.
