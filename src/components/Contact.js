const Contact = () => {
  return (
    <div>
      <h1 className="p-2 m-2 font-bold text-xl text-center">
        Contact Us Page!!
      </h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="name"
            className=" border rounded-md p-1 mx-1"
          />
          <input
            type="text"
            placeholder="email"
            className=" border rounded-md p-1 mx-1"
          />
          <button className=" border rounded-md p-1 mx-1 bg-blue-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
