import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  CarFront,
  Check,
  ChevronDown,
  Disc3,
  Droplets,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Truck,
  Wind,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const modelsByBrand = {
  تويوتا: ['كامري', 'هايلكس', 'لاندكروزر', 'كورولا', 'برادو', 'فورتشنر', 'إف جي كروزر'],
  فورد: ['تورس', 'إف 150', 'إكسبلورر', 'إكسبيديشن', 'كراون فكتوريا'],
  'جي إم سي': ['يوكن', 'سييرا'],
  شفروليه: ['تاهو', 'سيلفرادو', 'سوبربان', 'كابرس'],
  جيب: ['جراند شيروكي', 'رانجلر'],
  نيسان: ['باترول', 'التيما', 'ماكسيما'],
}

const makePartPlaceholder = (label) =>
  `https://placehold.co/480x360/f1f3ee/294f3d/png?text=${encodeURIComponent(label)}`

const parts = [
  {
    id: 1,
    title: 'فحمات فرامل أمامية',
    english: 'Front brake pads · Toyota OEM ref. 04465-33471',
    code: '04465-33471',
    category: 'الفرامل والسلامة',
    price: 310,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Front Brake Pads'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 2,
    title: 'فحمات فرامل خلفية',
    english: 'Rear brake pads · Motorcraft BRF-1303',
    code: 'BRF-1303',
    category: 'الفرامل والسلامة',
    price: 265,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Rear Brake Pads'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 3,
    title: 'أقراص فرامل أمامية',
    english: 'Front brake rotors · Toyota OEM ref. 43512-06190',
    code: '43512-06190',
    category: 'الفرامل والسلامة',
    price: 460,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Front Brake Rotors'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 4,
    title: 'مساعد أمامي',
    english: 'Front shock absorber · KYB Excel-G 339701',
    code: 'KYB-339701',
    category: 'التعليق والتوجيه',
    price: 495,
    icon: Disc3,
    tone: 'green',
    image: makePartPlaceholder('Front Shock Absorber'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 5,
    title: 'مقص تعليق أمامي',
    english: 'Front control arm · MOOG RK620663',
    code: 'RK620663',
    category: 'التعليق والتوجيه',
    price: 520,
    icon: Disc3,
    tone: 'green',
    image: makePartPlaceholder('Front Control Arm'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 6,
    title: 'ذراع توجيه خارجي',
    english: 'Outer tie rod end · 555 SE-3141L',
    code: 'SE-3141L',
    category: 'التعليق والتوجيه',
    price: 185,
    icon: Disc3,
    tone: 'green',
    image: makePartPlaceholder('Outer Tie Rod End'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 7,
    title: 'فلتر زيت المحرك',
    english: 'Engine oil filter · Toyota OEM 04152-YZZA1',
    code: '04152-YZZA1',
    category: 'المحرك والصيانة',
    price: 55,
    icon: Droplets,
    tone: 'blue',
    image: makePartPlaceholder('Engine Oil Filter'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 8,
    title: 'فلتر هواء المحرك',
    english: 'Engine air filter · Toyota OEM 17801-0H010',
    code: '17801-0H010',
    category: 'المحرك والصيانة',
    price: 95,
    icon: Wind,
    tone: 'blue',
    image: makePartPlaceholder('Engine Air Filter'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 9,
    title: 'فلتر هواء المكيف',
    english: 'Cabin air filter · Toyota OEM 87139-06080',
    code: '87139-06080',
    category: 'المحرك والصيانة',
    price: 75,
    icon: Wind,
    tone: 'blue',
    image: makePartPlaceholder('Cabin Air Filter'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 10,
    title: 'شمعات احتراق (بواجي)',
    english: 'Iridium spark plugs · DENSO SK20R11',
    code: 'SK20R11',
    category: 'المحرك والصيانة',
    price: 240,
    icon: Zap,
    tone: 'yellow',
    image: makePartPlaceholder('Iridium Spark Plugs'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 11,
    title: 'ملف إشعال (كويل)',
    english: 'Ignition coil · DENSO OEM ref. 90919-02252',
    code: '90919-02252',
    category: 'المحرك والصيانة',
    price: 325,
    icon: Zap,
    tone: 'yellow',
    image: makePartPlaceholder('Ignition Coil'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 12,
    title: 'طقم سير التوقيت',
    english: 'Timing belt kit · AISIN TKT-025',
    code: 'TKT-025',
    category: 'المحرك والصيانة',
    price: 680,
    icon: Disc3,
    tone: 'yellow',
    image: makePartPlaceholder('Timing Belt Kit'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 13,
    title: 'مضخة ماء المحرك',
    english: 'Engine water pump · AISIN WPT-190',
    code: 'WPT-190',
    category: 'التبريد والكهرباء',
    price: 485,
    icon: Droplets,
    tone: 'blue',
    image: makePartPlaceholder('Engine Water Pump'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 14,
    title: 'رديتر تبريد المحرك',
    english: 'Engine radiator · DENSO 221-3129',
    code: '221-3129',
    category: 'التبريد والكهرباء',
    price: 920,
    icon: Droplets,
    tone: 'blue',
    image: makePartPlaceholder('Engine Radiator'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 15,
    title: 'دينمو السيارة',
    english: 'Alternator · DENSO 210-0630',
    code: '210-0630',
    category: 'التبريد والكهرباء',
    price: 1080,
    icon: Zap,
    tone: 'yellow',
    image: makePartPlaceholder('Alternator'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 16,
    title: 'حساس الأكسجين',
    english: 'Oxygen sensor · Bosch 15733',
    code: '15733',
    category: 'التبريد والكهرباء',
    price: 420,
    icon: Zap,
    tone: 'yellow',
    image: makePartPlaceholder('Oxygen Sensor'),
    stock: 'تحقق من التوافق',
  },
  {
    id: 17,
    title: 'حساس كتلة الهواء (MAF)',
    english: 'Mass air flow sensor · DENSO 197-6030',
    code: '197-6030',
    category: 'التبريد والكهرباء',
    price: 650,
    icon: Wind,
    tone: 'yellow',
    image: makePartPlaceholder('Mass Air Flow Sensor'),
    stock: 'تحقق من التوافق',
  },
]

const categories = [
  'الكل',
  'الفرامل والسلامة',
  'التعليق والتوجيه',
  'المحرك والصيانة',
  'التبريد والكهرباء',
]
const years = Array.from({ length: 29 }, (_, index) => String(2026 - index))
const formatNumber = (value) => new Intl.NumberFormat('ar-SA').format(value)

function App() {
  const [brand, setBrand] = useState('تويوتا')
  const [model, setModel] = useState(modelsByBrand['تويوتا'][0])
  const [year, setYear] = useState('2022')
  const [category, setCategory] = useState('الكل')
  const [query, setQuery] = useState('')
  const [selectedPart, setSelectedPart] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!selectedPart) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedPart(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [selectedPart])

  const filteredParts = parts.filter((part) => {
    const matchesCategory = category === 'الكل' || part.category === category
    const normalizedQuery = query.trim().toLocaleLowerCase('ar')
    const matchesQuery =
      !normalizedQuery ||
      `${part.title} ${part.english} ${part.code}`
        .toLocaleLowerCase('ar')
        .includes(normalizedQuery)
    return matchesCategory && matchesQuery
  })

  const openRequest = (part) => {
    setSelectedPart(part)
    setSubmitted(false)
    setWhatsappUrl('')
  }

  const sendOrderRequest = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      'طلب قطعة غيار جديدة - رِفد',
      '',
      'بيانات العميل',
      `الاسم: ${formData.get('name')}`,
      `رقم الجوال: ${formData.get('phone')}`,
      `المدينة: ${formData.get('city')}`,
      `العنوان بالتفصيل: ${formData.get('address')}`,
      `ملاحظات: ${formData.get('notes') || 'غير مذكورة'}`,
      `رابط الموقع: ${formData.get('locationLink') || 'غير مرفق'}`,
      '',
      'تفاصيل السيارة والقطعة',
      `الشركة / الموديل / السنة: ${brand} / ${model} / ${year}`,
      `اسم القطعة: ${selectedPart.title}`,
      `رقم القطعة: ${selectedPart.code}`,
      `السعر الاسترشادي: ${formatNumber(selectedPart.price)} ر.س`,
    ].join('\n')
    const url = `https://wa.me/966582970043?text=${encodeURIComponent(message)}`

    setWhatsappUrl(url)
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="storefront" dir="rtl">
      <div className="utility-bar">
        <div className="page-width utility-content">
          <span><MapPin size={14} /> الشحن إلى جميع مناطق المملكة</span>
          <span>قطع أصلية لسيارتك الأمريكية</span>
          <a href="tel:+966582970043"><Phone size={14} /> +966 58 297 0043</a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-width header-content">
          <a className="brand-mark" href="#home" aria-label="رِفد، الصفحة الرئيسية">
            <span className="brand-symbol"><CarFront size={22} strokeWidth={2.2} /></span>
            <span className="brand-name">رِفد<small>قطع أمريكية</small></span>
          </a>
          <button
            className="mobile-menu-button icon-button"
            type="button"
            aria-label="فتح القائمة"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`main-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="القائمة الرئيسية">
            <a className="nav-active" href="#parts" onClick={() => setMobileMenuOpen(false)}>قطع الغيار</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>عن رِفد</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <div className="header-note"><span className="status-dot" /> خدمة العملاء <b>متاحون الآن</b></div>
        </div>
      </header>

      <main id="home">
        <section className="hero-section">
          <div className="page-width hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span /> قطع أمريكية، أقرب إليك</p>
              <h1>قطعة سيارتك<br /><em>على الطريق.</em></h1>
              <p className="hero-description">نوفر لك قطع غيار أصلية للسيارات الأمريكية، ونوصلها لباب بيتك في كل أنحاء السعودية.</p>
              <a className="hero-link" href="#vehicle-picker">اختر سيارتك <ArrowLeft size={17} /></a>
              <div className="hero-proof"><ShieldCheck size={17} /><span>قطع مضمونة <i /> شحن موثوق داخل المملكة</span></div>
            </div>
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85"
                alt="فني سيارات يفحص محرك سيارة في ورشة"
              />
              <div className="image-caption"><span className="caption-mark"><Check size={15} /></span><span><b>قطع أمريكية أصلية</b><small>اختيار يليق بسيارتك</small></span></div>
              <span className="image-index">01 <i /> 04</span>
            </div>
          </div>
          <div className="hero-bottom-rule" />
        </section>

        <section className="catalog-section" id="vehicle-picker">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">ابدأ من هنا <span /></p>
                <h2>اختر سيارتك</h2>
                <p className="section-description">لنجد القطع المناسبة لموديلك بالضبط</p>
              </div>
              <div className="fitment-note"><ShieldCheck size={17} /><span>مطابقة دقيقة حسب السيارة</span></div>
            </div>

            <div className="vehicle-picker">
              <label className="select-field">
                <span>الشركة</span>
                <span className="select-control"><select value={brand} onChange={(event) => { setBrand(event.target.value); setModel(modelsByBrand[event.target.value][0]) }} aria-label="اختر الشركة">
                  {Object.keys(modelsByBrand).map((name) => <option key={name}>{name}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <label className="select-field">
                <span>الموديل</span>
                <span className="select-control"><select value={model} onChange={(event) => setModel(event.target.value)} aria-label="اختر الموديل">
                  {modelsByBrand[brand].map((name) => <option key={name}>{name}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <label className="select-field">
                <span>سنة الصنع</span>
                <span className="select-control"><select value={year} onChange={(event) => setYear(event.target.value)} aria-label="اختر سنة الصنع">
                  {years.map((itemYear) => <option key={itemYear}>{itemYear}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <a className="find-parts-button" href="#parts">اعرض القطع <ArrowLeft size={17} /></a>
            </div>
            <div className="selected-vehicle"><CarFront size={16} /><span>سيارتك المحددة:</span><b>{brand} {model} {year}</b></div>
          </div>
        </section>

        <section className="parts-section" id="parts">
          <div className="page-width">
            <div className="parts-heading">
              <div>
                <p className="eyebrow section-eyebrow">مختارة لسيارتك <span /></p>
                <h2>قطع متوفرة <span className="part-count">{formatNumber(filteredParts.length)}</span></h2>
              </div>
              <label className="search-box">
                <Search size={18} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن قطعة أو رقمها" aria-label="ابحث عن قطعة أو رقمها" />
                <kbd>⌘ K</kbd>
              </label>
            </div>

            <div className="parts-toolbar">
              <div className="category-tabs" role="tablist" aria-label="تصنيف القطع">
                {categories.map((item) => <button type="button" role="tab" aria-selected={category === item} className={category === item ? 'category-tab active' : 'category-tab'} key={item} onClick={() => setCategory(item)}>{item}</button>)}
              </div>
              <span className="results-label">أسعار استرشادية بالريال السعودي</span>
            </div>

            <div className="parts-list">
              {filteredParts.length > 0 ? filteredParts.map((part, index) => {
                const PartIcon = part.icon
                return (
                  <article className="part-row" key={part.id}>
                    <span className="part-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className={`part-art ${part.tone}`}>
                      <PartIcon size={27} strokeWidth={1.6} aria-hidden="true" />
                      <img
                        src={part.image}
                        alt={`صورة توضيحية: ${part.title}`}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => { event.currentTarget.style.display = 'none' }}
                      />
                    </div>
                    <div className="part-info">
                      <h3>{part.title}</h3>
                      <p>{part.english}</p>
                    </div>
                    <span className="part-code">رقم القطعة <b>{part.code}</b></span>
                    <span className="stock-status"><span />{part.stock}</span>
                    <div className="part-price"><b>{formatNumber(part.price)}</b><span>ر.س</span></div>
                    <button type="button" className="request-button" onClick={() => openRequest(part)}>اطلب القطعة <ArrowLeft size={16} /></button>
                  </article>
                )
              }) : (
                <div className="empty-state"><Search size={22} /><b>ما لقينا قطع بهذا الاسم</b><span>جرّب كلمة ثانية أو اختر تصنيفاً مختلفاً</span></div>
              )}
            </div>
            <p className="catalog-footnote">الأسعار وأرقام القطع استرشادية؛ يُرجى تأكيد السعر والتوافق حسب الموديل والفئة ورقم الهيكل.</p>
          </div>
        </section>

        <section className="trust-strip" id="why-us">
          <div className="page-width trust-content">
            <div><ShieldCheck size={21} /><span><b>قطع موثوقة</b><small>جودة نحرص عليها</small></span></div>
            <div><Truck size={22} /><span><b>نوصل لبابك</b><small>في جميع مناطق المملكة</small></span></div>
            <div><Phone size={20} /><span><b>نساعدك تختار</b><small>فريقنا معك قبل الطلب</small></span></div>
            <a href="tel:+966582970043">تحتاج مساعدة؟ <b>اتصل بنا <ArrowLeft size={15} /></b></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="page-width">
          <span className="footer-brand">رِفد <i>·</i> قطع أمريكية لسيارتك</span>
          <div className="footer-support">
            <span>للدعم والاستفسارات</span>
            <a href="https://wa.me/966582970043" target="_blank" rel="noreferrer"><Phone size={14} /> واتساب <bdi dir="ltr">+966 58 297 0043</bdi></a>
          </div>
        </div>
      </footer>

      {selectedPart && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPart(null) }}>
          <section className="request-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button type="button" className="modal-close icon-button" aria-label="إغلاق" onClick={() => setSelectedPart(null)}><X size={20} /></button>
            {submitted ? (
              <div className="success-state"><span className="success-icon"><Check size={28} /></span><p className="eyebrow section-eyebrow">تم تجهيز طلبك</p><h2 id="modal-title">طلبك جاهز في واتساب</h2><p>فتحنا محادثة مع رِفد برسالة طلبك. راجع التفاصيل في واتساب واضغط إرسال لإكمال الطلب.</p><a className="find-parts-button" href={whatsappUrl} target="_blank" rel="noreferrer">فتح واتساب لإرسال الطلب <ArrowLeft size={17} /></a><button type="button" className="success-return" onClick={() => setSelectedPart(null)}>العودة إلى القطع</button></div>
            ) : (
              <>
                <p className="eyebrow section-eyebrow">طلب قطعة <span /></p>
                <h2 id="modal-title">خلّنا نرتب طلبك</h2>
                <p className="modal-intro">سجّل بياناتك ونتواصل معك لتأكيد التوفر والتوصيل.</p>
                <div className="modal-part"><span className={`part-art ${selectedPart.tone}`}><selectedPart.icon size={24} /></span><span><b>{selectedPart.title}</b><small>{brand} {model} {year} · {formatNumber(selectedPart.price)} ر.س</small></span></div>
                <form className="request-form" onSubmit={sendOrderRequest}>
                  <label>الاسم الكامل<input name="name" autoComplete="name" placeholder="الاسم الكامل" required /></label>
                  <label>رقم الجوال<input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05xxxxxxxx" pattern="[0-9+٠-٩\s\-]{8,15}" required /></label>
                  <label>المدينة<input name="city" autoComplete="address-level2" placeholder="مثال: الرياض" required /></label>
                  <label>العنوان بالتفصيل<textarea name="address" autoComplete="street-address" placeholder="رقم المبنى أو المنزل والحي" rows="2" required /></label>
                  <label>ملاحظات (اختياري)<textarea name="notes" placeholder="أي تفاصيل إضافية" rows="2" /></label>
                  <label>رابط الموقع أو خرائط Google (اختياري)<input name="locationLink" type="url" placeholder="https://maps.google.com/..." /></label>
                  <button type="submit" className="submit-request">إرسال طلبك <ArrowLeft size={17} /></button>
                </form>
                <p className="privacy-note"><ShieldCheck size={14} /> بياناتك تستخدم للتواصل حول هذا الطلب فقط</p>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
