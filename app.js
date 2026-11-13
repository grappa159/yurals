/* =========================================================
   НАСТРОЙКИ — правьте здесь
   ========================================================= */
const CONFIG = {
  whatsapp: '79922064047',          // куда уходят заявки (проверить, что на номере есть WhatsApp)
  showDemoBadge: false,              // плашка «Демо-версия» — убрать после согласования
  devName: 'Разработчик: Иван',
  devLink: '',                      // например 'https://t.me/your_nick'
  // 0 = воскресенье … 6 = суббота
  hours: [
    ['11:00', '23:00'], // Вс
    ['11:00', '23:00'], // Пн
    ['11:00', '23:00'], // Вт
    ['11:00', '23:00'], // Ср
    ['11:00', '23:00'], // Чт
    ['11:00', '00:00'], // Пт
    ['11:00', '00:00'], // Сб
  ],
};

/* ---------- география меню ---------- */
const GEO = [
  ['Оханск', 'Тартар из оханской оленины', 'оленина'],
  ['Бардым', 'Краб из Пермского моря', 'краб с бардымским картофелем'],
  ['Чердынь', 'Чердынский лес', 'грибовница со сметаной'],
  ['Елово', 'Еловская рыбка', 'уха из трёх видов рыбы'],
  ['Краснокамск', 'Краснокамск', 'борщ с телятиной'],
  ['Добрянка', 'Добрянка', 'суп-крем из копчёного лосося'],
  ['Куеда', 'Утка по-куедински', 'с тыквой и соусом барбекю'],
  ['Верхнечусовские Городки', 'Верхнечусовские голубцы', 'из мраморной говядины'],
  ['Строгановы', 'Строгановская вотчина', 'говяжьи щёки с грибами'],
  ['Нытва', 'Нытвенский сметанник', 'сметанник с ягодами'],
  ['Уинское', 'Уинский медовик', 'с заварным кремом'],
  ['Камское водохранилище', 'Пермское море', 'сливочный суп с крабом'],
];

/* ---------- меню: [название, описание, выход, цена] ---------- */
const MENU = [
  { id: 'breakfast', title: 'Завтраки', items: [
    ['Сырники с ягодами Пермского сбора', 'сырники с ягодами', '210 г', 540],
    ['Пермская болтушка', 'омлет с сыром и тартаром из лосося', '210 г', 780],
    ['С любовью из Перми', 'конверт с лососем и яйцом пашот', '240 г', 780],
    ['С любовью из Перми', 'конверт из цукини с икрой палтуса', '220 г', 750],
    ['А-ля Нобель', 'яйцо бенедикт с ростбифом', '210 г', 650],
    ['Ростбиф со сметаной', 'с картофельными оладьями', '240 г', 750],
    ['Микс салата с авокадо', 'киноа и вяленые томаты', '180 г', 530],
    ['Пармский сэндвич', 'сэндвич с мортаделлой', '200 г', 490],
    ['Белые ночи', 'йогурт с гранолой', '170 г', 380],
    ['Каша рисовая с ягодами', '', '300 г', 390],
    ['Каша овсяная', '', '300 г', 310],
  ]},
  { id: 'starters', title: 'Закуски', items: [
    ['Марка Юралс', 'картофель с икрой палтуса', '140 г', 770],
    ['Краб из Пермского моря', 'краб с бардымским картофелем', '140 г', 1250],
    ['Тартар из Оханской оленины', 'тартар из оленины', '150 г', 1100],
    ['Пряная форель', 'форель с солодовым хлебом', '150 г', 1100],
    ['Подкопчённый лосось', 'лосось с соусом из сметаны', '170 г', 1150],
    ['Паштет из птицы', 'паштет с брусникой', '220 г', 750],
    ['По-уральски', 'сельдь с тёплым картофелем', '270 г', 730],
    ['Посикунчики с мясом', '', '180 г', 480],
    ['Посикунчики с капустой', '', '180 г', 430],
    ['Посикунчики с прикамским судаком', '', '180 г', 510],
  ]},
  { id: 'soups', title: 'Супы', items: [
    ['Пермское море', 'сливочный суп с крабом', '350 г', 1350],
    ['Еловская рыбка', 'уха из трёх видов рыбы', '320 г', 850],
    ['Краснокамск', 'борщ с телятиной', '420 г', 740],
    ['Добрянка', 'суп-крем из копчёного лосося', '300 г', 780],
    ['Чердынский лес', 'грибовница со сметаной', '350 г', 650],
  ]},
  { id: 'salads', title: 'Салаты', items: [
    ['Зелёный салат', 'с осьминогом', '170 г', 1390],
    ['Салат романо с креветкой-иностранкой', 'романо с креветкой', '170 г', 980],
    ['Оливье из печёных овощей', 'с уткой и красной икрой', '220 г', 850],
    ['Салат романо с прикамской цыпой', 'романо с цыплёнком', '170 г', 710],
    ['Пермский ростбиф', 'ростбиф с соусом тонато', '140 г', 680],
    ['Салат из муллинских овощей', 'овощной салат с кремом из брынзы', '220 г', 650],
    ['Пермезе', 'томаты с моцареллой', '180 г', 630],
  ]},
  { id: 'fish', title: 'Рыба', items: [
    ['Дорогой гад', 'осьминог с соусом беарнез', '220 г', 1840],
    ['Акватория Беринга', 'форель со сливочно-икорным соусом', '280 г', 1350],
    ['Осетровые голубцы', 'голубцы с рыбным консоме', '220 г', 1240],
    ['Трескай!', 'чёрная треска с муссом из перца', '180 г', 1100],
    ['Белеет палтус одинокий', 'палтус с салатом из огурца и цукини', '170 г', 940],
    ['Чернушки', 'пельмени из судака', '320 г', 850],
    ['Пермская регата', 'котлеты из щуки и судака', '310 г', 770],
  ]},
  { id: 'meat', title: 'Мясо и птица', items: [
    ['Провокация', 'филе-миньон с фуа-гра', '270 г', 1750],
    ['Утка по-куедински', 'утка с тыквой и соусом барбекю', '230 г', 1100],
    ['Золотой петушок', 'цыплёнок-корнишон с картофелем', '320 г', 1050],
    ['Строгановская вотчина', 'говяжьи щёки с грибами', '290 г', 970],
    ['Верхнечусовские голубцы', 'голубцы из мраморной говядины', '380 г', 930],
  ]},
  { id: 'sides', title: 'Овощи в трёх актах', items: [
    ['Семья', 'стейк из брокколи', '210 г', 750],
    ['Я свободен', 'картофель фри с сырным соусом', '170 г', 450],
    ['Любовь-морковь', 'батат фри с пармезаном', '170 г', 450],
  ]},
  { id: 'desserts', title: 'Десерты', items: [
    ['Сила Преображенского', 'меренга с маракуйей и ягодами', '140 г', 490],
    ['Нытвенский сметанник', 'сметанник с ягодами', '110 г', 450],
    ['Уинский медовик', 'медовик с заварным кремом', '110 г', 450],
    ['Уральская ягода', 'торт с черёмухой и вишней', '120 г', 450],
    ['Северный Урал', 'кедровый орех с брусникой', '120 г', 450],
    ['Пуп земли', 'крем-брюле', '100 г', 450],
  ]},
  { id: 'sets', title: 'Собери свой сет', items: [
    ['Сыр, выдержанный в Пермских пещерах', 'сырный специалитет', '40 г', 450],
    ['Сыр овечий с трюфелем', 'сырный специалитет', '40 г', 450],
    ['Сыр тет-де-муан', 'сырный специалитет', '40 г', 440],
    ['Сыр Пермского периода с голубой плесенью', 'сырный специалитет', '40 г', 430],
    ['Сыр Бри с Уральским характером', 'сырный специалитет', '50 г', 370],
    ['Прошутто', 'мясной специалитет', '70 г', 630],
    ['Брезаола', 'мясной специалитет', '50 г', 620],
    ['Фуэт', 'мясной специалитет', '50 г', 310],
    ['Сезонные ягоды', 'Юралс-тапас', '100 г', 670],
    ['Опалённые оливки', 'Юралс-тапас', '60 г', 350],
    ['Оливки Каламата', 'Юралс-тапас', '60 г', 350],
    ['Финики с грецким орехом', 'и творожным сыром', '60 г', 320],
  ]},
  { id: 'bread', title: 'Хлеб и масло', items: [
    ['Хлебная корзина с бриошью', 'бриошь и чипсы из семечек', '150 г', 350],
    ['Хлебная корзина с солодовым хлебом', 'солодовый хлеб и чипсы из семечек', '150 г', 350],
    ['Хлебная корзина с чиабаттой', 'чиабатта и чипсы из семечек', '150 г', 350],
    ['Каменное масло', 'собственного производства', '40 г', 150],
    ['Каменное масло с фуа-гра', '', '40 г', 150],
    ['Каменное масло с трюфелем', '', '40 г', 150],
  ]},
  { id: 'cocktails', title: 'Коктейли', items: [] }, // заполняется из COCKTAILS
];

const COCKTAILS = [
  ['Баррель', 'клюквенный коктейль', '150 мл', 650],
  ['АИ-95', 'коктейль на светлом роме', '250 мл', 650],
  ['Джокер', 'коктейль на пряном роме', '150 мл', 650],
  ['Девонский флёр', 'тропический коктейль', '250 мл', 650],
  ['Керн', 'коктейль с грушевой водкой', '350 мл', 650],
  ['Игристый флюид', 'игристый коктейль с черникой', '200 мл', 900],
];
MENU.find(c => c.id === 'cocktails').items = COCKTAILS;

/* ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rub = n => n.toLocaleString('ru-RU') + ' ₽';
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function renderGeo() {
  $('#geoList').innerHTML = GEO.map(([place, dish, desc]) =>
    `<li><i>${esc(place)}</i><b>${esc(dish)}</b><span>${esc(desc)}</span></li>`).join('');
}

function renderMenu() {
  const tabs = $('#menuTabs'), list = $('#menuList');
  tabs.innerHTML = MENU.map((c, i) =>
    `<button class="tab" role="tab" data-id="${c.id}" aria-selected="${i === 0}">${esc(c.title)}</button>`).join('');
  const show = id => {
    const cat = MENU.find(c => c.id === id);
    $$('.tab', tabs).forEach(t => t.setAttribute('aria-selected', t.dataset.id === id));
    list.innerHTML = cat.items.map(([name, desc, w, price]) => `
      <div class="dish">
        <span class="dish__name">${esc(name)}</span>
        <span class="dish__price">${rub(price)}</span>
        <span class="dish__desc">${esc(desc)}</span>
        <span class="dish__w">${esc(w)}</span>
      </div>`).join('');
  };
  tabs.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) show(t.dataset.id); });
  show(MENU[0].id);

  $('#cocktailList').innerHTML = COCKTAILS.map(([n, d, w, p]) =>
    `<li><span>${esc(n)}</span><small>${esc(d)} · ${esc(w)}</small><b>${rub(p)}</b></li>`).join('');
}

function renderHours() {
  const names = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const rows = [];
  [1, 2, 3, 4, 5, 6, 0].forEach(d => {
    const h = CONFIG.hours[d];
    const key = h ? h.join('–') : 'уточняйте по телефону';
    const last = rows[rows.length - 1];
    if (last && last.key === key && last.to === (d + 6) % 7) last.to = d; else rows.push({ from: d, to: d, key });
  });
  $('#hoursList').innerHTML = rows.map(r => `${names[r.from]}${r.from !== r.to ? '–' + names[r.to] : ''}: ${r.key}`).join('<br>');

  // статус по пермскому времени (UTC+5)
  const perm = new Date(Date.now() + (5 * 60 + new Date().getTimezoneOffset()) * 60000);
  const toMin = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
  const now = perm.getHours() * 60 + perm.getMinutes();
  const today = CONFIG.hours[perm.getDay()];
  const yest = CONFIG.hours[(perm.getDay() + 6) % 7];
  let big = 'Закрыто', small = 'откроемся в 11:00', open = false;
  if (yest && toMin(yest[1]) <= toMin(yest[0]) && now < toMin(yest[1])) { open = true; big = 'Открыто'; small = `до ${yest[1]}`; }
  else if (today) {
    const o = toMin(today[0]); let c = toMin(today[1]); if (c <= o) c += 1440;
    if (now >= o && now < c) { open = true; big = 'Открыто'; small = `сегодня до ${today[1]}`; }
    else if (now < o) small = `откроемся в ${today[0]}`;
    else { const tm = CONFIG.hours[(perm.getDay() + 1) % 7]; small = tm ? `откроемся завтра в ${tm[0]}` : 'ул. Попова, 9'; }
  }
  const el = $('#openNow');
  el.textContent = big; el.classList.toggle('is-open', open);
  $('#openNowText').textContent = small;
}

function initHeader() {
  const header = $('#header');
  const onScroll = () => header.classList.toggle('is-solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') !== 'true';
    burger.setAttribute('aria-expanded', open); nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); }
  });
}

const fmtDate = v => v ? new Date(v + 'T00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'short' }) : '';
const openWA = text => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');

function initForms() {
  const modal = $('#bookModal'), form = $('#bookForm');
  const today = new Date().toISOString().slice(0, 10);
  $$('input[type=date]').forEach(i => { i.min = today; i.value = today; });
  $$('[data-book]').forEach(b => b.addEventListener('click', () => { form.comment.value = b.dataset.book || ''; modal.showModal(); }));
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  form.addEventListener('submit', e => {
    if (e.submitter && e.submitter.value === 'cancel') return;
    e.preventDefault();
    const f = form.elements;
    openWA(`Здравствуйте! Хочу забронировать стол в Юралс.\nДата: ${fmtDate(f.date.value)}, ${f.time.value}\nГостей: ${f.guests.value}\nИмя: ${f.name.value}\nТелефон: ${f.phone.value}` + (f.comment.value ? `\nПожелания: ${f.comment.value}` : ''));
    modal.close();
  });
  $('#eventForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target.elements;
    openWA(`Здравствуйте! Хочу провести мероприятие в Юралс.\nФормат: ${f.type.value}\nДата: ${fmtDate(f.date.value)}\nГостей: ${f.guests.value}\nИмя: ${f.name.value}\nТелефон: ${f.phone.value}`);
  });
}

function initLightbox() {
  const lb = $('#lightbox'), img = $('img', lb);
  $('#strip').addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;
    img.src = e.target.src; img.alt = e.target.alt; lb.hidden = false;
  });
  lb.addEventListener('click', () => { lb.hidden = true; });
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
}

function initReveal() {
  if (!('IntersectionObserver' in window)) return;
  const els = $$('.head, .story__text, .story__media, .sig__card, .sig__list, .geo__list li, .music__grid > *, .bar__grid > *, .events__grid > *, .reviews blockquote, .contacts__grid > *');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach(el => io.observe(el));
}

function initDemoBadge() {
  const badge = $('#demoBadge');
  if (!CONFIG.showDemoBadge) { badge.remove(); return; }
  const a = $('#devLink');
  a.textContent = CONFIG.devName;
  if (CONFIG.devLink) a.href = CONFIG.devLink;
  $('#demoClose').addEventListener('click', () => { badge.hidden = true; });
}

renderGeo();
renderMenu();
renderHours();
initHeader();
initForms();
initLightbox();
initReveal();
initDemoBadge();
