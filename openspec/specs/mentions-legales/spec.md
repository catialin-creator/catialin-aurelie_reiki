# mentions-legales Specification

## Purpose

Informe les visiteurs de qui édite le site, de qui l'héberge et de ce que deviennent leurs données, conformément à la LCEN et au RGPD, sans jamais publier d'information non validée par Aurélie.

## Requirements

### Requirement: Page des mentions légales
Le site SHALL proposer une page `mentions-legales.html` qui identifie l'éditrice (nom, statut juridique, SIRET, adresse, téléphone, e-mail), la directrice de la publication et l'hébergeur (GitHub, Inc., avec son adresse).

#### Scenario: Accès depuis le pied de page
- **WHEN** le visiteur active le lien « Mentions légales » du pied de page
- **THEN** la page des mentions légales s'affiche avec l'éditrice, la directrice de la publication et l'hébergeur

### Requirement: Marqueurs pour les informations non validées
Le statut juridique et le SIRET SHALL apparaître sous la forme du marqueur visible `[À COMPLÉTER]` tant qu'Aurélie ne les a pas validés. Le dépôt MUST NOT contenir de SIRET ni d'autre donnée privée non validée.

#### Scenario: Recherche des marqueurs
- **WHEN** on recherche `[À COMPLÉTER]` dans `mentions-legales.html`
- **THEN** on trouve un marqueur pour le statut juridique et un pour le SIRET, et aucun numéro SIRET n'est présent dans le dépôt

### Requirement: Services tiers
La page SHALL lister les services tiers utilisés et ce qu'ils reçoivent : Web3Forms (contenu du formulaire), Google Maps, Facebook et Instagram (uniquement si le visiteur clique sur leur lien). Elle SHALL préciser que les polices sont hébergées sur le site.

#### Scenario: Visiteur qui s'interroge sur le formulaire
- **WHEN** le visiteur lit la section des services tiers
- **THEN** il apprend que ses messages transitent par Web3Forms, avec un lien vers la politique de confidentialité de ce service

### Requirement: Politique de confidentialité
La page SHALL contenir une section identifiée `confidentialite` qui décrit les données collectées par le formulaire, leur finalité, la base légale (consentement), les destinataires, la durée de conservation, les transferts hors Union européenne, les droits du visiteur et la manière de les exercer, ainsi que la possibilité d'une réclamation auprès de la CNIL.

#### Scenario: Lien depuis le formulaire
- **WHEN** le visiteur active le lien « Politique de confidentialité » du formulaire
- **THEN** la page des mentions légales s'ouvre directement sur la section confidentialité

#### Scenario: Exercice des droits
- **WHEN** le visiteur cherche comment faire effacer ses données
- **THEN** la section indique l'adresse e-mail à utiliser et le délai de réponse d'un mois

### Requirement: Absence de cookies
La page SHALL indiquer que le site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Le site MUST NOT afficher de bandeau de cookies.

#### Scenario: Vérification dans le navigateur
- **WHEN** on parcourt l'accueil et les mentions légales en inspectant le stockage du navigateur
- **THEN** aucun cookie n'est déposé

### Requirement: Avertissement médical dans les mentions
La page SHALL reprendre l'avertissement indiquant que le Reiki ne pose pas de diagnostic et ne remplace pas un avis ou un traitement médical.

#### Scenario: Lecture des mentions
- **WHEN** le visiteur lit les mentions légales
- **THEN** il y trouve l'avertissement médical
