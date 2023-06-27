module.exports = function() {
  if (process.env.DEVCONTAINER) {
      baseurl = "/kbsite";
  } else {
      baseurl = "";
  }

    return {
      baseurl: this.baseurl
    };
  };