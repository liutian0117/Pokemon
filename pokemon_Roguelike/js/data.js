const candidateArr = [
  {
    "name": "水晶",
    "profession": "龙吟"
  },
  {
    "name": "饼饼大王",
    "profession": "血河"
  },
  {
    "name": "脆薯饼",
    "profession": "素问"
  },
  {
    "name": "心血",
    "profession": "玄机"
  },
  {
    "name": "冰冷心事"
  },
  {
    "name": "点心",
    "profession": "素问"
  },
  {
    "name": "小智",
    "profession": "九灵"
  },
  {
    "name": "美纳斯",
    "profession": "碎梦"
  },
  {
    "name": "小精灵",
    "profession": "玄机"
  },
  {
    "name": "小海狮",
    "profession": "九灵"
  },
  {
    "name": "团呢",
    "profession": "素问"
  },
  {
    "name": "温涟",
    "profession": "玄机"
  },
  {
    "name": "救救桃栀",
    "profession": "龙吟"
  },
  {
    "name": "小水晶",
    "profession": "龙吟"
  },
  {
    "name": "尔棠",
    "profession": "素问"
  },
  {
    "name": "相处",
    "profession": "九灵"
  },
  {
    "name": "暮冬",
    "profession": "碎梦"
  },
  {
    "name": "秋雨萧萧",
    "profession": "玄机"
  },
  {
    "name": "美景",
    "profession": "九灵"
  },
  {
    "name": "荔枝",
    "profession": "九灵"
  },
  {
    "name": "司徒白凝",
    "profession": "素问"
  },
  {
    "name": "小冰冷心事",
    "profession": "碎梦"
  },
  {
    "name": "淹没",
    "profession": "素问"
  },
  {
    "name": "呼酱",
    "profession": "血河"
  },
  {
    "name": "秋沨",
    "profession": "玄机"
  },
  {
    "name": "伏特加",
    "profession": "素问"
  },
  {
    "name": "卡拉卡拉",
    "profession": "血河"
  },
  {
    "name": "一昂",
    "profession": "神相"
  },
  {
    "name": "无敌挖掘机",
    "profession": "素问"
  },
  {
    "name": "无敌泥头车",
    "profession": "神相"
  },
  {
    "name": "又眠",
    "profession": "素问"
  },
  {
    "name": "与醉",
    "profession": "铁衣"
  },
  {
    "name": "哈克龙",
    "profession": "九灵"
  },
  {
    "name": "5",
    "profession": "玄机"
  },
  {
    "name": "妮蔻",
    "profession": "素问"
  },
  {
    "name": "烂命华",
    "profession": "九灵"
  },
  {
    "name": "南风",
    "profession": "碎梦"
  },
  {
    "name": "景宁",
    "profession": "血河"
  },
  {
    "name": "喷嚏熊",
    "profession": "铁衣"
  },
  {
    "name": "丸梓",
    "profession": "素问"
  },
  {
    "name": "夏有枫",
    "profession": "玄机"
  },
  {
    "name": "恋雨季",
    "profession": "潮光"
  },
  {
    "name": "槿屿",
    "profession": "玄机"
  },
  {
    "name": "遥遥书",
    "profession": "神相"
  },
  {
    "name": "碎梦王子",
    "profession": "碎梦"
  },
  {
    "name": "哥哥你看她",
    "profession": "碎梦"
  },
  {
    "name": "阿亓",
    "profession": "素问"
  },
  {
    "name": "驱散",
    "profession": "潮光"
  },
  {
    "name": "心软",
    "profession": "素问"
  },
  {
    "name": "石矶娘娘",
    "profession": "素问"
  },
  {
    "name": "莓铃",
    "profession": "潮光"
  },
  {
    "name": "小诙谐",
    "profession": "神相"
  },
  {
    "name": "虽寒",
    "profession": "龙吟"
  },
  {
    "name": "一夜",
    "profession": "玄机"
  },
  {
    "name": "小饼干",
    "profession": "素问"
  },
  {
    "name": "小杨颖",
    "profession": "素问"
  },
  {
    "name": "凝视",
    "profession": "素问"
  },
  {
    "name": "浮海",
    "profession": "血河"
  },
  {
    "name": "退订",
    "profession": "九灵"
  },
  {
    "name": "人欺",
    "profession": "潮光"
  },
  {
    "name": "江二",
    "profession": "潮光"
  },
  {
    "name": "小羊墨墨",
    "profession": "神相"
  },
  {
    "name": "柳清",
    "profession": "九灵"
  },
  {
    "name": "赫赫",
    "profession": "潮光"
  },
  {
    "name": "鸢蓝",
    "profession": "九灵"
  },
  {
    "name": "臣服",
    "profession": "血河"
  },
  {
    "name": "计白",
    "profession": "碎梦"
  },
  {
    "name": "鞭策",
    "profession": "碎梦"
  },
  {
    "name": "不满",
    "profession": "九灵"
  },
  {
    "name": "言诉",
    "profession": "碎梦"
  },
  {
    "name": "海文",
    "profession": "潮光"
  },
  {
    "name": "赤发白雪",
    "profession": "潮光"
  },
  {
    "name": "社恐碎梦",
    "profession": "龙吟"
  },
  {
    "name": "拿铁",
    "profession": "玄机"
  },
  {
    "name": "梦魇魇",
    "profession": "玄机"
  },
  {
    "name": "崩塌",
    "profession": "碎梦"
  },
  {
    "name": "旅树",
    "profession": "碎梦"
  },
  {
    "name": "墨风",
    "profession": "铁衣"
  },
  {
    "name": "净化",
    "profession": "铁衣"
  },
  {
    "name": "皮卡丘",
    "profession": "血河"
  },
  {
    "name": "心脏",
    "profession": "血河"
  },
  {
    "name": "云绵绵",
    "profession": "素问"
  },
  {
    "name": "别被情绪左右",
    "profession": "碎梦"
  },
  {
    "name": "堕落",
    "profession": "碎梦"
  },
  {
    "name": "赴小辰",
    "profession": "碎梦"
  },
  {
    "name": "南山瑶",
    "profession": "素问"
  },
  {
    "name": "纯甜",
    "profession": "素问"
  },
  {
    "name": "银色飞行船",
    "profession": "神相"
  },
  {
    "name": "这世界太多雨季",
    "profession": "碎梦"
  },
  {
    "name": "桃栀酒酒",
    "profession": "九灵"
  },
  {
    "name": "碳烤橘子",
    "profession": "玄机"
  },
  {
    "name": "莫清雨",
    "profession": "九灵"
  },
  {
    "name": "迟烟烟",
    "profession": "神相"
  },
  {
    "name": "庄周",
    "profession": "铁衣"
  },
  {
    "name": "柚丸梅丸",
    "profession": "铁衣"
  },
  {
    "name": "泠别",
    "profession": "素问"
  },
  {
    "name": "晚轻",
    "profession": "素问"
  },
  {
    "name": "猫丞丞",
    "profession": "潮光"
  },
  {
    "name": "绯村剑心",
    "profession": "龙吟"
  },
  {
    "name": "袅滋十米远",
    "profession": "铁衣"
  }
]