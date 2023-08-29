const NewPost = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.country.value);
        props.onNewPostData(event.target.country.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Country:
                <input type="text" name="country" />
            </label>
            <br></br>
            <input type="submit" value="Add" />
        </form>
    );
}

export default NewPost;