/**
 * pos = part of speech
 */

const vocabulary = {'自然地理': {'label': '自然地理', 'words': [[{'id': 1, 'word': 'atmosphere', 'pos': 'n.', 'meaning': '大气层；氛围', 'example': 'The approaching examination created a tense atmosphere on the campus', 'extra': '-'}, {'id': 2, 'word': 'hydrosphere', 'pos': 'n.', 'meaning': '水圈；大气中的水汽', 'example': "All the water in the earth's surface is included in the hydrosphere", 'extra': '-'}, {'id': 3, 'word': 'lithosphere', 'pos': 'n.', 'meaning': '岩石圈', 'example': "The lithosphere and the hydrosphere together form the earth's surface", 'extra': '-'}], [{'id': 4, 'word': 'oxygen', 'pos': 'n.', 'meaning': '氧气', 'example': '-', 'extra': '-'}, {'id': 5, 'word': 'oxide', 'pos': 'n.', 'meaning': '氧化物', 'example': '-', 'extra': '-'}, {'id': 6, 'word': 'carbon dioxied', 'pos': 'n.', 'meaning': '二氧化碳', 'example': '-', 'extra': '-'}, {'id': 7, 'word': 'hydrogen', 'pos': 'n.', 'meaning': '氢气', 'example': '-', 'extra': '-'}], [{'id': 8, 'word': 'core', 'pos': 'n.', 'meaning': '中心；核心；地核', 'example': '-', 'extra': '-'}, {'id': 9, 'word': 'crust', 'pos': 'n.', 'meaning': '地壳；外壳', 'example': 'The crust on the snow was thick enough for to walk on it', 'extra': '-'}, {'id': 10, 'word': 'mantle', 'pos': 'n./v.', 'meaning': '地幔；斗篷；披风；覆盖', 'example': 'Parents often use mantles for their babies to keep warm', 'extra': '-'}], [{'id': 11, 'word': 'longitude', 'pos': 'n.', 'meaning': '经度', 'example': '-', 'extra': '-'}, {'id': 12, 'word': 'latitude', 'pos': 'n.', 'meaning': '维度', 'example': '-', 'extra': '-'}, {'id': 13, 'word': 'horizon', 'pos': 'n.', 'meaning': '地平线；眼界；见识', 'example': '-', 'extra': '-'}, {'id': 14, 'word': 'altitude', 'pos': 'n.', 'meaning': '海拔；高度', 'example': '-', 'extra': '-'}], [{'id': 15, 'word': 'disaster', 'pos': 'n.', 'meaning': '灾难', 'example': 'There was a great flood disaster in East China', 'extra': 'a disaster film/movie 灾难片'}, {'id': 16, 'word': 'mishap', 'pos': 'n.', 'meaning': '小灾难', 'example': 'A mishap prevented him from attending the routine company meeting', 'extra': '-'}, {'id': 17, 'word': 'catastrophic', 'pos': 'adj.', 'meaning': '灾难性的', 'example': 'If the forecast had been wrong, the consequences could have ben catastrophic', 'extra': '-'}, {'id': 18, 'word': 'calamity', 'pos': 'n.', 'meaning': '灾难；不幸的事', 'example': 'A hurricane would be a calamity for this low-lying coastal region', 'extra': 'cause a calamity 酿成灾祸'}], [{'id': 19, 'word': 'endanger', 'pos': 'v.', 'meaning': '使遭受危险；危及', 'example': 'If you are work hard without reset, you will endanger your health', 'extra': 'endangered adj./濒临灭绝'}, {'id': 20, 'word': 'jeopardise', 'pos': 'v.', 'meaning': '=jeopardize 危害；危及', 'example': 'If you are rude to the boss, your chances of success may be jeopardised', 'extra': "jeopardise sb.'s life 危机某人生命"}, {'id': 21, 'word': 'destructive', 'pos': 'adj.', 'meaning': '破坏性的；有害的', 'example': 'Jealousy is an extremely destructive emotion', 'extra': '-'}], [{'id': 22, 'word': 'El Nino', 'pos': 'n.', 'meaning': '厄尔尼诺现象', 'example': '-', 'extra': '-'}, {'id': 23, 'word': 'greenhouse', 'pos': 'n.', 'meaning': '温室；暖房', 'example': '-', 'extra': '-'}, {'id': 24, 'word': 'phenomenon', 'pos': 'n.', 'meaning': '现象', 'example': 'Snow is an almost unknown phenomenon in Egypt', 'extra': '复数形式：phenomena；a natural phenomenon 自然现象；a social phenomenon 社会现象'}], [{'id': 25, 'word': 'pebble', 'pos': 'n.', 'meaning': '鹅卵石', 'example': '-', 'extra': '-'}, {'id': 26, 'word': 'magnet', 'pos': 'n.', 'meaning': '磁铁；吸铁石', 'example': 'He picked all the pins up with a magnet', 'extra': 'magnetic adj./词的，有磁性的；有吸引力的'}, {'id': 27, 'word': 'ore', 'pos': 'n.', 'meaning': '矿石；矿', 'example': '-', 'extra': '-'}, {'id': 28, 'word': 'mineral', 'pos': 'n.', 'meaning': '矿物；矿物质；矿场', 'example': '-', 'extra': '-'}], [{'id': 29, 'word': 'marble', 'pos': 'n.', 'meaning': '大理石', 'example': '-', 'extra': '-'}, {'id': 30, 'word': 'quartz', 'pos': 'n.', 'meaning': '石英', 'example': '-', 'extra': '-'}, {'id': 31, 'word': 'granite', 'pos': 'n.', 'meaning': '花岗岩', 'example': '-', 'extra': '-'}], [{'id': 32, 'word': 'gust', 'pos': 'n.', 'meaning': '一整狂风；（情感的）迸发', 'example': '-', 'extra': '-'}, {'id': 33, 'word': 'breeze', 'pos': 'n.', 'meaning': '微分；和风', 'example': '-', 'extra': '-'}, {'id': 34, 'word': 'monsoon', 'pos': 'n.', 'meaning': '季风；雨季', 'example': '-', 'extra': '-'}, {'id': 35, 'word': 'gale', 'pos': 'n.', 'meaning': '大风', 'example': '-', 'extra': '-'}], [{'id': 36, 'word': 'hurricane', 'pos': 'n.', 'meaning': '飓风；暴风', 'example': '-', 'extra': '-'}, {'id': 37, 'word': 'tornado', 'pos': 'n.', 'meaning': '龙卷风', 'example': '-', 'extra': '-'}, {'id': 38, 'word': 'typhoon', 'pos': 'n.', 'meaning': '台风', 'example': '-', 'extra': '-'}], [{'id': 39, 'word': 'volcano', 'pos': 'n.', 'meaning': '火山', 'example': '-', 'extra': '-'}, {'id': 40, 'word': 'erupt', 'pos': 'v.', 'meaning': '爆发；喷发；（斑疹等）突然出现', 'example': '-', 'extra': '-'}, {'id': 41, 'word': 'magma', 'pos': 'n.', 'meaning': '岩浆', 'example': '-', 'extra': '-'}, {'id': 42, 'word': 'themodynamic', 'pos': 'adj.', 'meaning': '热力的；热力学的', 'example': '-', 'extra': '-'}], [{'id': 43, 'word': 'smog', 'pos': 'n.', 'meaning': '烟雾；雾霾', 'example': '-', 'extra': '-'}, {'id': 44, 'word': 'fume', 'pos': 'n./v.', 'meaning': '（难闻有害的）烟，气体', 'example': 'Petrol fumes from cars are poisoning the atmosphere', 'extra': '-'}, {'id': 45, 'word': 'mist', 'pos': 'n.', 'meaning': '薄雾；水汽；使视线模糊的东西', 'example': '-', 'extra': '-'}], [{'id': 46, 'word': 'tsunami', 'pos': 'n.', 'meaning': '海啸', 'example': '-', 'extra': '-'}, {'id': 47, 'word': 'drought', 'pos': 'n.', 'meaning': '干旱；旱灾', 'example': '-', 'extra': '-'}, {'id': 48, 'word': 'flooding', 'pos': 'n.', 'meaning': '洪水泛滥', 'example': '-', 'extra': '-'}, {'id': 49, 'word': 'torrent', 'pos': 'n.', 'meaning': '激流；洪流', 'example': '-', 'extra': '-'}], [{'id': 50, 'word': 'earthquake', 'pos': 'n.', 'meaning': '地震', 'example': '-', 'extra': '-'}, {'id': 51, 'word': 'seismic', 'pos': 'adj.', 'meaning': '地震的；地震引起的', 'example': '-', 'extra': '-'}, {'id': 52, 'word': 'avalanche', 'pos': 'n.', 'meaning': '雪崩', 'example': '-', 'extra': '-'}], [{'id': 53, 'word': 'terrian', 'pos': 'n.', 'meaning': '地形', 'example': '-', 'extra': '-'}, {'id': 54, 'word': 'landscape', 'pos': 'n./v.', 'meaning': '风景；地貌；对...进行景观美化', 'example': '-', 'extra': '-'}, {'id': 55, 'word': 'continent', 'pos': 'n.', 'meaning': '大陆；洲', 'example': '-', 'extra': '-'}], [{'id': 56, 'word': 'cave', 'pos': 'n.', 'meaning': '洞穴；山洞', 'example': '-', 'extra': '-'}, {'id': 57, 'word': 'cliff', 'pos': 'n.', 'meaning': '悬崖；峭壁', 'example': '-', 'extra': '-'}, {'id': 58, 'word': 'glacier', 'pos': 'n.', 'meaning': '冰川；冰河', 'example': '-', 'extra': '-'}, {'id': 59, 'word': 'swamp', 'pos': 'n.', 'meaning': '沼泽；湿地', 'example': '-', 'extra': '-'}], [{'id': 60, 'word': 'delta', 'pos': 'n.', 'meaning': '三角洲', 'example': '-', 'extra': '-'}, {'id': 61, 'word': 'plain', 'pos': 'n./adj.', 'meaning': '平原；简朴的；明白的', 'example': '-', 'extra': '-'}, {'id': 62, 'word': 'plateau', 'pos': 'n.', 'meaning': '高原', 'example': '-', 'extra': '-'}, {'id': 63, 'word': 'oasis', 'pos': 'n.', 'meaning': '绿洲；宜人之地', 'example': '-', 'extra': '-'}], [{'id': 64, 'word': 'globe', 'pos': 'n.', 'meaning': '球体；地球仪', 'example': '-', 'extra': '-'}, {'id': 65, 'word': 'hemisphere', 'pos': 'n.', 'meaning': '半球', 'example': '-', 'extra': '-'}, {'id': 66, 'word': 'equator', 'pos': 'n.', 'meaning': '赤道', 'example': '-', 'extra': '-'}], [{'id': 67, 'word': 'arctic', 'pos': 'adj./n.', 'meaning': '北极的；极冷的；北极地区；北极', 'example': '-', 'extra': '-'}, {'id': 68, 'word': 'Antarctic', 'pos': 'adj./n.', 'meaning': '南极的；南极地区；南极洲', 'example': '-', 'extra': '-'}, {'id': 69, 'word': 'pole', 'pos': 'n.', 'meaning': '（地）极；截然相反的两极之一', 'example': 'English is spoken from pole to pole', 'extra': 'the South Pole 南极'}, {'id': 70, 'word': 'polar', 'pos': 'adj.', 'meaning': '极地的；近极地的；对立的', 'example': 'In these polar region, the balance of nature has already been disrupted', 'extra': 'a polar bear 北极熊；polarize v./使两极分化'}, {'id': 71, 'word': 'axis', 'pos': 'n.', 'meaning': '轴；轴线', 'example': "The earth's axis is the line between the North and South Poles", 'extra': '-'}], [{'id': 72, 'word': 'deteriorate', 'pos': 'v.', 'meaning': '恶化；变坏', 'example': '-', 'extra': '-'}, {'id': 73, 'word': 'aggravate', 'pos': 'v.', 'meaning': '加重；加剧；使恶化', 'example': '-', 'extra': '-'}, {'id': 74, 'word': 'degrade', 'pos': 'v.', 'meaning': '降解；降低...身份；使恶化；使退化', 'example': '-', 'extra': '-'}, {'id': 75, 'word': 'upgrade', 'pos': 'v.', 'meaning': '使升级；提高；改善', 'example': '-', 'extra': '-'}, {'id': 76, 'word': 'erode', 'pos': 'v.', 'meaning': '侵蚀；腐蚀', 'example': 'The waves erode the rocks on the shore', 'extra': 'erosion n./侵蚀；腐蚀'}], [{'id': 77, 'word': 'Mediterranean', 'pos': 'adj./n.', 'meaning': '地中海的；地中海地区的；地中海；地中海地区', 'example': '-', 'extra': '-'}, {'id': 78, 'word': 'Atlantic', 'pos': 'n.', 'meaning': '大西洋', 'example': '-', 'extra': '-'}, {'id': 79, 'word': 'pacific', 'pos': 'adj./n.', 'meaning': '平静的；平和的；太平洋的；太平洋', 'example': 'What a beautiful and pacific place this is', 'extra': 'pacify v./平息；安抚；使平静'}], [{'id': 80, 'word': 'ocean', 'pos': 'n.', 'meaning': '海洋；洋', 'example': 'These creatures live in the depth of the Pacific Ocean', 'extra': 'an ocean of/oceans of 大量'}, {'id': 81, 'word': 'marine', 'pos': 'adj./n.', 'meaning': '海洋的；海生的；海事的；水兵', 'example': 'It is true that a lot of people like marine plants as their food', 'extra': 'a marine product 海产品；船用品'}, {'id': 82, 'word': 'navigation', 'pos': 'n.', 'meaning': '航海；航行', 'example': 'Navigation is a game for brave people', 'extra': 'navigator n./航海家；领航员'}], [{'id': 83, 'word': 'gulf', 'pos': 'n.', 'meaning': '海湾', 'example': '-', 'extra': '-'}, {'id': 84, 'word': 'beach', 'pos': 'n.', 'meaning': '海滩；河滩', 'example': '-', 'extra': '-'}, {'id': 85, 'word': 'coast', 'pos': 'n.', 'meaning': '海岸；海滨', 'example': '-', 'extra': '-'}], [{'id': 86, 'word': 'shore', 'pos': 'n.', 'meaning': '（海、湖等大水域的）岸；滨', 'example': 'His ship pulled in to the shore at midnight', 'extra': '-'}, {'id': 87, 'word': 'tide', 'pos': 'n.', 'meaning': '趋势；潮流；潮汐', 'example': 'The gravitational attraction between the moon and the earth causes tides', 'extra': 'tidal adj./潮汐的。at low tide 退潮时，低潮时。Time and tide wait for no man 岁月不等人'}, {'id': 88, 'word': 'current', 'pos': 'n.', 'meaning': '水流；潮流；电流；气流', 'example': 'He was swept away by the current', 'extra': '-'}], [{'id': 89, 'word': 'brook', 'pos': 'n.', 'meaning': '小河；溪', 'example': '-', 'extra': '-'}, {'id': 90, 'word': 'stream', 'pos': 'n./v.', 'meaning': '小河；溪；流；流动；流出', 'example': '-', 'extra': '-'}, {'id': 91, 'word': 'source', 'pos': 'n.', 'meaning': '河的源头；根源', 'example': '-', 'extra': '-'}, {'id': 92, 'word': 'shallow', 'pos': 'adj.', 'meaning': '浅的；肤浅的；浅薄的', 'example': '-', 'extra': '-'}], [{'id': 93, 'word': 'superficial', 'pos': 'adj.', 'meaning': '表皮的；表层的', 'example': '-', 'extra': '-'}, {'id': 94, 'word': 'flat', 'pos': 'adj.', 'meaning': '平躺的；扁平的；单调的', 'example': '-', 'extra': '-'}, {'id': 95, 'word': 'smooth', 'pos': 'adj.', 'meaning': '光滑的；平稳的；流畅的', 'example': '-', 'extra': '-'}, {'id': 96, 'word': 'rough', 'pos': 'adj.', 'meaning': '粗糙的；粗略的', 'example': '-', 'extra': '-'}, {'id': 97, 'word': 'sandy', 'pos': 'adj.', 'meaning': '含沙的；铺满沙的', 'example': '-', 'extra': '-'}, {'id': 98, 'word': 'stony', 'pos': 'adj.', 'meaning': '石头的；多石的', 'example': '-', 'extra': '-'}], [{'id': 99, 'word': 'vertical', 'pos': 'adj.', 'meaning': '垂直的；直立的', 'example': '-', 'extra': '-'}, {'id': 100, 'word': 'steep', 'pos': 'adj.', 'meaning': '陡峭的', 'example': '-', 'extra': '-'}, {'id': 101, 'word': 'parallel', 'pos': 'n./adj./v.', 'meaning': 'parallel', 'example': '平行线；相似之处；平行的；与...相比；比得上', 'extra': '-'}, {'id': 102, 'word': 'narrow', 'pos': 'adj./n.', 'meaning': '狭窄的；有极限的', 'example': '-', 'extra': '-'}], [{'id': 103, 'word': 'Oceania', 'pos': 'n.', 'meaning': '大洋洲', 'example': '-', 'extra': '-'}, {'id': 104, 'word': 'mainland', 'pos': 'n.', 'meaning': '', 'example': '-', 'extra': '-'}, {'id': 105, 'word': 'peninsula', 'pos': 'n.', 'meaning': '半岛', 'example': '-', 'extra': '-'}], [{'id': 106, 'word': 'climate', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 107, 'word': 'weather', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 108, 'word': 'meteorology', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 109, 'word': 'mild', 'pos': 'adj.', 'meaning': '温和的；不严重的', 'example': '-', 'extra': '-'}, {'id': 110, 'word': 'heating', 'pos': 'n.', 'meaning': '供暖；暖气装置', 'example': '-', 'extra': '-'}, {'id': 111, 'word': 'moderate', 'pos': 'adj./v.', 'meaning': '适度的；温和的；中等的；使缓和', 'example': 'The wind was strong all day, but it moderated in the evening', 'extra': 'a moderate climate 温和的气候'}, {'id': 112, 'word': 'warm', 'pos': 'adj./v.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 113, 'word': 'thermal', 'pos': 'adj.', 'meaning': '热量的', 'example': '-', 'extra': '-'}, {'id': 114, 'word': 'tropics', 'pos': 'n.', 'meaning': '热带地区', 'example': '-', 'extra': '-'}, {'id': 115, 'word': 'arid', 'pos': 'adj.', 'meaning': '干燥的；干旱的；枯燥的', 'example': '-', 'extra': '-'}], [{'id': 116, 'word': 'moist', 'pos': 'adj.', 'meaning': '潮湿的；湿润的', 'example': '-', 'extra': '-'}, {'id': 117, 'word': 'damp', 'pos': 'adj.', 'meaning': '湿气重的；潮湿的', 'example': '-', 'extra': '-'}, {'id': 118, 'word': 'humid', 'pos': 'adj.', 'meaning': '潮湿的；湿热的', 'example': '-', 'extra': '-'}], [{'id': 119, 'word': 'snowy', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 120, 'word': 'frost', 'pos': 'n.', 'meaning': '霜；霜冻；严寒', 'example': '-', 'extra': '-'}, {'id': 121, 'word': 'hail', 'pos': 'n./v.', 'meaning': '冰雹；赞扬；招呼；下冰雹', 'example': '-', 'extra': '-'}, {'id': 122, 'word': 'thaw', 'pos': 'v./n.', 'meaning': '解冻；融解；融化；解冻时期', 'example': 'The sun thawed the ice and melted the snow', 'extra': 'thaw sth./out 使...解冻；shi...变暖'}], [{'id': 123, 'word': 'chill', 'pos': 'v./n.', 'meaning': '使变冷；使恐惧；寒冷；害怕', 'example': 'The bad news cast a chill over the whole family', 'extra': 'chilly adj./寒冷的；chill enthusiasm 使热情冷却'}, {'id': 124, 'word': 'freeze', 'pos': 'v./n.', 'meaning': '结冰；霜冻；严寒期', 'example': '-', 'extra': '-'}, {'id': 125, 'word': 'frigid', 'pos': 'adj.', 'meaning': '寒冷的', 'example': 'Hohhot is a frigid city in the winter', 'extra': 'the frigid zones 寒带'}, {'id': 126, 'word': 'tremble', 'pos': 'v./n.', 'meaning': '战栗；颤抖', 'example': '-', 'extra': '-'}, {'id': 127, 'word': 'shiver', 'pos': 'v.', 'meaning': '颤抖；哆嗦；发抖', 'example': 'She was shivered because she was worried and afraid', 'extra': 'shiver with cold 冻的发抖'}], [{'id': 128, 'word': 'thunder', 'pos': 'n./v.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 129, 'word': 'lightning', 'pos': 'n./v.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 130, 'word': 'stormy', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 131, 'word': 'downpour', 'pos': 'n.', 'meaning': '倾盆大雨', 'example': '-', 'extra': '-'}, {'id': 132, 'word': 'rainfall', 'pos': 'n.', 'meaning': '降雨量', 'example': '-', 'extra': '-'}, {'id': 133, 'word': 'sprinkle', 'pos': 'v./n.', 'meaning': '撒；下小雨；少量；小雨', 'example': "We've only had a sprinkles of rain recently", 'extra': '-'}, {'id': 134, 'word': 'rainbow', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 135, 'word': 'shower', 'pos': 'n.', 'meaning': '阵；阵雨；淋浴', 'example': 'The weatherman predicts showers this afternoon', 'extra': '-'}], [{'id': 136, 'word': 'Celsius', 'pos': 'adj./n.', 'meaning': '摄氏的；摄氏温度', 'example': '-', 'extra': '-'}, {'id': 137, 'word': 'temperature', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 138, 'word': 'forecast', 'pos': 'n./v.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 139, 'word': 'peak', 'pos': 'n./v.', 'meaning': '山峰；顶点；达到最大值', 'example': '-', 'extra': '-'}, {'id': 140, 'word': 'mount', 'pos': 'v./n.', 'meaning': '渐渐增加；爬上；登上；山', 'example': '-', 'extra': '-'}, {'id': 141, 'word': 'mountain', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 142, 'word': 'range', 'pos': 'n.', 'meaning': '山脉；范围', 'example': '-', 'extra': '-'}], [{'id': 143, 'word': 'ridge', 'pos': 'n./v.', 'meaning': '山脊；山脉；使隆起', 'example': '-', 'extra': '-'}, {'id': 144, 'word': 'slope', 'pos': 'v./n.', 'meaning': '倾斜；有坡度；山坡；斜坡', 'example': '-', 'extra': '-'}, {'id': 145, 'word': 'valley', 'pos': 'n.', 'meaning': '山谷；溪谷', 'example': '-', 'extra': '-'}, {'id': 146, 'word': 'hillside', 'pos': 'n.', 'meaning': '小山的山腰；山坡', 'example': '-', 'extra': '-'}, {'id': 147, 'word': 'overlook', 'pos': 'v.', 'meaning': '远眺；俯瞰；未注意到', 'example': 'The house on the hill overlooks the village', 'extra': 'be easily overlook 容易被忽略的'}], [{'id': 148, 'word': 'southern', 'pos': 'adj.', 'meaning': '南方的', 'example': '-', 'extra': '-'}, {'id': 149, 'word': 'southeast', 'pos': 'n./adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 150, 'word': 'southwest', 'pos': 'n./adj.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 151, 'word': 'northeast', 'pos': 'n./adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 152, 'word': 'northwest', 'pos': 'n./adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 153, 'word': 'eastern', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 154, 'word': 'oriental', 'pos': 'adj.', 'meaning': '东方的（尤其指中日）', 'example': 'She has studied the cultures of oriental countries', 'extra': '-'}], [{'id': 155, 'word': 'inevitable', 'pos': 'adj.', 'meaning': '必然的；不可避免的', 'example': "Such a diffcult operation may not succeed, but it's an inevitable gamble", 'extra': 'evitable adj. 可避免的'}, {'id': 156, 'word': 'irreversible', 'pos': 'adj.', 'meaning': '不可逆转的；不可挽回的', 'example': '-', 'extra': '-'}, {'id': 157, 'word': 'irregularly', 'pos': 'adv.', 'meaning': '不规则地；不合常规地', 'example': '-', 'extra': '-'}, {'id': 158, 'word': 'inappropriate', 'pos': 'adj.', 'meaning': '不合适的', 'example': '-', 'extra': '-'}, {'id': 159, 'word': 'abnormal', 'pos': 'adj.', 'meaning': '不正常的；反常的；变态的', 'example': '-', 'extra': '-'}], [{'id': 160, 'word': 'sediment', 'pos': 'n.', 'meaning': '沉积物；沉淀物', 'example': '-', 'extra': '-'}, {'id': 161, 'word': 'silt', 'pos': 'n./v.', 'meaning': '淤泥；泥沙；使淤塞', 'example': '-', 'extra': '-'}, {'id': 162, 'word': 'muddy', 'pos': 'adj.', 'meaning': '泥泞的；浑浊的', 'example': '-', 'extra': '-'}, {'id': 163, 'word': 'clay', 'pos': 'n.', 'meaning': '黏土；陶土', 'example': '-', 'extra': '-'}, {'id': 164, 'word': 'dirt', 'pos': 'n.', 'meaning': '污垢；灰尘；泥土', 'example': '-', 'extra': '-'}], [{'id': 165, 'word': 'rural', 'pos': 'adj.', 'meaning': '农村的；乡村的；田园的', 'example': '-', 'extra': '-'}, {'id': 166, 'word': 'suburb', 'pos': 'n.', 'meaning': '郊区；郊外；近郊', 'example': '-', 'extra': '-'}, {'id': 167, 'word': 'outskirt', 'pos': 'n.', 'meaning': '郊区；市郊', 'example': '-', 'extra': '-'}], [{'id': 168, 'word': 'remote', 'pos': 'adj.', 'meaning': '遥远的；偏僻的；疏远的', 'example': 'She came from a remote village', 'extra': 'a remote control 遥控器'}, {'id': 169, 'word': 'desolate', 'pos': 'adj.', 'meaning': '荒凉的', 'example': '-', 'extra': '-'}, {'id': 170, 'word': 'distant', 'pos': 'adj.', 'meaning': '疏远的；遥远的', 'example': '', 'extra': 'the distant past 遥远的过去'}, {'id': 171, 'word': 'adjacent', 'pos': 'adj.', 'meaning': '邻近的；毗连的', 'example': 'We stayed in adjacent rooms', 'extra': 'adjacent to 与...毗连的'}], [{'id': 172, 'word': 'toxic', 'pos': 'adj.', 'meaning': '有毒的', 'example': 'All medicines are toxic', 'extra': 'poisonous adj. 有毒的；toxic waste 有毒的废物；highly toxic 剧毒的'}, {'id': 173, 'word': 'pollution', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 174, 'word': 'pollutant', 'pos': 'n.', 'meaning': '污染物质', 'example': '-', 'extra': '-'}, {'id': 175, 'word': 'contaminate', 'pos': 'v.', 'meaning': '污染；弄脏', 'example': '-', 'extra': '-'}], [{'id': 176, 'word': 'geology', 'pos': 'n.', 'meaning': '地质学；地质状况', 'example': '-', 'extra': '-'}, {'id': 177, 'word': 'border', 'pos': 'n./v.', 'meaning': '边界；边界地区；镶边；和...毗邻；形成...边界', 'example': '-', 'extra': '-'}, {'id': 178, 'word': 'margin', 'pos': 'n.', 'meaning': '边缘；页边空白；余地', 'example': 'There is no margin for error in our plan', 'extra': 'allow a greater margin of 允许有更大的余地'}, {'id': 179, 'word': 'fringe', 'pos': 'n./adj.', 'meaning': '边缘；刘海；非主要的；而是次要的', 'example': "We feel it's pretty good and we also offer some good fringe benefits", 'extra': '-'}], [{'id': 180, 'word': 'plate', 'pos': 'n.', 'meaning': '板块；盘', 'example': '-', 'extra': '-'}, {'id': 181, 'word': 'debris', 'pos': 'n.', 'meaning': '碎片；残骸', 'example': '-', 'extra': '-'}, {'id': 182, 'word': 'crack', 'pos': 'v./n.', 'meaning': '破裂；发出爆裂声；裂缝；缝隙', 'example': 'The door opened just a crack', 'extra': 'cause a crack 弄出裂缝'}, {'id': 183, 'word': 'gap', 'pos': 'n.', 'meaning': '缺口；裂缝；差距；空白', 'example': '-', 'extra': '-'}], [{'id': 184, 'word': 'splendid', 'pos': 'adj.', 'meaning': '极好的；壮观的', 'example': "You're all doing a splendid job; keep up the good work", 'extra': 'a splendid chance极好的机会'}, {'id': 185, 'word': 'grand', 'pos': 'adj.', 'meaning': '宏大的；豪华的；宏伟的；极好的', 'example': '-', 'extra': '-'}, {'id': 186, 'word': 'magnificent', 'pos': 'adj.', 'meaning': '壮丽的；宏伟的；令人印象深刻的', 'example': '-', 'extra': '-'}], [{'id': 187, 'word': 'super', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 188, 'word': 'interesting', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 189, 'word': 'dramatic', 'pos': 'adj.', 'meaning': '戏剧的；引人入胜的', 'example': '-', 'extra': '-'}], [{'id': 190, 'word': 'wilderness', 'pos': 'n.', 'meaning': '荒野', 'example': '-', 'extra': '-'}, {'id': 191, 'word': 'desert', 'pos': 'n./v.', 'meaning': '沙漠；遗弃', 'example': "The baby's mother deserted him soon after giving birth", 'extra': 'a cultural desert 文化沙漠'}, {'id': 192, 'word': 'deforest', 'pos': 'v.', 'meaning': '毁掉...深林', 'example': '', 'extra': 'deforestation n. 毁林，滥伐深林'}], [{'id': 193, 'word': 'barren', 'pos': 'adj.', 'meaning': '贫瘠的；荒芜的；不结果实的', 'example': '-', 'extra': '-'}, {'id': 194, 'word': 'fertile', 'pos': 'adj.', 'meaning': '富饶的；肥沃的', 'example': '-', 'extra': '-'}, {'id': 195, 'word': 'fertilise', 'pos': 'v.', 'meaning': '=fertileze 施肥于', 'example': '-', 'extra': '-'}], [{'id': 196, 'word': 'solar', 'pos': 'adj.', 'meaning': '太阳的；日光的', 'example': '-', 'extra': '-'}, {'id': 197, 'word': 'lunar', 'pos': 'adj.', 'meaning': '月亮的；月球的', 'example': '-', 'extra': '-'}, {'id': 198, 'word': 'calendar', 'pos': 'n.', 'meaning': '日历；历法', 'example': '-', 'extra': '-'}], [{'id': 199, 'word': 'sunrise', 'pos': 'n.', 'meaning': '日出', 'example': '-', 'extra': '-'}, {'id': 200, 'word': 'sunset', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 201, 'word': 'eclipse', 'pos': 'n.', 'meaning': '日食；月食', 'example': '-', 'extra': '-'}], [{'id': 202, 'word': 'dusk', 'pos': 'n.', 'meaning': '黄昏', 'example': '-', 'extra': '-'}, {'id': 203, 'word': 'heaven', 'pos': 'n.', 'meaning': '天堂；极乐之地', 'example': '-', 'extra': '-'}, {'id': 204, 'word': 'paradise', 'pos': 'n.', 'meaning': '天堂；乐园；福地', 'example': '-', 'extra': '-'}], [{'id': 205, 'word': 'sunshine', 'pos': 'n.', 'meaning': '阳光；日光', 'example': '-', 'extra': '-'}, {'id': 206, 'word': 'shade', 'pos': 'n./v.', 'meaning': '阴影部分；背阴处；给...遮挡（光线）', 'example': '-', 'extra': '-'}, {'id': 207, 'word': 'shadow', 'pos': 'n.', 'meaning': '影子', 'example': '-', 'extra': '-'}], [{'id': 208, 'word': 'vapour', 'pos': 'n.', 'meaning': '=vapor 蒸汽；水汽', 'example': '-', 'extra': '-'}, {'id': 209, 'word': 'evaporate', 'pos': 'v.', 'meaning': '使蒸发；消失', 'example': '-', 'extra': '-'}, {'id': 210, 'word': 'circulate', 'pos': 'v.', 'meaning': '循环；流通；传播', 'example': '-', 'extra': '-'}, {'id': 211, 'word': 'precipitate', 'pos': 'v.', 'meaning': '凝结；沉淀', 'example': 'Clouds usually precipitate as rain or snow', 'extra': 'precipitation n. 沉淀；降水量；陡然下落'}], [{'id': 212, 'word': 'reservoir', 'pos': 'n.', 'meaning': '水库；蓄水池', 'example': '-', 'extra': '-'}, {'id': 213, 'word': 'waterfall', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 214, 'word': 'fountain', 'pos': 'n.', 'meaning': '喷泉；源泉', 'example': '-', 'extra': '-'}, {'id': 215, 'word': 'spring', 'pos': 'n.', 'meaning': '春天；泉水', 'example': '-', 'extra': '-'}, {'id': 216, 'word': 'dew', 'pos': 'n.', 'meaning': '露水', 'example': '-', 'extra': '-'}], [{'id': 217, 'word': 'pour', 'pos': 'v.', 'meaning': '倾泻；倒；倾盆而下', 'example': '-', 'extra': '-'}, {'id': 218, 'word': 'drain', 'pos': 'v./n.', 'meaning': '排空；流出；耗竭', 'example': '-', 'extra': '-'}, {'id': 219, 'word': 'drip', 'pos': 'v.', 'meaning': '滴出（液体）；滴下', 'example': '-', 'extra': '-'}, {'id': 220, 'word': 'drown', 'pos': 'v.', 'meaning': '淹死；浸泡', 'example': '-', 'extra': '-'}], [{'id': 221, 'word': 'blow', 'pos': 'v./n.', 'meaning': '吹；打击；挫折', 'example': '-', 'extra': '-'}, {'id': 222, 'word': 'puff', 'pos': 'v./n.', 'meaning': '喷出；喘息；（吹出的）一股；一缕', 'example': "Don't puff cigarette smoke in my face", 'extra': '-'}, {'id': 223, 'word': 'gush', 'pos': 'v./n.', 'meaning': '涌出', 'example': '', 'extra': 'gush out 涌出；喷出；gush from 从...喷出'}], [{'id': 224, 'word': 'dense', 'pos': 'adj.', 'meaning': '密集的；稠密的', 'example': '', 'extra': 'density n. 密度'}, {'id': 225, 'word': 'intensity', 'pos': 'n.', 'meaning': '强度；强烈', 'example': '-', 'extra': '-'}, {'id': 226, 'word': 'intensive', 'pos': 'adj.', 'meaning': '加强的；集中的；密集的', 'example': '', 'extra': 'intensive care unit ICU'}], [{'id': 227, 'word': 'emerge', 'pos': 'v.', 'meaning': '浮现；露出；暴露；摆脱出来', 'example': '-', 'extra': '-'}, {'id': 228, 'word': 'flash', 'pos': 'v./n.', 'meaning': '', 'example': '', 'extra': "flash through sb.'s mind 闪过某人脑海"}, {'id': 229, 'word': 'float', 'pos': 'v.', 'meaning': '', 'example': '-', 'extra': '-'}], [{'id': 230, 'word': 'environment', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 231, 'word': 'surrounding', 'pos': 'adj.', 'meaning': '周围的；附近的', 'example': '-', 'extra': '-'}, {'id': 232, 'word': 'condition', 'pos': 'n.', 'meaning': '条件；情况；状态', 'example': '-', 'extra': '-'}, {'id': 233, 'word': 'situation', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}], [{'id': 234, 'word': 'nature', 'pos': 'n.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 235, 'word': 'natural', 'pos': 'adj.', 'meaning': '-', 'example': '-', 'extra': '-'}, {'id': 236, 'word': 'artificial', 'pos': 'adj.', 'meaning': '人造的', 'example': '-', 'extra': '-'}, {'id': 237, 'word': 'synthetic', 'pos': 'adj.', 'meaning': '人造的；合成的', 'example': 'Nylon is a synthetic material; it is not from nature', 'extra': '-'}], [{'id': 238, 'word': 'petrol', 'pos': 'n.', 'meaning': '[英]汽油', 'example': '-', 'extra': '-'}, {'id': 239, 'word': 'gas', 'pos': 'n.', 'meaning': '气体；[美]汽油', 'example': '-', 'extra': '-'}, {'id': 240, 'word': 'gasoline', 'pos': 'n.', 'meaning': '[美]汽油', 'example': '-', 'extra': '-'}, {'id': 241, 'word': 'petroleum', 'pos': 'n.', 'meaning': '石油', 'example': 'Petroleum is an important natural resource', 'extra': 'petrology n. 岩石学'}]]}, '植物研究': {'label': '植物研究', 'words': [[{'id': 242, 'word': 'photosynthesis', 'pos': 'n.', 'meaning': '光合作用', 'example': '-', 'extra': '-'}, {'id': 243, 'word': 'respire', 'pos': 'v.', 'meaning': '呼吸', 'example': '-', 'extra': '-'}, {'id': 244, 'word': 'dioxide', 'pos': 'n.', 'meaning': '二氧化物', 'example': '-', 'extra': '-'}]]}, '动物保护': {'label': '动物保护', 'words': [[{'id': 245, 'word': 'biologist', 'pos': 'n.', 'meaning': '生物学家', 'example': '-', 'extra': '-'}, {'id': 246, 'word': 'zoologist', 'pos': 'n.', 'meaning': '动物学家', 'example': '-', 'extra': '-'}, {'id': 247, 'word': 'ecologist', 'pos': 'n.', 'meaning': '生态学家', 'example': '-', 'extra': '-'}, {'id': 248, 'word': 'botanist', 'pos': 'n.', 'meaning': '植物学家', 'example': '-', 'extra': '-'}]]}}
