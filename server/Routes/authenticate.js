import jwt from 'jsonwebtoken';

export const authenticatedMiddleware = async (req, res, next) => {
  const bearerToken = req.headers['authorization'];

  const token = bearerToken && bearerToken.split(' ')[1];

  // if there is no token, return 401
  if (token === null) return res.sendStatus(401);

  const keycloakKey = process.env.KEYCLOAK_PUBLIC_KEY;
  const publicKey = `-----BEGIN PUBLIC KEY-----\n${keycloakKey}\n-----END PUBLIC KEY-----`;

  try {
    const decodedToken = jwt.verify(token, publicKey, { algorithms: ['RS256'] });

    req.user = {
      email: decodedToken.email,
    };

    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}
