import {
  CalendarCheck,
  ChevronRight,
  Coffee,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    name: "季節野菜のこもれび膳",
    price: "1,680円",
    text: "土鍋ごはん、旬野菜の小鉢、味噌汁を少しずつ楽しめる一番人気のランチ。",
    image:
      "/images/menu-lunch.jpg",
  },
  {
    name: "深煎りブレンド珈琲",
    price: "620円",
    text: "梁の下でゆっくり味わう、香ばしさと余韻を大切にした自家焙煎珈琲。",
    image:
      "/images/menu-coffee.jpg",
  },
  {
    name: "黒糖チーズケーキ",
    price: "720円",
    text: "黒糖のこくとやわらかな酸味を重ねた、珈琲によく合う甘味。",
    image:
      "/images/menu-dessert.jpg",
  },
];

const voices = [
  {
    age: "50代・ご夫婦",
    body: "静かで席の間隔もゆったり。久しぶりに時間を忘れて食事できました。",
  },
  {
    age: "40代・女性",
    body: "古民家の雰囲気と丁寧なランチが素敵で、母を連れてまた来たいです。",
  },
  {
    age: "60代・男性",
    body: "珈琲が香り高く、庭を眺める席が落ち着きます。電話予約も安心でした。",
  },
];

const faqs = [
  {
    question: "予約は必要ですか？",
    answer:
      "席数が少ないため、ランチタイムは事前予約をおすすめしています。お電話または予約フォームから承ります。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "店舗横に4台分の駐車スペースがあります。満車の場合は近隣のコインパーキングをご案内します。",
  },
  {
    question: "一人でも利用できますか？",
    answer:
      "もちろんです。窓際の一人席や、読書しやすい静かな席をご用意しています。",
  },
  {
    question: "支払い方法を教えてください。",
    answer:
      "現金、主要クレジットカード、交通系IC、QR決済に対応しています。",
  },
];

const gallery = [
  {
    src: "/images/gallery-interior.jpg",
    alt: "木の質感が残る落ち着いたカフェ店内",
  },
  {
    src: "/images/gallery-garden.jpg",
    alt: "庭を眺めながら珈琲を楽しむ席",
  },
  {
    src: "/images/menu-coffee.jpg",
    alt: "丁寧に淹れた珈琲",
  },
];

const ctaButtons = [
  {
    href: "#reserve",
    label: "席を予約する",
    icon: CalendarCheck,
    className: "bg-moss text-paper hover:bg-sumi",
  },
  {
    href: "tel:000-1234-5678",
    label: "電話で問い合わせる",
    icon: Phone,
    className: "bg-paper text-sumi ring-1 ring-sumi/15 hover:bg-rice",
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagramを見る",
    icon: Instagram,
    className: "bg-clay text-paper hover:bg-cedar",
  },
];

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
      <p className="mb-3 text-sm font-bold tracking-[0.18em] text-clay">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl font-semibold leading-tight text-sumi sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-sumi/72 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function CtaButton({
  href,
  label,
  icon: Icon,
  className,
}: (typeof ctaButtons)[number]) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-bold transition sm:w-auto ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-rice text-sumi">
      <section className="relative h-[92vh] min-h-[680px] overflow-hidden bg-sumi text-paper">
        <Image
          src="/images/hero-cafe.jpg"
          alt="古民家カフェの落ち着いた木のテーブルと珈琲"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sumi/70 via-sumi/45 to-sumi/82" />
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="font-serif text-xl font-semibold">
            古民家カフェ こもれび
          </a>
          <a
            href="tel:000-1234-5678"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-paper px-4 text-sm font-bold text-sumi"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            電話予約
          </a>
        </header>
        <div className="relative z-10 mx-auto flex min-h-[calc(92vh-84px)] max-w-6xl items-center px-5 pb-16 pt-8 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-md bg-paper/14 px-3 py-2 text-sm font-bold text-paper backdrop-blur">
              一日を少しゆるめる、里山の古民家カフェ
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.25] sm:text-6xl">
              築100年の古民家で過ごす、静かなごほうび時間。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-paper/88 sm:text-xl">
              季節のランチ、自家焙煎珈琲、庭を眺める静かな席。忙しい毎日から少し離れて、深呼吸できる時間をお届けします。
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              {ctaButtons.map((button) => (
                <CtaButton key={button.label} {...button} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-base text-paper/82">
              <span>営業時間 11:00-17:00</span>
              <span>定休日 水曜</span>
              <span>駐車場 4台</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="CHARM"
            title="古い家のぬくもりと、今の心地よさを。"
            text="太い梁、土壁、庭の緑。古民家の味わいを活かしながら、年代を問わず過ごしやすい席づくりと見やすい導線に整えています。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["築100年の空間", "梁や欄間を残した店内で、木の香りとやわらかな自然光を感じられます。"],
              ["季節を味わう食事", "地元野菜を中心に、体にやさしいランチと甘味を少しずつ丁寧に。"],
              ["予約しやすい導線", "電話・フォーム・Instagramから、来店前の確認や席予約がしやすい設計です。"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-md bg-paper p-6 shadow-soft">
                <Coffee className="mb-5 h-8 w-8 text-moss" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-base leading-8 text-sumi/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="MENU"
            title="人気メニュー"
            text="ランチ、珈琲、甘味まで。写真で伝わるおいしさと、初めての方にも選びやすい説明を配置しています。"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-md bg-rice shadow-soft">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl font-semibold leading-snug">
                      {item.name}
                    </h3>
                    <p className="shrink-0 text-base font-bold text-clay">{item.price}</p>
                  </div>
                  <p className="mt-4 text-base leading-8 text-sumi/72">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="SPACE"
            title="店内・空間紹介"
            text="写真が映える余白を広く取り、空間の静けさと古民家らしい質感を伝えるギャラリーにしました。"
          />
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative h-80 w-full overflow-hidden rounded-md shadow-soft md:h-full md:min-h-[536px]">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4">
              {gallery.slice(1).map((image) => (
                <div
                  key={image.alt}
                  className="relative h-64 w-full overflow-hidden rounded-md shadow-soft"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reserve" className="bg-sumi px-5 py-16 text-paper sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] text-smoke">RESERVE</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              席数が少ないため、ご来店前の予約がおすすめです。
            </h2>
            <p className="mt-5 text-lg leading-9 text-paper/82">
              ランチ利用、記念日、少人数の集まりなど、お気軽にお問い合わせください。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <CtaButton {...ctaButtons[0]} />
            <CtaButton {...ctaButtons[1]} />
            <CtaButton {...ctaButtons[2]} />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="VOICE" title="お客様の声" />
          <div className="grid gap-5 md:grid-cols-3">
            {voices.map((voice) => (
              <article key={voice.age} className="rounded-md bg-paper p-6 shadow-soft">
                <div className="mb-5 flex gap-1 text-clay">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-lg leading-9 text-sumi/78">「{voice.body}」</p>
                <p className="mt-5 font-bold text-moss">{voice.age}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] text-clay">ACCESS</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              アクセス・店舗情報
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-sumi/78">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />
                〒000-0000 東京都小森市里山町1-2-3
              </p>
              <p>営業時間：11:00-17:00（L.O. 16:30）</p>
              <p>定休日：水曜日・第2火曜日</p>
              <p>席数：18席 / 駐車場：4台 / 全席禁煙</p>
              <p>電話：000-1234-5678</p>
            </div>
            <div className="mt-8 grid gap-3 sm:flex">
              <CtaButton {...ctaButtons[1]} />
              <CtaButton {...ctaButtons[2]} />
            </div>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-md shadow-soft">
            <iframe
              title="古民家カフェ こもれび 周辺地図"
              src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%B0%8F%E9%87%91%E4%BA%95%E5%B8%82&output=embed"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="よくある質問" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-md bg-paper p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-bold leading-8">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-8 text-sumi/72">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-sumi px-5 py-10 text-paper sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold">古民家カフェ こもれび</p>
            <p className="mt-2 text-sm text-paper/70">
              架空店舗のポートフォリオ用ランディングページ
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#reserve" className="inline-flex items-center gap-2 rounded-md bg-paper px-4 py-3 font-bold text-sumi">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              席を予約する
            </a>
            <a href="https://www.instagram.com/" className="inline-flex items-center gap-2 rounded-md border border-paper/28 px-4 py-3 font-bold">
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-6xl items-center gap-2 text-sm text-paper/62">
          <span>Vercel公開前提</span>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span>Next.js + TypeScript + Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}
