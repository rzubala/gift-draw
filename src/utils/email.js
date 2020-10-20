import { URL, PARAM1, PARAM2, PARAM3 } from "../constants/values";

class Ticket {
  constructor(name, email, to) {
    this.name = name;
    this.email = email;
    this.to = to;
  }
}

export const handlePersons = async (persons) => {
  if (!persons || persons.length < 2) {
    return mapResult(false);
  }
  let result = true;
  const tickets = draw(persons);
  for (const ticket of tickets) {
    console.log("Ticket from ", ticket.name, ticket.email, " to ", ticket.to);
    const messageRes = await sendMessage(ticket.name, ticket.email, ticket.to);
    result &= messageRes;
    console.log("send result", messageRes);
  }
  //const result = await resolveAfter2Seconds();
  return mapResult(result);
};

export const draw = (allPersons) => {
  const persons = [...allPersons];
  const tickets = [...allPersons];
  const result = [];
  do {
    const person = persons.shift();
    const toDraw = tickets.filter((i) => i.id !== person.id);
    const ticket = toDraw[Math.floor(Math.random() * toDraw.length)];
    const ticketIndex = tickets.findIndex((i) => i.id === ticket.id);
    tickets.splice(ticketIndex, 1);
    result.push(new Ticket(person.name, person.email, ticket.name));
  } while (persons.length > 0);
  return result;
};

const mapResult = (result) => {
  if (result) {
    return "ok";
  } else {
    return "error";
  }
};

const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const sendMessage = async (name, email, to) => {
  const paramsData = {
    service_id: `service_${PARAM1}`,
    template_id: `template_${PARAM2}`,
    user_id: `user_${PARAM3}`,
    template_params: {
      from_name: name,
      to_name: to,
      to_email: email,
      message: "Test wiadomości",
    },
  };

  const headers = {
    "Content-Type": "application/json",
  };
  const data = JSON.stringify(paramsData);
  const response = await fetch(URL, {
    method: "POST",
    headers: headers,
    body: data,
  });

  console.log(response);
  if (!response.ok) {
    console.log("error!");
    return false;
  } else {
    const resData = response.statusText;
    return true;
  }
};
