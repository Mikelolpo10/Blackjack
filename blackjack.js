let cardTotal = 52
    const suits = ["♠", "♥", "♦", "♣"]
    let cardRank = [2,3,4,5,6,7,8,9,10,"ace","jack","queen","king"]
    let deck = []
    for(let n of suits) {
      for(let r of cardRank) {
        let value = r

        if(typeof value !== "number") {
          value = r === "ace" ? [1,11] : 10
        }

        deck.push({
          suit: n,
          rank: r,
          value: value
        })
      }
    }

    let playerCard = []
    let playerCard2 = []
    let dealerCard = []

    function checkBust() {  
      if(playerCard > 21) {
        console.log(`Player bust`)
      } else if(dealerCard > 21) {
        console.log(`Dealer bust`)
      } 
    }

    function getCard(count, target) {
      for(let i = 0; i < count; i++) {
      const randomNum = Math.floor((Math.random() * cardTotal)) 
      let cardDealt = deck[randomNum]
      target.push(cardDealt)
      deck.splice(randomNum, 1)
      cardTotal--
      }
      checkBust()
    }

    getCard(2, playerCard)
    getCard(2, dealerCard)
    checkBust()