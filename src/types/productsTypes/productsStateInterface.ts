import TLoading from "@/types/globalTypes/loadingType";
import TProductsRecords from "./productsRecordsType";

interface IProducts {
  records: TProductsRecords[];
  loading: TLoading;
  error: null | string;
}

export default IProducts;
