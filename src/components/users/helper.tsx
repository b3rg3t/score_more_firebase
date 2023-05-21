import { USER } from "../../typescript/users";

function displayFullName(data: USER["data"]) {
  return `${data.firstName} ${data.lastName}`;
}

const UserForm = [
  {
    name: "userName",
    type: "text",
    label: "User name",
    required: true,
  },
  {
    name: "firstName",
    type: "text",
    label: "First name",
    required: true,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    required: true,
  },

];

export { displayFullName, UserForm };
