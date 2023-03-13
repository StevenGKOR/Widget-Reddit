const App = () => {
  const initialSubreddits = Array.from(
    document.querySelectorAll('.single-widget')
  ).map((widget) => widget.dataset.subreddit);
  const [subreddits, setSubreddits] = React.useState(initialSubreddits);
  
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