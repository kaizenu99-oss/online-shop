import type { Category, Customer, Order, Product } from "./types";

export const seedCategories: Category[] = [
  { id: "watch", name: "Цаг", productCount: 9 },
  { id: "fashionize", name: "Гоёл чимэглэл", productCount: 6 },
  { id: "ethnic-wear", name: "Үндэсний хувцас", productCount: 4 },
  { id: "goggles", name: "Нүдний шил", productCount: 10 },
  { id: "tote-bag", name: "Цүнх", productCount: 4 },
  { id: "shoes", name: "Гутал", productCount: 8 },
];

export const seedProducts: Product[] = [
  {
    id: "p1",
    name: "Longines цаг",
    category: "Цаг",
    price: 32000,
    stock: 12,
    status: "active",
    image: "https://picsum.photos/seed/admin-longines-watch/200/200",
    description: "Швейцар үйлдвэрлэлийн классик загварын цаг.",
  },
  {
    id: "p2",
    name: "Кэшмир ороолт",
    category: "Гоёл чимэглэл",
    price: 10000,
    stock: 25,
    status: "active",
    image: "https://picsum.photos/seed/admin-cashmere-scarf/200/200",
    description: "Зөөлөн кэшмир материалаар хийсэн ороолт.",
  },
  {
    id: "p3",
    name: "Лаптопын цүнх",
    category: "Цүнх",
    price: 36000,
    stock: 8,
    status: "active",
    image: "https://picsum.photos/seed/admin-laptop-bag/200/200",
    description: "Өдөр тутмын хэрэглээнд тохиромжтой лаптопын цүнх.",
  },
  {
    id: "p4",
    name: "Жинсэн куртка",
    category: "Үндэсний хувцас",
    price: 16000,
    stock: 0,
    status: "hidden",
    image: "https://picsum.photos/seed/admin-denim-jacket/200/200",
    description: "Жинсэн материалаар хийсэн богино куртка.",
  },
  {
    id: "p5",
    name: "Арьсан бүс",
    category: "Гоёл чимэглэл",
    price: 21000,
    stock: 17,
    status: "active",
    image: "https://picsum.photos/seed/admin-leather-belt/200/200",
    description: "Жинхэнэ арьсаар хийсэн эрэгтэй бүс.",
  },
  {
    id: "p6",
    name: "Нарны шил",
    category: "Нүдний шил",
    price: 14500,
    stock: 30,
    status: "active",
    image: "https://picsum.photos/seed/admin-sunglasses/200/200",
    description: "UV хамгаалалттай орчин үеийн загвар.",
  },
  {
    id: "p7",
    name: "Эмэгтэй гутал",
    category: "Гутал",
    price: 45900,
    stock: 5,
    status: "active",
    image: "https://picsum.photos/seed/admin-womens-shoes/200/200",
    description: "Тав тухтай, эв тэгш загвартай эмэгтэй гутал.",
  },
];

export const seedOrders: Order[] = [
  {
    id: "o1001",
    customer: "Болд Бат",
    items: [
      { name: "Longines цаг", quantity: 1, price: 32000 },
      { name: "Арьсан бүс", quantity: 2, price: 21000 },
    ],
    total: 74000,
    status: "pending",
    date: "2026-06-18T09:30:00.000Z",
  },
  {
    id: "o1002",
    customer: "Сараа Од",
    items: [{ name: "Эмэгтэй гутал", quantity: 1, price: 45900 }],
    total: 45900,
    status: "shipped",
    date: "2026-06-19T14:10:00.000Z",
  },
  {
    id: "o1003",
    customer: "Төгөлдөр Жаргал",
    items: [{ name: "Кэшмир ороолт", quantity: 3, price: 10000 }],
    total: 30000,
    status: "completed",
    date: "2026-06-15T11:00:00.000Z",
  },
];

export const seedCustomers: Customer[] = [
  { id: "c1", name: "Болд Бат", email: "bold@example.com", joined: "2026-05-02T00:00:00.000Z", ordersCount: 3 },
  { id: "c2", name: "Сараа Од", email: "saraa@example.com", joined: "2026-05-20T00:00:00.000Z", ordersCount: 1 },
  { id: "c3", name: "Төгөлдөр Жаргал", email: "tugu@example.com", joined: "2026-06-01T00:00:00.000Z", ordersCount: 5 },
];
