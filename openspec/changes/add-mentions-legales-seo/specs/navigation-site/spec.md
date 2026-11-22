# Spec Delta

## MODIFIED Requirements

### Requirement: Pied de page commun
Chaque page du site SHALL se terminer par un pied de page qui affiche le nom, le téléphone, l'e-mail, l'adresse et un lien « Mentions légales » vers `mentions-legales.html`.

#### Scenario: Pied de page de l'accueil
- **WHEN** le visiteur arrive en bas de la page d'accueil
- **THEN** il voit les coordonnées complètes et le lien « Mentions légales »

#### Scenario: Pied de page des autres pages
- **WHEN** le visiteur arrive en bas des mentions légales ou de la page 404
- **THEN** il voit le même pied de page que sur l'accueil, avec des liens qui fonctionnent

## ADDED Requirements

### Requirement: Page introuvable
Lorsqu'un visiteur demande une adresse qui n'existe pas sur le site, il SHALL voir une page 404 dans le style du site, qui explique que la page n'existe pas et propose un lien vers l'accueil et vers la section contact.

#### Scenario: Adresse erronée
- **WHEN** le visiteur ouvre une adresse inexistante du site, même dans un sous-dossier
- **THEN** la page 404 s'affiche avec ses styles et ses polices, et son lien « Retour à l'accueil » mène à l'accueil

### Requirement: Retour à l'accueil depuis les pages secondaires
Les mentions légales et la page 404 SHALL proposer, en haut de page, un menu qui renvoie aux sections Reiki, Séance et Contact de l'accueil.

#### Scenario: Menu des mentions légales
- **WHEN** le visiteur active « Contact » dans le menu des mentions légales
- **THEN** l'accueil s'ouvre sur la section contact
