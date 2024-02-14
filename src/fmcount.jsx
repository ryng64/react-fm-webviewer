function FmCount({ count }) {
  const msg = {
    message: `the total count is ${count}`,
  };

  //Both buttons call a fileMaker Script. Only 1 parameter can be passed and Objects (eg msg) need to be "stringified" before being passed.
  //Use FileMakers JSONGetElement() functions to access JSON parameters from JavaScript.
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
