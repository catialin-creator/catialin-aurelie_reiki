# Design : add-site-vitrine

## Context

Le dépôt ne contient que la documentation (`CLAUDE.md`, `docs/PRD.md`, `docs/prototype.html`). Le prototype est un fichier unique avec CSS en ligne, polices Google Fonts et un module de disponibilités qui dépend de la plateforme Claude (`window.claude`). Sa partie visuelle (en-tête, citation, Reiki, séance, contact) est validée et sert de référence. Contraintes : HTML/CSS/JS natifs sans build, GitHub Pages, RGPD (aucun appel tiers), WCAG 2.1 AA, Lighthouse ≥ 90. Pour la motivation, voir `proposal.md`.

## Goals / Non-Goals

**Goals :**
- Reproduire fidèlement le rendu du prototype dans une structure de fichiers maintenable (`index.html` + `assets/css/style.css`).
- Ajouter ce qui manque au prototype pour satisfaire F1 : menu d'ancres, bouton « Me contacter », pied de page complet.
- Corriger au passage les écarts d'accessibilité du prototype (repère `main`, styles en ligne, ordre de lecture).

**Non-Goals :**
- Formulaire de contact, liens `sms:` (changement `add-formulaire-contact`).
- Pages `mentions-legales.html` et `404.html`, Open Graph, Schema.org, sitemap, robots (changement `add-mentions-legales-seo`).
- Sélecteur manuel de thème clair/sombre : seul le réglage du système est suivi.
- Photo d'Aurélie, tarif et durée exacts (en attente de ses informations).

## Decisions

### 1. Partir du prototype et retirer, plutôt que réécrire
Le HTML des sections validées et leurs SVG sont repris tels quels. On supprime la section `#disponibilites`, le `<dialog>`, le panneau propriétaire, les blocs `<script>` et les règles CSS associées (`.planning-sec`, `.plan`, `.day`, `.slot`, `.admin`, `.form`, `.arow`, `dialog`…). Les styles en ligne (`h3 style="margin-bottom…"`, `strong style="font-weight:500"`) deviennent des classes.
*Alternative écartée* : réécriture complète, qui risquerait de modifier des textes déjà validés.

### 2. Aucun JavaScript dans ce changement
Le menu et les boutons sont de simples ancres. Le défilement doux passe par `scroll-behavior: smooth`, désactivé sous `prefers-reduced-motion`. `assets/js/main.js` sera créé avec le formulaire.
*Alternative écartée* : un fichier JS vide, qui ajouterait une requête sans utilité.

### 3. Menu d'ancres non fixe, dans l'en-tête
Une barre `<nav aria-label="Navigation principale">` est placée en haut de l'en-tête bleu nuit : à gauche, « Aurélie Irigoyen » en petit, comme lien vers le haut de la page ; à droite, Reiki · Séance · Contact. Les trois liens sont courts et tiennent sur une ligne dès 320 px, donc pas de menu hamburger (et pas de JS). Le menu n'est pas collant : aucune section n'est masquée sous une barre, et il n'y a pas de `scroll-padding` à gérer.
*Alternative écartée* : menu collant, plus complexe à rendre accessible et qui réduit l'espace utile sur mobile.

### 4. Structure du document
`<header class="hero">` (nav + h1 + accroche + boutons + illustration) → `<main>` (citation, `#reiki`, `#seance`, `#contact`) → `<footer>`. La citation reste une `section` sans titre visible, avec un `<p class="quote">` comme dans le prototype. Le `h3` « Un peu d'histoire » reste sous le `h2` de la section Reiki, ce qui ne crée pas de saut de niveau.

### 5. En-tête sur mobile : illustration réduite
Dans le prototype, sur mobile, l'illustration (22 rem) est placée au-dessus du texte, ce qui repousse les boutons sous la ligne de flottaison à 390 × 844 px. En dessous de 640 px, l'illustration est limitée à environ 10 rem et reste au-dessus du texte, et la taille de l'accroche est ajustée pour que les deux boutons tiennent dans la première hauteur d'écran (exigence F1.1). Ce point est à vérifier visuellement pendant l'implémentation.

### 6. Polices : fichiers Fontsource, sous-ensemble latin
On télécharge les `.woff2` du sous-ensemble latin depuis les paquets Fontsource (miroir des fichiers Google Fonts, licence SIL OFL 1.1), une seule fois, puis on les commite dans `assets/fonts/` avec le fichier de licence `OFL.txt`. Graisses retenues, d'après l'usage réel du prototype :
- Cormorant Garamond : 500 et 600 normales, 400 italique (accroche et citation) ;
- Jost : 300, 400 et 500 normales.

On déclare chaque fichier avec `@font-face` et `font-display: swap`. Les deux fichiers les plus visibles au premier affichage (Jost 300 et Cormorant italique 400) sont préchargés avec `<link rel="preload" as="font" crossorigin>`. Les piles de repli du prototype sont conservées. Les caractères 霊 et 気 ne font pas partie du sous-ensemble latin : ils sont affichés par la police système, ce qui est acceptable pour deux caractères.
*Alternative écartée* : les polices variables complètes, plus lourdes et sans gain visible.

### 7. Couleurs et thème
Les variables CSS du prototype sont reprises sur `:root` (`--navy`, `--gold`, `--gold-deep`, `--rose`, `--bg`, `--surface`, `--ink`, `--ink-soft`, `--line`, `--accent`). Les variantes sombres sont définies sous `@media (prefers-color-scheme: dark)`. Le bloc `:root[data-theme="dark"]` du prototype n'est pas repris, faute de sélecteur de thème. `body` reçoit un `background` explicite. Le couple or foncé #9C7A43 sur blanc a un contraste d'environ 4:1 : il est réservé aux textes de grande taille (kanji, années de la frise, numéros d'étapes), ce qui respecte le seuil de 3:1. Le texte courant utilise `--ink` ou `--ink-soft`.

### 8. Pied de page dupliqué à la main
Sans étape de build, le pied de page sera recopié dans chaque page (`index.html`, puis `mentions-legales.html` et `404.html`). C'est acceptable pour trois pages. Il contient le nom, le téléphone, l'e-mail, l'adresse et le lien « Mentions légales ».

### 9. Vérification locale par serveur HTTP
On évite d'ouvrir le fichier directement depuis l'explorateur (`file://`), où le chargement des polices et les mesures de Lighthouse ne reflètent pas la production. On sert le dossier avec un serveur local ponctuel (par exemple `npx --yes http-server -c-1`, ou l'extension Live Server de VS Code), sans l'ajouter au dépôt.

## Risks / Trade-offs

- [Lien « Mentions légales » cassé jusqu'au changement 3] → Ne pas communiquer l'adresse du site avant l'archivage de `add-mentions-legales-seo`.
- [Boutons sous la ligne de flottaison sur petits mobiles (moins de 700 px de haut)] → Exigence mesurée à 390 × 844 px. Sur les écrans plus petits, le bouton « Appeler » est de toute façon répété dans la section contact.
- [Fichiers de polices pris dans un CDN au moment de l'implémentation] → Téléchargement unique, fichiers commités et vérifiés (taille, rendu). Le site publié ne dépend d'aucun tiers.
- [Kanji affichés dans une police système différente selon l'appareil] → Rendu légèrement variable, sans incidence sur la lisibilité.
- [Duplication du pied de page] → Risque d'oubli lors d'un changement de coordonnées. Une tâche de contrôle sera prévue dans chaque changement qui ajoute une page.

## Migration Plan

Premier déploiement, rien à migrer. Après `/opsx:apply`, vérification locale puis `git push` sur `main`. Activer ensuite GitHub Pages (Settings → Pages → `main`, `/ (root)`). Retour arrière : `git revert` du commit, puis nouveau push.

## Open Questions

- Durée de séance : le texte du prototype (« entre 45 minutes et une heure ») est conservé en attendant la confirmation d'Aurélie, avec le tarif.
