import TLoading from "@customTypes/globalTypes/loadingType";
import TProductsRecords from "@customTypes/productsTypes/productsRecordsType";

interface ICartState {
  items: { [id: string]: number };
  productsFullInfo: TProductsRecords[];
  loading: TLoading;
  error: null | string;
}

export default ICartState;
