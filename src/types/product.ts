export interface Product {
  _id: string;
  name: string;
  price: number;
  slug: string;
  quantity: number;
  tags: string[];
  discount: number;
  category:
    | string
    | {
        _id: string;
        name: string;
      };
  subcategory:
    | string[]
    | {
        _id: string;
        name: string;
      }[];
  description: string;
  shortDescription: string;
  images: string[];
  mainImage: string;
  isDeleted: boolean;
  deleted_at: string | null;
  meta: MetaData;
  attributes: ProductAttribute[];
  created_at: string;
  updated_at: string;
  __v: number;
}

export interface PaginatedResponse<T> {
  count: number;
  data: T[];
  totalCount: number;
  hasMore: boolean;
  remaining: number;
}

interface MetaData {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

interface ProductAttribute {
  name: string;
  type: string;
  required: boolean;
  options: AttributeOption[];
  _id: string;
}

export interface AttributeOption {
  value: string;
  label: string;
  image_url: string | null;
  price: string | null;
  discount: string | null;
  _id: string;
}
