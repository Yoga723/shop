export interface ProductProps {
  id: number;
  author: string;
  title: string;
  price: number;
  kategori: string;
  deskripsi: string;
  discountValue: number;
  discountPercentage: number;
  gambar: { id: number; title: string; src: string }[];
  availableFormat: string[];
}
