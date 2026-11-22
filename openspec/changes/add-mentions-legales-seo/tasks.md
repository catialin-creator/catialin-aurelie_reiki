# Tasks

## 1. Styles des pages secondaires

- [x] 1.1 Ajouter dans `assets/css/style.css` les classes `.page-hero` (en-tête compact bleu nuit avec menu et lien « Aurélie Irigoyen »), `.prose` (texte long : largeur de lecture, `h2`/`h3`, listes, liens soulignés) et `.todo` (marqueur `[À COMPLÉTER]` mis en évidence), avec les variables de couleur existantes et leurs variantes sombres. Vérifier qu'aucune couleur n'est écrite en dur hors de `:root`

## 2. Mentions légales et confidentialité

- [x] 2.1 Créer `mentions-legales.html` : `head` (titre et description propres, canonique, favicon, polices, CSS), en-tête `.page-hero`, `h1` « Mentions légales », sections Éditrice (avec `[À COMPLÉTER]` pour le statut et le SIRET), Directrice de la publication, Hébergeur, Services tiers, Propriété intellectuelle et Avertissement médical (design §4), puis le pied de page identique à l'accueil. Vérifier que les liens du menu mènent aux sections de l'accueil
- [x] 2.2 Ajouter la section `id="confidentialite"` (design §5) : données, finalité, base légale, destinataires, conservation, transferts hors UE, droits et réclamation CNIL, cookies. Vérifier que le lien « Politique de confidentialité » du formulaire de l'accueil ouvre la page directement sur cette section
- [x] 2.3 Vérifier par recherche qu'il y a exactement deux marqueurs `[À COMPLÉTER]` (statut, SIRET), qu'aucun numéro SIRET n'est présent dans le dépôt, et que l'avertissement médical est identique à celui de l'accueil

## 3. Page 404

- [x] 3.1 Créer `404.html` avec `<base href="/catialin-aurelie_reiki/">`, `meta robots noindex`, l'en-tête `.page-hero`, un message chaleureux, les liens « Retour à l'accueil » et « Me contacter », puis le pied de page commun. Vérifier en local, en simulant la base avec un serveur qui sert le dossier sous `/catialin-aurelie_reiki/`, qu'une adresse inventée dans un sous-dossier affiche la 404 avec ses styles et ses polices

## 4. Référencement de l'accueil

- [x] 4.1 Générer `assets/img/og-image.png` (1200 × 630, design §8) et vérifier ses dimensions, son poids (< 150 Ko) et son rendu
- [x] 4.2 Ajouter dans le `head` de `index.html` la canonique, les balises Open Graph et Twitter (design §6) et le bloc JSON-LD `LocalBusiness` (design §7). Vérifier que le JSON-LD est un JSON valide, de type `LocalBusiness`, sans tarif, horaires ni note
- [x] 4.3 Créer `sitemap.xml` (accueil et mentions légales, avec en tête le commentaire qui liste les endroits où figure l'adresse provisoire) et `robots.txt`. Vérifier que le sitemap est un XML bien formé et que `robots.txt` contient `Allow: /` et `Sitemap:`

## 5. Vérifications d'ensemble

- [x] 5.1 Vérifier les trois pages (accueil, mentions, 404) : aucun défilement horizontal de 320 à 1440 px, axe WCAG 2.1 AA sans violation en clair et en sombre, pied de page identique, aucun cookie déposé, aucune requête vers un domaine tiers
- [x] 5.2 Lancer Lighthouse mobile sur l'accueil et sur les mentions légales : les quatre scores ≥ 90, dont SEO

## Workflow follow-up

- Relecture humaine des textes juridiques, puis commit et push sur `main`.
- Après le push : vérifier la 404 en ligne sur une adresse inventée, tester l'aperçu de partage et passer l'accueil au validateur Schema.org (validator.schema.org).
- Aurélie fournit statut, SIRET, validation des 3 ans de conservation et adresses Facebook et Instagram. Ensuite : remplacer les marqueurs, ajouter `sameAs` au JSON-LD, pousser.
- Archiver avec `/openspec-archive-change add-mentions-legales-seo`.
