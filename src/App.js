import * as React from "react";
import { BrowserSerial } from "browser-serial";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ws: null,
//       lat: 0,
//     };
//   }
//   componentDidMount = () => {
//     this.handleConnectWS();
//     console.log("didmount", this);
//   };
//   handleConnectWS = () => {
//     // let ws = new WebSocket("wss://ws.achex.ca");

//     let ws = new WebSocket("ws://ickonav.runflare.run/update/");

//     console.log(ws);
//     ws.onopen = () => {
//       console.log("open connection");
//       this.setState({ ws });
//       ws.send("repeat");
//     };
//     ws.onmessage = (data) => {
//       console.log("getMessage:", data);
//       console.log(data.data);
//       let data1 = JSON.parse(data.data);
//       // console.log(data1["gps"]["data"]["0"]["latitude"]);
//       console.log(data1["1"]["gps"]["latitude"]);
//       this.setState({ lat: data1["1"]["gps"]["latitude"] });
//       // this.setState({ lat: data1["gps"]["data"]["0"]["latitude"] });
//     };
//   };
//   render() {
//     const { ws } = this.state;
//     return (
//       <div className="App">
//         <button
//           onClick={() => {
//             ws.send("repeat");
//           }}
//         >
//           <div>{this.state.lat}</div>
//           Send
//         </button>
//       </div>
//     );
//   }
// }

function App() {
  const serial = new BrowserSerial();

  // read data continuously, readLoop takes a callback

  function connect() {
    // alert("You clicked me!");
    serial.connect();
  }

  function on() {
    serial.write(1);
  }

  function off() {
    serial.write(0);
  }

  function disconnect() {
    serial.disconnect();
  }

  return (
    <div>
      <button onClick={connect}>CONNECT</button>
      <button onClick={on}>ON</button>
      <button onClick={off}>OFF</button>
      <button onClick={disconnect}>DISCONNECT</button>
    </div>
  );
}
export default App;

// function App() {
//   const [topM1, setTopM1] = React.useState(275);
//   const [leftM1, setLeftM1] = React.useState(350);
//   // React.useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     axios
//   //       .get("http://192.168.124.1:8000/coorGet/")
//   //       .then((res) => {
//   //         console.log(res.data.X);
//   //         console.log(res.data.Y);
//   //         setTopM1(res.data.Y / 1000);
//   //         setLeftM1(res.data.X / 1000);
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //       });
//   //   }, 1000);
//   //   return () => clearInterval(interval);
//   // }, []);

//   const markerStyle1 = {
//     position: "absolute",
//     zIndex: 4,
//     top: `${topM1}px`,
//     left: `${leftM1}px`,
//   };

//   return (
//     <img
//       style={markerStyle1}
//       src="https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
//     />
//   );
// }

// export default App;
