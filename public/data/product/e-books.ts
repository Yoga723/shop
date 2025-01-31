import { EBookProductProps } from "./productProps";

// Product untuk Kategori E-book
const EbookProducts: EBookProductProps[] = [
  // E-book Ten Thousand Skies Above You
  {
    id: "Ten-Thousand-Skies-Above-You",
    title: "Ten Thousand Skies Above You lorem, testing asdj hello world im under water",
    price: 100000,
    createdData: "2024-12-11",
    category: "E-book",
    deskripsi: `<p>Step into a <strong>multiverse</strong> of endless possibilities with <em>Ten Thousand Skies Above You</em>, a gripping sequel in the Firebird series.</p> <p>As Marguerite struggles with love, betrayal, and the burden of saving her dimension, she embarks on a heart-pounding journey through parallel worlds. With each universe unveiling new challenges and truths, Marguerite faces a pivotal question: <u>can she rewrite destiny without losing herself?</u></p> <ul><li>Perfect for fans of sci-fi</li><li>Romance</li><li>Thrilling adventures</li></ul> <p>This book will keep you turning the pages late into the night.</p>`,
    discountValue: 15000,
    discountPercentage: 15,
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
    author: ["Claudia Gray"],
    genre: ["Fiksi", "BL"],
    availableFormat: ["PDF", "EPUB", ".txt", "docx"],
  },
  // Buku Vall Push
  {
    id: "Vall-Push",
    title: "Valll Push Test",
    price: 150000,
    createdData: "2024-12-10",
    category: "E-book",
    deskripsi: "Hello World !",
    discountValue: 5000,
    discountPercentage: 15,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://www.jojomoyes.com/wp-content/themes/jojomoyes_2014/scripts/php/thumb.php?src=https://www.jojomoyes.com/wp-content/uploads/9781405909075.jpg&w=276&h=412&zc=1&q=95",
      },
      {
        id: 2,
        title: "Book Cover 3",
        src: "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/img20210506_16033754.jpg",
      },
      {
        id: 3,
        title: "Book Cover 4",
        src: "https://m.media-amazon.com/images/I/61MflMre-zL._SL1200_.jpg",
      },
      {
        id: 4,
        title: "Book Cover 5",
        src: "https://sandrasshelf.com/wp-content/uploads/2023/09/37.png",
      },
      {
        id: 5,
        title: "Book Cover 6",
        src: "https://images.pexels.com/photos/28943665/pexels-photo-28943665/free-photo-of-traditional-market-woman-in-vibrant-sari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    author: ["John Doe", "PH.Martin"],
    genre: ["Fiksi", "Slice of Life"],
    availableFormat: ["PDF", "EPUB", ".txt", "docx"],
  },
];

export default EbookProducts;
