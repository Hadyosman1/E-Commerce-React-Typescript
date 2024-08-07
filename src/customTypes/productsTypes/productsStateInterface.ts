import TLoading from "@customTypes/globalTypes/loadingType";
import TProductsRecords from "./productsRecordsType";

interface IProducts {
  records: TProductsRecords[];
  loading: TLoading;
  error: null | string;
}

export default IProducts;
