import * as data from './secrets.json';

const CLIENT_ID = data.client_ID;
const CLIENT_SECRET = data.client_secret;
const GRANT_TYPE = 'client_credentials';

const BASE_URL = 'https://api.lufthansa.com';
const AUTH_URL = `${BASE_URL}/v1/oauth/token`;
const AIRPORTS_URL = `${BASE_URL}/v1/mds-references/airports`;

async function getAccessToken() {
  const body = new URLSearchParams();

  body.append('client_id', CLIENT_ID);
  body.append('client_secret', CLIENT_SECRET);
  body.append('grant_type', GRANT_TYPE);

  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!response.ok) {
    throw Error();
  }

  const result = await response.json();

  return result;
}

export async function getAirports() {
  const authResponse = await getAccessToken();

  const response = await fetch(AIRPORTS_URL, {
    method: 'GET',
    headers: {
      Authorization: `${authResponse.token_type} ${authResponse.access_token}`,
    },
  });

  if (!response.ok) {
    throw Error();
  }

  const result = await response.json();

  return result;
}

// import { getAirports } from '../api/airports';

// const [error, setError] = useState();
// const [airports, setAirports] = useState();
// useEffect(() => {
//   getAirports()
//     .then((res) => setAirports(res))
//     .catch((err) => setError(err));
// }, []);

// if (!airports && !error) {
//   return <div>Loading</div>;
// }

// if (error) {
//   return <div>Sorry, there has been an error</div>;
// }
