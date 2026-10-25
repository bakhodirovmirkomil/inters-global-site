/* Словарь: ключ -> [ru, en, uz, ko] */
(function () {
  const ORDER = ['ru', 'en', 'uz', 'ko'];
  const ROWS = {
    meta_desc: ['Блок-поезда, мультимодальные и железнодорожные перевозки из Центральной Азии в Корею, Японию, Таиланд и Россию.', 'Block trains, multimodal and rail freight from Central Asia to Korea, Japan, Thailand and Russia.', 'Markaziy Osiyodan Koreya, Yaponiya, Tailand va Rossiyaga blok-poyezdlar, multimodal va temir yoʻl tashuvlari.', '중앙아시아에서 한국, 일본, 태국, 러시아까지 블록트레인, 복합운송, 철도 화물 운송.'],

    nav_routes: ['Маршруты', 'Routes', 'Yoʻnalishlar', '노선'],
    nav_services: ['Услуги', 'Services', 'Xizmatlar', '서비스'],
    nav_calc: ['Расчёт', 'Calculator', 'Hisoblash', '견적 계산'],
    nav_contacts: ['Контакты', 'Contacts', 'Aloqa', '연락처'],
    nav_cta: ['Оставить заявку', 'Request a quote', 'Ariza qoldirish', '견적 문의'],

    hero_eyebrow: ['Ташкент · Алматы · Владивосток', 'Tashkent · Almaty · Vladivostok', 'Toshkent · Almati · Vladivostok', '타슈켄트 · 알마티 · 블라디보스토크'],
    h1_aria: ['Евразия в одном маршруте', 'One route across Eurasia', 'Yevrosiyo yagona yoʻlda', '유라시아를 하나의 노선으로'],
    h1_a: ['Евразия', 'One route', 'Yevrosiyo', '유라시아를'],
    h1_b: ['в одном', 'across', 'yagona', '하나의'],
    h1_c: ['маршруте', 'Eurasia', 'yoʻlda', '노선으로'],
    hero_lead: ['Блок-поезда, мультимодальные и железнодорожные перевозки из Центральной Азии в Корею, Японию, Таиланд и Россию. Один договор — от склада до порта.', 'Block trains, multimodal and rail freight from Central Asia to Korea, Japan, Thailand and Russia. One contract, from warehouse to port.', 'Markaziy Osiyodan Koreya, Yaponiya, Tailand va Rossiyaga blok-poyezdlar, multimodal va temir yoʻl tashuvlari. Bitta shartnoma — ombordan portgacha.', '중앙아시아에서 한국, 일본, 태국, 러시아까지 블록트레인, 복합운송, 철도 화물 운송. 계약 하나로 창고에서 항구까지.'],
    cta_calc: ['Рассчитать перевозку', 'Calculate shipping', 'Tashishni hisoblash', '운송 견적 계산'],
    cta_routes: ['Смотреть маршруты', 'View routes', 'Yoʻnalishlarni koʻrish', '노선 보기'],
    chipA_r: ['Ташкент → Пусан', 'Tashkent → Busan', 'Toshkent → Busan', '타슈켄트 → 부산'],
    chipA_d: ['27 дн.', '27 days', '27 kun', '27일'],
    chipB_t: ['Блок-поезд', 'Block train', 'Blok-poyezd', '블록트레인'],
    chipB_r: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    chipB_d: ['15 дн.', '15 days', '15 kun', '15일'],

    routes_h2: ['Следите за грузом<br>по карте', 'Track your cargo<br>on the map', 'Yukni xaritada<br>kuzatib boring', '지도에서<br>화물을 추적하세요'],
    in_transit: ['дней в пути', 'days in transit', 'kun yoʻlda', '일 소요'],
    days_fmt: ['{n} дн.', '{n} days', '{n} kun', '{n}일'],
    days_u: ['дней', 'days', 'kun', '일'],
    r0: ['Ташкент → Пусан, Инчхон', 'Tashkent → Busan, Incheon', 'Toshkent → Busan, Inchxon', '타슈켄트 → 부산, 인천'],
    r0s: ['Ташкент → Пусан', 'Tashkent → Busan', 'Toshkent → Busan', '타슈켄트 → 부산'],
    r0d: ['Железная дорога через Казахстан и Китай, затем морем из порта Ляньюньган.', 'Rail through Kazakhstan and China, then by sea from the port of Lianyungang.', 'Qozogʻiston va Xitoy orqali temir yoʻl, soʻng Lyanyungan portidan dengiz orqali.', '카자흐스탄과 중국을 거치는 철도 운송 후 롄윈강항에서 해상 운송.'],
    r1: ['Ташкент → Кобе, Имабари', 'Tashkent → Kobe, Imabari', 'Toshkent → Kobe, Imabari', '타슈켄트 → 고베, 이마바리'],
    r1s: ['Ташкент → Кобе', 'Tashkent → Kobe', 'Toshkent → Kobe', '타슈켄트 → 고베'],
    r1d: ['Мультимодальная схема с морским плечом до японских портов.', 'Multimodal scheme with a sea leg to Japanese ports.', 'Yapon portlarigacha dengiz qismi bilan multimodal sxema.', '일본 항구까지 해상 구간을 포함한 복합운송.'],
    r2: ['Ташкент → Лаем Чабанг', 'Tashkent → Laem Chabang', 'Toshkent → Laem Chabang', '타슈켄트 → 램차방'],
    r2s: ['Ташкент → Лаем Чабанг', 'Tashkent → Laem Chabang', 'Toshkent → Laem Chabang', '타슈켄트 → 램차방'],
    r2d: ['Рельсы до китайского порта и морской переход в Таиланд.', 'Rail to a Chinese port, then a sea crossing to Thailand.', 'Xitoy portigacha temir yoʻl, soʻng Tailandga dengiz oʻtishi.', '중국 항구까지 철도, 이후 태국까지 해상 운송.'],
    r3: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    r3s: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    r3d: ['Транзит контейнеров из дальневосточного порта в Узбекистан.', 'Container transit from the Far East port to Uzbekistan.', 'Konteynerlarni Uzoq Sharq portidan Oʻzbekistonga tranzit qilish.', '극동 항구에서 우즈베키스탄까지 컨테이너 운송.'],

    c_tash: ['Ташкент', 'Tashkent', 'Toshkent', '타슈켄트'],
    c_alm: ['Алматы', 'Almaty', 'Almati', '알마티'],
    c_urum: ['Урумчи', 'Urumqi', 'Urumchi', '우루무치'],
    c_lyun: ['Ляньюньган', 'Lianyungang', 'Lyanyungan', '롄윈강'],
    c_busan: ['Пусан', 'Busan', 'Busan', '부산'],
    c_inch: ['Инчхон', 'Incheon', 'Inchxon', '인천'],
    c_kobe: ['Кобе', 'Kobe', 'Kobe', '고베'],
    c_imab: ['Имабари', 'Imabari', 'Imabari', '이마바리'],
    c_laem: ['Лаем Чабанг', 'Laem Chabang', 'Laem Chabang', '램차방'],
    c_vlad: ['Владивосток', 'Vladivostok', 'Vladivostok', '블라디보스토크'],
    c_mosc: ['Москва', 'Moscow', 'Moskva', '모스크바'],

    svc_h2: ['Три способа<br>довезти груз', 'Three ways<br>to move your cargo', 'Yukni yetkazishning<br>uch usuli', '화물을 보내는<br>세 가지 방법'],
    s1_t: ['Блок-поезд', 'Block train', 'Blok-poyezd', '블록트레인'],
    s1_p: ['Целый состав под ваш груз. Фиксированный график и максимально короткий транзит на дальние расстояния.', 'A whole train for your cargo. Fixed schedule and the shortest possible transit over long distances.', 'Yukingiz uchun butun bir poyezd. Qatʼiy jadval va uzoq masofalarda eng qisqa tranzit.', '고객 화물만을 위한 전용 열차. 고정 운행 일정과 장거리 최단 운송 시간.'],
    s1_a: ['От 50 вагонов', 'From 50 wagons', '50 vagondan', '50량부터'],
    s1_b: ['Свой график отправлений', 'Your own departure schedule', 'Oʻz joʻnash jadvalingiz', '맞춤 출발 일정'],
    s1_c: ['Контроль на каждой станции', 'Control at every station', 'Har bir bekatda nazorat', '모든 역에서 추적 관리'],
    s2_t: ['Мультимодальные перевозки', 'Multimodal transport', 'Multimodal tashuvlar', '복합운송'],
    s2_p: ['Железная дорога, порт, море и авто в одной ставке. Краткосрочная и долгосрочная аренда подвижного состава.', 'Rail, port, sea and road in a single rate. Short- and long-term rolling stock leasing.', 'Temir yoʻl, port, dengiz va avtotransport — bitta stavkada. Harakatlanuvchi tarkibni qisqa va uzoq muddatga ijaraga olish.', '철도, 항만, 해상, 육로 운송을 하나의 운임으로. 철도 차량 단기·장기 임대.'],
    s2_a: ['Один договор и один менеджер', 'One contract and one manager', 'Bitta shartnoma va bitta menejer', '계약 하나, 담당자 한 명'],
    s2_b: ['Аренда платформ и КТК', 'Platform and container leasing', 'Platforma va konteyner ijarasi', '플랫폼·컨테이너 임대'],
    s2_c: ['Доставка до двери', 'Door-to-door delivery', 'Eshikkacha yetkazib berish', '문전 배송'],
    s3_t: ['Железнодорожные перевозки', 'Rail freight', 'Temir yoʻl tashuvlari', '철도 운송'],
    s3_p: ['Отправки отдельными вагонами и контейнерами по Узбекистану, Казахстану, России и Китаю.', 'Shipments by single wagons and containers across Uzbekistan, Kazakhstan, Russia and China.', 'Oʻzbekiston, Qozogʻiston, Rossiya va Xitoy boʻylab alohida vagon va konteynerlarda joʻnatmalar.', '우즈베키스탄, 카자흐스탄, 러시아, 중국 전역의 개별 화차 및 컨테이너 운송.'],
    s3_a: ['Вагоны и контейнеры', 'Wagons and containers', 'Vagonlar va konteynerlar', '화차 및 컨테이너'],
    s3_b: ['Таможенное оформление', 'Customs clearance', 'Bojxona rasmiylashtiruvi', '통관 대행'],
    s3_c: ['Отслеживание онлайн', 'Online tracking', 'Onlayn kuzatuv', '온라인 화물 추적'],

    st_clients: ['клиентов', 'clients', 'mijozlar', '고객사'],
    st_countries: ['стран', 'countries', 'mamlakat', '개국'],
    st_partners: ['партнёров', 'partners', 'hamkorlar', '파트너'],
    st_projects: ['проектов', 'projects', 'loyiha', '프로젝트'],

    pr_eyebrow: ['Как это работает', 'How it works', 'Qanday ishlaydi', '진행 절차'],
    pr_h2: ['От заявки<br>до разгрузки', 'From request<br>to delivery', 'Arizadan<br>yetkazib berishgacha', '문의부터<br>인도까지'],
    p1_t: ['Заявка', 'Request', 'Ariza', '문의'],
    p1_p: ['Вы называете груз, маршрут и сроки.', 'You tell us the cargo, route and deadlines.', 'Siz yuk, yoʻnalish va muddatni aytasiz.', '화물, 노선, 일정을 알려주세요.'],
    p2_t: ['Расчёт', 'Quote', 'Hisob-kitob', '견적'],
    p2_p: ['Готовим ставку и схему за один рабочий день.', 'We prepare the rate and scheme within one business day.', 'Stavka va sxemani bir ish kunida tayyorlaymiz.', '영업일 하루 안에 운임과 운송 방식을 제안합니다.'],
    p3_t: ['Погрузка', 'Loading', 'Yuklash', '적재'],
    p3_p: ['Подаём вагон или контейнер, оформляем документы.', 'We supply the wagon or container and prepare documents.', 'Vagon yoki konteyner beramiz, hujjatlarni rasmiylashtiramiz.', '화차 또는 컨테이너를 배차하고 서류를 처리합니다.'],
    p4_t: ['В пути', 'In transit', 'Yoʻlda', '운송 중'],
    p4_p: ['Статус каждой станции в личном кабинете.', 'Status at every station in your personal account.', 'Har bir bekat holati shaxsiy kabinetda.', '모든 역의 상태를 개인 계정에서 확인하세요.'],
    p5_t: ['Выдача', 'Delivery', 'Topshirish', '인도'],
    p5_p: ['Таможня, порт, доставка получателю.', 'Customs, port, delivery to the consignee.', 'Bojxona, port, qabul qiluvchiga yetkazish.', '통관, 항만, 수취인 배송.'],

    calc_h2: ['Узнайте срок<br>за 10 секунд', 'Get your transit time<br>in 10 seconds', 'Muddatni 10 soniyada<br>bilib oling', '운송 기간을<br>10초 만에 확인'],
    calc_note: ['Ориентир по транзиту. Точную ставку менеджер пришлёт в течение рабочего дня.', 'A transit estimate. A manager will send the exact rate within one business day.', 'Tranzit boʻyicha taxminiy muddat. Aniq stavkani menejer bir ish kuni ichida yuboradi.', '예상 운송 기간입니다. 정확한 운임은 담당자가 영업일 하루 안에 보내드립니다.'],
    f_route: ['Маршрут', 'Route', 'Yoʻnalish', '노선'],
    f_type: ['Тип груза', 'Cargo type', 'Yuk turi', '화물 유형'],
    ty0: ["Контейнер 20'", "20' container", "20' konteyner", "20' 컨테이너"],
    ty1: ["Контейнер 40'", "40' container", "40' konteyner", "40' 컨테이너"],
    ty2: ['Сборный груз', 'Groupage cargo', 'Yigʻma yuk', '혼적 화물'],
    ty3: ['Блок-поезд', 'Block train', 'Blok-poyezd', '블록트레인'],
    f_weight: ['Вес', 'Weight', 'Ogʻirlik', '중량'],
    unit_t: ['т', 't', 't', '톤'],
    f_name: ['Имя', 'Name', 'Ism', '이름'],
    f_name_ph: ['Как к вам обращаться', 'Your name', 'Ismingiz', '성함'],
    f_phone: ['Телефон', 'Phone', 'Telefon', '연락처'],
    f_submit: ['Отправить заявку', 'Send request', 'Arizani yuborish', '문의 보내기'],
    f_ok: ['Заявка принята. Менеджер позвонит в течение рабочего дня.', 'Request received. A manager will call you within one business day.', 'Ariza qabul qilindi. Menejer bir ish kuni ichida qoʻngʻiroq qiladi.', '문의가 접수되었습니다. 담당자가 영업일 하루 안에 연락드리겠습니다.'],

    ft_uz: ['Узбекистан · Ташкент', 'Uzbekistan · Tashkent', 'Oʻzbekiston · Toshkent', '우즈베키스탄 · 타슈켄트'],
    ft_kz: ['Казахстан · Алматы', 'Kazakhstan · Almaty', 'Qozogʻiston · Almati', '카자흐스탄 · 알마티'],
    ft_tm: ['Туркменистан', 'Turkmenistan', 'Turkmaniston', '투르크메니스탄'],
    ft_soc: ['Соцсети', 'Social media', 'Ijtimoiy tarmoqlar', '소셜 미디어'],
    ft_addr: ['Адрес офиса уточняется', 'Office address to be confirmed', 'Ofis manzili aniqlanmoqda', '사무실 주소 확인 중'],
    ft_rep: ['Представительство', 'Representative office', 'Vakolatxona', '대표 사무소'],
    ft_legal: ['© 2026 INTER S GLOBAL. Демо-контент: контакты и название условные.', '© 2026 INTER S GLOBAL. Demo content: contacts are placeholders.', '© 2026 INTER S GLOBAL. Demo kontent: aloqa maʼlumotlari shartli.', '© 2026 INTER S GLOBAL. 데모 콘텐츠: 연락처는 임시 정보입니다.']
  };

  const DICT = {};
  ORDER.forEach((l, i) => { DICT[l] = {}; for (const k in ROWS) DICT[l][k] = ROWS[k][i]; });
  DICT.ru.eyebrow_routes = DICT.ru.nav_routes;

  const LANGS = ['ru', 'uz', 'ko', 'en'];
  const listeners = [];
  const store = {
    get() { try { return localStorage.getItem('lang'); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem('lang', v); } catch (e) {} }
  };
  const detect = () => {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) return q;
    const s = store.get();
    if (LANGS.includes(s)) return s;
    const n = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    return LANGS.includes(n) ? n : 'ru';
  };
  let lang = detect();

  const t = k => (DICT[lang] && DICT[lang][k]) || DICT.ru[k] || k;

  function apply() {
    const d = document;
    d.documentElement.lang = lang;
    d.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = t(e.dataset.i18n); });
    d.querySelectorAll('[data-i18n-html]').forEach(e => { e.innerHTML = t(e.dataset.i18nHtml); });
    d.querySelectorAll('[data-i18n-ph]').forEach(e => { e.placeholder = t(e.dataset.i18nPh); });
    d.querySelectorAll('[data-i18n-aria]').forEach(e => { e.setAttribute('aria-label', t(e.dataset.i18nAria)); });
    const m = d.querySelector('meta[name=description]'); if (m) m.content = t('meta_desc');
    d.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  }

  window.I18N = {
    t,
    get lang() { return lang; },
    days: n => t('days_fmt').replace('{n}', n),
    on: f => listeners.push(f),
    set(l) {
      if (!LANGS.includes(l) || l === lang) return;
      lang = l; store.set(l); apply(); listeners.forEach(f => f());
    }
  };
  apply();
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => I18N.set(b.dataset.lang)));
})();
