import  { useEffect } from "react";

function LookCustom({ value }) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export default LookCustom;
