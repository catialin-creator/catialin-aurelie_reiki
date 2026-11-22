# Proposition : add-formulaire-contact

## Why

Aujourd'hui, la page ne propose que le téléphone et l'e-mail. Or le PRD identifie un visiteur « hésitant » qui préfère écrire plutôt qu'appeler, et vise au moins un message par semaine via le site. Ce changement ajoute le formulaire décrit en F3, qui permet aussi de demander un rendez-vous en attendant la réservation en ligne prévue en V2.

## What Changes

- Ajout d'un formulaire dans la section « Me contacter » avec les champs : nom, e-mail, téléphone (facultatif), créneau souhaité (facultatif, texte libre), message et case de consentement obligatoire. La validation HTML5 est native.
- Envoi par Web3Forms (`POST https://api.web3forms.com/submit`) vers aurelie.reiki@hotmail.com. La clé d'accès est un champ caché `access_key` dans `index.html`, avec la valeur provisoire `A_REMPLACER` signalée par un commentaire.
- Création de `assets/js/main.js` : envoi sans rechargement, message de succès ou d'erreur affiché dans la page, bouton désactivé pendant l'envoi.
- Anti-spam : champ piège invisible (honeypot). S'il est rempli, rien n'est envoyé.
- Tant que la clé vaut `A_REMPLACER`, aucun envoi n'est tenté : la page affiche un message invitant à appeler ou à écrire directement.
- Ajout de liens Facebook et Instagram (icônes dans le style du site) dans la section contact et le pied de page, sans widget ni traceur.
- Ajout d'un lien `sms:` aux coordonnées de la section contact. Les liens `tel:`, `mailto:` et l'itinéraire, déjà présents, sont conservés.
- La case de consentement renvoie vers la politique de confidentialité (`mentions-legales.html#confidentialite`), qui sera livrée par `add-mentions-legales-seo`.

## Capabilities

### New Capabilities
- `formulaire-contact` : saisie, validation, consentement, anti-spam, envoi d'un message à Aurélie et retour affiché au visiteur.

### Modified Capabilities
- `contenu-site` : l'exigence « Section contact avec coordonnées » ajoute un lien SMS.
- `navigation-site` : à la demande de la cliente, l'en-tête ne garde que le bouton « Me contacter ». Le bouton « Appeler » et le nom « Aurélie Irigoyen » placé dans la barre de menu sont retirés. Le téléphone reste accessible dans la section contact et le pied de page. Cela s'écarte du critère F1.1 du PRD.

## Impact

- Fichiers modifiés : `index.html` (section contact) et `assets/css/style.css` (styles du formulaire et des messages).
- Nouveau fichier : `assets/js/main.js`, premier script du site. Il est chargé avec `defer` et n'a aucune dépendance.
- Service tiers : Web3Forms (offre gratuite de 250 envois par mois). Le navigateur du visiteur appelle `api.web3forms.com` uniquement au moment de l'envoi, sans traceur ni cookie.
- Avant l'ouverture au public : créer la clé Web3Forms avec aurelie.reiki@hotmail.com, remplacer `A_REMPLACER`, puis envoyer un message de test.
- RGPD : les données transitent par Web3Forms. Ce service devra être cité dans les mentions légales et la politique de confidentialité (changement 3).
