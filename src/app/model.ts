export class Model {
  user;
  items;
  constructor() {
    this.user = "Egemen";
    this.items = [
      new TodoItem("Breakfast", false),
      new TodoItem("Sport", false),
      new TodoItem("Bill", false),
      new TodoItem("Cinema", false),
    ];
  }
}
export class TodoItem {
  description;
  action;
  constructor(_description, _action) {
    this.description = _description;
    this.action = _action;
  }
}
