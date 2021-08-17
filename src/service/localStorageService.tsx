
const localStorageService = {
  drawerOpened: {
    set(flag: boolean) {
      localStorage.setItem("drawerOpened", JSON.stringify(flag));
    },

    unset() {
      localStorage.removeItem("drawerOpened");
    },

    get(): boolean {
      // Default true
      return !(JSON.parse(localStorage.getItem("drawerOpened") as string) === false);
    }
  },

}

export default localStorageService;