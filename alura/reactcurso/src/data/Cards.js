export default class CardArray {
  constructor() {
    this.cards = [];
    this._subscribed = [];
  }

  addCard(title, text, category) {
    const newCard = new Card(title, text, category);
    this.cards.push(newCard);
    this.notify();
  }

  deleteCard(index) {
    this.cards.splice(index, 1);
    this.notify();
  }

  subscribe(func) {
    this._subscribed.push(func);
  }

  unsubscribe(func) {
    this._subscribed = this._subscribed.filter((f) => f !== func);
  }

  notify() {
    this._subscribed.forEach((func) => func(this.cards));
  }
}

class Card {
  constructor(title, text, category) {
    this.title = title;
    this.text = text;
    this.category = category;
  }
}
