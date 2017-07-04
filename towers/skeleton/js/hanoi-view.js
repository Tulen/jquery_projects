class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      this.$el.append("<ul>Tower:</ul>");
    }
    for (let i = 0; i < 3; i++) {
      $('.hanoi ul:first').append(`<li>Quokka${this.game.towers[0][i]}</li>`);
    }
  }

  render() {

  }
}

module.exports = View;
