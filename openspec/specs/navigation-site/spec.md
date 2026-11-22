# navigation-site Specification

## Purpose

Définit comment le visiteur se déplace dans le site et passe à l'action : menu d'ancres, boutons de l'en-tête, pied de page commun à toutes les pages.

## Requirements

### Requirement: Boutons d'action de l'en-tête
L'en-tête SHALL proposer deux boutons : « Me contacter », qui mène à la section `#contact`, et « Appeler le 07 69 52 76 58 », qui ouvre un lien `tel:+33769527658`.

#### Scenario: Boutons visibles sans défiler sur mobile
- **WHEN** la page est ouverte sur un écran de 390 × 844 px
- **THEN** les deux boutons sont entièrement visibles sans faire défiler la page

#### Scenario: Me contacter
- **WHEN** le visiteur active « Me contacter »
- **THEN** la page défile jusqu'à la section contact et son titre est visible

#### Scenario: Appeler
- **WHEN** le visiteur active « Appeler » sur un mobile
- **THEN** l'application Téléphone s'ouvre avec le 07 69 52 76 58

### Requirement: Menu d'ancres
La page SHALL afficher en haut un menu de navigation (élément `nav` avec un nom accessible) contenant trois liens : « Reiki » vers `#reiki`, « Séance » vers `#seance`, « Contact » vers `#contact`. Le menu SHALL fonctionner sans JavaScript.

#### Scenario: Chaque lien atteint sa section
- **WHEN** le visiteur active l'un des trois liens du menu
- **THEN** la page défile jusqu'à la section correspondante, dont le titre n'est pas masqué

#### Scenario: Menu sur petit écran
- **WHEN** la page est affichée à 320 px de large
- **THEN** les trois liens restent visibles et utilisables, sans défilement horizontal

### Requirement: Navigation au clavier
Tous les liens et boutons de la page SHALL être atteignables à la touche Tab dans l'ordre de lecture et SHALL afficher un indicateur de focus visible.

#### Scenario: Parcours au clavier
- **WHEN** le visiteur parcourt la page avec Tab
- **THEN** le focus passe par le menu, les boutons de l'en-tête puis les liens de contact et du pied de page, avec un contour visible sur chaque élément

### Requirement: Pied de page commun
Chaque page du site SHALL se terminer par un pied de page qui affiche le nom, le téléphone, l'e-mail, l'adresse et un lien « Mentions légales » vers `mentions-legales.html`.

#### Scenario: Pied de page de l'accueil
- **WHEN** le visiteur arrive en bas de la page d'accueil
- **THEN** il voit les coordonnées complètes et le lien « Mentions légales »
