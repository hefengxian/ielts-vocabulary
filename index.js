const { createApp, reactive, computed, ref } = Vue

const opts = {
    setup() {
        const keyword = ref('')
        const wordList = computed(() => {
            let result = structuredClone(vocabulary)    // deep clone
            const keywordValue = keyword.value.trim()
            if (keywordValue != '') {
                for (let key in result) {
                    let category = result[key]
                    category.words = category.words.filter(item => {
                        return item.word.includes(keywordValue)
                    })
                }
            }
            return result
        })
        return {
            keyword,
            wordList,
        }
    }
}

createApp(opts).mount('#app')