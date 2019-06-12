import { Component, OnInit } from "@angular/core";

import * as firebase from "Firebase";
import { ActivatedRoute, Router } from "@angular/router";
import { snapshotToArray } from "../home/home.page";

import { snapshotToObject } from "../snapshot-to-object";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  info = {};

  constructor(private route: ActivatedRoute, public router: Router) {
    firebase
      .database()
      .ref("infos/" + this.route.snapshot.paramMap.get("key"))
      .on("value", resp => {
        this.info = snapshotToObject(resp);
      });
  }

  ngOnInit() {}
}
