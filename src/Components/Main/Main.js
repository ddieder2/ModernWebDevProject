import {
    html,
    useEffect,
    useState
  } from "https://unpkg.com/htm/preact/standalone.module.js";
  import { getAllCollegeData } from "../../Services/College.js";
  import MainList from "./MainList.js";
  
  const Main = () => {
    const [colleges, setColleges] = useState([]);
  
    useEffect(() => {
      getAllCollegeData().then((colleges) => {
        setColleges(colleges);
      });
    }, []);
  
    // Pass list of colleges to stateless child
    return html`
      <div>
        <h1>Guess The College</h1>
        <${MainList} colleges=${colleges} />
      </div>
    `;
  };
  
  export default Main;
  