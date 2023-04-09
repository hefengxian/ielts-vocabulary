const { createApp, reactive, computed, ref, onMounted, onUpdated } = Vue

const opts = {
    setup() {
        const keyword = ref('')
        const category = ref('')
        const loaded = ref(false)
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

        onMounted(() => {
            loaded.value = true

            // 只能同时播放一个音频
            const audioTags = document.getElementsByTagName('audio')
            for (let audio of audioTags) {
                audio.onplay = () => {
                    for (let _audio of audioTags) {
                        _audio.blur()
                        if (audio != _audio) {
                            _audio.pause()
                        }
                    }
                }
            }

        })

        onUpdated(() => {
            // 音频再切换 SRC 之后需要调用一下 load() 不然看不到效果
            for (let el of document.getElementsByTagName('audio')) {
                el.load()
            }
        })

        document.addEventListener('keyup', ev => {
            // 激活的那个音频可以通过方向键进行快进/退
            if (['ArrowLeft', 'ArrowRight'].includes(ev.key)) {
                ev.preventDefault()
                const audioTags = document.getElementsByTagName('audio')
                for (let audioTag of audioTags) {
                    if (!audioTag.paused) {
                        audioTag.blur()
                        const step = (ev.key === 'ArrowLeft' ? -3 : 3)
                        audioTag.currentTime = audioTag.currentTime + step 
                        // console.log(step, audioTag.currentTime)
                    }

                }
            }
        })
 
        return {
            keyword,
            wordList,
            vocabulary,
            category,
            loaded,
        }
    }
}

createApp(opts).mount('#app')