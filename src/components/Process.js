import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/workProcess.json"));
  }, []);
  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
