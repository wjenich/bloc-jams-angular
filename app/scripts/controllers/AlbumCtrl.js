(function() {
      function AlbumCtrl(Fixtures, SongPlayer) {
          this.albumData = Fixtures.getAlbum();
          this.songPlayer = SongPlayer;
         console.log(this.albumData)
}
    
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();