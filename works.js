/*
  Блок «Наши работы». Чтобы добавить видео:
  1. Положите файл в папку videos/ (например videos/busan.mp4) и, по желанию, обложку videos/busan.jpg.
  2. Добавьте объект в список ниже, заменив type: 'soon' на:
       { type: 'mp4', src: 'videos/busan.mp4', poster: 'videos/busan.jpg', t: {...}, m: {...} }
     или, для YouTube:
       { type: 'youtube', id: 'ID_ВИДЕО', t: {...}, m: {...} }
  t — заголовок, m — короткая метка (по языкам ru / en / uz / ko).
  Карточки с type: 'soon' — заглушки, их можно удалить.
*/
window.WORKS = [
  {
    type: 'soon', c: ['#0B3187', '#2340FF'],
    t: { ru: 'Блок-поезд из Пусана', en: 'Block train from Busan', uz: 'Busandan blok-poyezd', ko: '부산발 블록트레인' },
    m: { ru: 'Корея → Ташкент', en: 'Korea → Tashkent', uz: 'Koreya → Toshkent', ko: '한국 → 타슈켄트' }
  },
  {
    type: 'soon', c: ['#FF5A1F', '#B8330A'],
    t: { ru: 'Выгрузка контейнеров в Ташкенте', en: 'Container unloading in Tashkent', uz: 'Toshkentda konteynerlarni tushirish', ko: '타슈켄트 컨테이너 하역' },
    m: { ru: 'Терминал', en: 'Terminal', uz: 'Terminal', ko: '터미널' }
  },
  {
    type: 'soon', c: ['#0F7B6C', '#07423A'],
    t: { ru: 'Таможенное оформление на терминале', en: 'Customs clearance at the terminal', uz: 'Terminalda bojxona rasmiylashtiruvi', ko: '터미널 통관 절차' },
    m: { ru: 'Таможня', en: 'Customs', uz: 'Bojxona', ko: '통관' }
  },
  {
    type: 'soon', c: ['#07142E', '#0B3187'],
    t: { ru: 'Мультимодальная доставка из Японии', en: 'Multimodal delivery from Japan', uz: 'Yaponiyadan multimodal yetkazib berish', ko: '일본발 복합운송 배송' },
    m: { ru: 'Япония → Ташкент', en: 'Japan → Tashkent', uz: 'Yaponiya → Toshkent', ko: '일본 → 타슈켄트' }
  }
];
