function Head(props) {
    return(
        <head>
            <title>{props.title}</title>
            <metakeywords>{props.meta}</metakeywords>
            <p>{props.domain}</p>
        </head>
    )
}

export default Head