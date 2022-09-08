function setDefaults(defaultProps) {
    return function (props) {
        return {
            ...defaultProps,
            ...props
        }
    }
}