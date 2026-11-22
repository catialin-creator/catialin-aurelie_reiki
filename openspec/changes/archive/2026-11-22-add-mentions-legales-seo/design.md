# Design : add-mentions-legales-seo

## Context

Le site compte une seule page, `index.html`, qui charge `assets/css/style.css` et `assets/js/main.js`. Il est servi par GitHub Pages en tant que **site de projet**, sous `https://catialin-creator.github.io/catialin-aurelie_reiki/` : toutes les pages vivent donc sous le préfixe `/catialin-aurelie_reiki/`, jusqu'à l'arrivée du nom de domaine (changement 4). Il n'y a pas d'étape de build : le pied de page est recopié à la main dans chaque page. Pour la motivation, voir `proposal.md`. Pour les exigences, voir les specs.

## Goals / Non-Goals

**Goals :**
- Des mentions légales et une politique de confidentialité complètes, rédigées clairement, avec uniquement des informations vérifiables ou explicitement marquées `[À COMPLÉTER]`.
- Un passage au domaine définitif (changement 4) qui se résume à un rechercher-remplacer documenté.

**Non-Goals :**
- Inscription à Google Search Console et fiche Google Business Profile : démarches d'Aurélie, hors code.
- Rédaction juridique validée par un professionnel du droit : le texte suit les modèles usuels de la CNIL et de service-public.fr, et Aurélie le relit.
- Horaires, tarifs et avis dans Schema.org : ces informations ne sont pas encore fournies.

## Decisions

### 1. Adresse publique du site en un seul endroit par fichier
Les URL absolues (canonique, `og:url`, `og:image`, JSON-LD, sitemap, `robots.txt`) utilisent `https://catialin-creator.github.io/catialin-aurelie_reiki/`. Une liste des fichiers et des lignes concernés est ajoutée en commentaire en tête du sitemap, et le changement 4 la reprendra.
*Alternative écartée* : des URL relatives, que Open Graph, les sitemaps et la propriété canonique n'acceptent pas.

### 2. Page 404 : `<base href>` pour résister aux sous-dossiers
GitHub Pages sert `404.html` pour toute adresse inconnue, y compris `/catialin-aurelie_reiki/a/b/c`. Avec des chemins relatifs, les styles ne se chargeraient plus. `404.html` déclare donc `<base href="/catialin-aurelie_reiki/">`, et ses liens et ressources sont relatifs à cette base. Le changement 4 remplacera cette base par `/`.
*Alternative écartée* : des styles en ligne dans la 404. Ils dupliqueraient la charte et perdraient le cache de `style.css`.

### 3. Structure commune des pages secondaires
`mentions-legales.html` et `404.html` reprennent le `head` de base (polices préchargées, feuille de style, favicon), puis :
- un en-tête compact bleu nuit avec le menu (`index.html#reiki`, `#seance`, `#contact`) et un lien « Aurélie Irigoyen » vers l'accueil (seul lien vers l'accueil sur ces pages) ;
- un `main` avec un `h1` ;
- le pied de page identique à celui de l'accueil, icônes des réseaux sociaux comprises.

Elles ne chargent pas `main.js`, puisqu'il n'y a pas de formulaire. Une classe `.page-hero` donne un en-tête court, et une classe `.prose` met en forme le texte long (largeur de lecture d'environ 42 rem, titres `h2` et `h3`, listes, liens soulignés).

### 4. Contenu des mentions légales
- **Éditrice** : Aurélie Irigoyen, entrepreneuse individuelle. Le statut exact `[À COMPLÉTER]` (micro-entreprise, etc.) et le SIRET `[À COMPLÉTER]` restent à fournir. Viennent ensuite l'adresse, le téléphone et l'e-mail déjà publics sur le site.
- **Directrice de la publication** : Aurélie Irigoyen.
- **Hébergeur** : GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, site github.com.
- **Services tiers** : Web3Forms, qui transmet le formulaire par e-mail ; liens vers sa politique de confidentialité. Google Maps, Facebook et Instagram ne sont contactés qu'en cas de clic sur leur lien. Les polices sont hébergées sur le site.
- **Propriété intellectuelle** : textes et illustrations du site. Les polices Jost et Cormorant Garamond sont sous licence SIL OFL.
- **Avertissement médical** : repris mot pour mot de l'accueil.

Les marqueurs sont mis en évidence par une classe `.todo` (fond or pâle), pour être repérés facilement à la relecture.

### 5. Politique de confidentialité
- **Données** : nom, e-mail, téléphone (facultatif), créneau souhaité (facultatif) et message, envoyés par le formulaire. GitHub peut aussi enregistrer techniquement l'adresse IP lors de la consultation, pour la sécurité.
- **Finalité** : répondre à la demande et, le cas échéant, organiser un rendez-vous.
- **Base légale** : le consentement (case à cocher), article 6.1.a du RGPD.
- **Destinataires** : Aurélie uniquement. Web3Forms (sous-traitant d'envoi) et la messagerie Outlook / Hotmail de Microsoft sont hébergeurs techniques. Les données ne sont ni vendues ni utilisées pour de la prospection.
- **Conservation** : 3 ans après le dernier échange, comme le recommande la CNIL pour les contacts. Cette durée est marquée « à valider par Aurélie » dans les tâches, mais affichée telle quelle.
- **Transferts hors UE** : GitHub, Web3Forms et Microsoft peuvent traiter des données hors de l'Union européenne, avec les garanties prévues par le RGPD.
- **Droits** : accès, rectification, effacement, opposition, limitation, portabilité et retrait du consentement, par e-mail à aurelie.reiki@hotmail.com, avec une réponse sous un mois. Réclamation possible auprès de la CNIL (cnil.fr).
- **Cookies** : aucun, et aucun outil de mesure d'audience.

### 6. Métadonnées de l'accueil
- `<link rel="canonical">`.
- Balises Open Graph : `og:type=website`, `og:locale=fr_FR`, `og:site_name`, `og:title` et `og:description` (reprises du titre et de la description), `og:url`, `og:image` (URL absolue) avec `og:image:width`, `og:image:height` et `og:image:alt`.
- `twitter:card=summary_large_image`.

Les mentions légales reçoivent un titre, une description et une URL canonique propres. La 404 reçoit `noindex`.

### 7. Schema.org
Un bloc `<script type="application/ld+json">` dans l'accueil, de type `LocalBusiness`, avec : `name`, `description`, `url`, `image`, `telephone` (+33769527658), `email`, `address` (`PostalAddress` : 8 rue Hondritz de Bas, 64600 Anglet, FR) et `areaServed` (Anglet, Bayonne, Biarritz, Pays basque). `sameAs` (Facebook, Instagram) sera ajouté quand les adresses seront connues. Pas de `geo` (coordonnées non validées) ni de `priceRange`.
*Alternative écartée* : le type `HealthAndBeautyBusiness`, qui pourrait suggérer une activité de santé.

### 8. Image de partage générée depuis le site
`assets/img/og-image.png` (1200 × 630) est produite une seule fois par une capture Puppeteer d'une petite page HTML temporaire (dans le dossier temporaire, non commitée). Cette page utilise les polices du site, le SVG des mains, le fond bleu nuit, le nom et l'accroche. Le PNG est ensuite compressé sous 150 Ko si nécessaire.

### 9. Sitemap et robots
`sitemap.xml` liste l'accueil (`priority` 1.0) et les mentions légales (0.3), avec `lastmod` à la date de mise en ligne. `robots.txt` contient `User-agent: *`, `Allow: /` et `Sitemap: <url>/sitemap.xml`. Sur l'adresse de projet GitHub, les robots ne lisent pas ce fichier : il servira pleinement avec le domaine définitif.

## Risks / Trade-offs

- [Marqueurs `[À COMPLÉTER]` visibles en ligne] → Ils sont volontairement visibles pour ne pas être oubliés. Le site ne doit pas être diffusé tant qu'ils restent en place.
- [Texte juridique non relu par un juriste] → Il s'inspire des modèles officiels et Aurélie le relit. Il pourra être ajusté sans toucher à la structure.
- [Adresses provisoires dans six fichiers ou endroits] → Liste centralisée en commentaire du sitemap, reprise par le changement 4.
- [Données de l'hébergeur ou de Web3Forms qui évoluent] → Les liens pointent vers leurs propres politiques, qui font foi.

## Migration Plan

Push sur `main`, puis vérification en ligne : la 404 sur une adresse inventée, l'aperçu de partage (outil de débogage de partage de Facebook ou simple collage dans WhatsApp), et le validateur Schema.org. Retour arrière : `git revert`.

## Open Questions

- Statut juridique et SIRET : à fournir par Aurélie, sans effet sur la structure.
- Durée de conservation de 3 ans : à confirmer par Aurélie.
