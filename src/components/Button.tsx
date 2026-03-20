 export default function Button(props) {
    const {children, ...otherProps} = props;
    return <button {...otherProps}>{children}</button>
 }
