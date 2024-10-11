
// Router - POST Request to the router
// Body includes the link
export const tinyUrl = (req, res, next) => {
  console.log(req.body);

  res.send("Good response is send back")
}
