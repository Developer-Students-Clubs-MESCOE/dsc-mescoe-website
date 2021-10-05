const config = {
  mongoURI: `mongodb+srv://admin:${process.env.DB_PASS}@dsc.xen2d.gcp.mongodb.net/dsc-website?retryWrites=true&w=majority`
};

module.exports = config