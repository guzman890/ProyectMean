(function () {

  angular
    .module('App')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'Data'];
  function homeCtrl ($scope, Data) {
    var vm = this;
    console.log(window.blog);
    vm.pageHeader = {
      title: 'Blogs'
    };

    vm.getData = function (position) {
      Data.blogs()
        .success(function(data) {
          vm.data = { blogs: data };
        })
    };
  }

})();