Y'a pas de vraie *bonne* solution pour une vraie lecture automatique du son sur une page.

Voici une solution proposée (qui est de toute façon toujours utile quand vous jouez du son) : le son est lu automatiquement avec le son coupé (muted), et un code Javascript va se charger couper ou rétablir le son.

- Si vous avez une seule (grande) page, c'est facilement applicable. 
- Si vous avez un seul son pour tout le site, on pourrait s'en tirer avec une `<iframe>` (la page principale contiendra le son, toujours actif - la navigation entre les différentes pages se ferait dans l'iframe)
- Si vous avez plusieurs pages et des sons différents par page, c'est plus embêtant. Parlez-en avec nous, qu'on trouve la meilleure solution