async function getProfileJson(ticket: string){
  const API_KEY = "1ddc4528883069a62ed5e8146d49bc14";
  try{
    const jsonResponse = await fetch(`https://financialmodelingprep.com/api/v3/profile/${ticket}?apikey=${API_KEY}`);
    const jsonData = await jsonResponse.json();
    return jsonData;
  }catch(error){
    console.log(error);
  }
}

export async function getProfileData(ticket:string){
  if(ticket !== ''){
    const data = await getProfileJson("AAPL");
    const profile = await data[0];
    return profile;
  }

  const data = await getProfileJson(ticket);
  const profile = await data[0];
  return profile;
}
