const WidgetCreator = (props) => {
  const [subreddit, setSubreddit] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddWidget(subreddit);
    setSubreddit('');
  };

  return (
    <form onSubmit={handleSubmit} className='widget-form'>
      <label>
        Subreddit:
        <input type="text" value={subreddit} onChange={(e) => setSubreddit(e.target.value)} className='form-input'/>
      </label>
      <button type="submit" className='btn'>Add Widget</button>
    </form>
  );
};