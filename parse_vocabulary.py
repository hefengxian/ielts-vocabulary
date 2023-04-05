from pathlib import Path
from collections import defaultdict

CUR_DIR = Path(__file__).absolute().parent


def parse():
    part_mapping = {
        0: 'word',
        1: 'pos',
        2: 'meaning',
        3: 'example',
        4: 'extra',
    }
    result = defaultdict(lambda: {'label': '', 'words': []})
    vocabulary_path = CUR_DIR / 'vocabulary.txt'
    contents = vocabulary_path.read_text()
    categories = contents.split('===\n')
    cur_id = 0
    for category in categories:
        category_parts = category.split('+++\n')
        label = category_parts[0].strip()
        category_body = result[label]
        category_body['label'] = label
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
                    word_dict[dict_key] = word_parts[part_index] if part_index < len(word_parts) else '-'
                group.append(word_dict)
            category_body['words'].append(group)
    return dict(result)


if __name__ == '__main__':
    js_code = f"""/**
 * pos = part of speech
 */

const vocabulary = {parse().__str__()}
"""
    vocabulary_js_file = CUR_DIR / 'vocabulary.js'
    vocabulary_js_file.write_text(js_code)
