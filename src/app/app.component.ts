import { Model, TodoItem } from "./model";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  IsDisplay = false;
  model = new Model();
  getItems() {
    if (this.IsDisplay) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }
  addItem(val) {
    if (val != "") {
      this.model.items.push(new TodoItem(val, false));
    }
  }
}
