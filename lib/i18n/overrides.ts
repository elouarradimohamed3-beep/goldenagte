import type { Dict } from './en'
import type { Lang } from './index'

type Faq = { q: string; a: string }

/**
 * Per-language focus keyword (Semrush, country database, Oct 2026) and the copy that carries it.
 * Applied on top of the base translation in dicts.ts: title, description, H1, intro section,
 * and the three FAQ entries that name the market.
 */
export type Override = {
  area: string | string[]
  focus: { keyword: string; db: string; volume: number; kd: number; also: string }
  meta: { title: string; description: string }
  hero: { h1: string; p: string }
  service: { eyebrow: string; title: string; p1: string; p2: string }
  faq: { lead: Faq[]; availability: Faq; legal: Faq }
}

export const OVERRIDES: Partial<Record<Lang, Override>> = {
  fr: {
    area: 'FR',
    focus: { keyword: 'IPTV France', db: 'fr', volume: 8100, kd: 33, also: 'abonnement IPTV 18,100 · IPTV premium 5,400 · abonnement IPTV France 2,400' },
    meta: { title: 'IPTV France : abonnement IPTV dès 20 $ par mois', description: 'IPTV France fiable : abonnement IPTV avec TV en direct, films et séries en HD et 4K sur tous vos appareils. Dès 7 $ par jour, remboursement sous 7 jours.' },
    hero: {
      h1: 'IPTV France : un service IPTV fiable pour la TV en direct, les films et les séries',
      p: 'Choisissez un {sub} à partir de 20 $ par mois, ou passez à {prem} pour la 4K et jusqu’à 5 écrans. Recevez vos identifiants en quelques minutes et regardez en France comme à l’étranger, sur votre Smart TV, Fire Stick, téléphone ou ordinateur.',
    },
    service: {
      eyebrow: 'IPTV France', title: 'IPTV France : de quoi s’agit-il ?',
      p1: 'L’**IPTV France** désigne un service qui diffuse des chaînes de télévision en direct ainsi que des films et séries à la demande via votre connexion internet. Vous regardez sur une Smart TV, une Fire TV Stick, un téléphone ou un ordinateur, sans décodeur ni parabole.',
      p2: 'Vous choisissez un {sub} de la durée souhaitée, recevez vos identifiants en quelques minutes et vous connectez à une application. Pour l’image la plus nette ou plusieurs écrans simultanés, découvrez {prem}. Nos prix sont indiqués en dollars et convertis en euros à côté de chaque formule.',
    },
    faq: {
      lead: [
        { q: 'IPTV France : comment ça marche ?', a: 'Avec l’IPTV France, vous regardez la télévision en direct et des films et séries à la demande via internet, sans parabole ni décodeur. Vous prenez un abonnement IPTV, recevez vos identifiants en quelques minutes et vous connectez à une application sur votre Smart TV, Fire TV Stick, téléphone ou ordinateur.' },
        { q: 'Où prendre un abonnement IPTV en France et à quel prix ?', a: 'Vous pouvez prendre votre abonnement IPTV directement ici, via WhatsApp. Nos formules démarrent à 7 $ pour un jour et 20 $ pour un mois (environ 18 € par mois), et la formule annuelle revient à environ 6,42 $ par mois. Un remboursement sous 7 jours est inclus.' },
      ],
      availability: { q: 'L’IPTV est-elle disponible en France ?', a: 'Oui. Notre service IPTV est accessible partout en France comme dans le reste du monde, avec une assistance WhatsApp 24 h/24 et des guides d’installation pour les appareils courants. Les prix sont fixés en dollars et affichés aussi en euros. Demandez-nous la couverture de vos chaînes préférées avant d’acheter.' },
      legal: { q: 'L’IPTV est-elle légale en France ?', a: 'Cela dépend du service et des contenus proposés, et les règles varient selon les pays et évoluent avec le temps. Choisissez un fournisseur transparent sur ce qu’il vend, conservez vos reçus et vérifiez la réglementation qui s’applique à vous.' },
    },
  },
  es: {
    area: 'ES',
    focus: { keyword: 'IPTV España', db: 'es', volume: 3600, kd: 38, also: 'lista IPTV 1,000 · IPTV premium 720 · “IPTV Spain” 480 (kept in title) · servicio IPTV 140' },
    meta: { title: 'IPTV España (IPTV Spain): suscripción desde 20 $ al mes', description: 'IPTV España (IPTV Spain) fiable: suscripción IPTV con TV en vivo, películas y series en HD y 4K en todos tus dispositivos. Desde 7 $ al día, reembolso 7 días.' },
    hero: {
      h1: 'IPTV España (IPTV Spain): un servicio IPTV fiable para ver TV en vivo, películas y series',
      p: 'Elige una {sub} desde 20 $ al mes o pasa a {prem} para disfrutar de 4K y hasta 5 pantallas. Recibe tus datos de acceso en minutos y mira en tu Smart TV, Fire Stick, teléfono u ordenador en España y en cualquier lugar.',
    },
    service: {
      eyebrow: 'IPTV España · IPTV Spain', title: 'IPTV España: ¿qué es y cómo funciona?',
      p1: '**IPTV España** (IPTV Spain) es un servicio que ofrece canales de televisión en vivo y películas y series bajo demanda a través de tu conexión a internet, para que veas en una Smart TV, Fire TV Stick, teléfono u ordenador sin decodificador ni antena parabólica.',
      p2: 'Eliges una {sub} por el tiempo que quieras, recibes tus datos de acceso en minutos e inicias sesión en una aplicación. Si buscas un servicio IPTV estable, con soporte a todas horas y reembolso de 7 días, y la mejor imagen con {prem}, aquí lo tienes. Los precios están en dólares, con su equivalente en euros.',
    },
    faq: {
      lead: [
        { q: 'IPTV España (IPTV Spain): ¿cómo funciona?', a: 'Con IPTV España (IPTV Spain) ves televisión en vivo y películas y series bajo demanda a través de internet, sin antena parabólica ni decodificador. Contratas una suscripción IPTV, recibes tus datos de acceso en minutos e inicias sesión en una aplicación en tu Smart TV, Fire TV Stick, teléfono u ordenador.' },
        { q: '¿Cuánto cuesta una suscripción IPTV en España y dónde contratarla?', a: 'Puedes contratar tu suscripción IPTV directamente aquí, por WhatsApp. Nuestros planes empiezan en 7 $ por un día y 20 $ por un mes (unos 18 € al mes), y el plan anual sale por unos 6,42 $ al mes. Incluye reembolso de 7 días.' },
      ],
      availability: { q: '¿Está disponible la IPTV en España?', a: 'Sí. Nuestro servicio IPTV funciona en toda España y en el resto del mundo, con soporte por WhatsApp a todas horas y guías de instalación para los dispositivos más habituales. Los precios se fijan en dólares y también se muestran en euros. Pregúntanos por los canales que te interesan antes de comprar.' },
      legal: { q: '¿Es legal la IPTV en España?', a: 'Depende del servicio y del contenido que ofrece, y las normas varían según el país y cambian con el tiempo. Elige un proveedor transparente sobre lo que vende, guarda tus recibos y consulta la normativa que te afecte.' },
    },
  },
  de: {
    area: 'DE',
    focus: { keyword: 'IPTV Deutschland', db: 'de', volume: 1900, kd: 36, also: 'IPTV kaufen 8,100 · IPTV Anbieter 6,600 · IPTV Abo 590 · IPTV Premium 390' },
    meta: { title: 'IPTV Deutschland: IPTV kaufen & Abo ab 20 $ pro Monat', description: 'IPTV Deutschland: zuverlässiger IPTV-Anbieter mit Live-TV, Filmen und Serien in HD und 4K. IPTV-Abo ab 7 $ pro Tag, 7 Tage Rückgaberecht, Support 24/7.' },
    hero: {
      h1: 'IPTV Deutschland: zuverlässiger IPTV-Anbieter für Live-TV, Filme und Serien',
      p: 'Wählen Sie ein {sub} ab 20 $ im Monat oder steigen Sie auf {prem} um – für 4K und bis zu 5 Bildschirme. Erhalten Sie Ihre Zugangsdaten in wenigen Minuten und schauen Sie in Deutschland und überall auf Smart TV, Fire Stick, Handy oder Computer.',
    },
    service: {
      eyebrow: 'IPTV Deutschland', title: 'IPTV Deutschland: Was ist das?',
      p1: '**IPTV Deutschland** steht für einen Dienst, der Live-TV-Sender sowie Filme und Serien auf Abruf über Ihre Internetverbindung liefert – ohne Kabelreceiver oder Satellitenschüssel. Sie schauen auf Smart TV, Fire TV Stick, Handy oder Computer.',
      p2: 'Sie wählen ein {sub} für die gewünschte Laufzeit, erhalten Ihre Zugangsdaten in Minuten und melden sich in einer App an. Wer einen IPTV-Anbieter sucht, achtet auf Rückgaberecht, Support und klare Preise. Für das schärfste Bild oder mehrere Bildschirme lohnt ein Blick auf {prem}. Die Preise stehen in US-Dollar, daneben zeigen wir Euro.',
    },
    faq: {
      lead: [
        { q: 'IPTV Deutschland: Wie funktioniert das?', a: 'Mit IPTV Deutschland schauen Sie Live-TV sowie Filme und Serien auf Abruf über das Internet – ohne Satellitenschüssel oder Kabelreceiver. Sie kaufen ein IPTV-Abo, erhalten Ihre Zugangsdaten in wenigen Minuten und melden sich in einer App auf Smart TV, Fire TV Stick, Handy oder Computer an.' },
        { q: 'IPTV kaufen: Was kostet ein IPTV-Abo in Deutschland?', a: 'Sie können Ihr IPTV-Abo direkt hier per WhatsApp kaufen. Unsere Tarife beginnen bei 7 $ für einen Tag und 20 $ für einen Monat (ca. 18 € pro Monat), der Jahrestarif liegt bei etwa 6,42 $ pro Monat. 7 Tage Rückgaberecht sind inklusive.' },
      ],
      availability: { q: 'Ist IPTV in Deutschland verfügbar?', a: 'Ja. Unser IPTV-Service funktioniert in ganz Deutschland und weltweit, mit Support per WhatsApp rund um die Uhr und Einrichtungsanleitungen für gängige Geräte. Die Preise werden in US-Dollar festgelegt und zusätzlich in Euro angezeigt. Fragen Sie vor dem Kauf nach den Sendern, die Ihnen wichtig sind.' },
      legal: { q: 'Ist IPTV in Deutschland legal?', a: 'Das hängt vom Service und den angebotenen Inhalten ab, und die Regeln unterscheiden sich je nach Land und ändern sich im Lauf der Zeit. Wählen Sie einen Anbieter, der offen sagt, was er verkauft, bewahren Sie Ihre Belege auf und prüfen Sie die für Sie geltenden Vorschriften.' },
    },
  },
  pt: {
    area: 'PT',
    focus: { keyword: 'IPTV Portugal', db: 'pt', volume: 5400, kd: 30, also: 'serviço IPTV 170 · melhor IPTV 170 · IPTV pt 140 (Brasil: IPTV Brasil 5,400 KD 58)' },
    meta: { title: 'IPTV Portugal: assinatura IPTV desde 20 $ por mês', description: 'IPTV Portugal fiável: assinatura IPTV com TV ao vivo, filmes e séries em HD e 4K em todos os dispositivos. Desde 7 $ por dia, reembolso de 7 dias.' },
    hero: {
      h1: 'IPTV Portugal: um serviço IPTV fiável para TV ao vivo, filmes e séries',
      p: 'Escolha uma {sub} desde 20 $ por mês ou passe para {prem} com 4K e até 5 ecrãs. Receba o seu acesso em minutos e veja na sua Smart TV, Fire Stick, telemóvel ou computador em Portugal e em qualquer lugar.',
    },
    service: {
      eyebrow: 'IPTV Portugal', title: 'IPTV Portugal: o que é?',
      p1: 'A **IPTV Portugal** é um serviço que entrega canais de televisão ao vivo e filmes e séries a pedido através da sua ligação à internet, para que possa ver numa Smart TV, Fire TV Stick, telemóvel ou computador sem caixa de cabo nem antena parabólica.',
      p2: 'Escolhe uma {sub} pelo período que quiser, recebe o acesso em minutos e inicia sessão numa aplicação. Se procura um serviço IPTV com suporte e reembolso de 7 dias, e a imagem mais nítida com {prem}, está no sítio certo. Os preços estão em dólares, com o equivalente em euros.',
    },
    faq: {
      lead: [
        { q: 'IPTV Portugal: como funciona?', a: 'Com a IPTV Portugal vê televisão ao vivo e filmes e séries a pedido através da internet, sem antena parabólica nem caixa. Contrata uma assinatura IPTV, recebe o acesso em minutos e inicia sessão numa aplicação na sua Smart TV, Fire TV Stick, telemóvel ou computador.' },
        { q: 'Quanto custa uma assinatura IPTV em Portugal e onde a contratar?', a: 'Pode contratar a sua assinatura IPTV diretamente aqui, pelo WhatsApp. Os nossos planos começam em 7 $ por um dia e 20 $ por um mês (cerca de 18 € por mês), e o plano anual fica por cerca de 6,42 $ por mês. Inclui reembolso de 7 dias.' },
      ],
      availability: { q: 'A IPTV está disponível em Portugal?', a: 'Sim. O nosso serviço IPTV funciona em todo o Portugal e no resto do mundo, com suporte por WhatsApp a toda a hora e guias de instalação para os dispositivos mais comuns. Os preços são definidos em dólares e também apresentados em euros. Pergunte-nos pelos canais que lhe interessam antes de comprar.' },
      legal: { q: 'A IPTV é legal em Portugal?', a: 'Depende do serviço e do conteúdo que oferece, e as regras variam consoante o país e mudam ao longo do tempo. Escolha um fornecedor transparente sobre o que vende, guarde os recibos e verifique a regulamentação que se aplica a si.' },
    },
  },
  pl: {
    area: 'PL',
    focus: { keyword: 'IPTV Polska', db: 'pl', volume: 1600, kd: 15, also: 'lista IPTV 110 · IPTV pl 110 · najlepsze IPTV 90 (reszta < 100)' },
    meta: { title: 'IPTV Polska: abonament IPTV od 20 $ miesięcznie', description: 'IPTV Polska: niezawodna usługa z telewizją na żywo, filmami i serialami w HD i 4K na każdym urządzeniu. Abonament IPTV od 7 $ za dzień, zwrot w 7 dni.' },
    hero: {
      h1: 'IPTV Polska: niezawodna usługa IPTV dla telewizji na żywo, filmów i seriali',
      p: 'Wybierz {sub} od 20 $ miesięcznie lub przejdź na {prem}, aby cieszyć się 4K i nawet 5 ekranami. Dane logowania otrzymasz w kilka minut i obejrzysz na Smart TV, Fire Stick, telefonie lub komputerze w Polsce i w dowolnym miejscu na świecie.',
    },
    service: {
      eyebrow: 'IPTV Polska', title: 'IPTV Polska: czym jest?',
      p1: '**IPTV Polska** to usługa, która dostarcza kanały telewizyjne na żywo oraz filmy i seriale na żądanie przez Twoje łącze internetowe – bez dekodera kablowego i anteny satelitarnej. Oglądasz na Smart TV, Fire TV Stick, telefonie lub komputerze.',
      p2: 'Wybierasz {sub} na dowolny okres, dane logowania dostajesz w kilka minut i logujesz się w aplikacji. Jeśli szukasz najlepszego IPTV zamiast przypadkowej listy kanałów, zwróć uwagę na zwrot pieniędzy, pomoc techniczną i jasne ceny. Dla najostrzejszego obrazu sprawdź {prem}. Ceny podajemy w dolarach, obok w euro.',
    },
    faq: {
      lead: [
        { q: 'IPTV Polska: jak to działa?', a: 'Dzięki IPTV Polska oglądasz telewizję na żywo oraz filmy i seriale na żądanie przez internet – bez anteny satelitarnej i dekodera. Wykupujesz abonament IPTV, dane logowania dostajesz w kilka minut i logujesz się w aplikacji na Smart TV, Fire TV Stick, telefonie lub komputerze.' },
        { q: 'Ile kosztuje abonament IPTV w Polsce i gdzie go wykupić?', a: 'Abonament IPTV możesz wykupić bezpośrednio tutaj, przez WhatsApp. Nasze plany zaczynają się od 7 $ za jeden dzień i 20 $ za miesiąc (ok. 18 € miesięcznie), a plan roczny wychodzi na ok. 6,42 $ miesięcznie. Zwrot pieniędzy w 7 dni w cenie.' },
      ],
      availability: { q: 'Czy IPTV jest dostępne w Polsce?', a: 'Tak. Nasza usługa IPTV działa w całej Polsce i na całym świecie, z pomocą na WhatsAppie przez całą dobę i instrukcjami konfiguracji dla popularnych urządzeń. Ceny ustalamy w dolarach i pokazujemy także w euro. Przed zakupem zapytaj nas o interesujące Cię kanały.' },
      legal: { q: 'Czy IPTV jest legalne w Polsce?', a: 'To zależy od usługi i oferowanych treści, a przepisy różnią się w zależności od kraju i zmieniają się w czasie. Wybierz dostawcę, który otwarcie mówi, co sprzedaje, zachowaj paragony i sprawdź przepisy, które Cię dotyczą.' },
    },
  },
  el: {
    area: 'GR',
    focus: { keyword: 'IPTV Ελλάδα', db: 'gr', volume: 20, kd: 0, also: '“IPTV Greece” 1,300 (KD 21) is what Greeks search in practice; IPTV 5,400 — title carries both' },
    meta: { title: 'IPTV Ελλάδα (IPTV Greece): συνδρομή από 20 $ τον μήνα', description: 'IPTV Ελλάδα: αξιόπιστη υπηρεσία IPTV με ζωντανή τηλεόραση, ταινίες και σειρές σε HD και 4K. Συνδρομή από 7 $ την ημέρα, επιστροφή χρημάτων 7 ημερών.' },
    hero: {
      h1: 'IPTV Ελλάδα: αξιόπιστη υπηρεσία IPTV για ζωντανή τηλεόραση, ταινίες και σειρές',
      p: 'Επιλέξτε μια {sub} από 20 $ τον μήνα ή αναβαθμίστε σε {prem} για 4K και έως 5 οθόνες. Λάβετε τα στοιχεία πρόσβασης σε λίγα λεπτά και παρακολουθήστε στη Smart TV, το Fire Stick, το κινητό ή τον υπολογιστή σας στην Ελλάδα και οπουδήποτε στον κόσμο.',
    },
    service: {
      eyebrow: 'IPTV Ελλάδα · IPTV Greece', title: 'IPTV Ελλάδα: τι είναι;',
      p1: 'Το **IPTV Ελλάδα** (IPTV Greece) είναι μια υπηρεσία που παραδίδει ζωντανά τηλεοπτικά κανάλια και ταινίες και σειρές κατά παραγγελία μέσω της σύνδεσής σας στο διαδίκτυο, χωρίς αποκωδικοποιητή καλωδίου ή δορυφορικό πιάτο. Βλέπετε σε Smart TV, Fire TV Stick, κινητό ή υπολογιστή.',
      p2: 'Επιλέγετε μια {sub} για τη διάρκεια που θέλετε, λαμβάνετε τα στοιχεία πρόσβασης σε λίγα λεπτά και συνδέεστε σε μια εφαρμογή. Αν θέλετε την πιο καθαρή εικόνα ή πολλές οθόνες ταυτόχρονα, δείτε το {prem}. Οι τιμές είναι σε δολάρια, με το αντίστοιχο σε ευρώ.',
    },
    faq: {
      lead: [
        { q: 'IPTV Ελλάδα (IPTV Greece): πώς λειτουργεί;', a: 'Με το IPTV Ελλάδα βλέπετε ζωντανή τηλεόραση και ταινίες και σειρές κατά παραγγελία μέσω διαδικτύου, χωρίς δορυφορικό πιάτο ή αποκωδικοποιητή. Παίρνετε μια συνδρομή IPTV, λαμβάνετε τα στοιχεία πρόσβασης σε λίγα λεπτά και συνδέεστε σε μια εφαρμογή σε Smart TV, Fire TV Stick, κινητό ή υπολογιστή.' },
        { q: 'Πόσο κοστίζει μια συνδρομή IPTV στην Ελλάδα και πού την αγοράζω;', a: 'Μπορείτε να αγοράσετε τη συνδρομή IPTV απευθείας εδώ, μέσω WhatsApp. Τα πακέτα μας ξεκινούν από 7 $ για μία ημέρα και 20 $ για έναν μήνα (περίπου 18 € τον μήνα), ενώ το ετήσιο πακέτο βγαίνει περίπου 6,42 $ τον μήνα. Περιλαμβάνεται επιστροφή χρημάτων 7 ημερών.' },
      ],
      availability: { q: 'Είναι διαθέσιμο το IPTV στην Ελλάδα;', a: 'Ναι. Η υπηρεσία IPTV μας λειτουργεί σε όλη την Ελλάδα και σε όλο τον κόσμο, με υποστήριξη στο WhatsApp όλο το 24ωρο και οδηγούς εγκατάστασης για τις πιο συνηθισμένες συσκευές. Οι τιμές ορίζονται σε δολάρια και εμφανίζονται και σε ευρώ. Ρωτήστε μας για τα κανάλια που σας ενδιαφέρουν πριν αγοράσετε.' },
      legal: { q: 'Είναι νόμιμο το IPTV στην Ελλάδα;', a: 'Εξαρτάται από την υπηρεσία και το περιεχόμενο που προσφέρει, και οι κανόνες διαφέρουν ανά χώρα και αλλάζουν με τον χρόνο. Επιλέξτε πάροχο που είναι ανοιχτός για το τι πουλά, κρατήστε τις αποδείξεις σας και ελέγξτε τους κανονισμούς που ισχύουν για εσάς.' },
    },
  },
  ar: {
    area: ['SA', 'EG', 'AE'],
    focus: { keyword: 'اشتراك IPTV', db: 'sa', volume: 27100, kd: 13, also: 'اشتراك IPTV: مصر 2,400 · الإمارات 720 · سيرفر IPTV 720 (EG) · اي بي تي في 3,600 (SA) — keywords with a country name are tiny ("IPTV السعودية" 110)' },
    meta: { title: 'اشتراك IPTV: خدمة IPTV موثوقة من 20 دولارًا شهريًا', description: 'اشتراك IPTV موثوق: بث مباشر وأفلام ومسلسلات بدقة HD و4K على جميع أجهزتك في السعودية ومصر والإمارات. باقات من 7 دولارات يوميًا واسترداد خلال 7 أيام.' },
    hero: {
      h1: 'اشتراك IPTV: خدمة موثوقة للبث التلفزيوني المباشر والأفلام والمسلسلات',
      p: 'اختر {sub} بدءًا من 20 دولارًا شهريًا، أو انتقل إلى {prem} للحصول على دقة 4K وما يصل إلى 5 شاشات. احصل على بيانات الدخول خلال دقائق وشاهد على التلفزيون الذكي أو Fire Stick أو هاتفك أو حاسوبك في السعودية ومصر والإمارات وفي أي مكان في العالم.',
    },
    service: {
      eyebrow: 'اشتراك IPTV', title: 'ما هو اشتراك IPTV؟',
      p1: 'يتيح لك **اشتراك IPTV** مشاهدة القنوات التلفزيونية المباشرة والأفلام والمسلسلات عند الطلب عبر اتصالك بالإنترنت، على تلفزيون ذكي أو Fire TV Stick أو هاتف أو حاسوب، دون جهاز استقبال كابل أو طبق فضائي.',
      p2: 'تختار {sub} للمدة التي تريدها، وتتلقى بيانات الدخول خلال دقائق، ثم تسجّل الدخول في تطبيق، فلا تحتاج إلى إعداد سيرفر IPTV بنفسك. وإذا كنت تريد أوضح صورة أو عدة شاشات في وقت واحد فاطّلع على {prem}. الأسعار بالدولار الأمريكي.',
    },
    faq: {
      lead: [
        { q: 'اشتراك IPTV: كيف يعمل؟', a: 'مع اشتراك IPTV تشاهد القنوات المباشرة والأفلام والمسلسلات عبر الإنترنت دون طبق فضائي أو جهاز استقبال. تشترك، وتتلقى بيانات الدخول خلال دقائق، ثم تسجّل الدخول في تطبيق على تلفزيونك الذكي أو Fire TV Stick أو هاتفك أو حاسوبك.' },
        { q: 'كم سعر اشتراك IPTV وأين أشترك؟', a: 'يمكنك الاشتراك مباشرة من هنا عبر واتساب. تبدأ باقاتنا من 7 دولارات ليوم واحد و20 دولارًا لشهر واحد، ويبلغ سعر الباقة السنوية نحو 6.42 دولارًا شهريًا. يتضمن الاشتراك استردادًا خلال 7 أيام.' },
      ],
      availability: { q: 'هل IPTV متاح في السعودية ومصر والإمارات؟', a: 'نعم. تعمل خدمة IPTV لدينا في السعودية ومصر والإمارات وفي بقية دول العالم، مع دعم عبر واتساب على مدار الساعة وأدلة إعداد للأجهزة الشائعة. اسألنا عن القنوات التي تهمك قبل الشراء.' },
      legal: { q: 'هل IPTV قانوني؟', a: 'يعتمد ذلك على الخدمة والمحتوى الذي تقدمه، وتختلف القواعد من بلد إلى آخر وتتغير بمرور الوقت. اختر مزوّدًا شفافًا بشأن ما يبيعه، واحتفظ بإيصالاتك، وتحقق من اللوائح التي تنطبق عليك.' },
    },
  },
}

/** Apply a language's keyword copy to its base dictionary. */
export function applyOverride(base: Dict, o: Override | undefined): Dict {
  if (!o) return base
  const items = [...base.faq.items]
  items[3] = o.faq.availability
  items[5] = o.faq.legal
  return {
    ...base,
    meta: o.meta,
    hero: { ...base.hero, h1: o.hero.h1, p: o.hero.p },
    service: { ...base.service, ...o.service },
    faq: { ...base.faq, items: [...o.faq.lead, ...items] },
  }
}
