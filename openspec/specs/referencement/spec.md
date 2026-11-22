# referencement Specification

## Purpose

Aide les personnes qui cherchent une praticienne Reiki autour d'Anglet à trouver le site, et donne un aperçu soigné quand le lien est partagé sur une messagerie ou un réseau social.

## Requirements

### Requirement: URL canonique
Chaque page indexable SHALL déclarer son URL canonique absolue, construite sur l'adresse publique du site.

#### Scenario: Accueil
- **WHEN** on inspecte le `head` de l'accueil
- **THEN** il contient `<link rel="canonical">` pointant vers l'adresse publique de l'accueil

### Requirement: Aperçu de partage
L'accueil SHALL déclarer les balises Open Graph (`og:type`, `og:locale` fr_FR, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` avec dimensions et texte alternatif) et une carte Twitter `summary_large_image`. L'image SHALL mesurer 1200 × 630 px, respecter la charte et peser moins de 150 Ko.

#### Scenario: Lien partagé dans une messagerie
- **WHEN** l'adresse de l'accueil est collée dans WhatsApp, Messenger ou Facebook
- **THEN** l'aperçu affiche le titre, la description et l'image aux couleurs du site

### Requirement: Données structurées de l'activité
L'accueil SHALL contenir un bloc JSON-LD Schema.org `LocalBusiness` avec le nom, la description, l'adresse postale complète, le téléphone, l'e-mail, l'URL, l'image et la zone desservie. Il MUST NOT contenir de tarif, d'horaires ni de note qui n'auraient pas été validés.

#### Scenario: Test des résultats enrichis
- **WHEN** on soumet l'accueil à un validateur Schema.org
- **THEN** le bloc `LocalBusiness` est reconnu sans erreur

### Requirement: Plan du site
Le site SHALL publier un `sitemap.xml` qui liste l'accueil et les mentions légales avec leurs URL absolues, et un `robots.txt` qui autorise l'exploration et indique l'adresse du sitemap.

#### Scenario: Lecture des fichiers
- **WHEN** on ouvre `sitemap.xml` et `robots.txt`
- **THEN** le sitemap est un XML valide avec deux URL, et `robots.txt` contient `Allow: /` et une ligne `Sitemap:`

### Requirement: Pages exclues de l'indexation
La page 404 SHALL demander aux moteurs de recherche de ne pas l'indexer et MUST NOT figurer dans le sitemap.

#### Scenario: Page 404
- **WHEN** on inspecte le `head` de `404.html`
- **THEN** il contient `<meta name="robots" content="noindex">`

### Requirement: Titres et descriptions des pages
Chaque page SHALL avoir un titre unique et une meta description propre. Le score SEO de Lighthouse SHALL être d'au moins 90 sur l'accueil et sur les mentions légales.

#### Scenario: Audit
- **WHEN** on lance Lighthouse mobile sur l'accueil et sur les mentions légales
- **THEN** le score SEO de chacune est supérieur ou égal à 90
