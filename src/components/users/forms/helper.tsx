import { USER } from "../../../typescript/users";
import { INPUT_ENUM } from "../../forms/types";

const { TEXT } = INPUT_ENUM;

function displayFullName(data: USER["data"]) {
  if (data.firstName && data.lastName) {
    return `${data.firstName} ${data.lastName}`;
  } 
  return "Missing properties"
}

const userFormConfig = [
  {
    name: "userName",
    type: TEXT,
    label: "User name",
    defaultValue: "",
    placeholder: "",
    required: true,
  },
  {
    name: "firstName",
    type: TEXT,
    label: "First name",
    required: true,
  },
  {
    name: "lastName",
    type: TEXT,
    label: "Last name",
    required: true,
  },
];

export { displayFullName, userFormConfig };
