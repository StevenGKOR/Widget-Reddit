const App = () => {
    const [subreddits, setSubreddits] = React.useState([]);
  
    const handleAddWidget = (subreddit) => setSubreddits([...subreddits, subreddit]);
  
    return (
      <div>
        <WidgetCreator onAddWidget={handleAddWidget} />
        <div id="widgets">
          {subreddits.map(subreddit => (
            <RedditWidget key={subreddit} subreddit={subreddit} />
          ))}
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));