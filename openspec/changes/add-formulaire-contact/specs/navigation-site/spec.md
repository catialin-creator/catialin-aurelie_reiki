# Spec Delta

## ADDED Requirements

### Requirement: Bouton « Me contacter » de l'en-tête
L'en-tête SHALL proposer un unique bouton d'action, « Me contacter », qui mène à la section `#contact`.

#### Scenario: Bouton visible sans défiler sur mobile
- **WHEN** la page est ouverte sur un écran de 390 × 844 px
- **THEN** le bouton « Me contacter » est entièrement visible sans faire défiler la page

#### Scenario: Me contacter
- **WHEN** le visiteur active « Me contacter »
- **THEN** la page défile jusqu'à la section contact et son titre est visible

## REMOVED Requirements

### Requirement: Boutons d'action de l'en-tête
**Reason**: À la demande de la cliente, le bouton « Appeler » est retiré de l'en-tête pour l'alléger.
**Migration**: Le téléphone reste accessible par les liens `tel:` et `sms:` de la section contact et par le lien `tel:` du pied de page. Le bouton « Me contacter » est couvert par l'exigence « Bouton « Me contacter » de l'en-tête ».
