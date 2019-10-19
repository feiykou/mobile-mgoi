function setScrollTop(top=0){
  if(document.documentElement){
    document.documentElement.scrollTop = top
  } else {
    document.body.scrollTop = top
  }
}

export default {
  inserted: function(el, binding) {
      el.onclick = function() {
        if(process.client){
          console.log(11111)
          console.log(el)
          let total;
          if (binding.value == 0) {
              total = 0;
          } else {
              total = document.getElementById(`anchor-${binding.value}`).offsetTop - 62;
          }
          let distance = document.documentElement.scrollTop || document.body.scrollTop;
          let step = total / 50;
          if (total > distance) {
              (function smoothDown() {
                  if (distance < total) {
                      distance += step;
                      setScrollTop(distance)
                      // document.documentElement.scrollTop = distance;
                      setTimeout(smoothDown, 5);
                  } else {
                      setScrollTop(total)
                      // document.documentElement.scrollTop = total;
                  }
              })();
          } else {
              let newTotal = distance - total;
              step = newTotal / 50;
              (function smoothUp() {
                  if (distance > total) {
                      distance -= step;
                      setScrollTop(distance)
                      // document.documentElement.scrollTop = distance;
                      setTimeout(smoothUp, 5);
                  } else {
                      setScrollTop(total)
                      // document.documentElement.scrollTop = total;
                  }
              })();
          }

        }

      }
  }
}