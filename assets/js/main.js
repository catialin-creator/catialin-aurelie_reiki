/* Site Reiki · Aurélie Irigoyen
   Formulaire de contact : envoi sans rechargement via Web3Forms.
   Sans JavaScript, le formulaire poste directement vers Web3Forms. */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form || !window.fetch || !window.FormData) return;

  var ENDPOINT = form.getAttribute('action');
  var PLACEHOLDER_KEY = 'A_REMPLACER';
  var TIMEOUT_MS = 15000;
  var PHONE = { href: 'tel:+33769527658', text: '07 69 52 76 58' };
  var EMAIL = { href: 'mailto:aurelie.reiki@hotmail.com', text: 'aurelie.reiki@hotmail.com' };

  var status = document.getElementById('form-status');
  var button = form.querySelector('button[type="submit"]');
  var buttonLabel = button.textContent;
  var sending = false;

  // Construit le message avec des nœuds DOM (jamais d'innerHTML).
  // parts : chaînes de texte ou objets {href, text} pour les liens.
  function showStatus(kind, parts) {
    status.className = 'form-status is-' + kind;
    status.textContent = '';
    parts.forEach(function (part) {
      if (typeof part === 'string') {
        status.appendChild(document.createTextNode(part));
      } else {
        var a = document.createElement('a');
        a.href = part.href;
        a.textContent = part.text;
        status.appendChild(a);
      }
    });
  }

  function showSuccess() {
    showStatus('success', ['Merci, votre message est bien envoyé. Je vous réponds au plus vite.']);
  }

  function showError() {
    showStatus('error', [
      'Votre message n\'a pas pu être envoyé. Vous pouvez réessayer, m\'appeler au ',
      PHONE, ' ou m\'écrire à ', EMAIL, '.'
    ]);
  }

  function showNotConfigured() {
    showStatus('error', [
      'Le formulaire n\'est pas encore activé. Appelez-moi au ',
      PHONE, ' ou écrivez-moi à ', EMAIL, '.'
    ]);
  }

  function setSending(on) {
    sending = on;
    button.disabled = on;
    button.textContent = on ? 'Envoi en cours…' : buttonLabel;
  }

  form.addEventListener('submit', function (event) {
    // L'événement n'est déclenché que si la validation native du navigateur est passée.
    event.preventDefault();
    if (sending) return;

    // Champ piège rempli : on n'envoie rien et on ne renseigne pas le robot.
    if (form.elements.botcheck && form.elements.botcheck.checked) {
      form.reset();
      showSuccess();
      return;
    }

    var data = new FormData(form);
    var key = String(data.get('access_key') || '').trim();
    if (!key || key === PLACEHOLDER_KEY) {
      showNotConfigured();
      return;
    }

    var nom = String(data.get('nom') || '').trim();
    data.set('subject', 'Nouveau message de ' + nom + ' – site Reiki');
    data.delete('botcheck');

    var payload = {};
    data.forEach(function (value, name) { payload[name] = value; });

    var controller = window.AbortController ? new AbortController() : null;
    var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : null;

    setSending(true);
    status.className = 'form-status';
    status.textContent = '';

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller ? controller.signal : undefined
    })
      .then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (json) {
          return response.ok && json && json.success === true;
        });
      })
      .catch(function () { return false; })
      .then(function (ok) {
        if (timer) clearTimeout(timer);
        setSending(false);
        if (ok) {
          form.reset();
          showSuccess();
        } else {
          showError();
        }
      });
  });
})();
