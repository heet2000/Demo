const  usersdata=[
    {
        id : "1",
        GameState : {
            bet : "bet",
            "init" : "init",
            "userTurn" : "user1Turn"
        },
        "userCards" : [],
        "userScore" : "20",
        "userCount" : "0",
        "balance" : "1000",
        "bet" : "0",
        message : {
            bet : "Place a Bet!",
            "hitStand" : "Hit or Stand?",
            "bust" : "Bust!",
            "userWin" : "User1 Win!",    
            "dealerWin" : "Dealer Wins!",
            "tie" : "Tie!"
        },
        "buttonState" : "false",
        "deal":"user1"
    },
    {
        "id" : "2",
        "GameState" : {
            "bet" : "bet",
            "init" : "init",
            "userTurn" : "user2Turn"
        },
        "userCards" : [
            {
                "value": "A",
                "suit": "spades"
            },
            {
                "value": "A",
                "suit": "diamonds"
            }
        ],
        "userScore" : "20",
        "userCount" : "0",
        "balance" : "1000",
        "bet" : "0",
        "message" : {
            "bet" : "Place a Bet!",
            "hitStand" : "Hit or Stand?",
            "bust" : "Bust!",
            "userWin" : "User2 Win!",    
            "dealerWin" : "Dealer Wins!",
            "tie" : "Tie!"
        },
        "buttonState" : {
            "hitDisabled": "false",
            "standDisabled": "false",
            "resetDisabled": "true"
        },
        "deal":"user2"
    },
    {
        "id" : "3",
        "GameState" : {
            "bet" : "bet",
            "init" : "init",
            "user3Turn" : "user3Turn"
        },
        "userCards" : [
            {
                "value": "A",
                "suit": "spades"
            },
            {
                "value": "A",
                "suit": "diamonds"
            }
        ],
        "userScore" : "20",
        "userCount" : "0",
        "balance" : "1000",
        "bet" : "0",
        "message" : {
            "bet" : "Place a Bet!",
            "hitStand" : "Hit or Stand?",
            "bust" : "Bust!",
            "userWin" : "User3 Win!",    
            "dealerWin" : "Dealer Wins!",
            "tie" : "Tie!"
        },
        "buttonState" : "false",
        "deal":"user3"
    },
    {
        "id" : "4",
        "GameState" : {
            "bet" : "bet",
            "init" : "init",
            "user4Turn" : "user4Turn"
        },
        "userCards" : [
            {
                "value": "A",
                "suit": "spades"
            },
            {
                "value": "A",
                "suit": "diamonds"
            }
        ],
        "userScore" : "20",
        "userCount" : "0",
        "balance" : "1000",
        "bet" : "0",
        "message" : {
            "bet" : "Place a Bet!",
            "hitStand" : "Hit or Stand?",
            "bust" : "Bust!",
            "userWin" : "User4 Win!",    
            "dealerWin" : "Dealer Wins!",
            "tie" : "Tie!"
        },
        "buttonState" : "false",
        "deal":"user4"
    }
]

export default usersdata;