const AppApi = (function AppApi() {
  const privateVar = 'private variable';
  console.log(privateVar);

  function publicApi() {
    console.log('This is a public api method!');
  }

  return {
    public: publicApi,
  };
})();

export default AppApi;
