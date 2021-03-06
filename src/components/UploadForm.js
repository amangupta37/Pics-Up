import { React, useState } from "react";
import ProgressBar from "./ProgressBar";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

function UploadForm() {
  const [data, setData] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setData(selected);
      console.log("sus");
      setError(null);
    } else {
      setData(null);
      setError("Please select png or jpg formate");
      //    setData(null);
    }
  };

  return (
    <div className="form">
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>
            {" "}
            <AddAPhotoIcon className="add-image-icon" />
          </span>
        </label>
      </form>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {data && <div className="msg">{data.name}</div>}
        {data && <ProgressBar data={data} setData={setData} />}
      </div>

      
    </div>
  );
}

export default UploadForm;
