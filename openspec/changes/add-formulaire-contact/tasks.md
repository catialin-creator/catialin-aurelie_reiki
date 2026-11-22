# Tasks

## 1. Coordonnées

- [x] 1.1 Ajouter dans la section `#contact` de `index.html` un lien « SMS » (`sms:+33769527658`) à côté du téléphone, de l'e-mail et de l'adresse. Vérifier dans le code que les quatre liens (`tel:`, `sms:`, `mailto:`, Google Maps avec `target="_blank" rel="noopener"`) sont présents

## 2. Formulaire HTML et styles

- [x] 2.1 Ajouter le `<form>` dans `#contact` (`action="https://api.web3forms.com/submit" method="POST"`) avec les champs cachés `access_key` (`A_REMPLACER`, précédé du commentaire de remplacement), `from_name` et `subject`, les champs `nom`, `email`, `telephone`, `creneau_souhaite`, `message`, la case `consentement` avec son lien vers `mentions-legales.html#confidentialite`, le champ piège `botcheck` (design §6), le bouton « Envoyer » et la zone `role="status"`. Vérifier que chaque champ visible a un `label for` associé et que les obligatoires portent `required` et la mention « (obligatoire) »
- [x] 2.2 Ajouter dans `assets/css/style.css` les styles du formulaire, des messages `is-success` / `is-error` et de la mise en page sur deux colonnes à partir de 861 px (design §9), en utilisant les variables de couleur existantes. Vérifier en mode clair et en mode sombre à 320, 390 et 1280 px qu'il n'y a ni débordement ni défilement horizontal
- [x] 2.3 Vérifier la validation native : un envoi avec un e-mail « marie@ », avec le consentement non coché, puis avec le message vide est bloqué par le navigateur, qui signale le champ fautif

## 3. Script d'envoi

- [x] 3.1 Créer `assets/js/main.js` (IIFE, mode strict, aucune dépendance) et le charger avec `defer` dans `index.html`. Vérifier qu'aucune erreur n'apparaît dans la console au chargement
- [x] 3.2 Implémenter l'interception de `submit` : champ piège (aucun envoi, message de succès), clé provisoire (aucun envoi, message de repli), objet du message personnalisé, envoi JSON avec délai de 15 s, bouton désactivé avec « Envoi en cours… » (design §4 à §8). Vérifier avec Puppeteer et interception réseau : succès (message affiché, formulaire vidé), erreur 500, `success:false`, coupure réseau (message d'erreur, champs conservés), clé provisoire et champ piège (aucune requête), double clic (une seule requête)
- [x] 3.3 Vérifier qu'avec JavaScript désactivé le formulaire poste directement vers `api.web3forms.com/submit` (attributs `action` et `method`, contrôlés dans Puppeteer avec JS désactivé)

## 4. Vérifications d'ensemble

- [x] 4.1 Parcourir la section contact au clavier : ordre logique, contour de focus visible, le champ piège n'est jamais atteint, et la zone de statut est annoncée (rôle `status` présent)
- [x] 4.2 Lancer axe (WCAG 2.1 AA) en mode clair et sombre, avec et sans message affiché (succès et erreur) : aucune violation
- [x] 4.3 Lancer Lighthouse mobile : performance, accessibilité, bonnes pratiques et SEO ≥ 90, poids total < 300 Ko, aucune requête vers un domaine tiers au chargement

## 5. Réseaux sociaux

- [x] 5.1 Ajouter les liens Facebook et Instagram (icônes SVG au trait dans un cercle doré, nom accessible, nouvel onglet) dans la section contact et le pied de page, avec des adresses provisoires `A_COMPLETER` signalées par un commentaire. Vérifier : axe sans violation, aucun débordement de 320 à 1280 px, aucune requête vers un réseau social au chargement
- [ ] 5.2 Remplacer `A_COMPLETER` par les adresses réelles des pages d'Aurélie et vérifier que chaque lien ouvre la bonne page

## Workflow follow-up

- Relecture humaine, puis commit et push sur `main`.
- Créer la clé sur web3forms.com avec aurelie.reiki@hotmail.com, remplacer `A_REMPLACER`, pousser, envoyer un message de test et vérifier la boîte Hotmail, y compris les indésirables (critère F3.2).
- Archiver avec `/openspec-archive-change add-formulaire-contact`.
