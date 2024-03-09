import {defineStore} from "pinia";
import axios from "axios";

export interface City {
  name: string;
  q: string;
}

interface State {
  cityList: Map<string, City>;
  selectedCity: City;
  isLoading: boolean;
  weatherDescription: string;
}

export const useWeatherStore = defineStore({
  id: "weather",
  state: (): State => {
    return {
      cityList: new Map<string, City>(),
      selectedCity: {
        name: "",
        q: ""
      },
      isLoading: true,
      weatherDescription: ""
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
    async recieveWeatherInfo(id: string) {
      this.selectedCity = this.cityList.get(id) as City;;
      const weatherInfoUrl = "http://api.openweathermap.org/data/2.5/weather";
      const params: {
        lang: string,
        q: string,
        appId: string
      } =
      {
        lang: "ja",
        q: this.selectedCity.q,
        appId: "11a7538fc51e3de1fea32319f0af5665"
      };

      const queryParams = new URLSearchParams(params);
      const urlFull = `${weatherInfoUrl}?${queryParams}`;
      const response = await axios.get(urlFull);
      const weatherInfoJSON = response.data;
      const weatherArray = weatherInfoJSON.weather;
      const weather = weatherArray[0];
      this.weatherDescription = weather.description;
      this.isLoading = false;
    }
  }
});