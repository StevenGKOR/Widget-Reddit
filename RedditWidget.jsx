const RedditWidget = (props) => {
  const [posts, setPosts] = React.useState([]);
  const [noPostsMessageVisible, setNoPostsMessageVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchData()
  }, [props.subreddit]);

  const fetchData = async () => {
    setLoading(true)
    await fetch(`https://www.reddit.com/r/${props.subreddit}/new.json?limit=5`)
      .then(response => response.json())
      .then(data => {
        const fetchedPosts = data.data.children.map(child => child.data);
        if (fetchedPosts.length) {
          setPosts(fetchedPosts);
          setNoPostsMessageVisible(false);
        } else {
          setPosts([]);
          setNoPostsMessageVisible(true);
        }
        setLoading(false)
      })
      .catch(error => {
        console.error(error);
        setPosts([]);
        setNoPostsMessageVisible(true);
        setLoading(false)
      });
  }


  return (
    <div className="single-wigdet">
      {noPostsMessageVisible ? <p className="error-text">No posts found for {props.subreddit}.</p> : <h2>Latest posts from r/{props.subreddit}</h2>}
      {isLoading ? (
        <p>Loading Widgets</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href={`https://www.reddit.com${post.permalink}`} target="_blank">{post.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}