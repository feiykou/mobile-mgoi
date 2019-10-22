export default function (ele, fn){
  var startTx, startTy;
  var endTx, endTy;
  ele.addEventListener( 'touchstart', function( e ){
    var touches = e.touches[0];
    startTx = touches.clientX;
    startTy = touches.clientY;
  }, false );

  ele.addEventListener( 'touchend', function( e ){
    var touches = e.changedTouches[0];
    endTx = touches.clientX;
    endTy = touches.clientY;
    if( Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6 ){
        fn(e);
    }
  }, false );
}
