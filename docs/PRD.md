# PRD – Site Reiki Aurélie Irigoyen

Version du 22 novembre 2026. Document complet et commenté : https://claude.ai/artifact/6aGtAK6ynfxo86psr6uTxv

## 1. Contexte et objectifs

Mettre en ligne un site vitrine d'une page pour Aurélie Irigoyen, praticienne Reiki à Anglet, hébergé gratuitement sur GitHub Pages, qui permet d'envoyer un message sans appeler. La réservation en ligne viendra en V2.

Coordonnées : 07 69 52 76 58 · aurelie.reiki@hotmail.com · 8 rue Hondritz de Bas, 64600 Anglet. Le prototype `docs/prototype.html` sert de référence visuelle et de contenu.

Objectifs :
1. Présenter le Reiki et le déroulement d'une séance de façon claire et rassurante.
2. (V2) Permettre de réserver un créneau en ligne en moins de 2 minutes, sans compte.
3. Permettre d'envoyer une question via un formulaire, reçue par e-mail par Aurélie.
4. (V2) Laisser Aurélie gérer ses disponibilités seule, sans toucher au code.
5. Coût de fonctionnement limité au nom de domaine (environ 10 € par an).

| Indicateur (3 mois après mise en ligne) | Cible |
| --- | --- |
| Messages reçus via le formulaire | au moins 1 par semaine |
| Demandes de rendez-vous via le formulaire | suivi dès la V1 |
| Lighthouse mobile (performance, accessibilité, SEO) | 90 ou plus |
| Coût mensuel d'hébergement | 0 € |

## 2. Utilisateurs et parcours

| Profil | Besoin | Contexte |
| --- | --- | --- |
| Visiteur curieux | Comprendre le Reiki, savoir si c'est sérieux | Souvent sur mobile, via la carte de visite ou Google |
| Visiteur décidé | Prendre rendez-vous vite | En V1 : formulaire, téléphone ou SMS |
| Visiteur hésitant | Poser une question | Préfère écrire que téléphoner |
| Aurélie | Recevoir les demandes | Pas développeuse, tout depuis son téléphone |

Parcours V1 – Poser une question ou demander un rendez-vous :
1. Le visiteur remplit le formulaire (nom, e-mail, message, créneau souhaité facultatif, consentement).
2. Il voit un message de confirmation dans la page.
3. Aurélie reçoit le message sur sa boîte Hotmail et répond.

## 3. Périmètre

| Inclus en V1 | Exclu en V1 |
| --- | --- |
| Page unique : accueil, Reiki, séance, contact | Prise de rendez-vous en ligne (V2), paiement, acompte |
| Demande de rendez-vous par téléphone, SMS ou formulaire | Espace client |
| Formulaire de contact envoyé par e-mail | Back-office ou CMS |
| Bouton d'appel et lien itinéraire | Blog, newsletter, avis |
| Mentions légales et confidentialité | Multilingue |
| Nom de domaine personnalisé avec HTTPS | Cookies publicitaires ou de mesure |

## 4. Exigences fonctionnelles

### F1 – Contenu et navigation
| ID | Exigence | Critère d'acceptation |
| --- | --- | --- |
| F1.1 | En-tête : nom, accroche « Soin énergétique en Reiki », bouton « Me contacter » (le téléphone est dans la section contact et le pied de page) | Bouton visible sans défiler à 390 px |
| F1.2 | Section « Qu'est-ce que le Reiki ? » : définition, Rei et Ki, repères historiques | Contenu repris du prototype |
| F1.3 | Section « Déroulement d'une séance » en 4 étapes + conseils | 4 étapes en colonne sur mobile |
| F1.4 | Avertissement : le Reiki ne remplace pas un avis ou un traitement médical | Sous la section séance et dans les mentions légales |
| F1.5 | Menu d'ancres (Reiki, Séance, Contact) | Chaque lien fait défiler jusqu'à sa section |
| F1.6 | Pied de page : coordonnées, lien Mentions légales | Présent sur toutes les pages |

### F2 – Prise de rendez-vous (V2, reportée)
Hors V1. En V2 : intégration Cal.com (offre gratuite), confirmation e-mail, annulation par lien, gestion des horaires par Aurélie, repli lien + téléphone.

### F3 – Prise de contact
| ID | Exigence | Critère d'acceptation |
| --- | --- | --- |
| F3.1 | Champs : nom, e-mail, téléphone (facultatif), message, créneau souhaité (facultatif, texte libre), consentement | Champs obligatoires signalés, validation HTML5 |
| F3.2 | Envoi via Web3Forms vers aurelie.reiki@hotmail.com | Message reçu lors du test |
| F3.3 | Message de succès ou d'erreur dans la page, sans rechargement | Les deux états testés |
| F3.4 | Anti-spam : champ piège invisible (honeypot) | Envoi ignoré si le champ est rempli |
| F3.5 | Liens directs tel:, sms:, mailto:, itinéraire Google Maps | Chaque lien ouvre l'appli attendue sur mobile |

### F4 – Mentions légales
| ID | Exigence | Critère d'acceptation |
| --- | --- | --- |
| F4.1 | `mentions-legales.html` : éditeur (nom, statut, SIRET), hébergeur (GitHub), services tiers | Informations obligatoires renseignées |
| F4.2 | Politique de confidentialité : données, finalité, conservation, droits | Lien depuis le formulaire et le pied de page |

## 5. Exigences non fonctionnelles

| Domaine | Exigence |
| --- | --- |
| Performance | Sans framework, moins de 300 Ko ; Lighthouse ≥ 90 |
| Responsive | Mobile d'abord, aucun défilement horizontal de 320 à 1440 px |
| Accessibilité | WCAG 2.1 AA : contraste ≥ 4,5:1, clavier, libellés, textes alternatifs |
| Thème | Mode sombre et prefers-reduced-motion respectés |
| SEO local | title, meta description, Open Graph, Schema.org LocalBusiness, sitemap.xml, robots.txt |
| RGPD | Aucun traceur ; consentement avant envoi ; polices auto-hébergées |
| Sécurité | HTTPS forcé, aucune donnée sensible collectée |

## 6. Architecture

HTML/CSS/JS natifs publiés par GitHub Pages (dépôt public, branche main). Formulaire : Web3Forms, offre gratuite de 250 envois par mois, clé publique par conception. V2 : Cal.com pour les rendez-vous. Domaine personnalisé via fichier CNAME + DNS chez OVHcloud, puis « Enforce HTTPS ».

## 7. Identité visuelle

| Élément | Valeur |
| --- | --- |
| Bleu nuit | #1C2142 |
| Or | #C9A46A ; #9C7A43 pour le texte sur fond clair |
| Rose poudré | #D4A096 |
| Fond clair | #F2F1F6 |
| Titres | Cormorant Garamond |
| Texte | Jost |
| Illustrations | SVG mains dorées et étoiles ; mandala et yin-yang |

À fournir par Aurélie : tarif et durée, photo (facultatif), statut et SIRET, orthographe exacte de l'adresse, formation (facultatif).

## 8. Changements OpenSpec

| Ordre | Changement | Contenu | Exigences |
| --- | --- | --- | --- |
| V1 – 1 | `add-site-vitrine` | Page unique, contenus, charte, responsive, mise en ligne | F1, NFR |
| V1 – 2 | `add-formulaire-contact` | Formulaire Web3Forms, honeypot, états, liens directs | F3 |
| V1 – 3 | `add-mentions-legales-seo` | Mentions, confidentialité, Schema.org, sitemap, Open Graph | F4, SEO, RGPD |
| V1 – 4 | `add-nom-de-domaine` | CNAME, DNS OVHcloud, HTTPS | Sécurité |
| V2 | `add-prise-de-rendez-vous` | Intégration Cal.com | F2 |
