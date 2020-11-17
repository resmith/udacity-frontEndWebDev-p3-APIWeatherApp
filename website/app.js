/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const openWeatherKey = "4c9015153621c9fbe1e85745f389820f";

// Event listener to add function to existing HTML DOM element
const submitButton = document.querySelector("#generate");
submitButton.addEventListener("click", processData);

/* Function to GET Web API Data*/
const getWeatherForZip = async (zipCode) => {
  // console.log("app.js getWeatherForZip zipCode: ", zipCode);
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${openWeatherKey}`;
  const req = await fetch(url);
  try {
    const reqData = await req.json();
    console.log("getWeatherForZip reqData: ", reqData);
    return reqData;
  } catch (error) {
    console.log("error", error);
  }
};

const createPostData = ({ data, feelingToday }) => {
  console.log("app.js createPostData data: ", data);
  console.log("app.js createPostData feelingToday: ", feelingToday);
  const newObj = {
    date: newDate,
    temp: data.main.temp,
    feelingToday,
  };
  console.log("app.js createPostData newObj: ", newObj);
  return newObj;
};

/* Function to POST data */
const postData = async (url = "", dataToSend) => {
  // console.log("app.js postData url: ", url);
  // console.log("app.js postData dataToSend: ", dataToSend);
  try {
    const resp = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    const respData = await resp.json();
    console.log("app.js postData respData: ", respData);
    return respData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const getData = async (url = "") => {
  // console.log("app.js getProjectData url: ", url);
  const req = await fetch(url);
  try {
    const reqData = await req.json();
    console.log("app.js getProjectData reqData: ", reqData);
    return reqData;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to GET Project Data */
const updateUI = async (data) => {
  console.log("app.js updateUI data: ", data);
  const dateSelector = document.querySelector("#date");
  const tempSelector = document.querySelector("#temp");
  const contentSelector = document.querySelector("#content");

  try {
    dateSelector.textContent = data.date;
    tempSelector.textContent = data.temp;
    contentSelector.textContent = data.feelingToday;
    return;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function called by event listener */
function processData() {
  const zipCode = document.querySelector("#zip").value;
  const feelingToday = document.querySelector("#feelings").value;
  getWeatherForZip(zipCode)
    .then((data) => createPostData({ data, feelingToday }))
    .then((newData) => postData("/new", newData))
    .then(() => getData("/weather"))
    .then((retrievedData) => updateUI(retrievedData));
}
