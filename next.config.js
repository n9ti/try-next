module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } }
    }
  }
}
