export const items = [
  {
    itemId: 1,
    itemName: "Ear Pods",
    price: 100,
    unit: "KG",
    quantity: 1,
    discountPercentage: 10,
    vatPercentage: 15,
  },
  {
    itemId: 2,
    itemName: "IPhone",
    price: 90000,
    unit: "Mile",
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 3,
    itemName: "Pencil",
    price: 20,
    unit: "Mile",
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 4,
    itemName: "Samsung",
    price: 70000,
    unit: "Mile",
    quantity: 1,
    discountPercentage: 10,
    vatPercentage: 15,
  },
  {
    itemId: 5,
    itemName: "Rubber",
    price: 10,
    unit: "Mile",

    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 6,
    itemName: "Table",
    price: 700,
    unit: "Mile",
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 7,
    itemName: "Chair",
    price: 90000,
    unit: "Mile",
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
];
export const placeholderItem = {
  id: 0,
  itemName: "Ear Pods",
  price: 0,
  unit: "KG",
  quantity: 0,
  discountPercentage: 0,
  vatPercentage: 0,
  isPlaceholderItem: true,
};
export const getVatAmount = (vatPercentage, totalExcVat) =>
  vatPercentage * totalExcVat;
export const getTotalExcVat = (price, quantity, discountPercentage) =>
  price * quantity - discountPercentage;
