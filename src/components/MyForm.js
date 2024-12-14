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
        <input className="buttondek" type="submit" value="Register!" />
      </form>
    </div>
  );
};

export default MyForm;
