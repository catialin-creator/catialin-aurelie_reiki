# Projet : site Reiki d'Aurélie Irigoyen

Site vitrine d'une page pour Aurélie Irigoyen, praticienne Reiki à Anglet (64600).

## Sources de vérité
- `docs/PRD.md` : besoins, exigences (F1 à F4), critères d'acceptation.
- `openspec/specs/` : spécifications à jour après chaque archive OpenSpec.
- `docs/prototype.html` : référence visuelle et textes validés.
  IGNORER son module « Mes disponibilités » (code `window.claude`, publication d'artefact) :
  il ne fonctionne pas hors de la plateforme Claude. La prise de rendez-vous en ligne est prévue en V2.

## Stack et hébergement
- HTML, CSS et JavaScript natifs. Aucun framework, aucun bundler, aucune étape de build.
- Hébergement GitHub Pages depuis la branche `main`, dossier racine.
- Formulaire de contact : Web3Forms (POST `https://api.web3forms.com/submit`, champ `access_key`).
  La clé d'accès est publique par conception ; la placer dans `index.html`.
- Polices auto-hébergées en `.woff2` dans `assets/fonts/` (pas d'appel à Google Fonts, pour le RGPD).

## Arborescence cible
```
index.html, mentions-legales.html, 404.html
assets/css/style.css
assets/js/main.js
assets/fonts/
assets/img/
CNAME, robots.txt, sitemap.xml
docs/PRD.md, docs/prototype.html
openspec/
```

## Règles
- Langue du site : français. Ton chaleureux, vouvoiement.
- Charte : bleu nuit #1C2142, or #C9A46A (texte sur fond clair : #9C7A43), rose #D4A096,
  fond clair #F2F1F6 ; titres Cormorant Garamond, texte Jost.
- Couleurs en variables CSS sur `:root`, avec variantes `prefers-color-scheme: dark`.
- Mobile d'abord, aucun défilement horizontal de 320 à 1440 px.
- Accessibilité WCAG 2.1 AA : contrastes, navigation clavier, `label` sur chaque champ,
  `prefers-reduced-motion` respecté.
- Ne jamais promettre d'effet thérapeutique. Garder l'avertissement : le Reiki ne remplace pas
  un avis ou un traitement médical.
- Le dépôt est public : aucune donnée privée, aucun secret, aucun SIRET avant validation d'Aurélie.
- Coordonnées : 07 69 52 76 58 · aurelie.reiki@hotmail.com · 8 rue Hondritz de Bas, 64600 Anglet.

## Méthode
- Travailler par changements OpenSpec : `/opsx:propose` → relecture humaine → `/opsx:apply` → `/opsx:archive`.
- Ne pas commencer à coder avant que la proposition soit validée.
- Vérifier chaque changement : ouverture locale, test mobile (390 px), Lighthouse ≥ 90.
