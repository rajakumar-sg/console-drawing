export const decorate = (f) => {
    return (arg) => {
        console.log('Start')
        f(arg);
        console.log('End')
    }
}