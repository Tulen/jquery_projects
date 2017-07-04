class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = this.setupBoard();
  }

  bindEvents($target) {
      let pos = $target.attr("data-pos").split(',').map((el) => {return parseInt(el);});
      this.game.playMove(pos);
      if (this.game.board.grid[pos[0]][pos[1]] === 'x') {
        $target.css({"background-image":"url(https://s-media-cache-ak0.pinimg.com/originals/92/32/5c/92325cda58adb047c3215ef092874fb7.jpg)"});
        $target.css({"background-size": "contain"});
      } else {
        $target.css({"background-image":"url(https://s-media-cache-ak0.pinimg.com/originals/30/ba/fc/30bafc7f01bac319a00a8db62ed944e3.jpg)"});
        $target.css({"background-size": "contain"});
      }
      if (this.winCheck()) {
        $(".ttt").hide();
        if (this.winCheck()=== "x") {
          $(".container").append(`<div id="xWin" class="text-center">Quokka, has won!</div>`);
        } else {
          $(".container").append(`<div id="yWin" class="text-center">Sparky, has won!</div>`);
        }
      }
      else if (this.game.isOver()) {
        $(".ttt").hide();
        $(".container").append("<h1>:( NO ONE WINS</h1>");
      }
  }
  winCheck() {
    return this.game.winner();
  }

  makeMove($square) {
    $('.ttt ul li').click((e) => {
      let $target = $(e.target);
      $target.attr('id','symbols');
      this.bindEvents($target);
    });
  }

  setupBoard() {
    $('.ttt').append("<ul></ul>");
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        $('.ttt ul').append(`<li data-pos=${[row,col]}></li>`);
      }
    }
  }
}

module.exports = View;
