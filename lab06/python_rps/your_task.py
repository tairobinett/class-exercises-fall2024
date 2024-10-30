def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:
    if hand1 == "rock" and hand2 == "paper":
        return "Paper wins!"
    if hand1 == "paper" and hand2 == "rock":
        return "Paper wins!"

    if hand1 == "rock" and hand2 == "scissors":
        return "Rock wins!"
    if hand1 == "scissors" and hand2 == "rock":
        return "Rock wins!"

    if hand1 == "scissors" and hand2 == "paper":
        return "Scissors wins!"
    if hand1 == "paper" and hand2 == "scissors":
        return "Scissors wins!"

    if hand1 == "rock" and hand2 == "rock":
        return "Draw!"
    if hand1 == "paper" and hand2 == "paper":
        return "Draw!"
    if hand1 == "scissors" and hand2 == "scissors":
        return "Draw!"

    else:
        return "Invalid"
