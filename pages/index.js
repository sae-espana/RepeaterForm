import "antd/dist/antd.css";
import FormCustom from "../components/Form";
import { useState } from "react";
import { isEmpty } from "lodash";
import InfoPerson from "../components/info";

export default function IndexPage() {
  const [info, setInfo] = useState({
    name: "",
    lastname: "",
    email: "",
    phones: []
  });
  const [finish, setFinish] = useState(false);

  return !finish ? (
    <div>
      <h1>Formulario repeater</h1>
      <FormCustom setInfo={setInfo} setFinish={setFinish} />
    </div>
  ) : (
    <InfoPerson data={info} />
  );
}
