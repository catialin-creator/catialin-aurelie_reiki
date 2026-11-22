# contenu-site Specification

## Purpose

Définit le contenu éditorial de la page d'accueil : présentation d'Aurélie, explication du Reiki, déroulement d'une séance, avertissement médical et coordonnées, dans un ton chaleureux et sans promesse thérapeutique.

## Requirements

### Requirement: En-tête de présentation
La page SHALL s'ouvrir sur un en-tête qui affiche le nom « Aurélie IRIGOYEN », l'accroche « Soin énergétique en Reiki », le texte d'introduction du prototype et l'illustration des mains dorées et des étoiles.

#### Scenario: Affichage de l'en-tête
- **WHEN** un visiteur ouvre la page d'accueil
- **THEN** il voit le nom, l'accroche, le texte d'introduction et l'illustration des mains, avant toute autre section

#### Scenario: Illustration décorative ignorée par les lecteurs d'écran
- **WHEN** un lecteur d'écran parcourt l'en-tête
- **THEN** l'illustration des mains n'est pas annoncée

### Requirement: Citation et emblème
La page SHALL présenter, après l'en-tête, la citation « Le Reiki n'est ni un massage ni une manipulation… » accompagnée de l'emblème mandala / yin-yang, doté d'un texte alternatif.

#### Scenario: Citation visible
- **WHEN** le visiteur fait défiler la page sous l'en-tête
- **THEN** il voit la citation et l'emblème, et un lecteur d'écran annonce l'emblème par « Mandala et yin-yang »

### Requirement: Section « Qu'est-ce que le Reiki ? »
La page SHALL contenir une section identifiée `reiki` qui reprend du prototype la définition, la précision sur l'absence de caractère religieux, les blocs « 霊 Rei » et « 気 Ki » et les quatre repères historiques (1865, début des années 1920, 1922, après 1926).

#### Scenario: Contenu repris du prototype
- **WHEN** le visiteur lit la section Reiki
- **THEN** les textes sont identiques à ceux de `docs/prototype.html`, et la frise historique est une liste ordonnée de quatre éléments

### Requirement: Section « Déroulement d'une séance »
La page SHALL contenir une section identifiée `seance` avec le paragraphe d'introduction, quatre étapes numérotées (L'accueil, L'installation, Le soin, Le retour) et l'encadré de conseils du prototype.

#### Scenario: Quatre étapes en colonne sur mobile
- **WHEN** la page est affichée sur un écran de 390 px de large
- **THEN** les quatre étapes sont empilées sur une seule colonne, dans l'ordre 1 à 4

#### Scenario: Étapes sur grand écran
- **WHEN** la page est affichée sur un écran d'au moins 861 px de large
- **THEN** les étapes sont réparties sur plusieurs colonnes et restent lisibles dans l'ordre 1 à 4

### Requirement: Avertissement médical
La page SHALL afficher, sous la section séance, l'avertissement indiquant que le Reiki ne pose pas de diagnostic et ne remplace en aucun cas un avis, un suivi ou un traitement médical ou psychologique.

#### Scenario: Avertissement présent
- **WHEN** le visiteur arrive à la fin de la section séance
- **THEN** il lit l'avertissement médical, avant la section contact

### Requirement: Aucune promesse thérapeutique
Les textes du site MUST NOT affirmer ni laisser entendre que le Reiki guérit, soigne une maladie ou remplace un traitement. Ils SHALL vouvoyer le visiteur.

#### Scenario: Relecture du contenu
- **WHEN** on relit l'ensemble des textes de la page
- **THEN** aucun ne promet d'effet thérapeutique, et le visiteur est vouvoyé partout

### Requirement: Section contact avec coordonnées
La page SHALL contenir une section identifiée `contact`, titrée « Me contacter », qui affiche le téléphone (lien `tel:+33769527658`), un lien pour envoyer un SMS (`sms:+33769527658`), l'e-mail (lien `mailto:aurelie.reiki@hotmail.com`) et l'adresse « 8, rue Hondritz de Bas, 64600 Anglet » (lien d'itinéraire Google Maps ouvert dans un nouvel onglet).

#### Scenario: Appel depuis un mobile
- **WHEN** le visiteur touche le numéro de téléphone sur un mobile
- **THEN** l'application Téléphone s'ouvre avec le 07 69 52 76 58

#### Scenario: SMS depuis un mobile
- **WHEN** le visiteur touche le lien SMS sur un mobile
- **THEN** l'application Messages s'ouvre avec le destinataire 07 69 52 76 58

#### Scenario: E-mail
- **WHEN** le visiteur touche l'adresse e-mail
- **THEN** sa messagerie s'ouvre avec le destinataire aurelie.reiki@hotmail.com

#### Scenario: Itinéraire
- **WHEN** le visiteur touche l'adresse
- **THEN** Google Maps s'ouvre dans un nouvel onglet sur le 8 rue Hondritz de Bas, 64600 Anglet

### Requirement: Absence du module de disponibilités
La page MUST NOT contenir la section « Mes disponibilités », ni le dialogue de réservation, ni aucun code dépendant de `window.claude`.

#### Scenario: Module absent
- **WHEN** on parcourt la page et son code source
- **THEN** on ne trouve ni la section disponibilités, ni de lien vers `#disponibilites`, ni de référence à `window.claude`

### Requirement: Métadonnées de base
La page SHALL déclarer la langue française et un titre « Aurélie Irigoyen · Soin énergétique en Reiki à Anglet ». Sa description SHALL présenter les séances de Reiki à Anglet, sans mentionner de disponibilités ni de réservation en ligne.

#### Scenario: Onglet du navigateur et résultat de recherche
- **WHEN** la page est chargée
- **THEN** l'onglet affiche le titre attendu, `html` porte `lang="fr"`, et la description ne mentionne aucune réservation en ligne

### Requirement: Liens vers les réseaux sociaux
La section contact et le pied de page SHALL proposer un lien vers la page Facebook et un lien vers le compte Instagram d'Aurélie. Ces liens s'ouvrent dans un nouvel onglet et sont représentés par des icônes dans le style du site, avec un nom accessible. Le site MUST NOT intégrer de widget ni de script de ces réseaux.

#### Scenario: Ouverture de Facebook
- **WHEN** le visiteur active l'icône Facebook
- **THEN** la page Facebook d'Aurélie s'ouvre dans un nouvel onglet

#### Scenario: Lecteur d'écran
- **WHEN** un lecteur d'écran atteint les icônes
- **THEN** il annonce « Facebook (nouvel onglet) » et « Instagram (nouvel onglet) »

#### Scenario: Aucun traceur
- **WHEN** on charge la page en observant le réseau
- **THEN** aucune requête ne part vers facebook.com, instagram.com ou leurs domaines associés
