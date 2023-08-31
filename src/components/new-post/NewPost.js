const NewPost = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onNewPostData({
            "name": event.target.name.value,
            "image": event.target.image.value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Country:
                <input type="text" name="name" />
            </label>
            <label>
            Image url:
                <input type="text" name="image" />
            </label>
            <br></br>
            <input type="submit" value="Add" />
        </form>
    );
}

export default NewPost;