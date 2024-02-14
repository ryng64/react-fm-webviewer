function FmCount({ count }) {
  const msg = {
    message: `the total count is ${count}`,
  };

  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            FileMaker.PerformScript("callFromWeb", `count is ${count}`);
          }}
        >
          Perform Script Message {count}
        </button>
      </div>
      <div className="card">
        <button
          onClick={() => {
            FileMaker.PerformScript("callFromWeb", JSON.stringify(msg));
          }}
        >
          {`Perform Script { Message : ${count} }`}
        </button>
      </div>
    </>
  );
}

export default FmCount;
