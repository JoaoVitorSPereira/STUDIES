export default class CardArray {
  constructor() {
    this.cards = [];
    this._subscribed = [];
  }

  addCard(title, text, category) {
    const newCard = new Card(title, text, category);
    this.cards.push(newCard);
  }

  subscribe(func) {
    this._subscribed.push(func);
  }

  notifie() {
    this._subscribed.forEach((func) => func(this.categories));
  }

  deleteCard(index) {
    this.cards.splice(index, 1);
  }
}

class Card {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
