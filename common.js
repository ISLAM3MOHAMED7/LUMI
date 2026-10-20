import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { firebaseConfig, ADMIN_WHATSAPP } from "./firebase-config.js";

export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export const WA  = ADMIN_WHATSAPP;

const CART_KEY = "lumi_cart_v2";

export function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}
export function saveCart(c) {
  localStorage.setItem(CART_KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent("cartUpdated"));
}
export function addToCart(product, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) existing.qty += qty;
  else cart.push({ id: product.id, name: product.name || "منتج", price: Number(product.price) || 0, image: getMainImage(product), qty });
  saveCart(cart);
}
export function updateQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) cart = cart.filter(i => i.id !== id);
  else { const item = cart.find(i => i.id === id); if (item) item.qty = qty; }
  saveCart(cart);
}
export function removeFromCart(id) { saveCart(getCart().filter(i => i.id !== id)); }
export function cartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
export function cartSubtotal() { return getCart().reduce((s, i) => s + (i.price * i.qty), 0); }
export function clearCart() { saveCart([]); }

export function money(n) { return Number(n || 0).toLocaleString("en-US") + " ج.م"; }
export function getMainImage(product) {
  if (!product) return "";
  if (Array.isArray(product.images) && product.images.length) return product.images[0];
  if (product.image) return product.image;
  return "";
}
export function getImages(product) {
  if (!product) return [];
  if (Array.isArray(product.images) && product.images.length) return product.images;
  if (product.image) return [product.image];
  return [];
}
export function waLink(msg) { return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`; }
export function waLinkProduct(product) {
  const msg = `مرحبًا، أريد الاستفسار عن:\n📦 ${product.name}\n💰 ${money(product.price)}\n🔗 ${location.href}`;
  return waLink(msg);
}

export const PLACEHOLDER_IMG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500'><rect fill='%231a1a1a' width='400' height='500'/><text x='50%25' y='50%25' fill='%23444' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='28' font-weight='bold' letter-spacing='3'>LUMI</text></svg>";

export function refreshCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const n = cartCount();
  badge.textContent = n;
  badge.classList.toggle("show", n > 0);
}