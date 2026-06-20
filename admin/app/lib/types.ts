export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "hidden";
  image?: string;
  description?: string;
};

export type Category = {
  id: string;
  name: string;
  productCount: number;
};

export type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  customer: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "shipped" | "completed";
  date: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  joined: string;
  ordersCount: number;
};
