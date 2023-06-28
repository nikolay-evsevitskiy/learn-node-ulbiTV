module.exports = (baseUrl) => (req, res) => {
    const parsedUrl = new URL(req.url, baseUrl)
    const params = {}
    parsedUrl.searchParams.forEach((value, key) => params[key] = value)

    req.pathName = parsedUrl.pathname;
    req.params = params;
}

