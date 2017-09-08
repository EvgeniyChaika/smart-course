export default function headerActions(index) {
    console.log(index);
    return {
        type: 'ACTIVE_BUTTON',
        activeIndex: index
    };
}
