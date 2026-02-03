export type Product = {
  id: string;
  title: string;
  available: boolean;
  imageUrl: string | undefined;
};
export type ProductNode = {
  id: string;
  title: string;
  availableForSale: boolean;
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
