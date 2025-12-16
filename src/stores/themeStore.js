import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "light"; // mặc định light

  constructor() {
    makeAutoObservable(this);
    this.initTheme();
  }

  // đọc theme đã lưu khi reload
  initTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      this.theme = "dark";
    } else {
      this.theme = "light";
    }

    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.classList.toggle(
      "dark",
      this.theme === "dark"
    );
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
    this.applyTheme();
  }
}

export default new ThemeStore();
