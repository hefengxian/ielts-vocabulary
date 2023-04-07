const { createApp, reactive, computed, ref } = Vue

const opts = {
    setup() {
        const keyword = ref('')
        const category = ref('')
        const wordList = computed(() => {
            let result = structuredClone(vocabulary)    // deep clone
            const keywordValue = keyword.value.trim().toLowerCase()
            const categoryValue = category.value

            if (categoryValue != '') {
                for (let key in result) {
                    if (key !== categoryValue) {
                        delete result[key]
                    }
                }
            }

            if (keywordValue != '') {
                for (let key in result) {
                    let category = result[key]
                    const words = []
                    category.words.forEach(group => {
                        words.push(group.filter(item => {
                            return item.word.toLowerCase().includes(keywordValue)
                        }))
                    })
                    category.words = words
                }
            }
            return result
        })
        return {
            keyword,
            wordList,
            vocabulary,
            category,
        }
    }
}

createApp(opts).mount('#app')