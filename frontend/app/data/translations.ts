import type { Localized } from "../lib/language";

export const ui = {
  utilityBar: {
    welcome: { mn: "Тавтай морил pesio дээр", en: "Welcome to pesio" } as Localized,
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
  promos: {
    shopNow: { mn: "ОДОО ХУДАЛДАЖ АВАХ", en: "SHOP NOW" } as Localized,
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
