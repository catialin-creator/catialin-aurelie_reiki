# Spec Delta

## MODIFIED Requirements

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

## ADDED Requirements

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
