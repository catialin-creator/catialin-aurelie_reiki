# Design : add-formulaire-contact

## Context

La section `#contact` de `index.html` affiche aujourd'hui trois liens : téléphone, e-mail et adresse. Le site n'a aucun script et aucun service tiers. Contraintes du projet : JS natif sans build, Web3Forms comme service d'envoi, clé publique placée dans `index.html`, WCAG 2.1 AA, aucun traceur, Lighthouse ≥ 90. Pour la motivation, voir `proposal.md`. Pour les exigences, voir `specs/formulaire-contact/spec.md`.

## Goals / Non-Goals

**Goals :**
- Un formulaire qui fonctionne aussi sans JavaScript (amélioration progressive) et qui, avec JavaScript, donne un retour dans la page.
- Un seul endroit à modifier pour la clé d'accès.
- Des comportements de succès, d'erreur et d'anti-spam vérifiables sans clé réelle.

**Non-Goals :**
- Captcha (hCaptcha, Turnstile…) : ce serait un service tiers de plus, à ne considérer que si du spam passe malgré le champ piège.
- Accusé de réception envoyé au visiteur (option payante de Web3Forms).
- Page de politique de confidentialité : livrée par le changement 3. Le lien du consentement y pointe déjà.

## Decisions

### 1. Clé d'accès : champ caché dans `index.html`
`<input type="hidden" name="access_key" value="A_REMPLACER">`, précédé d'un commentaire HTML « Clé Web3Forms : remplacer A_REMPLACER ». C'est l'unique endroit où la clé apparaît : `main.js` la lit dans le formulaire. Cette solution respecte `CLAUDE.md` (clé dans `index.html`) et permet aussi l'envoi sans JavaScript.
*Alternative écartée* : une constante dans `main.js`. L'envoi sans JS ne fonctionnerait plus, et la clé serait à deux endroits.

### 2. Amélioration progressive
Le `<form>` porte `action="https://api.web3forms.com/submit" method="POST"`. Sans JS, le navigateur poste directement et Web3Forms affiche sa page de confirmation. Avec JS, `main.js` intercepte `submit`, appelle `preventDefault()` et envoie le message avec `fetch`.

### 3. Validation native
Les attributs `required`, `type="email"`, `type="tel"` et `maxlength` suffisent. L'événement `submit` ne se déclenche que si le formulaire est valide, et les messages d'erreur du navigateur sont déjà en français pour un visiteur francophone. Aucun code de validation personnalisé n'est nécessaire.

### 4. Envoi en JSON avec délai maximal
`fetch` en `POST`, corps `JSON.stringify(Object.fromEntries(new FormData(form)))`, en-têtes `Content-Type: application/json` et `Accept: application/json`. Un `AbortController` limite l'attente à 15 s. La réponse est un succès seulement si le statut HTTP est 2xx **et** si le JSON contient `success: true`. Tout autre cas (erreur HTTP, JSON invalide, réseau coupé, délai dépassé) affiche le message d'erreur.

### 5. Données envoyées
Noms des champs (ce sont les libellés qu'Aurélie verra dans l'e-mail) : `nom`, `email`, `telephone`, `creneau_souhaite`, `message`, `consentement`. Champs cachés : `access_key`, `from_name` (« Site Reiki Aurélie Irigoyen »), `subject`. Juste avant l'envoi, le script remplace `subject` par « Nouveau message de <nom> – site Reiki ». Web3Forms utilise le champ `email` comme adresse de réponse : Aurélie n'a donc qu'à répondre au mail reçu.

### 6. Champ piège
On suit la convention de Web3Forms : `<input type="checkbox" name="botcheck">` dans un conteneur masqué par `display:none`, `aria-hidden="true"`, avec `tabindex="-1"` et `autocomplete="off"`. Côté client, si la case est cochée, le script n'envoie rien et affiche le message de succès, pour ne pas renseigner le robot. Web3Forms rejette aussi ces envois côté serveur, ce qui couvre le cas sans JS.

### 7. Clé provisoire
Si `access_key` vaut `A_REMPLACER`, le script n'appelle pas le réseau et affiche : « Le formulaire n'est pas encore activé. Appelez-moi au 07 69 52 76 58 ou écrivez à aurelie.reiki@hotmail.com. » Cela évite de publier un formulaire qui échouerait sans explication.

### 8. États et accessibilité
Une zone `<p class="form-status" role="status" aria-live="polite">` sous le bouton reçoit les messages, avec une classe `is-success` ou `is-error` pour la couleur et une icône textuelle. Pendant l'envoi, le bouton est désactivé (ce qui évite le double envoi) et affiche « Envoi en cours… ». En cas de succès, `form.reset()` vide le formulaire. En cas d'erreur, les champs restent remplis. Les messages contiennent des liens `tel:` et `mailto:`, donc ils sont construits avec des nœuds DOM et non avec `innerHTML` alimenté par des saisies.

### 9. Mise en page
Mobile : coordonnées (téléphone, SMS, e-mail, adresse) empilées, puis le formulaire. À partir de 861 px : deux colonnes, coordonnées à gauche (environ 1/3) et formulaire à droite (environ 2/3). Le fond des champs utilise `--surface`, la bordure `--line`, et le focus garde le contour existant. Le bouton d'envoi reprend `.btn-gold`. Les champs font au moins 44 px de haut et utilisent une police de 1rem, ce qui évite le zoom automatique d'iOS.

### 10. Chargement du script
`<script src="assets/js/main.js" defer></script>` en fin de `head`. Le script est encapsulé dans une IIFE en mode strict et ne fait rien si le formulaire est absent. Il pèse moins de 3 Ko, donc l'impact sur Lighthouse est négligeable.

### 11. Vérification sans clé réelle
Les tests automatisés (Puppeteer, dans le dossier temporaire et non commités) interceptent les requêtes vers `api.web3forms.com` pour simuler un succès, une erreur 4xx/5xx et une coupure réseau. Ils vérifient aussi la clé provisoire et le champ piège. Le test réel (F3.2, message reçu sur Hotmail) se fait après la création de la clé.

## Risks / Trade-offs

- [Clé laissée à `A_REMPLACER` en production] → Le message de repli reste utile, et la checklist de DEMARRAGE.md §5 rappelle de la remplacer.
- [Messages Web3Forms classés en indésirables chez Hotmail] → Tester avec la vraie clé, puis ajouter l'expéditeur Web3Forms aux contacts approuvés.
- [Spam qui passe le champ piège] → Surveiller les premières semaines. Si besoin, nouveau changement pour ajouter le captcha de Web3Forms.
- [Lien de confidentialité cassé jusqu'au changement 3] → Même contrainte que le lien « Mentions légales » : ne pas diffuser le site avant le changement 3.
- [Quota gratuit de 250 envois par mois] → Très au-dessus de l'objectif d'un message par semaine.

## Migration Plan

Déploiement par push sur `main`. Ensuite : créer la clé sur web3forms.com avec aurelie.reiki@hotmail.com, remplacer `A_REMPLACER` dans `index.html`, pousser, puis envoyer un message de test et vérifier la boîte Hotmail. Retour arrière : `git revert`.
