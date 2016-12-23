(function() {

  angular
    .module('App')
    .service('Data', Data);

  Data.$inject = ['$http'];
  function Data ($http) {
    var blogs = function () {
      return $http.get('/api/blogs');
    };

    var blogById = function (blogid) {
      return $http.get('/api/blogs/' + blogid);
    };

    return {
      blogs : blogs,
      blog : blogById,
    };
  }

})();