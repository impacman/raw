const addStyles = (el) => {
  el.style.display = 'none';
  el.style.opacity = '0';
  el.style.pointerEvents = 'none';
  el.style.visibility = 'hidden';
};

const toggleBody = (el) => {
  document.body.appendChild(el);
  el.click();

  setTimeout(() => document.body.removeChild(el), 100);
};

const createLink = (link) => {
  const a = document.createElement('a');
  a.href = link;
  a.download = link;

  addStyles(a);
  toggleBody(a);
};

export const download = ({ target }) => {
  const file = target.dataset.download;
  if (!file) return;

  createLink(`/pdf/${target.dataset.download}.pdf`);
};
