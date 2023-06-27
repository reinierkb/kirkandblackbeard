module.exports = function() {

  const env = process.env;

  if (env.CODESPACES) {
      baseurl = "https://" + env.CODESPACE_NAME + "-8080." + env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN + "/" + env.RepositoryName;
  } else {
      baseurl = "";
  }

    return {
      baseurl: this.baseurl
    };
  };