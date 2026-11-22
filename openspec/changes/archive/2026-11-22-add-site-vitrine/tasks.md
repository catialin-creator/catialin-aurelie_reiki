# Tasks

## 1. Arborescence et polices

- [x] 1.1 Créer `assets/css/`, `assets/fonts/` et `assets/img/` (avec un `.gitkeep` dans `img/`), et vérifier qu'ils existent à la racine du dépôt
- [x] 1.2 Télécharger depuis Fontsource les `.woff2` du sous-ensemble latin (Cormorant Garamond 500, 600 et 400 italique ; Jost 300, 400 et 500) dans `assets/fonts/` avec des noms explicites (ex. `jost-300.woff2`), et vérifier que chaque fichier commence par la signature `wOF2` et pèse moins de 60 Ko
- [x] 1.3 Ajouter `assets/fonts/OFL.txt` (licence SIL Open Font License 1.1 des deux familles) et vérifier qu'il mentionne Cormorant Garamond et Jost

## 2. Feuille de style

- [x] 2.1 Créer `assets/css/style.css` avec les `@font-face` (`font-display: swap`, chemins relatifs `../fonts/`) et les variables de couleur sur `:root`, avec leurs variantes `prefers-color-scheme: dark` (design §7). Vérifier qu'aucune URL externe n'apparaît dans le fichier
- [x] 2.2 Reprendre du prototype les règles de base, de l'en-tête, des sections, de la frise, des étapes, des conseils, de l'avertissement, du contact et du pied de page, sans aucune règle du module de disponibilités ni de `[data-theme]`, et vérifier par recherche que `.slot`, `.plan`, `.admin`, `dialog` et `data-theme` sont absents
- [x] 2.3 Ajouter les styles du menu d'ancres (design §3) et du pied de page complet, avec des cibles tactiles d'au moins 44 px de haut, et vérifier visuellement à 320 px que les trois liens tiennent sur une ligne
- [x] 2.4 Écrire les media queries mobile d'abord : une colonne par défaut, puis plusieurs colonnes à partir de 641 px et de 861 px. Réduire l'illustration de l'en-tête sous 640 px (design §5) et appliquer `overflow-wrap: anywhere` à l'e-mail. Vérifier à 390 px que les étapes sont sur une seule colonne
- [x] 2.5 Ajouter le bloc `prefers-reduced-motion: reduce` (étoiles fixes, `scroll-behavior: auto`) et vérifier dans les outils de développement (émulation de la préférence) que les étoiles ne clignotent plus

## 3. Page d'accueil

- [x] 3.1 Créer `index.html` : `lang="fr"`, `meta viewport`, titre « Aurélie Irigoyen · Soin énergétique en Reiki à Anglet », description sans mention de disponibilités, `preload` des deux polices principales et lien vers `assets/css/style.css`. Vérifier qu'aucune balise ne pointe vers `fonts.googleapis.com` ou `fonts.gstatic.com`
- [x] 3.2 Construire le `header` : menu `nav aria-label="Navigation principale"` (Reiki, Séance, Contact), `h1`, accroche, texte d'introduction, boutons « Me contacter » (`#contact`) et « Appeler le 07 69 52 76 58 » (`tel:+33769527658`), SVG des mains en `aria-hidden="true"`. Vérifier que chaque lien du menu atteint sa section
- [x] 3.3 Construire le `main` en reprenant mot pour mot les textes du prototype : citation et emblème (`role="img"`, `aria-label="Mandala et yin-yang"`), section `#reiki`, section `#seance` avec 4 étapes, conseils et avertissement médical, section `#contact` (téléphone, e-mail, adresse en lien Google Maps, `target="_blank" rel="noopener"`). Remplacer les attributs `style` du prototype par des classes, puis vérifier par comparaison avec `docs/prototype.html` que les textes sont identiques et qu'aucun attribut `style` ne subsiste
- [x] 3.4 Construire le `footer` : nom, téléphone, e-mail, adresse et lien « Mentions légales » vers `mentions-legales.html`. Vérifier qu'il s'affiche en bas de page dans les deux thèmes
- [x] 3.5 Vérifier par recherche dans `index.html` l'absence de `disponibilites`, `window.claude`, `<dialog` et `<script`, puis relire tous les textes pour s'assurer qu'aucun ne promet d'effet thérapeutique et que le vouvoiement est respecté

## 4. Vérifications d'ensemble

- [x] 4.1 Servir le site en local (`npx --yes http-server -c-1` ou Live Server) et vérifier dans l'onglet Réseau qu'aucune requête ne part vers un domaine tiers et que les six polices proviennent de `assets/fonts/`
- [x] 4.2 Tester en émulation mobile à 320, 390 × 844, 768, 1024 et 1440 px : aucun défilement horizontal, boutons de l'en-tête visibles sans défiler à 390 × 844
- [x] 4.3 Parcourir la page au clavier (Tab / Maj+Tab / Entrée) : ordre logique et contour de focus visible sur chaque lien, dans les thèmes clair et sombre
- [x] 4.4 Contrôler les contrastes des couples texte / fond dans les deux thèmes (outil de contraste des DevTools ou WebAIM) : au moins 4,5:1, ou 3:1 pour les grands textes
- [x] 4.5 Lancer Lighthouse en mode mobile : performance, accessibilité, bonnes pratiques et SEO ≥ 90, poids transféré total < 300 Ko. Corriger tout écart avant de cocher

## Workflow follow-up

- Relecture humaine du rendu, puis commit et `git push` sur `main`.
- Activer GitHub Pages (Settings → Pages → `main`, `/ (root)`) et vérifier le site sur `https://<compte>.github.io/aurelie-reiki/`.
- Archiver le changement avec `/opsx:archive add-site-vitrine`.
- Ne pas diffuser l'adresse du site avant l'archivage de `add-mentions-legales-seo` (lien « Mentions légales » encore cassé).
