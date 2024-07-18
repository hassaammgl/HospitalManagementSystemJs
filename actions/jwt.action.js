import jsonwebtoken from "jsonwebtoken";

export const createJwt = (payload) => {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    algorithm: "RS384",
    expiresIn: "1d",
  });
};

export const verifyJwt = (payload) => {
  return jsonwebtoken.verify(payload, process.env.JWT_SECRET);
};
