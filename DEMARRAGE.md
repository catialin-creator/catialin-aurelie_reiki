# Démarrer avec Claude Code

## 1. Installer (une seule fois)
- VS Code, l'extension Claude Code, Git, Node.js 20.19 ou plus récent.
- OpenSpec : `npm install -g @fission-ai/openspec@latest`

## 2. Créer le projet
1. Sur GitHub, créer un dépôt **public** `aurelie-reiki` et le cloner dans VS Code.
2. Copier dans ce dépôt le contenu de ce kit : `CLAUDE.md`, `docs/PRD.md`, `docs/prototype.html`.
3. Dans le terminal du dépôt : `openspec init` et choisir Claude Code.
4. Premier commit : `git add . && git commit -m "Kit de démarrage" && git push`

## 3. Prompts à coller dans Claude Code, dans l'ordre

Pour chaque changement : lancer la commande, **relire** les fichiers créés dans
`openspec/changes/<nom>/`, puis `/opsx:apply`, vérifier, puis `/opsx:archive` et pousser.

**Changement 1 – site vitrine**
```
/opsx:propose add-site-vitrine
Crée la page unique décrite en F1 de docs/PRD.md, en reprenant les textes, les SVG et la charte
de docs/prototype.html, sans le module de disponibilités. Respecte CLAUDE.md
(HTML/CSS/JS natifs, polices auto-hébergées, mobile d'abord, WCAG AA).
Le bouton « Me contacter » pointe vers la section Contact.
```

**Changement 2 – formulaire de contact**
```
/opsx:propose add-formulaire-contact
Ajoute le formulaire de contact décrit en F3 de docs/PRD.md : Web3Forms (clé dans une constante
facile à remplacer, valeur provisoire "A_REMPLACER"), champ « Créneau souhaité » facultatif,
honeypot, consentement, messages de succès et d'erreur sans rechargement, liens tel:, sms:,
mailto: et itinéraire.
```

**Changement 3 – mentions légales et SEO**
```
/opsx:propose add-mentions-legales-seo
Ajoute mentions-legales.html (F4), une page 404, les balises SEO, Open Graph, Schema.org
LocalBusiness, sitemap.xml et robots.txt. Laisse des marqueurs [À COMPLÉTER] pour le statut
juridique et le SIRET.
```

**Changement 4 – nom de domaine** (après l'achat du domaine)
```
/opsx:propose add-nom-de-domaine
Ajoute le fichier CNAME pour <mon-domaine.fr> et documente dans docs/DEPLOIEMENT.md les
enregistrements DNS à créer chez OVHcloud et l'activation de « Enforce HTTPS ».
```

## 4. Mettre en ligne
GitHub → Settings → Pages → « Deploy from a branch » → `main`, dossier `/ (root)`.
Le site apparaît sur `https://<compte>.github.io/aurelie-reiki/`.

## 5. Avant d'ouvrir le site au public
- Créer la clé Web3Forms avec aurelie.reiki@hotmail.com et remplacer "A_REMPLACER".
- Envoyer un message de test et vérifier la boîte Hotmail (et les indésirables).
- Compléter statut juridique, SIRET, tarif et durée de séance.
