from pathlib import Path
from collections import defaultdict
from urllib import request

CUR_DIR = Path(__file__).absolute().parent


def parse():
    part_mapping = {
        0: 'word',
        1: 'pos',
        2: 'meaning',
        3: 'example',
        4: 'extra',
    }
    result = defaultdict(lambda: {'label': '', 'audio': '', 'words': []})
    vocabulary_path = CUR_DIR / 'vocabulary.txt'
    contents = vocabulary_path.read_text()
    categories = contents.split('===\n')
    cur_id = 0
    category_index = 0
    for category in categories:
        category_index += 1
        category_parts = category.split('+++\n')
        label = category_parts[0].strip()
        category_body = result[label]
        category_body['label'] = label
        category_body['audio'] = f"{str(category_index).zfill(2)}_{label}.mp3"
        word_groups = category_parts[1].split('---\n')
        for word_group in word_groups:
            words = word_group.strip().split('\n')
            group = []
            for word in words:
                cur_id += 1
                word_parts = word.split('|')
                word_dict = {'id': cur_id}
                for part_index in part_mapping:
                    dict_key = part_mapping[part_index]
                    word_dict[dict_key] = word_parts[part_index] if part_index < len(
                        word_parts) else '-'
                group.append(word_dict)
            category_body['words'].append(group)
    
    js_code = f"""/**
         * pos = part of speech
         */

        const vocabulary = {dict(result).__str__()}
"""
    vocabulary_js_file = CUR_DIR / 'vocabulary.js'
    vocabulary_js_file.write_text(js_code)


def download_audio():
    names = ['01_自然地理', '02_植物研究', '03_动物保护', '04_太空探索', '05_学校教育', '06_科技发明', '07_文化历史', '08_语言演化', '09_娱乐运动', '10_物品材料', '11_时尚潮流',
             '12_饮食健康', '13_建筑场所', '14_交通旅行', '15_国家政府', '16_社会经济', '17_法律法规', '18_沙场争锋', '19_社会角色', '20_行为动作', '21_身心健康', '22_时间日期']

    for index in range(22):
        url = f"https://down.guixue.com/mp3/ielts_lexicon/{index + 1}.mp3"
        file_name, headers = request.urlretrieve(url)
        Path(file_name).rename(CUR_DIR / f'audio/{names[index]}.mp3')


if __name__ == '__main__':
    # download_audio()
    parse()
    pass
