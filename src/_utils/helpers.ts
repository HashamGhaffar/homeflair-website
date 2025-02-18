import { AttributeOption, Product } from "@/types/product";

export const formatPrice = (price: number | string): string => {
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(numericPrice)) return "£0.00"; // Handle invalid input

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2, // Ensures two decimal places
    maximumFractionDigits: 2,
  }).format(numericPrice);
};

export const getPriceRange = (product: Product): string => {
  let minPrice = 0;
  let maxPrice = 1000000;

  let flag = false;

  product.attributes.forEach((attribute) => {
    if (attribute.type === "model") {
      attribute.options.forEach((option) => {
        if (option.price) {
          flag = true;
          const price = parseFloat(option.price);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          minPrice < price && (minPrice = price);
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          maxPrice > price && (maxPrice = price);
        }
      });
    }
  });

  if (!flag) {
    return `${formatPrice(product.price)}`;
  }

  return `${formatPrice(maxPrice)} - ${formatPrice(minPrice)}`;
};

export const getProductPrice = (
  product: Product | null,
  selectedModel: AttributeOption | null
) => {
  if (!product) return 0;

  const isModelPriceEnabled = product.attributes?.some(
    (attribute) => attribute.type === "model"
  );

  if (isModelPriceEnabled) {
    return selectedModel?.price ?? 0;
  } else {
    return product.price;
  }
};
