import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // our own token
    const isCustomAuth = token.length < 500;

    let decodedData;
    // if is our own token
    decodedData = jwt.verify(token, secret);
    // get the user id
    req.userId = decodedData?.id;

    next(); // authorize next action
  } catch (error) {
    console.log(error);
  }
};

export default auth;
