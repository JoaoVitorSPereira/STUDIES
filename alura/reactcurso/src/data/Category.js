export default class Categories {
  constructor() {
    this.categories = [];
    this._subscribed = [];
  }

  subscribe(func) {
    this._subscribed.push(func);
  }

  notify() {
    this._subscribed.forEach((func) => func(this.categories));
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notify();
  }
}
