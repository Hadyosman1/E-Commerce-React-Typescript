import { TLoading } from "@types";
import { TProductsRecords } from "@types";

interface ICartState {
  items: { [id: string]: number };
  productsFullInfo: TProductsRecords[];
  loading: TLoading;
  error: null | string;
}

export default ICartState;
