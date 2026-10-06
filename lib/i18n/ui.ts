import type { Lang } from './index'

/** Small strings shown in the header, footer and cookie banner on every page. */
export type Ui = {
  nav: { subscription: string; usa: string; premium: string; install: string; blog: string; contact: string }
  tryNow: string
  menu: string
  language: string
  footer: { tagline: string; guides: string; company: string; popular: string; rights: string }
  cookie: { text: string; policy: string; ok: string }
}

export const UI: Record<Lang, Ui> = {
  en: { nav: { subscription: 'IPTV Subscription', usa: 'IPTV USA', premium: 'Premium IPTV', install: 'Install', blog: 'Blog', contact: 'Contact' }, tryNow: 'Try now', menu: 'Menu', language: 'Language',
    footer: { tagline: 'Live TV, movies and series on every screen, with plans from $20 a month and a 7-day refund.', guides: 'IPTV guides', company: 'Company', popular: 'Popular guides', rights: 'All rights reserved.' },
    cookie: { text: 'We use minimal storage to improve the site. See our', policy: 'cookie policy', ok: 'Got it' } },
  fr: { nav: { subscription: 'Abonnement IPTV', usa: 'IPTV USA', premium: 'IPTV Premium', install: 'Installation', blog: 'Blog', contact: 'Contact' }, tryNow: 'Essayer', menu: 'Menu', language: 'Langue',
    footer: { tagline: 'TV en direct, films et séries sur tous vos écrans, à partir de 20 $ par mois avec remboursement sous 7 jours.', guides: 'Guides IPTV', company: 'Société', popular: 'Guides populaires', rights: 'Tous droits réservés.' },
    cookie: { text: 'Nous utilisons un stockage minimal pour améliorer le site. Consultez notre', policy: 'politique de cookies', ok: 'Compris' } },
  es: { nav: { subscription: 'Suscripción IPTV', usa: 'IPTV EE. UU.', premium: 'IPTV Premium', install: 'Instalación', blog: 'Blog', contact: 'Contacto' }, tryNow: 'Probar', menu: 'Menú', language: 'Idioma',
    footer: { tagline: 'TV en vivo, películas y series en todas tus pantallas, desde 20 $ al mes y con reembolso de 7 días.', guides: 'Guías IPTV', company: 'Empresa', popular: 'Guías populares', rights: 'Todos los derechos reservados.' },
    cookie: { text: 'Usamos almacenamiento mínimo para mejorar el sitio. Consulta nuestra', policy: 'política de cookies', ok: 'Entendido' } },
  de: { nav: { subscription: 'IPTV-Abo', usa: 'IPTV USA', premium: 'Premium-IPTV', install: 'Installation', blog: 'Blog', contact: 'Kontakt' }, tryNow: 'Jetzt testen', menu: 'Menü', language: 'Sprache',
    footer: { tagline: 'Live-TV, Filme und Serien auf jedem Bildschirm, ab 20 $ im Monat mit 7 Tagen Rückgaberecht.', guides: 'IPTV-Ratgeber', company: 'Unternehmen', popular: 'Beliebte Ratgeber', rights: 'Alle Rechte vorbehalten.' },
    cookie: { text: 'Wir verwenden minimalen Speicher, um die Seite zu verbessern. Siehe unsere', policy: 'Cookie-Richtlinie', ok: 'Verstanden' } },
  pt: { nav: { subscription: 'Assinatura IPTV', usa: 'IPTV EUA', premium: 'IPTV Premium', install: 'Instalação', blog: 'Blog', contact: 'Contacto' }, tryNow: 'Experimentar', menu: 'Menu', language: 'Idioma',
    footer: { tagline: 'TV ao vivo, filmes e séries em todos os ecrãs, a partir de 20 $ por mês e com reembolso de 7 dias.', guides: 'Guias IPTV', company: 'Empresa', popular: 'Guias populares', rights: 'Todos os direitos reservados.' },
    cookie: { text: 'Utilizamos armazenamento mínimo para melhorar o site. Consulte a nossa', policy: 'política de cookies', ok: 'Entendi' } },
  pl: { nav: { subscription: 'Abonament IPTV', usa: 'IPTV USA', premium: 'IPTV Premium', install: 'Instalacja', blog: 'Blog', contact: 'Kontakt' }, tryNow: 'Wypróbuj', menu: 'Menu', language: 'Język',
    footer: { tagline: 'Telewizja na żywo, filmy i seriale na każdym ekranie, od 20 USD miesięcznie ze zwrotem pieniędzy w 7 dni.', guides: 'Poradniki IPTV', company: 'Firma', popular: 'Popularne poradniki', rights: 'Wszelkie prawa zastrzeżone.' },
    cookie: { text: 'Używamy minimalnej ilości pamięci, aby ulepszyć stronę. Zobacz naszą', policy: 'politykę cookies', ok: 'Rozumiem' } },
  el: { nav: { subscription: 'Συνδρομή IPTV', usa: 'IPTV ΗΠΑ', premium: 'IPTV Premium', install: 'Εγκατάσταση', blog: 'Blog', contact: 'Επικοινωνία' }, tryNow: 'Δοκιμάστε', menu: 'Μενού', language: 'Γλώσσα',
    footer: { tagline: 'Ζωντανή τηλεόραση, ταινίες και σειρές σε κάθε οθόνη, από 20 $ τον μήνα με επιστροφή χρημάτων 7 ημερών.', guides: 'Οδηγοί IPTV', company: 'Εταιρεία', popular: 'Δημοφιλείς οδηγοί', rights: 'Με επιφύλαξη παντός δικαιώματος.' },
    cookie: { text: 'Χρησιμοποιούμε ελάχιστη αποθήκευση για τη βελτίωση του ιστότοπου. Δείτε την', policy: 'πολιτική cookies', ok: 'Κατάλαβα' } },
  ar: { nav: { subscription: 'اشتراك IPTV', usa: 'IPTV أمريكا', premium: 'IPTV بريميوم', install: 'التثبيت', blog: 'المدونة', contact: 'اتصل بنا' }, tryNow: 'جرّب الآن', menu: 'القائمة', language: 'اللغة',
    footer: { tagline: 'بث مباشر وأفلام ومسلسلات على كل شاشة، بدءًا من 20 دولارًا شهريًا مع استرداد خلال 7 أيام.', guides: 'أدلة IPTV', company: 'الشركة', popular: 'أدلة شائعة', rights: 'جميع الحقوق محفوظة.' },
    cookie: { text: 'نستخدم أقل قدر من التخزين لتحسين الموقع. اطّلع على', policy: 'سياسة ملفات تعريف الارتباط', ok: 'حسنًا' } },
}
