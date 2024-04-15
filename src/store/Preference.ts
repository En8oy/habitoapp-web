import { defineStore } from "pinia";
import { Theme } from "../types/ui/Theme";

export const usePreference = defineStore("Preference", {
  state: () => {
    return {
      theme: "night" as Theme
    };
  },
  actions : {
    changeTheme(color:Theme){
      console.log(this.theme, "=====before")

      this.theme = color
      
      console.log(this.theme, "=====after")

    }
  }
});
