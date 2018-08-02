import uuid from 'uuid'

export const randomBoolen = () => {
    return Math.round(Math.random());
}

export const setScrollTop = (scrollTop) => {
    document.documentElement.scrollTop = scrollTop + 'px'
    window.pageYOffset = scrollTop + 'px'
    document.body.scrollTop = scrollTop + 'px'
}

export const getScrollTop = () => {
    let scrollTop = document.documentElement.scrollTop 
        || window.pageYOffset 
        || document.body.scrollTop;

    scrollTop = parseInt(scrollTop)
    return scrollTop
}

export const createDataList = (index = uuid()) => {
    let i = 0
    let len = 10
    const list = []

    for(; i < len; i++){
        list.push({
            id: uuid(),
            text: uuid(),
            index: index + i
        })
    }

    return list
}