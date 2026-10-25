(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = id.length > 1 && $(id);
    if (!el) return;
    e.preventDefault();
    lenis ? lenis.scrollTo(el, { offset: id === '#routes' ? 0 : -20 }) : el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* ---------- hero train ---------- */
  const colors = ['#FF5A1F', '#0F7B6C', '#F2B705', '#ffffff', '#7B3FE4', '#FF5A1F', '#0F7B6C', '#ffffff', '#F2B705', '#FF5A1F', '#0F7B6C', '#ffffff'];
  const train = $('#train');
  train.innerHTML = '<div class="loco"></div>' + colors.map(c => `<div class="wg" style="--c:${c}"></div>`).join('');

  /* ---------- loader + intro ---------- */
  const loaderTrain = $('.loader__train'), num = $('#loadNum');
  const intro = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.to('#loader', { yPercent: -100, duration: 1, ease: 'power4.inOut' })
      .from('.hero__title .line > span', { yPercent: 115, rotate: 4, duration: 1.2, stagger: .12 }, '-=.35')
      .from('.eyebrow', { opacity: 0, y: 20, duration: .8 }, '-=.9')
      .from('.hero__lead,.hero__cta', { opacity: 0, y: 30, duration: .9, stagger: .1 }, '-=.8')
      .call(() => $('#nav').classList.add('in'), null, 1.2)
      .to('.chip', { opacity: 1, y: 0, duration: .8, stagger: .15 }, '-=.5')
      .fromTo(train, { x: () => -train.scrollWidth }, { x: () => innerWidth + 40, duration: 9, ease: 'none', repeat: -1, repeatDelay: 1.5 }, '-=1.2');
    $('#loader').addEventListener('transitionend', () => {});
  };
  if (reduce) { $('#loader').remove(); $('#nav').classList.add('in'); gsap.set(train, { x: 40 }); }
  else {
    gsap.set('.chip', { y: 20 });
    const o = { v: 0 };
    gsap.to(o, { v: 100, duration: 1.6, ease: 'power2.inOut',
      onUpdate() { num.textContent = Math.round(o.v); loaderTrain.style.left = `calc(${o.v}% - ${o.v * .44}px)`; },
      onComplete: intro });
  }

  /* ---------- nav ---------- */
  const nav = $('#nav'); let lastY = 0;
  addEventListener('scroll', () => {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 60);
    nav.classList.toggle('hide', y > lastY && y > 500);
    lastY = y;
  }, { passive: true });

  /* ---------- hero parallax + chips ---------- */
  if (!reduce) {
    gsap.to('.hero__grid', { yPercent: 25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero__title', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    $$('.chip').forEach(c => {
      const d = +c.dataset.depth;
      gsap.to(c, { y: d * 4, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    });
    addEventListener('pointermove', e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      $$('.chip').forEach(c => gsap.to(c, { x: x * +c.dataset.depth, duration: 1, overwrite: 'auto' }));
      gsap.to('.hero__grid', { x: x * -30, duration: 1.2, overwrite: 'auto' });
    });
    // marquee speeds up with scroll velocity
    const mq = gsap.getTweensOf('.marquee__row');
  }

  /* ---------- magnetic buttons ---------- */
  if (!reduce && matchMedia('(pointer:fine)').matches) {
    $$('.magnetic').forEach(b => {
      b.addEventListener('pointermove', e => {
        const r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .3, y: (e.clientY - r.top - r.height / 2) * .4, duration: .4 });
      });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.4)' }));
    });
  }

  /* ---------- route map ---------- */
  const NS = 'http://www.w3.org/2000/svg';
  const proj = (lon, lat) => [(lon - 25) / 125 * 1000, (65 - lat) / 60 * 500];
  const C = {
    tash: ['Ташкент', 69.2, 41.3, 1], alm: ['Алматы', 76.9, 43.2], urum: ['Урумчи', 87.6, 43.8], lyun: ['Ляньюньган', 119.2, 34.6],
    busan: ['Пусан', 129, 35.1, 1], inch: ['Инчхон', 126.6, 37.5], kobe: ['Кобе', 135.2, 34.7, 1], laem: ['Лаем Чабанг', 100.9, 13.1, 1], vlad: ['Владивосток', 131.9, 43.1, 1], mosc: ['Москва', 37.6, 55.7]
  };
  const ROUTES = [
    { name: 'Ташкент → Пусан, Инчхон', short: 'Ташкент → Пусан', days: '25–30', min: 25, max: 30, via: ['tash', 'alm', 'urum', 'lyun', 'busan'], desc: 'Железная дорога через Казахстан и Китай, затем морем из порта Ляньюньган.', bend: -40 },
    { name: 'Ташкент → Кобе, Имабари', short: 'Ташкент → Кобе', days: '35–40', min: 35, max: 40, via: ['tash', 'alm', 'urum', 'lyun', 'kobe'], desc: 'Мультимодальная схема с морским плечом до японских портов.', bend: -55 },
    { name: 'Ташкент → Лаем Чабанг', short: 'Ташкент → Лаем Чабанг', days: '35–40', min: 35, max: 40, via: ['tash', 'urum', 'laem'], desc: 'Рельсы до китайского порта и морской переход в Таиланд.', bend: 60 },
    { name: 'Владивосток → Ташкент', short: 'Владивосток → Ташкент', days: '15', min: 15, max: 15, via: ['vlad', 'tash'], desc: 'Транзит контейнеров из дальневосточного порта в Узбекистан.', bend: -70 }
  ];

  const svg = $('#map'), gGrat = $('#graticule'), gBase = $('#routeBase'), gLive = $('#routeLive'), gCity = $('#cities'), dot = $('#trainDot');
  const mk = (t, a, p) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); (p || svg).appendChild(e); return e; };

  for (let lon = 30; lon <= 150; lon += 20) { const [x] = proj(lon, 0); mk('line', { x1: x, x2: x, y1: 0, y2: 500 }, gGrat); mk('text', { x: x + 4, y: 492 }, gGrat).textContent = lon + '°E'; }
  for (let lat = 10; lat <= 60; lat += 10) { const [, y] = proj(0, lat); mk('line', { x1: 0, x2: 1000, y1: y, y2: y }, gGrat); mk('text', { x: 6, y: y - 4 }, gGrat).textContent = lat + '°N'; }

  const pathD = r => {
    const pts = r.via.map(k => proj(C[k][1], C[k][2]));
    let d = `M${pts[0]}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const mx = (x0 + x1) / 2, my = (y0 + y1) / 2 + (r.bend || 0) * (Math.hypot(x1 - x0, y1 - y0) / 300);
      d += ` Q${mx},${my} ${x1},${y1}`;
    }
    return d;
  };
  ROUTES.forEach(r => { r.d = pathD(r); mk('path', { d: r.d }, gBase); r.el = mk('path', { d: r.d }, gLive); r.len = r.el.getTotalLength(); r.el.style.strokeDasharray = r.len; r.el.style.strokeDashoffset = r.len; });

  Object.values(C).forEach(([n, lo, la, big]) => {
    const [x, y] = proj(lo, la);
    mk('circle', { cx: x, cy: y, r: big ? 6 : 3.5, class: big ? 'big' : '' }, gCity);
    mk('text', { x: x + 10, y: y + 4 }, gCity).textContent = n;
  });
  gCity.appendChild(dot);

  const list = $('#rlist');
  ROUTES.forEach((r, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button">${r.short}<small>${r.days} дн.</small></button>`;
    li.firstChild.addEventListener('click', () => goRoute(i));
    list.appendChild(li);
  });

  let cur = -1;
  const setActive = i => {
    if (i === cur) return; cur = i;
    $$('button', list).forEach((b, k) => b.classList.toggle('on', k === i));
    const r = ROUTES[i];
    ROUTES.forEach((o, k) => { if (k !== i) { o.el.style.strokeDashoffset = o.len; } });
    gsap.fromTo('.rcard', { y: 12, opacity: .4 }, { y: 0, opacity: 1, duration: .5 });
    $('#rDays').textContent = r.days; $('#rTitle').textContent = r.name; $('#rDesc').textContent = r.desc;
  };
  const place = (i, p) => {
    const r = ROUTES[i], e = Math.min(1, p);
    r.el.style.strokeDashoffset = r.len * (1 - e);
    const pt = r.el.getPointAtLength(r.len * e);
    dot.setAttribute('transform', `translate(${pt.x},${pt.y})`);
    $('#rBar').style.width = e * 100 + '%';
  };

  const pinST = ScrollTrigger.create({
    trigger: '.routes', start: 'top top', end: () => '+=' + innerHeight * ROUTES.length * (matchMedia('(max-width:1000px)').matches ? 0 : .9),
    pin: !matchMedia('(max-width:1000px)').matches, scrub: true,
    onUpdate: s => {
      const t = s.progress * ROUTES.length, i = Math.min(ROUTES.length - 1, Math.floor(t));
      setActive(i); place(i, Math.min(1, (t - i) * 1.25));
    }
  });
  function goRoute(i) {
    if (pinST.vars.pin) {
      const y = pinST.start + (pinST.end - pinST.start) * ((i + .02) / ROUTES.length);
      lenis ? lenis.scrollTo(y) : scrollTo({ top: y, behavior: 'smooth' });
    } else { setActive(i); const o = { p: 0 }; gsap.to(o, { p: 1, duration: 1.6, ease: 'power2.inOut', onUpdate: () => place(i, o.p) }); }
  }
  setActive(0); place(0, 0.001);
  if (!pinST.vars.pin) goRoute(0);

  /* ---------- reveals ---------- */
  if (!reduce) {
    $$('.sec-head,.card,.step,.stats__grid>div,.calc__left,.form,.footer__cols>div').forEach(el => el.classList.add('rv'));
    ScrollTrigger.batch('.rv', { start: 'top 88%', once: true, onEnter: b => gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: .12, ease: 'power3.out' }) });
  }

  /* ---------- counters ---------- */
  $$('[data-count]').forEach(el => {
    const end = +el.dataset.count, o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => {
      gsap.to(o, { v: end, duration: reduce ? 0 : 2, ease: 'power2.out', onUpdate: () => el.textContent = Math.round(o.v).toLocaleString('ru-RU'), onComplete: () => el.textContent = end.toLocaleString('ru-RU') });
    } });
  });

  /* ---------- process line ---------- */
  const steps = $$('.step');
  ScrollTrigger.create({ trigger: '#steps', start: 'top 75%', end: 'bottom 60%', scrub: .4,
    onUpdate: s => steps.forEach((st, i) => st.classList.toggle('on', s.progress > (i + .2) / steps.length)) });
  const ln = $('.steps__line line');
  if (ln && !reduce) { ln.style.strokeDasharray = '100%'; gsap.fromTo(ln, { strokeDashoffset: '100%' }, { strokeDashoffset: '0%', ease: 'none', scrollTrigger: { trigger: '#steps', start: 'top 75%', end: 'bottom 60%', scrub: .4 } }); }

  /* ---------- calculator ---------- */
  const fRoute = $('#fRoute'), fW = $('#fWeight'), types = ['Контейнер 20\'', 'Контейнер 40\'', 'Сборный груз', 'Блок-поезд'];
  const typeAdj = [0, 0, 5, -2]; // сборный груз дольше, блок-поезд быстрее
  const calc = () => {
    const r = ROUTES[+fRoute.value], t = +$('#fType input:checked').value, w = +fW.value;
    $('#wVal').textContent = w + ' т';
    const min = Math.max(7, r.min + typeAdj[t] - (r.min === r.max ? 0 : 0)), max = r.max + typeAdj[t] + (t === 2 ? 3 : 0);
    const txt = min === max ? `${min}` : `${min}–${max}`;
    const el = $('#cDays');
    gsap.fromTo(el, { y: 14, opacity: .2 }, { y: 0, opacity: 1, duration: .5 });
    el.textContent = txt;
    const pct = Math.min(95, 12 + (max / 45) * 80);
    $('#cBar').style.width = pct + '%'; $('#cTrain').style.left = pct + '%';
    $('#cSummary').textContent = `${r.short} · ${types[t]} · ${w} т`;
  };
  [fRoute, fW].forEach(e => e.addEventListener('input', calc));
  $$('#fType input').forEach(e => e.addEventListener('change', calc));
  calc();

  $('#form').addEventListener('submit', e => {
    e.preventDefault();
    const n = $('#fName'), p = $('#fPhone');
    n.classList.toggle('err', n.value.trim().length < 2);
    p.classList.toggle('err', p.value.replace(/\D/g, '').length < 9);
    if ($$('.err', e.target).length) return;
    $('#formOk').hidden = false;
    gsap.from('#formOk', { y: 10, opacity: 0, duration: .5 });
    e.target.reset(); calc();
  });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
