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
import { mockFitments } from './mockFitments'
import './App.css'

const makePartPlaceholder = (label) =>
  `https://placehold.co/480x360/f1f3ee/294f3d/png?text=${encodeURIComponent(label)}`

const parts = [
  {
    id: 1,
    title: 'فحمات فرامل أمامية',
    english: 'Front brake pads · Toyota OEM ref. 04465-33471',
    fitmentMake: 'تويوتا',
    code: '04465-33471',
    category: 'الفرامل والسلامة',
    price: 310,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Front Brake Pads'),
    stock: 'توافق تجريبي',
  },
  {
    id: 2,
    title: 'فحمات فرامل خلفية',
    english: 'Rear brake pads · Motorcraft BRF-1303',
    fitmentMake: 'فورد',
    code: 'BRF-1303',
    category: 'الفرامل والسلامة',
    price: 265,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Rear Brake Pads'),
    stock: 'توافق تجريبي',
  },
  {
    id: 3,
    title: 'أقراص فرامل أمامية',
    english: 'Front brake rotors · Toyota OEM ref. 43512-06190',
    fitmentMake: 'تويوتا',
    code: '43512-06190',
    category: 'الفرامل والسلامة',
    price: 460,
    icon: Disc3,
    tone: 'coral',
    image: makePartPlaceholder('Front Brake Rotors'),
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
  },
  {
    id: 7,
    title: 'فلتر زيت المحرك',
    english: 'Engine oil filter · Toyota OEM 04152-YZZA1',
    fitmentMake: 'تويوتا',
    code: '04152-YZZA1',
    category: 'المحرك والصيانة',
    price: 55,
    icon: Droplets,
    tone: 'blue',
    image: makePartPlaceholder('Engine Oil Filter'),
    stock: 'توافق تجريبي',
  },
  {
    id: 8,
    title: 'فلتر هواء المحرك',
    english: 'Engine air filter · Toyota OEM 17801-0H010',
    fitmentMake: 'تويوتا',
    code: '17801-0H010',
    category: 'المحرك والصيانة',
    price: 95,
    icon: Wind,
    tone: 'blue',
    image: makePartPlaceholder('Engine Air Filter'),
    stock: 'توافق تجريبي',
  },
  {
    id: 9,
    title: 'فلتر هواء المكيف',
    english: 'Cabin air filter · Toyota OEM 87139-06080',
    fitmentMake: 'تويوتا',
    code: '87139-06080',
    category: 'المحرك والصيانة',
    price: 75,
    icon: Wind,
    tone: 'blue',
    image: makePartPlaceholder('Cabin Air Filter'),
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
  },
  {
    id: 11,
    title: 'ملف إشعال (كويل)',
    english: 'Ignition coil · DENSO OEM ref. 90919-02252',
    fitmentMake: 'تويوتا',
    code: '90919-02252',
    category: 'المحرك والصيانة',
    price: 325,
    icon: Zap,
    tone: 'yellow',
    image: makePartPlaceholder('Ignition Coil'),
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
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
    stock: 'توافق تجريبي',
  },
]

const categories = [
  'الكل',
  'الفرامل والسلامة',
  'التعليق والتوجيه',
  'المحرك والصيانة',
  'التبريد والكهرباء',
]
const availableMakes = [...new Set(mockFitments.map((fitment) => fitment.make))]
const formatNumber = (value) => new Intl.NumberFormat('ar-SA').format(value)
const knownPartIds = new Set(parts.map((part) => part.id))
const fitmentPaths = new Set()
const mappedPartIds = new Set()

for (const fitment of mockFitments) {
  const path = `${fitment.make}|${fitment.model}|${fitment.year}`
  if (fitmentPaths.has(path)) {
    throw new Error(`Duplicate mock vehicle fitment: ${path}`)
  }
  fitmentPaths.add(path)

  const partIdsForVehicle = new Set()
  for (const partId of fitment.partIds) {
    const part = parts.find((item) => item.id === partId)
    if (!knownPartIds.has(partId) || partIdsForVehicle.has(partId)) {
      throw new Error(`Invalid or duplicate part ID ${partId} for mock fitment ${path}`)
    }
    if (part.fitmentMake && part.fitmentMake !== fitment.make) {
      throw new Error(`Part ${partId} is assigned to an incompatible mock make: ${path}`)
    }
    partIdsForVehicle.add(partId)
    mappedPartIds.add(partId)
  }
}

for (const part of parts) {
  if (!mappedPartIds.has(part.id)) {
    throw new Error(`Part ${part.id} is missing a mock vehicle fitment`)
  }
}

function App() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [category, setCategory] = useState('الكل')
  const [query, setQuery] = useState('')
  const [selectedPart, setSelectedPart] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [demoMessage, setDemoMessage] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resultsVisible, setResultsVisible] = useState(false)
  const [activeFitment, setActiveFitment] = useState(null)
  const availableModels = [
    ...new Set(mockFitments.filter((fitment) => fitment.make === brand).map((fitment) => fitment.model)),
  ]
  const availableYears = mockFitments
    .filter((fitment) => fitment.make === brand && fitment.model === model)
    .map((fitment) => fitment.year)
    .sort((left, right) => Number(right) - Number(left))
  const selectedFitment = mockFitments.find(
    (fitment) => fitment.make === brand && fitment.model === model && fitment.year === year,
  )

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

  useEffect(() => {
    if (resultsVisible) {
      document.getElementById('parts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [resultsVisible])

  const filteredParts = parts.filter((part) => {
    const matchesVehicle = activeFitment?.partIds.includes(part.id) ?? false
    const matchesCategory = category === 'الكل' || part.category === category
    const normalizedQuery = query.trim().toLocaleLowerCase('ar')
    const matchesQuery =
      !normalizedQuery ||
      `${part.title} ${part.english} ${part.code}`
        .toLocaleLowerCase('ar')
        .includes(normalizedQuery)
    return matchesVehicle && matchesCategory && matchesQuery
  })

  const openRequest = (part) => {
    setSelectedPart(part)
    setSubmitted(false)
    setDemoMessage('')
  }

  const searchParts = (event) => {
    event.preventDefault()
    if (!selectedFitment) return
    setActiveFitment(selectedFitment)
    setCategory('الكل')
    setQuery('')
    setResultsVisible(true)
  }

  const changeVehicle = () => {
    setResultsVisible(false)
    document.getElementById('vehicle-picker')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const createDemoRequest = () => {
    const message = [
      'رسالة توضيحية تجريبية - غير صالحة للشراء',
      `الشركة / النوع / سنة الصنع: ${activeFitment.make} / ${activeFitment.model} / ${activeFitment.year}`,
      'تنبيه: بيانات القطعة والتوافق تجريبية وغير موثقة، ولا تؤكد الملاءمة أو صلاحية الشراء.',
      `اسم القطعة: ${selectedPart.title}`,
      `رقم القطعة: ${selectedPart.code}`,
      `السعر التوضيحي: ${formatNumber(selectedPart.price)} ر.س`,
    ].join('\n')
    setDemoMessage(message)
    setSubmitted(true)
  }

  return (
    <div className="storefront" dir="rtl">
      <div className="utility-bar">
        <div className="page-width utility-content">
          <span><MapPin size={14} /> الشحن إلى جميع مناطق المملكة</span>
          <span>كتالوج تجريبي لقطع السيارات</span>
          <a href="tel:+966582970043"><Phone size={14} /> +966 58 297 0043</a>
        </div>
      </div>

      <header className="site-header">
        <div className="page-width header-content">
          <a className="brand-mark" href="#home" aria-label="قطع غيار السيارات، الصفحة الرئيسية">
            <span className="brand-symbol"><CarFront size={22} strokeWidth={2.2} /></span>
            <span className="brand-name">قطع غيار السيارات</span>
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
            <a className="nav-active" href="#vehicle-picker" onClick={() => setMobileMenuOpen(false)}>اختر سيارتك</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>عن رِفد</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>تواصل معنا</a>
          </nav>
          <div className="header-note"><span className="status-dot" /> خدمة العملاء <b>متاحون الآن</b></div>
        </div>
      </header>

      <main id="home">
        <section className="catalog-section" id="vehicle-picker">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">ابدأ من هنا <span /></p>
                <h2>اختر سيارتك</h2>
                <p className="section-description">اختر تركيبة سيارة متاحة في بيانات العرض التجريبية</p>
              </div>
              <div className="fitment-note"><ShieldCheck size={17} /><span>خيارات المركبات التجريبية</span></div>
            </div>

            <form className="vehicle-picker" onSubmit={searchParts}>
              <label className="select-field">
                <span>الشركة</span>
                <span className="select-control"><select value={brand} onChange={(event) => { setBrand(event.target.value); setModel(''); setYear('') }} aria-label="اختر الشركة" required>
                  <option value="" disabled>اختر الشركة</option>
                  {availableMakes.map((name) => <option key={name}>{name}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <label className="select-field">
                <span>النوع</span>
                <span className="select-control"><select value={model} onChange={(event) => { setModel(event.target.value); setYear('') }} aria-label="اختر النوع" disabled={!brand} required>
                  <option value="" disabled>اختر النوع</option>
                  {availableModels.map((name) => <option key={name}>{name}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <label className="select-field">
                <span>الموديل / سنة الصنع</span>
                <span className="select-control"><select value={year} onChange={(event) => setYear(event.target.value)} aria-label="اختر الموديل / سنة الصنع" disabled={!model} required>
                  <option value="" disabled>اختر سنة الصنع</option>
                  {availableYears.map((itemYear) => <option key={itemYear}>{itemYear}</option>)}
                </select><ChevronDown size={17} /></span>
              </label>
              <button className="find-parts-button" type="submit">بحث عن القطع <ArrowLeft size={17} /></button>
            </form>
          </div>
          <div className="page-width fitment-disclaimer" role="note">
            <ShieldCheck size={15} />
            <span>بيانات السيارات والقطع هنا تجريبية للتوضيح فقط، ولا تثبت التوافق الفعلي أو تصلح لتأكيد طلب شراء.</span>
          </div>
        </section>

        {resultsVisible && (
        <section className="parts-section" id="parts">
          <div className="page-width">
            <div className="vehicle-summary-bar" role="region" aria-label="ملخص السيارة المحددة">
              <CarFront size={19} aria-hidden="true" />
              <span className="vehicle-summary-item"><small>الشركة</small><b>{activeFitment.make}</b></span>
              <span className="vehicle-summary-item"><small>النوع</small><b>{activeFitment.model}</b></span>
              <span className="vehicle-summary-item"><small>الموديل / سنة الصنع</small><b>{activeFitment.year}</b></span>
              <button type="button" className="change-vehicle-button" onClick={changeVehicle}>تغيير السيارة</button>
            </div>
            <div className="mock-fitment-notice" role="note">
              بيانات توافق تجريبية لهذا العرض فقط؛ يجب التحقق من رقم الهيكل وكتالوج الشركة قبل الشراء.
            </div>
            <div className="parts-heading">
              <div>
                <p className="eyebrow section-eyebrow">نتائج البحث <span /></p>
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
              <span className="results-label">أسعار تجريبية بالريال السعودي</span>
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
                    <button type="button" className="request-button" onClick={() => openRequest(part)}>تفاصيل تجريبية <ArrowLeft size={16} /></button>
                  </article>
                )
              }) : (
                <div className="empty-state"><Search size={22} /><b>ما لقينا قطع بهذا الاسم</b><span>جرّب كلمة ثانية أو اختر تصنيفاً مختلفاً</span></div>
              )}
            </div>
            <p className="catalog-footnote">المنتجات والأسعار والتوافقات هنا بيانات تجريبية فقط؛ يلزم الرجوع إلى كتالوج موثوق ورقم الهيكل قبل أي شراء.</p>
          </div>
        </section>
        )}

        <section className="hero-section">
          <div className="page-width hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span /> بيانات تجريبية لتجربة المتجر</p>
              <h1>قطعة سيارتك<br /><em>على الطريق.</em></h1>
              <p className="hero-description">استعرض تجربة كتالوج قطع تجريبي؛ بيانات التوافق المعروضة للتوضيح ولا تمثل ملاءمة مؤكدة.</p>
              <a className="hero-link" href="#vehicle-picker">اختر سيارتك <ArrowLeft size={17} /></a>
              <div className="hero-proof"><ShieldCheck size={17} /><span>بيانات توضيحية <i /> غير صالحة لتأكيد الشراء</span></div>
            </div>
            <div className="hero-visual">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85"
                alt="فني سيارات يفحص محرك سيارة في ورشة"
              />
              <div className="image-caption"><span className="caption-mark"><Check size={15} /></span><span><b>عرض تجريبي</b><small>اختيار السيارة ثم التصفية</small></span></div>
              <span className="image-index">01 <i /> 04</span>
            </div>
          </div>
          <div className="hero-bottom-rule" />
        </section>

        <section className="trust-strip" id="why-us">
          <div className="page-width trust-content">
            <div><ShieldCheck size={21} /><span><b>بيانات تجريبية</b><small>ليست تأكيدًا للتوافق</small></span></div>
            <div><Truck size={22} /><span><b>بيانات متنوعة</b><small>مركبات من عدة شركات</small></span></div>
            <div><Phone size={20} /><span><b>تصفية دقيقة</b><small>حسب الشركة والنوع والسنة</small></span></div>
            <a href="tel:+966582970043">تحتاج مساعدة؟ <b>اتصل بنا <ArrowLeft size={15} /></b></a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="page-width">
          <span className="footer-brand">قطع غيار السيارات <i>·</i> كتالوج تجريبي</span>
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
              <div className="success-state"><span className="success-icon"><Check size={28} /></span><p className="eyebrow section-eyebrow">تم إعداد بيانات تجريبية</p><h2 id="modal-title">تفاصيل توضيحية</h2><p>البيانات والقطعة تجريبية وغير صالحة لتأكيد التوافق أو الشراء.</p><pre className="demo-message">{demoMessage}</pre><button type="button" className="success-return" onClick={() => setSelectedPart(null)}>العودة إلى القطع</button></div>
            ) : (
              <>
                <p className="eyebrow section-eyebrow">طلب قطعة تجريبية <span /></p>
                <h2 id="modal-title">بيانات طلب تجريبي</h2>
                <p className="modal-intro">هذا نموذج توضيحي فقط، ولا ينشئ طلب شراء حقيقيًا.</p>
                <p className="mock-fitment-notice" role="note">بيانات التوافق في هذا الموقع تجريبية وغير موثقة. لا تعتمد عليها لتأكيد شراء أو ملاءمة القطعة.</p>
                <div className="modal-part"><span className={`part-art ${selectedPart.tone}`}><selectedPart.icon size={24} /></span><span><b>{selectedPart.title}</b><small>{activeFitment.make} {activeFitment.model} {activeFitment.year} · {formatNumber(selectedPart.price)} ر.س</small></span></div>
                <div className="request-form">
                  <button type="button" className="submit-request" onClick={createDemoRequest}>عرض تفاصيل تجريبية <ArrowLeft size={17} /></button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default App
