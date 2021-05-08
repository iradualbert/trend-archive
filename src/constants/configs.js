export const localUrl = "http://127.0.0.1:8000/add-view/";
export const prodUrl = "https://trendarchive.herokuapp.com/add-view/";
export const isProduction = window?.location?.hostname === "www.thetrendarchive.com"
export const analytics_url = isProduction ? prodUrl : localUrl
