# Spec Delta

## Purpose

Permet à un visiteur d'écrire à Aurélie depuis le site, sans appeler ni ouvrir sa messagerie : question ou demande de rendez-vous, avec consentement explicite, protection anti-spam et retour clair après l'envoi.

## ADDED Requirements

### Requirement: Champs du formulaire
La section contact SHALL contenir un formulaire avec les champs : nom (obligatoire), e-mail (obligatoire, format e-mail), téléphone (facultatif), créneau souhaité (facultatif, texte libre), message (obligatoire) et une case de consentement (obligatoire). Chaque champ SHALL avoir un libellé visible associé.

#### Scenario: Libellés et champs obligatoires
- **WHEN** le visiteur consulte le formulaire
- **THEN** chaque champ a un libellé visible, et les champs obligatoires sont signalés dans leur libellé et par l'attribut `required`

#### Scenario: Créneau souhaité facultatif
- **WHEN** le visiteur envoie le formulaire sans remplir le téléphone ni le créneau souhaité
- **THEN** l'envoi est accepté

### Requirement: Validation avant envoi
Le formulaire MUST NOT être envoyé tant qu'un champ obligatoire est vide, que l'e-mail est mal formé ou que le consentement n'est pas coché. Le navigateur SHALL alors signaler le champ concerné.

#### Scenario: E-mail invalide
- **WHEN** le visiteur saisit « marie@ » dans le champ e-mail et valide
- **THEN** aucun envoi n'a lieu et le champ e-mail est signalé

#### Scenario: Consentement non coché
- **WHEN** le visiteur remplit tous les champs sans cocher le consentement et valide
- **THEN** aucun envoi n'a lieu et la case de consentement est signalée

### Requirement: Consentement
La case de consentement SHALL indiquer que les données servent uniquement à répondre à la demande, et SHALL contenir un lien vers la politique de confidentialité.

#### Scenario: Lien vers la confidentialité
- **WHEN** le visiteur lit le texte de consentement
- **THEN** il y trouve un lien vers `mentions-legales.html#confidentialite`

### Requirement: Envoi à Aurélie
Un formulaire valide SHALL être transmis à Web3Forms avec la clé d'accès du site, un objet identifiant le site et le nom du visiteur, et l'adresse du visiteur comme adresse de réponse, pour être reçu sur aurelie.reiki@hotmail.com.

#### Scenario: Message reçu
- **WHEN** un visiteur envoie un formulaire valide avec la clé Web3Forms définitive
- **THEN** Aurélie reçoit sur aurelie.reiki@hotmail.com un e-mail qui contient tous les champs remplis, et peut y répondre directement au visiteur

### Requirement: Retour sans rechargement
Après l'envoi, la page MUST NOT se recharger. Elle SHALL afficher dans le formulaire un message de succès ou d'erreur, annoncé aux lecteurs d'écran. Pendant l'envoi, le bouton SHALL être désactivé et indiquer que l'envoi est en cours.

#### Scenario: Succès
- **WHEN** le service confirme la réception
- **THEN** un message confirme l'envoi et indique qu'Aurélie répondra au plus vite, et le formulaire est vidé

#### Scenario: Erreur
- **WHEN** le service répond par une erreur ou que le réseau est indisponible
- **THEN** un message d'erreur s'affiche avec le numéro de téléphone et l'adresse e-mail en solution de repli, et les champs saisis sont conservés

#### Scenario: Double clic
- **WHEN** le visiteur clique deux fois rapidement sur le bouton d'envoi
- **THEN** un seul envoi est effectué

### Requirement: Clé d'accès provisoire
Tant que la clé d'accès vaut `A_REMPLACER`, le formulaire MUST NOT contacter le service. Il SHALL afficher un message invitant à appeler ou à écrire directement.

#### Scenario: Clé non configurée
- **WHEN** un visiteur envoie un formulaire valide alors que la clé vaut `A_REMPLACER`
- **THEN** aucune requête ne part vers Web3Forms, et un message propose le téléphone et l'e-mail

### Requirement: Anti-spam par champ piège
Le formulaire SHALL contenir un champ piège invisible et ignoré par les lecteurs d'écran et le clavier. Si ce champ est rempli, l'envoi MUST NOT être transmis.

#### Scenario: Robot qui remplit tout
- **WHEN** le champ piège est rempli au moment de l'envoi
- **THEN** aucune requête n'est envoyée à Web3Forms

#### Scenario: Visiteur humain
- **WHEN** un visiteur parcourt le formulaire au clavier ou avec un lecteur d'écran
- **THEN** il ne rencontre jamais le champ piège

### Requirement: Accessibilité et mise en page du formulaire
Le formulaire SHALL être utilisable au clavier, respecter les contrastes WCAG 2.1 AA dans les deux thèmes et MUST NOT provoquer de défilement horizontal de 320 à 1440 px.

#### Scenario: Petit écran
- **WHEN** le formulaire est affiché à 320 px de large
- **THEN** tous les champs tiennent dans la largeur de l'écran et restent utilisables
