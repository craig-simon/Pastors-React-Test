export const setIndex = (loadedAmount: number, obj: any) => {
    Object.keys(obj.contacts).forEach((key, index) => {
        obj.contacts[key].index = index + loadedAmount
    })
}