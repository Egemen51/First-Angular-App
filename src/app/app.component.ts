import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "My Angular App";
  items = [
    { Description: "Breakfast", Action: "No" },
    { Description: "Sport", Action: "No" },
    { Description: "Bill", Action: "No" },
    { Description: "Cinema", Action: "No" },
  ];
}
