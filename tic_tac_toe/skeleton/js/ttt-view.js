class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = this.setupBoard();
  }

  bindEvents() {
    $('.ttt ul li').click(this.game.prototype.playMove());
  }

  makeMove($square) {
    $('.ttt ul li').click((e) => {
      let $target = $(e.target);
      $target.css({"background-color": "white"});
    });
  }

  setupBoard() {
    $('.ttt').append("<ul></ul>");
    for (let i = 0; i < 9; i++) {
      $('.ttt ul').append("<li> test </li>");
    }
  }
}

module.exports = View;
