const switcher = document.querySelector('.map-switch');
if (switcher) {
  const buttons = [...switcher.querySelectorAll('button[data-map]')];
  const panels = [...document.querySelectorAll('[data-map-panel]')];
  const activate = name => {
    for (const button of buttons) button.setAttribute('aria-pressed', String(button.dataset.map === name));
    for (const panel of panels) panel.hidden = panel.dataset.mapPanel !== name;
  };
  for (const button of buttons) button.addEventListener('click', () => activate(button.dataset.map));
  activate('wide');
  switcher.hidden = false;
}
