import { URL, PARAM1, PARAM2, PARAM3 } from "../constants/values";

export const handlePersons = async (persons) => {
  persons.forEach((p) => {
    console.log("send to", p.email, p.name);
    //sendMessage(p.email, p.name)
  });
  const result = await resolveAfter2Seconds();
  return result
};

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("error");
    }, 2000);
  });
}

const sendMessage = async (to, toName) => {
  const paramsData = {
    service_id: `service_${PARAM1}`,
    template_id: `template_${PARAM2}`,
    user_id: `user_${PARAM3}`,
    template_params: {
      from_name: "Święty Mikołaj",
      to_name: toName,
      to_email: to,
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
  } else {
    const resData = response.statusText;
    console.log(resData);
  }
};
