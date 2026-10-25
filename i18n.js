/* Словарь: ключ -> [ru, en, uz, ko] */
(function () {
  const ORDER = ['ru', 'en', 'uz', 'ko'];
  const ROWS = {
    meta_desc: ["Импорт грузов из Кореи, Японии, Таиланда и России в Узбекистан: блок-поезда, мультимодальные перевозки, таможня и доставка до склада.", "Import freight from Korea, Japan, Thailand and Russia to Uzbekistan: block trains, multimodal transport, customs clearance and delivery to your warehouse.", "Koreya, Yaponiya, Tailand va Rossiyadan Oʻzbekistonga import yuklari: blok-poyezdlar, multimodal tashuvlar, bojxona va omborgacha yetkazish.", "한국, 일본, 태국, 러시아에서 우즈베키스탄으로의 수입 화물: 블록트레인, 복합운송, 통관 및 창고 배송."],

    nav_routes: ['Маршруты', 'Routes', 'Yoʻnalishlar', '노선'],
    nav_services: ['Услуги', 'Services', 'Xizmatlar', '서비스'],
    nav_calc: ['Расчёт', 'Calculator', 'Hisoblash', '견적 계산'],
    nav_contacts: ['Контакты', 'Contacts', 'Aloqa', '연락처'],
    nav_cta: ['Оставить заявку', 'Request a quote', 'Ariza qoldirish', '견적 문의'],

    hero_eyebrow: ["Корея · Япония · Таиланд → Узбекистан", "Korea · Japan · Thailand → Uzbekistan", "Koreya · Yaponiya · Tailand → Oʻzbekiston", "한국 · 일본 · 태국 → 우즈베키스탄"],
    h1_aria: ["Импорт из Азии под ключ", "Import from Asia, turnkey", "Osiyodan import, yagona yoʻl", "아시아에서 수입까지 원스톱"],
    h1_a: ["Импорт", "Import", "Osiyodan", "아시아에서"],
    h1_b: ["из Азии", "from Asia", "import", "수입까지"],
    h1_c: ["под ключ", "turnkey", "yagona yoʻl", "원스톱"],
    hero_lead: ["Привозим грузы из Кореи, Японии, Таиланда и России в Ташкент: блок-поезда, мультимодальные и железнодорожные перевозки. Таможня и доставка до склада — в одном договоре.", "We bring cargo from Korea, Japan, Thailand and Russia to Tashkent by block train, multimodal and rail freight. Customs clearance and delivery to your warehouse under one contract.", "Koreya, Yaponiya, Tailand va Rossiyadan Toshkentga yuk olib kelamiz: blok-poyezd, multimodal va temir yoʻl tashuvlari. Bojxona rasmiylashtiruvi va omborgacha yetkazish — bitta shartnomada.", "한국, 일본, 태국, 러시아의 화물을 블록트레인, 복합운송, 철도로 타슈켄트까지 운송합니다. 통관과 창고 배송까지 하나의 계약으로."],
    cta_calc: ['Рассчитать перевозку', 'Calculate shipping', 'Tashishni hisoblash', '운송 견적 계산'],
    cta_routes: ['Смотреть маршруты', 'View routes', 'Yoʻnalishlarni koʻrish', '노선 보기'],
    chipA_r: ["Пусан → Ташкент", "Busan → Tashkent", "Busan → Toshkent", "부산 → 타슈켄트"],
    chipA_d: ['27 дн.', '27 days', '27 kun', '27일'],
    chipB_t: ['Блок-поезд', 'Block train', 'Blok-poyezd', '블록트레인'],
    chipB_r: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    chipB_d: ['15 дн.', '15 days', '15 kun', '15일'],

    routes_h2: ['Следите за грузом<br>по карте', 'Track your cargo<br>on the map', 'Yukni xaritada<br>kuzatib boring', '지도에서<br>화물을 추적하세요'],
    in_transit: ['дней в пути', 'days in transit', 'kun yoʻlda', '일 소요'],
    days_fmt: ['{n} дн.', '{n} days', '{n} kun', '{n}일'],
    days_u: ['дней', 'days', 'kun', '일'],
    r0: ["Пусан, Инчхон → Ташкент", "Busan, Incheon → Tashkent", "Busan, Inchxon → Toshkent", "부산, 인천 → 타슈켄트"],
    r0s: ["Пусан → Ташкент", "Busan → Tashkent", "Busan → Toshkent", "부산 → 타슈켄트"],
    r0d: ["Морем до китайского порта Ляньюньган, затем по железной дороге через Китай и Казахстан.", "By sea to the Chinese port of Lianyungang, then by rail through China and Kazakhstan.", "Dengiz orqali Xitoyning Lyanyungan portigacha, soʻng Xitoy va Qozogʻiston orqali temir yoʻl.", "롄윈강항까지 해상 운송 후 중국과 카자흐스탄을 거쳐 철도로 운송."],
    r1: ["Кобе, Имабари → Ташкент", "Kobe, Imabari → Tashkent", "Kobe, Imabari → Toshkent", "고베, 이마바리 → 타슈켄트"],
    r1s: ["Кобе → Ташкент", "Kobe → Tashkent", "Kobe → Toshkent", "고베 → 타슈켄트"],
    r1d: ["Мультимодальная схема: морской рейс из японских портов и железная дорога до Ташкента.", "Multimodal scheme: a sea voyage from Japanese ports, then rail to Tashkent.", "Multimodal sxema: Yapon portlaridan dengiz reysi, soʻng Toshkentgacha temir yoʻl.", "일본 항구에서 해상 운송 후 타슈켄트까지 철도로 잇는 복합운송."],
    r2: ["Лаем Чабанг → Ташкент", "Laem Chabang → Tashkent", "Laem Chabang → Toshkent", "램차방 → 타슈켄트"],
    r2s: ["Лаем Чабанг → Ташкент", "Laem Chabang → Tashkent", "Laem Chabang → Toshkent", "램차방 → 타슈켄트"],
    r2d: ["Морем из Таиланда в Китай, дальше рельсами до Узбекистана.", "By sea from Thailand to China, then by rail to Uzbekistan.", "Tailanddan Xitoygacha dengiz orqali, soʻng Oʻzbekistongacha temir yoʻl.", "태국에서 중국까지 해상 운송 후 우즈베키스탄까지 철도 운송."],
    r3: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    r3s: ['Владивосток → Ташкент', 'Vladivostok → Tashkent', 'Vladivostok → Toshkent', '블라디보스토크 → 타슈켄트'],
    r3d: ["Контейнеры из дальневосточного порта — прямым транзитом в Узбекистан.", "Containers from the Far East port move straight through to Uzbekistan.", "Uzoq Sharq portidan konteynerlar Oʻzbekistonga toʻgʻridan-toʻgʻri tranzit.", "극동 항구에서 우즈베키스탄까지 컨테이너 직통 운송."],

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
    s1_p: ["Целый состав под ваш импортный груз. Фиксированный график и короткий транзит из портов Дальнего Востока и Китая.", "A whole train for your import cargo. Fixed schedule and short transit from Far East and Chinese ports.", "Import yuklaringiz uchun butun poyezd. Uzoq Sharq va Xitoy portlaridan qatʼiy jadval va qisqa tranzit.", "수입 화물 전용 열차. 극동·중국 항만에서 출발하는 고정 일정과 짧은 운송 시간."],
    s1_a: ['От 50 вагонов', 'From 50 wagons', '50 vagondan', '50량부터'],
    s1_b: ["Свой график прибытия", "Your own arrival schedule", "Oʻz kelish jadvalingiz", "맞춤 도착 일정"],
    s1_c: ['Контроль на каждой станции', 'Control at every station', 'Har bir bekatda nazorat', '모든 역에서 추적 관리'],
    s2_t: ['Мультимодальные перевозки', 'Multimodal transport', 'Multimodal tashuvlar', '복합운송'],
    s2_p: ["Море, порт и железная дорога в одной ставке: от погрузки в Азии до склада в Узбекистане. Аренда подвижного состава.", "Sea, port and rail in a single rate, from loading in Asia to your warehouse in Uzbekistan. Rolling stock leasing available.", "Dengiz, port va temir yoʻl — bitta stavkada: Osiyodagi yuklashdan Oʻzbekistondagi omborgacha. Harakatlanuvchi tarkib ijarasi.", "아시아 적재부터 우즈베키스탄 창고까지 해상, 항만, 철도 운송을 하나의 운임으로. 철도 차량 임대도 가능합니다."],
    s2_a: ['Один договор и один менеджер', 'One contract and one manager', 'Bitta shartnoma va bitta menejer', '계약 하나, 담당자 한 명'],
    s2_b: ["Консолидация сборных грузов", "Groupage consolidation", "Yigʻma yuklarni konsolidatsiya qilish", "소량 화물 혼적 통합"],
    s2_c: ["Доставка до склада в Узбекистане", "Delivery to your warehouse in Uzbekistan", "Oʻzbekistondagi omborgacha yetkazish", "우즈베키스탄 내 창고 배송"],
    s3_t: ["Таможня и доставка", "Customs and delivery", "Bojxona va yetkazib berish", "통관 및 배송"],
    s3_p: ["Оформляем импорт на границе и в Ташкенте, затем доставляем груз получателю по Узбекистану.", "We clear imports at the border and in Tashkent, then deliver the cargo to the consignee across Uzbekistan.", "Importni chegarada va Toshkentda rasmiylashtiramiz, soʻng yukni Oʻzbekiston boʻylab qabul qiluvchiga yetkazamiz.", "국경과 타슈켄트에서 수입 통관을 처리한 뒤 우즈베키스탄 전역의 수취인에게 배송합니다."],
    s3_a: ["Декларирование и сертификаты", "Declarations and certificates", "Deklaratsiya va sertifikatlar", "수입 신고 및 인증서"],
    s3_b: ["Хранение на терминале", "Terminal storage", "Terminalda saqlash", "터미널 보관"],
    s3_c: ['Отслеживание онлайн', 'Online tracking', 'Onlayn kuzatuv', '온라인 화물 추적'],

    nav_works: ["Наши работы", "Our work", "Ishlarimiz", "프로젝트"],
    works_h2: ["Наши работы<br>в движении", "Our work<br>in motion", "Ishlarimiz<br>harakatda", "움직이는<br>프로젝트"],
    w_soon: ["Видео скоро", "Video coming soon", "Video tez orada", "영상 준비 중"],
    w_close: ["Закрыть", "Close", "Yopish", "닫기"],
    w_prev: ["Назад", "Previous", "Orqaga", "이전"],
    w_next: ["Вперёд", "Next", "Oldinga", "다음"],

    st_clients: ['клиентов', 'clients', 'mijozlar', '고객사'],
    st_countries: ['стран', 'countries', 'mamlakat', '개국'],
    st_partners: ['партнёров', 'partners', 'hamkorlar', '파트너'],
    st_projects: ['проектов', 'projects', 'loyiha', '프로젝트'],

    pr_eyebrow: ['Как это работает', 'How it works', 'Qanday ishlaydi', '진행 절차'],
    pr_h2: ['От заявки<br>до разгрузки', 'From request<br>to delivery', 'Arizadan<br>yetkazib berishgacha', '문의부터<br>인도까지'],
    p1_t: ['Заявка', 'Request', 'Ariza', '문의'],
    p1_p: ["Вы называете груз, поставщика и сроки.", "You tell us the cargo, supplier and deadlines.", "Siz yuk, yetkazib beruvchi va muddatni aytasiz.", "화물, 공급업체, 일정을 알려주세요."],
    p2_t: ['Расчёт', 'Quote', 'Hisob-kitob', '견적'],
    p2_p: ['Готовим ставку и схему за один рабочий день.', 'We prepare the rate and scheme within one business day.', 'Stavka va sxemani bir ish kunida tayyorlaymiz.', '영업일 하루 안에 운임과 운송 방식을 제안합니다.'],
    p3_t: ["Погрузка в Азии", "Loading in Asia", "Osiyoda yuklash", "아시아 적재"],
    p3_p: ["Забираем груз у поставщика, консолидируем и грузим в вагон или контейнер.", "We collect cargo from the supplier, consolidate it and load it into a wagon or container.", "Yukni yetkazib beruvchidan olamiz, konsolidatsiya qilamiz va vagon yoki konteynerga yuklaymiz.", "공급업체에서 화물을 픽업해 통합한 뒤 화차 또는 컨테이너에 적재합니다."],
    p4_t: ['В пути', 'In transit', 'Yoʻlda', '운송 중'],
    p4_p: ['Статус каждой станции в личном кабинете.', 'Status at every station in your personal account.', 'Har bir bekat holati shaxsiy kabinetda.', '모든 역의 상태를 개인 계정에서 확인하세요.'],
    p5_t: ["Таможня и выдача", "Customs and delivery", "Bojxona va topshirish", "통관 및 인도"],
    p5_p: ["Оформляем импорт в Ташкенте и доставляем получателю.", "We clear import in Tashkent and deliver to the consignee.", "Importni Toshkentda rasmiylashtiramiz va qabul qiluvchiga yetkazamiz.", "타슈켄트에서 수입 통관 후 수취인에게 배송합니다."],

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
