import React, { createContext, Component } from "react";
import axios from "axios";

export const GlobalContext = createContext();

class GlobalProviderComponent extends Component {
  state = {
  iso:'loading',
  unix:'loading',
    rowsData: [
      {
        id: 1,
        name: "Row 1",
        tiles: 4,
        tilesData: [
          {
            title: "Title 1",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "iso",
          },
          {
            title: "Title 2",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "iso",
          },
          {
            title: "Title 3",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "unix",
          },
          {
            title: "Title",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "iso",
          },
        ],
      },
      {
        id: 2,
        name: "Row 2",
        tiles: 2,
        tilesData: [
          {
            title: "Title",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "unix",
          },
          {
            title: "Title",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "unix",
          },
        ],
      },
      {
        id: 3,
        tiles: 3,
        tilesData: [
          {
            title: "Title",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "iso",
          },
          {
            title: "Title",
            subTitle: "SubTitle",
            value: "₹23,900",
            changePercent: "34%",
            type: "unix",
          },
        ],
      },
    ],
  };
  counter = 0;
  interval = setInterval(() => {
    console.log('In setInterval');
    // The logic of changing counter value to come soon.
    if(this.counter>=0){
        this.updateUnixData();
    }
    this.counter++;
  }, 2500);
  interval = setInterval(() => {
    console.log('In setInterval');
    // The logic of changing counter value to come soon.
    if(this.counter>=0){
        this.updateISOData();
    }
    this.counter++;
  }, 5000);
  
  updateISOData = () => {
    axios
      .get("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
      .then((res) => {
        this.setState({
          iso: res.data.datetime,
          // unix: res.data.unixtime,
        });
      });
  }

  updateUnixData = () => {
    axios
      .get("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
      .then((res) => {
        this.setState({
          // iso: res.data.datetime,
          unix: res.data.unixtime,
        });
      });
  }
  handleAddRows = () => {
    let numberoftiles = prompt("Enter number of tiles");
    let numberofPopulatedtiles = prompt(
      "Enter number of tiles THAT ARE TO BE POPULATED"
    );
    let name = prompt("Enter the name of the row (if it is a named section)");
    let tilesData = [];
    let type = prompt("ENTER iso or unix");
    for (let i = 0; i < numberofPopulatedtiles; i++) {
      var textArray = ["iso", "unix"];
      var randomNumber = Math.floor(Math.random() * textArray.length);
      tilesData.push({
        title: "Title",
        subTitle: "SubTitle",
        value: "₹23,900",
        changePercent: "34%",
        type: type || textArray[randomNumber],
      });
    }
    this.setState({
      rowsData: [
        ...this.state.rowsData,
        {
          id: this.state.rowsData.length + 1,
          name: name,
          tiles: numberoftiles,
          tilesData: tilesData,
        },
      ],
    });
  };

  render() {
    let contextData = { state: this.state, handleAddRows: this.handleAddRows, updateData:this.updateData};
    return (
      <GlobalContext.Provider value={contextData}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export const GlobalProvider = GlobalProviderComponent;
