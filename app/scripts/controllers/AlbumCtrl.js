(function() {
     function AlbumCtrl() {
         this.albumData.push(angular.copy(albumPicasso));
         console.log(this.albumData)
}
    
     angular
         .module('blocJams')
         .controller('AlbumCtrl', AlbumCtrl);
 })();