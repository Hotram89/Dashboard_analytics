import ApiProviderMock from "./ApiProviderMock"; // RENOMMER EN ApiProviderMock
import ApiProvider from "./ApiProvider";

export default class ApiProviderFactory {
  get(isMocked) {
    if (isMocked) {
      return new ApiProviderMock();
    }
    return new ApiProvider();
  }
}
