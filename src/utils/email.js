import { URL, PARAM1, PARAM2, PARAM3 } from "../constants/values";

class Ticket {
  constructor(name, email, to, fromId, toId) {
    this.name = name;
    this.email = email;
    this.to = to;
    this.fromId = fromId;
    this.toId = toId;
  }
}

export const handlePersons = async (persons) => {
  if (!persons || persons.length < 2) {
    return mapResult(false);
  }
  const validatedPersons = persons.filter(p => p.name.length > 0 && p.email.length > 0)
  if (!validatedPersons || validatedPersons.length < 2) {
    return mapResult(false);
  }

  let result = true;
  const tickets = draw(validatedPersons);
  if (!tickets) {
    return undefined
  }
  for (const ticket of tickets) {
    console.log("Ticket from ", ticket.name, ticket.email, " to ", ticket.to);
    const messageRes = await sendMessage(ticket.name, ticket.email, ticket.to);
    result &= messageRes;
    console.log("send result", messageRes);
  }
  return mapResult(result);
};

export const draw = (allPersons) => {
  const persons = [...allPersons];
  const tickets = [...allPersons];
  const result = [];
  do {
    const person = persons.shift();
    let toDraw = tickets.filter((i) => i.id !== person.id);
    if (toDraw.length === 0) {
      console.log('error - try again')
      return undefined
    }
    console.log('draw for: ', person.name, toDraw.map(d => d.name))
    if (toDraw.length > 1) {
      const ticketPairId = result.find(t => t.toId === person.id)?.fromId
      if (Number.isInteger(ticketPairId)) {
        toDraw = toDraw.filter(i => i.id !== ticketPairId)
        console.log('extra filter for', person.name, toDraw.map(d => d.name))
      }      
    }
    const ticket = toDraw[Math.floor(Math.random() * toDraw.length)];
    const ticketIndex = tickets.findIndex((i) => i.id === ticket.id);
    tickets.splice(ticketIndex, 1);
    result.push(new Ticket(person.name, person.email, ticket.name, person.id, ticket.id));
  } while (persons.length > 0);
  console.log(result.map(r => `${r.name} -> ${r.to}`).join('\n'))
  return result;
};

const mapResult = (result) => {
  if (result) {
    return "ok";
  } else {
    return "error";
  }
};

const sendMessage = async (name, email, to) => {
  const paramsData = {
    service_id: `service_${PARAM1}`,
    template_id: `template_${PARAM2}`,
    user_id: `user_${PARAM3}`,
    template_params: {
      from_name: name,
      to_name: to,
      to_email: email
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
    return true;
  }
};
