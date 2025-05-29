import random

# 奖池列表
prizes = [5]*50 + [10]*7 + [30]*2 + [128]*1
random.shuffle(prizes)

# 分档函数
def get_prize_level(amount):
    if amount <= 5:
        return "🎉谢谢参与"
    elif amount <= 10:
        return "☕瑞幸一杯"
    elif amount <= 68:
        return "🏅月卡一张"
    else:
        return "🏆狗运王"

# 抽奖
winners = []
print("抽奖开始！共60人~\n")

for i in range(1, 61):
    prize = prizes.pop()
    level = get_prize_level(prize)
    print(f"第 {i} 位中奖者：获得 {prize} 元！ {level}")
    winners.append(prize)

print("\n抽奖结束啦！")
print(f"总金额发放：{sum(winners)} 元") 
