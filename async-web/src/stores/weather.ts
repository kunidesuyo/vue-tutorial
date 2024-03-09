import {defineStore} from "pinia";

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
}

export const useWeatherStore = defineStore({
  id: "weather",
  state: (): State => {
    return {
      cityList: new Map<String, City>(),
    };
  },
  getters: {

  },
  actions: {
    prepareCityList() {
      this.cityList.set("Osaka",
      {
        name: "大阪",
        q: "Osaka"
      });
      this.cityList.set("Kobe",
      {
        name: "神戸",
        q: "Kobe"
      });
      this.cityList.set("Himeji",
      {
        name: "姫路",
        q: "Himeji"
      });
    },
  }
});