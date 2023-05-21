import { USER } from "../../typescript/users";

function displayFullName(data: USER["data"]) {
  return `${data.firstName} ${data.lastName}`;
}

export { displayFullName };
