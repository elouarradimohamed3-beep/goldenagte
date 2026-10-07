import type { Lang } from './index'

/** Small strings shown in the header, footer and cookie banner on every page. */
export type Ui = {
  nav: { subscription: string; usa: string; premium: string; install: string; blog: string; contact: string }
  tryNow: string
  menu: string
  language: string
  footer: { tagline: string; guides: string; company: string; popular: string; rights: string }
  cookie: { text: string; policy: string; ok: string; no: string }
  popup: { badge: string; title: string; body: string; perMonth: string; vs: string; save: string; cta: string; all: string; later: string; close: string; note: string }
}

export const UI: Record<Lang, Ui> = {
  en: { nav: { subscription: 'IPTV Subscription', usa: 'IPTV USA', premium: 'Premium IPTV', install: 'Install', blog: 'Blog', contact: 'Contact' }, tryNow: 'Try now', menu: 'Menu', language: 'Language',
    footer: { tagline: 'Live TV, movies and series on every screen, with plans from $20 a month and a 7-day refund.', guides: 'IPTV guides', company: 'Company', popular: 'Popular guides', rights: 'All rights reserved.' },
    cookie: { text: 'We use cookies for site analytics only if you agree. See our', policy: 'cookie policy', ok: 'Accept', no: 'Decline' },
    popup: { badge: 'Best value', title: 'Get a full year of IPTV', body: 'Pay once for 12 months and it works out to about {m} a month, instead of {full} paying monthly.', perMonth: 'per month', vs: 'instead of', save: 'Save {n}%', cta: 'Get the 1-year plan', all: 'See all plans', later: 'Maybe later', close: 'Close', note: '7-day refund · 24/7 support · instant activation' } },
  fr: { nav: { subscription: 'Abonnement IPTV', usa: 'IPTV USA', premium: 'IPTV Premium', install: 'Installation', blog: 'Blog', contact: 'Contact' }, tryNow: 'Essayer', menu: 'Menu', language: 'Langue',
    footer: { tagline: 'TV en direct, films et séries sur tous vos écrans, à partir de 20 $ par mois avec remboursement sous 7 jours.', guides: 'Guides IPTV', company: 'Société', popular: 'Guides populaires', rights: 'Tous droits réservés.' },
    cookie: { text: 'Nous n’utilisons des cookies de mesure d’audience que si vous l’acceptez. Consultez notre', policy: 'politique de cookies', ok: 'Accepter', no: 'Refuser' },
    popup: { badge: 'Meilleur rapport qualité-prix', title: 'Profitez d’une année complète d’IPTV', body: 'Payez une fois pour 12 mois : cela revient à environ {m} par mois, au lieu de {full} en payant mois par mois.', perMonth: 'par mois', vs: 'au lieu de', save: 'Économisez {n} %', cta: 'Prendre la formule 1 an', all: 'Voir toutes les formules', later: 'Peut-être plus tard', close: 'Fermer', note: 'Remboursement sous 7 jours · Assistance 24/7 · Activation immédiate' } },
  es: { nav: { subscription: 'Suscripción IPTV', usa: 'IPTV EE. UU.', premium: 'IPTV Premium', install: 'Instalación', blog: 'Blog', contact: 'Contacto' }, tryNow: 'Probar', menu: 'Menú', language: 'Idioma',
    footer: { tagline: 'TV en vivo, películas y series en todas tus pantallas, desde 20 $ al mes y con reembolso de 7 días.', guides: 'Guías IPTV', company: 'Empresa', popular: 'Guías populares', rights: 'Todos los derechos reservados.' },
    cookie: { text: 'Solo usamos cookies de analítica si lo aceptas. Consulta nuestra', policy: 'política de cookies', ok: 'Aceptar', no: 'Rechazar' },
    popup: { badge: 'Mejor valor', title: 'Disfruta de un año completo de IPTV', body: 'Paga una vez por 12 meses y te sale a unos {m} al mes, en lugar de {full} pagando mes a mes.', perMonth: 'al mes', vs: 'en lugar de', save: 'Ahorra un {n} %', cta: 'Quiero el plan de 1 año', all: 'Ver todos los planes', later: 'Quizá más tarde', close: 'Cerrar', note: 'Reembolso de 7 días · Soporte 24/7 · Activación inmediata' } },
  de: { nav: { subscription: 'IPTV-Abo', usa: 'IPTV USA', premium: 'Premium-IPTV', install: 'Installation', blog: 'Blog', contact: 'Kontakt' }, tryNow: 'Jetzt testen', menu: 'Menü', language: 'Sprache',
    footer: { tagline: 'Live-TV, Filme und Serien auf jedem Bildschirm, ab 20 $ im Monat mit 7 Tagen Rückgaberecht.', guides: 'IPTV-Ratgeber', company: 'Unternehmen', popular: 'Beliebte Ratgeber', rights: 'Alle Rechte vorbehalten.' },
    cookie: { text: 'Wir verwenden Analyse-Cookies nur mit Ihrer Zustimmung. Siehe unsere', policy: 'Cookie-Richtlinie', ok: 'Akzeptieren', no: 'Ablehnen' },
    popup: { badge: 'Bestes Preis-Leistungs-Verhältnis', title: 'Ein ganzes Jahr IPTV', body: 'Einmal für 12 Monate zahlen: das sind etwa {m} pro Monat statt {full} bei monatlicher Zahlung.', perMonth: 'pro Monat', vs: 'statt', save: '{n} % sparen', cta: 'Jahrestarif sichern', all: 'Alle Tarife ansehen', later: 'Vielleicht später', close: 'Schließen', note: '7 Tage Rückgaberecht · Support 24/7 · Sofortige Aktivierung' } },
  pt: { nav: { subscription: 'Assinatura IPTV', usa: 'IPTV EUA', premium: 'IPTV Premium', install: 'Instalação', blog: 'Blog', contact: 'Contacto' }, tryNow: 'Experimentar', menu: 'Menu', language: 'Idioma',
    footer: { tagline: 'TV ao vivo, filmes e séries em todos os ecrãs, a partir de 20 $ por mês e com reembolso de 7 dias.', guides: 'Guias IPTV', company: 'Empresa', popular: 'Guias populares', rights: 'Todos os direitos reservados.' },
    cookie: { text: 'Só utilizamos cookies de análise se aceitar. Consulte a nossa', policy: 'política de cookies', ok: 'Aceitar', no: 'Recusar' },
    popup: { badge: 'Melhor valor', title: 'Aproveite um ano inteiro de IPTV', body: 'Pague uma vez por 12 meses e fica em cerca de {m} por mês, em vez de {full} a pagar mês a mês.', perMonth: 'por mês', vs: 'em vez de', save: 'Poupe {n} %', cta: 'Quero o plano de 1 ano', all: 'Ver todos os planos', later: 'Talvez mais tarde', close: 'Fechar', note: 'Reembolso de 7 dias · Suporte 24/7 · Ativação imediata' } },
  pl: { nav: { subscription: 'Abonament IPTV', usa: 'IPTV USA', premium: 'IPTV Premium', install: 'Instalacja', blog: 'Blog', contact: 'Kontakt' }, tryNow: 'Wypróbuj', menu: 'Menu', language: 'Język',
    footer: { tagline: 'Telewizja na żywo, filmy i seriale na każdym ekranie, od 20 USD miesięcznie ze zwrotem pieniędzy w 7 dni.', guides: 'Poradniki IPTV', company: 'Firma', popular: 'Popularne poradniki', rights: 'Wszelkie prawa zastrzeżone.' },
    cookie: { text: 'Używamy cookies analitycznych tylko za Twoją zgodą. Zobacz naszą', policy: 'politykę cookies', ok: 'Akceptuję', no: 'Odrzuć' },
    popup: { badge: 'Najlepsza wartość', title: 'Cały rok IPTV w jednej cenie', body: 'Zapłać raz za 12 miesięcy, a wyjdzie około {m} miesięcznie zamiast {full} przy płatności miesięcznej.', perMonth: 'miesięcznie', vs: 'zamiast', save: 'Oszczędzasz {n} %', cta: 'Wybierz plan roczny', all: 'Zobacz wszystkie plany', later: 'Może później', close: 'Zamknij', note: 'Zwrot w 7 dni · Pomoc 24/7 · Natychmiastowa aktywacja' } },
  el: { nav: { subscription: 'Συνδρομή IPTV', usa: 'IPTV ΗΠΑ', premium: 'IPTV Premium', install: 'Εγκατάσταση', blog: 'Blog', contact: 'Επικοινωνία' }, tryNow: 'Δοκιμάστε', menu: 'Μενού', language: 'Γλώσσα',
    footer: { tagline: 'Ζωντανή τηλεόραση, ταινίες και σειρές σε κάθε οθόνη, από 20 $ τον μήνα με επιστροφή χρημάτων 7 ημερών.', guides: 'Οδηγοί IPTV', company: 'Εταιρεία', popular: 'Δημοφιλείς οδηγοί', rights: 'Με επιφύλαξη παντός δικαιώματος.' },
    cookie: { text: 'Χρησιμοποιούμε cookies analytics μόνο με τη συγκατάθεσή σας. Δείτε την', policy: 'πολιτική cookies', ok: 'Αποδοχή', no: 'Απόρριψη' },
    popup: { badge: 'Καλύτερη αξία', title: 'Ένα ολόκληρο έτος IPTV', body: 'Πληρώστε μία φορά για 12 μήνες και βγαίνει περίπου {m} τον μήνα, αντί για {full} με μηνιαία πληρωμή.', perMonth: 'τον μήνα', vs: 'αντί για', save: 'Εξοικονομήστε {n} %', cta: 'Θέλω το ετήσιο πακέτο', all: 'Δείτε όλα τα πακέτα', later: 'Ίσως αργότερα', close: 'Κλείσιμο', note: 'Επιστροφή χρημάτων 7 ημερών · Υποστήριξη 24/7 · Άμεση ενεργοποίηση' } },
  ar: { nav: { subscription: 'اشتراك IPTV', usa: 'IPTV أمريكا', premium: 'IPTV بريميوم', install: 'التثبيت', blog: 'المدونة', contact: 'اتصل بنا' }, tryNow: 'جرّب الآن', menu: 'القائمة', language: 'اللغة',
    footer: { tagline: 'بث مباشر وأفلام ومسلسلات على كل شاشة، بدءًا من 20 دولارًا شهريًا مع استرداد خلال 7 أيام.', guides: 'أدلة IPTV', company: 'الشركة', popular: 'أدلة شائعة', rights: 'جميع الحقوق محفوظة.' },
    cookie: { text: 'نستخدم ملفات تعريف الارتباط التحليلية فقط بموافقتك. اطّلع على', policy: 'سياسة ملفات تعريف الارتباط', ok: 'موافق', no: 'رفض' },
    popup: { badge: 'الأفضل قيمة', title: 'سنة كاملة من IPTV', body: 'ادفع مرة واحدة لمدة 12 شهرًا ليصبح السعر نحو {m} شهريًا بدلًا من {full} عند الدفع شهريًا.', perMonth: 'شهريًا', vs: 'بدلًا من', save: 'وفّر {n}٪', cta: 'احصل على باقة السنة', all: 'عرض كل الباقات', later: 'ربما لاحقًا', close: 'إغلاق', note: 'استرداد خلال 7 أيام · دعم 24/7 · تفعيل فوري' } },
}
