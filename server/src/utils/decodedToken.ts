import { decode } from "jsonwebtoken";

 export async function handelDecodeJwt(token:string) {
  const decodedJwt = decode(token, { complete: true });
  console.log({decodedJwt})
  return decodedJwt;
}

