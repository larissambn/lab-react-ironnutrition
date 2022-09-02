function HideForm() {
  const [show, SetShow] = useState(true);
  return(
  <div />
  {show ? <form /> : null;});

  <button.onClick id="hideShow" {...() => SetShow(!show)}>
    {' '}
    Add Form{' '}
  </button.onClick>;
}

function ButtonText() {
  const [buttonText, setButtonText] = useState('Add Form');

  const handleClick = () => {
    setButtonText('Hide');
  };

  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default HideForm;
