# Spec Delta

## Purpose

Définit l'apparence du site et ses garanties de qualité : charte de couleurs et typographies, mode sombre, mise en page responsive, accessibilité WCAG 2.1 AA, respect du mouvement réduit, confidentialité des polices et performance.

## ADDED Requirements

### Requirement: Couleurs de la charte
Le site SHALL utiliser la charte : bleu nuit #1C2142, or #C9A46A (#9C7A43 pour du texte sur fond clair), rose poudré #D4A096, fond clair #F2F1F6. Les couleurs SHALL être définies comme variables CSS sur `:root`.

#### Scenario: Rendu en mode clair
- **WHEN** la page est affichée avec un système en thème clair
- **THEN** l'en-tête est bleu nuit avec le titre en or, et le fond des sections est #F2F1F6 ou blanc

### Requirement: Mode sombre
Lorsque le système du visiteur est en thème sombre, le site SHALL basculer vers les variantes sombres de la charte, avec un fond explicite, en conservant les contrastes exigés.

#### Scenario: Système en thème sombre
- **WHEN** la préférence `prefers-color-scheme: dark` est active
- **THEN** le fond des sections devient bleu nuit foncé, le texte devient clair, et aucun texte n'est illisible

### Requirement: Typographies auto-hébergées
Les titres SHALL utiliser Cormorant Garamond et le texte Jost, servis depuis le site lui-même au format `.woff2`. La page MUST NOT appeler de serveur de polices tiers. Le texte SHALL rester visible pendant le chargement des polices.

#### Scenario: Aucun appel à Google Fonts
- **WHEN** on charge la page en observant le réseau
- **THEN** aucune requête ne part vers `fonts.googleapis.com` ou `fonts.gstatic.com`, et les polices proviennent de `assets/fonts/`

#### Scenario: Chargement lent des polices
- **WHEN** les polices tardent à se charger
- **THEN** le texte s'affiche immédiatement dans une police de repli, puis bascule vers la police du site

### Requirement: Mise en page responsive
La page SHALL être conçue mobile d'abord et MUST NOT provoquer de défilement horizontal à aucune largeur comprise entre 320 et 1440 px.

#### Scenario: Largeurs extrêmes
- **WHEN** la page est affichée à 320 px, 390 px, 768 px, 1024 px et 1440 px de large
- **THEN** aucun contenu ne dépasse la largeur de l'écran et aucune barre de défilement horizontale n'apparaît

#### Scenario: Adresse e-mail longue sur petit écran
- **WHEN** la page est affichée à 320 px
- **THEN** l'adresse e-mail passe à la ligne au lieu de déborder

### Requirement: Contrastes accessibles
Tout texte SHALL présenter un contraste d'au moins 4,5:1 avec son fond (3:1 pour le texte de grande taille), en mode clair comme en mode sombre.

#### Scenario: Vérification des contrastes
- **WHEN** on contrôle les couples texte / fond avec un outil de contraste dans les deux thèmes
- **THEN** tous respectent les seuils WCAG 2.1 AA

### Requirement: Mouvement réduit
Lorsque le visiteur a demandé de réduire les animations, le site MUST NOT animer les étoiles et MUST NOT faire défiler la page de façon animée.

#### Scenario: Préférence de mouvement réduit
- **WHEN** la préférence `prefers-reduced-motion: reduce` est active
- **THEN** les étoiles restent fixes et les liens d'ancre sautent directement à leur section

### Requirement: Structure sémantique
La page SHALL comporter un seul titre de niveau 1, une hiérarchie de titres sans saut de niveau, et les repères `header`, `nav`, `main` et `footer`.

#### Scenario: Plan du document
- **WHEN** on inspecte la structure de la page avec un outil d'accessibilité
- **THEN** on trouve un unique `h1`, des `h2` pour les sections et des `h3` pour leurs sous-parties, ainsi que les repères attendus

### Requirement: Performance et qualité
La page d'accueil et ses ressources SHALL peser moins de 300 Ko au total. La page SHALL obtenir au moins 90 dans Lighthouse mobile en performance, accessibilité, bonnes pratiques et SEO.

#### Scenario: Audit Lighthouse mobile
- **WHEN** on lance Lighthouse en mode mobile sur la page publiée
- **THEN** les quatre scores sont supérieurs ou égaux à 90 et le poids transféré total est inférieur à 300 Ko
