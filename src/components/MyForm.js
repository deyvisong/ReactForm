import "./MyForm.css";

const MyForm = () => {
  return (
    <div>
      {/* 1 - Form creation */}
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Insert your name" />
        </div>
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" placeholder="Insert your email" />
        </label>
        <input className="buttondek" type="submit" value="Register!" />
      </form>
    </div>
  );
};

export default MyForm;
