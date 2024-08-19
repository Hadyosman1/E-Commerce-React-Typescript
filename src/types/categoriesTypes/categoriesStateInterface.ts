import TCategoriesRecords from "./categoriesRecordsType";
import TLoading from "../globalTypes/loadingType";

interface ICategories {
  records: TCategoriesRecords[];
  loading: TLoading;
  error: null | string;
}

export default ICategories;
