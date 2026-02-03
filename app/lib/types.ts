export type ProductImages = {
  id: string;
  url: string;
  width: number;
  height: number;
  altText: string | null;
};

export type Product = {
  id: string;
  title: string;
  available: boolean;
  images: ProductImages[];
  price: string;
  compareAtPrice: string;
};
export type ProductNode = {
  id: string;
  title: string;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: {
      node: {
        id: string;
        url: string;
        width: number;
        height: number;
        altText: string | null;
      };
    }[];
  };
};
