
// Router - POST Request to the router
// Body includes the link

const TINYURL = `https://api.tinyurl.com/create?api_token=${process.env.TINYURL_API}`



const getShortURL = async (user_url) => {

  try {
    const response = await fetch(TINYURL, {

      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${process.env.TINYURL_API}`
      },
      body:JSON.stringify({
        "url": "",
        "domain": "tinyurl.com",
        "alias": "zainanurl",
        "description": "string"
      })
      }
    )
    const data = await response.json();
    if (response.ok){
      return data;
    }

    const newError = new Error(data.errors)
    newError.status = response.status
    return newError
  } catch (error) {
    return error
  }
}

export const tinyUrl = async (req, res, next) => {
  if (!req.body.link){
    const error = new Error("You cannot leave the URL empty.")
    error.status = 400;
    return next(error)
  }
  const response = await getShortURL(req.body.link)

  if(response instanceof Error){
    return next(response);
  }
}
