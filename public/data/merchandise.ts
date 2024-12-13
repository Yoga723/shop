import { MerchandiseProductProps } from "./productProps";

// Kategori Merchandise
const MerchandiseProducts: MerchandiseProductProps[] = [
  // Merchandise Baju Dialogika
  {
    id: "Baju-Dialogika-2024",
    title: "Baju Dialogika 2024",
    price: 180000,
    createdData: "2024-12-11",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: 0,
    discountPercentage: 0,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    stock: 10,
  },

  // Merchandise Motivational Sticker
  {
    id: "Motivational-Sticker-set-1",
    title: "Motivational Sticker Pack 1",
    price: 20000,
    createdData: "2024-12-12",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: 0,
    discountPercentage: 0,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    stock: 6,
  },
];

export default MerchandiseProducts;
