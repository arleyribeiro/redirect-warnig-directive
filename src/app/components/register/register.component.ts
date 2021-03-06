import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    username: new FormControl(null),
  });

  constructor() {}

  ngOnInit() {}
}
