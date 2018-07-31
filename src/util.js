import uuid from 'uuid'

export const randomBoolen = () => {
    return Math.round(Math.random());
}

export const createDataList = () => {
    let i = 0
    let len = 10
    const list = []

    for(; i < len; i++){
        list.push({
            id: uuid(),
            text: uuid()
        })
    }

    return list
}