import type { Localized } from "../lib/language";

export const ui = {
  utilityBar: {
    welcome: { mn: "Тавтай морил", en: "Welcome to Tugs Songolt" } as Localized,
    myOrders: { mn: "Захиалгууд", en: "My Orders" } as Localized,
    branchAddress: { mn: "Салбарын хаяг байршил", en: "Branch address and location" } as Localized,
    help: { mn: "Тусламж", en: "Help" } as Localized,
  },
  topBar: {
    searchPlaceholder: {
      mn: "Бараа, ангилал, брэнд хайх...",
      en: "Search for products, categories, brands...",
    } as Localized,
    tagline: { mn: "Шилдэг брэндүүд", en: "Great brands" } as Localized,
    saved: { mn: "Хадгалсан", en: "Saved" } as Localized,
    viewed: { mn: "Үзсэн", en: "Viewed" } as Localized,
    basket: { mn: "Сагс", en: "Basket" } as Localized,
    registration: { mn: "Бүртгэл", en: "Registration" } as Localized,
  },
  nav: {
    menu: { mn: "ЦЭС", en: "MENU" } as Localized,
    newArrival: { mn: "Шинэ ирэлт", en: "New arrival" } as Localized,
    specialDiscount: { mn: "Тусгай хямдрал", en: "Special discount" } as Localized,
    categories: { mn: "Ангилал", en: "Categories" } as Localized,
    brands: { mn: "Брэндүүд", en: "Brands" } as Localized,
    giftCard: { mn: "Бэлгийн карт", en: "Gift card" } as Localized,
    aboutUs: { mn: "Бидний тухай", en: "About us" } as Localized,
  },
  categories: {
    heading: { mn: "Танд тохирох ангилал", en: "Best For Your Categories" } as Localized,
    subheading: {
      mn: "Долоо хоног бүр шилдэг бараагаа танд хүргэж байна",
      en: "We've got the smartest selected items on Member Fridays",
    } as Localized,
    products: { mn: "бараа", en: "Products" } as Localized,
  },
  categoriesBrowse: {
    heading: { mn: "Бүтээгдэхүүн", en: "Products" } as Localized,
    categoriesHeading: { mn: "Ангилал", en: "Categories" } as Localized,
    brandsHeading: { mn: "Брэндүүд", en: "Brands" } as Localized,
  },
  categoryPage: {
    home: { mn: "Нүүр", en: "Home" } as Localized,
    backToCategories: { mn: "Бүх ангилал", en: "All categories" } as Localized,
    notFoundTitle: { mn: "Ангилал олдсонгүй", en: "Category not found" } as Localized,
    notFoundBody: {
      mn: "Таны хайсан ангилал байхгүй байна.",
      en: "The category you're looking for doesn't exist.",
    } as Localized,
    sizeHeading: { mn: "Размер", en: "Size" } as Localized,
    ageHeading: { mn: "Насны ангилал", en: "Age category" } as Localized,
    clothingHeading: { mn: "Хувцасны ангилал", en: "Clothing category" } as Localized,
    clearFilters: { mn: "Шүүлтүүр арилгах", en: "Clear filters" } as Localized,
    noResults: { mn: "Тохирох бараа олдсонгүй", en: "No matching products found" } as Localized,
  },
  promos: {
    shopNow: { mn: "ОДОО ХУДАЛДАЖ АВАХ", en: "SHOP NOW" } as Localized,
  },
  deals: {
    heading: { mn: "Хямдралтай бараа", en: "Deals & Discounts" } as Localized,
    discount: { mn: "Хямдрал", en: "Discount" } as Localized,
    special: { mn: "Онцгой үнэ", en: "Special price" } as Localized,
  },
  account: {
    dashboard: { mn: "Хянах самбар", en: "Dashboard" } as Localized,
    personalInfo: { mn: "Хувийн мэдээлэл", en: "Personal info" } as Localized,
    profile: { mn: "Миний профайл", en: "My Profile" } as Localized,
    saved: { mn: "Хадгалсан", en: "Saved" } as Localized,
    wallet: { mn: "Хэтэвч", en: "Wallet" } as Localized,
    viewed: { mn: "Сүүлд үзсэн", en: "Recently viewed" } as Localized,
    ordersSection: { mn: "Захиалгууд", en: "Orders" } as Localized,
    myOrders: { mn: "Миний захиалга", en: "My Orders" } as Localized,
    coupon: { mn: "Купон", en: "Coupons" } as Localized,
  },
  walletPage: {
    balance: { mn: "Боломжит үлдэгдэл", en: "Available balance" } as Localized,
    topUpHeading: { mn: "Token цэнэглэх", en: "Top up tokens" } as Localized,
    amountPlaceholder: { mn: "Дүн оруулах", en: "Enter amount" } as Localized,
    topUpButton: { mn: "Цэнэглэх", en: "Top up" } as Localized,
    quickAmounts: { mn: "Хурдан сонголт", en: "Quick amounts" } as Localized,
    historyHeading: { mn: "Гүйлгээний түүх", en: "Transaction history" } as Localized,
    noHistory: { mn: "Гүйлгээ хийгдээгүй байна.", en: "No transactions yet." } as Localized,
    topUpSuccess: { mn: "Амжилттай цэнэглэгдлээ!", en: "Top up successful!" } as Localized,
    invalidAmount: { mn: "Зөв дүн оруулна уу.", en: "Please enter a valid amount." } as Localized,
    qpayTitle: { mn: "QPay-аар төлөх", en: "Pay with QPay" } as Localized,
    qpayInstruction: {
      mn: "QPay дэмждэг банкны аппликейшнээр доорх QR кодыг уншуулна уу.",
      en: "Scan the QR code below using any QPay-supported banking app.",
    } as Localized,
    qpayInvoiceAmount: { mn: "Төлбөрийн дүн", en: "Invoice amount" } as Localized,
    qpayWaiting: { mn: "Төлбөр хүлээгдэж байна...", en: "Waiting for payment..." } as Localized,
    qpayConfirm: { mn: "Төлбөр хийгдсэн", en: "I've paid" } as Localized,
    qpayCancel: { mn: "Цуцлах", en: "Cancel" } as Localized,
  },
  dashboardPage: {
    welcome: { mn: "Тавтай морил", en: "Welcome back" } as Localized,
    body: {
      mn: "Энд та өөрийн профайл, захиалга, хадгалсан бараагаа удирдах боломжтой.",
      en: "Manage your profile, orders, and saved items here.",
    } as Localized,
    browse: { mn: "Дэлгүүр хэсэх", en: "Browse shop" } as Localized,
  },
  viewedPage: {
    heading: { mn: "Сүүлд үзсэн бараа", en: "Recently viewed" } as Localized,
    empty: {
      mn: "Та одоогоор ямар нэгэн бараа үзээгүй байна.",
      en: "You haven't viewed any products yet.",
    } as Localized,
    clear: { mn: "Бүгдийг арилгах", en: "Clear all" } as Localized,
  },
  productPage: {
    back: { mn: "Буцах", en: "Back" } as Localized,
    description: {
      mn: "Энэ бараа таны амьдралын хэв маягт тохирсон, өндөр чанартай материалаар хийгдсэн.",
      en: "This item is crafted from premium materials to match your everyday lifestyle.",
    } as Localized,
    notFoundTitle: { mn: "Бараа олдсонгүй", en: "Product not found" } as Localized,
    notFoundBody: {
      mn: "Таны хайсан бараа байхгүй байна.",
      en: "The product you're looking for doesn't exist.",
    } as Localized,
  },
  comingSoon: {
    mn: "Тун удахгүй нэмэгдэх болно.",
    en: "Coming soon.",
  } as Localized,
  specialDiscount: {
    heading: { mn: "Тусгай хямдрал", en: "Special Discount" } as Localized,
    searchPlaceholder: { mn: "Хайх", en: "Search" } as Localized,
    brandHeading: { mn: "Брэнд", en: "Brand" } as Localized,
    ageHeading: { mn: "Насны ангилал", en: "Age category" } as Localized,
    adult: { mn: "Том хүн", en: "Adult" } as Localized,
    child: { mn: "Хүүхэд", en: "Child" } as Localized,
    discountEndsIn: { mn: "Хямдрал дуусах:", en: "Discount ends in:" } as Localized,
    days: { mn: "хоног", en: "days" } as Localized,
    noResults: { mn: "Тохирох бараа олдсонгүй", en: "No matching products found" } as Localized,
    clearFilters: { mn: "Шүүлтүүр арилгах", en: "Clear filters" } as Localized,
  },
  emptyState: {
    browse: { mn: "Дэлгүүр хэсэх", en: "Browse shop" } as Localized,
  },
  popularProducts: {
    heading: { mn: "Эрэлттэй бараанууд", en: "Popular Products" } as Localized,
    tabs: {
      Fashion: { mn: "Гоёл чимэглэл", en: "Fashion" } as Localized,
      Accessories: { mn: "Аксессуар", en: "Accessories" } as Localized,
      Apparel: { mn: "Хувцас", en: "Apparel" } as Localized,
    },
    sale: { mn: "ХЯМДРАЛ", en: "Sale" } as Localized,
    new: { mn: "ШИНЭ", en: "New" } as Localized,
    addToCart: { mn: "Сагсанд хийх", en: "Add to Cart" } as Localized,
    added: { mn: "Сагсанд нэмэгдсэн", en: "Added" } as Localized,
  },
  features: [
    {
      title: { mn: "Дэлхий дахинд хүргэлт", en: "Worldwide Shipping" } as Localized,
      description: { mn: "$100-аас дээш үнэтэй захиалгад үнэгүй хүргэлт", en: "Free Shipping Above $100" } as Localized,
    },
    {
      title: { mn: "Мөнгөн буцаалтын баталгаа", en: "Money Back Guarantee" } as Localized,
      description: { mn: "30 хоногийн дотор буцаалт хийнэ", en: "Get Returns In 30 Days" } as Localized,
    },
    {
      title: { mn: "Хямдрал, урамшуулал", en: "Offers And Discounts" } as Localized,
      description: { mn: "50% хүртэл хямдралтай", en: "Up To 50% Off" } as Localized,
    },
    {
      title: { mn: "24/7 үйлчлүүлэгчийн дэмжлэг", en: "24/7 Support Services" } as Localized,
      description: { mn: "Хэдийд ч тусламж авах боломжтой", en: "Any Time Support" } as Localized,
    },
  ],
  auth: {
    loginTitle: { mn: "Нэвтрэх", en: "Log In" } as Localized,
    signupTitle: { mn: "Бүртгүүлэх", en: "Sign Up" } as Localized,
    loginTab: { mn: "Нэвтрэх", en: "Log In" } as Localized,
    signupTab: { mn: "Бүртгүүлэх", en: "Sign Up" } as Localized,
    name: { mn: "Бүтэн нэр", en: "Full Name" } as Localized,
    email: { mn: "И-мэйл хаяг", en: "Email Address" } as Localized,
    password: { mn: "Нууц үг", en: "Password" } as Localized,
    confirmPassword: { mn: "Нууц үг давтах", en: "Confirm Password" } as Localized,
    rememberMe: { mn: "Намайг сана", en: "Remember me" } as Localized,
    forgotPassword: { mn: "Нууц үгээ мартсан уу?", en: "Forgot password?" } as Localized,
    loginButton: { mn: "Нэвтрэх", en: "Log In" } as Localized,
    signupButton: { mn: "Бүртгүүлэх", en: "Create Account" } as Localized,
    noAccount: { mn: "Та бүртгэлгүй юу?", en: "Don't have an account?" } as Localized,
    haveAccount: { mn: "Бүртгэлтэй хэрэглэгч үү?", en: "Already have an account?" } as Localized,
    orContinueWith: { mn: "эсвэл үүгээр үргэлжлүүлэх", en: "or continue with" } as Localized,
    google: { mn: "Google-ээр нэвтрэх", en: "Continue with Google" } as Localized,
    close: { mn: "Хаах", en: "Close" } as Localized,
    errorInvalidCredentials: {
      mn: "И-мэйл эсвэл нууц үг буруу байна.",
      en: "Invalid email or password.",
    } as Localized,
    errorEmailTaken: {
      mn: "Энэ и-мэйл хаягаар бүртгэлтэй хэрэглэгч байна.",
      en: "An account with this email already exists.",
    } as Localized,
    errorPasswordMismatch: {
      mn: "Нууц үг хоорондоо таарахгүй байна.",
      en: "Passwords do not match.",
    } as Localized,
    signupSuccess: { mn: "Амжилттай бүртгэгдлээ!", en: "Account created successfully!" } as Localized,
  },
  accountMenu: {
    greeting: { mn: "Сайн байна уу", en: "Hi" } as Localized,
    logout: { mn: "Гарах", en: "Log out" } as Localized,
  },
  footer: {
    tagline: {
      mn: "Хотын амьдралд зориулсан гайхалтай бараа бүтээгдэхүүн, долоо хоног бүр шинэчлэгдэнэ.",
      en: "Awesome products for the dynamic urban lifestyle, curated weekly.",
    } as Localized,
    columns: [
      {
        title: { mn: "Компани", en: "Company" } as Localized,
        links: [
          { mn: "Бидний тухай", en: "About Us" } as Localized,
          { mn: "Ажлын байр", en: "Careers" } as Localized,
          { mn: "Хамтрагчид", en: "Affiliates" } as Localized,
          { mn: "Блог", en: "Blog" } as Localized,
          { mn: "Холбоо барих", en: "Contact Us" } as Localized,
        ],
      },
      {
        title: { mn: "Тусламж", en: "Help" } as Localized,
        links: [
          { mn: "Үйлчлүүлэгчийн үйлчилгээ", en: "Customer Service" } as Localized,
          { mn: "Захиалга хянах", en: "Track Order" } as Localized,
          { mn: "Буцаалт, нөхөн төлбөр", en: "Returns & Refunds" } as Localized,
          { mn: "Хүргэлт", en: "Shipping" } as Localized,
          { mn: "Түгээмэл асуулт", en: "FAQs" } as Localized,
        ],
      },
      {
        title: { mn: "Дэлгүүр", en: "Shop" } as Localized,
        links: [
          { mn: "Шинэ ирэлт", en: "New Arrivals" } as Localized,
          { mn: "Хамгийн их зарагдсан", en: "Best Sellers" } as Localized,
          { mn: "Шилдэг хямдрал", en: "Top Deals" } as Localized,
          { mn: "Бэлгийн карт", en: "Gift Cards" } as Localized,
        ],
      },
    ],
    rights: { mn: "Бүх эрх хуулиар хамгаалагдсан.", en: "All rights reserved." } as Localized,
  },
};
