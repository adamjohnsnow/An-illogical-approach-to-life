describe('battle', function(){

  beforeEach(function(){
    var player1 = {
      name: "Roy the Bus Driver",
      xp: 0,
      attack: 9,
      defence: 1,
      level: 1
    };

    var player2 = {
      name: "Bob the Builder",
      xp: 0,
      attack: 2,
      defence: 8,
      level: 1
    };

    battle = new Battle(player1, player2);

  })

  it('two players can enter a battle', function(){
    expect(battle.firstPlayer.name).toEqual("Roy the Bus Driver")
  })

  // it('players can attack each other', function(){
  //
  // })
})
