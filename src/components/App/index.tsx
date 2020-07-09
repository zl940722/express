import React from "react";
import axios from "axios";
// import http from '../../http'
axios.defaults.baseURL = ""
export default function() {

    axios.get("http://localhost:3556/user").then((response: any) => {
   console.log(response)
  }).catch(() => {

  });


    axios.post("http://localhost:3556/add",{'id':2,'user_name':'222','password':'123'}).then((response: any) => {
        console.log(response)
    }).catch(() => {

    });

  return <>111</>;
}
